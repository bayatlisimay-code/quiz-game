import { certifiedFixtureContext } from "../testSupport/certifiedFixtures";
import type { Concept } from "../conceptTypes";
import type { QuizRequest } from "../buildQuiz";
import { buildQuiz as generateQuiz } from "../buildQuiz";
import { enrichConcepts } from "../enrichConcepts";
import { buildExercise, buildMatchingExercise } from "../exerciseFactory";

const mockConcepts: Concept[] = [
  {
    topicId: "art", subtopicId: "fixture", levelId: "l1", partId: "p1", answerKind: "short",
    id: "c1",
    subject: "Mona Lisa",
    object: "Leonardo da Vinci",
    relation: "painted_by",
    difficulty: 1,
    distractorGroup: "art",
  },
  {
    topicId: "art", subtopicId: "fixture", levelId: "l1", partId: "p1", answerKind: "short",
    id: "c2",
    subject: "Starry Night",
    object: "Vincent van Gogh",
    relation: "painted_by",
    difficulty: 2,
    distractorGroup: "art",
  },
];

const matchingConcepts: Concept[] = [
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

const buildQuiz = (request: QuizRequest) => generateQuiz({ ...request, context: certifiedFixtureContext(request.concepts) });

describe("Quiz Engine", () => {
  test("a two-answer pool reports unavailability instead of inventing an assessment", () => {
    for (const type of ["mcq", "true_false", "fill_blank"] as const) {
      expect(buildExercise(mockConcepts[0] , mockConcepts , 4, type)).toBeNull();
    }
  });

  test("a sufficiently populated legacy pool retains valid supported exercise structures", () => {
    for (const type of ["mcq", "true_false", "fill_blank"] as const) {
      const ex = buildExercise(matchingConcepts[0] , matchingConcepts , 4, type, certifiedFixtureContext(matchingConcepts));
      expect(ex).toBeTruthy();
      expect(ex?.type).toBe(type);
    }
  });

  test("matching requires 4 valid concepts with the same relation", () => {
    const enriched = enrichConcepts(matchingConcepts );
    const match = buildMatchingExercise(enriched, "seed", certifiedFixtureContext(enriched));

    expect(match).toBeTruthy();
    expect(match?.type).toBe("matching");
    expect(match?.pairs.length).toBe(4);
  });

    test("matching requires 4 valid concepts with the same relation", () => {
    const enriched = enrichConcepts(matchingConcepts );
    const match = buildMatchingExercise(enriched, "seed", certifiedFixtureContext(enriched));

    expect(match).toBeTruthy();
    expect(match?.type).toBe("matching");
    expect(match?.pairs.length).toBe(4);
  });

  test("matching uses only provided concepts (no external selection)", () => {
    const enriched = enrichConcepts(matchingConcepts );
    const concepts = enriched.slice(0, 4);

    const match = buildMatchingExercise(concepts, "seed", certifiedFixtureContext(concepts));

    expect(match).toBeTruthy();

    const conceptIds = concepts.map((c) => c.id);
    expect(match!.pairs.every(pair => conceptIds.includes(pair.id!))).toBe(true);
    match!.pairs.forEach((pair) => {
      const concept = concepts.find(c => c.id === pair.id)!;
      expect(pair.left).toContain(concept.subject);
      expect(pair.right).toBe(concept.object);
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

  const selectedIds = new Set(nonMatching.map((q) => q.conceptId));
  expect(matching?.pairs).toHaveLength(4);
  for (const pair of matching?.pairs ?? []) expect(selectedIds.has(pair.id!)).toBe(true);

});
});
