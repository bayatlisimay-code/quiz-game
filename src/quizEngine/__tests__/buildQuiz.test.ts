import { buildQuiz } from "../buildQuiz";
import { enrichConcepts } from "../enrichConcepts";

const mockConcepts = [
  { id: "a1", topicId: "art", subtopicId: "painting", levelId: "l1", partId: "p1", relation: "painted_by", subject: "Mona Lisa", object: "Leonardo da Vinci", answerKind: "short", difficulty: 2, distractorGroup: "artists", tags: [], introducedIn: "A" },
  { id: "a2", topicId: "art", subtopicId: "painting", levelId: "l1", partId: "p1", relation: "painted_by", subject: "Starry Night", object: "Vincent van Gogh", answerKind: "short", difficulty: 2, distractorGroup: "artists", tags: [], introducedIn: "A" },
  { id: "a3", topicId: "art", subtopicId: "painting", levelId: "l1", partId: "p1", relation: "painted_by", subject: "The Persistence of Memory", object: "Salvador Dalí", answerKind: "short", difficulty: 3, distractorGroup: "artists", tags: [], introducedIn: "A" },
  { id: "a4", topicId: "art", subtopicId: "painting", levelId: "l1", partId: "p1", relation: "painted_by", subject: "Girl with a Pearl Earring", object: "Johannes Vermeer", answerKind: "short", difficulty: 3, distractorGroup: "artists", tags: [], introducedIn: "A" },
  { id: "a5", topicId: "art", subtopicId: "painting", levelId: "l1", partId: "p1", relation: "painted_by", subject: "Guernica", object: "Pablo Picasso", answerKind: "short", difficulty: 4, distractorGroup: "artists", tags: [], introducedIn: "A" },

  { id: "b1", topicId: "art", subtopicId: "painting", levelId: "l1", partId: "p1", relation: "painted_by", subject: "The Night Watch", object: "Rembrandt", answerKind: "short", difficulty: 3, distractorGroup: "artists", tags: [], introducedIn: "B" },
  { id: "b2", topicId: "art", subtopicId: "painting", levelId: "l1", partId: "p1", relation: "painted_by", subject: "The Kiss", object: "Gustav Klimt", answerKind: "short", difficulty: 3, distractorGroup: "artists", tags: [], introducedIn: "B" },
  { id: "b3", topicId: "art", subtopicId: "painting", levelId: "l1", partId: "p1", relation: "painted_by", subject: "American Gothic", object: "Grant Wood", answerKind: "short", difficulty: 4, distractorGroup: "artists", tags: [], introducedIn: "B" },
  { id: "b4", topicId: "art", subtopicId: "painting", levelId: "l1", partId: "p1", relation: "painted_by", subject: "The Scream", object: "Edvard Munch", answerKind: "short", difficulty: 4, distractorGroup: "artists", tags: [], introducedIn: "B" },

  { id: "c1", topicId: "art", subtopicId: "painting", levelId: "l1", partId: "p1", relation: "painted_by", subject: "Las Meninas", object: "Diego Velázquez", answerKind: "short", difficulty: 4, distractorGroup: "artists", tags: [], introducedIn: "C" },
  { id: "c2", topicId: "art", subtopicId: "painting", levelId: "l1", partId: "p1", relation: "painted_by", subject: "The Birth of Venus", object: "Sandro Botticelli", answerKind: "short", difficulty: 4, distractorGroup: "artists", tags: [], introducedIn: "C" },
  { id: "c3", topicId: "art", subtopicId: "painting", levelId: "l1", partId: "p1", relation: "painted_by", subject: "Liberty Leading the People", object: "Eugène Delacroix", answerKind: "short", difficulty: 5, distractorGroup: "artists", tags: [], introducedIn: "C" },
  { id: "c4", topicId: "art", subtopicId: "painting", levelId: "l1", partId: "p1", relation: "painted_by", subject: "Whistler's Mother", object: "James McNeill Whistler", answerKind: "short", difficulty: 5, distractorGroup: "artists", tags: [], introducedIn: "C" },
];

describe("buildQuiz", () => {
  test("builds 8 exercises total", () => {
    const enriched = enrichConcepts(mockConcepts as any);

    const quiz = buildQuiz({
      concepts: enriched as any,
      variant: "A",
      seed: "test-seed",
    });

    expect(quiz).toHaveLength(8);
  });

    test("builds 7 normal exercises and 1 matching exercise", () => {
    const enriched = enrichConcepts(mockConcepts as any);

    const quiz = buildQuiz({
      concepts: enriched as any,
      variant: "A",
      seed: "test-seed",
    });

    const matching = quiz.filter((q) => q.type === "matching");
    const normal = quiz.filter((q) => q.type !== "matching");

    expect(quiz).toHaveLength(8);
    expect(matching).toHaveLength(1);
    expect(normal).toHaveLength(7);
  });

    test("the 7 normal exercises follow a 2+2+3 type distribution", () => {
    const enriched = enrichConcepts(mockConcepts as any);

    const quiz = buildQuiz({
      concepts: enriched as any,
      variant: "A",
      seed: "test-seed",
    });

    const normal = quiz.filter((q) => q.type !== "matching");

    const counts = {
      mcq: normal.filter((q) => q.type === "mcq").length,
      true_false: normal.filter((q) => q.type === "true_false").length,
      fill_blank: normal.filter((q) => q.type === "fill_blank").length,
    };

    const values = Object.values(counts).sort((a, b) => a - b);

    expect(values).toEqual([2, 2, 3]);
  });

  test("variant A only uses A concepts", () => {
    const enriched = enrichConcepts(mockConcepts as any);

    const quiz = buildQuiz({
        concepts: enriched as any,
        variant: "A",
        seed: "test-seed",
    });

    const usedSubjects = quiz
        .filter((q) => q.type !== "matching")
        .map((q: any) => q.prompt || q.statement || "");

    const aSubjects = mockConcepts
        .filter((c) => c.introducedIn === "A")
        .map((c) => c.subject);

    usedSubjects.forEach((text) => {
        const found = aSubjects.some((s) => text.includes(s));
        expect(found).toBe(true);
    });
    });

      test("variant B uses B concepts with 1-2 A repeats only", () => {
    const enriched = enrichConcepts(mockConcepts as any);

    const quiz = buildQuiz({
      concepts: enriched as any,
      variant: "B",
      seed: "test-seed",
    });

    const normalTexts = quiz
      .filter((q) => q.type !== "matching")
      .map((q: any) => q.prompt || q.statement || "");

    const aSubjects = mockConcepts
      .filter((c) => c.introducedIn === "A")
      .map((c) => c.subject);

    const bSubjects = mockConcepts
      .filter((c) => c.introducedIn === "B")
      .map((c) => c.subject);

    const cSubjects = mockConcepts
      .filter((c) => c.introducedIn === "C")
      .map((c) => c.subject);

    let aCount = 0;
    let bCount = 0;
    let cCount = 0;

    normalTexts.forEach((text) => {
      if (aSubjects.some((s) => text.includes(s))) aCount++;
      if (bSubjects.some((s) => text.includes(s))) bCount++;
      if (cSubjects.some((s) => text.includes(s))) cCount++;
    });

    expect(cCount).toBe(0);
    expect(aCount).toBeGreaterThanOrEqual(1);
    expect(aCount).toBeLessThanOrEqual(2);
    expect(bCount).toBeGreaterThanOrEqual(5);
  });

  test("variant C uses C concepts with 2-3 repeats from A and B", () => {
    const enriched = enrichConcepts(mockConcepts as any);

    const quiz = buildQuiz({
        concepts: enriched as any,
        variant: "C",
        seed: "test-seed",
    });

    const normalTexts = quiz
        .filter((q) => q.type !== "matching")
        .map((q: any) => q.prompt || q.statement || "");

    const aSubjects = mockConcepts
        .filter((c) => c.introducedIn === "A")
        .map((c) => c.subject);

    const bSubjects = mockConcepts
        .filter((c) => c.introducedIn === "B")
        .map((c) => c.subject);

    const cSubjects = mockConcepts
        .filter((c) => c.introducedIn === "C")
        .map((c) => c.subject);

    let aCount = 0;
    let bCount = 0;
    let cCount = 0;

    normalTexts.forEach((text) => {
        if (aSubjects.some((s) => text.includes(s))) aCount++;
        if (bSubjects.some((s) => text.includes(s))) bCount++;
        if (cSubjects.some((s) => text.includes(s))) cCount++;
    });

    const repeatCount = aCount + bCount;

    expect(cCount).toBeGreaterThanOrEqual(4); // main pool
    expect(repeatCount).toBeGreaterThanOrEqual(2);
    expect(repeatCount).toBeLessThanOrEqual(3);
    });
});