// src/quizEngine/loadConcepts.ts

import { CONCEPT_SETS } from "../../data/conceptSets";
import type { Concept } from "./conceptTypes";

export function loadConceptsByKey(key: string): Concept[] {
  return CONCEPT_SETS[key]?.concepts ?? [];
}