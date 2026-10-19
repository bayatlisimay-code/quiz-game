// Fresh-learner progression sweep. No application storage or simulator changes.
const fs = require('node:fs');
const ts = require('typescript');
require.extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
}).outputText, filename);
const { TOPIC_BY_ID } = require('../data/catalog.ts');
const { ACTIVE_CONCEPT_SETS, activeSemanticContext } = require('../src/quizEngine/contentSnapshot.ts');
const { catalogCoverageCases } = require('../src/quizEngine/generationCoverage.ts');
const { measureLearningCoverage } = require('../src/quizEngine/learningCoverage.ts');
const selectedSubtopics = (process.argv.find(a => a.startsWith('--subtopics='))?.slice('--subtopics='.length) ?? 'painting,sculpture').split(',');
if (!selectedSubtopics.length || selectedSubtopics.some(id => !TOPIC_BY_ID.art.subtopics.some(s => s.id === id))) throw new Error('Unknown Art subtopic');
const attempts = Number(process.argv.find(a => a.startsWith('--attempts='))?.split('=')[1] ?? 20);
if (!Number.isInteger(attempts) || attempts < 1) throw new Error('Positive integer attempts required');
const context = process.argv.includes('--development-images') ? activeSemanticContext.withImages(require('../src/images/developmentRegistry.generated.json')) : activeSemanticContext;
const topic = { ...TOPIC_BY_ID.art, subtopics: TOPIC_BY_ID.art.subtopics.filter(s => selectedSubtopics.includes(s.id)) };
const report = measureLearningCoverage(catalogCoverageCases(topic, ACTIVE_CONCEPT_SETS), context, attempts);
console.log(JSON.stringify(report,null,2));
if (report.counts.insufficient || report.counts.prerequisiteBlocked || report.counts.violations) process.exitCode=1;
