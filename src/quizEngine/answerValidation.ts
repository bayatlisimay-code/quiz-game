import type { FillBlankExercise, MatchingPair } from "./conceptTypes";
import { normalizeSemanticText } from "./semanticValidation";

export function isMatchingPairCorrect(left: MatchingPair, right: MatchingPair): boolean {
  if (left.acceptedAnswerIdentities) return !!right.answerIdentity && left.acceptedAnswerIdentities.includes(right.answerIdentity);
  if (left.answerIdentity || right.answerIdentity) return !!left.answerIdentity && left.answerIdentity === right.answerIdentity;
  // Backwards-compatible exercises without identity metadata still accept
  // indistinguishable display cards, never their original positional index.
  return normalizeSemanticText(left.right) === normalizeSemanticText(right.right);
}
export function gradeMatchingAssignment(
  lefts: readonly MatchingPair[], rights: readonly MatchingPair[], assignment: Readonly<Record<number, number>>
): boolean {
  if (lefts.length !== rights.length || Object.keys(assignment).length !== lefts.length) return false;
  const used = new Set<number>();
  return lefts.every((left, index) => {
    const rightIndex = assignment[index];
    if (!Number.isInteger(rightIndex) || rightIndex < 0 || rightIndex >= rights.length || used.has(rightIndex)) return false;
    used.add(rightIndex);
    return isMatchingPairCorrect(left, rights[rightIndex]);
  });
}


export function isTypedAnswerCorrect(exercise: FillBlankExercise, input: string): boolean {
  if (exercise.allowedInputModes && !exercise.allowedInputModes.includes("input")) return false;
  if (exercise.acceptedAnswerForms) {
    // New finite accepted-set contract. Edit distance cannot distinguish e.g.
    // 1950s from 1960s, or Co from CO, so it must not authorize new answers.
    return exercise.acceptedAnswerForms.some(({ text, caseSensitive }) => {
      const normalize = (value: string) => caseSensitive ? normalizeSemanticText(value) : normalizeSemanticText(value).toLowerCase();
      return normalize(input) === normalize(text);
    });
  }
  // Compatibility for previously generated payloads only.
  const normalize = (text: string) => text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
  const user = normalize(input);
  return (exercise.acceptedAnswers ?? exercise.answerText.split("|")).some((text) => {
    if (exercise.caseSensitive) return normalizeSemanticText(input) === normalizeSemanticText(text);
    const answer = normalize(text);
    return !!user && user === answer;
  });
}
