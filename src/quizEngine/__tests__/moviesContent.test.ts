import { moviesContent, moviesTeachingContent, moviesReserveConcepts } from '../../../data/artContent/moviesContent';
import { moviesSourceReviews } from '../../../data/artContent/moviesSourceReviews';
import { createActiveArtSets, approvedArtContent, approvedArtEvidence, activeArtConceptSets } from '../../../data/activeArtContent';
import { teachingRelation, artCurriculum } from '../../../data/artCurriculum';
import { createSemanticContext } from '../semanticValidation';
import { targetRelationPolicies } from '../relationPolicies';
import { validateContent } from '../contentValidation';
import { getCurriculumPool } from '../curriculumPool';
import { buildQuizResult, quizCompositionViolations } from '../buildQuiz';
import { exerciseValidityViolations } from '../generationCoverage';
import { getAssessmentTemplate, getMatchingLabel, getMatchingCompatibility } from '../assessmentTemplates';
import { generateMatchingExercise } from '../exerciseFactory';
import { isPermanentlyLockable } from '../matchingSafety';
import { isMatchingPairCorrect } from '../answerValidation';
import type { Concept } from '../conceptTypes';

const records=moviesContent.concepts;
const context=createSemanticContext(records,{policies:targetRelationPolicies,evidence:moviesContent.evidence});
const sets=createActiveArtSets(moviesTeachingContent.concepts);
const placements=Array.from({length:9},(_,i)=>['p1','p2','p4'].map(p=>[`l${i+1}`,p])).flat();
const find=(id:string)=>records.find(c=>c.id===`art_movies_${id}`)!;
const asAnswer=(target:Concept,label:string)=>records.find(c=>c.relation===target.relation&&c.object===label)!;

test('Movies contains 486 checked facts: eighteen per exact placement, eleven taught in 6/3/2 order',()=>{
 expect(records).toHaveLength(486);expect(new Set(records.map(c=>c.id)).size).toBe(486);
 expect(moviesTeachingContent.concepts).toHaveLength(297);expect(moviesReserveConcepts).toHaveLength(189);
 expect(context.evidenceIssues).toEqual([]);
 expect(validateContent(records,targetRelationPolicies,undefined,{evidence:moviesContent.evidence}).filter(i=>i.severity==='error')).toEqual([]);
 for(const [l,p] of placements){
  const cohort=records.filter(c=>c.levelId===l&&c.partId===p);
  const taught=moviesTeachingContent.concepts.filter(c=>c.levelId===l&&c.partId===p);
  expect(cohort).toHaveLength(18);expect(taught).toHaveLength(11);
  expect(cohort.every(c=>c.relation===teachingRelation('movies',l,p))).toBe(true);
  expect(['A','B','C'].map(s=>taught.filter(c=>c.introducedIn===s).length)).toEqual([6,3,2]);
 }
 for(const c of records){expect(c.assessment?.reviewStatus).toBe('verified');expect(context.evaluate(c,c).verdict).toBe('valid');}
 for(const r of Object.values(moviesSourceReviews)){expect(new URL(r.url).protocol).toBe('https:');expect(r.locator.trim().length).toBeGreaterThan(20);}
 expect(moviesContent.evidence.every(e=>e.reviewedBy?.includes('not independent human') || (e.id.startsWith('manual-editorial:2026-10-27:movies:') && e.reviewedBy==='User — manual editorial approval (not external source verification)'))).toBe(true);
});

test('October 12 Movies titles and L8 relations supersede the older draft without changing the level structure',()=>{
 expect(artCurriculum.movies.l1.title).toBe('Famous Movies I');expect(artCurriculum.movies.l6.title).toBe('Famous Movies II');
 expect(artCurriculum.movies.l8.relations).toEqual({p1:'country_of_award_or_festival',p2:'top_prize_of_award_or_festival',p4:'founded_decade_of_award_or_festival'});
 expect(Object.keys(artCurriculum.movies)).toHaveLength(10);
});

test('source corrections distinguish co-directed debuts, studios, versions, original releases and historical launches',()=>{
 expect(find('l3_p4_federico-fellini').object).toBe('Variety Lights (1950)');
 expect(find('l3_p4_david-lean').object).toBe('In Which We Serve (1942)');
 expect(find('l7_p4_alfonso-cuaron').object).toBe('Sólo con tu pareja (1991)');
 expect(records.some(c=>c.id.endsWith('_pedro-almodovar'))).toBe(false);
 expect(find('l1_p4_evita').object).toBe('1996');
 expect(find('l8_p4_cannes').subject).toContain('planned pre-war launch');
 expect(find('l8_p4_cannes').object).toBe('1930s');
 expect(find('l8_p4_cannes').semantic?.qualifiers?.foundationBasis).toBe('planned-prewar-launch');
 expect(find('l8_p4_tallinn').object).toBe('1990s');
 expect(find('l8_p4_iffi').object).toBe('1950s');
 expect(find('l8_p4_iffi').introducedIn).toBe('A');
 expect(moviesReserveConcepts).toContain(find('l8_p4_cannes'));
 expect(find('l4_p1_persepolis').object).toBe('Je Suis Bien Content');
 expect(find('l4_p1_spider-verse').object).toBe('Sony Pictures Imageworks');
 expect(find('l9_p4_leia').object).toBe('R2-D2');
 expect(find('l9_p4_frodo').object).not.toBe('Bilbo Baggins');
});

test('known genre overlap is positive and unlisted comparisons stay unknown, never inferred wrong',()=>{
 for(const [id,label] of [['l1_p2_seven-samurai','Drama'],['l1_p2_titanic','Adventure'],['l1_p2_rear-window','Comedy'],['l6_p2_parasite','Comedy'],['l6_p2_inception','Fantasy'],['l6_p2_crouching-tiger','Romance']]){
  const a=find(id);expect(context.evaluate(a,asAnswer(a,label)).verdict).toBe('valid');
 }
 for(const [id,label] of [['l1_p2_star-wars','Romance'],['l1_p2_titanic','Horror'],['l1_p2_raiders','Romance'],['l6_p2_dangal','Musical']]){
  const a=find(id);expect(context.evaluate(a,asAnswer(a,label)).verdict).toBe('unknown');
 }
 expect(targetRelationPolicies.genre_of_movie.allowDuplicateTargetAnswers).toBe(true);
 expect(moviesContent.evidence.filter(e=>e.id.startsWith('manual-editorial:2026-10-27:movies:'))).toHaveLength(85);
 const umbrellas=find('l1_p2_umbrellas');expect(context.evaluate(umbrellas,asAnswer(umbrellas,'Comedy')).verdict).toBe('unknown');
});

test('animation co-production and same-film character answers are not falsely excluded',()=>{
 expect(context.evaluate(find('l4_p1_chicken-run'),find('l4_p1_shrek')).verdict).toBe('valid');
 expect(context.evaluate(find('l9_p1_luke'),find('l9_p1_leia')).verdict).toBe('valid');
 for(const c of records.filter(c=>c.relation==='character_of_animated_movie')){
  expect(c.assessment?.scope?.visibility).toBe('learner');expect(c.semantic?.qualifiers?.characterClue).toBeTruthy();
  expect(getMatchingLabel(c)).toContain(c.assessment!.scope!.text);
 }
});

test('learner wording is text-only, dates do not reveal their answer, and all source qualifications remain internal',()=>{
 for(const c of records){
  const t=getAssessmentTemplate(c);
  for(const text of [c.object,getMatchingLabel(c),t.question(c.subject),t.statement(c.subject,c.object),t.blank(c.subject)])
   expect(text).not.toMatch(/Pending|Unverified|catalogue|reviewStatus|source comparison|assessmentScope|complete assessed field|not independent human/i);
  if(c.relation.startsWith('release_year'))expect(c.subject).not.toContain(c.object);
  expect('image' in c).toBe(false);
 }
 expect(find('l9_p1_amalie').subject).not.toContain('Amélie');
});

test('Movies p3/p5 and mastery only review introduced facts, never reserves',()=>{
 const pool=(l:string,p:string)=>getCurriculumPool(sets,{topicId:'art',subtopicId:'movies',levelId:l,partId:p});
 for(let l=1;l<=9;l++){
  expect(pool(`l${l}`,'p3')).toEqual([...pool(`l${l}`,'p1'),...pool(`l${l}`,'p2')]);
  expect(pool(`l${l}`,'p5')).toEqual([...pool(`l${l}`,'p1'),...pool(`l${l}`,'p2'),...pool(`l${l}`,'p4')]);
 }
 for(let p=1;p<=5;p++)expect(pool('l10',`p${p}`)).toHaveLength(297);
 const reserves=new Set(moviesReserveConcepts.map(c=>c.id));expect(pool('l10','p1').some(c=>reserves.has(c.id))).toBe(false);
});

test('Movies is registered only with its 297 introduced facts and checked evidence after the release gates pass',()=>{
 expect(approvedArtContent.filter(c=>c.subtopicId==='movies')).toEqual(moviesTeachingContent.concepts);
 const evidenceIds=new Set(approvedArtEvidence.map(e=>e.id));
 expect(moviesContent.evidence.every(e=>evidenceIds.has(e.id))).toBe(true);
 for(let l=1;l<=10;l++)for(let p=1;p<=5;p++)expect(activeArtConceptSets[`art_movies_l${l}_p${p}`]).toBeDefined();
});

test.each(placements)('%s/%s produces safe Movies A/B/C quizzes with exact learning and type quotas',(levelId,partId)=>{
 const concepts=getCurriculumPool(sets,{topicId:'art',subtopicId:'movies',levelId,partId});
 for(const variant of ['A','B','C'] as const)for(let attempt=0;attempt<3;attempt++){
  const request={concepts,context,variant,mode:'teaching' as const,seed:`movies:test:${levelId}:${partId}:${variant}:${attempt}`};
  const result=buildQuizResult(request);expect(result.status).toBe('ready');expect(result.exercises).toHaveLength(8);
  expect(quizCompositionViolations(result.exercises,variant)).toEqual([]);
  expect(new Set(result.diagnostics.selectedFactIds).size).toBe(6);
  expect(result.diagnostics.introducedFactIds).toHaveLength({A:6,B:3,C:2}[variant]);
  for(const e of result.exercises){
   expect(exerciseValidityViolations(e,concepts,context)).toEqual([]);
   if(e.type==='matching'){expect(e.pairs).toHaveLength(4);expect(isPermanentlyLockable(e.pairs.map(a=>e.pairs.map(b=>isMatchingPairCorrect(a,b))))).toBe(true);}
  }
  if(attempt===0)expect(buildQuizResult(request)).toEqual(result);
 }
});


test('names-only character matching checks all twelve cross-pairs and retains ordinary relationship scope',()=>{
 const concepts=moviesTeachingContent.concepts.filter(c=>c.levelId==='l9'&&c.partId==='p4');
 for(const variant of ['A','B','C'] as const)for(let attempt=0;attempt<20;attempt++){
  const result=buildQuizResult({concepts,context,variant,mode:'teaching',seed:`same-movie:${variant}:${attempt}`});
  expect(result.status).toBe('ready');
  const matching=result.exercises.find(e=>e.type==='matching')!;
  expect(matching.prompt).toBe('Match each character with another character from the same movie.');
  expect(exerciseValidityViolations(matching,concepts,context)).toEqual([]);
  for(const left of matching.pairs)for(const right of matching.pairs){
   const a=concepts.find(c=>c.id===left.id)!,b=concepts.find(c=>c.id===right.id)!;
   expect(getMatchingCompatibility(a,b,context).verdict).toBe(a===b?'valid':'invalid');
   expect(left.left).toBe(a.subject.split(' — ')[0]);expect(right.right).toBe(b.object);
   expect(isMatchingPairCorrect(left,right)).toBe(a===b);
  }
  for(const exercise of result.exercises.filter(e=>e.type!=='matching')){
   const c=concepts.find(c=>c.id===exercise.conceptId)!;
   const text=exercise.type==='true_false'?exercise.statement:exercise.prompt;
   expect(text).toContain(String(c.semantic!.qualifiers!.relationshipScope).replace(/^(Her|His) /,''));
  }
 }
 // Same-film reserve characters can cross-match under the broader instruction.
 expect(getMatchingCompatibility(find('l9_p4_luke'),find('l9_p4_leia'),context).verdict).toBe('valid');
 expect(getMatchingCompatibility(find('l9_p4_leia'),find('l9_p4_luke'),context).verdict).toBe('valid');
 // Ordinary complete-set evidence cannot certify missing co-appearance evidence.
 const without=createSemanticContext(records,{policies:targetRelationPolicies,evidence:moviesContent.evidence.filter(e=>!e.id.startsWith('movies-same-movie:'))});
 const blocked=buildQuizResult({concepts,context:without,variant:'A',mode:'teaching',seed:'missing-coappearance'});
 expect(blocked.status).toBe('insufficient-content');
});


test('same-movie matching rejects a single unknown cell and cross-matching characters',()=>{
 const four=['hermione','dorothy','frodo','luke'].map(id=>find(`l9_p4_${id}`));
 const missingId=`movies-same-movie:${four[0].id}:${four[1].id}`;
 const missing=createSemanticContext(records,{policies:targetRelationPolicies,evidence:moviesContent.evidence.filter(e=>e.id!==missingId)});
 expect(context.evaluate(four[0],four[1]).verdict).toBe('invalid');
 expect(getMatchingCompatibility(four[0],four[1],missing).verdict).toBe('unknown');
 expect(generateMatchingExercise(four,'one-missing-cell',missing).status).toBe('unavailable');
 const overlapping=['luke','leia','hermione','dorothy'].map(id=>find(`l9_p4_${id}`));
 expect(generateMatchingExercise(overlapping,'overlapping-film',context).status).toBe('unavailable');
 const unsafe={type:'matching' as const,prompt:'Match each character with another character from the same movie.',pairs:overlapping.map(c=>({id:c.id,left:getMatchingLabel(c),right:c.object,answerIdentity:context.claim(c).answer.identity,acceptedAnswerIdentities:[context.claim(c).answer.identity]}))};
 expect(exerciseValidityViolations(unsafe,overlapping,context)).toContain('Matching misgrades semantic compatibility');
});
