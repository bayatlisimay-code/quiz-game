import type { Concept } from "../../src/quizEngine/conceptTypes";
import type { SemanticEvidence } from "../../src/quizEngine/assessmentTypes";
import { contentReview } from "./review";
export type DefinitionEntry = Readonly<{ id: string; term: string; definition: string; url: string; locator: string; aliases?: readonly string[] }>;
export type MeaningContrast = readonly [left: string, right: string, rationale: string];
/** Negatives require explicitly reviewed meaning contrasts. A new term adds
 * positive evidence only: ID inequality never manufactures incompatibility. */
export function authorDefinitions(subtopic: "painting" | "sculpture", level: string, part: "p1" | "p2" | "p4", relation: string,
  sense: string, terms: readonly DefinitionEntry[], contrasts: readonly MeaningContrast[]) {
  const qualifiers = { sense };
  const evidence: SemanticEvidence[] = [];
  const assertion = (left: DefinitionEntry, right: DefinitionEntry, verdict: "valid" | "invalid", rationale: string): SemanticEvidence => ({
    ...contentReview, id: `meaning-check:${relation}:${sense}:${left.id}:${right.id}`, kind: "assertion", predicateId: relation, qualifiers,
    subjectId: `term:${sense}:${left.id}`, valueId: `meaning:${sense}:${right.id}`, verdict, sourceUrl: left.url,
    locator: `${left.locator}. ${verdict === "invalid" ? `Compared with ${right.url} (${right.locator}). ` : ""}${rationale}. Comparison concerns defining meaning, not co-occurrence of features or processes in an artwork.`,
  });
  for (const term of terms) evidence.push(assertion(term, term, "valid", "Reviewed concise paraphrase of the stated terminology sense"));
  for (const [leftId, rightId, rationale] of contrasts) {
    const left = terms.find(t => t.id === leftId), right = terms.find(t => t.id === rightId);
    if (!left || !right || left === right || !rationale.trim()) throw new Error(`Invalid authored contrast: ${relation}:${leftId}:${rightId}`);
    evidence.push(assertion(left, right, "invalid", rationale), assertion(right, left, "invalid", rationale));
  }
  const concepts: Concept[] = terms.map(term => ({
    id: `art_${subtopic}_${level}_${part}_${term.id}`, topicId: "art", subtopicId: subtopic, levelId: level, partId: part, relation,
    subject: term.term, object: term.definition, answerKind: "long", difficulty: 2, introducedIn: "A", tags: ["verified-art-content", "terminology"],
    semantic: { subject: { id: `term:${sense}:${term.id}`, entityType: "term", aliases: term.aliases ?? [], caseSensitive: false },
      value: { id: `meaning:${sense}:${term.id}`, entityType: "meaning", caseSensitive: false }, qualifiers },
    assessment: { reviewStatus: "verified", answerLeakageReviewed: true, subjectType: "term", valueType: "meaning",
      evidenceIds: [`meaning-check:${relation}:${sense}:${term.id}:${term.id}`],
      scope: { text: "Compare the defining meaning in this art terminology sense, not every feature or process that can occur in a work.", qualifierKeys: ["sense"] } },
  }));
  return { concepts, evidence };
}
