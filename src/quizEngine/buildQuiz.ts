import { isPermanentlyLockable, hasIndistinguishableAnswers } from "./matchingSafety";
import { isMatchingPairCorrect } from "./answerValidation";
import { reverseConcept } from "./assessmentTemplates";
import { hashString, seededShuffle } from "./deterministic";
import type { Concept, Exercise, ExerciseType } from "./conceptTypes";
import { assessableForms, generateExercise, getExerciseCapabilities, matchingCandidates, spendSearchNode } from "./exerciseFactory";
import type { AssessmentForm, ExerciseCapabilities, SearchBudget } from "./exerciseFactory";
import { createSemanticContext, immutableSnapshot } from "./semanticValidation";
import type { SemanticContext } from "./semanticValidation";

export type QuizVariant = "A" | "B" | "C";
const TYPES: readonly ExerciseType[] = ["mcq", "true_false", "fill_blank"];
export function quizComposition(variant: QuizVariant): Readonly<Record<ExerciseType, number>> {
  return Object.freeze({ mcq: variant === "A" ? 3 : 2, true_false: variant === "B" ? 3 : 2, fill_blank: variant === "C" ? 3 : 2 });
}
export type QuizRequest = {
  concepts: Concept[];
  direction?: "forward" | "reverse";
  mode?: "teaching" | "review";
  variant: QuizVariant;
  seed: string;
  context?: SemanticContext;
  session?: QuizSession;
  searchNodeLimit?: number;
};
export type QuizShortage = { code: "missing-form" | "distinct-facts" | "matching" | "joint-composition" | "search-limit" | "generation-validation"; message: string; form?: ExerciseType };
export type QuizGenerationResult = {
  status: "ready" | "insufficient-content";
  exercises: Exercise[];
  diagnostics: {
    requestedOrdinary: number;
    generatedOrdinary: number;
    eligibleConcepts: number;
    assessableConcepts: number;
    unavailable: { conceptId: string; reasons: readonly string[] }[];
    matching: string;
    required: Readonly<Record<ExerciseType, number>>;
    available: Readonly<Record<ExerciseType, number>>;
    shortages: readonly QuizShortage[];
    searchNodes: number;
  };
};
export type QuizSession = Readonly<{
  source: readonly Concept[];
  variant: QuizVariant;
  direction?: "forward" | "reverse";
  mode: "teaching" | "review";
  context: SemanticContext;
  eligible: readonly Concept[];
  assessable: readonly Concept[];
  unavailable: readonly { conceptId: string; reasons: readonly string[] }[];
  capabilities(concept: Concept): ExerciseCapabilities;
}>;
function supports(capabilities: ExerciseCapabilities, type: ExerciseType): boolean {
  const forms = assessableForms(capabilities);
  return type === "mcq" ? forms.includes("mcq") : type === "true_false" ? forms.includes("false") && forms.includes("true")
    : forms.includes("blank_options") || forms.includes("blank_typed");
}
export function prepareQuizSession({ concepts: supplied, variant, context: suppliedContext, direction, mode = "teaching" }: Omit<QuizRequest, "seed" | "session">): QuizSession {
  const stages = mode === "review" ? ["A", "B", "C"] : variant === "A" ? ["A"] : variant === "B" ? ["A", "B"] : ["A", "B", "C"];
  const oriented = direction === "reverse" ? supplied.flatMap(c => { const view = reverseConcept(c); return view ? [view] : []; }) : supplied;
  const stageEligible = immutableSnapshot([...new Map(oriented.filter((c) => stages.includes(c.introducedIn ?? "A")).map((c) => [c.id, c])).values()]);
  const context = suppliedContext ?? createSemanticContext(supplied);
  const facts = new Set<string>();
  const eligible = stageEligible.filter(c => {
    const claim = context.claim(c);
    const key = c.assessment?.factId ?? `${claim.key}:${claim.answer.identity}`;
    if (facts.has(key)) return false;
    facts.add(key); return true;
  });
  const capabilities = new Map(eligible.map((c) => [c.id, getExerciseCapabilities(c, eligible, context, 3)]));
  const assessable = eligible.filter((c) => assessableForms(capabilities.get(c.id)!).length > 0);
  const unavailable = eligible.filter((c) => !assessable.includes(c)).map((c) => ({ conceptId: c.id,
    reasons: [...new Set(Object.values(capabilities.get(c.id)!.forms).filter((f) => !f.available).map((f) => f.reason))] }));
  return Object.freeze({ source: supplied, variant, direction, mode, context, eligible: Object.freeze(eligible), assessable: Object.freeze(assessable),
    unavailable: Object.freeze(unavailable), capabilities: (c: Concept) => capabilities.get(c.id)! });
}

// Prefer the established five-fact/two-recall layout. When it cannot satisfy
// fixed quotas, allow four, six or seven distinct facts, keeping each fact at
// most twice and in different families. Matching still reuses ordinary facts.
// Intro-stage preference affects search order, never safety or the fixed quotas.
type Assignment = { concept: Concept; type: ExerciseType };
function planOrdinary(session: QuizSession, matchingIds: ReadonlySet<string>, seed: string, budget: SearchBudget, targetDistinct: number): Assignment[] | undefined {
  const required = quizComposition(session.variant);
  const ordered = seededShuffle(session.assessable, `${seed}:ordinary`).sort((a, b) =>
    session.mode === "review" ? 0 : Number((b.introducedIn ?? "A") === session.variant) - Number((a.introducedIn ?? "A") === session.variant));
  const candidates = Object.fromEntries(TYPES.map((type) => [type, ordered.filter((c) => supports(session.capabilities(c), type))])) as Record<ExerciseType, Concept[]>;
  const hasNew = ordered.some((c) => (c.introducedIn ?? "A") === session.variant);
  const hasOlder = ordered.some((c) => (c.introducedIn ?? "A") !== session.variant);
  const olderRange = session.mode === "review" ? [0, 7] : hasNew && hasOlder && session.variant !== "A" ? session.variant === "B" ? [1, 2] : [2, 3] : [0, 7];
  const isOlder = (c: Concept) => (c.introducedIn ?? "A") !== session.variant;
  if (ordered.filter((c) => matchingIds.has(c.id) && isOlder(c)).length > olderRange[1]) return undefined;
  const remaining = { ...required };
  const usage = new Map<string, Set<ExerciseType>>();
  const assignments: Assignment[] = [];
  const failed = new Set<string>();
  const search = (): boolean => {
    if (!spendSearchNode(budget)) return false;
    const olderCount = assignments.filter((a) => isOlder(a.concept)).length;
    if (olderCount > olderRange[1] || olderCount + (7 - assignments.length) < olderRange[0]) return false;
    if (assignments.length === 7) return usage.size === targetDistinct && olderCount >= olderRange[0] && [...matchingIds].every((id) => usage.has(id));
    const slots = 7 - assignments.length;
    const missingMatching = [...matchingIds].filter((id) => !usage.has(id));
    if (missingMatching.length > slots || usage.size + slots < targetDistinct) return false;
    const key = JSON.stringify([remaining, [...usage].map(([id, types]) => [id, [...types].sort()]).sort()]);
    if (failed.has(key)) return false;
    const eligible = (c: Concept, type: ExerciseType) => !usage.get(c.id)?.has(type) && (usage.get(c.id)?.size ?? 0) < 2 && (usage.has(c.id) || usage.size < targetDistinct);
    const type = TYPES.filter((t) => remaining[t] > 0).sort((a, b) =>
      candidates[a].filter((c) => eligible(c, a)).length - candidates[b].filter((c) => eligible(c, b)).length)[0];
    const options = candidates[type].filter((c) => eligible(c, type)).sort((a, b) =>
      Number(missingMatching.includes(b.id)) - Number(missingMatching.includes(a.id)));
    for (const concept of options) {
      const used = usage.get(concept.id) ?? new Set<ExerciseType>();
      used.add(type); usage.set(concept.id, used); remaining[type]--; assignments.push({ concept, type });
      if (search()) return true;
      assignments.pop(); remaining[type]++; used.delete(type); if (!used.size) usage.delete(concept.id);
      if (budget.exhausted) return false;
    }
    failed.add(key);
    return false;
  };
  return search() ? assignments : undefined;
}
export function quizCompositionViolations(exercises: readonly Exercise[], variant: QuizVariant): string[] {
  const issues: string[] = [];
  if (exercises.length !== 8) issues.push("Expected exactly eight exercises");
  const matching = exercises.filter((e) => e.type === "matching");
  if (matching.length !== 1 || matching.some((e) => e.pairs.length !== 4)) issues.push("Expected one four-pair matching exercise");
  for (const exercise of matching) {
    if (hasIndistinguishableAnswers(exercise.pairs)) issues.push("Matching answers must be visibly distinct");
    if (!isPermanentlyLockable(exercise.pairs.map(left => exercise.pairs.map(right => isMatchingPairCorrect(left, right))))) issues.push("Every accepted matching lock must remain completable");
  }
  for (const type of TYPES) if (exercises.filter((e) => e.type === type).length !== quizComposition(variant)[type]) issues.push(`Incorrect ${type} quota`);
  const truths = exercises.filter((e) => e.type === "true_false").map((e) => e.correctAnswer);
  if (!truths.includes(true) || !truths.includes(false)) issues.push("True/False must assess both truth values");
  const ordinary = exercises.filter((e) => e.type !== "matching");
  const facts = new Set(ordinary.map((e) => e.factId ?? e.conceptId));
  if (facts.size < 4) issues.push("At least four distinct ordinary facts are required");
  if (new Set(ordinary.map((e) => `${e.factId ?? e.conceptId}:${e.type}`)).size !== ordinary.length) issues.push("Repeated fact in the same exercise family");
  if ([...facts].some((id) => ordinary.filter((e) => (e.factId ?? e.conceptId) === id).length > 2)) issues.push("Fact repeated more than twice");
  if (matching.some((e) => e.pairs.some((p) => !p.id || !ordinary.some(e => e.conceptId === p.id)))) issues.push("Matching escaped selected ordinary facts");
  return issues;
}
export function buildQuizResult(request: QuizRequest): QuizGenerationResult {
  const { variant, seed } = request;
  const session = request.session && request.session.source === request.concepts && request.session.variant === variant && request.session.direction === request.direction && request.session.mode === (request.mode ?? "teaching") &&
    (!request.context || request.context === request.session.context) ? request.session : prepareQuizSession(request);
  const required = quizComposition(variant);
  const available = Object.fromEntries(TYPES.map((type) => [type, session.assessable.filter((c) => supports(session.capabilities(c), type)).length])) as Record<ExerciseType, number>;
  const shortages: QuizShortage[] = [];
  const budget: SearchBudget = { examined: 0, limit: Math.min(50000, Math.max(1, Math.floor(request.searchNodeLimit ?? 50000) || 1)), exhausted: false };
  const diagnostics = { requestedOrdinary: 7, generatedOrdinary: 0, eligibleConcepts: session.eligible.length,
    assessableConcepts: session.assessable.length, unavailable: [...session.unavailable], matching: "Not planned", required, available, shortages, searchNodes: 0 };
  const failure = (): QuizGenerationResult => ({ status: "insufficient-content", exercises: [], diagnostics: { ...diagnostics, searchNodes: budget.examined } });
  for (const type of TYPES) if (available[type] < required[type]) shortages.push({ code: "missing-form", form: type,
    message: `${type}: needs ${required[type]} distinct eligible facts, has ${available[type]} (negative evidence and form policy required)` });
  if (session.assessable.length < 4) shortages.push({ code: "distinct-facts", message: `Four assessable facts required; has ${session.assessable.length}` });
  if (shortages.length) return failure();
  let sawMatching = false;
  for (const matching of matchingCandidates(session.assessable, seed, session.context, budget)) {
    sawMatching = true;
    let assignments: Assignment[] | undefined;
    for (const target of [5, 4, 6, 7].filter((n) => n <= session.assessable.length)) {
      assignments = planOrdinary(session, new Set(matching.concepts.map((c) => c.id)), seed, budget, target);
      if (assignments || budget.exhausted) break;
    }
    if (!assignments) { if (budget.exhausted) break; continue; }
    const exercises: Exercise[] = [];
    let truthIndex = hashString(`${seed}:truth-balance`) % 2;
    for (const [index, { concept, type }] of assignments.entries()) {
      const caps = session.capabilities(concept);
      const form: AssessmentForm = type === "mcq" ? "mcq" : type === "true_false" ? truthIndex++ % 2 ? "false" : "true"
        : caps.forms.blank_options.available ? "blank_options" : "blank_typed";
      const result = generateExercise(concept, caps, form, session.context, `${seed}:${index}:${concept.id}`, 3);
      if (result.status === "unavailable") {
        shortages.push({ code: "generation-validation", message: result.reason });
        return failure();
      }
      exercises.push(result.exercise);
    }
    exercises.push(matching.exercise);
    const violations = quizCompositionViolations(exercises, variant);
    if (violations.length) { shortages.push(...violations.map((message): QuizShortage => ({ code: "generation-validation", message }))); return failure(); }
    return { status: "ready", exercises: seededShuffle(exercises, `${seed}:exercise-order`),
      diagnostics: { ...diagnostics, generatedOrdinary: 7, matching: "Available", searchNodes: budget.examined } };
  }
  diagnostics.matching = sawMatching ? "Safe groups cannot satisfy joint quotas" : "No certified four-pair group";
  shortages.push({ code: budget.exhausted ? "search-limit" : sawMatching ? "joint-composition" : "matching",
    message: budget.exhausted ? "Bounded deterministic search exhausted; feasibility undetermined (not proof of a content shortage)" : diagnostics.matching });
  return failure();
}
export function buildQuiz(request: QuizRequest): Exercise[] { return buildQuizResult(request).exercises; }
