import { approvedArtContent, approvedArtEvidence, retainedGenreSelections } from '../../../data/activeArtContent';
import { literatureClassicsSet } from '../../../data/artContent/literatureClassics';
import { literatureModernNovelsSet } from '../../../data/artContent/literatureModernNovels';
import { theatrePlaySets, retainedOurTownGenreFact } from '../../../data/artContent/theatrePlays';
import { buildQuizResult, quizCompositionViolations } from '../buildQuiz';
import { exerciseValidityViolations } from '../generationCoverage';
import { genreReserveFacts } from '../../../data/artContent/genreReserves';
import { activeSemanticContext as context } from '../contentSnapshot';
import { getAssessmentTemplate } from '../assessmentTemplates';
import { getExerciseCapabilities, generateExercise } from '../exerciseFactory';

// Independent editorial acceptance fixture from the user's final decision table.
// Little Women's display text was unified with the other Bildungsroman facts on 2026-10-21 (user-approved correction).
const expected: Record<string,string[]> = {
 'literature_l1': ['Novel of manners','Detective fiction','Gothic fiction','Science fiction','Gothic fiction','Adventure fiction','Historical fiction','Adventure fiction','Coming-of-age fiction','Satirical fiction','Adventure fiction'],
 'literature_l5': ['Modernist novel','Dystopian fiction','Coming-of-age fiction','Family saga','Detective fiction','Coming-of-age fiction','Coming-of-age fiction','War fiction','Western','Fantasy','Detective fiction'],
 'theatre_l1': ['Tragedy','Tragedy','Comedy','Comedy','Realist drama','Comedy','Tragedy','Comedy','Comedy','Tragedy','Comedy'],
 'theatre_l5': ['Musical','Absurdist drama','Memory play','Comedy of menace','Realist drama','Tragedy','Absurdist drama','Feminist drama','Realist drama','Absurdist drama','Historical drama'],
};
// Explicit genre-only stage decisions. The final repair introduces Treasure Island in A and
// The Scarlet Letter in C; other lessons keep their original priorities. Theatre l5 introduces
// Bald Soprano in A and the approved Oklahoma! reserve in B, retaining Our Town outside the genre plan.
const approvedStageOverrides: Record<string,'A'|'B'|'C'> = {
 'art_literature_l1_p2_wuthering-heights':'A',
 'art_literature_l1_p2_scarlet-letter':'C',
 'art_literature_l1_p2_treasure-island':'A',
 // Literature l5 rank 1 (user-approved 2026-10-20).
 'art_literature_l5_p2_riders-purple-sage':'A',
 'art_literature_l5_p2_house-mango-street':'B',
 'art_literature_l5_p2_wonderful-wizard-oz':'B',
 'art_literature_l5_p2_my-antonia':'C',
 // Theatre l1: the mistaken-identity comedy joins A so a duplicate-target matching set exists there.
 'art_theatre_l1_p2_she-stoops-conquer':'A',
 'art_theatre_l1_p2_importance-earnest':'B',
 // Theatre l5: Top Girls and The Crucible join A (four mutually uncontested genres); Raisin and Fences, whose
 // realist/tragic readings overlap the others, move later. Final repair: Bald Soprano joins A; Oklahoma! enters B.
 'art_theatre_l5_p2_top-girls':'A',
 'art_theatre_l5_p2_crucible':'A',
 'art_theatre_l5_p2_raisin-sun':'C',
 'art_theatre_l5_p2_fences':'C',
 'art_theatre_l5_p2_bald-soprano':'B',
 'art_theatre_l5_p2_rosencrantz-guildenstern':'A',
 'art_theatre_l5_p2_oklahoma':'B',
};
const originalSets=[literatureClassicsSet,literatureModernNovelsSet,...theatrePlaySets];

test('all 44 approved primaries survive in active or retained records without deleting original evidence',()=>{
 const seen=new Set<string>();
 for(const set of originalSets){
  const original=set.concepts.filter(c=>['genre_of_novel','genre_of_play'].includes(c.relation));
  const key=`${original[0].subtopicId}_${original[0].levelId}`;
  expect(original).toHaveLength(11);
  for(const [index,before] of original.entries()){
   const active=[...approvedArtContent,...retainedGenreSelections].find(c=>c.id===before.id)!;
   expect(active.object).toBe(expected[key][index]);
   expect(active.assessment!.factId).toBe(before.assessment!.factId);
   const changed=['art_literature_l1_p2_wuthering-heights','art_theatre_l5_p2_rosencrantz-guildenstern','art_theatre_l5_p2_bald-soprano'].includes(before.id);
   expect(active.learning).toEqual(changed?{...before.learning,reinforcementPriority:before.id.endsWith('bald-soprano')?4:5}:before.learning);
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
 const active=(id:string)=>[...approvedArtContent,...retainedGenreSelections].find(c=>c.id===`art_${id}`)!;
 for(const [subject,alternative,valueId] of [
  ['literature_l1_p2_pride-prejudice','literature_l1_p2_little-women','literary-genre:bildungsroman'],
  ['literature_l1_p2_frankenstein','literature_l1_p2_dracula','literary-genre:gothic'],
  ['literature_l1_p2_frankenstein','literature_l1_p2_little-women','literary-genre:bildungsroman'],
  ['theatre_l1_p2_hamlet','theatre_l1_p2_doctor-faustus','theatre-genre:tragedy'],
  ['theatre_l1_p2_antigone','theatre_l1_p2_doctor-faustus','theatre-genre:tragedy'],
  ['theatre_l5_p2_waiting-godot','theatre_l5_p2_bald-soprano','theatre-genre:absurd'],
 ]){
  expect(active(alternative).semantic!.value!.id).toBe(valueId);
  expect(context.evaluate(active(subject),active(alternative)).verdict).toBe('valid');
 }
 // Moby-Dick is read as Gothic by some critics, so that negative is deliberately not certified.
 expect(context.evaluate(active('literature_l1_p2_moby-dick'),active('literature_l1_p2_dracula')).verdict).toBe('unknown');
 const target=active('literature_l1_p2_pride-prejudice');
 const restricted=[target,active('literature_l1_p2_little-women'),active('literature_l1_p2_frankenstein')];
 const caps=getExerciseCapabilities(target,restricted,context);
 // A known true alternative cannot be turned into the second incorrect choice.
 expect(caps.optionCandidates).toHaveLength(1);
 expect(caps.forms.mcq.available).toBe(false);
 expect(generateExercise(target,caps,'mcq',context,'no-padding').status).toBe('unavailable');

});

test('independent review preserves documented noncanonical classifications in grading and distractor selection',()=>{
 for(const [subtopic,level,work,alternative,primary] of [
  ['theatre','l5','master-harold','waiting-godot','Realist drama'],
  ['theatre','l5','raisin-sun','top-girls','Realist drama'],
  ['theatre','l5','top-girls','bald-soprano','Feminist drama'],
  ['literature','l1','moonstone','scarlet-letter','Detective fiction'],
 ] as const){
  const pool=approvedArtContent.filter(c=>c.subtopicId===subtopic&&c.levelId===level&&c.partId==='p2');
  const target=pool.find(c=>c.id===`art_${subtopic}_${level}_p2_${work}`)!;
  // Godot now teaches Absurdist drama. This earlier factual correction is
  // specifically about Master Harold's Tragicomedy reading, so retain the
  // original source-anchored Godot view instead of accidentally testing Absurdist.
  const candidate=work==='master-harold'
   ? theatrePlaySets.flatMap(set=>set.concepts).find(c=>c.id==='art_theatre_l5_p2_waiting-godot')!
   : pool.find(c=>c.id===`art_${subtopic}_${level}_p2_${alternative}`)!;
  const comparisonPool=pool.includes(candidate)?pool:[...pool,candidate];
  expect(target.object).toBe(primary);
  expect(context.evaluate(target,candidate).verdict).toBe('valid');
  const caps=getExerciseCapabilities(target,comparisonPool,context);
  expect(caps.optionCandidates).not.toContainEqual(candidate);
  expect(caps.falseCandidates).not.toContainEqual(candidate);
  expect(approvedArtEvidence.some(e=>e.kind==='assertion'&&e.subjectId===target.semantic!.subject!.id&&e.valueId===candidate.semantic!.value!.id&&e.verdict==='invalid')).toBe(false);
 }
});

test('broad Tragedy reaches actual available forms without fabricating extra options',()=>{
 const pool=approvedArtContent.filter(c=>c.subtopicId==='theatre'&&c.levelId==='l1'&&c.partId==='p2');
 const c=pool.find(c=>c.subject==='Antigone')!,caps=getExerciseCapabilities(c,pool,context);
 for(const form of ['true','false'] as const){
  const result=generateExercise(c,caps,form,context,`approved-primary:${form}`);
  expect(result.status).toBe('generated');
  if(result.status!=='generated'||result.exercise.type!=='true_false')continue;
  expect(result.exercise.answerText).toBe('Tragedy');
  expect(result.exercise.correctAnswer?result.exercise.statement:result.exercise.correctStatement).toContain('Tragedy');
 }
 // Manual approval now supplies Realist drama as a second certified wrong
 // target for Antigone; the canonical Tragedy answer must reach both forms.
 for(const form of ['mcq','blank_options'] as const)
  expect(generateExercise(c,caps,form,context,`approved-primary:${form}`).status).toBe('generated');
});

test('only the explicitly selected Oklahoma reserve enters l5; original reserve IDs remain unscheduled',()=>{
 expect(genreReserveFacts.concepts.map(c=>[c.subject,c.object])).toEqual([
  ['Nineteen Eighty-Four','Dystopian fiction'],['Oklahoma!','Musical'],
 ]);
 for(const reserve of genreReserveFacts.concepts)expect(approvedArtContent.some(c=>c.id===reserve.id)).toBe(false);
 expect(approvedArtContent.filter(c=>c.semantic?.subject?.id==='work:oklahoma').map(c=>c.id)).toEqual(['art_theatre_l5_p2_oklahoma']);
 expect(retainedOurTownGenreFact).toMatchObject({id:'art_theatre_l5_p2_our-town',object:'Drama'});
 expect(approvedArtContent.some(c=>c.id===retainedOurTownGenreFact.id)).toBe(false);
 for(const part of ['p1','p4'])expect(approvedArtContent.some(c=>c.id===`art_theatre_l5_${part}_our-town`)).toBe(true);
});

test('Literature l1 final staging keeps 6/3/2, one Gothic primary in A, and leaves author and publication stages alone',()=>{
 const stageOf=(part:string,work:string)=>approvedArtContent.find(c=>c.id===`art_literature_l1_${part}_${work}`)!.introducedIn;
 const genre=approvedArtContent.filter(c=>c.id.startsWith('art_literature_l1_p2_'));
 expect(genre).toHaveLength(11);
 for(const [stage,count] of [['A',6],['B',3],['C',2]] as const)expect(genre.filter(c=>c.introducedIn===stage)).toHaveLength(count);
 expect(genre.filter(c=>c.introducedIn==='A').filter(c=>c.object==='Gothic fiction').map(c=>c.subject)).toEqual(['Wuthering Heights']);
 expect(stageOf('p2','wuthering-heights')).toBe('A');
 expect(stageOf('p2','scarlet-letter')).toBe('C');
 expect(stageOf('p2','treasure-island')).toBe('A');
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
 expect(added.length).toBeGreaterThanOrEqual(16);
 for(const e of added){
  expect(e.verdict).toBe('invalid');
  // Historical quarantined comparisons remain stored but are not trusted evidence.
  expect(['verified','pending']).toContain(e.reviewStatus);
  expect(e.reviewedBy).toMatch(/not independent human editorial approval/);
  expect(e.sourceUrl).toMatch(/^https:\/\//);
 }
 // A documented positive reading must never be turned into a negative.
 const negatives=new Set(added.filter(e=>e.reviewStatus==='verified').map(e=>`${e.subjectId}|${e.valueId}`));
 for(const positive of assertions.filter(e=>e.reviewStatus==='verified'&&e.verdict==='valid'))expect(negatives.has(`${positive.subjectId}|${positive.valueId}`)).toBe(false);
});

test('Literature l5 rank 1 re-staging keeps 6/3/2 and keeps the documented genre-only stage exchanges',()=>{
 const stageOf=(part:string,work:string)=>approvedArtContent.find(c=>c.id===`art_literature_l5_${part}_${work}`)!.introducedIn;
 const genre=approvedArtContent.filter(c=>c.id.startsWith('art_literature_l5_p2_'));
 expect(genre).toHaveLength(11);
 for(const [stage,count] of [['A',6],['B',3],['C',2]] as const)expect(genre.filter(c=>c.introducedIn===stage)).toHaveLength(count);
 expect(genre.filter(c=>c.introducedIn==='A').map(c=>c.subject).sort()).toEqual(
  ['Fahrenheit 451','Riders of the Purple Sage','The Great Gatsby','The Joy Luck Club','The Maltese Falcon','Their Eyes Were Watching God']);
 expect(genre.filter(c=>c.introducedIn==='B').map(c=>c.subject).sort()).toEqual(['A Farewell to Arms','The House on Mango Street','The Wonderful Wizard of Oz']);
 // Author and publication placements keep their original stages.
 for(const part of ['p1','p4']){
  expect(stageOf(part,'riders-purple-sage')).toBe('B');
  expect(stageOf(part,'house-mango-street')).toBe('A');
 }
});

const stagesOf=(prefix:string)=>{
 const genre=approvedArtContent.filter(c=>c.id.startsWith(prefix));
 const by=(stage:string)=>genre.filter(c=>c.introducedIn===stage).map(c=>c.subject).sort();
 return {count:genre.length,A:by('A'),B:by('B'),C:by('C')};
};

test('Literature l1 genre lesson uses The Moonstone in Jane Eyre\'s slot while Jane Eyre keeps her author and publication lessons',()=>{
 const s=stagesOf('art_literature_l1_p2_');
 expect(s.count).toBe(11);
 expect([s.A.length,s.B.length,s.C.length]).toEqual([6,3,2]);
 expect(s.A).toContain('The Moonstone');
 expect(approvedArtContent.find(c=>c.id==='art_literature_l1_p2_moonstone')!.object).toBe('Detective fiction');
 expect(approvedArtContent.some(c=>c.id==='art_literature_l1_p2_jane-eyre')).toBe(false);
 for(const part of ['p1','p4'])expect(approvedArtContent.some(c=>c.id===`art_literature_l1_${part}_jane-eyre`)).toBe(true);
 for(const part of ['p1','p4'])expect(approvedArtContent.some(c=>c.id===`art_literature_l1_${part}_moonstone`)).toBe(false);
});

test('Theatre l1 and l5 genre staging keeps 6/3/2 with the approved genre-only moves',()=>{
 const t1=stagesOf('art_theatre_l1_p2_'),t5=stagesOf('art_theatre_l5_p2_');
 for(const s of [t1,t5]){expect(s.count).toBe(11);expect([s.A.length,s.B.length,s.C.length]).toEqual([6,3,2]);}
 expect(t1.A).toContain('She Stoops to Conquer');
 expect(t1.B).toContain('The Importance of Being Earnest');
 expect(t5.A).toEqual(expect.arrayContaining(['Top Girls','The Crucible']));
 expect(t5.C).toEqual(['Fences','A Raisin in the Sun'].sort());
 // Author and date lessons keep their own stages.
 const stage=(id:string)=>approvedArtContent.find(c=>c.id===id)!.introducedIn;
 expect(stage('art_theatre_l5_p1_fences')).toBe('A');
 expect(stage('art_theatre_l5_p4_top-girls')).toBe('B');
 expect(stage('art_theatre_l1_p1_importance-earnest')).toBe('A');
});

test('Top Girls and "Master Harold" retain sourced primaries; Our Town retains Drama outside the genre plan',()=>{
 const object=(id:string)=>approvedArtContent.find(c=>c.id===id)!.object;
 expect(object('art_theatre_l5_p2_top-girls')).toBe('Feminist drama');
 expect(object('art_theatre_l5_p2_master-harold')).toBe('Realist drama');
 expect(retainedOurTownGenreFact.object).toBe('Drama');
});

test('both repaired genre placements generate safe A/B/C quizzes without losing the four factual corrections',()=>{
 for(const [subtopic,level] of [['literature','l1'],['theatre','l5']] as const){
  const pool=approvedArtContent.filter(c=>c.subtopicId===subtopic&&c.levelId===level&&c.partId==='p2');
  for(const variant of ['A','B','C'] as const)for(let attempt=1;attempt<=20;attempt++){
   const result=buildQuizResult({concepts:pool,context,variant,seed:`final-three:${subtopic}:${variant}:${attempt}`});
   expect(result.status).toBe('ready');
   expect(quizCompositionViolations(result.exercises,variant)).toEqual([]);
   for(const exercise of result.exercises)expect(exerciseValidityViolations(exercise,pool,context)).toEqual([]);
  }
 }
});
