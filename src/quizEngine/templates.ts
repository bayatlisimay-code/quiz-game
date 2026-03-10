// src/quizEngine/templates.ts

import type { Concept } from "./conceptTypes";

export type RenderedPrompt = {
  prompt: string;          // the question text
  answerText: string;      // the correct answer (shown or used for checking)
  sentence?: string;       // optional full sentence for True/False
};

// A tiny helper to avoid awkward double spaces when context is missing
function withContext(base: string, context?: string) {
  if (!context) return base;
  return `${base} (${context})`;
}

/**
 * Turns a Concept into a grammatically correct question prompt.
 * If a relation is unknown, it falls back safely.
 */
export function renderPrompt(concept: Concept): RenderedPrompt {
  const r = concept.relation;

  // ---- Known relations (add more here anytime) ----
  if (r === "capital_of") {
    return {
      prompt: `What is the capital of ${concept.subject}?`,
      answerText: concept.object,
      sentence: `${concept.object} is the capital of ${concept.subject}.`,
    };
  }

  if (r === "year_started") {
    return {
      prompt: `In what year did ${concept.subject} begin?`,
      answerText: concept.object,
      sentence: `${concept.subject} began in ${concept.object}.`,
    };
  }

  if (r === "year_ended") {
    return {
      prompt: `In what year did ${concept.subject} end?`,
      answerText: concept.object,
      sentence: `${concept.subject} ended in ${concept.object}.`,
    };
  }

  if (r === "inventor_of") {
    return {
      prompt: `Who invented ${concept.subject}?`,
      answerText: concept.object,
      sentence: `${concept.object} invented ${concept.subject}.`,
    };
  }

  if (r === "discovered_by") {
    return {
      prompt: `Who discovered ${concept.subject}?`,
      answerText: concept.object,
      sentence: `${concept.subject} was discovered by ${concept.object}.`,
    };
  }

  if (r === "located_in") {
    return {
      prompt: `Where is ${concept.subject} located?`,
      answerText: concept.object,
      sentence: `${concept.subject} is located in ${concept.object}.`,
    };
  }

  if (r === "authored_by") {
    return {
      prompt: `Who wrote ${concept.subject}?`,
      answerText: concept.object,
      sentence: `${concept.subject} was written by ${concept.object}.`,
    };
  }

  if (r === "painted_by") {
    return {
      prompt: `Who painted ${concept.subject}?`,
      answerText: concept.object,
      sentence: `${concept.subject} was painted by ${concept.object}.`,
    };
  }

  if (r === "boiling_point_c") {
    const base = `At what temperature does ${concept.subject} boil?`;
    return {
      prompt: withContext(base, concept.context ?? "at sea level"),
      answerText: `${concept.object}°C`,
      sentence: `${concept.subject} boils at ${concept.object}°C.`,
    };
  }

  if (r === "melting_point_c") {
    const base = `At what temperature does ${concept.subject} melt?`;
    return {
      prompt: withContext(base, concept.context ?? "at sea level"),
      answerText: `${concept.object}°C`,
      sentence: `${concept.subject} melts at ${concept.object}°C.`,
    };
  }

  if (r === "definition_of") {
    // For long answers, we usually use MCQ or Matching.
    return {
      prompt: `Which description best matches "${concept.subject}"?`,
      answerText: concept.object,
      sentence: `"${concept.subject}" can be described as: ${concept.object}`,
    };
  }

  // ---- Safe fallback (unknown relations won't crash) ----
  return {
    prompt: `What is the correct answer for: ${concept.subject}?`,
    answerText: concept.object,
    sentence: `${concept.subject} → ${concept.object}`,
  };
}