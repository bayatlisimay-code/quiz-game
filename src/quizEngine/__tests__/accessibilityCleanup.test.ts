import { createHash } from 'node:crypto';
import { approvedArtContent as facts, approvedArtEvidence as evidence } from '../../../data/activeArtContent';
import { retiredEarlySculptures } from '../../../data/artContent/ancientSculpture';
import { musicTeachingContent } from '../../../data/artContent/musicContent';
import { moviesTeachingContent } from '../../../data/artContent/moviesContent';
import { getAssessmentTemplate, getMatchingLabel, getVisibleAssessmentScope } from '../assessmentTemplates';
import { getAnswerLabel } from '../learnerText';
import { activeSemanticContext as context } from '../contentSnapshot';
import { getExerciseCapabilities, generateExercise } from '../exerciseFactory';
import { buildQuizResult, quizCompositionViolations } from '../buildQuiz';
import { exerciseValidityViolations } from '../generationCoverage';
import { validateContent } from '../contentValidation';
import { isMatchingPairCorrect } from '../answerValidation';
const find=(id:string)=>{const c=facts.find(c=>c.id===`art_${id}`);if(!c)throw new Error(id);return c;};
const pool=(s:string,l:string,p:string)=>facts.filter(c=>c.subtopicId===s&&c.levelId===l&&c.partId===p);

test('approved everyday answers are assessed without discarding valid narrower classifications',()=>{
 const hamlet=find('theatre_l1_p2_hamlet'),little=find('literature_l1_p2_little-women');
 expect(hamlet.object).toBe('Tragedy');expect(little.object).toBe('Coming-of-age fiction');
 expect(little.semantic!.value!.id).toBe('literary-genre:bildungsroman');
 const revenge={...hamlet,object:'Revenge tragedy',assessment:{...hamlet.assessment!,evidenceIds:['final-genre:positive:art_theatre_l1_p2_hamlet:revenge-tragedy']},semantic:{...hamlet.semantic!,value:{...hamlet.semantic!.value!,id:'theatre-genre:revenge-tragedy'}}};
 expect(context.evaluate(hamlet,revenge).verdict).toBe('valid');
 for(const c of [hamlet,little,find('design_l6_p2_arial')]){
  const caps=getExerciseCapabilities(c,pool(c.subtopicId,c.levelId,c.partId),context);
  for(const form of ['mcq','true','false','blank_options'] as const){
   const result=generateExercise(c,caps,form,context,`accessible:${form}`);
   if(c===hamlet&&(form==='mcq'||form==='blank_options')){
    // Hamlet now has its own source-reviewed Courtroom contradiction. Keep
    // the unapproved Realist answer excluded and assert the exact safe pool.
    expect(result.status).toBe('generated');
    if(result.status==='generated'&&'options' in result.exercise){
     expect([...result.exercise.options!].sort()).toEqual(['Comedy','Courtroom drama','Tragedy']);
     expect(result.exercise.options).not.toContain('Realist drama');
    }
   }else{
    expect(result.status).toBe('generated');
    if(result.status==='generated'&&result.exercise.type!=='matching')expect(result.exercise.answerText).toBe(c.object);
   }
  }
 }
});

test('Arial is sans-serif without treating fixed width as evidence against that broad property',()=>{
 const arial=find('design_l6_p2_arial'),consolas=find('design_l6_p2_consolas'),calibri=find('design_l6_p2_calibri');
 expect(arial.object).toBe('Sans-serif');
 expect(context.evaluate(consolas,arial).verdict).toBe('unknown');
 expect(context.evaluate(arial,calibri).verdict).toBe('valid');
 expect(context.evaluate(calibri,arial).verdict).toBe('valid');
 expect(getExerciseCapabilities(consolas,pool('design','l6','p2'),context).falseCandidates).not.toContain(arial);
});

test('notable Dostoevsky novel changes while the first-published novel and stable learning identities are preserved',()=>{
 expect(find('literature_l3_p1_fyodor-dostoevsky').object).toBe('Crime and Punishment');
 expect(find('literature_l3_p2_fyodor-dostoevsky').object).toBe('Poor Folk');
 expect(find('literature_l3_p1_fyodor-dostoevsky').assessment!.factId).toBe('person:fyodor-dostoevsky:notable_novel_of_author');
});

test('culture-only Sculpture substitutions retain original recognition/date records and the existing reserve counts',()=>{
 expect(retiredEarlySculptures.map(w=>w.id)).toEqual(['met-1989-281-41','met-ushumgal-stele']);
 for(const part of ['p1','p2','p4']){
  const records=pool('sculpture','l1',part);expect(records).toHaveLength(part==='p2'?11:13);
  expect(['A','B','C'].map(stage=>records.filter(c=>c.introducedIn===stage).length)).toEqual(part==='p2'?[6,3,2]:[6,3,4]);
  for(const id of ['great-sphinx','hongshan-jade-dragon'])expect(records.some(c=>c.id.endsWith(`_${id}`))).toBe(part==='p2');
  for(const work of retiredEarlySculptures){
   expect(records.some(c=>c.id.endsWith(`_${work.id}`))).toBe(part!=='p2');
   expect(evidence.some(e=>e.id===`source-check:art_sculpture_l1_${part}_${work.id}`)).toBe(true);
  }
 }
 expect(find('sculpture_l1_p2_hongshan-jade-dragon').subject).toBe('Jade dragon fragment');
});

test('Sculpture chronology uses source-contained decades with safe composition and matching in all variants',()=>{
 const records=pool('sculpture','l4','p4');expect(records).toHaveLength(11);
 for(const c of records){
  expect(c.object).toMatch(/^\d{4}s$/);expect(context.evaluate(c,c).verdict).toBe('valid');
  expect(c.semantic!.qualifiers!.datePrecision).toBe('decade');
  const bounds=evidence.find(e=>e.id===`decade-containment:${c.id}:bounds`)!;
  if(bounds.kind!=='date-bound')throw new Error('Missing source bounds');
  expect(bounds.start).toBeGreaterThanOrEqual(c.semantic!.value!.temporal!.start);
  expect(bounds.end).toBeLessThanOrEqual(c.semantic!.value!.temporal!.end);
 }
 for(const variant of ['A','B','C'] as const)for(let seed=0;seed<10;seed++){
  const result=buildQuizResult({concepts:records,context,variant,mode:'teaching',seed:`decades:${variant}:${seed}`});
  expect(result.status).toBe('ready');expect(result.exercises).toHaveLength(8);
  expect(quizCompositionViolations(result.exercises,variant)).toEqual([]);
  for(const ex of result.exercises){
   expect(exerciseValidityViolations(ex,records,context)).toEqual([]);
   if(ex.type==='matching')for(const a of ex.pairs)for(const b of ex.pairs){
    expect(isMatchingPairCorrect(a,b)).toBe(a.answerIdentity===b.answerIdentity);
   }
  }
 }
});

test('all authored learner fields omit catalogue codes and instructions while material date/version scopes remain',()=>{
 const forbidden=/Defining requirements|catalogue|catalog|accession|retain |preserve |at its stated specificity|object \d+\.\d+|dating label|Using present-day|recorded (?:creation|completion)? ?date|documented (?:for|dating|pioneer)|listed for|specified relationship|reliably documented|V&A (?:O|CIRC)\.?\d|MAK GO|Identify the |\((?:Flavian|Norman) fabric\)/i;
 for(const c of facts){
  const template=getAssessmentTemplate(c),description=c.assessment?.identification?.description;
  const texts=description ? [description.text,getAnswerLabel(c)] : [template.question(c.subject),template.statement(c.subject,getAnswerLabel(c)),template.blank(c.subject),getMatchingLabel(c),getAnswerLabel(c)];
  for(const text of texts)expect({id:c.id,leak:forbidden.test(text)}).toEqual({id:c.id,leak:false});
 }
 expect(find('sculpture_l7_p4_moma-231-1948').object).toBe('1913 (cast 1931 or 1934)');
 expect(getMatchingLabel(find('sculpture_l7_p4_moma-231-1948'))).toContain('MoMA cast');
 const eiffel=find('architecture_l6_p2_eiffel-tower');
 expect(getVisibleAssessmentScope(eiffel)).toContain('rather than structural engineering');
 expect(validateContent(facts,context.policies,undefined,{evidence}).filter(e=>e.severity==='error')).toEqual([]);
});

test('simplified definitions and introductory design names actually reach displayed options',()=>{
 const marble=find('architecture_l5_p2_marble');
 expect(marble.subject).toBe('Marble');
 expect(getAnswerLabel(marble)).toBe('Stone formed when heat and pressure change limestone or dolomite.');
 const gypsum=find('architecture_l5_p2_gypsum');expect(getAnswerLabel(gypsum)).toBe('A soft mineral used to make plaster and plasterboard.');
 expect(find('design_l1_p1_anglepoise-1227').object).toBe('Anglepoise desk lamp');
 const c=find('theatre_l1_p4_hamlet'),caps=getExerciseCapabilities(c,pool('theatre','l1','p4'),context);
 expect(caps.optionCandidates.map(x=>x.object).sort()).toEqual(['1669','1895']);
});

test('all 7554 pre-cleanup evidence identities remain, including retired and provisional assertions',()=>{
 const added=/^genre-completion:|^institution-check:art_(?:literature_l1_p2_robinson-crusoe|theatre_l1_p2_twelve-angry-men)$|^manual-editorial:2026-10-23:|^final-genre:positive:art_theatre_l1_p2_hamlet:revenge-tragedy$|^final-genre:positive:art_theatre_l1_p2_(?:antigone|bacchae):greek-tragedy$|^final-genre:positive:art_theatre_l1_p2_importance-earnest:comedy-manners$|^(?:decade-containment:|accessibility:)|^source-check:art_sculpture_l1_p[124]_(?:great-sphinx|hongshan-jade-dragon)$/;
 // Music and Movies were registered after this historical baseline and are excluded by evidence identity.
 const laterEvidence=new Set([...musicTeachingContent.evidence,...moviesTeachingContent.evidence].map(e=>e.id));
 const retained=evidence.filter(e=>!added.test(e.id)&&!laterEvidence.has(e.id)).map(e=>e.id).sort();
 expect(retained).toHaveLength(7554);
 expect(createHash('sha256').update(JSON.stringify(retained)).digest('hex')).toBe('94e2c47202a5ff0a8a31cabf0cf089faee7deccc511844d12e840e033a5d6590');
});


test('plain question wording reads naturally for credits, dates, places and relationships',()=>{
 const q=(id:string)=>getAssessmentTemplate(find(id)).question(find(id).subject);
 const s=(id:string)=>getAssessmentTemplate(find(id)).statement(find(id).subject,getAnswerLabel(find(id)));
 expect(q('painting_l2_p2_ng186')).toBe('Who painted “The Arnolfini Portrait”?');
 expect(q('theatre_l1_p1_hamlet')).toBe('Who wrote “Hamlet”?');
 expect(q('literature_l3_p4_jane-austen')).toBe('In which present-day country was Jane Austen born?');
 expect(s('theatre_l1_p4_hamlet')).toBe('“Hamlet” was written around 1601. (Approximate composition.)');
 expect(q('sculpture_l1_p4_nhm-willendorf')).toBe('When was “Venus of Willendorf” made? (Approximate age.)');
 expect(s('sculpture_l1_p4_nhm-willendorf')).toContain('dates from about 29,500 years ago');
 expect(q('theatre_l7_p4_ismene')).toBe('Who is the sister of “Ismene (Antigone)”?');
 expect(q('architecture_l3_p2_colosseum')).toBe('Which building tradition does “Colosseum (Rome amphitheatre)” belong to?');
});

test('date options avoid near-identical years even without structured intervals',()=>{
 const records=pool('theatre','l5','p4');
 for(const c of records)for(let seed=0;seed<10;seed++){
  const caps=getExerciseCapabilities(c,records,context);
  const result=generateExercise(c,caps,'mcq',context,`spacing:${seed}`);
  if(result.status!=='generated'||result.exercise.type!=='mcq')continue;
  const years=result.exercise.options.map(o=>Number(/\d{3,4}/.exec(o)![0]));
  for(const a of years)for(const b of years)if(a!==b)expect(Math.abs(a-b)).toBeGreaterThanOrEqual(10);
  expect(exerciseValidityViolations(result.exercise,records,context)).toEqual([]);
 }
});

test('calendar-aware preference uses only existing certified negatives and well-separated options',()=>{
 const records=pool('design','l9','p4');
 const ibm=find('design_l9_p4_ibm-eight-bar');
 const caps=getExerciseCapabilities(ibm,records,context);
 expect(caps.optionCandidates.length).toBeGreaterThanOrEqual(2);
 expect(caps.optionCandidates.every(c=>context.evaluate(ibm,c).verdict==='invalid')).toBe(true);
 for(let seed=0;seed<20;seed++){
  const result=generateExercise(ibm,caps,'mcq',context,`spaced:${seed}`);
  expect(result.status).toBe('generated');
  if(result.status!=='generated'||result.exercise.type!=='mcq')throw new Error('Missing MCQ');
  expect(new Set(result.exercise.options.map(x=>Math.floor(Number(x)/10))).size).toBe(3);
  expect(exerciseValidityViolations(result.exercise,records,context)).toEqual([]);
 }
});
