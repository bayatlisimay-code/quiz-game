import { accessibilityWording } from '../../../data/artContent/learnerWording';
import { authorAncientWorks } from '../../../data/artContent/authoring';
import { retiredEarlySculptures } from '../../../data/artContent/ancientSculpture';
import { approvedArtContent, approvedArtEvidence } from '../../../data/activeArtContent';
import { sculpturePilotWorks } from '../../../data/artPilot/sculpture';
import { paintingPilotWorks } from '../../../data/artPilot/painting';
import { authorArtworkPilot } from '../../../data/artPilot/authoring';
import { terminologyPilotConcepts } from '../../../data/artPilot/terminology';
import { TOPIC_BY_ID } from '../../../data/catalog';
import { teachingRelation } from '../../../data/artCurriculum';
import { ACTIVE_CONCEPT_SETS, activeSemanticContext as context } from '../contentSnapshot';
import { getCurriculumPool } from '../curriculumPool';
import { catalogCoverageCases, measureGenerationCoverage, exerciseValidityViolations } from '../generationCoverage';
import { getExerciseCapabilities } from '../exerciseFactory';
import { buildQuizResult, quizCompositionViolations } from '../buildQuiz';
import { getAssessmentTemplate, reverseConcept } from '../assessmentTemplates';
import { validateContent } from '../contentValidation';
import { isMatchingPairCorrect } from '../answerValidation';
import { isPermanentlyLockable } from '../matchingSafety';
import { withoutFailedImages, planAssessmentStimulus } from '../../images/assessmentImages';
import developmentManifest from '../../images/developmentRegistry.generated.json';
import type { RuntimeImageRegistry } from '../../images/types';
const developmentImages = developmentManifest as RuntimeImageRegistry;

const topic = { ...TOPIC_BY_ID.art, subtopics: TOPIC_BY_ID.art.subtopics.filter(s => ['painting', 'sculpture'].includes(s.id)) };
const cases = catalogCoverageCases(topic, ACTIVE_CONCEPT_SETS);
const pool = (subtopicId: string, levelId: string, partId: string) => getCurriculumPool(ACTIVE_CONCEPT_SETS, { topicId: 'art', subtopicId, levelId, partId });
const limitedPools = [
  { id: 'art_painting_l1_p4', concepts: pool('painting', 'l1', 'p4').filter(c => c.subject !== 'Baroque').slice(0,5) },
  { id: 'art_sculpture_l9_p1', concepts: pool('sculpture', 'l9', 'p1').filter(c => !['Torso', 'Equestrian statue'].includes(c.subject)).slice(0,5) },
];

test('all 54 teaching placements are populated in their approved positions; pilot records and IDs remain unchanged', () => {
  const baseline = [...authorArtworkPilot(sculpturePilotWorks, 'sculpture', 'l3').concepts,
    ...authorArtworkPilot(paintingPilotWorks, 'painting', 'l2').concepts, ...terminologyPilotConcepts];
  const factual = (c: typeof baseline[number]) => { const { introducedIn: _stage, learning: _priority, ...rest } = c; return rest; };
  expect(approvedArtContent.slice(0, baseline.length).map(factual)).toEqual(baseline.map(accessibilityWording).map(factual));
  const example = approvedArtContent.find(c => c.id === 'art_painting_l1_p2_pop-art')!;
  const recognition = approvedArtContent.find(c => c.id === 'art_painting_l8_p1_moma-476-1996')!;
  expect(example.semantic?.value?.id).toBe(recognition.semantic?.value?.id);

  expect(new Set(approvedArtContent.map(c => c.id)).size).toBe(approvedArtContent.length);
  expect(approvedArtContent.every(c => ['painting', 'sculpture', 'architecture', 'design', 'literature', 'theatre', 'music'].includes(c.subtopicId))).toBe(true);
  for (const subtopic of topic.subtopics) for (let level = 1; level <= 9; level++) for (const part of ['p1', 'p2', 'p4']) {
    const teaching = pool(subtopic.id, `l${level}`, part);
    expect(teaching.length).toBeGreaterThanOrEqual(11);
    expect(teaching.every(c => c.relation === teachingRelation(subtopic.id, `l${level}`, part))).toBe(true);
  }
  expect(validateContent(approvedArtContent, context.policies, undefined, { evidence: approvedArtEvidence }).filter(i => i.severity === 'error')).toEqual([]);
});

test('every part and variant has a deterministic release-impact baseline; unproven cross-pairings explicitly report shortages', () => {
  expect(cases).toHaveLength(300);
  const coverage = measureGenerationCoverage(cases, context, 2);
  expect(coverage.counts.requests).toBe(600);
  expect(coverage.counts.ready).toBe(600);
  expect(coverage.counts.insufficient).toBe(0);
  expect(coverage.counts).toMatchObject({ failures: 0, duplicateMatching: 0 });
  expect(coverage.violations).toEqual([]);
  expect(coverage.rows.every(row=>row.ready===2)).toBe(true);
  for (const entry of limitedPools) {
    const request = { ...entry, context, variant: 'A' as const, mode: 'teaching' as const, seed: 'explicit-evidence-shortage' };
    const result = buildQuizResult(request);
    expect(result).toEqual(buildQuizResult(request));
    expect(result.status).toBe('insufficient-content');
    expect(result.exercises).toEqual([]);
    expect(result.diagnostics.shortages.some(s=>s.code === "introduction-stage" || s.code === "distinct-facts")).toBe(true);
  }
});

test('all reviews and every l10 part collect original teaching IDs without new review records or repeated weighting', () => {
  for (const subtopic of topic.subtopics) {
    for (let level = 1; level <= 9; level++) {
      const p1 = pool(subtopic.id, `l${level}`, 'p1'), p2 = pool(subtopic.id, `l${level}`, 'p2'), p4 = pool(subtopic.id, `l${level}`, 'p4');
      expect(pool(subtopic.id, `l${level}`, 'p3').map(c => c.id)).toEqual([...p1, ...p2].map(c => c.id));
      expect(pool(subtopic.id, `l${level}`, 'p5').map(c => c.id)).toEqual([...p1, ...p2, ...p4].map(c => c.id));
    }
    const taught = approvedArtContent.filter(c => c.subtopicId === subtopic.id);
    for (let part = 1; part <= 5; part++) {
      const review = pool(subtopic.id, 'l10', `p${part}`);
      expect(review.map(c => c.id).sort()).toEqual(taught.map(c => c.id).sort());
      expect(new Set(review.map(c => c.id)).size).toBe(review.length);
    }
  }
});

test('source-qualified ancient cultural attribution is not modern nationality or every cultural influence', () => {
  const cultures = pool('sculpture', 'l2', 'p2'), buddha = cultures.find(c => c.subject.startsWith('Seated Buddha'))!;
  expect(buddha.object).toBe('Gandhara');
  const wording = getAssessmentTemplate(buddha);
  expect(wording.question(buddha.subject)).toBe('Which culture does “Seated Buddha (bronze)” come from?');
  expect(wording.statement(buddha.subject, buddha.object)).toBe('The culture of “Seated Buddha (bronze)” is Gandhara.');
  expect(buddha.subject).not.toContain(buddha.object);
  const early = pool('sculpture', 'l1', 'p2');
  const gudea = early.find(c => c.id.endsWith('_met-59-2'))!, sumerian = authorAncientWorks(retiredEarlySculptures, 'l1').concepts.find(c => c.object === 'Sumerian')!;
  expect(getAssessmentTemplate(gudea).statement(gudea.subject, sumerian.object)).toContain("The culture of");
  const unqualified = { ...gudea, semantic: { ...gudea.semantic!, qualifiers: { assessmentScope: 'unqualified-cultural-membership' } } };
  expect(context.evaluate(unqualified, sumerian).verdict).toBe('unknown');

  for (const c of pool('sculpture', 'l1', 'p2')) expect(c.subject).not.toContain(c.object);
  expect(pool('sculpture', 'l1', 'p2').some(c => /lion-man|willendorf/.test(c.id))).toBe(false);
});

test('date prompts retain complete uncertain and version-specific labels without printing the answer in version notes', () => {
  for (const c of approvedArtContent.filter(c => c.tags?.includes('verified-art-content') && c.assessment?.dateInterpretation)) {
    const t = getAssessmentTemplate(c);
    // Statements keep the complete label; only “probably” moves before the verb.
    expect(t.statement(c.subject, c.object)).toContain(c.object.replace(/^probably /, ''));
    if (c.object.startsWith('probably ')) expect(t.statement(c.subject, c.object)).toContain('was probably');
    expect(t.question(c.subject)).not.toContain(c.object);
    expect(t.blank(c.subject)).not.toContain(c.object);
    expect(getExerciseCapabilities(c, pool(c.subtopicId, c.levelId, c.partId), context).forms.blank_typed.available).toBe(false);
  }
  expect(approvedArtContent.find(c => c.id === 'art_sculpture_l7_p4_moma-231-1948')?.object).toBe('1913 (cast 1931 or 1934)');
  expect(approvedArtContent.find(c => c.id === 'art_sculpture_l8_p4_bilbao-maman')?.object).toBe('1999 (cast 2001)');
  expect(approvedArtContent.find(c => c.id === 'art_sculpture_l8_p4_naoshima-pumpkin-original')?.object).toBe('1994');
  expect(approvedArtContent.find(c => c.id === 'art_sculpture_l4_p4_thorvaldsen-a822')?.assessment?.event).toBe('completion');
});

test('readymades, welded works and installed constructions use created grammar in both directions', () => {
  for (const c of pool('sculpture', 'l7', 'p2').filter(c => c.assessment?.attribution?.verb === 'created')) {
    const t = getAssessmentTemplate(c);
    expect(t.question(c.subject)).toBe(`Who created “${c.subject}”?`);
    expect(t.statement(c.subject, c.object)).toContain(`${c.object} created “${c.subject}”`);
    expect(t.blank(c.subject)).toContain('was created by _____');
    const reverse = reverseConcept(c)!;
    expect(getAssessmentTemplate(reverse).question(reverse.subject)).toContain(`created by ${c.object}`);
    expect(t.question(c.subject)).not.toContain("sculpted");
    expect(c.semantic!.qualifiers!.assessmentScope).toBe("principal-catalogue-credit");
  }
  expect(pool('sculpture', 'l7', 'p2').find(c => c.id.endsWith('met-53-87'))?.subject).not.toContain('Noguchi');
  const pelagos = pool('sculpture', 'l7', 'p2').find(c => c.id.endsWith('hepworth-pelagos'))!;
  expect(getAssessmentTemplate(pelagos).question(pelagos.subject)).not.toContain('Hepworth');
  for (const id of ['art_sculpture_l7_p2_moma-231-1948', 'art_sculpture_l6_p2_rodin-burghers-s00450', 'art_sculpture_l6_p2_orsay-ratapoil-rf927']) {
    const cast = approvedArtContent.find(c => c.id === id)!;
    const wording = getAssessmentTemplate(cast);
    expect(cast.assessment?.attribution?.status).toBe('certain');
    expect(wording.question(cast.subject)).toContain('Who sculpted');
    expect(wording.statement(cast.subject, cast.object)).not.toContain('created');
    expect(wording.blank(cast.subject)).toContain('was sculpted by');
    const inverse = reverseConcept(cast)!;
    expect(getAssessmentTemplate(inverse).question(inverse.subject)).toContain(`sculpted by ${inverse.subject}`);
  }


});

test('definitions require explicit meaning contrasts and never enable exact typed recall of open paraphrases', () => {
  for (const c of approvedArtContent.filter(c => c.tags?.includes('verified-art-content') && c.assessment?.attribution && !c.assessment.response)) {
    const caps = getExerciseCapabilities(c, pool(c.subtopicId, c.levelId, c.partId), context);
    expect(caps.forms.blank_typed.available).toBe(false);
    expect(caps.forms.blank_options.available).toBe(true);
  }
  const definitions = approvedArtContent.filter(c => c.tags?.includes('verified-art-content') && c.relation.startsWith('definition_of_'));
  for (const c of definitions) expect(getExerciseCapabilities(c, pool(c.subtopicId, c.levelId, c.partId), context).forms.blank_typed.available).toBe(false);
  const forms = pool('sculpture', 'l9', 'p1');
  const bust = forms.find(c => c.subject === 'Bust')!, relief = forms.find(c => c.subject === 'Relief')!;
  expect(context.evaluate(bust, relief).verdict).toBe('unknown');
  const pioneers = pool('painting', 'l1', 'p4');
  const cubism = pioneers.find(c => c.subject === 'Cubism')!, monet = pioneers.find(c => c.object === 'Claude Monet')!;
  expect(context.evaluate(cubism, monet).verdict).toBe('unknown');
  expect(getExerciseCapabilities(cubism, pioneers, context).optionCandidates).not.toContain(monet);
});

test('new hosted recognition images retain certified four-pair matching and verified fallback after failures', () => {
  expect(Object.values(developmentImages.bindings).filter(b => b.image.imageId.startsWith('content-'))).toHaveLength(10);
  const images = context.withImages(developmentImages);
  const ids = Object.values(developmentImages.bindings).map(b => b.image.imageId);
  const failed = images.withImages(withoutFailedImages(developmentImages, ids));
  for (const levelId of ['l1', 'l2']) {
    const concepts = pool('sculpture', levelId, 'p1');
    for (const c of concepts.filter(c => developmentImages.bindings[c.id as keyof typeof developmentImages.bindings])) {
      expect(planAssessmentStimulus(c, images, 'mcq').stimulus?.kind).toBe('image');
      expect(planAssessmentStimulus(c, failed, 'mcq').stimulus?.kind).toBe('text');
    }
    for (const variant of ['A', 'B', 'C'] as const) for (const semanticContext of [images, failed]) {
      const result = buildQuizResult({ concepts, context: semanticContext, variant, seed: `new-image:${levelId}:${variant}`, mode: 'teaching' });
      expect(result.status).toBe('ready');
      expect(quizCompositionViolations(result.exercises, variant)).toEqual([]);
      for (const ex of result.exercises) {
        expect(exerciseValidityViolations(ex, concepts, semanticContext)).toEqual([]);
        if (ex.type === 'matching') expect(isPermanentlyLockable(ex.pairs.map(left => ex.pairs.map(right => isMatchingPairCorrect(left, right))))).toBe(true);
      }
    }
  }
});
