import { isDifficulty } from "./contentRegistry";
import { hasRelationTemplate } from "./templates";
import type { Concept } from "./conceptTypes";
import { getRelationPolicy } from "./relationPolicies";
import type { RelationPolicies } from "./relationPolicies";
import { createSemanticContext, equivalentAnswers } from "./semanticValidation";
import type { SemanticContextOptions, SemanticStrategies } from "./semanticValidation";
import { presentationProblems } from "./learnerText";
import { hasLearningPriority } from "./learningProgression";

export type ContentIssue = { severity: "error" | "review"; code: string; relation?: string; conceptId?: string; message: string };
export function validateContent(concepts: readonly Concept[], policies: RelationPolicies, strategies?: SemanticStrategies, options: Pick<SemanticContextOptions, "evidence" | "images"> = {}): ContentIssue[] {
  const issues: ContentIssue[] = [];
  const context = createSemanticContext(concepts, { policies, strategies, ...options });
  for (const message of context.evidenceIssues) issues.push({ severity: "error", code: "invalid-evidence", message });
  const seen = new Set<string>(), claims = new Map<string, string>();
  for (const [relation, policy] of Object.entries(policies)) {
    if (!Object.hasOwn(context.strategies, policy.semanticStrategy)) issues.push({ severity: "error", code: "unknown-strategy", relation, message: `Unknown strategy ${policy.semanticStrategy}` });
  }
  for (const concept of concepts) {
    const issue = (severity: ContentIssue["severity"], code: string, message: string) => issues.push({ severity, code, message, relation: concept.relation, conceptId: concept.id });
    if (seen.has(concept.id)) issue("error", "duplicate-concept-id", "Duplicate authored concept ID");
    seen.add(concept.id);
    if (concept.learning && !hasLearningPriority(concept)) issue("error", "invalid-learning-priority", "Educational priority must be 1–5 with an authored rationale");
    if (!Object.hasOwn(policies, concept.relation)) issue("error", "missing-policy", "Registered relation requires an explicit policy decision");
    if (concept.difficulty !== undefined && !isDifficulty(concept.difficulty)) issue("error", "invalid-difficulty", "Challenge difficulty must be an integer from 1 to 5");
    if (!hasRelationTemplate(concept.relation)) issue("error", "missing-template", "Relation requires an authored grammatical template");
    const policy = getRelationPolicy(concept.relation, policies), claim = context.claim(concept);
    const strategy = context.strategies[policy.semanticStrategy];
    for (const message of new Set([...(strategy?.validateMetadata(claim, context) ?? []), ...presentationProblems(claim, context)])) issue("error", "missing-strategy-metadata", message);
    const fact = `${claim.key}:${claim.answer.identity}`;
    if (claims.has(fact)) issue("review", "repeated-fact", `Same semantic fact as ${claims.get(fact)}`);
    claims.set(fact, concept.id);
    if (claim.metadata.exclusive === true && context.acceptedAnswers(concept).some((answer) => !equivalentAnswers(answer, claim.answer))) {
      issue("error", "conflicting-exclusive-answers", "Exclusive qualified claim has multiple incompatible stored answers");
    }
    if (policy.status === "blocked-pending-metadata") issue("review", "insufficient-evidence", "Assessment blocked pending semantic evidence/content review");
    else if (policy.status === "legacy-reviewed") issue("review", "insufficient-negative-evidence", "Legacy relation requires semantic evidence before negative alternatives can be assessed");
    // Human-authored review status, not subject-name or capitalization heuristics.
    const review = claim.metadata.reviewFlags;
    if (Array.isArray(review)) for (const flag of review) issue("review", "author-review", String(flag));
  }
  return issues;
}
