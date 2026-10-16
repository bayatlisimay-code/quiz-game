import { certifiedFixtureContext } from "../testSupport/certifiedFixtures";
import type { Concept } from "../conceptTypes";
import { buildQuizResult, prepareQuizSession } from "../buildQuiz";
import { registeredConcepts, registeredSemanticContext } from "../contentSnapshot";
import { validateContent } from "../contentValidation";
import {
  assessableForms, buildExercise, generateExercise, generateMatchingExercise,
  getExerciseCapabilities, isMatchingPairCorrect,
} from "../exerciseFactory";
import {
  blockedRelationPolicy, designCreationDecadePolicy, getRelationPolicy, legacyRelationPolicy,
  protectedRelationIds, legacyRelationPolicies as relationPolicies,
} from "../relationPolicies";
import { createSemanticContext, equivalentAnswers, semanticStrategies } from "../semanticValidation";
import { deferredRelationSemantics } from "../templates";

const fact = (id: string, subject: string, object: string, overrides: Partial<Concept> = {}): Concept => ({
  id, subject, object, relation: "created_in_decade", topicId: "science", subtopicId: "test", levelId: "l1", partId: "p1",
  answerKind: "short", difficulty: 1, introducedIn: "A", ...overrides,
});
const classification = { ...designCreationDecadePolicy, strategyMetadata: { scheme: "disjoint-example", exclusive: true, values: ["A", "B", "C", "D", "E"] } };
const pool = ["A", "B", "C", "D", "E"].map((answer, i) => fact(`c${i}`, `Entity ${i}`, answer));
const context = () => createSemanticContext(pool, { policies: { created_in_decade: classification } });

test("all registered relations have intentional policies; original deferrals are a subset, never a catalogue size limit", () => {
  const records = registeredConcepts();
  expect(records.length).toBeGreaterThan(3000);
  expect(new Set(records.map((r) => r.relation)).size).toBeGreaterThan(100);
  expect(validateContent(records, relationPolicies).filter((i) => i.severity === "error")).toEqual([]);
  for (const relation of Object.keys(deferredRelationSemantics)) {
    expect(protectedRelationIds).toContain(relation);
    expect(getRelationPolicy(relation, relationPolicies)).toMatchObject({ status: "blocked-pending-metadata", requiresValidatedNegative: true, validateMatching: true });
  }
});

test("unknown future relations fail authoring validation and remain unavailable at runtime", () => {
  const unknown = fact("new", "Entity", "Answer", { relation: "future_sports_relation" });
  expect(validateContent([unknown], relationPolicies)).toEqual(expect.arrayContaining([expect.objectContaining({ severity: "error", code: "missing-policy" })]));
  expect(buildQuizResult({ concepts: [unknown], variant: "A", seed: "new" })).toMatchObject({ status: "insufficient-content", exercises: [] });
  for (const relation of ["__proto__", "toString", "future_relation"]) expect(getRelationPolicy(relation)).toBe(blockedRelationPolicy);
});

test("CI rejects unknown strategies, missing required metadata and duplicate authored IDs", () => {
  expect(validateContent(pool, { created_in_decade: { ...classification, semanticStrategy: "not-registered" } }).some((i) => i.code === "unknown-strategy")).toBe(true);
  expect(validateContent(pool, { created_in_decade: { ...classification, strategyMetadata: {} } }).some((i) => i.code === "missing-strategy-metadata")).toBe(true);
  expect(validateContent([pool[0], pool[0]], { created_in_decade: classification }).some((i) => i.code === "duplicate-concept-id")).toBe(true);
  const conflict = { ...pool[0], id: "conflict", object: "B" };
  expect(validateContent([...pool, conflict], { created_in_decade: classification }).some((i) => i.code === "conflicting-exclusive-answers")).toBe(true);
});

test("curriculum scope does not define truth; structured qualifiers do", () => {
  const first = fact("a", "Shared entity", "First", { relation: "main_authors_of_movement" });
  const alternative = { ...first, id: "b", object: "Second", topicId: "history", subtopicId: "other", levelId: "l9", partId: "p5" };
  const qualified = { ...alternative, id: "c", object: "Later answer", semantic: { qualifiers: { period: "later", role: "translator" } } };
  const ctx = createSemanticContext([first, alternative, qualified]);
  expect(ctx.evaluate(first, alternative).verdict).toBe("valid");
  expect(ctx.evaluate(first, qualified).verdict).toBe("unknown");
  expect(ctx.claim(first).key).toBe(ctx.claim(alternative).key);
  expect(ctx.claim(first).key).not.toBe(ctx.claim(qualified).key);
});

test("stable subject/value identities, aliases, case-sensitive symbols, and homonyms work incrementally", () => {
  const stable = fact("a", "Ada Lovelace", "Co", { semantic: { subject: { id: "person:ada", aliases: ["Augusta Ada"] }, value: { id: "element:cobalt", kind: "symbol", aliases: ["Cobalt"] } } });
  const alias = fact("b", "Augusta Ada", "Cobalt");
  const otherPerson = fact("c", "Ada Lovelace", "CO", { semantic: { subject: { id: "person:other-ada" }, value: { kind: "symbol" } } });
  const ctx = createSemanticContext([stable, alias, otherPerson], { policies: relationPolicies });
  expect(ctx.claim(stable).key).toBe(ctx.claim(alias).key);
  expect(ctx.claim(stable).key).not.toBe(ctx.claim(otherPerson).key);
  expect(ctx.evaluate(stable, alias).verdict).toBe("valid");
  expect(equivalentAnswers(ctx.claim(stable).answer, ctx.claim(otherPerson).answer)).toBe(false);
});

test("shared context snapshots are immutable and extensions retain registered truth", () => {
  const input = [fact("a", "Entity", "First")];
  const ctx = createSemanticContext(input);
  input[0].object = "Changed outside snapshot";
  expect(ctx.claims[0].answer.text).toBe("First");
  expect(Object.isFrozen(ctx.claims[0].qualifiers)).toBe(true);
  const extra = fact("b", "Entity", "Second");
  const extended = ctx.withClaims([extra]);
  expect(extended.acceptedAnswers(extra).map((a) => a.text)).toEqual(["First", "Second"]);
  expect(ctx.claims).toHaveLength(1);
  expect(() => extended.withClaims([fact("a", "Entity", "Conflict")])).toThrow("Conflicting semantic snapshot record");
});

test("Renaissance's registered Shakespeare/Cervantes facts remain accepted outside the active pool", () => {
  const shakespeare = fact("a", "renaissance", "William Shakespeare", { relation: "main_authors_of_movement" });
  const cervantes = fact("b", "Other fact", "Miguel de Cervantes", { relation: "main_authors_of_movement" });
  expect(registeredSemanticContext.evaluate(shakespeare, cervantes).verdict).toBe("valid");
  const caps = getExerciseCapabilities(shakespeare, [shakespeare, cervantes], registeredSemanticContext);
  expect(caps.optionCandidates).toHaveLength(0);
  expect(caps.falseCandidates).toHaveLength(0);
  expect(assessableForms(caps)).toEqual([]);
});

test.each([
  ["main_authors_of_movement", "Renaissance", "Shakespeare", "Cervantes"],
  ["definition_of_design_principle", "Balance", "Visual weight", "Stable composition"],
  ["nationality_of_architect", "Example person", "German-American", "American"],
])("%s never turns a stored alternative into a wrong answer, even with conflicting negative evidence", (relation, subject, a, b) => {
  const first = fact("a", subject, a, { relation, semantic: { value: { id: "answer:a" }, strategyMetadata: { invalidAnswerIds: ["answer:b"] } } });
  const second = fact("b", subject, b, { relation, topicId: "history", semantic: { value: { id: "answer:b" } } });
  const ctx = createSemanticContext([first, second], { policies: { [relation]: { ...legacyRelationPolicy, requiresValidatedNegative: true, semanticStrategy: "explicit-evidence" } } });
  expect(ctx.evaluate(first, second).verdict).toBe("valid");
  expect(getExerciseCapabilities(first, [first, second], ctx).falseCandidates).toEqual([]);
});

test("strategies distinguish certified invalidity from unknown without Art-specific engine logic", () => {
  const ctx = context();
  expect(ctx.evaluate(pool[0], pool[1])).toMatchObject({ verdict: "invalid" });
  const outside = fact("outside", "Outside", "F");
  expect(ctx.evaluate(pool[0], outside)).toMatchObject({ verdict: "unknown" });
  expect(ctx.evaluate(pool[0], pool[0])).toMatchObject({ verdict: "valid" });
  const real = registeredConcepts().filter((c) => c.relation === "created_in_decade");
  expect(real.length).toBeGreaterThan(0);
  const a = real[0], b = real.find((c) => c.object !== a.object)!;
  expect(registeredSemanticContext.evaluate(a, b).verdict).toBe("invalid");
});

test("explicit incompatible evidence is reusable for future non-exclusive relations", () => {
  const a = fact("a", "Team", "Player", { relation: "roster", semantic: { strategyMetadata: { invalidAnswerIds: ["person:other"] } } });
  const b = fact("b", "Different team", "Other", { relation: "roster", semantic: { value: { id: "person:other" } } });
  const ctx = createSemanticContext([a, b], { policies: { roster: { ...legacyRelationPolicy, requiresValidatedNegative: true, semanticStrategy: "explicit-evidence" } } });
  expect(ctx.evaluate(a, b).verdict).toBe("invalid");
  expect(ctx.evaluate(a, fact("c", "Unknown", "Unknown", { relation: "roster" })).verdict).toBe("unknown");
});

test("deterministic MCQ generation deduplicates identities, aliases, and visible strings before sampling", () => {
  const duplicate = { ...pool[1], id: "duplicate", subject: "Other entity" };
  const alias = { ...pool[1], id: "alias", subject: "Other alias", object: "Alias B", semantic: { value: { id: "value:b", aliases: ["B"] } } };
  const records = [...pool, duplicate, alias];
  const ctx = createSemanticContext(records, { policies: { created_in_decade: classification } });
  const caps = getExerciseCapabilities(pool[0], records, ctx, 4);
  expect(caps.optionCandidates.filter((c) => c.object === "B")).toHaveLength(1);
  const a = generateExercise(pool[0], caps, "mcq", ctx, "stable", 4);
  expect(generateExercise(pool[0], caps, "mcq", ctx, "stable", 4)).toEqual(a);
  expect(a.status).toBe("generated");
  if (a.status === "generated" && a.exercise.type === "mcq") {
    expect(new Set(a.exercise.options).size).toBe(a.exercise.options.length);
    expect(a.exercise.options[a.exercise.correctIndex]).toBe("A");
  }
});

test("True capability alone cannot be planned, generated, or forced as MCQ fallback", () => {
  const records = pool.map((c) => ({ ...c, relation: "genre_of_movie" }));
  const ctx = createSemanticContext(records, { policies: { genre_of_movie: { ...legacyRelationPolicy, requiresValidatedNegative: true, allowTypedBlank: false } } });
  const caps = getExerciseCapabilities(records[0], records, ctx);
  expect(caps.forms.true.available).toBe(true);
  expect(caps.forms.false.available).toBe(false);
  expect(generateExercise(records[0], caps, "true", ctx, "true").status).toBe("unavailable");
  expect(buildExercise(records[0], records, 3, "mcq", ctx)).toBeNull();
  expect(buildQuizResult({ concepts: records, context: ctx, seed: "blocked", variant: "A" })).toMatchObject({ status: "insufficient-content", exercises: [] });
});

test("replanning is deterministic and reports fewer than six eligible facts instead of recycling them", () => {
  const blocked = fact("blocked", "Open", "Uncertain", { relation: "main_authors_of_movement" });
  const futureStage = fact("future", "Future", "E", { introducedIn: "C" });
  const records = [...pool, blocked, futureStage];
  const ctx = createSemanticContext(records, { policies: { ...relationPolicies, created_in_decade: classification } });
  const request = { concepts: records, context: ctx, seed: "replan", variant: "A" as const };
  const result = buildQuizResult(request);
  expect(result).toEqual(buildQuizResult(request));
  expect(result.status).toBe("insufficient-content");
  expect(result.exercises).toEqual([]);
  expect(result.diagnostics.shortages.some(s=>s.code === "distinct-facts")).toBe(true);
});

test("options-only and typed-only blanks are independent capabilities and explicit UI contracts", () => {
  for (const typed of [false, true]) {
    const ctx = createSemanticContext(pool, { policies: { created_in_decade: { ...classification, allowTypedBlank: typed, allowOptionsBlank: !typed } } });
    const caps = getExerciseCapabilities(pool[0], pool, ctx);
    expect(caps.forms.blank_typed.available).toBe(typed);
    expect(caps.forms.blank_options.available).toBe(!typed);
    const result = generateExercise(pool[0], caps, typed ? "blank_typed" : "blank_options", ctx, "blank");
    expect(result).toMatchObject({ status: "generated", exercise: { type: "fill_blank", allowedInputModes: [typed ? "input" : "options"] } });
    if (result.status === "generated" && result.exercise.type === "fill_blank") expect(!!result.exercise.options).toBe(!typed);
  }
  const long = { ...pool[0], answerKind: "long" as const };
  expect(getExerciseCapabilities(long, pool, context()).forms.blank_typed.available).toBe(false);
});

test("matching excludes indistinguishable RHS cards while legacy identity grading stays compatible", () => {
  for (const relation of ["created_in_decade", "painted_by"]) {
    const records = [pool[0], { ...pool[0], id: "same", subject: "Second A" }, pool[1], pool[2]].map(c => ({ ...c, relation }));
    expect(generateMatchingExercise(records, "duplicate", certifiedFixtureContext(records)).status).toBe("unavailable");
    const extended = [...records, { ...pool[3], relation }];
    const result = generateMatchingExercise(extended, "unique", certifiedFixtureContext(extended));
    expect(result.status).toBe("generated");
    if (result.status === "generated") expect(new Set(result.exercise.pairs.map(p => p.right)).size).toBe(4);
  }
  expect(isMatchingPairCorrect({ left: "Legacy one", right: "A", answerIdentity: "A" }, { left: "Legacy two", right: "A", answerIdentity: "A" })).toBe(true);
});

test("matching enforces permission and rejects unproven cross-pairings", () => {
  const records = pool.map((c) => ({ ...c, relation: "genre_of_movie" }));
  const ctx = createSemanticContext(records, { policies: { genre_of_movie: { ...legacyRelationPolicy, validateMatching: true } } });
  expect(generateMatchingExercise(records, "unknown", ctx).status).toBe("unavailable");
  const denied = createSemanticContext(pool, { policies: { created_in_decade: { ...classification, allowMatching: false } } });
  expect(generateMatchingExercise(pool, "denied", denied).status).toBe("unavailable");
  const protectedRecords = pool.map((c) => ({ ...c, relation: "example_of_technique" }));
  expect(generateMatchingExercise(protectedRecords, "protected", createSemanticContext(protectedRecords)).status).toBe("unavailable");
});

test("accepted alternative matching pairs are represented and graded, not assumed exclusive", () => {
  const records = pool.slice(0, 4).map((c, i) => ({
    ...c, relation: "genre_of_movie", semantic: {
      value: { id: `value:${i}` },
      acceptedAnswers: [{ text: pool[i ^ 1].object, id: `value:${i ^ 1}` }],
      strategyMetadata: { invalidAnswerIds: pool.slice(0, 4).map((_, j) => j).filter((j) => (j < 2) !== (i < 2)).map((j) => `value:${j}`) },
    },
  }));
  const ctx = createSemanticContext(records, { policies: { genre_of_movie: { ...legacyRelationPolicy, requiresValidatedNegative: true, validateMatching: true, semanticStrategy: "explicit-evidence" } } });
  const result = generateMatchingExercise(records, "alternates", ctx);
  expect(result.status).toBe("generated");
  if (result.status === "generated") for (const left of result.exercise.pairs) for (const right of result.exercise.pairs) {
    const original = records.find((c) => c.id === left.id)!;
    const candidate = records.find((c) => c.id === right.id)!;
    expect(isMatchingPairCorrect(left, right)).toBe(ctx.evaluate(original, candidate).verdict === "valid");
  }
});

test("matching with no discriminating pair is unavailable", () => {
  const records = pool.slice(0, 4).map((c) => ({ ...c, object: "A" }));
  const ctx = createSemanticContext(records, { policies: { created_in_decade: classification } });
  expect(generateMatchingExercise(records, "all-identical", ctx).status).toBe("unavailable");
});

test("legacy review status cannot authorize uncertified alternatives or partial quizzes", () => {
  const records = pool.map((c) => ({ ...c, subject: ` ${c.subject} `, object: ` ${c.object} `, relation: "painted_by" }));
  const before = JSON.stringify(records);
  const result = buildQuizResult({ concepts: records, seed: "legacy", variant: "A" });
  expect(result).toMatchObject({ status: "insufficient-content", exercises: [] });
  expect(JSON.stringify(records)).toBe(before);
  expect(Object.keys(semanticStrategies)).toEqual(expect.arrayContaining(["stored-membership", "explicit-evidence", "exclusive-classification"]));
});


test("typed open answers require an explicitly complete accepted set, even with a validated status", () => {
  const record = fact("typed", "Term", "Preferred definition", { relation: "definition_of_film_term", answerKind: "long" });
  const policy = { ...legacyRelationPolicy, status: "semantically-validated" as const, allowTypedBlank: true, allowOptionsBlank: false, requiresValidatedNegative: true };
  const incomplete = createSemanticContext([record], { policies: { definition_of_film_term: policy } });
  expect(getExerciseCapabilities(record, [record], incomplete).forms.blank_typed.available).toBe(false);
  const complete = { ...record, semantic: { acceptedAnswers: [{ text: "Accepted equivalent definition" }], strategyMetadata: { acceptedAnswerSetComplete: true } } };
  const ctx = createSemanticContext([complete], { policies: { definition_of_film_term: policy } });
  const caps = getExerciseCapabilities(complete, [complete], ctx);
  expect(caps.forms.blank_typed.available).toBe(true);
  expect(generateExercise(complete, caps, "blank_typed", ctx, "typed")).toMatchObject({ status: "generated", exercise: { acceptedAnswers: ["Preferred definition", "Accepted equivalent definition"], allowedInputModes: ["input"] } });
});

test("prepared sessions reuse an immutable eligibility snapshot across attempts", () => {
  const records = pool.map((c) => ({ ...c }));
  const ctx = createSemanticContext(records, { policies: { created_in_decade: classification } });
  const session = prepareQuizSession({ concepts: records, context: ctx, variant: "A" });
  const request = { concepts: records, context: ctx, variant: "A" as const, seed: "session", session };
  const before = buildQuizResult(request);
  records[0].object = "Changed after session preparation";
  expect(buildQuizResult(request)).toEqual(before);
  expect(Object.isFrozen(session.eligible[0])).toBe(true);
});

test("case-distinct classifications require explicit identities rather than inheriting legacy case folding", () => {
  const records = [fact("co", "Cobalt", "Co"), fact("carbon-monoxide", "Carbon monoxide", "CO")];
  const policy = { ...classification, strategyMetadata: { scheme: "case-sensitive-symbols", exclusive: true, values: ["Co", "CO"] } };
  expect(validateContent(records, { created_in_decade: policy }).some((issue) => issue.code === "missing-strategy-metadata")).toBe(true);
  const explicit = records.map((record) => ({ ...record, semantic: { value: { kind: "symbol" as const } } }));
  const ctx = createSemanticContext(explicit, { policies: { created_in_decade: policy } });
  expect(validateContent(explicit, { created_in_decade: policy }).filter((issue) => issue.severity === "error")).toEqual([]);
  expect(ctx.evaluate(explicit[0], explicit[1]).verdict).toBe("invalid");
});
