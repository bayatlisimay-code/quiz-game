import { createHash } from 'node:crypto';
import { approvedArtContent, approvedArtEvidence } from '../../../data/activeArtContent';
import { teachingRelation, artAvailability } from '../../../data/artCurriculum';
import { TOPIC_BY_ID } from '../../../data/catalog';
import { ACTIVE_CONCEPT_SETS, activeSemanticContext as context } from '../contentSnapshot';
import { getCurriculumPool } from '../curriculumPool';
import { validateContent } from '../contentValidation';
import { evidenceProblems } from '../semanticEvidence';
import { createSemanticContext } from '../semanticValidation';
import { getExerciseCapabilities, generateMatchingExercise, generateExercise } from '../exerciseFactory';
import { getAssessmentTemplate, getMatchingLabel } from '../assessmentTemplates';
import { catalogCoverageCases, measureGenerationCoverage } from '../generationCoverage';
import { measureLearningCoverage } from '../learningCoverage';
import { lessonAccess } from '../../state/lessonAccess';
import { planAssessmentStimulus } from '../../images/assessmentImages';
import type { RuntimeImageRegistry } from '../../images/types';
import developmentManifest from '../../images/developmentRegistry.generated.json';
import { isTypedAnswerCorrect } from '../answerValidation';
import { buildQuizResult } from '../buildQuiz';
import { getAnswerLabel, getMatchingCardLabel, wordCount } from '../learnerText';
const additions=approvedArtContent.filter(c=>['architecture','design'].includes(c.subtopicId));
const find=(id:string)=>{const result=additions.find(c=>c.id===id);if(!result)throw new Error(id);return result;};
const pool=(s:string,l:string,p:string)=>getCurriculumPool(ACTIVE_CONCEPT_SETS,{topicId:'art',subtopicId:s,levelId:l,partId:p});
const cases=catalogCoverageCases({...TOPIC_BY_ID.art,subtopics:TOPIC_BY_ID.art.subtopics.filter(s=>['architecture','design'].includes(s.id))},ACTIVE_CONCEPT_SETS);

test('all 54 approved teaching placements contain eleven sourced distinct facts, with explicit priorities and 6/3/2 introduction stages',()=>{
 expect(additions).toHaveLength(594);
 for(const subtopic of ['architecture','design'])for(let l=1;l<=9;l++)for(const p of ['p1','p2','p4']){
  const records=pool(subtopic,`l${l}`,p);
  expect(records).toHaveLength(11);
  expect(new Set(records.map(c=>c.assessment!.factId)).size).toBe(11);
  expect(records.every(c=>c.relation===teachingRelation(subtopic,`l${l}`,p))).toBe(true);
  expect(['A','B','C'].map(v=>records.filter(c=>c.introducedIn===v).length)).toEqual([6,3,2]);
  expect(records.every(c=>!!c.learning?.rationale&&!!c.learning.reinforcementPriority)).toBe(true);
 }
 expect(validateContent(approvedArtContent,context.policies,undefined,{evidence:approvedArtEvidence}).filter(i=>i.severity==='error')).toEqual([]);
 expect(evidenceProblems(approvedArtEvidence)).toEqual([]);
});

test('598 Painting/Sculpture records and their source evidence match the authorized accessibility baseline',()=>{
 const hash=(x:unknown)=>createHash('sha256').update(JSON.stringify(x)).digest('hex');
 expect(hash(approvedArtContent.filter(c=>['painting','sculpture'].includes(c.subtopicId)))).toBe('347987cc2057dac704041ac72cb5dca39a6d7364146bd5d424b89167905ff9ad');
 expect(hash(approvedArtEvidence.slice(0,2052))).toBe('76326eec62d6203d24578380d44f26286e98a62308c645487e88b211817a14b7');
});

test('all reviews reuse original teaching IDs; all five l10 parts aggregate the entire subtopic without duplicate weighting',()=>{
 for(const s of ['architecture','design']){
  for(let l=1;l<=9;l++){
   const p1=pool(s,`l${l}`,'p1'),p2=pool(s,`l${l}`,'p2'),p4=pool(s,`l${l}`,'p4');
   expect(pool(s,`l${l}`,'p3')).toEqual([...p1,...p2]);
   expect(pool(s,`l${l}`,'p5')).toEqual([...p1,...p2,...p4]);
  }
  for(let p=1;p<=5;p++){
   const ids=pool(s,'l10',`p${p}`).map(c=>c.id);
   expect(new Set(ids).size).toBe(297);
   expect(ids.slice().sort()).toEqual(additions.filter(c=>c.subtopicId===s).map(c=>c.id).sort());
  }
 }
});

test('uncertified overlapping typeface classifications retain unknown relationships',()=>{
 const records=pool('design','l6','p2');
 const arial=find('art_design_l6_p2_arial'),display=find('art_design_l6_p2_gabriola');
 expect(context.evaluate(arial,display).verdict).toBe('unknown');
 expect(getExerciseCapabilities(arial,records,context).falseCandidates).not.toContain(display);
 expect(generateMatchingExercise(records,'no-unknown-cross-pairs',context).status).toBe('generated');
});

test('explicit heterogeneous creator domains certify only scoped negatives and preserve collaborators',()=>{
 const beijing=find('art_architecture_l8_p2_beijing-stadium'),elb=find('art_architecture_l8_p2_elbphilharmonie');
 expect(context.evaluate(beijing,elb).verdict).toBe('valid');
 const valentine=find('art_design_l1_p2_valentine-typewriter'),carlton=find('art_design_l1_p2_carlton-divider');
 expect(context.evaluate(valentine,carlton).verdict).toBe('valid');
 const other=find('art_design_l1_p2_kettle-9093');
 expect(context.evaluate(valentine,other).verdict).toBe('invalid');
 const evidence=approvedArtEvidence.map(e=>e.kind==='complete-set'&&e.id===valentine.assessment!.evidenceIds[0]?{...e,valueTypes:undefined}:e);
 const narrow=createSemanticContext(approvedArtContent,{policies:context.policies,evidence});
 expect(narrow.evaluate(valentine,other).verdict).toBe('unknown');
});

test('original designer, later script contributions, studio credits and identity introduction events remain scoped',()=>{
 const arial=find('art_design_l6_p4_arial');
 expect(arial.subject).toBe('Arial');
 expect(arial.assessment!.scope!.text).toContain('initial and family-design credits');
 expect(arial.semantic!.qualifiers).toMatchObject({creditScope:'initial-and-family-design'});
 const calibri=find('art_design_l6_p4_calibri');
 expect(calibri.subject).toBe('Calibri');
 expect(calibri.assessment!.scope!.text).toContain('original type design');
 expect(calibri.assessment!.scope!.text).toContain('not later script additions');
 const gropius=find('art_architecture_l7_p2_bauhaus-dessau');
 const credit=approvedArtEvidence.find(e=>e.id===gropius.assessment!.evidenceIds[0]);
 expect(credit).toMatchObject({kind:'complete-set',valueIds:expect.arrayContaining(['person:walter-gropius','person:carl-fieger'])});
 const nasa=find('art_design_l9_p4_nasa-worm');
 expect(nasa.object).toBe('1975');
 expect(nasa.assessment!.event).toBe('introduction');
 expect(getAssessmentTemplate(nasa).question(nasa.subject)).toContain('introduction');
 expect(additions.some(c=>c.partId==='p4'&&/mobil-red-o|westinghouse-circle-w|lufthansa-ulm/.test(c.id))).toBe(false);
});

test('creator-owned sources, collaborative phase notes and recognition clues do not reveal the tested names',()=>{
 for(const [id,leakedName] of [
  ['art_architecture_l6_p2_casa-batllo','Gaudí'],
  ['art_architecture_l6_p2_sullivan-store','Sullivan'],
  ['art_architecture_l4_p2_madrid-palace','Sacchetti'],
  ['art_architecture_l6_p2_mexico-bellas-artes','Boari'],
  ['art_architecture_l8_p2_maxxi','Zaha Hadid'],
  ['art_architecture_l8_p2_zeitz-mocaa','Heatherwick'],
  ['art_architecture_l8_p2_elbphilharmonie','Herzog'],
  ['art_design_l9_p2_apple-rainbow','Rob Janoff'],
  ['art_design_l9_p2_ups-parcel-shield','Paul Rand'],
 ] as const){const c=find(id);expect(getAssessmentTemplate(c).question(c.subject)).not.toContain(leakedName);}
 const recognition=find('art_design_l1_p1_bauhaus-teapot');
 expect(recognition.assessment!.identification!.description!.text).not.toContain(recognition.object);
 for(const id of ['aksum','tiwanaku']){
  const c=find(`art_architecture_l2_p2_${id}`);
  expect(c.subject.toLowerCase()).not.toContain(id);
  expect(c.semantic!.subject!.id).toBe(`architecture:${id}`);
 }
 const styleExample=find('art_architecture_l1_p2_bauhaus');
 const recognitionWork=find('art_architecture_l7_p1_bauhaus-dessau');
 expect(styleExample.semantic!.value!.id).toBe(recognitionWork.semantic!.value!.id);
});

test('date subjects never reveal their numeric answer and standard calendar decades have explicit accepted forms',()=>{
 for(const c of additions.filter(c=>c.assessment?.event&&/^\d{4}/.test(c.object)))expect(c.subject).not.toContain(c.object);
 const decade=find('art_design_l1_p4_valentine-typewriter');
 expect(decade.object).toBe('1960s');
 expect(decade.semantic!.value!.temporal).toMatchObject({start:1960,end:1969});
 expect(getAssessmentTemplate(decade).question(decade.subject)).toContain('In which decade');
 const result=generateExercise(decade,getExerciseCapabilities(decade,pool('design','l1','p4'),context),'blank_typed',context,'typed-decade');
 if(result.status!=='generated'||result.exercise.type!=='fill_blank')throw new Error('Missing safe decade blank');
 expect(result.exercise.acceptedAnswers).toEqual(expect.arrayContaining(['1960s','the 1960s']));
 expect(isTypedAnswerCorrect(result.exercise,'  THE 1960s  ')).toBe(true);
 expect(isTypedAnswerCorrect(result.exercise,'1970s')).toBe(false);
 const bad={...decade,semantic:{...decade.semantic!,value:{...decade.semantic!.value!,temporal:{start:1961,end:1970,calendar:'gregorian-proleptic' as const}}}};
 const badContext=createSemanticContext([bad],{policies:context.policies,evidence:approvedArtEvidence});
 expect(getExerciseCapabilities(bad,[bad],badContext).forms.mcq.available).toBe(false);
});

test('Design is text-only in both delivery modes, retains Coming soon, and an injected development availability does not change the flag',()=>{
 const dev=context.withImages(developmentManifest as RuntimeImageRegistry);
 for(const c of additions.filter(c=>c.subtopicId==='design')){
  expect(dev.images.bindings[c.id]).toBeUndefined();
  if(c.assessment?.identification)for(const ctx of [context,dev])expect(planAssessmentStimulus(c,ctx,'mcq').stimulus?.kind).toBe('text');
 }
 expect(Object.keys(developmentManifest.bindings).some(id=>id.includes('_design_'))).toBe(false);
 expect(artAvailability.design).toBe('coming-soon');
 const progress={completedParts:{},completedQuizVariants:{}};
 const request={topicId:'art',subtopicId:'design',levelId:'l1',partId:'p1',variant:'A'};
 expect(lessonAccess(progress,request)).toMatchObject({allowed:false,reason:'Coming soon'});
 expect(lessonAccess(progress,request,{...artAvailability,design:'available'}).allowed).toBe(true);
 expect(artAvailability.design).toBe('coming-soon');
});

test('compact definition matching labels contain the term rather than internal evidence instructions',()=>{
 const c=find('art_architecture_l5_p1_arch');
 expect(getMatchingLabel(c)).toBe(c.subject);
 expect(getAssessmentTemplate(c).question(c.subject)).not.toContain('Defining terminology sense');
 const styles=pool('architecture','l1','p1');
 expect(new Set(styles.map(c=>getAnswerLabel(c,'matching'))).size).toBe(11);
 for(const style of styles){
  expect(wordCount(getAnswerLabel(style,'matching'))).toBeLessThanOrEqual(8);
  expect(getAnswerLabel(style)).toBe(style.object);
  expect(style.assessment!.presentation!.answer!.canonicalText).toBe(style.object);
 }
 const gothic=find('art_architecture_l1_p1_gothic');
 expect(getAnswerLabel(gothic,'matching')).toContain('Medieval');
 expect(getAssessmentTemplate(gothic).question(gothic.subject)).toBe('What does “Gothic” mean in architecture?');
});

test('real text/image recognition matching renders only its stimulus, never the answer-bearing internal subject key',()=>{
 const concepts=pool('design','l1','p1');
 const result=generateMatchingExercise(concepts,'real-design-recognition-captions',context);
 if(result.status!=='generated')throw new Error('Expected real recognition matching');
 for(const pair of result.exercise.pairs){
  expect(pair.stimulus?.kind).toBe('text');
  expect(pair.left).toContain('Description of');
  expect(getMatchingCardLabel(pair)).toBeUndefined();
 }
 const dev=context.withImages(developmentManifest as RuntimeImageRegistry);
 const works=pool('architecture','l3','p1');
 const selected=[find('art_architecture_l3_p1_colosseum'),...works.filter(c=>!c.id.endsWith('_colosseum')).slice(0,3)];
 const images=generateMatchingExercise(selected,'real-architecture-recognition-captions',dev);
 if(images.status!=='generated')throw new Error('Expected real image matching');
 const image=images.exercise.pairs.find(p=>p.stimulus?.kind==='image');
 expect(image).toBeDefined();
 expect(getMatchingCardLabel(image!)).toBeUndefined();
 const label='David (original marble) — creation date';
 expect(getMatchingCardLabel({left:label,right:'1501–1504'})).toBe(label);
});

test('a review with only one assessable teaching group reports the proven mixture shortage without exhausting search',()=>{
 const records=pool('architecture','l2','p3');
 const concepts=records.map(c=>c.partId==='p2'?{...c,assessment:undefined}:c);
 const result=buildQuizResult({concepts,context,mode:'review',variant:'A',seed:'single-assessable-review-group'});
 expect(result.status).toBe('insufficient-content');
 expect(result.exercises).toEqual([]);
 expect(result.diagnostics.searchNodes).toBe(0);
 expect(result.diagnostics.shortages).toContainEqual(expect.objectContaining({code:'joint-composition',needed:2,available:1}));
 expect(result.diagnostics.shortages.some(s=>s.code==='search-limit')).toBe(false);
});

test('production pools preserve composition and factual grading and fresh learners complete every level',()=>{
 expect(cases).toHaveLength(300);
 const result=measureGenerationCoverage(cases,context,1);
 expect(result.counts.failures).toBe(0);
 expect(result.counts.duplicateMatching).toBe(0);
 expect(result.violations).toEqual([]);
 // Every approved placement now has independently evidenced safe assessments.
 expect(result.counts.ready).toBe(300);
 expect(result.counts.insufficient).toBe(0);
 expect(result.rows.filter(row=>!row.ready).map(row=>`${row.id}:${row.variant}`)).toEqual([]);
 const fresh=measureLearningCoverage(cases,context,1);
 expect(fresh.counts.violations).toBe(0);
 expect(fresh.counts.ready).toBe(300);
 expect(fresh.counts.prerequisiteBlocked).toBe(0);
 expect(fresh.counts.insufficient).toBe(0);
},120000);
