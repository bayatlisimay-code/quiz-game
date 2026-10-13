import type { Concept, Difficulty } from "./conceptTypes";

export type AuthoredConcept = Omit<Concept, "difficulty" | "answerKind" | "introducedIn"> & { difficulty: number; answerKind: string; introducedIn?: string };
export type AuthoredConceptSet = { id: string; concepts: readonly AuthoredConcept[] };
export type RegistryIssue = { code: string; message: string; conceptId?: string; setId?: string; severity: "error" | "review" };
// These existing sets consistently encode curriculum rank (difficulty=level),
// not a 1–5 challenge rating. Preserve provenance without inventing a conversion.
// Future sets must explicitly declare their contract; this list never auto-expands.
export const legacyRankSets: ReadonlySet<string> = new Set([
  "art_architecture_l1_p1",
  "art_architecture_l1_p2",
  "art_architecture_l1_p4",
  "art_architecture_l2_p1",
  "art_architecture_l2_p2",
  "art_architecture_l2_p4",
  "art_architecture_l3_p1",
  "art_architecture_l3_p2",
  "art_architecture_l3_p4",
  "art_architecture_l4_p1",
  "art_architecture_l4_p2",
  "art_architecture_l4_p4",
  "art_architecture_l5_p1",
  "art_architecture_l5_p2",
  "art_architecture_l5_p4",
  "art_architecture_l6_p1",
  "art_architecture_l6_p2",
  "art_architecture_l6_p4",
  "art_architecture_l7_p1",
  "art_architecture_l7_p2",
  "art_architecture_l7_p4",
  "art_architecture_l8_p1",
  "art_architecture_l8_p2",
  "art_architecture_l8_p4",
  "art_architecture_l9_p1",
  "art_architecture_l9_p2",
  "art_architecture_l9_p4",
  "art_sculpture_l1_p1",
  "art_sculpture_l1_p2",
  "art_sculpture_l1_p4",
  "art_sculpture_l2_p1",
  "art_sculpture_l2_p2",
  "art_sculpture_l2_p4",
  "art_sculpture_l3_p1",
  "art_sculpture_l3_p2",
  "art_sculpture_l3_p4",
  "art_sculpture_l4_p1",
  "art_sculpture_l4_p2",
  "art_sculpture_l4_p4",
  "art_sculpture_l5_p1",
  "art_sculpture_l5_p2",
  "art_sculpture_l5_p4",
  "art_sculpture_l6_p1",
  "art_sculpture_l6_p2",
  "art_sculpture_l6_p4",
  "art_sculpture_l7_p1",
  "art_sculpture_l7_p2",
  "art_sculpture_l7_p4",
  "art_sculpture_l8_p1",
  "art_sculpture_l8_p2",
  "art_sculpture_l8_p4",
  "art_sculpture_l9_p1",
  "art_sculpture_l9_p2",
  "art_sculpture_l9_p4",
  "art_theatre_l1_p1",
  "art_theatre_l1_p2",
  "art_theatre_l1_p4",
  "art_theatre_l2_p1",
  "art_theatre_l2_p2",
  "art_theatre_l2_p4",
  "art_theatre_l3_p1",
  "art_theatre_l3_p2",
  "art_theatre_l3_p4",
  "art_theatre_l4_p1",
  "art_theatre_l4_p2",
  "art_theatre_l4_p4",
  "art_theatre_l5_p1",
  "art_theatre_l5_p2",
  "art_theatre_l5_p4",
  "art_theatre_l6_p1",
  "art_theatre_l6_p2",
  "art_theatre_l6_p4",
  "art_theatre_l7_p1",
  "art_theatre_l7_p2",
  "art_theatre_l7_p4",
  "art_theatre_l8_p1",
  "art_theatre_l8_p2",
  "art_theatre_l8_p4",
  "art_theatre_l9_p1",
  "art_theatre_l9_p2",
  "art_theatre_l9_p4",
]);
function isIntroductionStage(value: string | undefined): value is Concept["introducedIn"] { return value === undefined || value === "A" || value === "B" || value === "C"; }
export function isDifficulty(value: number): value is Difficulty { return Number.isInteger(value) && value >= 1 && value <= 5; }
export function adaptConceptSets(authored: Readonly<Record<string, AuthoredConceptSet>>) {
  const sets: Record<string, { id: string; concepts: Concept[] }> = {};
  const issues: RegistryIssue[] = [];
  const seen = new Set<string>();
  for (const [key, set] of Object.entries(authored)) {
    const aligned = /^.+_l[1-9]\d*_p[1-9]\d*$/.test(key) && set.id === key;
    if (!aligned) issues.push({ severity: "error", code: "set-alignment", setId: key, message: `Registry key ${key} disagrees with set ${set.id}` });
    const concepts: Concept[] = [];
    for (const raw of set.concepts) {
      const issue = (code: string, message: string) => issues.push({ severity: "error", code, message, conceptId: raw.id, setId: key });
      if (seen.has(raw.id)) issue("duplicate-concept-id", "Duplicate concept ID in authored registry");
      seen.add(raw.id);
      if (!aligned || `${raw.topicId}_${raw.subtopicId}_${raw.levelId}_${raw.partId}` !== key) {
        issue("record-alignment", "Record scope disagrees with registry position"); continue;
      }
      if (raw.answerKind !== "short" && raw.answerKind !== "long") { issue("invalid-answer-kind", "Expected short or long"); continue; }
      if (!isIntroductionStage(raw.introducedIn)) { issue("invalid-introduction-stage", "Expected A, B or C"); continue; }
      const record: Omit<Concept, "difficulty"> & { difficulty: number } = { ...raw, answerKind: raw.answerKind, introducedIn: raw.introducedIn };
      if (legacyRankSets.has(key)) {
        if (raw.difficulty !== Number(raw.levelId.slice(1)) || !Number.isInteger(raw.difficulty) || raw.difficulty < 1 || raw.difficulty > 9) {
          issue("invalid-legacy-rank", "Legacy curriculum rank must equal its declared level (1–9)"); continue;
        }
        const { difficulty: rank, ...rest } = record;
        concepts.push({ ...rest, legacyCurriculumRank: rank });
        issues.push({ severity: "review", code: "unknown-challenge-difficulty", conceptId: raw.id, setId: key,
          message: "Legacy curriculum rank retained; challenge difficulty requires an explicit authoring decision" });
      } else if (!isDifficulty(raw.difficulty)) issue("invalid-difficulty", "Challenge difficulty must be an integer from 1 to 5");
      else concepts.push({ ...record, difficulty: raw.difficulty });
    }
    sets[key] = { id: key, concepts };
  }
  return { sets, issues };
}
// Caller supplies discovered populated source sets (filesystem discovery belongs
// in authoring tools/tests, not the RN runtime). Scope + record IDs identify them.
export function findOrphanedSets(authored: readonly AuthoredConceptSet[], registry: Readonly<Record<string, AuthoredConceptSet>>): RegistryIssue[] {
  const duplicates: RegistryIssue[] = [];
  const seen = new Set<string>();
  for (const set of authored) for (const record of set.concepts) {
    if (seen.has(record.id)) duplicates.push({ severity: "error", code: "duplicate-authored-id", conceptId: record.id, setId: set.id, message: "Duplicate concept ID across authored source files" });
    seen.add(record.id);
  }
  const orphans: RegistryIssue[] = authored.filter((set) => {
    const registered = registry[set.id];
    const ids = new Set(registered?.concepts.map((c) => c.id));
    return set.concepts.length > 0 && (!registered || set.concepts.some((c) => !ids.has(c.id)));
  }).map((set) => ({
    severity: "error", code: "orphaned-authored-set", setId: set.id, message: "Populated authored records are missing from the registry",
  }));
  return [...duplicates, ...orphans];
}
