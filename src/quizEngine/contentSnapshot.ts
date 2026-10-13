import { activeArtConceptSets, approvedArtEvidence } from "../../data/activeArtContent";
import { legacyRelationPolicies, targetRelationPolicies } from "./relationPolicies";
import { CONCEPT_SETS } from "../../data/conceptSets";
import type { Concept } from "./conceptTypes";
import { createSemanticContext } from "./semanticValidation";

// Registration validation rejects aliases/misalignment and duplicate IDs.
// Preserve every record here so duplicate authored IDs remain visible to CI.
export function registeredConcepts(): Concept[] {
  return Object.values(CONCEPT_SETS).flatMap((set) => set.concepts);
}
// Content ownership stays at the application boundary, outside the validator.
// This is one explicit immutable snapshot, shared by production quiz sessions.
export const registeredSemanticContext = createSemanticContext(registeredConcepts(), { policies: legacyRelationPolicies });

// Legacy authored facts are retained for recovery/research, never served under new lessons.
export const ACTIVE_CONCEPT_SETS = Object.freeze({
  ...Object.fromEntries(Object.entries(CONCEPT_SETS).filter(([id]) => !id.startsWith("art_"))),
  ...activeArtConceptSets,
});
export const activeRegisteredConcepts = (): Concept[] => Object.values(ACTIVE_CONCEPT_SETS).flatMap(set => set.concepts);
export const activeSemanticContext = createSemanticContext(activeRegisteredConcepts(), {
  policies: targetRelationPolicies, evidence: approvedArtEvidence,
});
