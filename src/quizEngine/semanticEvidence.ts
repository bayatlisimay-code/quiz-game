import type { SemanticEvidence, EvidenceScope } from "./assessmentTypes";
import type { SemanticClaim, SemanticContext, SemanticDecision, SemanticStrategy } from "./semanticValidation";

export function scopeKey(value: EvidenceScope): string {
  const sorted = (v: unknown): unknown => Array.isArray(v) ? v.map(sorted) : v && typeof v === "object"
    ? Object.fromEntries(Object.entries(v).sort(([a], [b]) => a.localeCompare(b)).map(([k, item]) => [k, sorted(item)])) : v;
  return JSON.stringify(sorted(value));
}
export function evidenceProblems(evidence: readonly SemanticEvidence[]): string[] {
  const ids = new Set<string>();
  const structural = evidence.flatMap(item => {
    const errors: string[] = [];
    if (!item.id || ids.has(item.id)) errors.push(`Missing/duplicate evidence ID: ${item.id}`);
    ids.add(item.id);
    if (!/^https:\/\//.test(item.sourceUrl) || !item.locator.trim()) errors.push(`Missing source locator: ${item.id}`);
    if (item.reviewStatus === "verified" && (!item.reviewedBy?.trim() || !item.reviewedAt || !Number.isFinite(Date.parse(item.reviewedAt)))) errors.push(`Missing evidence review: ${item.id}`);
    if (item.kind === "complete-set" && (!item.valueIds.length || new Set(item.valueIds).size !== item.valueIds.length)) errors.push(`Invalid complete set: ${item.id}`);
    if (item.kind === "date-bound" && (!Number.isSafeInteger(item.start) || !Number.isSafeInteger(item.end) || item.start > item.end)) errors.push(`Invalid temporal bound: ${item.id}`);
    if (item.kind === "disjoint-values" && item.leftId === item.rightId) errors.push(`Self-disjoint value: ${item.id}`);
    return errors;
  });
  const groups = new Map<string, SemanticEvidence[]>();
  for (const item of evidence) if (item.reviewStatus === "verified") {
    const key = `${item.predicateId}:${scopeKey(item.qualifiers)}`;
    const group = groups.get(key) ?? []; group.push(item); groups.set(key, group);
  }
  for (const group of groups.values()) {
    const positives = new Map<string, Set<string>>(), negatives = new Map<string, Set<string>>();
    const complete = new Map<string, readonly string[]>();
    const add = (map: Map<string, Set<string>>, subject: string, value: string) => {
      const values = map.get(subject) ?? new Set<string>(); values.add(value); map.set(subject, values);
    };
    for (const item of group) {
      if (item.kind === "assertion") add(item.verdict === "valid" ? positives : negatives, item.subjectId, item.valueId);
      if (item.kind === "complete-set") {
        const previous = complete.get(item.subjectId);
        if (previous && (previous.length !== item.valueIds.length || previous.some(id => !item.valueIds.includes(id)))) structural.push(`Conflicting complete sets: ${item.subjectId}`);
        complete.set(item.subjectId, item.valueIds);
        for (const id of item.valueIds) add(positives, item.subjectId, id);
      }
    }
    for (const [subject, values] of positives) {
      for (const id of values) {
        if (negatives.get(subject)?.has(id)) structural.push(`Contradictory evidence: ${subject}/${id}`);
        if (complete.has(subject) && !complete.get(subject)!.includes(id)) structural.push(`Complete set contradicts positive assertion: ${subject}/${id}`);
      }
      for (const item of group) if (item.kind === "disjoint-values" && values.has(item.leftId) && values.has(item.rightId)) structural.push(`Disjoint values both asserted: ${subject}`);
    }
    const bounds = group.filter((item): item is Extract<SemanticEvidence, { kind: "date-bound" }> => item.kind === "date-bound");
    for (let i = 0; i < bounds.length; i++) for (const other of bounds.slice(i + 1)) {
      const first = bounds[i];
      if (first.subjectId === other.subjectId && first.calendar === other.calendar && (first.end < other.start || first.start > other.end)) structural.push(`Conflicting event bounds: ${first.subjectId}`);
    }
  }
  return structural;
}
const decision = (verdict: SemanticDecision["verdict"], reason: string, evidenceIds: readonly string[] = []): SemanticDecision => ({ verdict, reason, evidenceIds });
const applicableCache = new WeakMap<SemanticContext, Map<string, readonly SemanticEvidence[]>>();
function applicable(claim: SemanticClaim, context: SemanticContext): readonly SemanticEvidence[] {
  const key = `${claim.predicate}:${scopeKey(claim.qualifiers)}:${claim.subjectIdentity}`;
  const cache = applicableCache.get(context) ?? new Map<string, readonly SemanticEvidence[]>();
  applicableCache.set(context, cache);
  const cached = cache.get(key);
  if (cached) return cached;
  const source: readonly SemanticEvidence[] = claim.predicate.startsWith("inverse:") ? context.evidence.flatMap((item): SemanticEvidence[] => {
    if (item.predicateId !== claim.predicate.slice(8)) return [];
    if (item.kind === "assertion") return [{ ...item, predicateId: claim.predicate, subjectId: item.valueId, valueId: item.subjectId }];
    if (item.kind === "complete-set" && item.valueType === claim.assessment?.subjectType && subjectId(claim)) {
      return [{ ...item, kind: "assertion", predicateId: claim.predicate, subjectId: subjectId(claim)!, valueId: item.subjectId,
        verdict: item.valueIds.includes(subjectId(claim)!) ? "valid" : "invalid" }];
    }
    return [];
  }).concat(context.evidence.filter(item => item.predicateId === claim.predicate)) : context.evidence;
  const result = Object.freeze(source.filter(item => item.reviewStatus === "verified" &&
    item.predicateId === claim.predicate && scopeKey(item.qualifiers) === scopeKey(claim.qualifiers) &&
    // Subject facts are indexed separately; vocabulary rules remain shared.
    (!("subjectId" in item) || item.subjectId === subjectId(claim))));
  cache.set(key, result);
  return result;
}
function subjectId(claim: SemanticClaim): string | undefined {
  return claim.subjectIdentity.startsWith("id:") ? claim.subjectIdentity.slice(3) : undefined;
}
function supportsAnchor(claim: SemanticClaim, context: SemanticContext): boolean {
  return applicable(claim, context).some(item => claim.assessment?.evidenceIds.includes(item.id) &&
    ((item.kind === "assertion" && item.subjectId === subjectId(claim) && item.valueId === claim.answer.stableId && item.verdict === "valid") ||
     (item.kind === "complete-set" && item.subjectId === subjectId(claim) && !!claim.answer.stableId && item.valueIds.includes(claim.answer.stableId))));
}
const metadataCache = new WeakMap<SemanticContext, WeakMap<SemanticClaim, readonly string[]>>();
export const reviewedEvidenceStrategy: SemanticStrategy = Object.freeze({
  validateMetadata(claim: SemanticClaim, context: SemanticContext): readonly string[] {
    const cache = metadataCache.get(context) ?? new WeakMap<SemanticClaim, readonly string[]>();
    metadataCache.set(context, cache);
    const cached = cache.get(claim);
    if (cached) return cached;
    const a = claim.assessment;
    if (!a || a.reviewStatus !== "verified" || !subjectId(claim) || !claim.answer.stableId) return ["Reviewed assessment and stable subject/value identities required"];
    const errors: string[] = [...context.evidenceIssues];
    if (!a.answerLeakageReviewed) errors.push("Assessment wording must be reviewed for answer leakage");
    if (claim.answer.entityType !== a.valueType || claim.subjectEntityType !== a.subjectType) errors.push("Entity types must agree with the assessment contract");
    if (!supportsAnchor(claim, context)) errors.push("No reviewed positive evidence for the exact qualified claim");
    if (a.evidenceIds.some(id => context.evidenceForId(id)?.reviewStatus !== "verified")) errors.push("Unreviewed or missing assessment evidence");
    const ownDate = claim.answer.temporal;
    if (ownDate && applicable(claim, context).some(e => e.kind === "date-bound" && e.subjectId === subjectId(claim) && e.calendar === ownDate.calendar && (ownDate.end < e.start || ownDate.start > e.end))) errors.push("Positive answer contradicts reviewed temporal bounds");
    const qualifierKeys = Object.keys(claim.qualifiers);
    if (qualifierKeys.length && (!a.scope?.text.trim() || qualifierKeys.some(k => !a.scope?.qualifierKeys.includes(k)))) errors.push("Every truth qualifier must be covered by authored visible scope wording");
    if ((a.direction === "reverse") !== claim.predicate.startsWith("inverse:")) errors.push("Question direction must agree with its oriented semantic predicate");
    const family = claim.metadata.family;
    if (family === "date" && a.direction !== "reverse" && !["date", "period"].includes(a.valueType)) errors.push("Date questions require a temporal value identity");
    if (family === "creator" && (!a.attribution || a.attribution.role !== claim.metadata.creatorRole || a.attribution.status === "disputed" || claim.qualifiers.role !== a.attribution.role || claim.qualifiers.attributionStatus !== a.attribution.status)) errors.push("Qualified role and non-disputed attribution required");
    if (family === "date" && (!a.event || !(claim.metadata.allowedEvents as readonly string[] | undefined)?.includes(a.event) || claim.qualifiers.event !== a.event)) errors.push("Qualified historical event required");
    if (a.event === "casting" && !claim.qualifiers.versionId) errors.push("Casting dates require the exact cast/version identity");
    if (family === "country" && (a.geography !== "present-day" || claim.qualifiers.countryConvention !== "present-day" || a.valueType !== "country")) errors.push("Present-day country convention required");
    if (family === "first-work" && (!a.firstWork?.wellEstablished || claim.qualifiers.firstWorkCriterion !== a.firstWork.criterion)) errors.push("Well-established first-work criterion required");
    if (family === "association" && (!a.association?.spoilerFree || !a.association.workId || claim.qualifiers.workId !== a.association.workId || claim.qualifiers.relationship !== a.association.kind)) errors.push("Meaningful, spoiler-reviewed relationship in a specific work required");
    if (family === "prize" && (!a.institutionType || claim.qualifiers.institutionType !== a.institutionType)) errors.push("Award/festival entity type must be qualified");
    if (a.music && (claim.qualifiers.role !== a.music.role || claim.qualifiers.versionId !== a.music.versionId || !a.music.creditedEntityId)) errors.push("Music role, version and credited entity must be explicit");
    const required = claim.metadata.requiredContract;
    if (["song-performance", "solo-performance", "band-performance"].includes(String(required)) && (!a.music || !["song", "recording"].includes(a.valueType))) errors.push("Song/recording performance metadata required; instrumental compositions are not songs");
    if (["solo-performance", "band-performance", "composition"].includes(String(required)) && a.music?.creditedEntityId !== subjectId(claim)) errors.push("Music credit must identify the actual person/group subject");
    if (required === "solo-performance" && a.subjectType !== "person") errors.push("Solo performance must credit a person");
    if (required === "band-performance" && a.subjectType !== "group") errors.push("Band performance must credit a group, never just the lead singer");
    if (required === "film-performance" && (!claim.qualifiers.workId || !a.attribution)) errors.push("Character portrayal must identify the film and credited performance role");
    if (family === "first-work" && required && a.firstWork?.criterion !== required) errors.push("First-work criterion must match the relation contract");
    if (required === "composition" && (!a.music || a.music.role !== "composer" || a.valueType !== "composition")) errors.push("Composer and composition metadata required");
    if (required === "person" && a.subjectType !== "person") errors.push("Birthplace relation requires a person");
    if (required === "award-or-festival" && (!a.institutionType || claim.qualifiers.institutionType !== a.institutionType)) errors.push("Award/festival institution type must be explicit");
    if (["solo-performance", "band-performance"].includes(String(required)) && a.music?.role !== "performer") errors.push("Song examples must identify the credited performance, not infer it from songwriting");
    if (required === "solo" && a.subjectType !== "person") errors.push("Solo artist must identify a person");
    if (required === "band" && a.subjectType !== "group") errors.push("Band must identify a group");
    if (family === "definition" && a.direction !== "reverse" && (a.valueType !== "meaning" || !["term", "category"].includes(a.subjectType))) errors.push("Definition requires a term/category and a meaning identity");
    if (family === "identification" && a.subjectType !== "stimulus") errors.push("Identification requires an independently reviewed stimulus identity");
    if (family === "association" && (a.subjectType !== "character" || a.valueType !== "character")) errors.push("Character association requires two character identities");
    if (a.response && (!a.response.forms.length || a.response.forms.some(f => !f.text.trim()))) errors.push("Typed response must declare nonempty accepted forms");
    if (a.response && a.response.forms.some(form => !context.acceptedAnswersForClaim(claim).some(v => v.forms.some(text =>
      form.caseSensitive ? text.normalize("NFC").trim() === form.text.normalize("NFC").trim() : text.normalize("NFC").trim().toLowerCase() === form.text.normalize("NFC").trim().toLowerCase())))) errors.push("Typed forms must identify declared accepted answers or aliases");
    const result = Object.freeze(errors);
    cache.set(claim, result);
    return result;
  },
  evaluate(claim: SemanticClaim, candidate: SemanticClaim, context: SemanticContext): SemanticDecision {
    if (reviewedEvidenceStrategy.validateMetadata(claim, context).length) return decision("unknown", "Unqualified assessment");
    // A certified relationship is useless if the displayed candidate identity or
    // temporal bounds have not themselves passed the reviewed content contract.
    if (reviewedEvidenceStrategy.validateMetadata(candidate, context).length) return decision("unknown", "Candidate identity is not independently qualified");
    const id = candidate.answer.stableId;
    if (!id || candidate.answer.entityType !== claim.assessment?.valueType) return decision("unknown", "Unresolved or incompatible answer type");
    const facts = applicable(claim, context);
    const direct = facts.filter(e => e.kind === "assertion" && e.subjectId === subjectId(claim) && e.valueId === id);
    const positive = direct.filter(e => e.kind === "assertion" && e.verdict === "valid");
    const negative = direct.filter(e => e.kind === "assertion" && e.verdict === "invalid");
    if (positive.length && negative.length) return decision("unknown", "Conflicting evidence; assessment quarantined", direct.map(e => e.id));
    if (positive.length) return decision("valid", "Reviewed positive assertion", positive.map(e => e.id));
    // Every edge is scoped and reviewed. Hierarchy proves positives, never sibling exclusion.
    const ancestors = (value: string): Set<string> => {
      const result = new Set([value]), pending = [value];
      while (pending.length) {
        const next = pending.pop()!;
        for (const e of facts) if (e.kind === "broader-value" && e.childId === next && !result.has(e.parentId)) { result.add(e.parentId); pending.push(e.parentId); }
      }
      return result;
    };
    const memberships = facts.filter(e => e.kind === "assertion" && e.subjectId === subjectId(claim) && e.verdict === "valid");
    if (memberships.some(e => e.kind === "assertion" && ancestors(e.valueId).has(id))) return negative.length ? decision("unknown", "Conflicting hierarchy evidence") : decision("valid", "Reviewed positive containment/membership", facts.map(e => e.id));
    const complete = facts.find(e => e.kind === "complete-set" && e.subjectId === subjectId(claim) && e.valueType === candidate.answer.entityType);
    if (complete?.kind === "complete-set" && complete.valueIds.includes(id)) return decision("valid", "Reviewed complete qualified answer set", [complete.id]);
    // Known registered alternatives always block a negative, even if evidence is incomplete.
    if (context.acceptedAnswersForClaim(claim).some(v => v.stableId === id)) return decision("unknown", "Stored accepted alternative requires qualification; never a negative");
    if (negative.length) return decision("invalid", "Reviewed explicit contradiction", negative.map(e => e.id));
    if (complete) return decision("invalid", "Reviewed complete qualified answer set", [complete.id]);
    for (const member of memberships) if (member.kind === "assertion") {
      const known = ancestors(member.valueId), proposed = ancestors(id);
      const disjoint = facts.find(e => e.kind === "disjoint-values" && ((known.has(e.leftId) && proposed.has(e.rightId)) || (known.has(e.rightId) && proposed.has(e.leftId))));
      if (disjoint) return decision("invalid", "Reviewed applicable disjointness", [member.id, disjoint.id]);
    }
    const temporal = candidate.answer.temporal;
    if (temporal && Number.isSafeInteger(temporal.start) && Number.isSafeInteger(temporal.end) && temporal.start <= temporal.end) {
      const bound = facts.find(e => e.kind === "date-bound" && e.subjectId === subjectId(claim) && e.calendar === temporal.calendar && (temporal.end < e.start || temporal.start > e.end));
      if (bound) return decision("invalid", "Disjoint reviewed event bounds", [bound.id]);
    }
    return decision("unknown", "No applicable contradiction evidence");
  },
});

/** Exact typed recall needs a reviewed finite answer contract. An open positive
 * list cannot establish that other defensible entities should be rejected. */
export function typedResponseIsSafe(claim: SemanticClaim, context: SemanticContext): boolean {
  const response = claim.assessment?.response;
  if (!response?.complete || (claim.metadata.family === "definition" && claim.assessment?.direction !== "reverse")) return false;
  const complete = context.evidence.find(e => e.kind === "complete-set" && e.reviewStatus === "verified" &&
    e.subjectId === subjectId(claim) && e.predicateId === claim.predicate && scopeKey(e.qualifiers) === scopeKey(claim.qualifiers));
  if (complete?.kind !== "complete-set") return false;
  const answers = context.acceptedAnswersForClaim(claim);
  const covers = (id: string) => answers.some(a => a.stableId === id && a.forms.some(text => response.forms.some(form =>
    form.caseSensitive ? text.normalize("NFC").trim() === form.text.normalize("NFC").trim() : text.normalize("NFC").trim().toLowerCase() === form.text.normalize("NFC").trim().toLowerCase())));
  return complete.valueIds.every(covers) && applicable(claim, context).every(e =>
    e.kind !== "assertion" || e.subjectId !== subjectId(claim) || e.verdict !== "valid" || covers(e.valueId));
}
