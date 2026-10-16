import type { AssessmentContract, AssessmentStimulus, EntityType, TemporalValue } from "./assessmentTypes";
export type SemanticIdentity = {
  readonly id?: string;
  readonly kind?: "entity" | "text" | "symbol" | "number" | "date";
  readonly aliases?: readonly string[];
  readonly caseSensitive?: boolean;
  readonly entityType?: EntityType;
  readonly temporal?: TemporalValue;
};
export type QualifierValue = string | number | boolean | null | readonly QualifierValue[] | { readonly [key: string]: QualifierValue };
export type AcceptedAnswer = SemanticIdentity & { readonly text: string };
export type SemanticMetadata = {
  readonly subject?: SemanticIdentity;
  readonly value?: SemanticIdentity;
  readonly predicateId?: string;
  readonly qualifiers?: Readonly<Record<string, QualifierValue>>;
  readonly acceptedAnswers?: readonly AcceptedAnswer[];
  readonly strategyMetadata?: Readonly<Record<string, unknown>>;
};

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

  // Challenge difficulty is unknown for explicitly identified legacy rank data.
  difficulty?: Difficulty;
  legacyCurriculumRank?: number;
  tags?: string[];

  // Optional extra context (e.g. "at sea level")
  context?: string;

    // Which quiz variant introduces this concept
  introducedIn?: "A" | "B" | "C";
  learning?: Readonly<{ reinforcementPriority: number; rationale: string }>;

  entity?: string;
  factType?: string;

  // Optional semantic identity; curriculum fields never define claim identity.
  semantic?: SemanticMetadata;
  assessment?: AssessmentContract;
};

export type ExerciseType = "mcq" | "true_false" | "fill_blank";

export type MatchingPair = {
  id?: string;
  answerIdentity?: string;
  caseSensitive?: boolean;
  acceptedAnswerIdentities?: readonly string[];
  stimulus?: AssessmentStimulus;
  left: string;
  right: string;
};

export type MatchingExercise = {
  direction?: "forward" | "reverse";
  type: "matching";
  pairs: MatchingPair[];
  prompt: string;
};

  export type McqExercise = {
    type: "mcq";
    stimulus?: AssessmentStimulus;
    direction?: "forward" | "reverse";
    factId?: string;
    conceptId: string;
    prompt: string;
    options: string[];
    correctIndex: number;
    answerText: string;
  };
  
  export type TrueFalseExercise = {
    type: "true_false";
    stimulus?: AssessmentStimulus;
    direction?: "forward" | "reverse";
    factId?: string;
    conceptId: string;
    statement: string;
    correctStatement?: string;
    correctAnswer: boolean;
    answerText: string;
  };
  
  export type FillBlankExercise = {
    type: "fill_blank";
    stimulus?: AssessmentStimulus;
    direction?: "forward" | "reverse";
    factId?: string;
    conceptId: string;
    prompt: string;
    answerText: string;
    allowedInputModes?: readonly ("input" | "options")[];
    acceptedAnswers?: readonly string[];
    acceptedAnswerForms?: readonly { readonly text: string; readonly caseSensitive: boolean }[];
    caseSensitive?: boolean;
    options?: string[];
    correctIndex?: number;
  };

  export type Exercise =
  | McqExercise
  | TrueFalseExercise
  | FillBlankExercise
  | MatchingExercise;
