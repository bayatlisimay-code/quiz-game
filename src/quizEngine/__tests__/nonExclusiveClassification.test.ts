import { literatureModernNovelsSet } from '../../../data/artContent/literatureModernNovels';
import { theatrePlaySets, retainedOurTownGenreFact } from '../../../data/artContent/theatrePlays';
import { approvedArtContent, retainedGenreSelections } from '../../../data/activeArtContent';
import { activeSemanticContext as context } from '../contentSnapshot';
import { getAssessmentTemplate } from '../assessmentTemplates';
import { getExerciseCapabilities, generateExercise } from '../exerciseFactory';
import { getRelationTemplate } from '../templates';
import { familyDefinitions } from '../relationDefinitions';
import { isPermanentlyLockable } from '../matchingSafety';

const fact=(id:string)=>{const c=[...approvedArtContent,...retainedGenreSelections].find(c=>c.id===`art_${id}`);if(!c)throw new Error(id);return c;};

test('shared classification wording asks for a displayed choice without asserting unique historical membership',()=>{
  for(const relation of ['genre_of_movie','genre_of_play','genre_of_song','genre_of_painting']) {
    const template=getRelationTemplate(relation);
    expect(template.question('Example')).toContain('Which of these genres describes');
    expect(template.statement('Example','Alternative')).not.toMatch(/The .* genre .* is/);
  }
  for(const id of ['literature_l1_p2_frankenstein','theatre_l1_p2_hamlet']) {
    const c=fact(id),template=getAssessmentTemplate(c);
    expect(template.question(c.subject)).toMatch(/^Which of these genres/);
    expect(template.statement(c.subject,c.object)).toMatch(/^A /);
    expect(template.blank(c.subject)).toMatch(/^A /);
  }
  // A caller supplies the domain vocabulary, not a hardcoded genre-name switch.
  expect(familyDefinitions.membership('style','styles').question).toBe('Which of these styles describes “{s}”?');
});

test('a subject with several valid genres still gets exactly one verified correct displayed MCQ option',()=>{
  const target=fact('theatre_l1_p2_antigone');
  const pool=approvedArtContent.filter(c=>c.subtopicId==='theatre'&&c.levelId==='l1'&&c.partId==='p2');
  const caps=getExerciseCapabilities(target,pool,context);
  const parentGenre=fact('theatre_l1_p2_doctor-faustus');
  expect(context.evaluate(target,parentGenre).verdict).toBe('valid');
  expect(caps.optionCandidates).not.toContainEqual(parentGenre);
  expect(caps.forms.mcq.available).toBe(true);
  for(let attempt=0;attempt<20;attempt++)for(const form of ['mcq','false','blank_options'] as const){
    const result=generateExercise(target,caps,form,context,`non-exclusive:${attempt}:${form}`);
    expect(result.status).toBe('generated');
    if(result.status!=='generated')continue;
    const exercise=result.exercise;
    if(exercise.type==='mcq'||exercise.type==='fill_blank'){
      expect(exercise.options).toHaveLength(3);
      const verdicts=exercise.options!.map(label=>context.evaluate(target,pool.find(c=>c.object===label)!).verdict);
      expect(verdicts.filter(v=>v==='valid')).toHaveLength(1);
      expect(verdicts.filter(v=>v==='invalid')).toHaveLength(2);
    }else if(exercise.type==='true_false'){
      expect(exercise.correctAnswer).toBe(false);
      const negative=caps.falseCandidates.find(c=>getAssessmentTemplate(target).statement(target.subject,c.object,target.context)===exercise.statement);
      expect(negative).toBeDefined();
      expect(context.evaluate(target,negative!).verdict).toBe('invalid');
    }
  }
  // This exact Antigone/Realist comparison was manually approved; assert its
  // provenance while retaining an unapproved unknown as the fail-closed guard.
  expect(context.evaluate(target,fact('theatre_l1_p2_dolls-house'))).toMatchObject({
    verdict:'invalid',evidenceIds:['manual-editorial:2026-10-23:theatre:antigone:realist-drama'],
  });
  expect(context.evaluate(fact('theatre_l1_p2_hamlet'),fact('theatre_l1_p2_dolls-house')).verdict).toBe('unknown');
});

test('parent genres and sourced critical overlaps remain valid in every assessment form',()=>{
  for(const [subject,answer] of [
    ['theatre_l1_p2_hamlet','theatre_l1_p2_doctor-faustus'],
    ['theatre_l1_p2_cyrano','theatre_l1_p2_tartuffe'],
    ['literature_l1_p2_frankenstein','literature_l1_p2_little-women'],
  ])expect(context.evaluate(fact(subject),fact(answer)).verdict).toBe('valid');
  expect(context.evaluate(fact('theatre_l5_p2_glass-menagerie'),retainedOurTownGenreFact).verdict).toBe('valid');
  const formerLoveStory=literatureModernNovelsSet.concepts.find(c=>c.id==='art_literature_l5_p2_farewell-arms')!;
  expect(context.evaluate(fact('literature_l5_p2_maltese-falcon'),formerLoveStory).verdict).toBe('valid');
  expect(context.evaluate(fact('theatre_l5_p2_fences'),fact('theatre_l5_p2_glass-menagerie')).verdict).toBe('invalid');
  expect(context.evaluate(fact('theatre_l5_p2_fences'),fact('theatre_l5_p2_bald-soprano')).verdict).toBe('invalid');
});

test('a true parent match must not be locked into a quartet that can strand its other row',()=>{
  const rows=['hamlet','antigone','dolls-house','cyrano'].map(id=>theatrePlaySets[0].concepts.find(c=>c.id===`art_theatre_l1_p2_${id}`)!);
  // The preserved original Tragedy view is still true after Antigone's primary
  // becomes Greek tragedy; this guards the original unsafe-lock counterexample.
  expect(context.evaluate(rows[0],rows[1]).verdict).toBe('valid');
  expect(context.evaluate(rows[1],rows[0]).verdict).toBe('invalid');
  // Locking rows 2 and 3 to their diagonal answers, then Hamlet to Tragedy,
  // leaves Antigone with Revenge tragedy. More evidence about other cells
  // cannot change this independently witnessed dead end.
  const matrix=rows.map(a=>rows.map(b=>context.evaluate(a,b).verdict==='valid'));
  expect(isPermanentlyLockable(matrix)).toBe(false);
});
