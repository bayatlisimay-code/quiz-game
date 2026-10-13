import { reviewedEvidenceStrategy, evidenceProblems } from "./semanticEvidence";
import type { AssessmentContract, SemanticEvidence, EntityType, TemporalValue } from "./assessmentTypes";
import type { RuntimeImageRegistry } from "../images/types";
import { runtimeImageRegistry } from "../images/runtimeRegistry";
import type { AcceptedAnswer, Concept, QualifierValue, SemanticIdentity } from "./conceptTypes";
import { getRelationPolicy, relationPolicies } from "./relationPolicies";
import type { RelationPolicies, RelationPolicy } from "./relationPolicies";

export type SemanticConcept = Pick<Concept, "id" | "relation" | "subject" | "object"> &
  Partial<Pick<Concept, "context" | "semantic" | "answerKind" | "assessment">>;
export type SemanticValue = Readonly<{
  identity: string;
  text: string;
  forms: readonly string[];
  caseSensitive: boolean;
  stableId?: string;
  entityType?: EntityType;
  temporal?: TemporalValue;
}>;
export type SemanticClaim = Readonly<{
  conceptId: string;
  key: string;
  subjectIdentity: string;
  subjectEntityType?: EntityType;
  predicate: string;
  qualifiers: Readonly<Record<string, QualifierValue>>;
  answer: SemanticValue;
  accepted: readonly SemanticValue[];
  metadata: Readonly<Record<string, unknown>>;
  assessment?: AssessmentContract;
}>;
export type SemanticDecision = Readonly<{ verdict: "valid" | "invalid" | "unknown"; reason: string; evidenceIds?: readonly string[] }>;
export type SemanticStrategy = Readonly<{
  validateMetadata(claim: SemanticClaim, context: SemanticContext): readonly string[];
  evaluate(claim: SemanticClaim, candidate: SemanticClaim, context: SemanticContext): SemanticDecision;
}>;
export type SemanticStrategies = Readonly<Record<string, SemanticStrategy>>;
export type SemanticContext = Readonly<{
  claims: readonly SemanticClaim[];
  evidence: readonly SemanticEvidence[];
  evidenceIssues: readonly string[];
  evidenceForId(id: string): SemanticEvidence | undefined;
  images: RuntimeImageRegistry;
  policies: RelationPolicies;
  strategies: SemanticStrategies;
  claim(concept: SemanticConcept): SemanticClaim;
  acceptedAnswers(concept: SemanticConcept): readonly SemanticValue[];
  acceptedAnswersForClaim(claim: SemanticClaim): readonly SemanticValue[];
  evaluate(concept: SemanticConcept, candidate: SemanticConcept): SemanticDecision;
  withClaims(additional: readonly SemanticConcept[]): SemanticContext;
  withImages(images: RuntimeImageRegistry): SemanticContext;
}>;

// Display normalization is case-sensitive. Case folding belongs to the explicit
// legacy adapter or a value's author-supplied identity, never to all domains.
export function normalizeSemanticText(value: string): string {
  return value.normalize("NFC").trim().replace(/\s+/g, " ");
}
function comparison(value: string, caseSensitive: boolean): string {
  const normalized = normalizeSemanticText(value);
  return caseSensitive ? normalized : normalized.toLowerCase();
}
function value(text: string, identity?: SemanticIdentity): SemanticValue {
  const caseSensitive = identity?.caseSensitive ?? (identity ? true : false);
  return Object.freeze({
    text, stableId: identity?.id, caseSensitive, entityType: identity?.entityType, temporal: identity?.temporal,
    identity: identity?.id ? `id:${identity.id}` : `${caseSensitive ? "text" : "legacy"}:${comparison(text, caseSensitive)}`,
    forms: Object.freeze([text, ...(identity?.aliases ?? [])]),
  });
}
function canonical(value: unknown): string {
  if (Array.isArray(value)) return `[${value.map(canonical).join(",")}]`;
  if (value !== null && typeof value === "object") {
    return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonical((value as Record<string, QualifierValue>)[key])}`).join(",")}}`;
  }
  return JSON.stringify(value);
}
function immutable<T>(input: T): T {
  if (input && typeof input === "object") {
    for (const item of Object.values(input)) immutable(item);
    Object.freeze(input);
  }
  return input;
}
export function immutableSnapshot<T>(input: T): T { return immutable(JSON.parse(JSON.stringify(input)) as T); }
export function toSemanticClaim(concept: SemanticConcept, policy: RelationPolicy): SemanticClaim {
  const semantic = concept.semantic;
  const subject = value(concept.subject, semantic?.subject);
  const predicate = semantic?.predicateId ?? concept.relation;
  const qualifiers = immutableSnapshot({
    ...(concept.context ? { legacyContext: comparison(concept.context, false) } : {}),
    ...semantic?.qualifiers,
  });
  const answer = value(concept.object, semantic?.value);
  const accepted = [answer, ...(semantic?.acceptedAnswers ?? []).map((a: AcceptedAnswer) => value(a.text, a))];
  return Object.freeze({
    assessment: concept.assessment ? immutableSnapshot(concept.assessment) : undefined,
    conceptId: concept.id, subjectIdentity: subject.identity, subjectEntityType: subject.entityType, predicate, qualifiers,
    key: canonical([subject.identity, predicate, qualifiers]), answer,
    accepted: Object.freeze(accepted),
    metadata: immutableSnapshot({ ...policy.strategyMetadata, ...semantic?.strategyMetadata,
      ...(policy.semanticStrategy === "reviewed-evidence" ? { family: policy.strategyMetadata?.family, creatorRole: policy.strategyMetadata?.creatorRole, allowedEvents: policy.strategyMetadata?.allowedEvents, requiredContract: policy.strategyMetadata?.requiredContract } : {}) }),
  });
}
export function equivalentAnswers(a: SemanticValue, b: SemanticValue): boolean {
  if (a.stableId && b.stableId) return a.stableId === b.stableId;
  const caseSensitive = a.caseSensitive || b.caseSensitive;
  return a.forms.some((first) => b.forms.some((second) => comparison(first, caseSensitive) === comparison(second, caseSensitive)));
}

const unknown = (reason: string): SemanticDecision => ({ verdict: "unknown", reason });
export const semanticStrategies: SemanticStrategies = Object.freeze({
  "reviewed-evidence": reviewedEvidenceStrategy,
  "stored-membership": Object.freeze({
    validateMetadata: () => [],
    evaluate: () => unknown("Stored membership is positive evidence only; absence does not establish a negative."),
  }),
  "explicit-evidence": Object.freeze({
    validateMetadata: (claim: SemanticClaim) => Array.isArray(claim.metadata.invalidAnswerIds) &&
      claim.metadata.invalidAnswerIds.every((id) => typeof id === "string") ? [] : ["invalidAnswerIds must be supplied explicitly"],
    evaluate: (claim: SemanticClaim, candidate: SemanticClaim): SemanticDecision =>
      candidate.answer.stableId && (claim.metadata.invalidAnswerIds as readonly string[] | undefined)?.includes(candidate.answer.stableId)
        ? { verdict: "invalid", reason: "Explicit incompatible-answer evidence." } : unknown("No explicit incompatible-answer evidence."),
  }),
  "exclusive-classification": Object.freeze({
    validateMetadata: (claim: SemanticClaim) => {
      const { scheme, exclusive, values } = claim.metadata;
      if (Array.isArray(values) && values.every((item) => typeof item === "string") && !claim.answer.caseSensitive &&
          new Set(values.map((item) => comparison(item, false))).size !== values.length) {
        return ["Case-distinct classification values require explicit case-sensitive value identities"];
      }
      return typeof scheme === "string" && scheme.length > 0 && exclusive === true &&
        Array.isArray(values) && values.length > 1 && values.every((item) => typeof item === "string") &&
        new Set(values).size === values.length && values.includes(claim.answer.text)
        ? [] : ["Exclusive classification needs a scheme, exclusive=true, and a disjoint value vocabulary containing the answer"];
    },
    evaluate: (claim: SemanticClaim, candidate: SemanticClaim, context: SemanticContext): SemanticDecision => {
      if (claim.metadata.scheme !== candidate.metadata.scheme || candidate.predicate !== claim.predicate ||
          canonical(claim.qualifiers) !== canonical(candidate.qualifiers)) return unknown("Different classification scheme or qualifiers.");
      const values = claim.metadata.values;
      if (!Array.isArray(values) || !values.includes(candidate.answer.text)) return unknown("Candidate is outside the classification vocabulary.");
      if (context.acceptedAnswersForClaim(claim).some((answer) => equivalentAnswers(answer, candidate.answer))) {
        return { verdict: "valid", reason: "Accepted classification value." };
      }
      return { verdict: "invalid", reason: "Distinct values in an explicitly exclusive classification scheme." };
    },
  }),
});

export type SemanticContextOptions = {
  policies?: RelationPolicies;
  strategies?: SemanticStrategies;
  evidence?: readonly SemanticEvidence[];
  images?: RuntimeImageRegistry;
};
// Pure snapshot constructor. Supplying a smaller snapshot intentionally creates
// an isolated world (useful for tests). Production supplies ALL registered claims.
// Extend a production context with withClaims; never replace its truth implicitly.
export function createSemanticContext(records: readonly SemanticConcept[], options: SemanticContextOptions = {}): SemanticContext {
  const policies = immutableSnapshot(options.policies ?? relationPolicies);
  const strategies: SemanticStrategies = Object.freeze(Object.assign(Object.create(null), Object.fromEntries(
    Object.entries({ ...semanticStrategies, ...options.strategies }).map(([id, strategy]) => [id, Object.freeze({ ...strategy })])
  )));
  const snapshot = immutableSnapshot(records);
  const evidence = immutableSnapshot(options.evidence ?? []);
  const evidenceById = new Map(evidence.map(item => [item.id, item]));
  const images = immutableSnapshot(options.images ?? runtimeImageRegistry);
  const subjectAliases = new Map<string, Set<string>>();
  for (const record of snapshot) {
    const identity = record.semantic?.subject;
    if (!identity?.id) continue;
    for (const alias of [record.subject, ...(identity.aliases ?? [])]) {
      const key = normalizeSemanticText(alias);
      const ids = subjectAliases.get(key) ?? new Set<string>();
      ids.add(identity.id); subjectAliases.set(key, ids);
    }
  }
  const adapt = (record: SemanticConcept): SemanticClaim => {
    const ids = subjectAliases.get(normalizeSemanticText(record.subject));
    const adapted = !record.semantic?.subject?.id && ids?.size === 1
      ? { ...record, semantic: { ...record.semantic, subject: { ...record.semantic?.subject, id: [...ids][0] } } } : record;
    return toSemanticClaim(adapted, getRelationPolicy(record.relation, policies));
  };
  const claims = Object.freeze(snapshot.map(adapt));
  const answers = new Map<string, readonly SemanticValue[]>();
  for (const claim of claims) {
    const existing = [...(answers.get(claim.key) ?? [])];
    for (const answer of claim.accepted) {
      // Preserve supplied alias forms even if several records share an identity.
      if (!existing.some((a) => a.identity === answer.identity && JSON.stringify(a.forms) === JSON.stringify(answer.forms))) existing.push(answer);
    }
    answers.set(claim.key, Object.freeze(existing));
  }
  const cache = new WeakMap<SemanticConcept, SemanticClaim>();
  const claimFor = (record: SemanticConcept) => {
    let result = cache.get(record);
    if (!result) { result = adapt(record); cache.set(record, result); }
    return result;
  };
  const context: SemanticContext = {
    claims, policies, strategies, evidence, evidenceIssues: Object.freeze(evidenceProblems(evidence)), evidenceForId: id => evidenceById.get(id), images, claim: claimFor,
    acceptedAnswers: (record) => answers.get(claimFor(record).key) ?? claimFor(record).accepted,
    acceptedAnswersForClaim: (claim) => answers.get(claim.key) ?? claim.accepted,
    evaluate: (record, candidate) => {
      const claim = claimFor(record), other = claimFor(candidate);
      const strategyId = getRelationPolicy(record.relation, policies).semanticStrategy;
      if (strategyId === "reviewed-evidence") return strategies[strategyId].evaluate(claim, other, context);
      if (context.acceptedAnswersForClaim(claim).some((a) => equivalentAnswers(a, other.answer))) {
        return { verdict: "valid", reason: "Explicitly accepted answer for the same qualified claim." };
      }
      const strategy = strategies[getRelationPolicy(record.relation, policies).semanticStrategy];
      if (!strategy || strategy.validateMetadata(claim, context).length) {
        return unknown("Missing strategy or required semantic metadata.");
      }
      return strategy.evaluate(claim, other, context);
    },
    withImages: (replacement) => createSemanticContext(snapshot, { policies, strategies, evidence, images: replacement }),
    withClaims: (additional) => {
      const byId = new Map(snapshot.map((record) => [record.id, record]));
      for (const record of additional) {
        const existing = byId.get(record.id);
        if (existing && (existing.subject !== record.subject || existing.object !== record.object ||
            existing.relation !== record.relation || canonical(existing.semantic ?? {}) !== canonical(record.semantic ?? {}) || canonical(existing.assessment ?? {}) !== canonical(record.assessment ?? {}))) {
          throw new Error(`Conflicting semantic snapshot record: ${record.id}`);
        }
        if (!existing) byId.set(record.id, record);
      }
      return createSemanticContext([...byId.values()], { policies, strategies, evidence, images });
    },
  };
  return Object.freeze(context);
}
