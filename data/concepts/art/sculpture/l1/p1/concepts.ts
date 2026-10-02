type LocalConcept = {
  id: string;
  topicId: string;
  subtopicId: string;
  levelId: string;
  partId: string;
  relation: string;
  subject: string;
  object: string;
  answerKind: "short" | "long";
  difficulty: number;
  distractorGroup: string;
  tags: string[];
  introducedIn?: "A" | "B" | "C";
  factPriority?: "core" | "secondary";
};

type LocalConceptSet = {
  id: string;
  concepts: LocalConcept[];
};


const concepts: LocalConcept[] = [
  {
    id: "art_sculpture_l1_p1_sculptor_of_sculpture_001",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p1",
    relation: "sculptor_of_sculpture",
    subject: "Bust of Nefertiti",
    object: "Attributed to Thutmose",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculptors",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "A",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p1_sculptor_of_sculpture_002",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p1",
    relation: "sculptor_of_sculpture",
    subject: "Terracotta Army",
    object: "Unknown Qin artisans",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculptors",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "A",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p1_sculptor_of_sculpture_003",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p1",
    relation: "sculptor_of_sculpture",
    subject: "Venus de Milo",
    object: "Unknown Greek sculptor",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculptors",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "A",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p1_sculptor_of_sculpture_004",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p1",
    relation: "sculptor_of_sculpture",
    subject: "Winged Victory of Samothrace",
    object: "Unknown Greek sculptor",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculptors",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "A",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p1_sculptor_of_sculpture_005",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p1",
    relation: "sculptor_of_sculpture",
    subject: "David (Donatello)",
    object: "Donatello",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculptors",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "A",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p1_sculptor_of_sculpture_006",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p1",
    relation: "sculptor_of_sculpture",
    subject: "Pietà",
    object: "Michelangelo",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculptors",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "A",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p1_sculptor_of_sculpture_007",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p1",
    relation: "sculptor_of_sculpture",
    subject: "David (Michelangelo)",
    object: "Michelangelo",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculptors",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "B",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p1_sculptor_of_sculpture_008",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p1",
    relation: "sculptor_of_sculpture",
    subject: "Apollo and Daphne",
    object: "Gian Lorenzo Bernini",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculptors",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "B",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p1_sculptor_of_sculpture_009",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p1",
    relation: "sculptor_of_sculpture",
    subject: "Psyche Revived by Cupid's Kiss",
    object: "Antonio Canova",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculptors",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "B",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p1_sculptor_of_sculpture_010",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p1",
    relation: "sculptor_of_sculpture",
    subject: "Little Dancer Aged Fourteen",
    object: "Edgar Degas",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculptors",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "B",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p1_sculptor_of_sculpture_011",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p1",
    relation: "sculptor_of_sculpture",
    subject: "The Thinker",
    object: "Auguste Rodin",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculptors",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "B",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p1_sculptor_of_sculpture_012",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p1",
    relation: "sculptor_of_sculpture",
    subject: "Statue of Liberty",
    object: "Frédéric Auguste Bartholdi",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculptors",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "B",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p1_sculptor_of_sculpture_013",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p1",
    relation: "sculptor_of_sculpture",
    subject: "Christ the Redeemer",
    object: "Paul Landowski",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculptors",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "C",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p1_sculptor_of_sculpture_014",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p1",
    relation: "sculptor_of_sculpture",
    subject: "Mount Rushmore",
    object: "Gutzon Borglum",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculptors",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "C",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p1_sculptor_of_sculpture_015",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p1",
    relation: "sculptor_of_sculpture",
    subject: "Endless Column",
    object: "Constantin Brâncuși",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculptors",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "C",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p1_sculptor_of_sculpture_016",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p1",
    relation: "sculptor_of_sculpture",
    subject: "The Motherland Calls",
    object: "Yevgeny Vuchetich",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculptors",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "C",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p1_sculptor_of_sculpture_017",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p1",
    relation: "sculptor_of_sculpture",
    subject: "Angel of the North",
    object: "Antony Gormley",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculptors",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "C",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p1_sculptor_of_sculpture_018",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p1",
    relation: "sculptor_of_sculpture",
    subject: "Cloud Gate",
    object: "Anish Kapoor",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculptors",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "C",
    factPriority: "core"
  }
];

const conceptSet: LocalConceptSet = {
  id: "art_sculpture_l1_p1",
  concepts
};

export default conceptSet;
