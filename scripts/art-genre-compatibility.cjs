// Read-only: exact production candidates, evidence and matching matrices.
const fs = require('node:fs');
const ts = require('typescript');
require.extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
}).outputText, filename);
const { ACTIVE_CONCEPT_SETS, activeSemanticContext: context } = require('../src/quizEngine/contentSnapshot.ts');
const { getCurriculumPool } = require('../src/quizEngine/curriculumPool.ts');
const { prepareQuizSession, buildQuizResult } = require('../src/quizEngine/buildQuiz.ts');
const { matchingCandidates, generateExercise } = require('../src/quizEngine/exerciseFactory.ts');
const { getAssessmentTemplate } = require('../src/quizEngine/assessmentTemplates.ts');
const rows=[];
for (const subtopicId of ['literature','theatre']) for (const levelId of ['l1','l5']) {
  const concepts = getCurriculumPool(ACTIVE_CONCEPT_SETS,{topicId:'art',subtopicId,levelId,partId:'p2'});
  for (const variant of ['A','B','C']) {
    const request={concepts,context,variant,mode:'teaching'};
    const session=prepareQuizSession(request);
    const budget={examined:0,limit:50000,exhausted:false};
    const groups=[...matchingCandidates(session.eligible,'genre-compatibility',context,budget)];
    const matrix=session.eligible.map(target=>session.eligible.map(candidate=>context.evaluate(target,candidate)));
    const oneWay=[];
    for(let i=0;i<matrix.length;i++)for(let j=0;j<matrix.length;j++)if(matrix[i][j].verdict==='valid'&&matrix[j][i].verdict==='invalid') {
      oneWay.push({target:session.eligible[i].id,acceptedAnswerFrom:session.eligible[j].id,
        acceptedEvidence:matrix[i][j].evidenceIds,rejectedReciprocalEvidence:matrix[j][i].evidenceIds,
        reason:'In any quartet containing both, lock the other two diagonal pairs, then accept this valid cross-match. The remaining row is stranded. No evidence for the other cells can fix that quartet.'});
    }
    const result=buildQuizResult({...request,session,seed:'genre-compatibility'});
    rows.push({subtopicId,levelId,variant,status:result.status,shortages:result.diagnostics.shortages,
      safeEligiblePoolMatchingGroups:groups.length,matchingSearchExhausted:budget.exhausted,
      safeGroups:groups.map(g=>g.concepts.map(c=>c.id)),
      oneWayLockConflicts:oneWay,
      facts:session.eligible.map(c=>{
        const caps=session.capabilities(c);
        return {id:c.id,factId:c.assessment.factId,subject:c.subject,answer:c.object,introducedIn:c.introducedIn,priority:c.learning.reinforcementPriority,
          question:getAssessmentTemplate(c).question(c.subject),forms:caps.forms,
          certifiedNegativeOptions:caps.optionCandidates.map(a=>({id:a.id,label:a.object,evidenceIds:context.evaluate(c,a).evidenceIds})),
          // Real ordinary exercises can be inspected even if a complete quiz
          // still fails six-fact or four-pair requirements. Never pad a quiz.
          generatedExamples:['mcq','true','false','blank_options'].flatMap(form=>{const r=generateExercise(c,caps,form,context,`genre-example:${c.id}:${form}`);return r.status==='generated'?[r.exercise]:[];}),
        };
      }),matrix,
    });
  }
}
console.log(JSON.stringify({note:'Eligible-pool matching groups alone do not certify the joint six-fact A/B/C progression. Unknown cells stay unknown; no complete genre sets or disjoint genre classes are inferred.',rows},null,2));
