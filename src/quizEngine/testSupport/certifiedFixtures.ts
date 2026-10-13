import type { Concept } from "../conceptTypes";
import { designCreationDecadePolicy } from "../relationPolicies";
import { createSemanticContext } from "../semanticValidation";

// Test-only closed worlds: the test author declares these fixture values
// mutually exclusive. Never use this helper to qualify real application data.
export function certifiedFixtureContext(records: readonly Concept[]) {
  const relations = [...new Set(records.map((c) => c.relation))];
  const policies = Object.fromEntries(relations.map((relation) => [relation, {
    ...designCreationDecadePolicy,
    strategyMetadata: { scheme: `test-fixture:${relation}`, exclusive: true,
      values: [...new Set(records.filter((c) => c.relation === relation).map((c) => c.object))] },
  }]));
  return createSemanticContext(records, { policies });
}
