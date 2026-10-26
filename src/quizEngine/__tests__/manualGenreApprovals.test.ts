import { createHash } from 'node:crypto';
import { approvedArtContent as facts, approvedArtEvidence as evidence, approvedArtEvidence as allEvidence, retainedGenreSelections } from '../../../data/activeArtContent';
import { theatrePlaySets } from '../../../data/artContent/theatrePlays';
import { musicTeachingContent } from '../../../data/artContent/musicContent';
import { activeSemanticContext as context } from '../contentSnapshot';
import { evidenceProblems } from '../semanticEvidence';
import { buildQuizResult, quizCompositionViolations } from '../buildQuiz';
import { exerciseValidityViolations } from '../generationCoverage';
import { getExerciseCapabilities, generateExercise } from '../exerciseFactory';

// Exact work-specific decisions supplied by the user; not a disjoint genre scheme.
const expected = {
 "literature": {
  "pride-prejudice": [
   "adventure"
  ],
  "moonstone": [
   "fantasy",
   "western",
   "dystopian",
   "war",
   "family-saga"
  ],
  "wuthering-heights": [
   "adventure",
   "western",
   "dystopian",
   "war"
  ],
  "frankenstein": [
   "adventure",
   "western",
   "war",
   "family-saga",
   "novel-manners"
  ],
  "dracula": [
   "detective",
   "western",
   "war",
   "novel-manners",
   "family-saga"
  ],
  "moby-dick": [
   "western",
   "dystopian",
   "family-saga",
   "novel-manners"
  ],
  "scarlet-letter": [
   "western",
   "dystopian",
   "war",
   "fantasy"
  ],
  "huckleberry-finn": [
   "novel-manners",
   "gothic",
   "dystopian",
   "war"
  ],
  "little-women": [
   "adventure",
   "western",
   "dystopian",
   "war"
  ],
  "don-quixote": [
   "gothic",
   "dystopian",
   "western"
  ],
  "treasure-island": [
   "gothic",
   "western",
   "dystopian",
   "family-saga"
  ]
 },
 "theatre": {
  "hamlet": [
   "absurd",
   "memory-play"
  ],
  "antigone": [
   "realist-drama",
   "memory-play"
  ],
  "tartuffe": [
   "tragedy",
   "realist-drama",
   "absurd"
  ],
  "importance-earnest": [
   "tragedy",
   "absurd",
   "realist-drama"
  ],
  "dolls-house": [
   "comedy",
   "absurd",
   "memory-play"
  ],
  "cyrano": [
   "absurd",
   "memory-play",
   "realist-drama"
  ],
  "bacchae": [
   "realist-drama",
   "memory-play"
  ],
  "school-scandal": [
   "realist-drama",
   "absurd"
  ],
  "she-stoops-conquer": [
   "realist-drama",
   "absurd"
  ],
  "doctor-faustus": [
   "realist-drama",
   "memory-play"
  ],
  "tempest": [
   "absurd",
   "memory-play",
   "revenge-tragedy"
  ],
  "oklahoma": [
   "feminist-drama",
   "historical",
   "tragedy"
  ],
  "waiting-godot": [
   "feminist-drama",
   "tragedy"
  ],
  "glass-menagerie": [
   "absurd",
   "comedy",
   "comedy-menace",
   "historical"
  ],
  "birthday-party": [
   "historical",
   "feminist-drama",
   "realist-drama",
   "tragedy"
  ],
  "raisin-sun": [
   "comedy-menace",
   "historical",
   "comedy"
  ],
  "fences": [
   "comedy-menace",
   "feminist-drama"
  ],
  "rosencrantz-guildenstern": [
   "historical",
   "feminist-drama"
  ],
  "top-girls": [
   "musical",
   "comedy-menace",
   "tragedy"
  ],
  "master-harold": [
   "musical",
   "comedy-menace",
   "tragedy"
  ],
  "bald-soprano": [
   "comedy-menace",
   "tragedy"
  ],
  "crucible": [
   "comedy-menace",
   "feminist-drama",
   "tragedy"
  ]
 }
} as const;
const manual=evidence.filter(e=>e.id.startsWith('manual-editorial:2026-10-23:'));
const hash=(x:unknown)=>createHash('sha256').update(JSON.stringify(x)).digest('hex');

test('all 101 approved negatives and the explicit Moonstone positive have manual provenance and exact identities',()=>{
 const expectedKeys:string[]=[];
 for(const [domain,works] of Object.entries(expected))for(const [work,values]of Object.entries(works))for(const value of values){
  const valueId=`${domain==='literature'?'literary':'theatre'}-genre:${value}`;
  expectedKeys.push(`manual-editorial:2026-10-23:${domain}:${work}:${value}`);
  const item=manual.find(e=>e.id===expectedKeys.at(-1))!;
  expect(item).toMatchObject({kind:'assertion',predicateId:domain==='literature'?'genre_of_novel':'genre_of_play',subjectId:`work:${work}`,valueId,verdict:'invalid',qualifiers:{},reviewStatus:'verified',reviewedAt:'2026-10-23'});
  expect(item.reviewedBy).toBe('User — manual editorial approval (not external source verification)');
  expect(item.locator).toContain('not external verification');
  expect(evidence.some(e=>e.kind==='assertion'&&e.predicateId===item.predicateId&&e.subjectId===`work:${work}`&&e.valueId===valueId&&e.verdict==='valid'&&e.reviewStatus==='verified')).toBe(false);
  const target=[...facts,...retainedGenreSelections].find(c=>c.relation===item.predicateId&&c.semantic?.subject?.id===`work:${work}`)!;
  const candidate=[...facts,...theatrePlaySets.flatMap(s=>s.concepts)].find(c=>c.relation===target.relation&&c.semantic?.value?.id===valueId)!;
  expect(candidate).toBeDefined();
  expect(context.evaluate(target,candidate).verdict).toBe('invalid');
 }
 expectedKeys.push('manual-editorial:2026-10-23:literature:moonstone:adventure');
 expect(manual.map(e=>e.id).sort()).toEqual(expectedKeys.sort());
 expect(manual).toHaveLength(102);
 const moonstone=facts.find(c=>c.id==='art_literature_l1_p2_moonstone')!,adventure=facts.find(c=>c.id==='art_literature_l1_p2_moby-dick')!;
 expect(context.evaluate(moonstone,adventure).verdict).toBe('valid');
 expect(getExerciseCapabilities(moonstone,facts,context).falseCandidates).not.toContainEqual(adventure);
 expect(evidenceProblems(evidence)).toEqual([]);
});

test('all previous teaching records and evidence, including quarantined comparisons, are unchanged',()=>{
 // Music was registered later; this baseline covers the content that existed then.
 const music=new Set(musicTeachingContent.evidence.map(e=>e.id));
 const evidence=allEvidence.filter(e=>!music.has(e.id));
 const original=facts.filter(c=>c.subtopicId!=='music').map(c=>{
  if(c.id==='art_literature_l1_p2_robinson-crusoe')return retainedGenreSelections.find(c=>c.id==='art_literature_l1_p2_dracula')!;
  if(c.id==='art_theatre_l1_p2_twelve-angry-men')return retainedGenreSelections.find(c=>c.id==='art_theatre_l1_p2_cyrano')!;
  if(c.id==='art_literature_l1_p2_wuthering-heights'||c.id==='art_theatre_l5_p2_rosencrantz-guildenstern')return {...c,introducedIn:'B',learning:{...c.learning!,reinforcementPriority:4}};
  if(c.id==='art_theatre_l5_p2_bald-soprano')return {...c,introducedIn:'A',learning:{...c.learning!,reinforcementPriority:5}};
  return c;
 });
 // Reconstruct only the five declared selection/stage changes, preserving the original hash.
 expect(hash(original)).toBe('6f1337a605ba47172057f96092890ce922c0144dba27be87d72bfea17b2c60f2');
 expect(hash(evidence.filter(e=>!e.id.startsWith('manual-editorial:')&&!e.id.startsWith('genre-completion:')&&!['institution-check:art_literature_l1_p2_robinson-crusoe','institution-check:art_theatre_l1_p2_twelve-angry-men'].includes(e.id)))).toBe('cda6ec500a9eae550f8601ec570c12aae010a19286bbd1ea877277d5678ee93a');
 for(const [sub,level] of [['literature','l1'],['theatre','l1'],['theatre','l5']]){
  const pool=facts.filter(c=>c.subtopicId===sub&&c.levelId===level&&c.partId==='p2');
  expect(['A','B','C'].map(stage=>pool.filter(c=>c.introducedIn===stage).length)).toEqual([6,3,2]);
 }
});

test('unapproved exclusions remain unknown and existing overlapping positives remain valid',()=>{
 const find=(id:string)=>[...facts,...retainedGenreSelections].find(c=>c.id===`art_${id}`)!;
 for(const [a,b]of [
  ['theatre_l1_p2_dolls-house','theatre_l1_p2_hamlet'],
  ['literature_l1_p2_treasure-island','literature_l1_p2_little-women'],
  ['theatre_l5_p2_bald-soprano','theatre_l5_p2_crucible'],
 ])expect(context.evaluate(find(a),find(b)).verdict).toBe('unknown');
 for(const [a,b]of [
  ['literature_l1_p2_frankenstein','literature_l1_p2_dracula'],
  ['theatre_l1_p2_cyrano','theatre_l1_p2_hamlet'],
  ['theatre_l5_p2_top-girls','theatre_l5_p2_bald-soprano'],
 ])expect(context.evaluate(find(a),find(b)).verdict).toBe('valid');
});

test('newly available quizzes preserve composition, semantic safety, seed determinism and legitimate variation',()=>{
 for(const [sub,level,variant]of [['literature','l1','B'],['theatre','l5','B'],['theatre','l5','C']] as const){
  const pool=facts.filter(c=>c.subtopicId===sub&&c.levelId===level&&c.partId==='p2');
  const payloads=new Set<string>();
  for(let n=0;n<20;n++){
   const request={concepts:pool,context,variant,seed:`manual-pool:${n}`};
   const r=buildQuizResult(request);
   expect(r.status).toBe('ready');expect(buildQuizResult(request)).toEqual(r);
   expect(quizCompositionViolations(r.exercises,variant)).toEqual([]);
   for(const ex of r.exercises)expect(exerciseValidityViolations(ex,pool,context)).toEqual([]);
   payloads.add(JSON.stringify(r.exercises));
  }
  expect(payloads.size).toBeGreaterThan(1);
 }
});

test('approved choices reach MCQ, both true-false forms and blanks with seeded option variety',()=>{
 const pool=facts.filter(c=>c.subtopicId==='theatre'&&c.levelId==='l5'&&c.partId==='p2');
 const c=pool.find(c=>c.id.endsWith('_glass-menagerie'))!,caps=getExerciseCapabilities(c,pool,context);
 const options=new Set<string>(),falseAnswers=new Set<string>();
 for(let n=0;n<20;n++)for(const form of ['mcq','true','false','blank_options'] as const){
  const r=generateExercise(c,caps,form,context,`manual-variety:${n}`);
  expect(r.status).toBe('generated');
  if(r.status==='generated'){
   expect(exerciseValidityViolations(r.exercise,pool,context)).toEqual([]);
   if(r.exercise.type==='mcq')options.add(JSON.stringify(r.exercise.options));
   if(r.exercise.type==='true_false'&&!r.exercise.correctAnswer)falseAnswers.add(r.exercise.statement);
  }
 }
 expect(options.size).toBeGreaterThan(1);expect(falseAnswers.size).toBeGreaterThan(1);
});
