/* Read-only diagnostic: node scripts/quiz-validity-impact.cjs [--attempts=20]
 * Optional baseline: --baseline=/path/to/reviewed-report.json
 * Full output is JSON; redirect outside the repository if desired.
 */
const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");
require.extensions[".ts"] = (module, filename) => {
  const source = fs.readFileSync(filename, "utf8");
  module._compile(ts.transpileModule(source, { compilerOptions: {
    module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true,
  } }).outputText, filename);
};
const root = path.resolve(__dirname, "..");
const { TOPIC_BY_ID } = require(path.join(root, "data/catalog.ts"));
const { CONCEPT_SETS, AUTHORED_CONCEPT_SETS, REGISTRATION_ISSUES } = require(path.join(root, "data/conceptSets.ts"));
const { registeredSemanticContext, registeredConcepts, ACTIVE_CONCEPT_SETS, activeSemanticContext, activeRegisteredConcepts } = require(path.join(root, "src/quizEngine/contentSnapshot.ts"));
const { catalogCoverageCases, measureGenerationCoverage, coverageRegressions } = require(path.join(root, "src/quizEngine/generationCoverage.ts"));
const { validateContent } = require(path.join(root, "src/quizEngine/contentValidation.ts"));
const { protectedRelationIds } = require(path.join(root, "src/quizEngine/relationPolicies.ts"));
const attemptArg = process.argv.find((arg) => arg.startsWith("--attempts="));
const attempts = attemptArg ? Number(attemptArg.split("=")[1]) : 20;
if (!Number.isInteger(attempts) || attempts < 1) throw new Error("attempts must be a positive integer");
const legacy = process.argv.includes("--legacy-source");
const concepts = legacy ? registeredConcepts() : activeRegisteredConcepts();
const context = legacy ? registeredSemanticContext : activeSemanticContext;
const cases = catalogCoverageCases(TOPIC_BY_ID.art, legacy ? CONCEPT_SETS : ACTIVE_CONCEPT_SETS);
const result = measureGenerationCoverage(cases, context, attempts);
const { findOrphanedSets } = require(path.join(root, "src/quizEngine/contentRegistry.ts"));
function discoverPopulatedSets(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) return discoverPopulatedSets(filename);
    if (entry.name !== "concepts.ts") return [];
    const set = require(filename).default;
    return set.concepts.length ? [set] : [];
  });
}
const validation = [...validateContent(concepts, context.policies, undefined, { evidence: context.evidence, images: context.images }), ...REGISTRATION_ISSUES,
  ...findOrphanedSets(discoverPopulatedSets(path.join(root, "data/concepts")), AUTHORED_CONCEPT_SETS)];
const baselineArg = process.argv.find((arg) => arg.startsWith("--baseline="));
const regressions = baselineArg ? coverageRegressions(result.rows, JSON.parse(fs.readFileSync(baselineArg.slice("--baseline=".length), "utf8")).rows) : [];
const readyByVariant = Object.fromEntries(["A", "B", "C"].map((variant) => [variant, result.rows.filter((row) => row.variant === variant && row.ready === attempts).length]));
const emptyByVariant = Object.fromEntries(["A", "B", "C"].map((variant) => [variant, result.rows.filter((row) => row.variant === variant && row.empty === attempts).length]));
console.log(JSON.stringify({
  curriculum: legacy ? "archived-source" : "approved-miro-active", attempts, ...result, readyByVariant, emptyByVariant, regressions,
  catalogue: { relations: new Set(concepts.map((c) => c.relation)).size, policies: Object.keys(context.policies).length,
    blocked: protectedRelationIds, records: concepts.length,
    recordsByStatus: Object.fromEntries(["legacy-reviewed", "semantically-validated", "blocked-pending-metadata"].map((status) =>
      [status, concepts.filter((c) => context.policies[c.relation]?.status === status).length])) },
  curriculumPools: { emptyPartVariantPools: cases.filter((entry) => !entry.concepts.length).length,
    uniqueRecordsInPools: new Set(cases.flatMap((entry) => entry.concepts.map((c) => c.id))).size },
  difficulty: { unknownChallengeRatings: concepts.filter((c) => c.difficulty === undefined).length,
    preservedRanksAboveFive: concepts.filter((c) => c.legacyCurriculumRank > 5).length },
  authoring: { errors: validation.filter((i) => i.severity === "error"), reviewItems: validation.filter((i) => i.severity === "review").length },
}, null, 2));
if (result.counts.failures || validation.some((i) => i.severity === "error") || regressions.length) process.exitCode = 1;
