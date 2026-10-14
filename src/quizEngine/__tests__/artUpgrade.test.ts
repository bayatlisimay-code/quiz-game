import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { artCurriculum } from "../../../data/artCurriculum";
import { artRelationDefinitions } from "../../../data/artRelations";
import { createActiveArtSets, approvedArtContent, approvedArtEvidence } from "../../../data/activeArtContent";
import { TOPIC_BY_ID } from "../../../data/catalog";
import { ACTIVE_CONCEPT_SETS, activeSemanticContext, activeRegisteredConcepts, registeredConcepts } from "../contentSnapshot";
import { targetRelationPolicies } from "../relationPolicies";
import { getCurriculumPool } from "../curriculumPool";
import { buildQuizResult, prepareQuizSession, quizCompositionViolations } from "../buildQuiz";
import { buildExercise, generateExercise, generateMatchingExercise, getExerciseCapabilities } from "../exerciseFactory";
import { getAssessmentTemplate, reverseConcept } from "../assessmentTemplates";
import { createSemanticContext } from "../semanticValidation";
import { validateContent } from "../contentValidation";
import { isPermanentlyLockable } from "../matchingSafety";
import { gradeMatchingAssignment, isTypedAnswerCorrect } from "../answerValidation";
import { catalogCoverageCases, measureGenerationCoverage } from "../generationCoverage";
import { targetFixture } from "../testSupport/targetFixtures";
import type { Concept } from "../conceptTypes";
import type { SemanticEvidence } from "../assessmentTypes";
import type { RuntimeImageRegistry } from "../../images/types";
import { planAssessmentStimulus, withoutFailedImages } from "../../images/assessmentImages";

test("all 80 titles and 216 teaching placements match the approved transcription exactly", () => {
  const source = readFileSync(resolve(__dirname, "../../..", "docs/art-curriculum-approved.md"), "utf8");
  let subtopic = "", level = "", titles = 0, placements = 0;
  for (const line of source.split("\n")) {
    const sub = line.match(/^# (Painting|Literature|Movies|Music|Design|Architecture|Sculpture|Theatre)$/);
    if (sub) subtopic = sub[1].toLowerCase();
    const heading = line.match(/^\*\*(l\d+) — (.*?)\*\*$/);
    if (heading) {
      level = heading[1]; titles++;
      expect(artCurriculum[subtopic][level].title).toBe(heading[2]);
      expect(TOPIC_BY_ID.art.subtopics.find(s => s.id === subtopic)!.levels.find(l => `l${l.id}` === level)!.title).toBe(heading[2]);
    }
    const part = line.match(/^(p[124]) = (.+)$/);
    if (part && level !== "l10") { placements++; expect(artCurriculum[subtopic][level].relations[part[1] as "p1" | "p2" | "p4"]).toBe(part[2]); }
  }
  expect(titles).toBe(80); expect(placements).toBe(216);
  const relations = new Set(Object.values(artCurriculum).flatMap(levels => Object.values(levels).flatMap(l => Object.values(l.relations))));
  expect([...relations].sort()).toEqual(Object.keys(artRelationDefinitions).sort()); expect(relations.size).toBe(147);
  for (const id of relations) expect(targetRelationPolicies[id].semanticStrategy).toBe("reviewed-evidence");
});

test.each(Object.keys(artRelationDefinitions))("%s uses reusable wording and requires reviewed evidence", relation => {
  const f = targetFixture(relation), context = f.context();
  expect(validateContent(f.records, targetRelationPolicies, undefined, { evidence: f.evidence }).filter(i => i.severity === "error")).toEqual([]);
  for (const type of ["mcq", "true_false", "fill_blank"] as const) {
    const exercise = buildExercise(f.records[0], f.records, 3, type, context);
    expect(exercise?.type).toBe(type);
    if (exercise && exercise.type !== "matching") {
      const wording = exercise.type === "true_false" ? exercise.statement : exercise.prompt;
      expect(wording).not.toMatch(/\{[sa]\}|undefined|correctly relates/);
    }
  }
  expect(generateMatchingExercise(f.records, "target-matching", context).status).toBe("generated");
  const missing = createSemanticContext(f.records, { policies: targetRelationPolicies });
  expect(getExerciseCapabilities(f.records[0], f.records, missing).forms.mcq.available).toBe(false);
});

test.each(["A", "B", "C"] as const)("reviewed target pool preserves exact %s composition across deterministic attempts", variant => {
  const f = targetFixture();
  for (let attempt = 0; attempt < 20; attempt++) {
    const request = { concepts: f.records, context: f.context(), variant, seed: `target:${attempt}` };
    const result = buildQuizResult(request);
    expect(result.status).toBe("ready"); expect(quizCompositionViolations(result.exercises, variant)).toEqual([]);
    expect(buildQuizResult(request)).toEqual(result);
  }
});

test("inverse creator questions independently validate one-to-many works without new fact IDs", () => {
  const f = targetFixture();
  const context = f.context(), reversed = f.records.map(c => reverseConcept(c)!);
  const q = buildExercise(reversed[0], reversed, 3, "mcq", context);
  expect(q?.type).toBe("mcq");
  expect(q && q.type !== "matching" && q.conceptId).toBe(f.records[0].id);
  expect(q && q.type === "mcq" && q.prompt).toContain("Which of these works was painted by");
  const extra: SemanticEvidence = { ...f.evidence[1], kind: "assertion", id: "another-work-by-same-creator", subjectId: f.records[1].semantic!.subject!.id!, valueId: f.records[0].semantic!.value!.id!, verdict: "valid" };
  const evidence = f.evidence.map((e, i) => i === 1 && e.kind === "complete-set" ? { ...e, valueIds: [...e.valueIds, extra.valueId] } : e).concat(extra);
  const multiple = createSemanticContext(f.records, { policies: targetRelationPolicies, evidence });
  expect(multiple.evaluate(reversed[0], reversed[1]).verdict).toBe("valid");
  expect(getExerciseCapabilities(reversed[0], reversed, multiple).optionCandidates).not.toContain(reversed[1]);
  expect(buildQuizResult({ concepts: f.records, context, direction: "reverse", variant: "A", seed: "inverse" }).status).toBe("ready");
});

test("certified negatives, unknowns, aliases and conflicting evidence remain distinct", () => {
  const f = targetFixture();
  expect(f.context().evaluate(f.records[0], f.records[1]).verdict).toBe("invalid");
  const positives: SemanticEvidence[] = f.records.map((c, i) => ({ ...f.evidence[i], kind: "assertion", subjectId: c.semantic!.subject!.id!, valueId: c.semantic!.value!.id!, verdict: "valid" }));
  const open = createSemanticContext(f.records, { policies: targetRelationPolicies, evidence: positives });
  expect(open.evaluate(f.records[0], f.records[1]).verdict).toBe("unknown");
  expect(buildQuizResult({ concepts: f.records, context: open, variant: "A", seed: "open" })).toMatchObject({ status: "insufficient-content", exercises: [] });
  expect(generateExercise(f.records[0], getExerciseCapabilities(f.records[0], f.records, open), "true", open, "no-true-only").status).toBe("unavailable");
  const conflict: SemanticEvidence = { ...positives[0], id: "contradiction", kind: "assertion", subjectId: f.records[0].semantic!.subject!.id!, valueId: f.records[0].semantic!.value!.id!, verdict: "invalid" };
  const bad = createSemanticContext(f.records, { policies: targetRelationPolicies, evidence: [...positives, conflict] });
  expect(bad.evidenceIssues.length).toBeGreaterThan(0);
  expect(bad.evaluate(f.records[0], f.records[0]).verdict).toBe("unknown");
});

test("unknown same-relation genre options cannot become wrong; reviewed overlaps cannot become negatives", () => {
  const f = targetFixture("genre_of_movie", 4);
  const first = f.evidence[0];
  const evidence = f.evidence.map((e, i) => i === 0 && e.kind === "complete-set" ? { ...e, valueIds: [...e.valueIds, f.records[1].semantic!.value!.id!] } : e);
  const context = createSemanticContext(f.records, { policies: targetRelationPolicies, evidence });
  expect(context.evaluate(f.records[0], f.records[1]).verdict).toBe("valid");
  expect(getExerciseCapabilities(f.records[0], f.records, context).optionCandidates).not.toContain(f.records[1]);
  expect(generateMatchingExercise(f.records, "asymmetric", context).status).toBe("unavailable");
  expect(first.kind).toBe("complete-set");
});

test("every valid permanent-lock sequence must remain completable, not merely one assignment", () => {
  expect(isPermanentlyLockable([[true, true, false, false], [false, true, false, false], [false, false, true, false], [false, false, false, true]])).toBe(false);
  expect(isPermanentlyLockable([[true, true, false, false], [true, true, false, false], [false, false, true, false], [false, false, false, true]])).toBe(true);
  expect(isPermanentlyLockable(Array.from({ length: 4 }, () => [true, true, true, true]))).toBe(true);
});

test("matching rejects identical visible answers and tries other eligible groups", () => {
  const f = targetFixture();
  const duplicate = { ...f.records[4], id: "duplicate-display", object: f.records[0].object };
  const records = [...f.records.slice(0, 4), duplicate, f.records[4]];
  const context = createSemanticContext(records, { policies: targetRelationPolicies, evidence: f.evidence });
  const result = generateMatchingExercise(records, "duplicates", context);
  expect(result.status).toBe("generated");
  if (result.status !== "generated") throw new Error("Expected safe unique alternatives");
  expect(new Set(result.exercise.pairs.map(p => p.right)).size).toBe(4);
  const pairs = result.exercise.pairs;
  expect(gradeMatchingAssignment(pairs, pairs, { 0: 0, 1: 1, 2: 2, 3: 3 })).toBe(true);
  expect(gradeMatchingAssignment(pairs, pairs, { 0: 1, 1: 0, 2: 2, 3: 3 })).toBe(false);
});

test("reviewed typed forms are independent of options and never use fuzzy acceptance", () => {
  const f = targetFixture("creation_date_of_sculpture");
  const context = f.context(), c = f.records[0];
  const typed = generateExercise(c, getExerciseCapabilities(c, f.records, context), "blank_typed", context, "typed");
  expect(typed.status).toBe("generated");
  if (typed.status !== "generated" || typed.exercise.type !== "fill_blank") throw new Error("Expected blank");
  expect(isTypedAnswerCorrect(typed.exercise, " alias 0 ")).toBe(true);
  expect(isTypedAnswerCorrect(typed.exercise, "Alias 1")).toBe(false);
  const noTyped = { ...c, assessment: { ...c.assessment!, response: undefined } };
  const capabilities = getExerciseCapabilities(noTyped, f.records, context);
  expect(capabilities.forms.blank_typed.available).toBe(false); expect(capabilities.forms.blank_options.available).toBe(true);
});

test("qualification survives curriculum moves, while invisible qualifiers fail closed", () => {
  const f = targetFixture(), moved = { ...f.records[0], subtopicId: "other", levelId: "l8", partId: "p4" };
  expect(f.context().claim(moved).key).toBe(f.context().claim(f.records[0]).key);
  const hidden = { ...f.records[0], assessment: { ...f.records[0].assessment!, scope: undefined } };
  expect(getExerciseCapabilities(hidden, f.records, f.context()).forms.mcq.available).toBe(false);
});

test("duplicate semantic facts do not gain extra quiz weighting", () => {
  const f = targetFixture(), duplicate = { ...f.records[0], id: "another-occurrence" };
  expect(prepareQuizSession({ concepts: [...f.records, duplicate], context: f.context(), variant: "A" }).eligible).toHaveLength(f.records.length);
});

test("identification plans an approved image or independently verified description; failure removes every failed binding", () => {
  const f = targetFixture("identification_of_sculpture"), c = f.records[0];
  const image = { licenseStatus: "CC0" as const, imageId: "fixture-image", uri: "https://images.example.invalid/fixture.jpg", width: 100, height: 100, altText: "A synthetic test stimulus" };
  const images: RuntimeImageRegistry = { schemaVersion: 1, ownedHosts: ["images.example.invalid"], bindings: {
    [c.id]: { conceptId: c.id, reviewStatus: "approved", allowedExerciseTypes: ["mcq", "fill_blank", "true_false", "matching"], recognition: { answerId: c.semantic!.value!.id!, answerLeakageReviewed: true }, image },
  } };
  const context = createSemanticContext(f.records, { policies: targetRelationPolicies, evidence: f.evidence, images });
  expect(planAssessmentStimulus(c, context, "mcq").stimulus?.kind).toBe("image");
  expect(planAssessmentStimulus(c, context, "matching").stimulus?.kind).toBe("image");
  const failed = context.withImages(withoutFailedImages(images, [image.imageId]));
  expect(planAssessmentStimulus(c, failed, "mcq").stimulus?.kind).toBe("text");
  const imageOnly: Concept = { ...c, assessment: { ...c.assessment!, identification: {} } };
  expect(planAssessmentStimulus(imageOnly, context, "mcq").available).toBe(true);
  expect(planAssessmentStimulus(imageOnly, failed, "mcq").available).toBe(false);
  expect(buildExercise(imageOnly, [imageOnly, ...f.records.slice(1)], 3, "mcq", failed)).toBeNull();
  const matching = generateMatchingExercise(f.records, "recognition", context);
  expect(matching.status).toBe("generated");
  if (matching.status === "generated") expect(matching.exercise.pairs.every(p => p.stimulus)).toBe(true);
});

test("reviews collect exact existing teaching records; all l10 parts collect all l1–l9 teaching facts", () => {
  const f = targetFixture();
  const sets: Record<string, { concepts: Concept[] }> = {};
  for (let level = 1; level <= 9; level++) for (const part of [1, 2, 4]) {
    const c = { ...f.records[0], id: `review:${level}:${part}`, levelId: `l${level}`, partId: `p${part}` };
    sets[`art_painting_l${level}_p${part}`] = { concepts: [c] };
  }
  const pool = (levelId: string, partId: string) => getCurriculumPool(sets, { topicId: "art", subtopicId: "painting", levelId, partId });
  expect(pool("l1", "p3").map(c => c.id)).toEqual(["review:1:1", "review:1:2"]);
  expect(pool("l1", "p5")).toHaveLength(3);
  for (const part of [1, 2, 3, 4, 5]) expect(pool("l10", `p${part}`)).toHaveLength(27);
});

test("active curriculum never silently serves legacy facts; missing target content reports shortages", () => {
  expect(activeRegisteredConcepts().map(c => c.id).sort()).toEqual(approvedArtContent.map(c => c.id).sort());
  expect(activeSemanticContext.evidence).toEqual(approvedArtEvidence);
  expect(activeRegisteredConcepts().every(c => !c.id.startsWith("synthetic:"))).toBe(true);
  expect(validateContent(activeRegisteredConcepts(), targetRelationPolicies, undefined, { evidence: approvedArtEvidence }).filter(i => i.severity === "error")).toEqual([]);
  const cases = catalogCoverageCases(TOPIC_BY_ID.art, ACTIVE_CONCEPT_SETS);
  expect(cases).toHaveLength(1200);
  const coverage = measureGenerationCoverage(cases, activeSemanticContext, 2);
  expect(coverage.counts).toMatchObject({ requests: 2400, failures: 0 });
  expect(coverage.counts.insufficient).toBeGreaterThanOrEqual(cases.filter(c => !c.concepts.length).length * 2);
  expect(() => createActiveArtSets([targetFixture().records[0]])).not.toThrow();
  expect(() => createActiveArtSets([{ ...targetFixture().records[0], partId: "p1" }])).toThrow(/approved curriculum/);
  expect(() => createActiveArtSets([targetFixture().records[0], targetFixture().records[0]])).toThrow(/Duplicate/);
});

test("matching immediate feedback locks factual matches and returns incorrect cards without consuming them", () => {
  const { attemptMatchingPair, visibleMatchingPairs } = jest.requireActual<typeof import("../matchingInteraction")>("../matchingInteraction");
  const pairs = [0, 1, 2, 3].map(i => ({ left: `Subject ${i}`, right: `Answer ${i}`, answerIdentity: `${i}`, acceptedAnswerIdentities: i < 2 ? ["0", "1"] : [`${i}`] }));
  const wrong = attemptMatchingPair({ locked: {} }, pairs, pairs, 0, 2);
  expect(wrong.locked).toEqual({}); expect(wrong.wrong).toEqual({ left: 0, right: 2 });
  expect(visibleMatchingPairs(wrong)).toEqual({ 0: 2 });
  const returned = { locked: wrong.locked };
  expect(visibleMatchingPairs(returned)).toEqual({});
  const green = attemptMatchingPair(returned, pairs, pairs, 0, 1);
  expect(green.locked).toEqual({ 0: 1 });
  expect(attemptMatchingPair(green, pairs, pairs, 0, 0)).toBe(green);
  const complete = attemptMatchingPair(green, pairs, pairs, 1, 0);
  expect(complete.locked).toEqual({ 0: 1, 1: 0 });
});

test("present-day geography, first works, disputed attribution, music credits, and meaningful character links are enforced", () => {
  for (const relation of ["country_of_architectural_work", "first_play_of_playwright", "sculptor_of_sculpture", "example_of_notable_song_by_band", "associated_character_in_same_movie"]) {
    const f = targetFixture(relation);
    const a = { ...f.records[0].assessment!, geography: undefined, firstWork: undefined, association: undefined, music: undefined,
      attribution: f.records[0].assessment!.attribution ? { ...f.records[0].assessment!.attribution!, status: "disputed" as const } : undefined };
    const broken = { ...f.records[0], assessment: a };
    expect(getExerciseCapabilities(broken, f.records, f.context()).forms.mcq.available).toBe(false);
  }
});

test("withdrawn evidence cannot reuse another snapshot's generation capabilities", () => {
  const f = targetFixture(), context = f.context(), caps = getExerciseCapabilities(f.records[0], f.records, context);
  const withdrawn = createSemanticContext(f.records, { policies: targetRelationPolicies });
  expect(generateExercise(f.records[0], caps, "true", withdrawn, "withdrawn").status).toBe("unavailable");
});

test("overlapping temporal uncertainty is unknown; disjoint reviewed event bounds certify a negative", () => {
  const f = targetFixture("creation_date_of_sculpture");
  const records = f.records.map((c, i) => ({ ...c, semantic: { ...c.semantic!, value: { ...c.semantic!.value!, temporal: { start: i === 0 ? 1900 : i === 1 ? 1903 : 1910, end: i === 0 ? 1905 : i === 1 ? 1908 : 1915, calendar: "gregorian-proleptic" as const } } } }));
  const evidence: SemanticEvidence[] = records.map((c, i) => ({ ...f.evidence[i], kind: "assertion", subjectId: c.semantic.subject!.id!, valueId: c.semantic.value!.id!, verdict: "valid" }));
  evidence.push({ ...f.evidence[0], id: "reviewed-bound", kind: "date-bound", subjectId: records[0].semantic.subject!.id!, start: 1900, end: 1905, calendar: "gregorian-proleptic" });
  const context = createSemanticContext(records, { policies: targetRelationPolicies, evidence });
  expect(context.evaluate(records[0], records[1]).verdict).toBe("unknown");
  expect(context.evaluate(records[0], records[2]).verdict).toBe("invalid");
});

test("positive category containment never invents sibling exclusion; reviewed disjointness can certify it", () => {
  const f = targetFixture("genre_of_movie", 3);
  const positive: SemanticEvidence[] = f.records.map((c, i) => ({ ...f.evidence[i], kind: "assertion", subjectId: c.semantic!.subject!.id!, valueId: c.semantic!.value!.id!, verdict: "valid" }));
  const broader: SemanticEvidence = { ...f.evidence[0], id: "reviewed-hierarchy", kind: "broader-value", childId: f.records[0].semantic!.value!.id!, parentId: f.records[1].semantic!.value!.id! };
  const context = createSemanticContext(f.records, { policies: targetRelationPolicies, evidence: [...positive, broader] });
  expect(context.evaluate(f.records[0], f.records[1]).verdict).toBe("valid");
  expect(context.evaluate(f.records[0], f.records[2]).verdict).toBe("unknown");
  const disjoint: SemanticEvidence = { ...f.evidence[0], id: "reviewed-disjointness", kind: "disjoint-values", leftId: f.records[1].semantic!.value!.id!, rightId: f.records[2].semantic!.value!.id! };
  const certified = createSemanticContext(f.records, { policies: targetRelationPolicies, evidence: [...positive, broader, disjoint] });
  expect(certified.evaluate(f.records[0], f.records[2]).verdict).toBe("invalid");
});

test("definition aliases share meaning; forward definitions never demand exact free-text paraphrases", () => {
  const f = targetFixture("definition_of_sculpture_term");
  const context = f.context();
  expect(getExerciseCapabilities(f.records[0], f.records, context).forms.blank_typed.available).toBe(false);
  const alias = { ...f.records[0], id: "paraphrase", object: "Equivalent authored phrase" };
  expect(context.evaluate(f.records[0], alias).verdict).toBe("valid");
  expect(getExerciseCapabilities(f.records[0], [...f.records, alias], context).optionCandidates).not.toContain(alias);
  const reverse = reverseConcept(f.records[0])!;
  expect(getAssessmentTemplate(reverse).question(reverse.subject)).toContain("matches this definition");
});

test("review variants retain all taught introduction stages without changing their quotas", () => {
  const f = targetFixture();
  const records = f.records.map((c, i) => ({ ...c, introducedIn: (["A", "B", "C"] as const)[i % 3] }));
  const context = createSemanticContext(records, { policies: targetRelationPolicies, evidence: f.evidence });
  expect(prepareQuizSession({ concepts: records, variant: "A", context }).eligible).toHaveLength(2);
  for (const variant of ["A", "B", "C"] as const) {
    const request = { concepts: records, variant, context, mode: "review" as const, seed: `review:${variant}` };
    expect(prepareQuizSession(request).eligible).toHaveLength(5);
    const quiz = buildQuizResult(request);
    expect(quiz.status).toBe("ready"); expect(quizCompositionViolations(quiz.exercises, variant)).toEqual([]);
  }
  const cases = catalogCoverageCases(TOPIC_BY_ID.art, ACTIVE_CONCEPT_SETS);
  expect(cases.filter(c => c.id.includes("_l10_")).every(c => c.mode === "review")).toBe(true);
});


test("public default cannot certify archived decade substitutions without reviewed evidence", () => {
  const records = registeredConcepts().filter(c => c.relation === "created_in_decade");
  expect(records.length).toBeGreaterThan(0);
  const context = createSemanticContext(records);
  expect(context.evaluate(records[0], records[0]).verdict).toBe("unknown");
  expect(buildExercise(records[0], records, 3, "mcq", context)).toBeNull();
});


test("unreviewed displayed identities cannot borrow certified negatives", () => {
  const f = targetFixture(), target = f.records[0];
  const unreviewed = { ...f.records[1], assessment: { ...f.records[1].assessment!, reviewStatus: "pending" as const } };
  expect(f.context().evaluate(target, unreviewed).verdict).toBe("unknown");
  expect(getExerciseCapabilities(target, [target, unreviewed], f.context()).forms.mcq.available).toBe(false);
});

test("failed recognition assets deterministically replan a complete quiz using the remaining eligible facts", () => {
  const f = targetFixture("identification_of_painting", 6);
  const first = { ...f.records[0], assessment: { ...f.records[0].assessment!, identification: {} } };
  const records = [first, ...f.records.slice(1)];
  const images: RuntimeImageRegistry = { schemaVersion: 1, ownedHosts: ["images.example.invalid"], bindings: {
    [first.id]: { conceptId: first.id, reviewStatus: "approved", recognition: { answerId: first.semantic!.value!.id!, answerLeakageReviewed: true },
      allowedExerciseTypes: ["mcq", "true_false", "fill_blank", "matching"], image: { licenseStatus: "CC0", imageId: "failed-fixture", uri: "https://images.example.invalid/fixture.jpg", width: 100, height: 100, altText: "Reviewed synthetic stimulus" } },
  } };
  const context = createSemanticContext(records, { policies: targetRelationPolicies, evidence: f.evidence, images });
  expect(buildQuizResult({ concepts: records, context, variant: "A", seed: "image-original" }).status).toBe("ready");
  const failed = context.withImages(withoutFailedImages(images, ["failed-fixture"]));
  const request = { concepts: records, context: failed, variant: "A" as const, seed: "image-original:failed-fixture" };
  const result = buildQuizResult(request);
  expect(result.status).toBe("ready"); expect(quizCompositionViolations(result.exercises, "A")).toEqual([]);
  expect(result.exercises.every(e => e.type === "matching" ? e.pairs.every(p => p.id !== first.id) : e.conceptId !== first.id)).toBe(true);
  expect(buildQuizResult(request)).toEqual(result);
});
