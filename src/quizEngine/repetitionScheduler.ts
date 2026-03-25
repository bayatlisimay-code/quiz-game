import { Concept } from "./conceptTypes";
import { FactUsage } from "./factTracker";

type Variant = "A" | "B" | "C";

export function scheduleConcepts(
  concepts: Concept[],
  usage: FactUsage,
  variant: Variant,
  targetCount: number
): Concept[] {
  // Score concepts: lower score = higher priority to show
  const scored = concepts.map((c) => {
    const u = usage[c.id];

    let score = 0;

    // Prefer unseen concepts
    if (!u) {
      score = 0;
    } else {
      score = u.count;

      // Slight boost if not seen in this variant yet
      if (!u.variants.includes(variant)) {
        score -= 0.5;
      }
    }

    return { concept: c, score };
  });

  // Sort by priority
  scored.sort((a, b) => a.score - b.score);

  return scored.slice(0, targetCount).map((s) => s.concept);
}