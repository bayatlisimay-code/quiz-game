import type { Concept } from "../conceptTypes";
import type { AssessmentContract, EntityType, SemanticEvidence } from "../assessmentTypes";
import { artRelationDefinitions } from "../../../data/artRelations";
import { targetRelationPolicies } from "../relationPolicies";
import { createSemanticContext } from "../semanticValidation";

/** SYNTHETIC closed worlds only. This never qualifies or registers real Art facts. */
export function targetFixture(relation = "painter_of_painting", count = 5) {
  const definition = artRelationDefinitions[relation];
  const family = definition.family;
  const required = targetRelationPolicies[relation].strategyMetadata?.requiredContract;
  let subjectType: EntityType = "work", valueType: EntityType = "category";
  if (family === "creator") valueType = relation === "animation_studio_of_movie" ? "institution" : "person";
  if (family === "definition") { subjectType = "term"; valueType = "meaning"; }
  if (family === "identification") { subjectType = "stimulus"; valueType = "work"; }
  if (family === "date") valueType = "date";
  if (family === "period") valueType = "period";
  if (family === "country") valueType = "country";
  if (["example", "first-work"].includes(family)) { subjectType = "person"; valueType = "work"; }
  if (family === "representative") { subjectType = "category"; valueType = "person"; }
  if (["character", "association"].includes(family)) { subjectType = "character"; valueType = family === "association" ? "character" : "work"; }
  if (family === "prize" || required === "award-or-festival") { subjectType = "institution"; if (family === "prize") valueType = "category"; }
  if (required === "person" || required === "solo" || required === "solo-performance") subjectType = "person";
  if (required === "band" || required === "band-performance") subjectType = "group";
  if (["song-performance", "solo-performance", "band-performance"].includes(String(required))) valueType = "recording";
  if (required === "composition") { subjectType = "person"; valueType = "composition"; }
  const qualifiers: Record<string, string> = {};
  const extras: { -readonly [K in keyof AssessmentContract]?: AssessmentContract[K] } = {};
  if (family === "creator") { qualifiers.role = definition.creatorRole!; qualifiers.attributionStatus = "certain"; extras.attribution = { role: qualifiers.role, status: "certain" }; }
  if (family === "date") { qualifiers.event = String((targetRelationPolicies[relation].strategyMetadata?.allowedEvents as readonly string[])[0]); extras.event = qualifiers.event; }
  if (family === "country") { qualifiers.countryConvention = "present-day"; extras.geography = "present-day"; }
  if (family === "first-work") { qualifiers.firstWorkCriterion = String(required); extras.firstWork = { criterion: required as NonNullable<AssessmentContract["firstWork"]>["criterion"], wellEstablished: true }; }
  if (family === "association") { qualifiers.workId = "fixture-shared-work"; qualifiers.relationship = "friendship"; extras.association = { kind: "friendship", workId: qualifiers.workId, spoilerFree: true }; }
  if (required === "film-performance") qualifiers.workId = "fixture-film";
  if (family === "prize" || required === "award-or-festival") { qualifiers.institutionType = "festival"; extras.institutionType = "festival"; }
  if (["song-performance", "solo-performance", "band-performance", "composition"].includes(String(required))) {
    qualifiers.role = required === "composition" ? "composer" : "performer"; qualifiers.versionId = "fixture-recording-version";
    extras.music = { role: required === "composition" ? "composer" : "performer", versionId: qualifiers.versionId, creditedEntityId: "fixture-credit" };
  }
  const evidence: SemanticEvidence[] = [];
  const records: Concept[] = Array.from({ length: count }, (_, i) => {
    const id = `synthetic:${relation}:${i}`, subject = `Fixture subject ${i}`, object = `Fixture answer ${i}`;
    const evidenceId = `${id}:complete-set`;
    evidence.push({ id: evidenceId, kind: "complete-set", subjectId: `${id}:subject`, predicateId: relation, qualifiers,
      valueIds: [`${id}:value`], valueType, sourceUrl: "https://example.invalid/synthetic-fixture", locator: "Explicit test-only complete set",
      reviewStatus: "verified", reviewedBy: "synthetic-test-author", reviewedAt: "2026-10-13T00:00:00Z" });
    return { id, topicId: "art", subtopicId: "painting", levelId: "l2", partId: "p2", relation, subject, object,
      answerKind: "short", difficulty: 1, introducedIn: "A",
      semantic: { subject: { id: `${id}:subject`, entityType: subjectType }, value: { id: `${id}:value`, entityType: valueType, aliases: [`Alias ${i}`] }, qualifiers },
      assessment: { reviewStatus: "verified", answerLeakageReviewed: true, evidenceIds: [evidenceId], subjectType, valueType,
        scope: Object.keys(qualifiers).length ? { text: `Synthetic fixture scope: ${Object.values(qualifiers).join(", ")}.`, qualifierKeys: Object.keys(qualifiers) } : undefined,
        response: { complete: true, forms: [{ text: object, caseSensitive: false }, { text: `Alias ${i}`, caseSensitive: false }] },
        inverse: definition.inverse ? { enabled: true, answerLeakageReviewed: true, scope: Object.keys(qualifiers).length ? { text: `Independent reverse fixture scope: ${Object.values(qualifiers).join(", ")}.`, qualifierKeys: Object.keys(qualifiers) } : undefined } : undefined,
        ...extras,
        ...(extras.music ? { music: { ...extras.music, creditedEntityId: `${id}:subject` } } : {}),
        ...(family === "identification" ? { identification: { description: { text: `Independently authored fixture description ${i}`, evidenceIds: [evidenceId], answerLeakageReviewed: true as const } } } : {}),
      },
    };
  });
  const context = () => createSemanticContext(records, { policies: targetRelationPolicies, evidence });
  return { records, evidence, context };
}
