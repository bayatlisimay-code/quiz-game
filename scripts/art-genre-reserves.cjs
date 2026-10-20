// Read-only counterfactual: try each approved reserve in each existing A slot.
// This never alters active schedules, evidence, generation rules or player data.
const fs=require('node:fs'),ts=require('typescript');
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,esModuleInterop:true}}).outputText,f);
const {genreReserveFacts:reserves}=require('../data/artContent/genreReserves.ts');
const {ACTIVE_CONCEPT_SETS,activeRegisteredConcepts,activeSemanticContext:base}=require('../src/quizEngine/contentSnapshot.ts');
const {createSemanticContext}=require('../src/quizEngine/semanticValidation.ts');
const {getCurriculumPool}=require('../src/quizEngine/curriculumPool.ts');
const {buildQuizResult,prepareQuizSession}=require('../src/quizEngine/buildQuiz.ts');
const {matchingCandidates}=require('../src/quizEngine/exerciseFactory.ts');
const rows=[];
for(const reserve of reserves.concepts)for(const levelId of ['l1','l5']){
 const pool=getCurriculumPool(ACTIVE_CONCEPT_SETS,{topicId:'art',subtopicId:reserve.subtopicId,levelId,partId:'p2'});
 for(const replaced of pool.filter(c=>c.introducedIn==='A')){
  const candidate={...reserve,levelId,introducedIn:'A',learning:replaced.learning};
  const concepts=pool.map(c=>c===replaced?candidate:c);
  const context=createSemanticContext([...activeRegisteredConcepts(),candidate],{policies:base.policies,evidence:[...base.evidence,...reserves.evidence],images:base.images});
  const session=prepareQuizSession({concepts,context,variant:'A',mode:'teaching'});
  const result=buildQuizResult({concepts,context,session,variant:'A',mode:'teaching',seed:'reserve-feasibility'});
  const budget={examined:0,limit:50000,exhausted:false};
  rows.push({subtopicId:reserve.subtopicId,levelId,replaced:replaced.subject,reserve:reserve.subject,
   status:result.status,shortages:result.diagnostics.shortages,
   reserveForms:session.capabilities(candidate).forms,
   safeMatchingGroups:[...matchingCandidates(session.eligible,'reserve-feasibility',context,budget)].length,
   budgetExhausted:budget.exhausted});
 }
}
console.log(JSON.stringify({note:'Counterfactual only; verified positive reserve classifications do not supply incorrect alternatives or certify compatibility.',rows},null,2));
