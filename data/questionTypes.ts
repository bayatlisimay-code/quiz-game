// data/questionTypes.ts

export type QuestionSet = {
  id: string;
  questions: Question[];
};

export type Question =
  | McqQuestion
  | TrueFalseQuestion
  | FillBlankQuestion
  | MatchingQuestion;

export type BaseQuestion = {
  id: string;
  prompt: string;
  explanation?: string;
};

export type McqQuestion = BaseQuestion & {
  type: "mcq";
  choices: string[];
  answer: string; // must match one of choices
};

export type TrueFalseQuestion = BaseQuestion & {
  type: "true_false";
  answer: boolean;
};

export type FillBlankQuestion = BaseQuestion & {
  type: "fill_blank";
  // The text the user should type.
  answer: string;
  // Optional: allow multiple accepted answers (case-insensitive checks can be added later)
  acceptedAnswers?: string[];
};

export type MatchingPair = {
  left: string;
  right: string;
};

export type MatchingQuestion = BaseQuestion & {
  type: "matching";
  pairs: MatchingPair[];
  // Optional: randomize UI later; data stays as pairs
};
