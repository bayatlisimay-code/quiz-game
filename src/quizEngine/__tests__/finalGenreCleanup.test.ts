import { approvedArtContent as facts, approvedArtEvidence as evidence, retainedGenreSelections } from '../../../data/activeArtContent';
import { activeSemanticContext as context } from '../contentSnapshot';
import { buildQuizResult, quizCompositionViolations } from '../buildQuiz';
import { exerciseValidityViolations } from '../generationCoverage';
import { generateExercise, getExerciseCapabilities } from '../exerciseFactory';
import { getAnswerLabel } from '../learnerText';

const find = (id: string) => [...facts,...retainedGenreSelections].find(c => c.id === `art_${id}`)!;

test('Moonstone coming-of-age reading is positive; Godot historical exclusion has a setting-specific source', () => {
 const moonstone=find('literature_l1_p2_moonstone'), little=find('literature_l1_p2_little-women');
 expect(moonstone.object).toBe('Detective fiction');
 expect(context.evaluate(moonstone,little).verdict).toBe('valid');
 expect(getExerciseCapabilities(moonstone,facts,context).falseCandidates).not.toContainEqual(little);
 const godot=find('theatre_l5_p2_waiting-godot'), crucible=find('theatre_l5_p2_crucible');
 expect(context.evaluate(godot,crucible).verdict).toBe('invalid');
 expect(evidence.find(e=>e.id==='genre-comparison:theatre:waiting-godot:historical')?.locator).toContain('unspecified time and place');
});

test('unsettled genre exclusions remain unknown instead of becoming wrong answers', () => {
 for(const [subject,alternative] of [
  ['literature_l1_p2_moby-dick','literature_l1_p2_scarlet-letter'],
  ['theatre_l5_p2_top-girls','theatre_l5_p2_crucible'],
 ]) expect(context.evaluate(find(subject),find(alternative)).verdict).toBe('unknown');
});

test('manual approvals resolve only their exact previously unsettled comparisons', () => {
 for(const [subject,alternative] of [
  ['literature_l1_p2_frankenstein','literature_l1_p2_pride-prejudice'],
  ['theatre_l5_p2_glass-menagerie','theatre_l5_p2_bald-soprano'],
 ]) expect(context.evaluate(find(subject),find(alternative)).verdict).toBe('invalid');
});

test('the familiar Fantasy example repairs Literature l5 using existing evidence and exact progression', () => {
 const pool=facts.filter(c=>c.subtopicId==='literature'&&c.levelId==='l5'&&c.partId==='p2');
 expect(pool).toHaveLength(11);
 expect(['A','B','C'].map(stage=>pool.filter(c=>c.introducedIn===stage).length)).toEqual([6,3,2]);
 expect(find('literature_l5_p2_wonderful-wizard-oz').introducedIn).toBe('B');
 expect(find('literature_l5_p2_my-antonia').introducedIn).toBe('C');
 for(const part of ['p1','p4']){
  expect(find(`literature_l5_${part}_wonderful-wizard-oz`).introducedIn).toBe('C');
  expect(find(`literature_l5_${part}_my-antonia`).introducedIn).toBe('B');
 }
 for(const variant of ['A','B','C'] as const)for(let attempt=0;attempt<20;attempt++){
  const result=buildQuizResult({concepts:pool,context,variant,mode:'teaching',seed:`final-accessibility:${variant}:${attempt}`});
  expect(result.status).toBe('ready');
  expect(quizCompositionViolations(result.exercises,variant)).toEqual([]);
  for(const exercise of result.exercises)expect(exerciseValidityViolations(exercise,pool,context)).toEqual([]);
 }
});

test('family questions avoid shared-surname hints while retaining canonical names and response forms', () => {
 for(const [id,display,full] of [
  ['literature_l8_p4_elizabeth-bennet','Jane','Jane Bennet'],
  ['literature_l8_p4_victor-frankenstein','William','William Frankenstein'],
  ['theatre_l7_p4_nora-helmer','Torvald','Torvald Helmer'],
  ['theatre_l7_p4_hardcastle','Kate','Kate Hardcastle'],
 ]){
  const c=find(id),pool=facts.filter(x=>x.subtopicId===c.subtopicId&&x.levelId===c.levelId&&x.partId===c.partId);
  expect(c.object).toBe(full);expect(getAnswerLabel(c)).toBe(display);
  const caps=getExerciseCapabilities(c,pool,context);
  expect(caps.acceptedAnswers).toContain(full);expect(caps.acceptedAnswers).toContain(display);
  const generated=generateExercise(c,caps,'blank_options',context,`family-name:${id}`);
  expect(generated.status).toBe('generated');
  if(generated.status==='generated'&&generated.exercise.type==='fill_blank'){
   expect(generated.exercise.answerText).toBe(display);
   expect(generated.exercise.acceptedAnswers).toContain(full);
   expect(generated.exercise.acceptedAnswers).toContain(display);
  }
 }
 const product=find('design_l3_p2_pop-design');
 const productPool=facts.filter(c=>c.subtopicId==='design'&&c.levelId==='l3'&&c.partId==='p2');
 expect(product.object).toBe('S-shaped stacking chair');
 const productResult=generateExercise(product,getExerciseCapabilities(product,productPool,context),'mcq',context,'neutral-product-name');
 expect(productResult.status).toBe('generated');
 if(productResult.status==='generated'&&productResult.exercise.type==='mcq'){
  expect(productResult.exercise.options).toContain('S-shaped stacking chair');
  expect(productResult.exercise.options.some(option=>option.includes('Panton'))).toBe(false);
 }

});

test('October 23 broad Theatre primaries retain the earlier valid classifications', () => {
 const expected: Record<string,string>={
  hamlet:'Tragedy',antigone:'Tragedy',bacchae:'Tragedy',tartuffe:'Comedy',
  'importance-earnest':'Comedy','school-scandal':'Comedy','dolls-house':'Realist drama',
  cyrano:'Comedy',tempest:'Comedy',
 };
 for(const [work,answer] of Object.entries(expected)){
  const c=find(`theatre_l1_p2_${work}`);
  expect(c.object).toBe(answer);expect(context.evaluate(c,c).verdict).toBe('valid');
 }
 for(const [work,value] of [['antigone','greek-tragedy'],['bacchae','greek-tragedy'],['importance-earnest','comedy-manners']] as const){
  const c=find(`theatre_l1_p2_${work}`);
  expect(evidence).toContainEqual(expect.objectContaining({
   predicateId:'genre_of_play',subjectId:c.semantic!.subject!.id,valueId:`theatre-genre:${value}`,verdict:'valid',reviewStatus:'verified',
  }));
 }
 expect(find('theatre_l5_p2_waiting-godot').object).toBe('Absurdist drama');
 expect(context.evaluate(find('theatre_l5_p2_waiting-godot'),find('theatre_l5_p2_rosencrantz-guildenstern')).verdict).toBe('valid');
 expect(evidence).toContainEqual(expect.objectContaining({subjectId:'work:waiting-godot',valueId:'theatre-genre:tragicomedy',verdict:'valid',reviewStatus:'verified'}));
 for(const [id,answer] of [['literature_l1_p2_moonstone','Detective fiction'],['literature_l1_p2_frankenstein','Science fiction'],['literature_l1_p2_don-quixote','Satirical fiction'],['theatre_l5_p2_glass-menagerie','Memory play'],['theatre_l5_p2_oklahoma','Musical']] as const)expect(find(id).object).toBe(answer);
});

test('Godot displays Absurdist drama while only approved Glass Menagerie exclusions become false', () => {
 const c=find('theatre_l5_p2_waiting-godot'),pool=facts.filter(x=>x.subtopicId==='theatre'&&x.levelId==='l5'&&x.partId==='p2');
 const caps=getExerciseCapabilities(c,pool,context);
 for(const form of ['mcq','true','false','blank_options'] as const){
  const r=generateExercise(c,caps,form,context,`oct23:${form}`);
  expect(r.status).toBe('generated');
  if(r.status==='generated'&&r.exercise.type!=='matching')expect(r.exercise.answerText).toBe('Absurdist drama');
 }
 const glass=find('theatre_l5_p2_glass-menagerie');
 for(const alternative of ['theatre_l5_p2_bald-soprano','theatre_l5_p2_waiting-godot','theatre_l5_p2_master-harold']){
  const expected=alternative.endsWith('master-harold')?'unknown':'invalid';
  expect(context.evaluate(glass,find(alternative)).verdict).toBe(expected);
  if(expected==='unknown')expect(getExerciseCapabilities(glass,pool,context).falseCandidates).not.toContainEqual(find(alternative));
  else expect(getExerciseCapabilities(glass,pool,context).falseCandidates.some(c=>c.semantic?.value?.id===find(alternative).semantic?.value?.id)).toBe(true);
 }
});
