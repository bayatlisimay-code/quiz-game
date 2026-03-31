import { buildQuiz } from "../buildQuiz";
import { enrichConcepts } from "../enrichConcepts";
import { buildExercise, buildMatchingExercise } from "../exerciseFactory";

const mockConcepts = [
  {
    id: "c1",
    subject: "Mona Lisa",
    object: "Leonardo da Vinci",
    relation: "painted_by",
    difficulty: 1,
    distractorGroup: "art",
  },
  {
    id: "c2",
    subject: "Starry Night",
    object: "Vincent van Gogh",
    relation: "painted_by",
    difficulty: 2,
    distractorGroup: "art",
  },
];

const matchingConcepts = [
  {
    id: "m1",
    topicId: "art",
    subtopicId: "painting",
    levelId: "l1",
    partId: "p1",
    subject: "Mona Lisa",
    object: "Leonardo da Vinci",
    relation: "painted_by",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "painting",
    tags: [],
  },
  {
    id: "m2",
    topicId: "art",
    subtopicId: "painting",
    levelId: "l1",
    partId: "p1",
    subject: "Starry Night",
    object: "Vincent van Gogh",
    relation: "painted_by",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "painting",
    tags: [],
  },
  {
    id: "m3",
    topicId: "art",
    subtopicId: "painting",
    levelId: "l1",
    partId: "p1",
    subject: "The Scream",
    object: "Edvard Munch",
    relation: "painted_by",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "painting",
    tags: [],
  },
  {
    id: "m4",
    topicId: "art",
    subtopicId: "painting",
    levelId: "l1",
    partId: "p1",
    subject: "Guernica",
    object: "Pablo Picasso",
    relation: "painted_by",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "painting",
    tags: [],
  },
];

describe("Quiz Engine", () => {
  test("buildExercise returns a valid exercise", () => {
    const ex = buildExercise(mockConcepts[0] as any, mockConcepts as any, 4, "mcq");
    expect(ex).toBeTruthy();
    expect(["mcq", "true_false", "fill_blank"]).toContain(ex.type);
  });

  test("different types can be generated", () => {
    const types = ["mcq", "true_false", "fill_blank"] as const;

    types.forEach((type) => {
      const ex = buildExercise(mockConcepts[0] as any, mockConcepts as any, 4, type);
      expect(ex).toBeTruthy();
      expect(["mcq", "true_false", "fill_blank"]).toContain(ex.type);
    });
  });

  test("matching requires 4 valid concepts with the same relation", () => {
    const enriched = enrichConcepts(matchingConcepts as any);
    const match = buildMatchingExercise(enriched, "seed");

    expect(match).toBeTruthy();
    expect(match?.type).toBe("matching");
    expect(match?.pairs.length).toBe(4);
  });

    test("matching requires 4 valid concepts with the same relation", () => {
    const enriched = enrichConcepts(matchingConcepts as any);
    const match = buildMatchingExercise(enriched, "seed");

    expect(match).toBeTruthy();
    expect(match?.type).toBe("matching");
    expect(match?.pairs.length).toBe(4);
  });

  test("matching uses only provided concepts (no external selection)", () => {
    const enriched = enrichConcepts(matchingConcepts as any);
    const concepts = enriched.slice(0, 4);

    const match = buildMatchingExercise(concepts, "seed");

    expect(match).toBeTruthy();

    const conceptIds = concepts.map((c) => c.id);
    const usedLefts = match!.pairs.map((p) => p.left);

    usedLefts.forEach((left) => {
      expect(concepts.map((c) => c.subject)).toContain(left);
   });
  });
it("buildQuiz matching uses only facts already selected in that quiz", () => {
  const concepts = enrichConcepts([
    {
      id: "c1",
      topicId: "art",
      subtopicId: "painting",
      levelId: "l1",
      partId: "p1",
      relation: "painted_by",
      subject: "Mona Lisa",
      object: "Leonardo da Vinci",
      answerKind: "short",
      difficulty: 1,
      distractorGroup: "artists",
      tags: ["A"],
      introducedIn: "A",
    },
    {
      id: "c2",
      topicId: "art",
      subtopicId: "painting",
      levelId: "l1",
      partId: "p1",
      relation: "painted_by",
      subject: "The Starry Night",
      object: "Vincent van Gogh",
      answerKind: "short",
      difficulty: 1,
      distractorGroup: "artists",
      tags: ["A"],
      introducedIn: "A",
    },
    {
      id: "c3",
      topicId: "art",
      subtopicId: "painting",
      levelId: "l1",
      partId: "p1",
      relation: "painted_by",
      subject: "The Persistence of Memory",
      object: "Salvador Dalí",
      answerKind: "short",
      difficulty: 1,
      distractorGroup: "artists",
      tags: ["A"],
      introducedIn: "A",
    },
    {
      id: "c4",
      topicId: "art",
      subtopicId: "painting",
      levelId: "l1",
      partId: "p1",
      relation: "painted_by",
      subject: "Girl with a Pearl Earring",
      object: "Johannes Vermeer",
      answerKind: "short",
      difficulty: 1,
      distractorGroup: "artists",
      tags: ["A"],
      introducedIn: "A",
    },
    {
      id: "c5",
      topicId: "art",
      subtopicId: "painting",
      levelId: "l1",
      partId: "p1",
      relation: "painted_by",
      subject: "Guernica",
      object: "Pablo Picasso",
      answerKind: "short",
      difficulty: 1,
      distractorGroup: "artists",
      tags: ["A"],
      introducedIn: "A",
    },
    {
      id: "c6",
      topicId: "art",
      subtopicId: "painting",
      levelId: "l1",
      partId: "p1",
      relation: "painted_by",
      subject: "The Scream",
      object: "Edvard Munch",
      answerKind: "short",
      difficulty: 1,
      distractorGroup: "artists",
      tags: ["A"],
      introducedIn: "A",
    },
    {
      id: "c7",
      topicId: "art",
      subtopicId: "painting",
      levelId: "l1",
      partId: "p1",
      relation: "painted_by",
      subject: "The Night Watch",
      object: "Rembrandt",
      answerKind: "short",
      difficulty: 1,
      distractorGroup: "artists",
      tags: ["A"],
      introducedIn: "A",
    },
    {
      id: "outside",
      topicId: "art",
      subtopicId: "painting",
      levelId: "l1",
      partId: "p1",
      relation: "painted_by",
      subject: "American Gothic",
      object: "Grant Wood",
      answerKind: "short",
      difficulty: 1,
      distractorGroup: "artists",
      tags: ["A"],
      introducedIn: "A",
    },
  ]);

  const quiz = buildQuiz({
    concepts,
    variant: "A",
    seed: "matching-same-facts-test",
  });

  const nonMatching = quiz.filter((q) => q.type !== "matching");
  const matching = quiz.find((q) => q.type === "matching");

  expect(matching).toBeTruthy();
  expect(nonMatching).toHaveLength(7);

  const allowedTexts = new Set<string>();

  for (const q of nonMatching) {
    if (q.type === "mcq") {
      allowedTexts.add(q.prompt);
      q.options.forEach((opt) => allowedTexts.add(opt));
    }

    if (q.type === "true_false") {
      allowedTexts.add(q.statement);
    }

    if (q.type === "fill_blank") {
      allowedTexts.add(q.prompt);
    }
  }

  expect(matching?.pairs).toHaveLength(4);

  for (const pair of matching?.pairs ?? []) {
    expect(allowedTexts.has(pair.left) || allowedTexts.has(pair.right)).toBe(true);
  }

  const outsidePairUsed = matching?.pairs.some(
    (pair) =>
      pair.left === "American Gothic" || pair.right === "Grant Wood"
  );

  expect(outsidePairUsed).toBe(false);
});
});
