import concepts_art_painting_l1_p1_concepts from "./concepts/art/painting/l1/p1/concepts";
import concepts_art_painting_l1_p2_concepts from "./concepts/art/painting/l1/p2/concepts";
import concepts_art_painting_l1_p3_concepts from "./concepts/art/painting/l1/p3/concepts";
import concepts_art_painting_l1_p4_concepts from "./concepts/art/painting/l1/p4/concepts";
import concepts_art_painting_l1_p5_concepts from "./concepts/art/painting/l1/p5/concepts";

import concepts_art_painting_l2_p1_concepts from "./concepts/art/painting/l2/p1/concepts";
import concepts_art_painting_l2_p2_concepts from "./concepts/art/painting/l2/p2/concepts";
import concepts_art_painting_l2_p3_concepts from "./concepts/art/painting/l2/p3/concepts";
import concepts_art_painting_l2_p4_concepts from "./concepts/art/painting/l2/p4/concepts";
import concepts_art_painting_l2_p5_concepts from "./concepts/art/painting/l2/p5/concepts";

export const CONCEPT_SETS: Record<string, { id: string; concepts: any[] }> = {
  art_painting_l1_p1: concepts_art_painting_l1_p1_concepts,
  art_painting_l1_p2: concepts_art_painting_l1_p2_concepts,
  art_painting_l1_p3: concepts_art_painting_l1_p3_concepts,
  art_painting_l1_p4: concepts_art_painting_l1_p4_concepts,
  art_painting_l1_p5: concepts_art_painting_l1_p5_concepts,

  art_painting_l2_p1: concepts_art_painting_l2_p1_concepts,
  art_painting_l2_p2: concepts_art_painting_l2_p2_concepts,
  art_painting_l2_p3: concepts_art_painting_l2_p3_concepts,
  art_painting_l2_p4: concepts_art_painting_l2_p4_concepts,
  art_painting_l2_p5: concepts_art_painting_l2_p5_concepts,
};