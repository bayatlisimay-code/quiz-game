import { artRelationDefinitions } from "../../data/artRelations";
import type { Concept } from "./conceptTypes";
import type { SemanticContext } from "./semanticValidation";
import { assessableForms, getExerciseCapabilities, generateMatchingExercise } from "./exerciseFactory";
import { hasRelationTemplate } from "./templates";

/** Infrastructure and content readiness are separate. This diagnostic never
 * widens the candidate pool to turn a blocked relation into an available one. */
export function targetRelationReadiness(pool: readonly Concept[], context: SemanticContext) {
  return Object.entries(artRelationDefinitions).map(([relation, definition]) => {
    const records = pool.filter(c => c.relation === relation);
    const policy = context.policies[relation];
    const infrastructure = !!policy && !!context.strategies[policy.semanticStrategy] && hasRelationTemplate(relation);
    const capabilities = records.map(c => getExerciseCapabilities(c, pool, context));
    const assessable = capabilities.filter(c => assessableForms(c).length > 0).length;
    return { relation, family: definition.family, infrastructure, records: records.length, assessable,
      matching: generateMatchingExercise(records, `readiness:${relation}`, context).status === "generated",
      status: !infrastructure ? "implementation-missing" : !records.length ? "blocked-pending-content" : !assessable ? "blocked-pending-evidence-or-assets" : "assessable-in-this-pool" };
  });
}
