import { Concept } from "./conceptTypes";

export function enrichConcepts(concepts: Concept[]): Concept[] {
  return concepts.map((c) => ({
    ...c,
    entity: c.subject.toLowerCase().replace(/\s+/g, "_"),
    factType: c.relation,
  }));
}