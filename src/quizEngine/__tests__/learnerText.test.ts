import { approvedArtContent } from '../../../data/activeArtContent';
import { activeSemanticContext as context } from '../contentSnapshot';
import { getAnswerLabel, learnerTextDiagnostics, wordCount } from '../learnerText';
import { getAssessmentTemplate, getMatchingLabel, reverseConcept } from '../assessmentTemplates';
import { buildQuizResult, quizCompositionViolations } from '../buildQuiz';
import { generateExercise, getExerciseCapabilities, generateMatchingExercise } from '../exerciseFactory';
import { exerciseValidityViolations } from '../generationCoverage';
import { isTypedAnswerCorrect, isMatchingPairCorrect } from '../answerValidation';
import { createSemanticContext } from '../semanticValidation';
import { validateContent } from '../contentValidation';
import type { Concept } from '../conceptTypes';

// Preserve the 143 reviewed baseline forms; new subtopics have their own content regressions.
const definitions = approvedArtContent.filter(c => ['painting','sculpture'].includes(c.subtopicId) && c.assessment?.presentation?.answer);
const movements = approvedArtContent.filter(c => c.subtopicId === 'painting' && c.levelId === 'l1' && c.partId === 'p1');

test('reviewed short definitions retain their canonical facts, positive evidence and discriminating features', () => {
  expect(definitions.filter(c=>c.assessment!.presentation!.answer!.reviewedBy.includes('editorial equivalence'))).toHaveLength(55);
  expect(definitions).toHaveLength(143);
  for (const c of definitions) {
    const wording = c.assessment!.presentation!.answer!;
    expect(wording.canonicalText).toBe(c.object);
    expect(wording.valueId).toBe(context.claim(c).answer.stableId);
    expect(wording.evidenceIds).toEqual(c.assessment!.evidenceIds);
    expect(context.evaluate(c, c).verdict).toBe('valid');
    expect(wordCount(getAnswerLabel(c))).toBeLessThanOrEqual(15);
    expect(wordCount(getAnswerLabel(c, 'matching'))).toBeLessThanOrEqual(8);
  }
  const cubism = movements.find(c => c.subject === 'Cubism')!;
  expect(getAnswerLabel(cubism)).toBe("Picasso and Braque's movement using geometric planes and multiple viewpoints.");
  expect(getAnswerLabel(cubism, 'matching')).toBe('Geometric planes and multiple viewpoints.');
  expect(cubism.object).toContain('fragments subjects');
  expect(validateContent(approvedArtContent, context.policies, undefined, { evidence: context.evidence }).filter(i => i.severity === 'error')).toEqual([]);
});

test('actual short options, false assertions, blanks and permanent matching locks retain certified grading and exact quotas', () => {
  for (const variant of ['A', 'B', 'C'] as const) {
    const request = { concepts: movements, context, variant, mode: 'teaching' as const, seed: `short-text:${variant}` };
    const result = buildQuizResult(request);
    expect(result).toEqual(buildQuizResult(request));
    expect(result.status).toBe('ready');
    expect(quizCompositionViolations(result.exercises, variant)).toEqual([]);
    for (const ex of result.exercises) expect(exerciseValidityViolations(ex, movements, context)).toEqual([]);
    const c = movements[0], caps = getExerciseCapabilities(c, movements, context);
    const generated = (['mcq','true','false','blank_options'] as const).map(form=>generateExercise(c,caps,form,context,'short-independent'));
    const matching = generateMatchingExercise(movements,'short-independent',context);
    for (const item of [...generated,matching]) {
      expect(item.status).toBe('generated');
      if (item.status !== 'generated') throw new Error('Missing single exercise');
      const ex = item.exercise;
      expect(exerciseValidityViolations(ex, movements, context)).toEqual([]);
      expect(learnerTextDiagnostics(ex)).toEqual([]);
      if (ex.type === 'mcq' || ex.type === 'fill_blank') {
        const valid = ex.options!.filter(option => movements.some(c => getAnswerLabel(c) === option && context.evaluate(movements.find(c => c.id === ex.conceptId)!, c).verdict === 'valid'));
        expect(valid).toEqual([ex.answerText]);
      }
      if (ex.type === 'fill_blank') {
        expect(ex.allowedInputModes).toEqual(['options']);
        expect(isTypedAnswerCorrect(ex, ex.answerText)).toBe(false);
      }
      if (ex.type === 'matching') for (const left of ex.pairs) for (const right of ex.pairs) {
        const c = movements.find(c => c.id === left.id)!;
        const candidate = movements.find(c => c.id === right.id)!;
        expect(isMatchingPairCorrect(left, right)).toBe(context.evaluate(c, candidate).verdict === 'valid');
        expect(left.left).toBe(c.subject);
        expect(left.right).toBe(getAnswerLabel(c, 'matching'));
      }
    }
  }
});

test('pending or identity-detached editorial forms cannot authorize assessment', () => {
  const original = movements[0];
  const wording = original.assessment!.presentation!.answer!;
  for (const answer of [{ ...wording, reviewStatus: 'pending' as const }, { ...wording, valueId: 'meaning:another' }, { ...wording, canonicalText: 'Different meaning' }, { ...wording, evidenceIds: ['missing'] }]) {
    const bad: Concept = { ...original, assessment: { ...original.assessment!, presentation: { answer } } };
    const snapshot = createSemanticContext([...movements.filter(c => c.id !== bad.id), bad], { policies: context.policies, evidence: context.evidence });
    expect(getExerciseCapabilities(bad, movements, snapshot).forms.mcq.available).toBe(false);
    expect(snapshot.evaluate(bad, original).verdict).toBe('unknown');
  }
});

test('colliding reviewed display forms are excluded before options and matching are sampled', () => {
  const target = movements[0], candidate = movements[1];
  const collision: Concept = { ...candidate, assessment: { ...candidate.assessment!, presentation: { answer: { ...candidate.assessment!.presentation!.answer!, text: getAnswerLabel(target), matchingText: getAnswerLabel(target, 'matching') } } } };
  const pool = movements.map(c => c.id === collision.id ? collision : c);
  const snapshot = createSemanticContext(pool, { policies: context.policies, evidence: context.evidence });
  expect(getExerciseCapabilities(target, pool, snapshot).optionCandidates).not.toContain(collision);
  const result = buildQuizResult({ concepts: pool, context: snapshot, variant: 'A', mode: 'teaching', seed: 'collision' });
  for (const ex of result.exercises) {
    expect(exerciseValidityViolations(ex, pool, snapshot)).toEqual([]);
    if (ex.type === 'matching') expect(new Set(ex.pairs.map(p => p.right)).size).toBe(4);
  }
});

test('historical version/event/uncertainty and declared typed names are not shortened away or broadened', () => {
  const date = approvedArtContent.find(c => c.id === 'art_sculpture_l7_p4_moma-231-1948')!;
  expect(getAnswerLabel(date)).toBe('1913 (cast 1931 or 1934)');
  expect(getMatchingLabel(date)).toContain('MoMA cast');
  expect(getMatchingLabel(date)).toContain('creation date');
  const creator = approvedArtContent.find(c => c.subject === 'The Arnolfini Portrait' && c.partId === 'p2')!;
  const pool = approvedArtContent.filter(c => c.subtopicId === 'painting' && c.levelId === 'l2' && c.partId === 'p2');
  const result = generateExercise(creator, getExerciseCapabilities(creator, pool, context), 'blank_typed', context, 'typed');
  expect(result.status).toBe('generated');
  if (result.status === 'generated' && result.exercise.type === 'fill_blank') {
    expect(isTypedAnswerCorrect(result.exercise, ' van Eyck ')).toBe(true);
    expect(isTypedAnswerCorrect(result.exercise, 'Rembrandt')).toBe(false);
  }
  expect(getAnswerLabel(reverseConcept(creator)!)).toBe(creator.subject);
  const completion = approvedArtContent.find(c => c.subject === 'The Last Supper' && c.partId === 'p4')!;
  expect(getAssessmentTemplate(completion).question(completion.subject)).toContain('completed');
});

test('length diagnostics are warnings and never truncate essential text', () => {
  expect(wordCount('Geometric planes and multiple viewpoints.')).toBe(5);
  const text = 'A '.repeat(25) + 'historically necessary qualification';
  const ex = { type: 'true_false' as const, conceptId: 'fixture', statement: text, correctAnswer: true, answerText: 'fixture' };
  expect(learnerTextDiagnostics(ex)).toEqual([{ field: 'statement', text, words: 28, target: 20 }]);
  expect(ex.statement).toBe(text);
});


test('movement examples drop the repeated original-movement note while preserving the historical claim internally', () => {
  const examples = approvedArtContent.filter(c => c.subtopicId === 'painting' && c.levelId === 'l1' && ['p2', 'p4'].includes(c.partId));
  expect(examples).toHaveLength(22);
  for (const c of examples) {
    const scope = c.assessment!.presentation!.scope!;
    expect(scope.canonicalText).toBe(c.assessment!.scope!.text);
    expect(c.semantic!.qualifiers!.assessmentScope).toBe('original-formative-historical-context');
    expect(getAssessmentTemplate(c).question(c.subject)).not.toContain('(');
    expect(getMatchingLabel(c)).toBe(c.subject);
    expect(context.evaluate(c, c).verdict).toBe('valid');
    expect(c.assessment!.scope!.text).toContain('original historical development; not later revivals');
  }
});

test('notable-work and historical-period wording stays direct without losing historical qualifications', () => {
  for (const [relation, noun] of [['notable_novel_of_author', 'novel'], ['example_of_notable_play_by_playwright', 'play']]) {
    const c = approvedArtContent.find(c => c.relation === relation)!;
    const wording = getAssessmentTemplate(c);
    expect(wording.question(c.subject)).toContain(`Which of these is a notable ${noun} by ${c.subject}?`);
    expect(wording.blank(c.subject)).toContain(`One notable ${noun} by ${c.subject} is _____.`);
  }
  const odyssey = approvedArtContent.find(c => c.id === 'art_literature_l9_p4_odyssey')!;
  const wording = getAssessmentTemplate(odyssey);
  expect(wording.question(odyssey.subject)).toContain('When was “Odyssey” composed?');
  expect(wording.statement(odyssey.subject, odyssey.object)).toContain('Around the 8th century BCE');
  expect(wording.question(odyssey.subject)).toContain('oral formation and textual fixation remain debated');
});

test('architecture identification clues retain their dates with readable word spacing', () => {
  for (const [id, text] of [['eiffel-tower', 'the 1889 Paris exhibition'], ['santiago-bellas-artes', 'the 1910 centenary']]) {
    const c = approvedArtContent.find(c => c.id === `art_architecture_l6_p1_${id}`)!;
    expect(c.assessment!.identification!.description!.text).toContain(text);
    expect(context.evaluate(c, c).verdict).toBe('valid');
  }
});


test('venue opening questions prefer certified opening years to an ancient construction century', () => {
  const pool = approvedArtContent.filter(c => c.subtopicId === 'theatre' && c.levelId === 'l9' && c.partId === 'p4');
  const target = pool.find(c => c.id === 'art_theatre_l9_p4_bolshoi-1856')!;
  const caps = getExerciseCapabilities(target, pool, context);
  expect(caps.optionCandidates.length).toBeGreaterThanOrEqual(2);
  expect(caps.optionCandidates.every(c => c.assessment?.event === 'opening')).toBe(true);
  for (const form of ['mcq', 'blank_options'] as const) for (let attempt = 0; attempt < 20; attempt++) {
    const result = generateExercise(target, caps, form, context, `venue-opening-editorial:${attempt}`);
    expect(result.status).toBe('generated');
    if (result.status === 'generated') expect(result.exercise.type).toBe(form === 'mcq' ? 'mcq' : 'fill_blank');
    if (result.status === 'generated' && result.exercise.type !== 'matching') {
      expect(result.exercise.answerText).toBe('1856');
      if (result.exercise.type === 'mcq' || result.exercise.type === 'fill_blank') expect(result.exercise.options).not.toContain('4th century BCE');
      expect(exerciseValidityViolations(result.exercise, pool, context)).toEqual([]);
    }
  }
});
