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
    id: "art_sculpture_l1_p2_location_of_sculpture_001",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p2",
    relation: "location_of_sculpture",
    subject: "Bust of Nefertiti",
    object: "Neues Museum, Berlin",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_locations",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "A",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p2_location_of_sculpture_002",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p2",
    relation: "location_of_sculpture",
    subject: "Terracotta Army",
    object: "Mausoleum of the First Qin Emperor, Xi'an",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_locations",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "A",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p2_location_of_sculpture_003",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p2",
    relation: "location_of_sculpture",
    subject: "Venus de Milo",
    object: "Louvre Museum, Paris",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_locations",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "A",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p2_location_of_sculpture_004",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p2",
    relation: "location_of_sculpture",
    subject: "Winged Victory of Samothrace",
    object: "Louvre Museum, Paris",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_locations",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "A",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p2_location_of_sculpture_005",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p2",
    relation: "location_of_sculpture",
    subject: "David (Donatello)",
    object: "Museo Nazionale del Bargello, Florence",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_locations",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "A",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p2_location_of_sculpture_006",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p2",
    relation: "location_of_sculpture",
    subject: "Pietà",
    object: "St Peter's Basilica, Vatican City",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_locations",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "A",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p2_location_of_sculpture_007",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p2",
    relation: "location_of_sculpture",
    subject: "David (Michelangelo)",
    object: "Galleria dell'Accademia, Florence",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_locations",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "B",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p2_location_of_sculpture_008",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p2",
    relation: "location_of_sculpture",
    subject: "Apollo and Daphne",
    object: "Galleria Borghese, Rome",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_locations",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "B",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p2_location_of_sculpture_009",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p2",
    relation: "location_of_sculpture",
    subject: "Psyche Revived by Cupid's Kiss",
    object: "Louvre Museum, Paris",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_locations",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "B",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p2_location_of_sculpture_010",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p2",
    relation: "location_of_sculpture",
    subject: "Little Dancer Aged Fourteen",
    object: "National Gallery of Art, Washington, D.C.",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_locations",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "B",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p2_location_of_sculpture_011",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p2",
    relation: "location_of_sculpture",
    subject: "The Thinker",
    object: "Musée Rodin, Paris",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_locations",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "B",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p2_location_of_sculpture_012",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p2",
    relation: "location_of_sculpture",
    subject: "Statue of Liberty",
    object: "Liberty Island, New York City",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_locations",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "B",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p2_location_of_sculpture_013",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p2",
    relation: "location_of_sculpture",
    subject: "Christ the Redeemer",
    object: "Corcovado, Rio de Janeiro",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_locations",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "C",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p2_location_of_sculpture_014",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p2",
    relation: "location_of_sculpture",
    subject: "Mount Rushmore",
    object: "Mount Rushmore National Memorial, South Dakota",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_locations",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "C",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p2_location_of_sculpture_015",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p2",
    relation: "location_of_sculpture",
    subject: "Endless Column",
    object: "Târgu Jiu, Romania",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_locations",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "C",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p2_location_of_sculpture_016",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p2",
    relation: "location_of_sculpture",
    subject: "The Motherland Calls",
    object: "Mamayev Kurgan, Volgograd",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_locations",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "C",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p2_location_of_sculpture_017",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p2",
    relation: "location_of_sculpture",
    subject: "Angel of the North",
    object: "Gateshead, England",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_locations",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "C",
    factPriority: "core"
  },
  {
    id: "art_sculpture_l1_p2_location_of_sculpture_018",
    topicId: "art",
    subtopicId: "sculpture",
    levelId: "l1",
    partId: "p2",
    relation: "location_of_sculpture",
    subject: "Cloud Gate",
    object: "Millennium Park, Chicago",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "sculpture_locations",
    tags: ["sculpture", "famous_sculptures", "level_1"],
    introducedIn: "C",
    factPriority: "core"
  }
];

const conceptSet: LocalConceptSet = {
  id: "art_sculpture_l1_p2",
  concepts
};

export default conceptSet;
