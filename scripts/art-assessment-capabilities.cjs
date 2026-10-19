// Read-only authoring diagnostic using the exact production stage pool.
// Example: node scripts/art-assessment-capabilities.cjs --subtopic=design --level=l6 --part=p2 --variant=A
const fs = require('node:fs');
const ts = require('typescript');
require.extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
}).outputText, filename);
const { TOPIC_BY_ID } = require('../data/catalog.ts');
const { ACTIVE_CONCEPT_SETS, activeSemanticContext } = require('../src/quizEngine/contentSnapshot.ts');
const { getCurriculumPool } = require('../src/quizEngine/curriculumPool.ts');
const { prepareQuizSession, buildQuizResult } = require('../src/quizEngine/buildQuiz.ts');
const { matchingCandidates } = require('../src/quizEngine/exerciseFactory.ts');
const { getAssessmentTemplate, getMatchingLabel } = require('../src/quizEngine/assessmentTemplates.ts');
const arg = (name) => process.argv.find(a => a.startsWith(`--${name}=`))?.slice(name.length + 3);
const subtopicId = arg('subtopic'), levelId = arg('level'), partId = arg('part'), variant = arg('variant');
const subtopic = TOPIC_BY_ID.art.subtopics.find(s => s.id === subtopicId);
const level = subtopic?.levels.find(l => `l${l.id}` === levelId);
if (!level?.parts.some(p => `p${p.id}` === partId) || !['A', 'B', 'C'].includes(variant)) throw new Error('Explicit valid --subtopic, --level, --part and --variant required');
const concepts = getCurriculumPool(ACTIVE_CONCEPT_SETS, { topicId: 'art', subtopicId, levelId, partId });
const context = process.argv.includes('--development-images') ? activeSemanticContext.withImages(require('../src/images/developmentRegistry.generated.json')) : activeSemanticContext;
const mode = levelId === 'l10' || ['p3', 'p5'].includes(partId) ? 'review' : 'teaching';
const request = { concepts, context, variant, mode };
const session = prepareQuizSession(request);
const budget = { examined: 0, limit: 50000, exhausted: false };
let matchingGroups = 0;
for (const group of matchingCandidates(session.assessable, 'capability-diagnostic', context, budget)) if (group) matchingGroups++;
const result = buildQuizResult({ ...request, session, seed: 'capability-diagnostic' });
console.log(JSON.stringify({ subtopicId, levelId, partId, variant, status: result.status, shortages: result.diagnostics.shortages,
  // Eligible-pool groups alone do not prove a joint six-fact composition.
  eligiblePoolMatchingGroups: matchingGroups, matchingSearchExhausted: budget.exhausted,
  concepts: session.eligible.map(c => {
    const caps = session.capabilities(c);
    return { id: c.id, factId: c.assessment?.factId, introducedIn: c.introducedIn, question: getAssessmentTemplate(c).question(c.subject), matchingLabel: getMatchingLabel(c), answer: c.object,
      forms: caps.forms, certifiedNegativeIds: caps.optionCandidates.map(x => x.id),
      decisions: session.eligible.map(candidate => ({ candidateId: candidate.id, answer: candidate.object, ...context.evaluate(c, candidate) })) };
  }) }, null, 2));
