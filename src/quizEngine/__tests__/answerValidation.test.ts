import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { gradeMatchingAssignment, isMatchingPairCorrect, isTypedAnswerCorrect } from "../answerValidation";

const pairs = [
  { left: "First work", right: "Same creator", answerIdentity: "creator:a", acceptedAnswerIdentities: ["creator:a"] },
  { left: "Second work", right: "Same creator", answerIdentity: "creator:a", acceptedAnswerIdentities: ["creator:a"] },
  { left: "Third work", right: "Other creator", answerIdentity: "creator:b", acceptedAnswerIdentities: ["creator:b"] },
  { left: "Fourth work", right: "Another creator", answerIdentity: "creator:c", acceptedAnswerIdentities: ["creator:c"] },
];
test("final grading accepts shuffled identical cards and requires a complete one-to-one assignment", () => {
  const lefts = [pairs[2], pairs[0], pairs[3], pairs[1]];
  const rights = [pairs[1], pairs[3], pairs[0], pairs[2]];
  expect(gradeMatchingAssignment(lefts, rights, { 0: 3, 1: 0, 2: 1, 3: 2 })).toBe(true);
  expect(gradeMatchingAssignment(lefts, rights, { 0: 3, 1: 2, 2: 1, 3: 0 })).toBe(true);
  expect(gradeMatchingAssignment(lefts, rights, { 0: 3, 1: 0, 2: 1, 3: 0 })).toBe(false);
  expect(gradeMatchingAssignment(lefts, rights, { 0: 3 })).toBe(false);
  expect(gradeMatchingAssignment(lefts, rights, { 0: 10, 1: 0, 2: 1, 3: 2 })).toBe(false);
});
test("old exercise payloads also grade indistinguishable cards by value", () => {
  expect(isMatchingPairCorrect({ left: "One", right: "Italian" }, { left: "Two", right: "Italian" })).toBe(true);
});
test("quiz presentation uses the shared grader for final scoring and identity checks for immediate feedback", () => {
  const screen = readFileSync(resolve(__dirname, "../../../app/topic/[topicId]/subtopic/[subtopicId]/level/[levelId]/[partId].tsx"), "utf8");
  expect(screen).toContain("ok = gradeMatchingAssignment(");
  expect(screen).toContain("attemptMatchingPair(previous,");
  expect(screen).not.toMatch(/pairIndex\s*===/);
  expect(screen).toContain('result.status === "ready" ? result.exercises : []');
  expect(screen).toContain('if (readyScope !== generationScope || loading || accessDenied || shortage || !q || !checked || exercises.length !== 8) return;');
  expect(screen).toContain('if (readyScope !== generationScope || loading || accessDenied || !q || shortage || exercises.length !== 8 || !canCheck) return;');
  expect(screen).toContain('allowedFillModes.includes("input")');
  expect(screen).toContain('allowedFillModes.includes("options")');
});

test("finite typed-answer contracts reject nearby dates and preserve symbol case and explicit aliases", () => {
  const base = { type: "fill_blank" as const, conceptId: "typed", prompt: "Value?", answerText: "1950s" };
  expect(isTypedAnswerCorrect({ ...base, acceptedAnswerForms: [{ text: "1950s", caseSensitive: false }] }, "1960s")).toBe(false);
  expect(isTypedAnswerCorrect({ ...base, acceptedAnswerForms: [{ text: "1950s", caseSensitive: false }] }, " 1950s ")).toBe(true);
  const symbol = { ...base, answerText: "Co", acceptedAnswerForms: [{ text: "Co", caseSensitive: true }, { text: "Cobalt", caseSensitive: false }] };
  expect(isTypedAnswerCorrect(symbol, "CO")).toBe(false);
  expect(isTypedAnswerCorrect(symbol, "Co")).toBe(true);
  expect(isTypedAnswerCorrect(symbol, "cobalt")).toBe(true);
  expect(isTypedAnswerCorrect({ ...base, answerText: "Cervantes" }, "Cervante")).toBe(false);
});
