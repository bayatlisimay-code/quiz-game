import type { Concept, QualifierValue } from "../../src/quizEngine/conceptTypes";
import type { EntityType, SemanticEvidence } from "../../src/quizEngine/assessmentTypes";
import { authorArtworkPilot } from "../artPilot/authoring";
import type { PilotArtwork } from "../artPilot/types";
import type { AncientArtwork } from "./ancientSculpture";
import { contentReview } from "./review";

export function authorWorks(works: readonly PilotArtwork[], subtopic: "painting" | "sculpture", level: string) {
  const result = authorArtworkPilot(works, subtopic, level);
  return {
    concepts: result.concepts.map(c => {
      const work = works.find(w => `art_${subtopic}_${level}_${c.partId}_${w.id}` === c.id)!;
      return { ...c, tags: ["verified-art-content", work.period], assessment: {
        ...c.assessment!,
        // A catalogue credit certifies attribution, not an exhaustive spelling
        // contract. New artists use options until accepted names are reviewed;
        // preserved pilot responses remain untouched.
        ...(c.partId === "p2" && !work.creatorAliases?.length ? { response: undefined } : {}),
        scope: { ...c.assessment!.scope!, text: c.partId === "p1" ? "Identify the collection object." : `${c.assessment!.scope!.text.replace("original work.", "identified collection object.")} Version: ${c.partId === "p4" ? `${work.title} (${work.source})` : work.original}.` },
      } };
    }),
    evidence: result.evidence.map(e => ({ ...e, ...contentReview })),
  };
}

/** Identity/date catalogue fields only; unnamed prehistoric cultures remain
 * unasserted. Cultural fields are explicitly assessed as catalogue attributions,
 * never as exclusive civilizational influence or modern nationality. */
export function authorAncientWorks(works: readonly AncientArtwork[], levelId: string) {
  const concepts: Concept[] = [], evidence: SemanticEvidence[] = [];
  for (const work of works) for (const partId of ["p1", "p2", "p4"] as const) {
    if (partId === "p2" && (!work.culture || !work.cultureId)) continue;
    const relation = partId === "p1" ? "identification_of_sculpture" : partId === "p2" ? "civilization_or_culture_of_sculpture" : "historical_period_or_approximate_date_of_sculpture";
    const id = `art_sculpture_${levelId}_${partId}_${work.id}`;
    const subjectId = partId === "p1" ? `description:${work.id}:v1` : `artwork:${work.id}`;
    const subjectType: EntityType = partId === "p1" ? "stimulus" : "work";
    const valueId = partId === "p1" ? `artwork:${work.id}` : partId === "p2" ? work.cultureId! : work.dateId;
    const valueType: EntityType = partId === "p1" ? "work" : partId === "p2" ? "culture" : "date";
    const qualifiers: Record<string, QualifierValue> = { assessmentScope: partId === "p1" ? "described-collection-object" : partId === "p2" ? "catalogue-cultural-attribution" : "catalogue-dating-label" };
    const object = partId === "p1" ? work.title : partId === "p2" ? work.culture! : work.date;
    const evidenceId = `source-check:${id}`;
    evidence.push({ ...contentReview, id: evidenceId, kind: "complete-set", predicateId: relation, subjectId, qualifiers,
      valueIds: [valueId], valueType, sourceUrl: partId === "p2" ? work.cultureUrl ?? work.url : work.url,
      locator: `${partId === "p2" ? work.cultureLocator ?? work.locator : work.locator}. Assessed field: ${partId === "p1" ? "identity of this specifically described collection object" : partId === "p2" ? "the stated primary cultural attribution, not every influence or broader tradition" : "complete source dating label, not an asserted exact year"}.` });
    concepts.push({ id, topicId: "art", subtopicId: "sculpture", levelId, partId, relation,
      subject: partId === "p1" ? `Description of collection object ${work.id}` : work.title,
      object, answerKind: "short", difficulty: 2, introducedIn: work.introducedIn, tags: ["verified-art-content", work.period],
      semantic: { subject: { id: subjectId, entityType: subjectType, caseSensitive: false }, value: { id: valueId, entityType: valueType, caseSensitive: false }, qualifiers },
      assessment: { reviewStatus: "verified", answerLeakageReviewed: true, evidenceIds: [evidenceId], subjectType, valueType,
        factId: `artwork:${work.id}:${relation}`, scope: { qualifierKeys: Object.keys(qualifiers),
          text: partId === "p1" ? "Identify the collection object." : `${partId === "p2" ? `Primary cultural attribution stated by ${work.source}; retain its specificity, not a broader label, all influences or modern nationality.` : `Complete dating label given by ${work.source}. ${work.dateContext ?? "Preserve its range and uncertainty."}`} Version: ${work.original}.` },
        ...(partId === "p2" ? { catalogueField: "cultural attribution" as const } : {}),
        ...(partId === "p4" ? { catalogueField: "dating label" as const } : {}),
        ...(partId === "p1" ? { identification: { description: { text: work.clue, evidenceIds: [evidenceId], answerLeakageReviewed: true as const } } } : {}),
      },
    });
  }
  return { concepts, evidence };
}
