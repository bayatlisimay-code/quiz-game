import artBaseline from "./fixtures/art-exact-contract-baseline.json";
import { certifiedFixtureContext } from "../testSupport/certifiedFixtures";
import { TOPIC_BY_ID } from "../../../data/catalog";
import { buildQuizResult } from "../buildQuiz";
import type { Concept } from "../conceptTypes";
import { registeredSemanticContext } from "../contentSnapshot";
import { getCurriculumPool } from "../curriculumPool";
import { catalogCoverageCases, coverageRegressions, measureGenerationCoverage } from "../generationCoverage";
import { CONCEPT_SETS } from "../../../data/conceptSets";

const fixture = Array.from({ length: 6 }, (_, i): Concept => ({
  id: `safe${i}`, subject: `Work ${i}`, object: `Creator ${i}`, relation: "painted_by", topicId: "art", subtopicId: "fixture",
  levelId: "l1", partId: "p1", answerKind: "short", difficulty: 1, introducedIn: "A",
}));
test("reviewed safe-count baseline remains full across variants; shortages are structured and detected", () => {
  const cases = (["A", "B", "C"] as const).map((variant) => ({ id: "safe-fixture", concepts: fixture, variant }));
  const coverage = measureGenerationCoverage(cases, certifiedFixtureContext(fixture), 3);
  const baseline = cases.map((entry) => ({ id: entry.id, variant: entry.variant, attempts: 3, ready: 3, empty: 0, minOrdinary: 7, maxOrdinary: 7 }));
  expect(coverage.violations).toEqual([]);
  expect(coverageRegressions(coverage.rows, baseline)).toEqual([]);
  const shortage = buildQuizResult({ concepts: [], variant: "A", seed: "missing", context: registeredSemanticContext });
  expect(shortage).toMatchObject({ status: "insufficient-content", diagnostics: { generatedOrdinary: 0, requestedOrdinary: 7 } });
  expect(coverageRegressions([{ ...baseline[0], minOrdinary: 0, ready: 0 }], [baseline[0]])).toHaveLength(1);
});

test("actual Art generation shares production curriculum filters and exposes protected-only shortages", () => {
  const cases = [
    { topicId: "art", subtopicId: "sculpture", levelId: "l2", partId: "p1" },
    { topicId: "art", subtopicId: "painting", levelId: "l1", partId: "p1" },
    { topicId: "art", subtopicId: "literature", levelId: "l10", partId: "p5" },
  ].map((scope) => ({ id: Object.values(scope).join("_"), concepts: getCurriculumPool(CONCEPT_SETS, scope), variant: "A" as const }));
  const result = measureGenerationCoverage(cases, registeredSemanticContext, 3);
  expect(result.violations).toEqual([]);
  expect(result.rows[0]).toMatchObject({ ready: 0, empty: 3 });
  expect(result.rows[1]).toMatchObject({ ready: 0, minOrdinary: 0 });
});

test("catalogue diagnostics use the same canonical IDs as the actual quiz route", () => {
  const cases = catalogCoverageCases(TOPIC_BY_ID.art, CONCEPT_SETS);
  expect(cases).toHaveLength(1200);
  expect(cases[0].id).toBe("art_painting_l1_p1");
  expect(cases.some((entry) => entry.concepts.length > 0)).toBe(true);
  expect(cases.every((entry) => entry.id.includes("_l") && entry.id.includes("_p"))).toBe(true);
});

// Reviewed exact-contract baseline. The prior legacy baseline remains in the
// repository as historical evidence, but allowed uncertified negatives and zero
// TF questions and therefore cannot define release-ready availability.
test("actual Art ordinary-count baseline detects new availability regressions", () => {
  const cases = catalogCoverageCases(TOPIC_BY_ID.art, CONCEPT_SETS);
  const result = measureGenerationCoverage(cases, registeredSemanticContext, 1);
  const baseline = Object.entries(artBaseline).flatMap(([id, counts]) => (["A", "B", "C"] as const).map((variant, index) => ({
    id, variant, attempts: 1, ready: counts[index] === 7 ? 1 : 0, empty: counts[index] === 0 ? 1 : 0,
    minOrdinary: counts[index], maxOrdinary: counts[index],
  })));
  expect(result.violations).toEqual([]);
  expect(coverageRegressions(result.rows, baseline)).toEqual([]);
});
