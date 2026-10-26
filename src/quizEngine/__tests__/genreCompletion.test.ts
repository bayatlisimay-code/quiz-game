import { approvedArtContent as facts, approvedArtEvidence as evidence, retainedGenreSelections } from '../../../data/activeArtContent';
import { genreCompletionFacts } from '../../../data/artContent/genreReserves';
import { activeSemanticContext as context } from '../contentSnapshot';
import { buildQuizResult, quizCompositionViolations } from '../buildQuiz';
import { exerciseValidityViolations } from '../generationCoverage';
import { generateExercise, getExerciseCapabilities } from '../exerciseFactory';
import { evidenceProblems } from '../semanticEvidence';

const pool=(s:string,l:string)=>facts.filter(c=>c.subtopicId===s&&c.levelId===l&&c.partId==='p2');
const find=(id:string)=>facts.find(c=>c.id===`art_${id}`)!;

test('genre-only substitutions retain prior answers, manual evidence, and other teaching placements',()=>{
 expect(retainedGenreSelections.map(c=>[c.subject,c.object])).toEqual([['Dracula','Gothic fiction'],['Cyrano de Bergerac','Comedy']]);
 for(const [s,work]of [['literature','dracula'],['theatre','cyrano']])for(const part of ['p1','p4'])expect(find(`${s}_l1_${part}_${work}`)).toBeDefined();
 expect(find('literature_l1_p2_robinson-crusoe').object).toBe('Adventure fiction');
 expect(find('theatre_l1_p2_twelve-angry-men').object).toBe('Courtroom drama');
 expect(find('literature_l1_p2_wuthering-heights').introducedIn).toBe('A');
 expect(find('theatre_l5_p2_rosencrantz-guildenstern').introducedIn).toBe('A');
 expect(find('theatre_l5_p2_bald-soprano').introducedIn).toBe('B');
 expect(evidence.filter(e=>e.id.startsWith('manual-editorial:')&&!e.id.startsWith('manual-editorial:2026-10-26:music:'))).toHaveLength(102);
 expect(evidenceProblems(evidence)).toEqual([]);
 expect(context.evaluate(find('literature_l1_p2_treasure-island'),find('literature_l1_p2_pride-prejudice'))).toMatchObject({verdict:'invalid',evidenceIds:['genre-completion:2026-10-23:literature:treasure-island:novel-manners']});
 expect(context.evaluate(find('theatre_l1_p2_hamlet'),find('theatre_l1_p2_twelve-angry-men'))).toMatchObject({verdict:'invalid',evidenceIds:['genre-completion:2026-10-23:theatre:hamlet:courtroom']});
 // Courtroom drama does not make the new play non-realist or exclude other unreviewed readings.
 expect(context.evaluate(find('theatre_l1_p2_twelve-angry-men'),find('theatre_l1_p2_dolls-house')).verdict).toBe('unknown');
 for(const c of genreCompletionFacts.concepts)expect(context.evaluate(c,c).verdict).toBe('valid');
});

test('all nine genre variants generate safely over 20 seeds in both delivery modes',()=>{
 const contexts=[context,context.withImages(require('../../images/developmentRegistry.generated.json'))];
 for(const ctx of contexts)for(const [s,l]of [['literature','l1'],['theatre','l1'],['theatre','l5']]){
  const p=pool(s,l);
  expect(p).toHaveLength(11);expect(['A','B','C'].map(stage=>p.filter(c=>c.introducedIn===stage).length)).toEqual([6,3,2]);
  for(const variant of ['A','B','C'] as const)for(let n=0;n<20;n++){
   const request={concepts:p,context:ctx,variant,seed:`finished:${n}`};const result=buildQuizResult(request);
   expect(result.status).toBe('ready');expect(buildQuizResult(request)).toEqual(result);
   expect(quizCompositionViolations(result.exercises,variant)).toEqual([]);
   for(const ex of result.exercises)expect(exerciseValidityViolations(ex,p,ctx)).toEqual([]);
  }
 }
});

test('new canonical answers appear in actual question forms and safe matching cards',()=>{
 for(const [s,l,id]of [['literature','l1','robinson-crusoe'],['theatre','l1','twelve-angry-men']]){
  const p=pool(s,l),c=p.find(c=>c.id.endsWith('_'+id))!,caps=getExerciseCapabilities(c,p,context);
  for(const form of ['mcq','true','false','blank_options'] as const){
   const r=generateExercise(c,caps,form,context,`finished-display:${form}`);expect(r.status).toBe('generated');
   if(r.status==='generated'&&r.exercise.type!=='matching')expect(r.exercise.answerText).toBe(c.object);
  }
  const variant=s==='literature'?'C':'A';const result=buildQuizResult({concepts:p,context,variant,seed:'finished-display'});
  const pairs=result.exercises.find(e=>e.type==='matching')!.pairs;
  expect(pairs).toContainEqual(expect.objectContaining({left:c.subject,right:c.object}));
 }
});
