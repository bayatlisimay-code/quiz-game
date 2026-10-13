import type { Concept } from "./conceptTypes";

export type CurriculumScope = { topicId: string; subtopicId: string; levelId: string; partId: string };
export type ConceptSets = Readonly<Record<string, { concepts: readonly Concept[] }>>;
// One shared dependency configuration for the route, tests and release sweeps.
export const reviewSources: Readonly<Record<string, readonly string[]>> = Object.freeze({
  p1: Object.freeze(["p1"]), p2: Object.freeze(["p2"]), p3: Object.freeze(["p1", "p2"]),
  p4: Object.freeze(["p4"]), p5: Object.freeze(["p1", "p2", "p4"]),
});
export function getCurriculumPool(sets: ConceptSets, scope: CurriculumScope): Concept[] {
  const { topicId, subtopicId, levelId, partId } = scope;
  const parts = levelId === "l10" && reviewSources[partId] ? ["p1", "p2", "p4"] : reviewSources[partId] ?? [];
  const levels = levelId === "l10" ? Array.from({ length: 9 }, (_, i) => `l${i + 1}`) : [levelId];
  const records = levels.flatMap((level) => parts.flatMap((part) => {
    const set = sets[`${topicId}_${subtopicId}_${level}_${part}`];
    return (set?.concepts ?? []).filter((c) => c.topicId === topicId && c.subtopicId === subtopicId && c.levelId === level && c.partId === part);
  }));
  // Part dependencies define what has been taught. Challenge ratings are not
  // curriculum-position gates; registry validation owns their numeric contract.
  return [...new Map(records.map((c) => [c.id, c])).values()];
}
