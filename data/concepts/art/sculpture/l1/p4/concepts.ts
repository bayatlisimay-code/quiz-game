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
    id: "art_sculpture_l1_p4_period_or_year_of_sculpture_001",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p4",
    relation: "period_or_year_of_sculpture",
    subject: "Bust of Nefertiti",
    object: "c. 1345 BCE",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_periods",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "A",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p4_period_or_year_of_sculpture_002",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p4",
    relation: "period_or_year_of_sculpture",
    subject: "Terracotta Army",
    object: "Late 3rd century BCE",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_periods",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "A",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p4_period_or_year_of_sculpture_003",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p4",
    relation: "period_or_year_of_sculpture",
    subject: "Venus de Milo",
    object: "c. 150–125 BCE",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_periods",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "A",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p4_period_or_year_of_sculpture_004",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p4",
    relation: "period_or_year_of_sculpture",
    subject: "Winged Victory of Samothrace",
    object: "c. 190 BCE",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_periods",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "A",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p4_period_or_year_of_sculpture_005",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p4",
    relation: "period_or_year_of_sculpture",
    subject: "David (Donatello)",
    object: "c. 1440s",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_periods",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "A",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p4_period_or_year_of_sculpture_006",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p4",
    relation: "period_or_year_of_sculpture",
    subject: "Pietà",
    object: "1498–1499",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_periods",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "A",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p4_period_or_year_of_sculpture_007",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p4",
    relation: "period_or_year_of_sculpture",
    subject: "David (Michelangelo)",
    object: "1501–1504",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_periods",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "B",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p4_period_or_year_of_sculpture_008",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p4",
    relation: "period_or_year_of_sculpture",
    subject: "Apollo and Daphne",
    object: "1622–1625",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_periods",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "B",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p4_period_or_year_of_sculpture_009",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p4",
    relation: "period_or_year_of_sculpture",
    subject: "Psyche Revived by Cupid's Kiss",
    object: "1787–1793",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_periods",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "B",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p4_period_or_year_of_sculpture_010",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p4",
    relation: "period_or_year_of_sculpture",
    subject: "Little Dancer Aged Fourteen",
    object: "1878–1881",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_periods",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "B",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p4_period_or_year_of_sculpture_011",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p4",
    relation: "period_or_year_of_sculpture",
    subject: "The Thinker",
    object: "1880–1904",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_periods",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "B",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p4_period_or_year_of_sculpture_012",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p4",
    relation: "period_or_year_of_sculpture",
    subject: "Statue of Liberty",
    object: "1875–1886",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_periods",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "B",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p4_period_or_year_of_sculpture_013",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p4",
    relation: "period_or_year_of_sculpture",
    subject: "Christ the Redeemer",
    object: "1922–1931",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_periods",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "C",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p4_period_or_year_of_sculpture_014",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p4",
    relation: "period_or_year_of_sculpture",
    subject: "Mount Rushmore",
    object: "1927–1941",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_periods",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "C",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p4_period_or_year_of_sculpture_015",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p4",
    relation: "period_or_year_of_sculpture",
    subject: "Endless Column",
    object: "1937–1938",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_periods",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "C",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p4_period_or_year_of_sculpture_016",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p4",
    relation: "period_or_year_of_sculpture",
    subject: "The Motherland Calls",
    object: "1959–1967",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_periods",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "C",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p4_period_or_year_of_sculpture_017",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p4",
    relation: "period_or_year_of_sculpture",
    subject: "Angel of the North",
    object: "1998",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_periods",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "C",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p4_period_or_year_of_sculpture_018",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p4",
    relation: "period_or_year_of_sculpture",
    subject: "Cloud Gate",
    object: "2004–2006",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_periods",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "C",
    factPriority: "core"
  }
];

const conceptSet: LocalConceptSet = {
  id: "art_sculpture_l1_p4",
  concepts
};

export default conceptSet;
