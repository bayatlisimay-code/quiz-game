// All 300 Sculpture/Painting part/variant combinations, with production checks.
const fs = require('node:fs');
const ts = require('typescript');
require.extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
}).outputText, filename);
const { TOPIC_BY_ID } = require('../data/catalog.ts');
const { ACTIVE_CONCEPT_SETS, activeSemanticContext: baseContext, activeRegisteredConcepts } = require('../src/quizEngine/contentSnapshot.ts');
const { catalogCoverageCases, measureGenerationCoverage } = require('../src/quizEngine/generationCoverage.ts');
const { validateContent } = require('../src/quizEngine/contentValidation.ts');
const { buildQuizResult } = require('../src/quizEngine/buildQuiz.ts');
const { learnerTextDiagnostics } = require('../src/quizEngine/learnerText.ts');
const arg = process.argv.find(a => a.startsWith('--attempts='));
const attempts = arg ? Number(arg.split('=')[1]) : 20;
if (!Number.isInteger(attempts) || attempts < 1) throw new Error('Positive integer attempts required');
const context = process.argv.includes('--development-images') ? baseContext.withImages(require('../src/images/developmentRegistry.generated.json')) : baseContext;
const art = TOPIC_BY_ID.art;
const cases = catalogCoverageCases({ ...art, subtopics: art.subtopics.filter(s => ['painting', 'sculpture'].includes(s.id)) }, ACTIVE_CONCEPT_SETS);
const coverage = measureGenerationCoverage(cases, context, attempts);
const validation = validateContent(activeRegisteredConcepts(), context.policies, undefined, { evidence: context.evidence, images: context.images });
const samples = cases.filter(c => c.variant === 'A' && /_p[124]$/.test(c.id)).map(c => ({ id: c.id, result: buildQuizResult({ ...c, context, seed: `content-inspection:${c.id}` }) }));
const readability = samples.flatMap(sample => sample.result.exercises.flatMap(exercise => learnerTextDiagnostics(exercise).map(warning => ({ quizId: sample.id, type: exercise.type, ...warning }))));
console.log(JSON.stringify({ attempts, records: activeRegisteredConcepts().length, imageBindings: Object.keys(context.images.bindings).length, coverage, validation, readability: { sampleQuizzes: samples.length, warnings: readability.length, longest: [...readability].sort((a,b) => b.words-a.words).slice(0,10) }, samples }, null, 2));
// Shortages are reported, never hidden. Release gate optionally requires all ready.
if (coverage.counts.failures || validation.some(i => i.severity === 'error') || (process.argv.includes('--require-ready') && coverage.counts.insufficient)) process.exitCode = 1;
