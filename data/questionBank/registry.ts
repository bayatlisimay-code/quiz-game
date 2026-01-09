export type MCQQuestion = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
};

import artPaintingL1 from "./sets/art/painting/l1.json";
import sciAstronomyL1 from "./sets/science/astronomy/l1.json";
import sciPhysicsL1 from "./sets/science/physics/l1.json";
import sciPhysicsL2 from "./sets/science/physics/l2.json";
import sciPhysicsL3 from "./sets/science/physics/l3.json";

export const QUESTION_SETS: Record<string, MCQQuestion[]> = {
  art_painting_l1: artPaintingL1 as MCQQuestion[],
  science_astronomy_l1: sciAstronomyL1 as MCQQuestion[],
  science_physics_l1: sciPhysicsL1 as MCQQuestion[],
  science_physics_l2: sciPhysicsL2 as MCQQuestion[],
  science_physics_l3: sciPhysicsL3 as MCQQuestion[],
};

export function getQuestionSetOrEmpty(setId: string): MCQQuestion[] {
  return QUESTION_SETS[setId] ?? [];
}
