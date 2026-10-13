import type { MatchingPair } from "./conceptTypes";
import { isMatchingPairCorrect } from "./answerValidation";

export type MatchingInteraction = Readonly<{
  locked: Readonly<Record<number, number>>;
  wrong?: Readonly<{ left: number; right: number }>;
}>;
export function attemptMatchingPair(state: MatchingInteraction, lefts: readonly MatchingPair[], rights: readonly MatchingPair[], left: number, right: number): MatchingInteraction {
  if (!Number.isInteger(left) || !Number.isInteger(right) || !lefts[left] || !rights[right] || state.wrong?.left === left || state.wrong?.right === right || state.locked[left] !== undefined || Object.values(state.locked).includes(right)) return state;
  if (isMatchingPairCorrect(lefts[left], rights[right])) return { ...state, locked: { ...state.locked, [left]: right } };
  return { ...state, wrong: { left, right } };
}
export function visibleMatchingPairs(state: MatchingInteraction): Record<number, number> {
  return { ...state.locked, ...(state.wrong ? { [state.wrong.left]: state.wrong.right } : {}) };
}
