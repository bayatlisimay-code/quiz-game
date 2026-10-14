import type { Concept, QualifierValue, SemanticIdentity } from "../../src/quizEngine/conceptTypes";
import type { EntityType, SemanticEvidence } from "../../src/quizEngine/assessmentTypes";
import type { PilotArtwork } from "./types";

export const pilotReview = Object.freeze({
  reviewStatus: "verified" as const,
  reviewedBy: "Codex — primary-source comparison (not independent human editorial approval)",
  reviewedAt: "2026-10-13T10:25:43Z",
});

/** Completeness here concerns the explicitly worded catalogue field or the
 * identity of the described original object. It is NEVER a claim that all
 * creators, aliases or works in art history have been enumerated. */
export function catalogueEvidence(id: string, subjectId: string, predicateId: string,
  qualifiers: Readonly<Record<string, QualifierValue>>, valueId: string, valueType: EntityType,
  sourceUrl: string, locator: string): SemanticEvidence {
  return { ...pilotReview, id, kind: "complete-set", subjectId, predicateId, qualifiers,
    valueIds: [valueId], valueType, sourceUrl, locator };
}
const identity = (id: string, entityType: EntityType, aliases: readonly string[] = []): SemanticIdentity => ({ id, entityType, aliases, caseSensitive: false });

export function authorArtworkPilot(works: readonly PilotArtwork[], subtopicId: "painting" | "sculpture", levelId: string) {
  const concepts: Concept[] = [], evidence: SemanticEvidence[] = [];
  const creatorRelation = subtopicId === "painting" ? "painter_of_painting" : "sculptor_of_sculpture";
  const role = subtopicId === "painting" ? "painter" : "sculptor";
  for (const work of works) for (const partId of ["p1", "p2", "p4"] as const) {
    const relation = partId === "p1" ? `identification_of_${subtopicId}` : partId === "p2" ? creatorRelation : `creation_date_of_${subtopicId}`;
    const id = `art_${subtopicId}_${levelId}_${partId}_${work.id}`;
    const workId = `artwork:${work.id}`;
    const qualifiers: Record<string, QualifierValue> = partId === "p1" ? { assessmentScope: "described-original-object" }
      : partId === "p2" ? { role, attributionStatus: "certain", assessmentScope: "principal-catalogue-credit" }
      : { event: work.event, dateBasis: "catalogue-label", precision: work.precision, ...(work.dateContext ? { datingContext: work.dateContext } : {}) };
    const subject = partId === "p1" ? `Description of original object ${work.id}` : work.title;
    const object = partId === "p1" ? work.title : partId === "p2" ? work.creator : work.date;
    const subjectIdentity = partId === "p1" ? identity(`description:${work.id}:v1`, "stimulus") : identity(workId, "work", work.titleAliases);
    const valueIdentity = partId === "p1" ? identity(workId, "work", work.titleAliases)
      : partId === "p2" ? identity(`person:${work.creatorId}`, "person", work.creatorAliases)
      : identity(work.dateId, "date", work.dateAliases);
    const evidenceId = `source-check:${id}`;
    const url = partId === "p4" ? work.dateUrl ?? work.url : partId === "p1" ? work.clueUrl ?? work.url : work.url;
    const locator = partId === "p4" ? work.dateLocator ?? work.locator : partId === "p1" ? work.clueLocator ?? work.locator : work.locator;
    evidence.push(catalogueEvidence(evidenceId, subjectIdentity.id!, relation, qualifiers, valueIdentity.id!, valueIdentity.entityType!, url,
      `${locator}. ${partId === "p1" ? "Identifies the specific original described in this entry, not every work with a similar motif." : partId === "p2" ? "The question is restricted to the entry's named principal artist, not workshop contributors or all historical attributions." : "The displayed answer preserves the source's full dating label; nearby years and narrower intervals are not silently substituted."}`));
    const forms = [object, ...(work.creatorAliases ?? [])].map(text => ({ text, caseSensitive: false }));
    const scope = partId === "p1" ? "Identify the original object described in its collection entry."
      : partId === "p2" ? `Principal ${role} attribution in the collection entry; original work.`
      : `${work.dateContext ? `${work.dateContext}. ` : ""}Dating given by ${work.source}; retain the complete label and any uncertainty.`;
    concepts.push({ id, topicId: "art", subtopicId, levelId, partId, relation, subject, object,
      answerKind: "short", difficulty: 2, introducedIn: work.introducedIn,
      tags: ["verified-art-pilot", work.period],
      semantic: { subject: subjectIdentity, value: valueIdentity, qualifiers },
      assessment: { reviewStatus: "verified", answerLeakageReviewed: true,
        evidenceIds: [evidenceId], subjectType: subjectIdentity.entityType!, valueType: valueIdentity.entityType!,
        factId: `${workId}:${relation}`, scope: { text: scope, qualifierKeys: Object.keys(qualifiers) },
        ...(partId === "p1" ? { identification: { description: { text: work.clue, evidenceIds: [evidenceId], answerLeakageReviewed: true as const } } } : {}),
        ...(partId === "p2" ? { attribution: { role, status: "certain" as const, ...(work.creatorVerb ? { verb: work.creatorVerb } : {}) }, response: { complete: true as const, forms },
          inverse: { enabled: true as const, answerLeakageReviewed: true as const,
            scope: { text: `Principal ${role} credits for original works in their collection entries.`, qualifierKeys: Object.keys(qualifiers) } } } : {}),
        ...(partId === "p4" ? { event: work.event, dateInterpretation: "catalogue-label" as const } : {}),
      },
    });
  }
  return { concepts, evidence };
}
