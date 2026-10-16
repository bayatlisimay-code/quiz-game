import { TOPIC_BY_ID } from '../../../data/catalog';
import { approvedArtContent, approvedArtEvidence } from '../../../data/activeArtContent';
import { progressionWorkConcepts } from '../../../data/artContent/progressionWorks';
import { progressionPaintingTermSets } from '../../../data/artContent/progressionPaintingTerms';
import { progressionSculptureTermSets } from '../../../data/artContent/progressionSculptureTerms';
import { progressionMovementSet } from '../../../data/artContent/progressionMovements';
import { expandTerms } from '../../../data/artContent/termExpansion';
import { ACTIVE_CONCEPT_SETS, activeSemanticContext as context } from '../contentSnapshot';
import { getCurriculumPool } from '../curriculumPool';
import { catalogCoverageCases } from '../generationCoverage';
import { measureLearningCoverage } from '../learningCoverage';
import { buildQuizResult, quizCompositionViolations } from '../buildQuiz';
import { matchingCandidates } from '../exerciseFactory';
import { factIdentity } from '../learningProgression';
import { getAssessmentTemplate } from '../assessmentTemplates';

const topic = { ...TOPIC_BY_ID.art, subtopics: TOPIC_BY_ID.art.subtopics.filter(s=>['painting','sculpture'].includes(s.id)) };
const cases = catalogCoverageCases(topic, ACTIVE_CONCEPT_SETS);
const pool = (subtopicId:string,levelId:string,partId:string) => getCurriculumPool(ACTIVE_CONCEPT_SETS,{topicId:'art',subtopicId,levelId,partId});

test('184 additional sourced facts complete 54 placements without duplicate IDs or alias padding',()=>{
  const works = progressionWorkConcepts;
  const terms = [...progressionPaintingTermSets,...progressionSculptureTermSets].flatMap(s=>s.concepts);
  expect(works).toHaveLength(84); expect(terms).toHaveLength(82); expect(progressionMovementSet.concepts).toHaveLength(18);
  expect(approvedArtContent).toHaveLength(598);
  for(const subtopic of ['painting','sculpture']) for(let level=1;level<=9;level++) for(const part of ['p1','p2','p4']) {
    const teaching=pool(subtopic,`l${level}`,part);
    expect(new Set(teaching.map(c=>factIdentity(c,context))).size).toBe(teaching.length);
    expect(teaching.filter(c=>c.introducedIn==='A')).toHaveLength(6);
    expect(teaching.filter(c=>c.introducedIn==='B')).toHaveLength(3);
    expect(teaching.filter(c=>c.introducedIn==='C').length).toBeGreaterThanOrEqual(2);
  }
  for(const c of [...works,...terms,...progressionMovementSet.concepts]) {
    expect(approvedArtContent.find(active=>active.id===c.id)?.learning?.rationale).toBeTruthy();
    for(const id of c.assessment!.evidenceIds) {
      const evidence=approvedArtEvidence.find(e=>e.id===id)!;
      expect(evidence.sourceUrl).toMatch(/^https:\/\//); expect(evidence.locator.length).toBeGreaterThan(20);
      expect(evidence.reviewedBy).toContain('not independent human');
    }
  }
});

test('fresh learner completes every part in order; no assumed receipts, including all l10 reviews',()=>{
  const report=measureLearningCoverage(cases,context,1);
  expect(report.counts).toEqual({requests:300,ready:300,insufficient:0,prerequisiteBlocked:0,violations:0});
  expect(report.problems).toEqual([]);
  expect(report.introductions).toHaveLength(54);
  expect(report.introductions.every(row=>row.distinct===11)).toBe(true);
  const broken=cases.map(c=>c.id==='art_painting_l1_p1'?{...c,concepts:c.concepts.slice(0,5)}:c);
  const blocked=measureLearningCoverage(broken,context,1);
  expect(blocked.counts.insufficient).toBeGreaterThan(0);
  expect(blocked.counts.prerequisiteBlocked).toBeGreaterThan(0);
});

test('reviewed definition contrasts do not infer unknown hierarchy, overlap or a new term negative',()=>{
  const pairs=[['painting','l9','p4','shape','geometric-shape'],['sculpture','l9','p1','relief','low-relief'],['sculpture','l9','p4','chasing','metal-chiseling']] as const;
  for(const [s,l,p,a,b] of pairs) {
    const records=pool(s,l,p); const first=records.find(c=>c.id.endsWith('_'+a))!,second=records.find(c=>c.id.endsWith('_'+b))!;
    expect(context.evaluate(first,second).verdict).toBe('unknown');
    expect(context.evaluate(second,first).verdict).toBe('unknown');
  }
  const records=pool('painting','l9','p4');
  const result=expandTerms({concepts:records,evidence:approvedArtEvidence},[{id:'unreviewed-fixture',term:'Synthetic fixture only',definition:'A synthetic test definition, not registered content.',url:'https://example.invalid/test-only',locator:'Test fixture only; never registered'}],[]);
  expect(result.evidence.some(e=>e.kind==='assertion' && e.verdict==='invalid')).toBe(false);
});

test('artwork versions, catalogue uncertainty and shared semantic identities survive expansion',()=>{
  const dates=progressionWorkConcepts.filter(c=>c.partId==='p4');
  expect(dates.find(c=>c.id.endsWith('_ng1172'))?.object).toBe('about 1638–1639');
  expect(dates.find(c=>c.id.endsWith('_ng194'))?.object).toBe('probably 1632–1635');
  const diana=dates.find(c=>c.subject.includes('Diana'))!;
  expect(diana.object).toContain('cast');
  expect(getAssessmentTemplate(diana).question(diana.subject)).toContain('dating');
  const demo=approvedArtContent.filter(c=>c.semantic?.value?.id==='artwork:moma-demoiselles');
  expect(demo.some(c=>c.levelId==='l1')).toBe(true); expect(demo.some(c=>c.levelId==='l7')).toBe(true);
  for(const c of progressionWorkConcepts.filter(c=>c.partId==='p2')) expect(c.subject.toLowerCase()).not.toContain(c.object.toLowerCase());
});

test.each([
  ['painting','l1','p2','C'],['painting','l1','p4','A'],['painting','l1','p4','C'],['sculpture','l9','p1','A'],
] as const)('single matching combinations reflect evidence, not selection bias: %s/%s/%s/%s',(s,l,p,variant)=>{
  const concepts=pool(s,l,p);
  const result=buildQuizResult({concepts,context,variant,seed:`art_${s}_${l}_${p}_quiz${variant}_attempt1`});
  expect(result.status).toBe('ready');
  const selected=concepts.filter(c=>result.exercises.some(e=>e.type!=='matching'&&e.conceptId===c.id));
  const budget={examined:0,limit:50000,exhausted:false};
  expect([...matchingCandidates(selected,'enumerate-all',context,budget)]).toHaveLength(1);
  expect(budget.exhausted).toBe(false);
});

test('reverse creator questions replan rather than reject a feasible quiz with duplicate artist prompts',()=>{
  const concepts=pool('painting','l2','p2');
  for(const attempt of [1,8,17]) {
    const request={concepts,context,variant:'C' as const,direction:'reverse' as const,seed:`art_painting_l2_p2_quizC_attempt${attempt}`};
    const result=buildQuizResult(request);
    expect(result.status).toBe('ready');
    expect(quizCompositionViolations(result.exercises,'C')).toEqual([]);
    expect(buildQuizResult(request)).toEqual(result);
  }
});
