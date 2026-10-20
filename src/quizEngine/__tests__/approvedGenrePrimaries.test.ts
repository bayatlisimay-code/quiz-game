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
// User-approved re-staging (2026-10-20): Literature l1 (R1) swaps two genre facts so A holds a single
// Gothic classification; Literature l5 (rank 1) swaps two so A holds a safe Western/Dystopian/Family-saga/Detective quartet. Every other fact keeps its table-order stage; author and
// publication facts for these works are unaffected.
const approvedStageOverrides: Record<string,'A'|'B'|'C'> = {
 'art_literature_l1_p2_wuthering-heights':'B',
 'art_literature_l1_p2_scarlet-letter':'A',
 // Literature l5 rank 1 (user-approved 2026-10-20).
 'art_literature_l5_p2_riders-purple-sage':'A',
 'art_literature_l5_p2_house-mango-street':'B',
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
   expect(active.introducedIn).toBe(approvedStageOverrides[before.id] ?? (index<6?'A':index<9?'B':'C'));
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

test('Literature l1 R1 re-staging keeps 6/3/2, one Gothic primary in A, and leaves author and publication stages alone',()=>{
 const stageOf=(part:string,work:string)=>approvedArtContent.find(c=>c.id===`art_literature_l1_${part}_${work}`)!.introducedIn;
 const genre=approvedArtContent.filter(c=>c.id.startsWith('art_literature_l1_p2_'));
 expect(genre).toHaveLength(11);
 for(const [stage,count] of [['A',6],['B',3],['C',2]] as const)expect(genre.filter(c=>c.introducedIn===stage)).toHaveLength(count);
 expect(genre.filter(c=>c.introducedIn==='A').filter(c=>c.object==='Gothic fiction').map(c=>c.subject)).toEqual(['Dracula']);
 expect(stageOf('p2','wuthering-heights')).toBe('B');
 expect(stageOf('p2','scarlet-letter')).toBe('A');
 // Only the genre lesson moved; the same works keep their author-credit and publication stages.
 expect(stageOf('p1','wuthering-heights')).toBe('A');
 expect(stageOf('p4','wuthering-heights')).toBe('A');
 expect(stageOf('p1','scarlet-letter')).toBe('B');
 expect(stageOf('p4','scarlet-letter')).toBe('B');
});

test('source-compared genre negatives added by Claude Code are explicit, work-specific and honestly labelled',()=>{
 type Assertion=Extract<(typeof approvedArtEvidence)[number],{kind:'assertion'}>;
 const assertions=approvedArtEvidence.filter((e):e is Assertion=>e.kind==='assertion');
 const added=assertions.filter(e=>e.reviewedBy?.startsWith('Claude Code'));
 expect(added).toHaveLength(16);
 for(const e of added){
  expect(e.verdict).toBe('invalid');
  expect(e.reviewStatus).toBe('verified');
  expect(e.reviewedBy).toMatch(/not independent human editorial approval/);
  expect(e.sourceUrl).toMatch(/^https:\/\//);
 }
 // A documented positive reading must never be turned into a negative.
 const negatives=new Set(added.map(e=>`${e.subjectId}|${e.valueId}`));
 for(const positive of assertions.filter(e=>e.verdict==='valid'))expect(negatives.has(`${positive.subjectId}|${positive.valueId}`)).toBe(false);
});

test('Literature l5 rank 1 re-staging keeps 6/3/2 and moves only the two approved genre facts',()=>{
 const stageOf=(part:string,work:string)=>approvedArtContent.find(c=>c.id===`art_literature_l5_${part}_${work}`)!.introducedIn;
 const genre=approvedArtContent.filter(c=>c.id.startsWith('art_literature_l5_p2_'));
 expect(genre).toHaveLength(11);
 for(const [stage,count] of [['A',6],['B',3],['C',2]] as const)expect(genre.filter(c=>c.introducedIn===stage)).toHaveLength(count);
 expect(genre.filter(c=>c.introducedIn==='A').map(c=>c.subject).sort()).toEqual(
  ['Fahrenheit 451','Riders of the Purple Sage','The Great Gatsby','The Joy Luck Club','The Maltese Falcon','Their Eyes Were Watching God']);
 expect(genre.filter(c=>c.introducedIn==='B').map(c=>c.subject).sort()).toEqual(['A Farewell to Arms','My Ántonia','The House on Mango Street']);
 // Author and publication placements keep their original stages.
 for(const part of ['p1','p4']){
  expect(stageOf(part,'riders-purple-sage')).toBe('B');
  expect(stageOf(part,'house-mango-street')).toBe('A');
 }
});
