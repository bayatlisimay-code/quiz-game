import { approvedArtContent, approvedArtEvidence, createActiveArtSets } from "../../../data/activeArtContent";
import { paintingPilotWorks } from "../../../data/artPilot/painting";
import { sculpturePilotWorks } from "../../../data/artPilot/sculpture";
import { terminologyPilotConcepts } from "../../../data/artPilot/terminology";
import { ACTIVE_CONCEPT_SETS, activeSemanticContext as context } from "../contentSnapshot";
import { getCurriculumPool } from "../curriculumPool";
import { buildQuizResult, quizCompositionViolations } from "../buildQuiz";
import { exerciseValidityViolations, measureGenerationCoverage } from "../generationCoverage";
import { getExerciseCapabilities, buildExercise } from "../exerciseFactory";
import { reverseConcept, getAssessmentTemplate } from "../assessmentTemplates";
import { validateContent } from "../contentValidation";
import { targetRelationPolicies } from "../relationPolicies";
import { gradeMatchingAssignment, isTypedAnswerCorrect, isMatchingPairCorrect } from "../answerValidation";
import { attemptMatchingPair } from "../matchingInteraction";
import { isPermanentlyLockable } from "../matchingSafety";
import { createSemanticContext } from "../semanticValidation";
import type { Concept } from "../conceptTypes";

const slices = [{ subtopicId: "sculpture", levelId: "l3" }, { subtopicId: "painting", levelId: "l2" }];
const poolFor = (subtopicId: string, levelId: string, partId: string) => getCurriculumPool(ACTIVE_CONCEPT_SETS, { topicId: "art", subtopicId, levelId, partId });
const cases = slices.flatMap(slice => ["p1", "p2", "p3", "p4", "p5"].flatMap(partId =>
  (["A", "B", "C"] as const).map(variant => ({ id: `art_${slice.subtopicId}_${slice.levelId}_${partId}`,
    concepts: poolFor(slice.subtopicId, slice.levelId, partId), variant, mode: partId === "p3" || partId === "p5" ? "review" as const : "teaching" as const }))));

test("production pilot has 18 sourced originals, 54 teaching facts and four terminology facts; no fabricated human review or image approvals", () => {
  expect(paintingPilotWorks).toHaveLength(9); expect(sculpturePilotWorks).toHaveLength(9);
  expect(approvedArtContent).toHaveLength(58);
  expect(new Set(approvedArtContent.map(c => c.id)).size).toBe(58);
  expect(validateContent(approvedArtContent, targetRelationPolicies, undefined, { evidence: approvedArtEvidence }).filter(i => i.severity === "error")).toEqual([]);
  expect(() => createActiveArtSets(approvedArtContent)).not.toThrow();
  expect(approvedArtEvidence.every(e => e.sourceUrl.startsWith("https://") && !e.sourceUrl.includes("example.invalid") && e.reviewedBy?.includes("not independent human"))).toBe(true);
  expect(Object.keys(context.images.bindings)).toEqual([]);
  for (const slice of slices) {
    const recognition = poolFor(slice.subtopicId, slice.levelId, "p1");
    expect(recognition.map(c => c.introducedIn)).toEqual(["A", "A", "A", "A", "B", "B", "B", "C", "C"]);
    for (const c of recognition) {
      expect(c.assessment?.identification?.description?.text).not.toContain(c.object);
      expect(getExerciseCapabilities(c, recognition, context).forms.blank_typed.available).toBe(false);
    }
  }
});

test("all 30 real pilot part/variant combinations satisfy exact composition and semantic checks over 20 deterministic attempts", () => {
  const coverage = measureGenerationCoverage(cases, context, 20);
  expect(coverage.counts).toMatchObject({ requests: 600, ready: 600, insufficient: 0, failures: 0, matching: 600, duplicateMatching: 0 });
  expect(coverage.violations).toEqual([]);
  expect(coverage.rows.every(r => r.ready === 20 && r.minOrdinary === 7 && r.maxOrdinary === 7)).toBe(true);
});

test.each(cases)("real pool $id / $variant stays deterministic and respects taught stages", entry => {
  const request = { ...entry, context, seed: `pilot-regression:${entry.id}:${entry.variant}` };
  const result = buildQuizResult(request);
  expect(result.status).toBe("ready"); expect(buildQuizResult(request)).toEqual(result);
  expect(quizCompositionViolations(result.exercises, entry.variant)).toEqual([]);
  const allowed = entry.mode === "review" ? ["A", "B", "C"] : entry.variant === "A" ? ["A"] : entry.variant === "B" ? ["A", "B"] : ["A", "B", "C"];
  for (const ex of result.exercises) {
    expect(exerciseValidityViolations(ex, entry.concepts, context)).toEqual([]);
    const ids = ex.type === "matching" ? ex.pairs.map(p => p.id) : [ex.conceptId];
    expect(ids.every(id => allowed.includes(entry.concepts.find(c => c.id === id)!.introducedIn!))).toBe(true);
    if (ex.type === "matching") {
      const matrix = ex.pairs.map(left => ex.pairs.map(right => isMatchingPairCorrect(left, right)));
      expect(isPermanentlyLockable(matrix)).toBe(true);
      let state = { locked: {} };
      for (let left = 0; left < 4; left++) {
        const right = ex.pairs.findIndex(p => isMatchingPairCorrect(ex.pairs[left], p));
        state = attemptMatchingPair(state, ex.pairs, ex.pairs, left, right);
      }
      expect(gradeMatchingAssignment(ex.pairs, ex.pairs, state.locked)).toBe(true);
      const wrong = ex.pairs.findIndex(p => !isMatchingPairCorrect(ex.pairs[0], p));
      if (wrong >= 0) expect(attemptMatchingPair({ locked: {} }, ex.pairs, ex.pairs, 0, wrong).wrong).toEqual({ left: 0, right: wrong });
    }
  }
});

test("p3/p5 reuse original IDs and all ten l10 review parts collect the available pilot teaching facts without clones", () => {
  for (const slice of slices) {
    const p1 = poolFor(slice.subtopicId, slice.levelId, "p1"), p2 = poolFor(slice.subtopicId, slice.levelId, "p2"), p4 = poolFor(slice.subtopicId, slice.levelId, "p4");
    expect(poolFor(slice.subtopicId, slice.levelId, "p3").map(c => c.id)).toEqual([...p1, ...p2].map(c => c.id));
    expect(poolFor(slice.subtopicId, slice.levelId, "p5").map(c => c.id)).toEqual([...p1, ...p2, ...p4].map(c => c.id));
    for (const part of [1, 2, 3, 4, 5]) {
      const pool = poolFor(slice.subtopicId, "l10", `p${part}`);
      expect(pool).toHaveLength(slice.subtopicId === "sculpture" ? 31 : 27);
      expect(new Set(pool.map(c => c.id)).size).toBe(pool.length);
    }
  }
});

test("actual creator blanks accept declared aliases, reject other artists and never enable approximate numeric guesses", () => {
  const pool = poolFor("sculpture", "l3", "p2"), c = pool.find(c => c.object === "Michelangelo Buonarroti")!;
  const blank = buildExercise(c, pool, 3, "fill_blank", context);
  expect(blank?.type).toBe("fill_blank");
  if (blank?.type !== "fill_blank") throw new Error("Expected actual creator blank");
  expect(blank.allowedInputModes).toEqual(["input", "options"]);
  expect(isTypedAnswerCorrect(blank, "  MICHELANGELO  ")).toBe(true);
  expect(isTypedAnswerCorrect(blank, "Donatello")).toBe(false);
  const dates = poolFor("sculpture", "l3", "p4");
  for (const date of dates) expect(getExerciseCapabilities(date, dates, context).forms.blank_typed.available).toBe(false);
});

test("dating preserves uncertainty, collection labels, originals, and event distinctions; invisible source interpretation is blocked", () => {
  const dates = approvedArtContent.filter(c => c.partId === "p4");
  expect(dates.map(c => c.object)).toContain("probably c. 1437–1445");
  const supper = dates.find(c => c.subject === "The Last Supper")!;
  expect(supper.assessment?.event).toBe("completion"); expect(supper.object).toBe("1498");
  expect(getAssessmentTemplate(supper).question(supper.subject)).toContain("completion");
  const cycle = dates.find(c => c.subject === "The School of Athens")!;
  expect(cycle.object).toBe("1508–1511");
  expect(getAssessmentTemplate(cycle).question(cycle.subject)).toContain("whole fresco cycle");
  for (const c of dates) expect(getAssessmentTemplate(c).statement(c.subject, c.object)).toContain("collection entry lists");
  expect(dates.every(c => reverseConcept(c) === undefined)).toBe(true); // Only independently reviewed creator inverses are enabled.
  const hidden = { ...supper, assessment: { ...supper.assessment!, dateInterpretation: undefined } };
  expect(getExerciseCapabilities(hidden, dates, context).forms.mcq.available).toBe(false);
  expect(sculpturePilotWorks.find(w => w.id === "loggia-perseus")?.event).toBe("completion");
});

test("real one-to-many reverse credits exclude both of Michelangelo's works as wrong answers", () => {
  const pool = poolFor("sculpture", "l3", "p2"), reversed = pool.map(c => reverseConcept(c)!);
  const works = reversed.filter(c => c.semantic?.subject?.id === "person:michelangelo");
  expect(works).toHaveLength(2);
  expect(context.evaluate(works[0], works[1]).verdict).toBe("valid");
  expect(getExerciseCapabilities(works[0], reversed, context).optionCandidates).not.toContain(works[1]);
  const coverage = measureGenerationCoverage(cases.filter(entry => entry.id.endsWith("p2")).map(entry => ({ ...entry, direction: "reverse" as const })), context, 20);
  expect(coverage.counts).toMatchObject({ requests: 120, ready: 120, failures: 0 });
  for (const slice of slices) for (const variant of ["A", "B", "C"] as const) {
    const request = { concepts: poolFor(slice.subtopicId, slice.levelId, "p2"), context, direction: "reverse" as const, variant, seed: `real-inverse:${variant}` };
    const result = buildQuizResult(request);
    expect(result.status).toBe("ready"); expect(quizCompositionViolations(result.exercises, variant)).toEqual([]);
    for (const exercise of result.exercises) expect(exerciseValidityViolations(exercise, request.concepts, context)).toEqual([]);
  }
});

test("definition contrasts assess the defining operation, never claim that techniques cannot coexist in a sculpture", () => {
  const pool = [...terminologyPilotConcepts];
  for (const c of pool) {
    expect(getExerciseCapabilities(c, pool, context).forms.blank_typed.available).toBe(false);
    for (const other of pool) expect(context.evaluate(c, other).verdict).toBe(c.id === other.id ? "valid" : "invalid");
  }
  const coverage = measureGenerationCoverage((["A", "B", "C"] as const).map(variant => ({ id: "art_sculpture_l5_p1", concepts: pool, variant })), context, 20);
  expect(coverage.counts).toMatchObject({ ready: 60, failures: 0 });
  const unknown: Concept = { ...pool[0], id: "unreviewed-paraphrase", object: "Some other plausible description", semantic: { ...pool[0].semantic, value: { id: "meaning:unreviewed", entityType: "meaning" } } };
  expect(context.evaluate(pool[0], unknown).verdict).toBe("unknown");
});

test("removing source evidence fails closed, and moving curriculum scope does not change truth", () => {
  const pool = poolFor("painting", "l2", "p2");
  expect(buildQuizResult({ concepts: pool, variant: "A", seed: "evidence-withdrawn", context: createSemanticContext(pool, { policies: targetRelationPolicies }) }).status).toBe("insufficient-content");
  const moved = { ...pool[0], levelId: "l8", partId: "p4" };
  expect(context.claim(moved).key).toBe(context.claim(pool[0]).key);
  expect(context.evaluate(moved, moved).verdict).toBe("valid");
});
