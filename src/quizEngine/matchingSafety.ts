import type { MatchingPair } from "./conceptTypes";

/** Immediate-lock matching: every accepted partial assignment must extend.
 * Four cards allow exhaustive verification (including asymmetric overlaps).
 * This never changes factual compatibility to make a puzzle solvable.
 */
export function isPermanentlyLockable(matrix: readonly (readonly boolean[])[]): boolean {
  const size = matrix.length;
  if (size !== 4 || matrix.some(row => row.length !== size)) return false;
  const seen = new Set<string>();
  function safe(leftMask: number, rightMask: number): boolean {
    if (leftMask === (1 << size) - 1) return true;
    const key = `${leftMask}:${rightMask}`;
    if (seen.has(key)) return true;
    let hasMove = false;
    for (let left = 0; left < size; left++) if (!(leftMask & (1 << left))) {
      let hasAnswer = false;
      for (let right = 0; right < size; right++) if (!(rightMask & (1 << right)) && matrix[left][right]) {
        hasMove = true; hasAnswer = true;
        if (!safe(leftMask | (1 << left), rightMask | (1 << right))) return false;
      }
      if (!hasAnswer) return false;
    }
    if (hasMove) seen.add(key);
    return hasMove;
  }
  return safe(0, 0);
}

export function hasIndistinguishableAnswers(pairs: readonly MatchingPair[]): boolean {
  const normalize = (text: string) => text.normalize("NFC").trim().replace(/\s+/g, " ");
  return pairs.some((a, i) => pairs.slice(i + 1).some(b => {
    const first = normalize(a.right), second = normalize(b.right);
    if (a.answerIdentity !== undefined && a.answerIdentity === b.answerIdentity) {
      const firstAccepted = new Set(a.acceptedAnswerIdentities ?? []), secondAccepted = new Set(b.acceptedAnswerIdentities ?? []);
      if (firstAccepted.size === secondAccepted.size && [...firstAccepted].every(identity => secondAccepted.has(identity))) return false;
    }
    return first === second || ((!a.caseSensitive || !b.caseSensitive) && first.toLowerCase() === second.toLowerCase());
  }));
}
