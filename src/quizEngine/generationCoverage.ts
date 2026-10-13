import type { Topic } from "../../data/catalog";
import { getCurriculumPool } from "./curriculumPool";
import type { ConceptSets } from "./curriculumPool";
import type { Concept, Exercise } from "./conceptTypes";
import { buildQuizResult, prepareQuizSession, quizCompositionViolations } from "./buildQuiz";
import type { QuizGenerationResult } from "./buildQuiz";
import type { SemanticContext } from "./semanticValidation";
import { getAssessmentTemplate, reverseConcept } from "./assessmentTemplates";
import { isPermanentlyLockable, hasIndistinguishableAnswers } from "./matchingSafety";
import { isMatchingPairCorrect, getExerciseCapabilities } from "./exerciseFactory";

export type CoverageCase = { id: string; concepts: Concept[]; variant: "A" | "B" | "C"; mode?: "teaching" | "review"; direction?: "forward" | "reverse" };
export function catalogCoverageCases(topic: Topic, sets: ConceptSets): CoverageCase[] {
  return topic.subtopics.flatMap((subtopic) => subtopic.levels.flatMap((level) => level.parts.flatMap((part) => {
    const levelId = `l${level.id}`, partId = `p${part.id}`;
    const concepts = getCurriculumPool(sets, { topicId: topic.id, subtopicId: subtopic.id, levelId, partId });
    return (["A", "B", "C"] as const).map((variant) => ({ id: part.questionSetId, concepts, variant, mode: levelId === "l10" || partId === "p3" || partId === "p5" ? "review" : "teaching" }));
  })));
}
export type CoverageRow = { id: string; variant: "A" | "B" | "C"; attempts: number; ready: number; empty: number; minOrdinary: number; maxOrdinary: number };
export function measureGenerationCoverage(cases: readonly CoverageCase[], context: SemanticContext, attempts = 20) {
  const counts = { requests: 0, ready: 0, insufficient: 0, empty: 0, ordinary: 0, mcq: 0, true: 0, false: 0, blank: 0, matching: 0, duplicateMatching: 0, failures: 0 };
  const presented = { quizzes: 0, ordinary: 0, mcq: 0, true: 0, false: 0, blank: 0, matching: 0 };
  const rows: CoverageRow[] = [];
  const violations: string[] = [];
  const shortageCounts: Record<string, number> = {};
  for (const entry of cases) {
    const row: CoverageRow = { id: entry.id, variant: entry.variant, attempts, ready: 0, empty: 0, minOrdinary: 7, maxOrdinary: 0 };
    const session = prepareQuizSession({ ...entry, context });
    for (let attempt = 1; attempt <= attempts; attempt++) {
      const seed = `${entry.id}_quiz${entry.variant}_attempt${attempt}`;
      const result = buildQuizResult({ ...entry, context, seed, session });
      counts.requests++;
      for (const shortage of result.diagnostics.shortages) {
        const code = shortage.form ? `${shortage.code}:${shortage.form}` : shortage.code;
        shortageCounts[code] = (shortageCounts[code] ?? 0) + 1;
      }
      if (result.status === "ready") {
        for (const error of quizCompositionViolations(result.exercises, entry.variant)) {
          counts.failures++; if (violations.length < 50) violations.push(`${seed}: ${error}`);
        }
        counts.ready++; row.ready++; presented.quizzes++; presented.ordinary += result.diagnostics.generatedOrdinary; } else counts.insufficient++;
      if (!result.exercises.length) { counts.empty++; row.empty++; }
      row.minOrdinary = Math.min(row.minOrdinary, result.diagnostics.generatedOrdinary);
      row.maxOrdinary = Math.max(row.maxOrdinary, result.diagnostics.generatedOrdinary);
      counts.ordinary += result.diagnostics.generatedOrdinary;
      for (const exercise of result.exercises) {
        if (result.status === "ready") {
          if (exercise.type === "matching") presented.matching++;
          else if (exercise.type === "true_false") presented[exercise.correctAnswer ? "true" : "false"]++;
          else presented[exercise.type === "mcq" ? "mcq" : "blank"]++;
        }
        const errors = exerciseValidityViolations(exercise, entry.concepts, context);
        for (const error of errors) { counts.failures++; if (violations.length < 50) violations.push(`${seed}: ${error}`); }
        if (exercise.type === "matching") {
          counts.matching++;
          if (new Set(exercise.pairs.map((p) => p.right)).size < exercise.pairs.length) counts.duplicateMatching++;
        } else if (exercise.type === "true_false") counts[exercise.correctAnswer ? "true" : "false"]++;
        else counts[exercise.type === "mcq" ? "mcq" : "blank"]++;
      }
    }
    rows.push(row);
  }
  return { counts, presented, rows, violations, shortageCounts };
}
export function exerciseValidityViolations(exercise: Exercise, pool: readonly Concept[], context: SemanticContext): string[] {
  const errors: string[] = [];
  if (exercise.direction === "reverse") pool = pool.flatMap(c => { const reversed = reverseConcept(c); return reversed ? [reversed] : []; });
  if (exercise.type === "matching") {
    if (hasIndistinguishableAnswers(exercise.pairs)) errors.push("Indistinguishable matching answers");
    if (!isPermanentlyLockable(exercise.pairs.map(left => exercise.pairs.map(right => isMatchingPairCorrect(left, right))))) errors.push("Matching can trap a valid permanent lock");
    for (const left of exercise.pairs) for (const right of exercise.pairs) {
      const target = pool.find((c) => c.id === left.id), candidate = pool.find((c) => c.id === right.id);
      if (!target || !candidate) { errors.push("Matching escaped curriculum scope"); continue; }
      const policy = context.policies[target.relation];
      if (!policy?.allowMatching || policy.status === "blocked-pending-metadata") errors.push("Matching escaped policy");
      const verdict = context.evaluate(target, candidate).verdict;
      if (verdict === "unknown") errors.push("Uncertified matching cross-pairing");
      if (verdict !== "unknown" && isMatchingPairCorrect(left, right) !== (verdict === "valid")) errors.push("Matching misgrades semantic compatibility");
      if (left.answerIdentity === right.answerIdentity && !isMatchingPairCorrect(left, right)) errors.push("Equivalent matching cards graded wrong");
    }
    return errors;
  }
  const concept = pool.find((c) => c.id === exercise.conceptId);
  if (!concept) return ["Exercise escaped curriculum scope"];
  const policy = context.policies[concept.relation];
  const caps = getExerciseCapabilities(concept, pool, context);
  if (exercise.type === "mcq" && !caps.forms.mcq.available) errors.push("MCQ escaped capability validation");
  if (exercise.type === "true_false" && (!caps.forms.true.available || !caps.forms.false.available)) errors.push("True/False escaped balanced capability validation");
  if (exercise.type === "fill_blank" && exercise.allowedInputModes?.includes("input") && !caps.forms.blank_typed.available) errors.push("Typed blank lacks a finite reviewed response contract");
  if (!policy || !policy.allowedExerciseTypes.includes(exercise.type) || policy.status === "blocked-pending-metadata") errors.push("Unsupported form escaped policy");
  if (exercise.type === "true_false" && exercise.correctAnswer &&
      exercise.statement !== getAssessmentTemplate(concept).statement(concept.subject, concept.object, concept.context)) errors.push("Unsupported true assertion");
  if (exercise.type === "fill_blank") {
    if (exercise.allowedInputModes?.includes("input") && !policy?.allowTypedBlank) errors.push("Typed blank escaped policy");
    if (exercise.allowedInputModes?.includes("options") && !policy?.allowOptionsBlank) errors.push("Options blank escaped policy");
  }
  if (exercise.type === "true_false" && !exercise.correctAnswer) {
    const template = getAssessmentTemplate(concept);
    const shown = pool.filter((candidate) => template.statement(concept.subject, candidate.object, concept.context) === exercise.statement);
    const certified = shown.filter((c) => context.evaluate(concept, c).verdict === "invalid");
    const certifiedIdentities = new Set(certified.map((c) => context.claim(c).answer.identity));
    if (!certified.length || shown.some((c) => context.evaluate(concept, c).verdict === "valid" || !certifiedIdentities.has(context.claim(c).answer.identity))) errors.push("False statement lacks negative certification");
  }
  if (exercise.type === "mcq" || exercise.type === "fill_blank") {
    if (exercise.options && (exercise.options.length < 3 || exercise.correctIndex === undefined || exercise.options[exercise.correctIndex] !== exercise.answerText)) errors.push("Correct answer missing or insufficient options");
    if (exercise.options && new Set(exercise.options.map((s) => s.normalize("NFC").trim())).size !== exercise.options.length) errors.push("Duplicate visible options");
    for (const [i, option] of (exercise.options ?? []).entries()) {
      if (i === exercise.correctIndex) continue;
      const candidates = pool.filter((c) => c.object === option);
      const certificates = candidates.filter((c) => context.evaluate(concept, c).verdict === "invalid");
      const identities = new Set(certificates.map((c) => context.claim(c).answer.identity));
      if (!certificates.length || candidates.some((c) => context.evaluate(concept, c).verdict === "valid" || !identities.has(context.claim(c).answer.identity))) errors.push("Option lacks negative certification");
    }
  }
  return errors;
}
export function coverageRegressions(rows: readonly CoverageRow[], baseline: readonly CoverageRow[]): string[] {
  const current = new Map(rows.map((row) => [`${row.id}:${row.variant}`, row]));
  return baseline.flatMap((before) => {
    const after = current.get(`${before.id}:${before.variant}`);
    return !after || after.minOrdinary < before.minOrdinary || after.ready / after.attempts < before.ready / before.attempts
      ? [`${before.id}:${before.variant}: assessable question availability decreased`] : [];
  });
}
// A diagnostic shortage is not automatically a regression: intentionally blocked
// content must be reviewed in a new baseline. Never silently update CI baselines.
export function assertReady(result: QuizGenerationResult): void {
  if (result.status !== "ready") throw new Error(`Insufficient assessable content: ${result.diagnostics.generatedOrdinary}/7`);
}
