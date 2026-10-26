import { musicContent, musicTeachingContent, musicReserveConcepts } from '../../../data/artContent/musicContent';
import { musicSourceReviews } from '../../../data/artContent/musicSourceReviews';
import { createActiveArtSets, approvedArtContent, approvedArtEvidence, activeArtConceptSets } from '../../../data/activeArtContent';
import { ACTIVE_CONCEPT_SETS, activeSemanticContext } from '../contentSnapshot';
import { teachingRelation } from '../../../data/artCurriculum';
import { createSemanticContext } from '../semanticValidation';
import { targetRelationPolicies } from '../relationPolicies';
import { evidenceProblems } from '../semanticEvidence';
import { validateContent } from '../contentValidation';
import { getCurriculumPool } from '../curriculumPool';
import { buildQuizResult, quizCompositionViolations } from '../buildQuiz';
import { exerciseValidityViolations } from '../generationCoverage';
import { getAssessmentTemplate } from '../assessmentTemplates';

const records=musicContent.concepts;
const sets=createActiveArtSets(musicTeachingContent.concepts);
const context=createSemanticContext(records,{policies:targetRelationPolicies,evidence:musicContent.evidence});
const find=(id:string)=>records.find(c=>c.id===`art_music_${id}`)!;
const placements=Array.from({length:9},(_,i)=>['p1','p2','p4'].map(p=>[`l${i+1}`,p])).flat();

test('Music has 18 unique sourced facts in each exact approved teaching placement',()=>{
 expect(records).toHaveLength(486);
 expect(new Set(records.map(c=>c.id)).size).toBe(486);
 expect(musicTeachingContent.concepts).toHaveLength(297);
 expect(musicReserveConcepts).toHaveLength(189);
 for(const [l,p] of placements){
  const all=records.filter(c=>c.levelId===l&&c.partId===p);
  const taught=musicTeachingContent.concepts.filter(c=>c.levelId===l&&c.partId===p);
  expect(all).toHaveLength(18);expect(taught).toHaveLength(11);
  expect(all.every(c=>c.relation===teachingRelation('music',l,p))).toBe(true);
  expect(['A','B','C'].map(stage=>taught.filter(c=>c.introducedIn===stage).length)).toEqual([6,3,2]);
 }
 expect(evidenceProblems(musicContent.evidence)).toEqual([]);
 expect(context.evidenceIssues).toEqual([]);
 expect(validateContent(records,targetRelationPolicies,undefined,{evidence:musicContent.evidence}).filter(i=>i.severity==='error')).toEqual([]);
 for(const c of records){
  expect(context.evaluate(c,c).verdict).toBe('valid');
  expect(musicContent.evidence.find(e=>e.id===c.assessment!.evidenceIds[0])?.reviewedBy).toContain('not independent human');
 }
 for(const r of Object.values(musicSourceReviews))expect(new URL(r.url).protocol).toBe('https:');
});

test('Music reviews contain only the eleven introduced facts, never the seven reserves',()=>{
 const pool=(l:string,p:string)=>getCurriculumPool(sets,{topicId:'art',subtopicId:'music',levelId:l,partId:p});
 for(let l=1;l<=9;l++){
  expect(pool(`l${l}`,'p3')).toEqual([...pool(`l${l}`,'p1'),...pool(`l${l}`,'p2')]);
  expect(pool(`l${l}`,'p5')).toEqual([...pool(`l${l}`,'p1'),...pool(`l${l}`,'p2'),...pool(`l${l}`,'p4')]);
 }
 for(let p=1;p<=5;p++)expect(pool('l10',`p${p}`)).toHaveLength(297);
 const reserves=new Set(musicReserveConcepts.map(c=>c.id));
 expect(pool('l10','p1').some(c=>reserves.has(c.id))).toBe(false);
});

test('checked birth, formation and recording distinctions survive authoring',()=>{
 expect(find('l2_p1_maria-callas').object).toBe('United States');
 expect(find('l7_p1_tinariwen').object).toBe('Algeria');
 expect(find('l3_p4_buena-vista-social-club').object).toBe('1996');
 expect(find('l3_p4_a-ha').object).toBe('1982');
 expect(find('l2_p2_nusrat-fateh-ali-khan').object).toContain('Allah Hoo Allah Hoo');
 expect(find('l2_p2_fela-kuti').object).toContain('1976–77');
 expect(find('l2_p2_mercedes-sosa').assessment?.music?.isCover).toBe(true);
 expect(find('l2_p2_aretha-franklin').assessment?.music?.isCover).toBe(true);
 expect(records.some(c=>/_(bts|phoenix|kinks|los-fabulosos-cadillacs)$/.test(c.id))).toBe(false);
});

test('known secondary genres, joint leads and overlapping instrument families remain valid',()=>{
 expect(context.evaluate(find('l6_p4_stevie-wonder'),find('l6_p4_david-bowie')).verdict).toBe('valid');
 expect(context.evaluate(find('l2_p4_beyonce'),find('l2_p4_johnny-cash')).verdict).toBe('valid');
 expect(context.evaluate(find('l2_p4_nusrat-fateh-ali-khan'),find('l2_p4_mercedes-sosa')).verdict).toBe('valid');
 expect(context.evaluate(find('l6_p2_cesaria-evora'),find('l6_p2_salif-keita')).verdict).toBe('valid');
 expect(context.evaluate(find('l8_p2_piano'),find('l8_p2_guitar')).verdict).toBe('valid');
 expect(context.evaluate(find('l8_p2_piano'),find('l8_p2_drum-kit')).verdict).toBe('valid');
 expect(context.evaluate(find('l8_p4_piano'),find('l8_p4_harp')).verdict).toBe('valid');
});

test('open genre associations never infer negatives from different canonical answers',()=>{
 expect(context.evaluate(find('l2_p4_bob-marley'),find('l2_p4_shakira')).verdict).toBe('unknown');
 const country=find('l1_p2_country');
 expect(context.evaluate({...country,semantic:{...country.semantic!,qualifiers:{role:'performer',versionId:country.assessment!.music!.versionId}}},find('l1_p2_jazz')).verdict).toBe('unknown');
 // Approved pools are subject-specific: unlisted alternatives stay unknown.
 expect(context.evaluate(find('l8_p4_guitar'),find('l8_p4_piano')).verdict).toBe('unknown');
 expect(context.evaluate(find('l6_p4_stromae'),find('l6_p4_dolly-parton')).verdict).toBe('unknown');
 expect(context.evaluate(find('l2_p4_elvis-presley'),find('l2_p4_celine-dion')).verdict).toBe('unknown');
});

test('approved L2/L6 genre staging and the João Gilberto replacement keep 6/3/2 and other placements',()=>{
 const stage=(id:string)=>find(id).introducedIn+String(find(id).learning!.reinforcementPriority);
 expect(stage('l2_p4_maria-callas')).toBe('A5');expect(stage('l2_p4_shakira')).toBe('C1');
 expect(stage('l2_p1_shakira')).toBe('A5');expect(stage('l2_p2_shakira')).toBe('A5');
 expect(stage('l2_p1_maria-callas')).toBe('C1');
 expect(stage('l6_p4_umm-kulthum')).toBe('A5');expect(stage('l6_p4_bjork')).toBe('C3');
 expect(stage('l6_p1_bjork')).toBe('A5');expect(stage('l6_p1_umm-kulthum')).toBe('C3');
 expect(find('l6_p4_joao-gilberto').object).toBe('Bossa nova');
 expect(find('l6_p4_joao-gilberto').semantic!.value!.id).toBe('music-genre:bossa-nova');
 expect(stage('l6_p4_joao-gilberto')).toBe('B4');
 expect(records.some(c=>c.id==='art_music_l6_p4_caetano-veloso')).toBe(false);
 expect(stage('l6_p1_caetano-veloso')).toBe('B4');expect(stage('l6_p2_caetano-veloso')).toBe('B4');
});

test('manual editorial comparisons are labelled, never override positives and omit obsolete Brazilian popular music',()=>{
 const assertions=musicContent.evidence.flatMap(e=>e.kind==='assertion'?[e]:[]);
 const manual=assertions.filter(e=>e.id.startsWith('manual-editorial:2026-10-26:music:'));
 expect(manual).toHaveLength(98+8);
 expect(manual.every(e=>e.verdict==='invalid'&&/not external (source )?verification/.test(`${e.reviewedBy} ${e.locator}`))).toBe(true);
 expect(manual.every(e=>e.reviewedBy==='User — manual editorial approval (not external source verification)'&&e.locator.startsWith('Manual editorial approval: user request'))).toBe(true);
 expect(manual.filter(e=>e.locator.includes('selected by Claude Code'))).toHaveLength(8);
 expect(manual.some(e=>e.valueId==='music-genre:brazilian-popular-music')).toBe(false);
 for(const e of manual)expect(assertions.some(p=>p.verdict==='valid'&&p.predicateId===e.predicateId&&p.subjectId===e.subjectId&&p.valueId===e.valueId)).toBe(false);
 expect(context.evaluate(find('l8_p4_piano'),find('l8_p4_harp')).verdict).toBe('valid');
 expect(context.evaluate(find('l6_p4_stevie-wonder'),find('l6_p4_david-bowie')).verdict).toBe('valid');
 expect(context.evaluate(find('l6_p4_teresa-teng'),find('l6_p4_gilberto-gil')).verdict).toBe('unknown');
 expect(context.evaluate(find('l6_p4_joao-gilberto'),find('l6_p4_dolly-parton')).verdict).toBe('invalid');
 expect(context.evaluate(find('l6_p4_teresa-teng'),find('l6_p4_joao-gilberto')).verdict).toBe('invalid');
 expect(context.evaluate(find('l2_p4_maria-callas'),find('l2_p4_edith-piaf')).verdict).toBe('invalid');
 expect(context.evaluate(find('l8_p4_cello'),find('l8_p4_violin')).verdict).toBe('invalid');
});

test('learner text is media-free and keeps semantic review notes internal',()=>{
 for(const c of records){
  if(c.assessment?.scope)expect(c.assessment.scope.visibility).toBe('internal');
  expect(c.assessment?.identification).toBeUndefined();
  const t=getAssessmentTemplate(c);
  for(const text of [t.question(c.subject),t.statement(c.subject,c.object),t.blank(c.subject),c.object]){
   expect(text).not.toMatch(/UNVERIFIED|catalogue|reviewStatus|source comparison|assessmentScope|independent human/i);
  }
 }
});

test('Music is registered as an active Art subtopic: exactly the 297 teaching facts and all Music evidence, unchanged',()=>{
 const active=approvedArtContent.filter(c=>c.subtopicId==='music');
 expect(active).toEqual(musicTeachingContent.concepts);
 const reserves=new Set(musicReserveConcepts.map(c=>c.id));
 expect(active.some(c=>reserves.has(c.id))).toBe(false);
 const evidence=new Set(approvedArtEvidence.map(e=>e.id));
 expect(musicContent.evidence.every(e=>evidence.has(e.id))).toBe(true);
 for(let l=1;l<=10;l++)for(let p=1;p<=5;p++){
  const id=`art_music_l${l}_p${p}`;
  expect(activeArtConceptSets[id]).toBeDefined();
  expect(ACTIVE_CONCEPT_SETS[id as keyof typeof ACTIVE_CONCEPT_SETS]).toBe(activeArtConceptSets[id]);
  expect(activeArtConceptSets[id].concepts).toHaveLength(l<10&&p!==3&&p!==5?11:0);
 }
 for(const c of active)expect(activeSemanticContext.evaluate(c,c).verdict).toBe('valid');
 expect(activeSemanticContext.evidenceIssues).toEqual([]);
});

test.each(placements)('%s/%s generated Music quizzes obey quotas, progression and semantic grading; shortages return no exercises',(levelId,partId)=>{
 const concepts=getCurriculumPool(sets,{topicId:'art',subtopicId:'music',levelId,partId});
 for(const variant of ['A','B','C'] as const){
  const request={concepts,context,variant,mode:'teaching' as const,seed:`music:${levelId}:${partId}:${variant}`};
  const result=buildQuizResult(request);
  expect(result).toEqual(buildQuizResult(request));
  if(result.status!=='ready'){
   expect(result.exercises).toEqual([]);expect(result.diagnostics.shortages.length).toBeGreaterThan(0);continue;
  }
  expect(result.exercises).toHaveLength(8);
  expect(quizCompositionViolations(result.exercises,variant)).toEqual([]);
  expect(result.diagnostics.introducedFactIds).toHaveLength({A:6,B:3,C:2}[variant]);
  expect(new Set(result.diagnostics.selectedFactIds).size).toBe(6);
  for(const e of result.exercises)expect(exerciseValidityViolations(e,concepts,context)).toEqual([]);
 }
});
