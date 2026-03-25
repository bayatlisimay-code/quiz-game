// src/quizEngine/exerciseFactory.ts

import type {
  Concept,
  Exercise,
  ExerciseType,
  MatchingExercise
} from "./conceptTypes";
import { enrichConcepts } from "./enrichConcepts";
import { createFactTracker } from "./factTracker";
import { renderPrompt } from "./templates";

function hashString(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function seededShuffle<T>(array: T[], seed: string): T[] {
  const result = [...array];
  let h = hashString(seed);

  for (let i = result.length - 1; i > 0; i--) {
    h = Math.imul(h ^ (h >>> 15), 1 | h);
    const j = h % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

export function buildMatchingExercise(
  concepts: any[], // we will type later
  seed: string
): MatchingExercise | null {
  if (concepts.length < 4) return null;

  // group by relation (same type only)
  const byRelation: Record<string, any[]> = {};

  for (const c of concepts) {
    if (!byRelation[c.relation]) {
      byRelation[c.relation] = [];
    }
    byRelation[c.relation].push(c);
  }

  // pick a relation that has at least 4 items
  const validGroups = Object.values(byRelation).filter((g) => g.length >= 4);

  if (validGroups.length === 0) return null;

  const group = seededShuffle(validGroups, `${seed}_matching_group`)[0];

  // pick 4 concepts from that group
  const selected = seededShuffle(group, `${seed}_matching_select`).slice(0, 4);

  const validSelected = selected.filter(Boolean);

  const pairs = validSelected.map((c) => ({
    left: c.subject,
    right: c.object,
  }));

  return {
    type: "matching",
    prompt: "Match the pairs",
    pairs,
  };
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a;
}

function pickN<T>(arr: T[], n: number): T[] {
  if (arr.length <= n) return [...arr];
  return shuffle(arr).slice(0, n);
}

function sameBucket(a: Concept, b: Concept): boolean {
  // Prefer distractorGroup if present; otherwise fall back to relation
  if (a.distractorGroup && b.distractorGroup) {
    return a.distractorGroup === b.distractorGroup;
  }
  return a.relation === b.relation;
}

function getAnswerText(c: Concept): string {
  return renderPrompt(c).answerText.trim();
}

function chooseType(concept: Concept): ExerciseType {
  // For long answers (definitions), keep it simple and high-quality for now:
  // only MCQ. (No matching, no fill.)
  if (concept.answerKind === "long") return "mcq";

  // For short answers, we can rotate between types.
  const choices: ExerciseType[] = ["mcq", "true_false", "fill_blank"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function buildMcq(concept: Concept, pool: Concept[], optionCount: number): Exercise {
  const rendered = renderPrompt(concept);
  const correct = rendered.answerText.trim();

  // Gather candidate distractors from similar concepts
  const candidates = pool
    .filter((c) => c.id !== concept.id)
    .filter((c) => sameBucket(concept, c))
    .map((c) => getAnswerText(c))
    .filter((t) => t && t !== correct);

  // De-dupe
  const uniqueCandidates = Array.from(new Set(candidates));

  const distractors = pickN(uniqueCandidates, Math.max(0, optionCount - 1));
  const optionsUnshuffled = [correct, ...distractors];

  // If we couldn't find enough distractors, we still proceed with fewer options
  const options = shuffle(optionsUnshuffled);
  const correctIndex = options.indexOf(correct);

  const tracker = createFactTracker();

  // TEMP: assume variant A for now (we will fix later)
  const variant = "A";

  return {
    type: "mcq",
    conceptId: concept.id,
    prompt: rendered.prompt,
    options,
    correctIndex,
    answerText: correct,
  };
}

function buildTrueFalse(concept: Concept, pool: Concept[]): Exercise {
  const rendered = renderPrompt(concept);

  // If we don't have a good sentence, fall back to MCQ-style prompt statement
  const trueStatement = (rendered.sentence ?? `${rendered.prompt} ${rendered.answerText}`).trim();

  // 50/50 whether we show a true or false statement
  const makeTrue = Math.random() < 0.5


  if (makeTrue) {
    return {
      type: "true_false",
      conceptId: concept.id,
      statement: trueStatement,
      correctAnswer: true,
      answerText: rendered.answerText.trim(),
    };
  }

  // Make a false statement by swapping the answer with a distractor answerText
  const correct = rendered.answerText.trim();

  const falseCandidates = pool
    .filter((c) => c.id !== concept.id)
    .filter((c) => sameBucket(concept, c))
    .map((c) => getAnswerText(c))
    .filter((t) => t && t !== correct);

  const uniqueFalse = Array.from(new Set(falseCandidates));
  const wrong = uniqueFalse.length > 0 ? uniqueFalse[Math.floor(Math.random() * uniqueFalse.length)] : correct;

  // If we couldn't find a wrong answer, we still return a "true" statement to avoid nonsense
  if (wrong === correct) {
    return {
      type: "true_false",
      conceptId: concept.id,
      statement: trueStatement,
      correctAnswer: true,
      answerText: correct,
    };
  }

  const falseStatement = trueStatement.replace(correct, wrong);

  return {
    type: "true_false",
    conceptId: concept.id,
    statement: falseStatement,
    correctAnswer: false,
    answerText: correct,
  };
}

function buildFillBlank(concept: Concept): Exercise {
  const rendered = renderPrompt(concept);
  return {
    type: "fill_blank",
    conceptId: concept.id,
    prompt: rendered.prompt,
    answerText: rendered.answerText.trim(),
  };
}

function pickFrom<T>(arr: T[], seed: number, count: number): T[] {
  const a = [...arr];
  let s = seed || 1;

  function next() {
    // xorshift32
    s ^= s << 13;
    s ^= s >>> 17;
    s ^= s << 5;
    return (s >>> 0) / 4294967296;
  }

  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(next() * (i + 1));
    const tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  
  return a.slice(0, Math.min(count, a.length));
}

export function buildExercise(
  concept: any,
  allConcepts: any[],
  optionCount = 4,
  preferredType?: Exercise["type"]
): Exercise {

  allConcepts = enrichConcepts(allConcepts);
  
  const seed = hashString(`${concept.id}:${concept.subject}:${concept.object}:${concept.relation}`);

  // We try MCQ first, but only if we can find enough distractors.
  const correct = String(concept.object);

  // 1) best distractors: same distractorGroup (if you have it)
  const sameGroup = allConcepts.filter(
    (c) => c.id !== concept.id && String(c.object) !== correct && c.distractorGroup === concept.distractorGroup
  );

  // 2) fallback distractors: same relation (keeps it relevant)
  const sameRelation = allConcepts.filter(
    (c) => c.id !== concept.id && String(c.object) !== correct && c.relation === concept.relation
  );

  // 3) last fallback: anything with a different object
  const anyPool = allConcepts.filter((c) => c.id !== concept.id && String(c.object) !== correct);

  const pool =
    sameGroup.length >= optionCount - 1
      ? sameGroup
      : sameRelation.length >= optionCount - 1
      ? sameRelation
      : anyPool;

  const distractors = pickFrom(pool, seed, optionCount - 1).map((c) => String(c.object));

  const canMakeMcq = distractors.length >= Math.min(optionCount - 1, 3); // need at least 3 distractors for a real MCQ

  // Deterministic mix: rotates type per concept so you see variety.
  const typePick = seed % 3; // 0,1,2

  // Helper: build MCQ
  const buildMcq = (): Exercise => {
    const options = pickFrom([correct, ...distractors], seed + 99, optionCount);
    const correctIndex = options.findIndex((o) => o === correct);
    return {
      type: "mcq",
      conceptId: String(concept.id),
      prompt: `Who ${String(concept.relation).replace(/_/g, " ")} ${String(concept.subject)}?`,
      options,
      correctIndex,
      answerText: correct,
    };
  };

  // Helper: build True/False
  const buildTf = (): Exercise => {
    const wrong = distractors[0] ?? (anyPool[0] ? String(anyPool[0].object) : "Unknown");
    const truth = (seed % 2) === 0;
    const shown = truth ? correct : wrong;
    return {
      type: "true_false",
      conceptId: String(concept.id),
      statement: `${String(concept.subject)} was ${String(concept.relation).replace(/_/g, " ")} by ${shown}.`,
      correctAnswer: truth,
      answerText: correct,
    };
  };

  // Helper: build Fill-in-the-blank (THIS WILL SHOW A BLANK)
  const buildBlank = (): Exercise => {
    return {
      type: "fill_blank",
      conceptId: String(concept.id),
      prompt: `${String(concept.subject)} was ${String(concept.relation).replace(/_/g, " ")} by _____.`,
      answerText: correct,
    };
  };

// If the caller requested a specific type, try to build it
if (preferredType === "mcq") {
  if (canMakeMcq) return buildMcq();
  // fallback if MCQ impossible
  return (seed % 2) === 0 ? buildTf() : buildBlank();
}

if (preferredType === "true_false") {
  return buildTf();
}

if (preferredType === "fill_blank") {
  return buildBlank();
}

// If no type preference is given (safety fallback)
if (canMakeMcq) {
  if (typePick === 0) return buildMcq();
  if (typePick === 1) return buildTf();
  return buildBlank();
}

return typePick % 2 === 0 ? buildTf() : buildBlank();
}