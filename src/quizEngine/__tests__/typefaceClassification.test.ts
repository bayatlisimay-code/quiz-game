import { approvedArtContent, approvedArtEvidence } from '../../../data/activeArtContent';
import { activeSemanticContext as context, ACTIVE_CONCEPT_SETS } from '../contentSnapshot';
import { getCurriculumPool } from '../curriculumPool';
import { createSemanticContext } from '../semanticValidation';
import { getExerciseCapabilities } from '../exerciseFactory';
import { getAssessmentTemplate, getMatchingLabel } from '../assessmentTemplates';
import { buildQuizResult } from '../buildQuiz';
import { measureGenerationCoverage } from '../generationCoverage';
import { isPermanentlyLockable } from '../matchingSafety';
import { isMatchingPairCorrect } from '../answerValidation';
const records=getCurriculumPool(ACTIVE_CONCEPT_SETS,{topicId:'art',subtopicId:'design',levelId:'l6',partId:'p2'});
const find=(id:string)=>{const c=records.find(c=>c.id===`art_design_l6_p2_${id}`);if(!c)throw new Error(id);return c;};

test('compound classifications retain the same eleven typefaces and source-documented spacing, without claiming an exclusive typography taxonomy',()=>{
 expect(records).toHaveLength(11);
 for(const c of records){
  expect(c.semantic!.subject!.id).toBe(`typeface:${c.id.slice('art_design_l6_p2_'.length)}`);
  expect(c.assessment!.factId).toBe(`${c.semantic!.subject!.id}:classification_of_typeface`);
  expect(context.evaluate(c,c).verdict).toBe('valid');
 }
 for(const id of ['arial','calibri','verdana','trebuchet-ms'])expect(find(id).object).toBe('Proportional sans-serif text');
 for(const id of ['georgia','cambria'])expect(find(id).object).toBe('Proportional serif text');
 expect(find('consolas').object).toBe('Monospaced');
 const mono=find('consolas'),serif=find('georgia');
 expect(context.evaluate(mono,serif).verdict).toBe('invalid');
 const certificate=context.evaluate(mono,serif).evidenceIds;
 expect(certificate.length).toBeGreaterThan(0);
 expect(approvedArtEvidence.filter(e=>certificate.includes(e.id))).toEqual(expect.arrayContaining([expect.objectContaining({sourceUrl:'https://learn.microsoft.com/en-us/typography/font-list/consolas',locator:expect.stringContaining('Fixed pitch=True')})]));
 // Remove the reviewed contradiction: the differing labels cannot prove falsity.
 const without=context.evidence.filter(e=>!certificate.includes(e.id));
 const partial=createSemanticContext(approvedArtContent,{policies:context.policies,evidence:without});
 expect(partial.evaluate(mono,serif).verdict).toBe('unknown');
 // Display use and letterform/spacing categories may legitimately overlap.
 expect(context.evaluate(find('arial'),find('gabriola')).verdict).toBe('unknown');
 expect(getExerciseCapabilities(find('arial'),records,context).falseCandidates).not.toContain(find('gabriola'));
 expect(find('wingdings').subject).toBe('Wingdings (original family)');
 expect(getMatchingLabel(find('wingdings'))).not.toContain('symbols');
 expect(getAssessmentTemplate(find('consolas')).question('Consolas')).not.toContain('Monospaced');
});

test('review priorities introduce all four safe classes in A, a second serif in B, and a new sans-serif in C',()=>{
 const ids=(stage:string)=>records.filter(c=>c.introducedIn===stage).map(c=>c.id.slice('art_design_l6_p2_'.length)).sort();
 expect(ids('A')).toEqual(['arial','calibri','consolas','georgia','verdana','wingdings']);
 expect(ids('B')).toEqual(['cambria','gabriola','impact']);
 expect(ids('C')).toEqual(['comic-sans-ms','trebuchet-ms']);
 for(const c of records)expect(c.learning!.rationale).toContain('spacing distinctions');
});

test('actual A/B/C quizzes have distinct safe matching cards; every accepted permanent-lock sequence is completable',()=>{
 const selections=new Map<string,Set<string>>();
 for(const variant of ['A','B','C'] as const)for(let attempt=1;attempt<=20;attempt++){
  const result=buildQuizResult({concepts:records,context,mode:'teaching',variant,seed:`typeface-locks:${variant}:${attempt}`});
  expect(result.status).toBe('ready');
  const matching=result.exercises.find(e=>e.type==='matching');
  if(matching?.type!=='matching')throw new Error('Missing matching');
  expect(new Set(matching.pairs.map(p=>p.right)).size).toBe(4);
  const matrix=matching.pairs.map(left=>matching.pairs.map(right=>isMatchingPairCorrect(left,right)));
  expect(isPermanentlyLockable(matrix)).toBe(true);
  for(const [i,left] of matching.pairs.entries())for(const [j,right] of matching.pairs.entries()){
   const target=records.find(c=>c.id===left.id)!,candidate=records.find(c=>c.id===right.id)!;
   expect(context.evaluate(target,candidate).verdict).toBe(matrix[i][j]?'valid':'invalid');
  }
  const combinations=selections.get(variant)??new Set<string>();
  combinations.add(matching.pairs.map(p=>p.id).sort().join('|'));selections.set(variant,combinations);
  expect(buildQuizResult({concepts:records,context,mode:'teaching',variant,seed:`typeface-locks:${variant}:${attempt}`})).toEqual(result);
 }
 expect(selections.get('A')!.size).toBeGreaterThan(1);
 // B/C may have only one safe group: no unsafe variation is forced.
});

test('l6 classification teaching and its p3 review meet exact quotas for twenty deterministic attempts',()=>{
 const concepts=getCurriculumPool(ACTIVE_CONCEPT_SETS,{topicId:'art',subtopicId:'design',levelId:'l6',partId:'p3'});
 const cases=([{id:'typeface-teaching',concepts:records,mode:'teaching' as const},{id:'typeface-review',concepts,mode:'review' as const}]).flatMap(c=>(['A','B','C'] as const).map(variant=>({...c,variant})));
 const report=measureGenerationCoverage(cases,context,20);
 expect(report.counts.requests).toBe(120);expect(report.counts.ready).toBe(120);
 expect(report.counts.insufficient).toBe(0);expect(report.violations).toEqual([]);
});
