import { createHash } from 'node:crypto';
import { approvedArtContent, approvedArtEvidence } from '../../../data/activeArtContent';
import { ACTIVE_CONCEPT_SETS, activeSemanticContext as context } from '../contentSnapshot';
import { createSemanticContext } from '../semanticValidation';
import { getCurriculumPool } from '../curriculumPool';
import { getExerciseCapabilities, generateMatchingExercise } from '../exerciseFactory';
import { getAssessmentTemplate, getMatchingLabel } from '../assessmentTemplates';
import { buildQuizResult } from '../buildQuiz';
const additions=approvedArtContent.filter(c=>['architecture','design'].includes(c.subtopicId));
const find=(id:string)=>{const c=additions.find(c=>c.id===id);if(!c)throw new Error(id);return c;};
const pool=(s:string,l:string,p:string)=>getCurriculumPool(ACTIVE_CONCEPT_SETS,{topicId:'art',subtopicId:s,levelId:l,partId:p});

test('all 583 records outside the authorized l6p2 classification correction retain their canonical fields',()=>{
 const rows=additions.filter(c=>!(c.subtopicId==='design'&&c.levelId==='l6'&&c.partId==='p2')).map(c=>({id:c.id,subject:c.subject,object:c.object,relation:c.relation,subjectId:c.semantic!.subject!.id,valueId:c.semantic!.value!.id,factId:c.assessment!.factId,priority:c.learning!.reinforcementPriority,introducedIn:c.introducedIn}));
 expect(additions).toHaveLength(594);
 expect(rows).toHaveLength(583);
 expect(createHash('sha256').update(JSON.stringify(rows)).digest('hex')).toBe('b6c12c02e076955c88baec97a9448cebe29072527eecc39fb3e4673f96cf8fa5');
});

test('original cultural-producing traditions have scoped contradictions without making successor cultures disjoint',()=>{
 const greek=find('art_architecture_l3_p2_athenian-acropolis'),roman=find('art_architecture_l3_p2_colosseum');
 expect(context.evaluate(greek,roman).verdict).toBe('unknown');
 const khmer=find('art_architecture_l3_p2_angkor-wat');
 expect(context.evaluate(greek,khmer).verdict).toBe('invalid');
 const giza=find('art_architecture_l2_p2_giza-pyramids'),abu=find('art_architecture_l2_p2_abu-simbel');
 expect(context.evaluate(giza,abu).verdict).toBe('valid');
 expect(getAssessmentTemplate(khmer).question(khmer.subject)).toContain('not later alterations or cultural influence');
 const armenian=find('art_architecture_l3_p2_haghpat'),byzantine=find('art_architecture_l3_p2_hagia-sophia');
 expect(context.evaluate(armenian,byzantine).verdict).toBe('unknown');
 const cordoba=find('art_architecture_l3_p2_cordoba-mosque');
 expect(context.evaluate(cordoba,byzantine).verdict).toBe('unknown');
 expect(context.evaluate(cordoba,roman).verdict).toBe('unknown');
});

test('field examples require their visible project credit, not an exclusive field membership',()=>{
 const type=find('art_design_l2_p2_type'),graphic=find('art_design_l2_p2_graphic');
 expect(getAssessmentTemplate(type).question(type.subject)).toContain('credited to Matthew Carter');
 expect(context.evaluate(type,graphic).verdict).toBe('invalid');
 const evidence=approvedArtEvidence.filter(e=>!(e.kind==='assertion'&&e.verdict==='invalid'&&e.subjectId===type.semantic!.subject!.id&&e.predicateId===type.relation&&e.valueId===graphic.semantic!.value!.id));
 const partial=createSemanticContext(approvedArtContent,{policies:context.policies,evidence});
 expect(partial.evaluate(type,graphic).verdict).toBe('unknown');
 const malformed={...type,assessment:{...type.assessment!,focus:{...type.assessment!.focus!,identity:'person:someone-else'}}};
 const invalid=createSemanticContext([malformed,graphic],{policies:context.policies,evidence:approvedArtEvidence});
 expect(getExerciseCapabilities(malformed,[malformed,graphic],invalid).forms.mcq.available).toBe(false);
});

test('contributor scope preserves collaborations and does not credit Bedin’s lamp to Sottsass',()=>{
 const memphis=find('art_design_l3_p4_memphis'),postmodern=find('art_design_l3_p4_postmodernism');
 expect(context.evaluate(memphis,postmodern).verdict).toBe('valid');
 expect(postmodern.assessment!.focus!.label).toBe('Carlton room divider');
 const school=find('art_design_l3_p4_bauhaus');
 expect(getAssessmentTemplate(school).question(school.subject)).toContain('credited with founding');
 expect(getMatchingLabel(school)).toContain('MoMA');
 expect(school.assessment!.focus!.label).toContain('school');
 const p2=find('art_design_l3_p2_postmodernism');
 expect(getAssessmentTemplate(p2).question(p2.subject)).toContain('Martine Bedin');
 const joint=find('art_design_l2_p4_exhibition');
 const evidence=approvedArtEvidence.find(e=>e.id===joint.assessment!.evidenceIds[0]);
 expect(evidence).toMatchObject({kind:'complete-set',valueIds:expect.arrayContaining(['person:lilly-reich','person:ludwig-mies-van-der-rohe'])});
 const nls=find('art_design_l2_p4_interaction');
 expect(getAssessmentTemplate(nls).question(nls.subject)).toContain('team is credited with developing');
 expect(context.evaluate(nls,find('art_design_l2_p4_graphic')).verdict).toBe('unknown');
 const teamCredit=approvedArtEvidence.find(e=>e.id===nls.assessment!.evidenceIds[0]);
 expect(teamCredit).toMatchObject({kind:'complete-set',valueTypes:['group'],valueIds:[nls.semantic!.value!.id]});
 const glaser=find('art_design_l4_p2_graphic'),nlsWork=find('art_design_l4_p2_interaction');
 expect(context.evaluate(glaser,nlsWork).verdict).toBe('unknown');
 for(const id of ['art-nouveau','art-deco','wiener-werkstatte','pop-design']){
  const c=find(`art_design_l3_p4_${id}`);
  expect(getAssessmentTemplate(c).question(c.subject)).not.toContain(c.object.split(' ').at(-1));
 }
});

test('project fields leave overlapping disciplines unknown and project periods do not become career bounds',()=>{
 const type=find('art_design_l4_p1_type'),graphic=find('art_design_l4_p1_graphic');
 expect(context.evaluate(type,graphic).verdict).toBe('unknown');
 const textile=find('art_design_l4_p1_textile'),product=find('art_design_l4_p1_product'),furniture=find('art_design_l4_p1_furniture');
 expect(context.evaluate(textile,product).verdict).toBe('unknown');
 expect(context.evaluate(textile,graphic).verdict).toBe('unknown');
 const textileCaps=getExerciseCapabilities(textile,pool('design','l4','p1'),context);
 expect(textileCaps.optionCandidates).not.toContain(product);
 expect(textileCaps.falseCandidates).not.toContain(product);
 expect(context.evaluate(furniture,product).verdict).toBe('unknown');
 expect(context.evaluate(product,find('art_design_l4_p1_interior')).verdict).toBe('unknown');
 const landscape=find('art_design_l4_p1_landscape');
 expect(landscape.assessment!.scope!.text).toContain('paving and planting');
 expect(getMatchingLabel(landscape)).toContain('paving and planting');
 expect(context.evaluate(landscape,graphic).verdict).toBe('invalid');
 const matching=generateMatchingExercise(pool('design','l4','p1').filter(c=>c.introducedIn==='A'),'qualified-activity-cards',context);
 if(matching.status!=='generated')throw new Error('Expected the sourced physical-activity matching group');
 expect(matching.exercise.pairs.find(p=>p.id===landscape.id)!.left).toContain('paving and planting');
 const fashion=find('art_design_l4_p1_fashion');
 expect(context.evaluate(type,fashion).verdict).toBe('invalid');
 expect(getAssessmentTemplate(type).question(type.subject)).toContain('Verdana');
 const chair=find('art_design_l4_p4_furniture'),dress=find('art_design_l4_p4_fashion'),poster=find('art_design_l4_p4_graphic');
 expect(context.evaluate(chair,dress).verdict).toBe('unknown');
 expect(context.evaluate(chair,poster).verdict).toBe('invalid');
 // A circa1926 garment does not justify a fabricated exact1920–1929 bound.
 // Only the source's original design-house/creator lifetime excludes distant
 // periods; an otherwise possible1960s claim remains unknown.
 expect(context.evaluate(dress,poster).verdict).toBe('unknown');
 const dressBound=approvedArtEvidence.find(e=>e.id===`project-activity-bound:${dress.id}`);
 expect(dressBound).toMatchObject({kind:'date-bound',start:1910,end:1971});
 expect(getMatchingLabel(chair)).toContain('Red Blue Chair');
 expect(getAssessmentTemplate(dress).question(dress.subject)).not.toContain('1926');
 expect(getAssessmentTemplate(chair).question(chair.subject)).toContain('Which period is documented');
 expect(getAssessmentTemplate(chair).statement(chair.subject,chair.object)).toContain('documented dating');
 expect(getAssessmentTemplate(dress).question(dress.subject)).toContain('not the entire career');
 const dates=approvedArtEvidence.filter(e=>e.kind==='date-bound'&&e.predicateId==='design_period_of_designer');
 expect(dates).toHaveLength(11);
 expect(dates.every(e=>'qualifiers' in e&&typeof e.qualifiers.projectId==='string')).toBe(true);
});

test('typographic evidence proves only specific structure, pitch and character-design contradictions',()=>{
 const arial=find('art_design_l6_p2_arial'),mono=find('art_design_l6_p2_consolas'),symbols=find('art_design_l6_p2_wingdings'),display=find('art_design_l6_p2_gabriola'),serif=find('art_design_l6_p2_georgia');
 expect(context.evaluate(arial,mono).verdict).toBe('invalid');
 expect(context.evaluate(arial,serif).verdict).toBe('invalid');
 expect(context.evaluate(mono,symbols).verdict).toBe('invalid');
 expect(context.evaluate(arial,display).verdict).toBe('unknown');
 expect(context.evaluate(mono,serif).verdict).toBe('invalid'); // The displayed answer now explicitly requires proportional spacing.
 expect(generateMatchingExercise(pool('design','l6','p2'),'exhaustive-typeface-safety',context).status).toBe('generated');
 for(const variant of ['A','B','C'] as const){
  const result=buildQuizResult({concepts:pool('design','l6','p2'),context,mode:'teaching',variant,seed:`honest-typeface-shortage:${variant}`});
  expect(result.status).toBe('ready');expect(result.exercises).toHaveLength(8);
 }
});
