import { progressionTermLabels } from "./progressionTermLabels";
import type { Concept } from "../../src/quizEngine/conceptTypes";
import type { SemanticEvidence } from "../../src/quizEngine/assessmentTypes";
import { authorDefinitions, type DefinitionEntry, type MeaningContrast } from "./definitions";

export type TermAddition = DefinitionEntry & Readonly<{ matching?: string }>;
export type DefinitionPool = Readonly<{ concepts: readonly Concept[]; evidence: readonly SemanticEvidence[] }>;
/** Serializes an AUTHOR-REVIEWED list of meaning pairs. Never infers a negative
 * from unequal names, missing membership, or an unlisted new term. */
export function expandTerms(base: DefinitionPool, additions: readonly TermAddition[], reviewedPairs: readonly (readonly [string, string, string])[]) {
  const first = base.concepts[0];
  if (!first || typeof first.semantic?.qualifiers?.sense !== "string") throw new Error("Expected a definition pool with an explicit sense");
  const prefix = `art_${first.subtopicId}_${first.levelId}_${first.partId}_`;
  const old = new Map(base.concepts.map(c => [c.id.slice(prefix.length), c]));
  const entries: DefinitionEntry[] = base.concepts.map(c => {
    const source = base.evidence.find(e => c.assessment?.evidenceIds.includes(e.id));
    if (!source) throw new Error(`Missing original definition provenance: ${c.id}`);
    return { id: c.id.slice(prefix.length), term: c.subject, definition: c.object, url: source.sourceUrl, locator: source.locator };
  });
  const meanings = [...entries,...additions];
  const contrasts: MeaningContrast[] = reviewedPairs.map(([a,b,rationale]) => [a,b, `${rationale} Compared source meanings: ${meanings.find(t=>t.id===a)?.definition} / ${meanings.find(t=>t.id===b)?.definition}`]);
  const generated = authorDefinitions(first.subtopicId as "painting" | "sculpture", first.levelId, first.partId as "p1" | "p2" | "p4", first.relation, first.semantic.qualifiers.sense, [...entries,...additions], contrasts);
  const remap = new Map(entries.flatMap(entry => {
    const c = old.get(entry.id)!;
    return [[`term:${first.semantic!.qualifiers!.sense}:${entry.id}`, c.semantic!.subject!.id!], [`meaning:${first.semantic!.qualifiers!.sense}:${entry.id}`, c.semantic!.value!.id!]];
  }));
  const ids = new Set(base.concepts.map(c => c.id));
  const concepts = generated.concepts.filter(c => !ids.has(c.id)).map(c => {
    const entry = additions.find(a => c.id === prefix+a.id)!;
    const evidenceIds = c.assessment!.evidenceIds;
    return { ...c, learning: { reinforcementPriority: 2, rationale: "Additional technical vocabulary building on the preserved foundation terms; reinforce foundational meanings first." }, assessment: { ...c.assessment!, presentation: { ...c.assessment!.presentation, answer: {
      reviewStatus: "verified" as const, reviewedBy: "Codex — source and editorial comparison (not independent human approval)", reviewedAt: "2026-10-15",
      text: entry.definition, matchingText: entry.matching ?? progressionTermLabels[entry.id] ?? entry.definition, canonicalText: entry.definition, valueId: c.semantic!.value!.id,
      evidenceIds, rationale: "Concise authoring checked against the cited terminology sense and explicitly reviewed contrasts. No generated summarization or added typed aliases.",
    } } } };
  });
  const evidence = generated.evidence.filter(e => e.kind === "assertion" && (e.verdict === "invalid" || !entries.some(t => e.subjectId === `term:${first.semantic!.qualifiers!.sense}:${t.id}`))).map(e => e.kind === "assertion" ? ({
    ...e, reviewedAt: "2026-10-15", subjectId: remap.get(e.subjectId) ?? e.subjectId, valueId: remap.get(e.valueId) ?? e.valueId,
  }) : e);
  return { concepts, evidence };
}
