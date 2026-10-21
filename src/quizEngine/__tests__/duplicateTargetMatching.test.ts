import { createHash } from 'node:crypto';
import type { Concept, MatchingExercise, MatchingPair } from '../conceptTypes';
import { gradeMatchingAssignment, isMatchingPairCorrect } from '../answerValidation';
import { attemptMatchingPair, type MatchingInteraction } from '../matchingInteraction';
import { certifiedFixtureContext } from '../testSupport/certifiedFixtures';
import { createSemanticContext } from '../semanticValidation';
import { targetRelationPolicies, legacyRelationPolicy } from '../relationPolicies';
import { relationDefinitions } from '../relationCatalogue';
import { generateMatchingExercise } from '../exerciseFactory';
import { hasIndistinguishableAnswers, isPermanentlyLockable } from '../matchingSafety';
import { buildQuizResult, prepareQuizSession, quizCompositionViolations } from '../buildQuiz';
import { catalogCoverageCases, exerciseValidityViolations } from '../generationCoverage';
import { TOPIC_BY_ID } from '../../../data/catalog';
import { ACTIVE_CONCEPT_SETS, activeSemanticContext } from '../contentSnapshot';
import developmentImages from '../../images/developmentRegistry.generated.json';
import type { RuntimeImageRegistry } from '../../images/types';
import baseline from './fixtures/completedArtMatchingBaseline.json';

const records = (answers = ['Shared', 'Shared', 'Second', 'Third'], relation = 'painted_by'): Concept[] =>
  answers.map((object, i) => ({ id: `fixture-${i}`, subject: `Fixture subject ${i}`, object, relation,
    topicId: 'science', subtopicId: 'fixture', levelId: 'l1', partId: 'p1',
    answerKind: 'short', difficulty: 1, introducedIn: 'A',
    learning: { reinforcementPriority: 3, rationale: 'Synthetic fixture priority' } }));
const flaggedContext = (pool: Concept[]) => {
  const certified = certifiedFixtureContext(pool);
  return createSemanticContext(pool, { policies: Object.fromEntries(Object.entries(certified.policies)
    .map(([id, policy]) => [id, { ...policy, allowDuplicateTargetAnswers: true }])) });
};
const generated = (pool: Concept[], seed = 'duplicate', context = flaggedContext(pool)): MatchingExercise => {
  const result = generateMatchingExercise(pool, seed, context);
  expect(result.status).toBe('generated');
  if (result.status !== 'generated') throw new Error(result.reason);
  return result.exercise;
};

// Prerequisite: run against the unchanged generator and grading implementation.
test('existing identity grading accepts interchangeable cards and permanently locks each physical card', () => {
  const pairs: MatchingPair[] = ['shared', 'shared', 'second', 'third'].map((answerIdentity, i) => ({
    id: `pair-${i}`, left: `Subject ${i}`, right: answerIdentity,
    answerIdentity, acceptedAnswerIdentities: [answerIdentity],
  }));
  for (const ordering of [[0, 1, 2, 3], [1, 0, 2, 3]]) {
    const rights = ordering.map(i => pairs[i]);
    for (const left of [0, 1]) for (const right of [0, 1]) {
      expect(isMatchingPairCorrect(pairs[left], rights[right])).toBe(true);
    }
    let state: MatchingInteraction = { locked: {} };
    state = attemptMatchingPair(state, pairs, rights, 0, 1);
    expect(state).toEqual({ locked: { 0: 1 } });
    expect(attemptMatchingPair(state, pairs, rights, 1, 1)).toBe(state);
    expect(attemptMatchingPair(state, pairs, rights, 0, 0)).toBe(state);
    state = attemptMatchingPair(state, pairs, rights, 1, 0);
    expect(state.locked).toEqual({ 0: 1, 1: 0 });
    state = attemptMatchingPair(state, pairs, rights, 2, 2);
    state = attemptMatchingPair(state, pairs, rights, 3, 3);
    expect(gradeMatchingAssignment(pairs, rights, state.locked)).toBe(true);
    expect(gradeMatchingAssignment(pairs, rights, { 0: 0, 1: 1, 2: 2, 3: 3 })).toBe(true);
    expect(gradeMatchingAssignment(pairs, rights, { 0: 0, 1: 0, 2: 2, 3: 3 })).toBe(false);
    expect(attemptMatchingPair({ locked: {} }, pairs, rights, 0, 2)).toEqual({ locked: {}, wrong: { left: 0, right: 2 } });
  }
});

test('only the two reviewed opt-ins enable duplicate targets in the production policies', () => {
  expect(Object.keys(targetRelationPolicies).filter(id => targetRelationPolicies[id].allowDuplicateTargetAnswers).sort()).toEqual(['genre_of_novel', 'genre_of_play']);
  for (const relation of ['genre_of_novel', 'genre_of_play']) {
    expect(relationDefinitions[relation]).toBeDefined();
    expect(targetRelationPolicies[relation]).toMatchObject({ semanticStrategy: 'reviewed-evidence', allowDuplicateTargetAnswers: true });
  }
  expect(legacyRelationPolicy.allowDuplicateTargetAnswers).toBeUndefined();
});

test('certified duplicates generate identical interchangeable cards and pass both real validators', () => {
  const pool = records();
  const context = flaggedContext(pool);
  const exercise = generated(pool, 'duplicate', context);
  expect(exercise.pairs).toHaveLength(4);
  const duplicates = exercise.pairs.filter(p => p.right === 'Shared');
  expect(duplicates).toHaveLength(2);
  expect(duplicates[0].id).not.toBe(duplicates[1].id);
  expect(duplicates[0].answerIdentity).toBe(duplicates[1].answerIdentity);
  expect(duplicates[0].acceptedAnswerIdentities).toEqual(duplicates[1].acceptedAnswerIdentities);
  expect(exerciseValidityViolations(exercise, pool, context)).toEqual([]);
  // Six ordinary facts let the joint planner supply the unchanged full composition.
  const six = records(['Shared', 'Shared', 'Second', 'Third', 'Fourth', 'Fifth']);
  const sixContext = flaggedContext(six);
  const quiz = buildQuizResult({ concepts: six, context: sixContext, variant: 'A', seed: 'composition' });
  expect(quiz.status).toBe('ready');
  expect(quizCompositionViolations([exercise, ...quiz.exercises.filter(e => e.type !== 'matching')], 'A')).toEqual([]);
  for (const rights of [exercise.pairs, [...exercise.pairs].reverse()]) {
    let state: MatchingInteraction = { locked: {} };
    for (let left = 0; left < exercise.pairs.length; left++) {
      const right = rights.findIndex((card, i) => !Object.values(state.locked).includes(i) && isMatchingPairCorrect(exercise.pairs[left], card));
      const next = attemptMatchingPair(state, exercise.pairs, rights, left, right);
      expect(next.locked[left]).toBe(right);
      expect(attemptMatchingPair(next, exercise.pairs, rights, (left + 1) % 4, right)).toBe(next);
      state = next;
    }
    expect(gradeMatchingAssignment(exercise.pairs, rights, state.locked)).toBe(true);
  }
  const wrong = exercise.pairs.findIndex(p => p.answerIdentity !== exercise.pairs[0].answerIdentity);
  expect(attemptMatchingPair({ locked: {} }, exercise.pairs, exercise.pairs, 0, wrong)).toEqual({ locked: {}, wrong: { left: 0, right: wrong } });
});

test('all 4096 reflexive four-card patterns are lockable exactly for the 15 equivalence partitions', () => {
  const offDiagonal = Array.from({ length: 4 }, (_, i) => Array.from({ length: 4 }, (_, j) => [i, j])).flat().filter(([i, j]) => i !== j);
  let lockable = 0;
  for (let bits = 0; bits < 4096; bits++) {
    const matrix = Array.from({ length: 4 }, (_, i) => Array.from({ length: 4 }, (_, j) => i === j));
    offDiagonal.forEach(([i, j], bit) => { matrix[i][j] = !!(bits & (1 << bit)); });
    const partition = matrix.every((row, i) => row.every((cell, j) => cell === matrix[j][i] &&
      (!cell || matrix[j].every((next, k) => !next || matrix[i][k]))));
    expect(isPermanentlyLockable(matrix)).toBe(partition);
    if (partition) lockable++;
  }
  expect(lockable).toBe(15);
});

test('many seeded outputs have at least three targets and only same-identity valid cells', () => {
  const pool = records(['Shared', 'Shared', 'Second', 'Third', 'Fourth', 'Fifth']);
  const context = flaggedContext(pool);
  const outputs = new Set<string>();
  for (let seed = 0; seed < 100; seed++) {
    const exercise = generated(pool, `partition:${seed}`, context);
    expect(generated(pool, `partition:${seed}`, context)).toEqual(exercise);
    outputs.add(JSON.stringify(exercise));
    expect(new Set(exercise.pairs.map(p => p.answerIdentity)).size).toBeGreaterThanOrEqual(3);
    const matrix = exercise.pairs.map(left => exercise.pairs.map(right => {
      const verdict = context.evaluate(pool.find(c => c.id === left.id)!, pool.find(c => c.id === right.id)!).verdict;
      expect(verdict).toBe(left.answerIdentity === right.answerIdentity ? 'valid' : 'invalid');
      return verdict === 'valid';
    }));
    expect(isPermanentlyLockable(matrix)).toBe(true);
    expect(exerciseValidityViolations(exercise, pool, context)).toEqual([]);
  }
  expect(outputs.size).toBeGreaterThan(1);
});

test.each([false, true])('cross-target overlap, reciprocal=%s, never enters a flagged quartet', reciprocal => {
  const pool = records(['First', 'Second', 'Third', 'Fourth']);
  pool[0].semantic = { acceptedAnswers: [{ text: 'Second' }] };
  if (reciprocal) pool[1].semantic = { acceptedAnswers: [{ text: 'First' }] };
  const context = flaggedContext(pool);
  expect(context.evaluate(pool[0], pool[1]).verdict).toBe('valid');
  expect(context.evaluate(pool[1], pool[0]).verdict).toBe(reciprocal ? 'valid' : 'invalid');
  for (let seed = 0; seed < 20; seed++) expect(generateMatchingExercise(pool, `overlap:${seed}`, context).status).toBe('unavailable');
});

test('a needed unknown cross-cell fails closed', () => {
  const pool = records();
  const certified = flaggedContext(pool);
  const context = createSemanticContext(pool, { policies: { painted_by: {
    ...certified.policies.painted_by, strategyMetadata: { scheme: 'test-missing-value', exclusive: true, values: ['Shared', 'Second'] },
  } } });
  expect(context.evaluate(pool[0], pool[3]).verdict).toBe('unknown');
  for (let seed = 0; seed < 20; seed++) expect(generateMatchingExercise(pool, `unknown:${seed}`, context).status).toBe('unavailable');
});

test.each([['Shared', 'Shared', 'Shared', 'Second'], ['Shared', 'Shared', 'Second', 'Second'], ['Shared', 'Shared', 'Shared', 'Shared']])('rejects degenerate targets %j', (...answers) => {
  const pool = records(answers);
  expect(generateMatchingExercise(pool, 'degenerate', flaggedContext(pool)).status).toBe('unavailable');
});

test('same identity with different displayed text is not paired', () => {
  const pool = records(['Shared', 'Alias', 'Second', 'Third']);
  pool[0].semantic = { value: { id: 'shared', aliases: ['Alias'] } };
  pool[1].semantic = { value: { id: 'shared', aliases: ['Shared'] } };
  const context = flaggedContext(pool);
  expect(context.claim(pool[0]).answer.identity).toBe(context.claim(pool[1]).answer.identity);
  expect(context.evaluate(pool[0], pool[1]).verdict).toBe('valid');
  expect(generateMatchingExercise(pool, 'different-display', context).status).toBe('unavailable');
});

test('indistinguishable text is exempt only for a defined common identity and identical accepted sets', () => {
  const a: MatchingPair = { left: 'One', right: ' Same  text ', answerIdentity: 'shared', acceptedAnswerIdentities: ['shared', 'other'] };
  const b: MatchingPair = { left: 'Two', right: 'Same text', answerIdentity: 'shared', acceptedAnswerIdentities: ['other', 'shared', 'shared'] };
  expect(hasIndistinguishableAnswers([a, b])).toBe(false);
  expect(hasIndistinguishableAnswers([{ ...a, acceptedAnswerIdentities: undefined }, { ...b, acceptedAnswerIdentities: [] }])).toBe(false);
  for (const bad of [{ ...b, answerIdentity: 'different' }, { ...b, answerIdentity: undefined }, { ...b, acceptedAnswerIdentities: ['shared'] }]) {
    expect(hasIndistinguishableAnswers([a, bad])).toBe(true);
    expect(quizCompositionViolations([{ type: 'matching', prompt: 'Match', pairs: [a, bad] }], 'A')).toContain('Matching answers must be visibly distinct');
  }
  expect(hasIndistinguishableAnswers([{ ...a, answerIdentity: undefined }, { ...b, answerIdentity: undefined }])).toBe(true);
});

test.each(['created_in_decade', 'painted_by'])('unflagged %s keeps duplicate fixtures unavailable and only distinct cards', relation => {
  const pool = records(undefined, relation);
  expect(generateMatchingExercise(pool, 'duplicate', certifiedFixtureContext(pool)).status).toBe('unavailable');
  const extended = [...pool, ...records(['Fourth'], relation).map(c => ({ ...c, id: 'extra', subject: 'Extra subject' }))];
  const context = certifiedFixtureContext(extended);
  for (let seed = 0; seed < 20; seed++) {
    const result = generateMatchingExercise(extended, `unflagged:${seed}`, context);
    expect(result.status).toBe('generated');
    if (result.status === 'generated') expect(new Set(result.exercise.pairs.map(p => p.right)).size).toBe(4);
  }
});

test('completed Art matching is byte-identical to all 1800 pre-change payload hashes', () => {
  const context = activeSemanticContext.withImages(developmentImages as unknown as RuntimeImageRegistry);
  const cases = catalogCoverageCases({ ...TOPIC_BY_ID.art, subtopics: TOPIC_BY_ID.art.subtopics.filter(s => baseline.subtopics.includes(s.id)) }, ACTIVE_CONCEPT_SETS);
  expect(cases).toHaveLength(baseline.cases);
  const hashes: Record<string, string> = {};
  for (const entry of cases) {
    const session = prepareQuizSession({ ...entry, context });
    for (const fixed of baseline.seeds) {
      const seed = `${entry.id}:${entry.variant}:${fixed}`;
      const result = buildQuizResult({ ...entry, context, session, seed });
      expect(result.status).toBe('ready');
      const matching = result.exercises.filter(e => e.type === 'matching');
      expect(matching).toHaveLength(1);
      hashes[seed] = createHash('sha256').update(JSON.stringify(matching[0])).digest('hex');
    }
  }
  expect(hashes).toEqual(baseline.hashes);
}, 300000);
