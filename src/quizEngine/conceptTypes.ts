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

  entity?: string;
  factType?: string;
};

export type ExerciseType = "mcq" | "true_false" | "fill_blank";

export type MatchingPair = {
  left: string;
  right: string;
};

export type MatchingExercise = {
  type: "matching";
  pairs: MatchingPair[];
  prompt: string;
};

  export type McqExercise = {
    type: "mcq";
    conceptId: string;
    prompt: string;
    options: string[];
    correctIndex: number;
    answerText: string;
  };
  
  export type TrueFalseExercise = {
    type: "true_false";
    conceptId: string;
    statement: string;
    correctAnswer: boolean;
    answerText: string;
  };
  
  export type FillBlankExercise = {
    type: "fill_blank";
    conceptId: string;
    prompt: string;
    answerText: string;
  };

  export type Exercise =
  | McqExercise
  | TrueFalseExercise
  | FillBlankExercise
  | MatchingExercise;