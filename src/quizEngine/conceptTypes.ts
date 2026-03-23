// src/quizEngine/conceptTypes.ts

export type Difficulty = 1 | 2 | 3 | 4 | 5;

export type AnswerKind = "short" | "long";

export type RelationType = string;

export type Concept = {
  id: string;

  // Your existing structure alignment
  topicId: string;
  subtopicId: string;
  levelId: string; // e.g. "l1"
  partId: string;  // e.g. "p1"

  // What type of relationship this is
  relation: RelationType;

  // Left side and right side of the fact
  subject: string;
  object: string;

  // Is the answer short (Paris, 1789) or long (definition text)?
  answerKind: AnswerKind;

  // Used for generating good distractors
  distractorGroup?: string;

  difficulty: Difficulty;
  tags?: string[];

  // Optional extra context (e.g. "at sea level")
  context?: string;

    // Which quiz variant introduces this concept
  introducedIn?: "A" | "B" | "C";
};

export type ExerciseType = "mcq" | "true_false" | "fill_blank";