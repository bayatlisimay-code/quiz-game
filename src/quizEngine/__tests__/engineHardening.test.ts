import { readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { AUTHORED_CONCEPT_SETS, CONCEPT_SETS, REGISTRATION_ISSUES } from "../../../data/conceptSets";
import { buildQuizResult, quizComposition, quizCompositionViolations } from "../buildQuiz";
import type { Concept } from "../conceptTypes";
import { adaptConceptSets, findOrphanedSets, isDifficulty } from "../contentRegistry";
import type { AuthoredConceptSet } from "../contentRegistry";
import { getCurriculumPool } from "../curriculumPool";
import { buildExercise, getExerciseCapabilities, generateMatchingExercise } from "../exerciseFactory";
import { gradeMatchingAssignment, isTypedAnswerCorrect } from "../answerValidation";
import { createSemanticContext } from "../semanticValidation";
import { legacyRelationPolicy } from "../relationPolicies";
import { certifiedFixtureContext } from "../testSupport/certifiedFixtures";
import { registeredConcepts, registeredSemanticContext } from "../contentSnapshot";
import { exerciseValidityViolations } from "../generationCoverage";

function fact(i: number, changes: Partial<Concept> = {}): Concept {
  return { id: `fact-${i}`, topicId: "science", subtopicId: "fixture", levelId: "l1", partId: "p1",
    subject: `Subject ${i}`, object: `Value ${i}`, relation: "created_in_decade", answerKind: "short", difficulty: 1, introducedIn: i < 6 ? "A" : i < 9 ? "B" : "C", learning: { reinforcementPriority: 3, rationale: "Fixture review priority" }, ...changes };
}
const safe = Array.from({ length: 11 }, (_, i) => fact(i));
const safeContext = certifiedFixtureContext(safe);

test.each(["A", "B", "C"] as const)("%s has exactly eight exercises and its fixed quotas across attempts", (variant) => {
  for (let attempt = 1; attempt <= 20; attempt++) {
    const request = { concepts: safe, context: safeContext, variant, seed: `contract-${variant}-${attempt}` };
    const result = buildQuizResult(request);
    expect(result.status).toBe("ready");
    expect(result).toEqual(buildQuizResult(request));
    expect(quizCompositionViolations(result.exercises, variant)).toEqual([]);
    expect(result.exercises.flatMap((q) => exerciseValidityViolations(q, safe, safeContext))).toEqual([]);
    for (const [type, count] of Object.entries(quizComposition(variant))) expect(result.exercises.filter((q) => q.type === type)).toHaveLength(count);
  }
});

test.each(["mcq", "true_false", "fill_blank"] as const)("missing %s cannot be replaced by another form", (type) => {
  const policy = { ...safeContext.policies.created_in_decade,
    allowedExerciseTypes: safeContext.policies.created_in_decade.allowedExerciseTypes.filter((t) => t !== type) };
  const context = createSemanticContext(safe, { policies: { created_in_decade: policy } });
  const result = buildQuizResult({ concepts: safe, context, variant: "A", seed: type });
  expect(result).toMatchObject({ status: "insufficient-content", exercises: [] });
  expect(result.diagnostics.shortages).toContainEqual(expect.objectContaining({ code: "missing-form", form: type }));
  expect(buildExercise(safe[0], safe, 3, type, context)).toBeNull();
});

test("missing False evidence cannot produce True-only questions, even for permissive legacy flags", () => {
  const records = safe.map((c) => ({ ...c, relation: "genre_of_movie" }));
  const context = createSemanticContext(records, { policies: { genre_of_movie: { ...legacyRelationPolicy,
    requiresValidatedNegative: false, validateMatching: false } } });
  const caps = getExerciseCapabilities(records[0], records, context);
  expect(caps.forms.true.available).toBe(true);
  expect(caps.forms.false.available).toBe(false);
  expect(caps.forms.mcq.available).toBe(false);
  expect(caps.forms.blank_options.available).toBe(false);
  expect(buildExercise(records[0], records, 3, "true_false", context)).toBeNull();
  expect(buildQuizResult({ concepts: records, context, variant: "A", seed: "no-false" })).toMatchObject({ status: "insufficient-content", exercises: [] });
  expect(generateMatchingExercise(records, "unknown", context).status).toBe("unavailable");
});

test("missing matching cannot be marked ready even with all seven ordinary capabilities", () => {
  const context = createSemanticContext(safe, { policies: { created_in_decade: { ...safeContext.policies.created_in_decade, allowMatching: false } } });
  const result = buildQuizResult({ concepts: safe, context, variant: "A", seed: "no-match" });
  expect(result).toMatchObject({ status: "insufficient-content", exercises: [] });
  expect(result.diagnostics.shortages).toContainEqual(expect.objectContaining({ code: "matching" }));
});

test("joint planning can reject a safe matching group that starves ordinary quotas and use another", () => {
  // Four typed-only facts form a certified matching group but cannot all fit
  // into the two blank slots. The other group supports the full composition.
  const typed = Array.from({ length: 6 }, (_, i) => fact(i + 10, { relation: "definition_of_film_term", partId: "p2", introducedIn: "A" }));
  const records = [...typed, ...safe];
  const closed = certifiedFixtureContext(records);
  const context = createSemanticContext(records, { policies: { ...closed.policies,
    definition_of_film_term: { ...closed.policies.definition_of_film_term,
      allowedExerciseTypes: ["fill_blank"], allowOptionsBlank: false } } });
  for (let i = 0; i < 20; i++) {
    const result = buildQuizResult({ concepts: records, context, variant: "A", mode: "review", seed: `joint-${i}` });
    expect(result.status).toBe("ready");
    expect(quizCompositionViolations(result.exercises, "A")).toEqual([]);
    const matching = result.exercises.find((q) => q.type === "matching");
    expect(matching?.pairs.every((p) => safe.some((c) => c.id === p.id))).toBe(true);
  }
});

test("joint planner agrees with exhaustive feasibility on small heterogeneous pools", () => {
  const types = ["mcq", "true_false", "fill_blank"] as const;
  // A four-subject all-form matching group plus two uniquely related specialists.
  // Brute force all seven slots checks that search does not report false shortage.
  for (let mask = 1; mask < 8; mask++) {
    const records = safe.slice(0, 6).map((c, i) => i < 4 ? c : { ...c, relation: i === 4 ? "painted_by" : "designed_by" });
    const closed = certifiedFixtureContext(records);
    const policies = { ...closed.policies };
    for (const relation of ["painted_by", "designed_by"]) policies[relation] = {
      ...policies[relation], semanticStrategy: "explicit-evidence", strategyMetadata: { invalidAnswerIds: [] },
      allowTypedBlank: true, allowedExerciseTypes: types.filter((_, bit) => !!(mask & (1 << bit))),
    };
    // Specialists supply explicit negative certificates and a complete typed set.
    const augmented = records.map((c) => c.relation === "created_in_decade" ? c : { ...c, semantic: {
      value: { id: c.id }, acceptedAnswers: [{ text: c.object, id: c.id }],
      strategyMetadata: { acceptedAnswerSetComplete: true, invalidAnswerIds: records.filter((x) => x.id !== c.id).map((x) => x.id) },
    } });
    const withIds = augmented.map((c) => ({ ...c, semantic: { ...c.semantic, value: { id: c.id } } }));
    const context = createSemanticContext(withIds, { policies });
    const caps = withIds.map((c) => getExerciseCapabilities(c, withIds, context));
    for (const variant of ["A", "B", "C"] as const) {
      const slots = types.flatMap((type) => Array.from({ length: quizComposition(variant)[type] }, () => type));
      const used = Array.from({ length: withIds.length }, () => new Set<string>());
      const feasible = (index: number): boolean => {
        if (index === slots.length) return used.filter((s) => s.size).length === 6 && used.filter(s=>s.size === 2).every(s=>s.has("true_false")) && used.slice(0, 4).every((s) => s.size > 0);
        const type = slots[index];
        for (let i = 0; i < withIds.length; i++) {
          const supported = type === "mcq" ? caps[i].forms.mcq.available : type === "true_false" ? caps[i].forms.true.available && caps[i].forms.false.available
            : caps[i].forms.blank_options.available || caps[i].forms.blank_typed.available;
          if (!supported || used[i].size === 2 || used[i].has(type)) continue;
          used[i].add(type); if (feasible(index + 1)) return true; used[i].delete(type);
        }
        return false;
      };
      expect(buildQuizResult({ concepts: withIds, context, variant, mode: "review", seed: `oracle-${mask}-${variant}` }).status === "ready").toBe(feasible(0));
    }
  }
});

test("actual Inception genre distractors remain unknown, never certified wrong", () => {
  const movies = registeredConcepts().filter((c) => c.relation === "genre_of_movie");
  const inception = movies.find((c) => c.subject === "Inception")!;
  expect(inception).toBeDefined();
  for (const answer of ["Crime", "Thriller"]) {
    const alternative = movies.find((c) => c.object === answer)!;
    expect(registeredSemanticContext.evaluate(inception, alternative).verdict).not.toBe("invalid");
  }
  for (const type of ["mcq", "fill_blank", "true_false"] as const) expect(buildExercise(inception, movies, 3, type, registeredSemanticContext)).toBeNull();
});

test("actual Jaws/Psycho unknown cross-pairings cannot enter matching", () => {
  const movies = registeredConcepts().filter((c) => c.relation === "example_of_genre" && ["Action", "Adventure", "Thriller", "Horror"].includes(c.subject));
  expect(movies).toHaveLength(4);
  expect(generateMatchingExercise(movies, "art_movies_l3_p2_quizA_attempt1", registeredSemanticContext).status).toBe("unavailable");
});

test("declared valid genre cross-pairings are accepted; certified incompatible assignments are rejected", () => {
  // Explicit evidence fixture tests the grader; it does not qualify Art records.
  const values = ["Thriller", "Horror", "Action", "Adventure"];
  const records = ["Jaws", "Psycho", "Fixture action work", "Fixture adventure work"].map((subject, i) => fact(i, {
    relation: "genre_of_movie", subject, object: values[i], semantic: {
      value: { id: values[i] }, acceptedAnswers: i < 2 ? [{ text: values[i ^ 1], id: values[i ^ 1] }] : [],
      strategyMetadata: { invalidAnswerIds: values.filter((_, j) => i < 2 ? j >= 2 : j !== i) },
    },
  }));
  const context = createSemanticContext(records, { policies: { genre_of_movie: { ...legacyRelationPolicy, semanticStrategy: "explicit-evidence" } } });
  const result = generateMatchingExercise(records, "genre-evidence", context);
  expect(result.status).toBe("generated");
  if (result.status !== "generated") throw new Error("Expected evidence-backed matching");
  const pairs = result.exercise.pairs;
  const alternate = Object.fromEntries(pairs.map((left, i) => [i, pairs.findIndex((right) =>
    left.right === "Thriller" ? right.right === "Horror" : left.right === "Horror" ? right.right === "Thriller" : right.right === left.right)]));
  expect(gradeMatchingAssignment(pairs, pairs, alternate)).toBe(true);
  const invalid = { ...alternate, 0: (alternate[0] + 1) % 4 };
  expect(gradeMatchingAssignment(pairs, pairs, invalid)).toBe(false);
});

test("duplicate answer values stay interchangeable without duplicate MCQ cards", () => {
  const records = [...safe, fact(8, { object: safe[1].object })];
  const context = certifiedFixtureContext(records);
  for (const record of records) {
    const exercise = buildExercise(record, records, 3, "mcq", context);
    expect(exercise?.type).toBe("mcq");
    if (exercise?.type === "mcq") expect(new Set(exercise.options).size).toBe(exercise.options.length);
  }
});

const scope = (subtopicId: string, levelId: string, partId: string) => ({ topicId: "art", subtopicId, levelId, partId });
test.each(["literature", "painting", "sculpture", "architecture", "music", "theatre", "design", "movies"])("%s review pools reuse exact teaching facts without difficulty gates", (subtopic) => {
  for (let level = 1; level <= 9; level++) {
    const teaching = (part: string) => getCurriculumPool(CONCEPT_SETS, scope(subtopic, `l${level}`, part));
    expect(teaching("p3").map((c) => c.id)).toEqual([...teaching("p1"), ...teaching("p2")].map((c) => c.id));
    expect(teaching("p5").map((c) => c.id)).toEqual([...teaching("p1"), ...teaching("p2"), ...teaching("p4")].map((c) => c.id));
    expect(teaching("p3")).toHaveLength(36);
    expect(teaching("p5")).toHaveLength(54);
  }
  const cumulative = getCurriculumPool(CONCEPT_SETS, scope(subtopic, "l10", "p5"));
  expect(cumulative).toHaveLength(486);
  expect(new Set(cumulative.map((c) => c.id)).size).toBe(486);
  expect(cumulative.every((c) => c.levelId !== "l10" && ["p1", "p2", "p4"].includes(c.partId))).toBe(true);
});

test("registry corrections restore all 3,888 authored records, including the omitted 108", () => {
  expect(REGISTRATION_ISSUES.filter((issue) => issue.severity === "error")).toEqual([]);
  expect(registeredConcepts()).toHaveLength(3888);
  expect(new Set(registeredConcepts().map((c) => c.id)).size).toBe(3888);
  for (const [subtopic, level] of [["literature", "l5"], ["movies", "l7"]]) for (const part of ["p1", "p2", "p4"]) {
    const set = CONCEPT_SETS[`art_${subtopic}_${level}_${part}`];
    expect(set.concepts).toHaveLength(18);
    expect(set.concepts.every((c) => c.levelId === level && c.subtopicId === subtopic && c.partId === part)).toBe(true);
  }
});

function discover(directory: string): AuthoredConceptSet[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry): AuthoredConceptSet[] => {
    const filename = join(directory, entry.name);
    if (entry.isDirectory()) return discover(filename);
    if (entry.name !== "concepts.ts") return [];
    // Jest loads authored TypeScript modules through its configured transformer.
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const loaded: { default: AuthoredConceptSet } = require(filename);
    return loaded.default.concepts.length ? [loaded.default] : [];
  });
}
test("every populated authored source set is registered (filesystem orphan detection)", () => {
  const authored = discover(resolve(__dirname, "../../../data/concepts"));
  expect(findOrphanedSets(authored, AUTHORED_CONCEPT_SETS)).toEqual([]);
  expect(findOrphanedSets([{ id: "orphan", concepts: [{ ...fact(999), difficulty: 1 }] }], AUTHORED_CONCEPT_SETS)).toContainEqual(expect.objectContaining({ code: "orphaned-authored-set" }));
});

test("registry validation rejects scope mismatch, set aliases and duplicate IDs", () => {
  const raw = { ...fact(0), difficulty: 1 };
  const key = "science_fixture_l1_p1";
  expect(adaptConceptSets({ [key]: { id: "wrong", concepts: [raw] } }).issues).toContainEqual(expect.objectContaining({ code: "set-alignment" }));
  expect(adaptConceptSets({ [key]: { id: key, concepts: [{ ...raw, levelId: "l2" }] } }).issues).toContainEqual(expect.objectContaining({ code: "record-alignment" }));
  expect(adaptConceptSets({ [key]: { id: key, concepts: [raw, raw] } }).issues).toContainEqual(expect.objectContaining({ code: "duplicate-concept-id" }));
  const duplicateSet = { concepts: [fact(0), fact(0)] };
  expect(getCurriculumPool({ [key]: duplicateSet }, { ...scope("fixture", "l1", "p1"), topicId: "science" })).toHaveLength(1);
});

test("difficulty remains 1–5 challenge rating; legacy ranks are preserved, not clamped", () => {
  for (const invalid of [0, -1, 6, 9, 2.5, NaN, Infinity]) {
    expect(isDifficulty(invalid)).toBe(false);
    const key = "science_fixture_l1_p1";
    const result = adaptConceptSets({ [key]: { id: key, concepts: [{ ...fact(0), difficulty: invalid }] } });
    expect(result.issues).toContainEqual(expect.objectContaining({ code: "invalid-difficulty" }));
    expect(result.sets[key].concepts).toHaveLength(0);
  }
  const key = "art_sculpture_l6_p1";
  const raw = AUTHORED_CONCEPT_SETS[key].concepts[0];
  expect(raw.difficulty).toBe(6);
  expect(CONCEPT_SETS[key].concepts[0]).toMatchObject({ id: raw.id, legacyCurriculumRank: 6 });
  expect(CONCEPT_SETS[key].concepts[0].difficulty).toBeUndefined();
  expect(adaptConceptSets({ [key]: { id: key, concepts: [{ ...raw, difficulty: 5 }] } }).issues).toContainEqual(expect.objectContaining({ code: "invalid-legacy-rank" }));
  expect(registeredConcepts().every((c) => c.difficulty === undefined || isDifficulty(c.difficulty))).toBe(true);
});

test("normalization accepts declared forms without accepting nearby numeric or spelling values", () => {
  const base = { type: "fill_blank" as const, conceptId: "date", prompt: "Date?", answerText: "1950s" };
  expect(isTypedAnswerCorrect(base, "1960s")).toBe(false);
  expect(isTypedAnswerCorrect(base, " 1950s ")).toBe(true);
  expect(isTypedAnswerCorrect({ ...base, answerText: "René Descartes", acceptedAnswerForms: [{ text: "René Descartes", caseSensitive: false }] }, "  RENE\u0301   DESCARTES ")).toBe(true);
});


test("a bounded search reports undetermined feasibility rather than claiming a proven shortage", () => {
  const result = buildQuizResult({ concepts: safe, context: safeContext, variant: "A", seed: "bounded", searchNodeLimit: 1 });
  expect(result).toMatchObject({ status: "insufficient-content", exercises: [] });
  expect(result.diagnostics.shortages).toContainEqual(expect.objectContaining({ code: "search-limit" }));
});

test("four safe facts report an explicit six-fact shortage", () => {
  const records = safe.slice(0, 4), context = certifiedFixtureContext(records);
  for (const variant of ["A", "B", "C"] as const) {
    const result = buildQuizResult({ concepts: records, context, variant, seed: "thin" });
    expect(result.status).toBe("insufficient-content");
    expect(result.exercises).toEqual([]);
    expect(result.diagnostics.shortages.some(s=>s.code === "distinct-facts")).toBe(true);
  }
});


test("single-exercise requests never substitute True/False for matching or manufacture two-option MCQ", () => {
  expect(buildExercise(safe[0], safe, 3, "matching", safeContext)).toBeNull();
  expect(buildExercise(safe[0], safe, 2, "mcq", safeContext)).toBeNull();
});

test("authoring discovery rejects duplicate IDs even when an extra source reuses a registered set ID", () => {
  const set = Object.values(AUTHORED_CONCEPT_SETS).find((s) => s.concepts.length)!;
  expect(findOrphanedSets([set, set], AUTHORED_CONCEPT_SETS)).toContainEqual(expect.objectContaining({ code: "duplicate-authored-id" }));
});
