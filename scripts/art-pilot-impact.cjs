/* Production-path pilot diagnostic. No output files or content are generated.
 * node scripts/art-pilot-impact.cjs [--attempts=20]
 */
const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");
require.extensions[".ts"] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
}).outputText, filename);
const root = path.resolve(__dirname, "..");
const { ACTIVE_CONCEPT_SETS, activeSemanticContext: baseContext, activeRegisteredConcepts } = require(path.join(root, "src/quizEngine/contentSnapshot.ts"));
const developmentImages = process.argv.includes('--development-images');
const developmentRegistry = developmentImages ? require('../src/images/developmentRegistry.generated.json') : undefined;
if (developmentImages && !Object.keys(developmentRegistry.bindings).length) throw new Error('No verified development image bindings; complete the R2 upload first');
const context = developmentImages ? baseContext.withImages(developmentRegistry) : baseContext;
const { getCurriculumPool } = require(path.join(root, "src/quizEngine/curriculumPool.ts"));
const { measureGenerationCoverage } = require(path.join(root, "src/quizEngine/generationCoverage.ts"));
const { validateContent } = require(path.join(root, "src/quizEngine/contentValidation.ts"));
const { buildQuizResult } = require(path.join(root, "src/quizEngine/buildQuiz.ts"));
const attemptArg = process.argv.find(arg => arg.startsWith("--attempts="));
const attempts = attemptArg ? Number(attemptArg.split("=")[1]) : 20;
if (!Number.isInteger(attempts) || attempts < 1) throw new Error("attempts must be a positive integer");
function casesFor(subtopicId, levelId, parts) {
  return parts.flatMap(partId => ["A", "B", "C"].map(variant => ({
    id: `art_${subtopicId}_${levelId}_${partId}`, variant, mode: partId === "p3" || partId === "p5" ? "review" : "teaching",
    concepts: getCurriculumPool(ACTIVE_CONCEPT_SETS, { topicId: "art", subtopicId, levelId, partId }),
  })));
}
const cases = [...casesFor("sculpture", "l3", ["p1", "p2", "p3", "p4", "p5"]), ...casesFor("painting", "l2", ["p1", "p2", "p3", "p4", "p5"])];
const coverage = measureGenerationCoverage(cases, context, attempts);
const terminology = measureGenerationCoverage(casesFor("sculpture", "l5", ["p1"]), context, attempts);
const reverseCoverage = measureGenerationCoverage(cases.filter(entry => entry.id.endsWith("p2")).map(entry => ({ ...entry, direction: "reverse" })), context, attempts);
const reverse = cases.filter(entry => entry.id.endsWith("p2")).map(entry => ({ id: entry.id, variant: entry.variant,
  result: buildQuizResult({ ...entry, context, direction: "reverse", seed: `pilot-reverse:${entry.id}:${entry.variant}` }) }));
const validation = validateContent(activeRegisteredConcepts(), context.policies, undefined, { evidence: context.evidence, images: context.images });
const samples = cases.filter(entry => entry.variant === "A" && /_p[124]$/.test(entry.id)).map(entry => ({ id: entry.id,
  result: buildQuizResult({ ...entry, context, seed: `pilot-inspection:${entry.id}` }) }));
console.log(JSON.stringify({ attempts, records: activeRegisteredConcepts().length, evidence: context.evidence.length,
  deliveryMode: developmentImages ? "development-r2" : "production", imageBindings: Object.keys(context.images.bindings).length, coverage, terminology, reverseCoverage, reverse, samples, validation }, null, 2));
if (coverage.counts.failures || terminology.counts.failures || coverage.counts.insufficient || terminology.counts.insufficient || reverseCoverage.counts.failures || reverseCoverage.counts.insufficient ||
    reverse.some(entry => entry.result.status !== "ready") || validation.some(issue => issue.severity === "error")) process.exitCode = 1;
