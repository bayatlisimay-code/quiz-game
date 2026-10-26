import { literatureClassicsSet } from '../../../data/artContent/literatureClassics';
import { createHash } from 'node:crypto';
import { approvedArtContent, approvedArtEvidence, retainedGenreSelections } from '../../../data/activeArtContent';
import { artAvailability, teachingRelation } from '../../../data/artCurriculum';
import { ACTIVE_CONCEPT_SETS, activeSemanticContext as context } from '../contentSnapshot';
import { getCurriculumPool } from '../curriculumPool';
import { getAssessmentTemplate, getMatchingLabel } from '../assessmentTemplates';
import { buildQuizResult, quizCompositionViolations } from '../buildQuiz';
import { validateContent } from '../contentValidation';
import { evidenceProblems } from '../semanticEvidence';
import { planAssessmentStimulus } from '../../images/assessmentImages';
const additions=approvedArtContent.filter(c=>['literature','theatre'].includes(c.subtopicId));
const pool=(s:string,l:string,p:string)=>getCurriculumPool(ACTIVE_CONCEPT_SETS,{topicId:'art',subtopicId:s,levelId:l,partId:p});
const find=(id:string)=>{const c=[...additions,...retainedGenreSelections].find(c=>c.id===id);if(!c)throw new Error(id);return c;};

const editorialIdentity = (concept: (typeof approvedArtContent)[number]) => {
  const c = JSON.parse(JSON.stringify(concept)) as (typeof approvedArtContent)[number];
  if (c.subtopicId === 'painting' && c.levelId === 'l1' && ['p2', 'p4'].includes(c.partId)) {
    delete (c.assessment!.presentation!.scope as Partial<{ text: string; reviewedAt: string }>).text;
    delete (c.assessment!.presentation!.scope as Partial<{ reviewedAt: string }>).reviewedAt;
  }
  if (['art_architecture_l6_p1_eiffel-tower', 'art_architecture_l6_p1_santiago-bellas-artes'].includes(c.id)) {
    delete (c.assessment!.identification!.description as Partial<{ text: string }>).text;
  }
  return c;
};

test('completed Art matches the reviewed accessibility content and evidence baseline',()=>{
 const hash=(value:unknown)=>createHash('sha256').update(JSON.stringify(value)).digest('hex');
 expect(hash(approvedArtContent.filter(c=>!['literature','theatre'].includes(c.subtopicId)))).toBe('ddedc9f8399b9e9e5a362d37191c176797257136ad08afdf13e656d53840aaf1');
 expect(hash(approvedArtContent.filter(c=>!['literature','theatre'].includes(c.subtopicId)).map(editorialIdentity))).toBe('75f93c18f6b9a1eae4ff7c283255395f105b8ae2d4943c81823499a642b35580');
 expect(hash(approvedArtEvidence.slice(0,4730))).toBe('18eea856b7b59d367b16a268cdd33cde1db2174f5a800652c77104126dd8c5ae');
 expect(artAvailability.design).toBe('coming-soon');
});

test('authored placements use the approved relations and 6/3/2 stages, including documented first-writing cohorts',()=>{
 for(const s of ['literature','theatre'])for(let l=1;l<=9;l++)for(const p of ['p1','p2','p4']){
  const records=pool(s,`l${l}`,p);
  expect(records.every(c=>c.relation===teachingRelation(s,`l${l}`,p))).toBe(true);
  expect(new Set(records.map(c=>c.assessment!.factId)).size).toBe(records.length);
  if(s==='theatre'&&[3,6].includes(l)&&p==='p4'){
   expect(records.every(c=>c.assessment?.firstWork?.criterion==='first-reliably-documented-play-written')).toBe(true);
   for(const variant of ['A','B','C'] as const)expect(buildQuizResult({concepts:records,context,variant,mode:'teaching',seed:'documented-writing-order'}).status).toBe('ready');
  }
  if(s==='theatre'&&l===3&&p==='p4'){
  expect(records.some(c=>c.subject==='Richard Brinsley Sheridan')).toBe(false);
  expect(records.some(c=>c.subject==='George Etherege'&&c.object.includes('Comical Revenge'))).toBe(true);
 }
 expect(records).toHaveLength(11);
  expect(['A','B','C'].map(stage=>records.filter(c=>c.introducedIn===stage).length)).toEqual([6,3,2]);
 }
 expect(validateContent(additions,context.policies,undefined,{evidence:approvedArtEvidence}).filter(i=>i.severity==='error')).toEqual([]);
 expect(evidenceProblems(approvedArtEvidence)).toEqual([]);
});

test('reviews reuse exact original teaching records and the new subtopics remain text-only',()=>{
 for(const s of ['literature','theatre']){
  for(let l=1;l<=9;l++){
   const p1=pool(s,`l${l}`,'p1'),p2=pool(s,`l${l}`,'p2'),p4=pool(s,`l${l}`,'p4');
   expect(pool(s,`l${l}`,'p3')).toEqual([...p1,...p2]);
   expect(pool(s,`l${l}`,'p5')).toEqual([...p1,...p2,...p4]);
  }
  for(let p=1;p<=5;p++)expect(pool(s,'l10',`p${p}`).map(c=>c.id).sort()).toEqual(additions.filter(c=>c.subtopicId===s).map(c=>c.id).sort());
 }
 for(const c of additions)expect(planAssessmentStimulus(c,context,'mcq').stimulus?.kind).not.toBe('image');
});

test('open overlaps stay unknown, while exact script and writer constraints support reviewed contrasts',()=>{
 const moby=find('art_literature_l1_p2_moby-dick'),frankenstein=find('art_literature_l1_p2_frankenstein');
 // Moby-Dick is read as Gothic by some critics, so that negative is deliberately not certified.
 expect(context.evaluate(moby,find('art_literature_l1_p2_dracula')).verdict).toBe('unknown');
 const formerLoveStory=literatureClassicsSet.concepts.find(c=>c.id==='art_literature_l1_p2_pride-prejudice')!;
 expect(context.evaluate(frankenstein,find('art_literature_l1_p2_dracula')).verdict).toBe('valid');
 expect(context.evaluate(find('art_literature_l1_p2_wuthering-heights'),formerLoveStory).verdict).toBe('valid');
 const ismene=find('art_theatre_l7_p1_ismene'),laertes=find('art_theatre_l7_p1_laertes');
 expect(context.evaluate(ismene,laertes).verdict).toBe('invalid');
 expect(context.evaluate({...ismene,semantic:{...ismene.semantic!,qualifiers:{}}},laertes).verdict).toBe('unknown');
 const bartleby=find('art_literature_l7_p2_bartleby'),narrator=find('art_literature_l7_p2_yellow-wallpaper');
 expect(context.evaluate(bartleby,narrator).verdict).toBe('unknown');
 const aeneid=find('art_literature_l9_p4_aeneid'),mahabharata=find('art_literature_l9_p4_mahabharata');
 expect(context.evaluate(aeneid,mahabharata).verdict).toBe('unknown');
 const example=find('art_literature_l2_p2_science-fiction'),other=find('art_literature_l2_p2_epistolary');
 expect(context.evaluate(example,other).verdict).toBe('invalid');
 expect(getAssessmentTemplate(example).question(example.subject)).toContain('Mary Shelley');
 const unqualified={...example,semantic:{...example.semantic!,qualifiers:{}}};
 expect(context.evaluate(unqualified,other).verdict).toBe('unknown');
 const writer=find('art_literature_l2_p4_epistolary');
 expect(getAssessmentTemplate(writer).question(writer.subject)).toBe('Which Epistolary fiction writer wrote “Dracula”?');
 expect(getMatchingLabel(writer)).not.toContain('?');
});

test('publication, performance, text version and birthplace qualifications remain explicit',()=>{
 expect(find('art_literature_l1_p4_huckleberry-finn').object).toBe('1884');
 expect(find('art_literature_l1_p4_huckleberry-finn').assessment!.scope!.text).toContain('British');
 expect(find('art_literature_l1_p4_treasure-island').assessment!.scope!.text.toLowerCase()).toContain('serial');
 expect(find('art_literature_l4_p2_because-death').assessment!.scope!.text).toContain('The Chariot');
 expect(find('art_literature_l6_p4_gunter-grass').object).toBe('Poland');
 expect(find('art_theatre_l6_p1_tom-stoppard').object).toBe('Czechia');
 expect(find('art_theatre_l1_p4_tartuffe').assessment!.scope!.text).toContain('five-act');
 expect(find('art_theatre_l9_p4_salle-richelieu').object).toBe('1790');
 expect(find('art_theatre_l9_p4_fords-new-theatre').object).toBe('1863');
});

test('a qualified literature placement deterministically teaches six, three and two new facts through complete quizzes',()=>{
 const concepts=pool('literature','l1','p1');
 for(const variant of ['A','B','C'] as const){
  const request={concepts,context,variant,mode:'teaching' as const,seed:`literature-authors:${variant}`};
  const result=buildQuizResult(request);
  expect(result).toEqual(buildQuizResult(request));expect(result.status).toBe('ready');
  expect(result.exercises).toHaveLength(8);expect(quizCompositionViolations(result.exercises,variant)).toEqual([]);
  expect(result.diagnostics.introducedFactIds).toHaveLength({A:6,B:3,C:2}[variant]);
 }
});

test('repaired character, event-date and epic placements support the complete six-fact A/B/C composition',()=>{
 for(const [s,l,p] of [['literature','l7','p2'],['literature','l8','p1'],['literature','l9','p2'],['literature','l9','p4'],['theatre','l1','p4'],['theatre','l7','p1'],['theatre','l2','p1']]){
  for(const variant of ['A','B','C'] as const){
   const result=buildQuizResult({concepts:pool(s,l,p),context,variant,mode:'teaching',seed:`repaired:${s}:${l}:${p}:${variant}`});
   expect(result.status).toBe('ready');expect(result.exercises).toHaveLength(8);
   expect(quizCompositionViolations(result.exercises,variant)).toEqual([]);
   expect(result.diagnostics.introducedFactIds).toHaveLength({A:6,B:3,C:2}[variant]);
  }
 }
});

test('tragedy terminology contrasts required motives and never declares the subgenre outside tragedy',()=>{
 const tragedy=find('art_theatre_l2_p1_tragedy'),revenge=find('art_theatre_l2_p1_revenge-tragedy');
 expect(context.evaluate(tragedy,revenge).verdict).toBe('invalid');
 expect(tragedy.object).toContain('not required');
 expect(tragedy.assessment!.scope!.visibility).toBe('internal');
 for(const text of [getAssessmentTemplate(tragedy).question(tragedy.subject),getAssessmentTemplate(tragedy).statement(tragedy.subject,tragedy.object),getAssessmentTemplate(tragedy).blank(tragedy.subject)])expect(text).toContain('essential features');
 expect(getMatchingLabel(tragedy)).toContain('Essential features');
 expect(getAssessmentTemplate(tragedy).question(tragedy.subject)).toContain('essential features');
 const bare={...tragedy,semantic:{...tragedy.semantic!,qualifiers:{sense:tragedy.semantic!.qualifiers!.sense}}};
 expect(context.evaluate(bare,revenge).verdict).toBe('unknown');
 const parent=find('art_theatre_l2_p1_comedy'),child=find('art_theatre_l2_p1_farce');
 expect(context.evaluate(parent,child).verdict).toBe('unknown');
});
