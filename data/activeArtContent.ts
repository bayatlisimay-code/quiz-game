import { artCurriculum, teachingRelation } from "./artCurriculum";
import type { Concept } from "../src/quizEngine/conceptTypes";
import type { SemanticEvidence } from "../src/quizEngine/assessmentTypes";
import { authorArtworkPilot } from "./artPilot/authoring";
import { sculpturePilotWorks } from "./artPilot/sculpture";
import { paintingPilotWorks } from "./artPilot/painting";
import { terminologyPilotConcepts, terminologyPilotEvidence } from "./artPilot/terminology";

// Production authoring boundary. Source-checked pilot originals only;
// synthetic engine fixtures never enter this list. No image approvals implied.
// Original authored content remains intact in conceptSets.ts as reusable source material.
const sculpture = authorArtworkPilot(sculpturePilotWorks, "sculpture", "l3");
const painting = authorArtworkPilot(paintingPilotWorks, "painting", "l2");
export const approvedArtContent: readonly Concept[] = Object.freeze([...sculpture.concepts, ...painting.concepts, ...terminologyPilotConcepts]);
export const approvedArtEvidence: readonly SemanticEvidence[] = Object.freeze([...sculpture.evidence, ...painting.evidence, ...terminologyPilotEvidence]);

export function createActiveArtSets(records: readonly Concept[]) {
  const sets: Record<string, { id: string; concepts: Concept[] }> = {};
  for (const [subtopic, levels] of Object.entries(artCurriculum)) for (const level of Object.keys(levels)) for (let part = 1; part <= 5; part++) {
    const id = `art_${subtopic}_${level}_p${part}`;
    sets[id] = { id, concepts: [] };
  }
  const ids = new Set<string>();
  for (const record of records) {
    const key = `${record.topicId}_${record.subtopicId}_${record.levelId}_${record.partId}`;
    if (ids.has(record.id)) throw new Error(`Duplicate active concept ID: ${record.id}`);
    ids.add(record.id);
    if (record.topicId !== "art" || teachingRelation(record.subtopicId, record.levelId, record.partId) !== record.relation || !sets[key]) {
      throw new Error(`Active record disagrees with approved curriculum: ${record.id}`);
    }
    sets[key].concepts.push(record);
  }
  return sets;
}
export const activeArtConceptSets = createActiveArtSets(approvedArtContent);
