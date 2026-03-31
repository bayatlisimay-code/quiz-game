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
});