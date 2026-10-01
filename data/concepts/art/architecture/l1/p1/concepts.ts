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
    id: "art_architecture_l1_p1_architect_of_building_001",
    topicId: "art",
    subtopicId: "architecture",
    levelId: "l1",
    partId: "p1",
    relation: "architect_of_building",
    subject: "Sagrada Família",
    object: "Antoni Gaudí",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "architects",
    tags: ["architecture", "famous_buildings", "level_1"],
    introducedIn: "A",
    factPriority: "core"
  },
  {
    id: "art_architecture_l1_p1_architect_of_building_002",
    topicId: "art",
    subtopicId: "architecture",
    levelId: "l1",
    partId: "p1",
    relation: "architect_of_building",
    subject: "Parthenon",
    object: "Ictinus and Callicrates",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "architects",
    tags: ["architecture", "famous_buildings", "level_1"],
    introducedIn: "A",
    factPriority: "core"
  },
  {
    id: "art_architecture_l1_p1_architect_of_building_003",
    topicId: "art",
    subtopicId: "architecture",
    levelId: "l1",
    partId: "p1",
    relation: "architect_of_building",
    subject: "Hagia Sophia",
    object: "Anthemius of Tralles and Isidore of Miletus",
    answerKind: "short",
    difficulty: 2,
    distractorGroup: "architects",
    tags: ["architecture", "famous_buildings", "level_1"],
    introducedIn: "A",
    factPriority: "core"
  },
  {
    id: "art_architecture_l1_p1_architect_of_building_004",
    topicId: "art",
    subtopicId: "architecture",
    levelId: "l1",
    partId: "p1",
    relation: "architect_of_building",
    subject: "Pyramid of Djoser",
    object: "Imhotep",
    answerKind: "short",
    difficulty: 2,
    distractorGroup: "architects",
    tags: ["architecture", "famous_buildings", "level_1"],
    introducedIn: "A",
    factPriority: "core"
  },
  {
    id: "art_architecture_l1_p1_architect_of_building_005",
    topicId: "art",
    subtopicId: "architecture",
    levelId: "l1",
    partId: "p1",
    relation: "architect_of_building",
    subject: "Florence Cathedral Dome",
    object: "Filippo Brunelleschi",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "architects",
    tags: ["architecture", "famous_buildings", "level_1"],
    introducedIn: "A",
    factPriority: "core"
  },
  {
    id: "art_architecture_l1_p1_architect_of_building_006",
    topicId: "art",
    subtopicId: "architecture",
    levelId: "l1",
    partId: "p1",
    relation: "architect_of_building",
    subject: "Petronas Towers",
    object: "César Pelli",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "architects",
    tags: ["architecture", "famous_buildings", "level_1"],
    introducedIn: "A",
    factPriority: "core"
  },
  {
    id: "art_architecture_l1_p1_architect_of_building_007",
    topicId: "art",
    subtopicId: "architecture",
    levelId: "l1",
    partId: "p1",
    relation: "architect_of_building",
    subject: "St Paul's Cathedral",
    object: "Christopher Wren",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "architects",
    tags: ["architecture", "famous_buildings", "level_1"],
    introducedIn: "A",
    factPriority: "core"
  },
  {
    id: "art_architecture_l1_p1_architect_of_building_008",
    topicId: "art",
    subtopicId: "architecture",
    levelId: "l1",
    partId: "p1",
    relation: "architect_of_building",
    subject: "Guggenheim Museum Bilbao",
    object: "Frank Gehry",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "architects",
    tags: ["architecture", "famous_buildings", "level_1"],
    introducedIn: "B",
    factPriority: "core"
  },
  {
    id: "art_architecture_l1_p1_architect_of_building_009",
    topicId: "art",
    subtopicId: "architecture",
    levelId: "l1",
    partId: "p1",
    relation: "architect_of_building",
    subject: "Palace of Westminster",
    object: "Charles Barry and Augustus Pugin",
    answerKind: "short",
    difficulty: 2,
    distractorGroup: "architects",
    tags: ["architecture", "famous_buildings", "level_1"],
    introducedIn: "B",
    factPriority: "core"
  },
  {
    id: "art_architecture_l1_p1_architect_of_building_010",
    topicId: "art",
    subtopicId: "architecture",
    levelId: "l1",
    partId: "p1",
    relation: "architect_of_building",
    subject: "Villa Savoye",
    object: "Le Corbusier",
    answerKind: "short",
    difficulty: 2,
    distractorGroup: "architects",
    tags: ["architecture", "famous_buildings", "level_1"],
    introducedIn: "B",
    factPriority: "core"
  },
  {
    id: "art_architecture_l1_p1_architect_of_building_011",
    topicId: "art",
    subtopicId: "architecture",
    levelId: "l1",
    partId: "p1",
    relation: "architect_of_building",
    subject: "Bauhaus Building",
    object: "Walter Gropius",
    answerKind: "short",
    difficulty: 2,
    distractorGroup: "architects",
    tags: ["architecture", "famous_buildings", "level_1"],
    introducedIn: "B",
    factPriority: "core"
  },
  {
    id: "art_architecture_l1_p1_architect_of_building_012",
    topicId: "art",
    subtopicId: "architecture",
    levelId: "l1",
    partId: "p1",
    relation: "architect_of_building",
    subject: "Chrysler Building",
    object: "William Van Alen",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "architects",
    tags: ["architecture", "famous_buildings", "level_1"],
    introducedIn: "B",
    factPriority: "core"
  },
  {
    id: "art_architecture_l1_p1_architect_of_building_013",
    topicId: "art",
    subtopicId: "architecture",
    levelId: "l1",
    partId: "p1",
    relation: "architect_of_building",
    subject: "Fallingwater",
    object: "Frank Lloyd Wright",
    answerKind: "short",
    difficulty: 2,
    distractorGroup: "architects",
    tags: ["architecture", "famous_buildings", "level_1"],
    introducedIn: "B",
    factPriority: "core"
  },
  {
    id: "art_architecture_l1_p1_architect_of_building_014",
    topicId: "art",
    subtopicId: "architecture",
    levelId: "l1",
    partId: "p1",
    relation: "architect_of_building",
    subject: "Cathedral of Brasília",
    object: "Oscar Niemeyer",
    answerKind: "short",
    difficulty: 2,
    distractorGroup: "architects",
    tags: ["architecture", "famous_buildings", "level_1"],
    introducedIn: "C",
    factPriority: "core"
  },
  {
    id: "art_architecture_l1_p1_architect_of_building_015",
    topicId: "art",
    subtopicId: "architecture",
    levelId: "l1",
    partId: "p1",
    relation: "architect_of_building",
    subject: "Sydney Opera House",
    object: "Jørn Utzon",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "architects",
    tags: ["architecture", "famous_buildings", "level_1"],
    introducedIn: "C",
    factPriority: "core"
  },
  {
    id: "art_architecture_l1_p1_architect_of_building_016",
    topicId: "art",
    subtopicId: "architecture",
    levelId: "l1",
    partId: "p1",
    relation: "architect_of_building",
    subject: "Lotus Temple",
    object: "Fariborz Sahba",
    answerKind: "short",
    difficulty: 2,
    distractorGroup: "architects",
    tags: ["architecture", "famous_buildings", "level_1"],
    introducedIn: "C",
    factPriority: "core"
  },
  {
    id: "art_architecture_l1_p1_architect_of_building_017",
    topicId: "art",
    subtopicId: "architecture",
    levelId: "l1",
    partId: "p1",
    relation: "architect_of_building",
    subject: "Hassan II Mosque",
    object: "Michel Pinseau",
    answerKind: "short",
    difficulty: 2,
    distractorGroup: "architects",
    tags: ["architecture", "famous_buildings", "level_1"],
    introducedIn: "C",
    factPriority: "core"
  },
  {
    id: "art_architecture_l1_p1_architect_of_building_018",
    topicId: "art",
    subtopicId: "architecture",
    levelId: "l1",
    partId: "p1",
    relation: "architect_of_building",
    subject: "Burj Khalifa",
    object: "Adrian Smith",
    answerKind: "short",
    difficulty: 1,
    distractorGroup: "architects",
    tags: ["architecture", "famous_buildings", "level_1"],
    introducedIn: "C",
    factPriority: "core"
  }
];

const conceptSet: LocalConceptSet = {
  id: "art_architecture_l1_p1",
  concepts
};

export default conceptSet;