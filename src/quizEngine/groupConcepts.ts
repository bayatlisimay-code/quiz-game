import { Concept } from "./conceptTypes";

export type ConceptGroup = {
  entity: string;
  concepts: Concept[];
};

export function groupConcepts(concepts: Concept[]): ConceptGroup[] {
  const map: Record<string, Concept[]> = {};

  for (const c of concepts) {
    const key = c.entity ?? c.subject;

    if (!map[key]) {
      map[key] = [];
    }

    map[key].push(c);
  }

  return Object.entries(map).map(([entity, concepts]) => ({
    entity,
    concepts,
  }));
}