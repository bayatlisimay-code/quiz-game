import type { Concept, Exercise } from "./conceptTypes";
import type { SemanticClaim, SemanticContext } from "./semanticValidation";

/** Common to every semantic strategy: declaring a short label cannot bypass
 * review by selecting another relation family or legacy policy. */
export function presentationProblems(claim: SemanticClaim, context: SemanticContext): string[] {
  const a = claim.assessment;
  if (!a?.presentation) return [];
  const errors: string[] = [];
  for (const wording of [a.presentation.answer, a.presentation.scope]) if (wording) {
    if (wording.reviewStatus !== "verified" || !wording.text.trim() || !wording.reviewedBy.trim() ||
        !Number.isFinite(Date.parse(wording.reviewedAt)) || !wording.rationale.trim() || !wording.evidenceIds.length ||
        wording.evidenceIds.some(id => !a.evidenceIds.includes(id) || context.evidenceForId(id)?.reviewStatus !== "verified")) errors.push("Short wording requires reviewed equivalence and the claim's positive evidence");
  }
  const answer = a.presentation.answer;
  if (answer && (answer.canonicalText !== claim.answer.text || answer.valueId !== claim.answer.stableId ||
      (answer.matchingText !== undefined && !answer.matchingText.trim()))) errors.push("Short answer wording must retain its exact canonical answer and value identity");
  if (a.presentation.scope && a.presentation.scope.canonicalText !== a.scope?.text) errors.push("Short scope wording must retain its exact authored qualification");
  return errors;
}

/** Explicit reviewed editorial forms only. No truncation or runtime summary.
 * Reverse views use another value identity, so forward wording cannot leak into
 * their answers. Typed grading remains the separately declared response set. */
export function getAnswerLabel(concept: Concept, form: "ordinary" | "matching" = "ordinary"): string {
  const wording = concept.assessment?.presentation?.answer;
  if (!wording || wording.reviewStatus !== "verified" || wording.canonicalText !== concept.object ||
      wording.valueId !== concept.semantic?.value?.id) return concept.object;
  return form === "matching" ? wording.matchingText ?? wording.text : wording.text;
}

export type TextLengthDiagnostic = Readonly<{ field: string; words: number; target: number; text: string }>;
export function wordCount(text: string): number {
  return text.trim().split(/\s+/u).filter(word => /[\p{L}\p{N}]/u.test(word)).length;
}
/** Editorial warnings, never eligibility limits. Retain essential long text. */
export function learnerTextDiagnostics(exercise: Exercise): TextLengthDiagnostic[] {
  const fields: { field: string; text: string; target: number }[] = exercise.type === "matching"
    ? exercise.pairs.flatMap((pair, i) => [{ field: `pairs[${i}].left`, text: pair.left, target: 8 }, { field: `pairs[${i}].right`, text: pair.right, target: 8 }])
    : exercise.type === "true_false" ? [{ field: "statement", text: exercise.statement, target: 20 }]
    : [{ field: "prompt", text: exercise.prompt, target: 18 }, ...(exercise.options ?? []).map((text, i) => ({ field: `options[${i}]`, text, target: 15 }))];
  if (exercise.type !== "matching" && exercise.stimulus) {
    const text = exercise.stimulus.kind === "text" ? exercise.stimulus.text : exercise.stimulus.fallbackText;
    if (text) fields.push({ field: "stimulus", text, target: 18 });
  }
  return fields.map(field => ({ ...field, words: wordCount(field.text) })).filter(field => field.words > field.target);
}
