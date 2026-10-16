import type { Concept } from "../../src/quizEngine/conceptTypes";
import type { SemanticEvidence } from "../../src/quizEngine/assessmentTypes";
import { pilotReview } from "./authoring";
import { definitionWording } from "../artContent/learnerWording";

// The distinction is between defining operations, not mutually exclusive
// techniques within an artwork. A single sculpture can use all four processes.
export const sculpturePilotTerms = [
  { id: "carving", term: "Carving", definition: "Removing material from a solid mass to produce a form." },
  { id: "modelling", term: "Modelling", aliases: ["Modeling"], definition: "Building up and shaping a soft material such as clay." },
  { id: "casting", term: "Casting", definition: "Filling a mould with a material that sets to reproduce its shape." },
  { id: "assembling", term: "Assembling", aliases: ["Assemblage"], definition: "Joining separate objects or materials into a three-dimensional work." },
] as const;
const relation = "definition_of_sculpture_technique";
const qualifiers = { sense: "defining-sculptural-operation" };
// Individually reviewed meaning contrasts, not a rule that different term IDs
// imply incompatibility. Adding another term does NOT authorize new negatives.
const definitionContrasts = [
  ["carving", "modelling", "Subtractive removal versus building and shaping a soft material"],
  ["carving", "casting", "Removing from an existing mass versus filling a mould"],
  ["carving", "assembling", "Removing material versus joining separate components"],
  ["modelling", "casting", "Directly building/shaping soft material versus reproducing the shape of a mould"],
  ["modelling", "assembling", "Shaping malleable material versus combining separate objects/materials"],
  ["casting", "assembling", "Reproducing a mould's shape versus joining separate components"],
] as const;
const definitionEvidence = (subject: string, value: string, verdict: "valid" | "invalid", rationale: string): SemanticEvidence => ({
  ...pilotReview, id: `source-check:sculpture-operation:${subject}:${value}`, kind: "assertion",
  predicateId: relation, qualifiers, subjectId: `technique:${subject}`, valueId: `meaning:sculpture-operation:${value}`, verdict,
  sourceUrl: "https://www.nga.gov/educational-resources/explore-basics-sculpture",
  locator: `Sections Carving, Modeling, Molding and casting, Assemblage. Reviewed defining-meaning comparison: ${rationale}. Not an assertion that techniques cannot coexist in a work.`,
});
export const terminologyPilotEvidence: readonly SemanticEvidence[] = [
  ...sculpturePilotTerms.map(term => definitionEvidence(term.id, term.id, "valid", "Positive paraphrase of this named guide section")),
  ...definitionContrasts.flatMap(([left, right, rationale]) => [definitionEvidence(left, right, "invalid", rationale), definitionEvidence(right, left, "invalid", rationale)]),
];
export const terminologyPilotConcepts: readonly Concept[] = sculpturePilotTerms.map(term => definitionWording({
  id: `art_sculpture_l5_p1_${term.id}`, topicId: "art", subtopicId: "sculpture", levelId: "l5", partId: "p1",
  subject: term.term, object: term.definition, relation, answerKind: "long", difficulty: 1, introducedIn: "A",
  semantic: { subject: { id: `technique:${term.id}`, entityType: "term", caseSensitive: false,
    aliases: "aliases" in term ? term.aliases : [] }, value: { id: `meaning:sculpture-operation:${term.id}`, entityType: "meaning", caseSensitive: false }, qualifiers },
  assessment: { reviewStatus: "verified", answerLeakageReviewed: true, subjectType: "term", valueType: "meaning",
    evidenceIds: [`source-check:sculpture-operation:${term.id}:${term.id}`],
    scope: { text: "Definitions in the National Gallery of Art's technique guide; distinguish the defining operation, not all processes used in a work.", qualifierKeys: ["sense"] } },
}, term.id));
