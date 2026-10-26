import { approvedArtContent as facts, approvedArtEvidence as evidence, retainedGenreSelections } from '../../../data/activeArtContent';
import { activeRegisteredConcepts, activeSemanticContext as context } from '../contentSnapshot';
import { createSemanticContext } from '../semanticValidation';
import { buildQuizResult, quizCompositionViolations } from '../buildQuiz';
import { getExerciseCapabilities, generateExercise } from '../exerciseFactory';
import { exerciseValidityViolations } from '../generationCoverage';

const genres = facts.filter(c => ['genre_of_novel', 'genre_of_play'].includes(c.relation));
const poolFor = (c: typeof facts[number]) => genres.filter(o => o.subtopicId === c.subtopicId && o.levelId === c.levelId && o.partId === c.partId);

test('optional pending history is unused: verified-only evidence gives identical decisions and genre quizzes', () => {
  const pendingIds = new Set(evidence.filter(e => e.reviewStatus !== 'verified').map(e => e.id));
  expect(pendingIds.size).toBe(58); // Explicit quarantine inventory, not editorial certification.
  for (const c of [...facts, ...retainedGenreSelections]) for (const id of c.assessment?.evidenceIds ?? []) {
    expect(pendingIds.has(id)).toBe(false);
    expect(context.evidenceForId(id)?.reviewStatus).toBe('verified');
  }
  const verifiedOnly = createSemanticContext(activeRegisteredConcepts(), {
    policies: context.policies, evidence: evidence.filter(e => e.reviewStatus === 'verified'), images: context.images,
  });
  for (const c of genres) for (const other of genres.filter(o => o.relation === c.relation)) {
    const decision = context.evaluate(c, other);
    expect(decision).toEqual(verifiedOnly.evaluate(c, other));
    for (const id of decision.evidenceIds ?? []) expect(context.evidenceForId(id)?.reviewStatus).toBe('verified');
  }
  for (const [subtopicId, levelId] of [['literature', 'l1'], ['literature', 'l5'], ['theatre', 'l1'], ['theatre', 'l5']]) {
    const pool = genres.filter(c => c.subtopicId === subtopicId && c.levelId === levelId);
    for (const variant of ['A', 'B', 'C'] as const) {
      const request = { concepts: pool, variant, seed: 'pending-history-is-unused' };
      const result = buildQuizResult({ ...request, context });
      expect(result.status).toBe('ready');
      expect(buildQuizResult({ ...request, context: verifiedOnly })).toEqual(result);
    }
  }
});

test('pending evidence cannot qualify an anchor or a required incorrect option', () => {
  const target = genres.find(c => c.id === 'art_literature_l1_p2_frankenstein')!;
  const pool = poolFor(target);
  const pendingAnchors = createSemanticContext(activeRegisteredConcepts(), {
    policies: context.policies,
    evidence: evidence.map(e => target.assessment!.evidenceIds.includes(e.id) ? { ...e, reviewStatus: 'pending' as const } : e),
  });
  expect(pendingAnchors.evaluate(target, target).verdict).toBe('unknown');
  const anchorCaps = getExerciseCapabilities(target, pool, pendingAnchors);
  for (const form of ['mcq', 'true', 'false', 'blank_options', 'blank_typed'] as const) {
    expect(anchorCaps.forms[form].available).toBe(false);
    expect(generateExercise(target, anchorCaps, form, pendingAnchors, 'pending-anchor').status).toBe('unavailable');
  }
  // Quarantine all negatives in an isolated snapshot: no missing comparison
  // may silently become false, and otherwise-ready quizzes must fail closed.
  const pendingNegatives = createSemanticContext(activeRegisteredConcepts(), {
    policies: context.policies,
    evidence: evidence.map(e => e.kind === 'assertion' && e.verdict === 'invalid' ? { ...e, reviewStatus: 'pending' as const } : e),
  });
  const caps = getExerciseCapabilities(target, pool, pendingNegatives);
  expect(caps.forms.true.available).toBe(true);
  for (const form of ['mcq', 'false', 'blank_options'] as const) {
    expect(caps.forms[form].available).toBe(false);
    expect(generateExercise(target, caps, form, pendingNegatives, 'pending-negatives').status).toBe('unavailable');
  }
  expect(buildQuizResult({ concepts: pool, context: pendingNegatives, variant: 'A', seed: 'pending-required' }).status).toBe('insufficient-content');
});

test('the three explicit judgment-only limitations remain safe and do not waive joint quiz requirements', () => {
  const expected: Record<string, string> = {
    art_literature_l1_p2_moonstone: 'Science fiction',
    'art_theatre_l1_p2_dolls-house': 'Comedy',
    art_theatre_l1_p2_tempest: 'Realist drama',
  };
  const limited = genres.filter(c => !getExerciseCapabilities(c, poolFor(c), context).forms.mcq.available);
  expect(limited.map(c => c.id).sort()).toEqual(Object.keys(expected).sort());
  for (const c of limited) {
    const pool = poolFor(c), caps = getExerciseCapabilities(c, pool, context);
    expect(caps.optionCandidates.map(o => o.object)).toEqual([expected[c.id]]);
    for (const form of ['true', 'false'] as const) {
      expect(caps.forms[form].available).toBe(true);
      const result = generateExercise(c, caps, form, context, 'safe-judgment-only');
      expect(result.status).toBe('generated');
      if (result.status === 'generated') expect(exerciseValidityViolations(result.exercise, pool, context)).toEqual([]);
    }
    for (const form of ['mcq', 'blank_options', 'blank_typed'] as const) {
      expect(caps.forms[form].available).toBe(false);
      expect(generateExercise(c, caps, form, context, 'no-forced-retrieval').status).toBe('unavailable');
    }
    let assessed = false;
    for (const variant of ['A', 'B', 'C'] as const) {
      const result = buildQuizResult({ concepts: pool, context, variant, seed: 'judgment-only-joint-quotas' });
      expect(result.status).toBe('ready');
      expect(quizCompositionViolations(result.exercises, variant)).toEqual([]);
      for (const ex of result.exercises) {
        expect(exerciseValidityViolations(ex, pool, context)).toEqual([]);
        if (ex.type !== 'matching' && ex.conceptId === c.id) {
          assessed = true;
          expect(ex.type).toBe('true_false');
        }
      }
    }
    expect(assessed).toBe(true);
  }
});
