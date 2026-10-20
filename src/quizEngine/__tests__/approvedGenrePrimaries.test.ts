import { approvedArtContent, approvedArtEvidence } from '../../../data/activeArtContent';
import { literatureClassicsSet } from '../../../data/artContent/literatureClassics';
import { literatureModernNovelsSet } from '../../../data/artContent/literatureModernNovels';
import { theatrePlaySets } from '../../../data/artContent/theatrePlays';
import { genreReserveFacts } from '../../../data/artContent/genreReserves';
import { activeSemanticContext as context } from '../contentSnapshot';
import { getAssessmentTemplate } from '../assessmentTemplates';
import { getExerciseCapabilities, generateExercise } from '../exerciseFactory';

// Independent editorial acceptance fixture from the user's final decision table.
const expected: Record<string,string[]> = {
 'literature_l1': ['Novel of manners','Bildungsroman (coming-of-age fiction)','Gothic fiction','Science fiction','Gothic fiction','Adventure fiction','Historical fiction','Adventure fiction','Coming-of-age fiction','Satirical fiction','Adventure fiction'],
 'literature_l5': ['Modernist novel','Dystopian fiction','Bildungsroman (coming-of-age fiction)','Family saga','Detective fiction','Bildungsroman (coming-of-age fiction)','Bildungsroman (coming-of-age fiction)','War fiction','Western','Fantasy','Detective fiction'],
 'theatre_l1': ['Revenge tragedy','Greek tragedy','Comedy','Comedy of manners','Realist drama','Heroic comedy','Greek tragedy','Comedy of manners','Comedy','Tragedy','Shakespearean romance'],
 'theatre_l5': ['Drama','Tragicomedy','Memory play','Comedy of menace','Realist drama','Tragedy','Absurdist drama','Drama','Drama','Absurdist drama','Historical drama'],
};
const originalSets=[literatureClassicsSet,literatureModernNovelsSet,...theatrePlaySets];

test('all 44 approved primaries reach the active assessment text without deleting original facts or evidence',()=>{
 const seen=new Set<string>();
 for(const set of originalSets){
  const original=set.concepts.filter(c=>['genre_of_novel','genre_of_play'].includes(c.relation));
  const key=`${original[0].subtopicId}_${original[0].levelId}`;
  expect(original).toHaveLength(11);
  for(const [index,before] of original.entries()){
   const active=approvedArtContent.find(c=>c.id===before.id)!;
   expect(active.object).toBe(expected[key][index]);
   expect(active.assessment!.factId).toBe(before.assessment!.factId);
   expect(active.learning).toEqual(before.learning);
   expect(active.introducedIn).toBe(index<6?'A':index<9?'B':'C');
   expect(context.evaluate(active,active).verdict).toBe('valid');
   expect(context.evaluate(active,before).verdict).toBe('valid');
   // Canonical metadata alone is insufficient: templates must use the approved
   // text. Actual unavailable forms remain unavailable; no fabricated quizzes.
   expect(getAssessmentTemplate(active).statement(active.subject,active.object)).toContain(expected[key][index]);
   seen.add(active.id);
  }
  for(const evidence of set.evidence)expect(approvedArtEvidence).toContainEqual(evidence);
 }
 expect(seen.size).toBe(44);
});

test('known alternative readings remain positive while an unsupported alternative stays unknown',()=>{
 const active=(id:string)=>approvedArtContent.find(c=>c.id===`art_${id}`)!;
 for(const [subject,alternative,valueId] of [
  ['literature_l1_p2_pride-prejudice','literature_l1_p2_jane-eyre','literary-genre:bildungsroman'],
  ['literature_l1_p2_frankenstein','literature_l1_p2_dracula','literary-genre:gothic'],
  ['literature_l1_p2_frankenstein','literature_l1_p2_jane-eyre','literary-genre:bildungsroman'],
  ['theatre_l1_p2_hamlet','theatre_l1_p2_doctor-faustus','theatre-genre:tragedy'],
  ['theatre_l1_p2_antigone','theatre_l1_p2_doctor-faustus','theatre-genre:tragedy'],
  ['theatre_l5_p2_waiting-godot','theatre_l5_p2_bald-soprano','theatre-genre:absurd'],
 ]){
  expect(active(alternative).semantic!.value!.id).toBe(valueId);
  expect(context.evaluate(active(subject),active(alternative)).verdict).toBe('valid');
 }
 expect(context.evaluate(active('literature_l1_p2_jane-eyre'),active('literature_l1_p2_frankenstein')).verdict).toBe('unknown');
 const target=active('literature_l1_p2_pride-prejudice');
 const restricted=[target,active('literature_l1_p2_jane-eyre'),active('literature_l1_p2_frankenstein')];
 const caps=getExerciseCapabilities(target,restricted,context);
 // A known true alternative cannot be turned into the second incorrect choice.
 expect(caps.optionCandidates).toHaveLength(1);
 expect(caps.forms.mcq.available).toBe(false);
 expect(generateExercise(target,caps,'mcq',context,'no-padding').status).toBe('unavailable');

});

test('a safely available genre exercise displays the approved Greek tragedy answer in actual production forms',()=>{
 const pool=approvedArtContent.filter(c=>c.subtopicId==='theatre'&&c.levelId==='l1'&&c.partId==='p2');
 const c=pool.find(c=>c.subject==='Antigone')!,caps=getExerciseCapabilities(c,pool,context);
 for(const form of ['mcq','true','false','blank_options'] as const){
  const result=generateExercise(c,caps,form,context,`approved-primary:${form}`);
  expect(result.status).toBe('generated');
  if(result.status!=='generated'||result.exercise.type==='matching')continue;
  expect(result.exercise.answerText).toBe('Greek tragedy');
  if(result.exercise.type==='true_false'){
   expect(result.exercise.correctAnswer?result.exercise.statement:result.exercise.correctStatement).toContain('Greek tragedy');
  }else expect(result.exercise.options).toContain('Greek tragedy');
 }
});

test('approved reserves remain unscheduled and cannot silently enter teaching or review pools',()=>{
 expect(genreReserveFacts.concepts.map(c=>[c.subject,c.object])).toEqual([
  ['Nineteen Eighty-Four','Dystopian fiction'],['Oklahoma!','Musical'],
 ]);
 for(const reserve of genreReserveFacts.concepts)expect(approvedArtContent.some(c=>c.id===reserve.id)).toBe(false);
});
