import { typedResponseIsSafe } from "./semanticEvidence";
import { planAssessmentStimulus } from "../images/assessmentImages";
import { getAssessmentTemplate } from "./assessmentTemplates";
import { isPermanentlyLockable } from "./matchingSafety";
import type { Concept, Exercise, MatchingExercise } from "./conceptTypes";
import { hasRelationTemplate } from "./templates";
import { getRelationPolicy } from "./relationPolicies";
import { createSemanticContext, equivalentAnswers, normalizeSemanticText } from "./semanticValidation";
import type { SemanticContext } from "./semanticValidation";
import { hashString, seededShuffle } from "./deterministic";

export type AssessmentForm = "mcq" | "true" | "false" | "blank_options" | "blank_typed";
export type Capability = Readonly<{ available: boolean; reason: string }>;
export type ExerciseCapabilities = Readonly<{
  semanticContext: SemanticContext;
  claimIdentity: string;
  forms: Readonly<Record<AssessmentForm | "matching", Capability>>;
  optionCandidates: readonly Concept[];
  falseCandidates: readonly Concept[];
  acceptedAnswers: readonly string[];
  acceptedAnswerForms: readonly { readonly text: string; readonly caseSensitive: boolean }[];
}>;
export type GenerationResult<T = Exercise> =
  | { status: "generated"; exercise: T; form: AssessmentForm | "matching" }
  | { status: "unavailable"; reason: string; conceptId?: string };
const capability = (available: boolean, reason: string): Capability => Object.freeze({ available, reason });

function uniqueCandidates(candidates: readonly Concept[], context: SemanticContext): Concept[] {
  const identities = new Set<string>(), displays = new Set<string>();
  const forms = new Set<string>();
  return candidates.filter((candidate) => {
    const answer = context.claim(candidate).answer;
    const display = normalizeSemanticText(answer.text);
    const exact = answer.forms.map((text) => `exact:${normalizeSemanticText(text)}`);
    const folded = answer.caseSensitive ? [] : answer.forms.map((text) => `fold:${normalizeSemanticText(text).toLowerCase()}`);
    // Conservative alias deduplication is linear in the number of display forms.
    // It can exclude an ambiguous candidate, never authorize one as a negative.
    if (!display || identities.has(answer.identity) || displays.has(display) || [...exact, ...folded].some((key) => forms.has(key))) return false;
    identities.add(answer.identity); displays.add(display);
    for (const key of [...exact, ...folded]) forms.add(key);
    return true;
  });
}
export function getExerciseCapabilities(concept: Concept, pool: readonly Concept[], context: SemanticContext, optionCount = 3): ExerciseCapabilities {
  const policy = getRelationPolicy(concept.relation, context.policies);
  const claim = context.claim(concept);
  const metadataErrors = context.strategies[policy.semanticStrategy]?.validateMetadata(claim, context) ?? ["Unknown semantic strategy"];
  const enabled = policy.status !== "blocked-pending-metadata" && metadataErrors.length === 0 && hasRelationTemplate(concept.relation) && !!concept.object.trim();
  const candidates = pool.filter((candidate) => candidate.id !== concept.id &&
    normalizeSemanticText(candidate.object) !== normalizeSemanticText(concept.object));
  const decisions = new Map(candidates.map((c) => [c, context.evaluate(concept, c)]));
  const accepted = context.acceptedAnswers(concept);
  const displayIsAccepted = (candidate: Concept) => accepted.some((answer) => answer.forms.some((text) => {
    const display = normalizeSemanticText(candidate.object), form = normalizeSemanticText(text);
    return answer.caseSensitive ? display === form : display.toLowerCase() === form.toLowerCase();
  }));
  const displays = new Map<string, Concept[]>();
  for (const c of candidates) {
    const key = normalizeSemanticText(c.object);
    const group = displays.get(key) ?? []; group.push(c); displays.set(key, group);
  }
  const allowed = candidates.filter((c) => {
    const verdict = decisions.get(c)!.verdict;
    return verdict === "invalid" && !displayIsAccepted(c) &&
      displays.get(normalizeSemanticText(c.object))!.every((other) =>
        context.claim(other).answer.identity === context.claim(c).answer.identity || decisions.get(other)!.verdict === "invalid");
  });
  // Filtering and deduplication precede sampling within each preferred bucket.
  const buckets = [
    allowed.filter((c) => !!concept.distractorGroup && c.distractorGroup === concept.distractorGroup),
    allowed.filter((c) => c.relation === concept.relation), allowed,
  ].map((bucket) => uniqueCandidates(bucket, context));
  const optionCandidates = buckets.find((bucket) => bucket.length >= Math.max(1, optionCount - 1)) ?? buckets[2];
  const falseCandidates = uniqueCandidates(allowed, context);
  const hasOptions = Number.isInteger(optionCount) && optionCount >= 3 && optionCandidates.length >= optionCount - 1;
  const acceptedValues = context.acceptedAnswers(concept);
  const acceptedForms = acceptedValues.flatMap((a) => a.forms);
  const typedConstrained = policy.semanticStrategy === "reviewed-evidence" ? typedResponseIsSafe(claim, context) : (concept.answerKind !== "long" && claim.metadata.exclusive === true) ||
    (claim.metadata.acceptedAnswerSetComplete === true && !!concept.semantic?.acceptedAnswers?.length);
  const enabledReason = policy.status === "blocked-pending-metadata" ? "Relation blocked pending semantic metadata/content review"
    : metadataErrors.join("; ") || (!hasRelationTemplate(concept.relation) ? "Missing relation template" : "Empty answer");
  const availability = (permitted: boolean, safe: boolean, failure: string, type: Exercise["type"]) => {
    const presentation = planAssessmentStimulus(concept, context, type);
    return capability(enabled && permitted && safe && presentation.available,
      !enabled ? enabledReason : !permitted ? "Form disallowed by relation policy" : !safe ? failure : presentation.reason);
  };
  return Object.freeze({
    semanticContext: context, claimIdentity: `${claim.key}:${claim.answer.identity}`,
    forms: Object.freeze({
      mcq: availability(policy.allowedExerciseTypes.includes("mcq"), hasOptions, "Insufficient compatible negative options", "mcq"),
      true: availability(policy.allowedExerciseTypes.includes("true_false"), true, "Stored positive assertion", "true_false"),
      false: availability(policy.allowedExerciseTypes.includes("true_false"), falseCandidates.length > 0, "No certified false assertion", "true_false"),
      blank_options: availability(policy.allowedExerciseTypes.includes("fill_blank") && policy.allowOptionsBlank, hasOptions, "Insufficient compatible negative options", "fill_blank"),
      blank_typed: availability(policy.allowedExerciseTypes.includes("fill_blank") && policy.allowTypedBlank, typedConstrained, "Typed recall requires an explicitly complete constrained answer set", "fill_blank"),
      matching: availability(policy.allowMatching, true, "Matching additionally requires a compatible four-pair group", "matching"),
    }),
    optionCandidates: Object.freeze(optionCandidates), falseCandidates: Object.freeze(falseCandidates),
    acceptedAnswers: Object.freeze(concept.assessment?.response ? concept.assessment.response.forms.map(f => f.text) : [...new Set(acceptedForms)]),
    acceptedAnswerForms: Object.freeze(concept.assessment?.response?.forms ?? acceptedValues.flatMap((a) => a.forms.map((text) => Object.freeze({ text, caseSensitive: a.caseSensitive })))),
  });
}

// True is observable as a capability, but assessed TF is only available when
// both truth values are feasible for this same concept. This prevents a relation
// family from becoming an always-True shortcut, even in a mixed quiz.
export function assessableForms(capabilities: ExerciseCapabilities): AssessmentForm[] {
  return (["mcq", "true", "false", "blank_options", "blank_typed"] as const).filter((form) =>
    capabilities.forms[form].available && ((form !== "true" && form !== "false") ||
      (capabilities.forms.true.available && capabilities.forms.false.available)));
}
export function generateExercise(
  concept: Concept, capabilities: ExerciseCapabilities, form: AssessmentForm,
  context: SemanticContext, seed: string, optionCount = 3
): GenerationResult {
  const current = context.claim(concept);
  if (capabilities.semanticContext !== context || capabilities.claimIdentity !== `${current.key}:${current.answer.identity}`) {
    return { status: "unavailable", conceptId: concept.id, reason: "Capabilities belong to another semantic snapshot or claim" };
  }
  if (!assessableForms(capabilities).includes(form)) {
    return { status: "unavailable", conceptId: concept.id, reason: capabilities.forms[form].reason || "Form is not safely assessable" };
  }
  const template = getAssessmentTemplate(concept);
  const type = form === "true" || form === "false" ? "true_false" : form === "mcq" ? "mcq" : "fill_blank";
  const presentation = planAssessmentStimulus(concept, context, type);
  if (!presentation.available) return { status: "unavailable", reason: presentation.reason, conceptId: concept.id };
  const base = { conceptId: concept.id, answerText: concept.object, direction: concept.assessment?.direction ?? "forward" as const,
    factId: concept.assessment?.factId ?? concept.id, ...(presentation.stimulus ? { stimulus: presentation.stimulus } : {}) };
  if (form === "true" || form === "false") {
    const substitute = form === "false" ? seededShuffle(capabilities.falseCandidates, `${seed}:false`)[0] : undefined;
    if (substitute && context.evaluate(concept, substitute).verdict !== "invalid") {
      return { status: "unavailable", conceptId: concept.id, reason: "False assertion lost semantic certification" };
    }
    return { status: "generated", form, exercise: { ...base, type: "true_false", correctAnswer: form === "true",
      statement: template.statement(concept.subject, substitute?.object ?? concept.object, concept.context) } };
  }
  const picked = seededShuffle(capabilities.optionCandidates, `${seed}:negatives`).slice(0, optionCount - 1);
  if ((form === "mcq" || form === "blank_options") && (picked.length !== optionCount - 1 ||
      picked.some((c) => context.evaluate(concept, c).verdict !== "invalid"))) {
    return { status: "unavailable", conceptId: concept.id, reason: "Options lost semantic certification" };
  }
  const distractors = picked.map((c) => c.object);
  const options = seededShuffle([concept.object, ...distractors], `${seed}:options`);
  const correctIndex = options.indexOf(concept.object);
  if (form === "mcq") return { status: "generated", form, exercise: { ...base, type: "mcq",
    prompt: template.question(concept.subject, concept.context), options, correctIndex } };
  const allowedInputModes = [
    ...(capabilities.forms.blank_typed.available ? ["input" as const] : []),
    ...(capabilities.forms.blank_options.available ? ["options" as const] : []),
  ];
  return { status: "generated", form, exercise: { ...base, type: "fill_blank",
    prompt: template.blank(concept.subject, concept.context), allowedInputModes,
    acceptedAnswers: capabilities.acceptedAnswers, acceptedAnswerForms: capabilities.acceptedAnswerForms, caseSensitive: context.claim(concept).answer.caseSensitive,
    ...(capabilities.forms.blank_options.available ? { options, correctIndex } : {}),
  } };
}

// Compatibility adapter for callers requesting a single exercise. New callers
// should consume GenerationResult. An omitted context intentionally means the
// supplied pool is an isolated snapshot; production passes its registered context.
export function buildExercise(
  concept: Concept, allConcepts: Concept[], optionCount = 4,
  preferredType?: Exercise["type"], context = createSemanticContext(allConcepts)
): Exercise | null {
  if (!concept || preferredType === "matching") return null;
  const capabilities = getExerciseCapabilities(concept, allConcepts, context, optionCount);
  const forms = assessableForms(capabilities);
  const seed = `${concept.id}:${concept.subject}:${concept.object}:${concept.relation}:${preferredType}`;
  const preferred = preferredType === "mcq" ? "mcq" : preferredType === "fill_blank"
    ? capabilities.forms.blank_options.available ? "blank_options" : "blank_typed"
    : hashString(seed) % 2 ? "false" : "true";
  const form = preferredType ? (forms.includes(preferred) ? preferred : undefined) : seededShuffle(forms, seed)[0];
  if (!form) return null;
  const result = generateExercise(concept, capabilities, form, context, seed, optionCount);
  return result.status === "generated" ? result.exercise : null;
}

export { isMatchingPairCorrect } from "./answerValidation";

export type SearchBudget = { examined: number; limit: number; exhausted: boolean };
export function spendSearchNode(budget: SearchBudget): boolean {
  if (budget.examined >= budget.limit) { budget.exhausted = true; return false; }
  budget.examined++;
  return true;
}
// Lazy enumeration lets the joint planner try another clique when the first
// valid matching group would starve ordinary quotas. The caller owns the bound.
export function* matchingCandidates(
  concepts: readonly Concept[], seed: string, context: SemanticContext,
  budget: SearchBudget
): Generator<{ concepts: readonly Concept[]; exercise: MatchingExercise }> {
  const groups = new Map<string, Concept[]>();
  for (const concept of concepts) {
    const policy = getRelationPolicy(concept.relation, context.policies);
    if (!planAssessmentStimulus(concept, context, "matching").available) continue;
    if (policy.status === "blocked-pending-metadata" || !policy.allowMatching || !hasRelationTemplate(concept.relation) ||
        !context.strategies[policy.semanticStrategy] || context.strategies[policy.semanticStrategy].validateMetadata(context.claim(concept), context).length) continue;
    const group = groups.get(concept.relation) ?? [];
    if (!group.some((c) => c.id === concept.id)) group.push(concept);
    groups.set(concept.relation, group);
  }
  for (const group of seededShuffle([...groups.values()], `${seed}:matching-groups`)) {
    const ordered = seededShuffle(group, `${seed}:matching-select`);
    const selected: Concept[] = [];
    const compatibility = new Map<string, boolean>();
    const compatible = (a: Concept, b: Concept) => {
      const key = JSON.stringify([a.id, b.id]);
      if (compatibility.has(key)) return compatibility.get(key)!;
      const aa = context.claim(a).answer, bb = context.claim(b).answer;
      const first = planAssessmentStimulus(a, context, "matching").stimulus;
      const second = planAssessmentStimulus(b, context, "matching").stimulus;
      const firstText = first?.kind === "text" ? first.text : first?.fallbackText;
      const secondText = second?.kind === "text" ? second.text : second?.fallbackText;
      const indistinguishable = (firstText && secondText && normalizeSemanticText(firstText) === normalizeSemanticText(secondText)) || first && second && ((first.kind === "text" && second.kind === "text" && normalizeSemanticText(first.text) === normalizeSemanticText(second.text)) ||
        (first.kind === "image" && second.kind === "image" && (first.image.imageId === second.image.imageId || first.image.uri === second.image.uri)));
      const result = !indistinguishable && context.claim(a).subjectIdentity !== context.claim(b).subjectIdentity &&
        normalizeSemanticText(a.subject) !== normalizeSemanticText(b.subject) && (normalizeSemanticText(aa.text) !== normalizeSemanticText(bb.text) && ((aa.caseSensitive && bb.caseSensitive) || normalizeSemanticText(aa.text).toLowerCase() !== normalizeSemanticText(bb.text).toLowerCase())) && !equivalentAnswers(aa, bb) &&
        context.evaluate(a, b).verdict !== "unknown" && context.evaluate(b, a).verdict !== "unknown";
      compatibility.set(key, result);
      return result;
    };
    function* search(start: number): Generator<{ concepts: readonly Concept[]; exercise: MatchingExercise }> {
      if (!spendSearchNode(budget)) return;
      if (selected.length === 4) {
        if (!selected.some((left) => selected.some((right) => context.evaluate(left, right).verdict === "invalid"))) return;
        const matrix = selected.map(left => selected.map(right => context.evaluate(left, right).verdict === "valid"));
        if (!isPermanentlyLockable(matrix)) return;
        const pairs = selected.map((concept) => ({
          // The same scoped question must govern matching and ordinary forms.
          // A bare title loses role/event qualifiers (e.g. completion vs creation).
          id: concept.id, left: getAssessmentTemplate(concept).question(concept.subject), right: concept.object,
          stimulus: planAssessmentStimulus(concept, context, "matching").stimulus,
          answerIdentity: context.claim(concept).answer.identity, caseSensitive: context.claim(concept).answer.caseSensitive,
          acceptedAnswerIdentities: [...new Set(selected.filter((candidate) => context.evaluate(concept, candidate).verdict === "valid")
            .map((candidate) => context.claim(candidate).answer.identity))],
        }));
        yield { concepts: [...selected], exercise: { type: "matching", direction: selected[0].assessment?.direction ?? "forward", prompt: "Match the pairs", pairs } };
        return;
      }
      for (let i = start; i <= ordered.length - (4 - selected.length); i++) {
        if (budget.exhausted) return;
        if (!selected.every((prior) => compatible(prior, ordered[i]))) continue;
        selected.push(ordered[i]);
        yield* search(i + 1);
        selected.pop();
      }
    }
    yield* search(0);
    if (budget.exhausted) return;
  }
}
export function generateMatchingExercise(concepts: readonly Concept[], seed: string, context: SemanticContext): GenerationResult<MatchingExercise> {
  const budget = { examined: 0, limit: 10000, exhausted: false };
  for (const candidate of matchingCandidates(concepts, seed, context, budget)) {
    return { status: "generated", form: "matching", exercise: candidate.exercise };
  }
  return { status: "unavailable", reason: budget.exhausted ? "Matching search limit reached; feasibility undetermined" : "No safe four-pair matching group in selected curriculum facts" };
}
export function buildMatchingExercise(concepts: Concept[], seed: string, context = createSemanticContext(concepts)): MatchingExercise | null {
  const result = generateMatchingExercise(concepts, seed, context);
  return result.status === "generated" ? result.exercise : null;
}
