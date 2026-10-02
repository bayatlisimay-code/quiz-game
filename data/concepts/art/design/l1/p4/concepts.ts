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
    "id": "art_design_l1_p4_created_in_decade_001",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p4",
    "relation": "created_in_decade",
    "subject": "Eames Lounge Chair",
    "object": "1950s",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "design_decades",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_design_l1_p4_created_in_decade_002",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p4",
    "relation": "created_in_decade",
    "subject": "Wassily Chair",
    "object": "1920s",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "design_decades",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_design_l1_p4_created_in_decade_003",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p4",
    "relation": "created_in_decade",
    "subject": "Braun SK 4",
    "object": "1950s",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "design_decades",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_design_l1_p4_created_in_decade_004",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p4",
    "relation": "created_in_decade",
    "subject": "Juicy Salif",
    "object": "1980s",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "design_decades",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_design_l1_p4_created_in_decade_005",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p4",
    "relation": "created_in_decade",
    "subject": "IBM 8-bar Logo",
    "object": "1970s",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "design_decades",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_design_l1_p4_created_in_decade_006",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p4",
    "relation": "created_in_decade",
    "subject": "Helvetica",
    "object": "1950s",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "design_decades",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_design_l1_p4_created_in_decade_007",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p4",
    "relation": "created_in_decade",
    "subject": "I Love New York Logo",
    "object": "1970s",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "design_decades",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_design_l1_p4_created_in_decade_008",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p4",
    "relation": "created_in_decade",
    "subject": "Arco Floor Lamp",
    "object": "1960s",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "design_decades",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_design_l1_p4_created_in_decade_009",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p4",
    "relation": "created_in_decade",
    "subject": "Moka Express",
    "object": "1930s",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "design_decades",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_design_l1_p4_created_in_decade_010",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p4",
    "relation": "created_in_decade",
    "subject": "Anglepoise Lamp",
    "object": "1930s",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "design_decades",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_design_l1_p4_created_in_decade_011",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p4",
    "relation": "created_in_decade",
    "subject": "New York City Subway Map",
    "object": "1970s",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "design_decades",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_design_l1_p4_created_in_decade_012",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p4",
    "relation": "created_in_decade",
    "subject": "Vertigo Film Poster",
    "object": "1950s",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "design_decades",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_design_l1_p4_created_in_decade_013",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p4",
    "relation": "created_in_decade",
    "subject": "Coca-Cola Contour Bottle",
    "object": "1910s",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "design_decades",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_design_l1_p4_created_in_decade_014",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p4",
    "relation": "created_in_decade",
    "subject": "Olivetti Valentine",
    "object": "1960s",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "design_decades",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_design_l1_p4_created_in_decade_015",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p4",
    "relation": "created_in_decade",
    "subject": "iMac G3",
    "object": "1990s",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "design_decades",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_design_l1_p4_created_in_decade_016",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p4",
    "relation": "created_in_decade",
    "subject": "Futura",
    "object": "1920s",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "design_decades",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "C",
    "factPriority": "core"
  },
  {
    "id": "art_design_l1_p4_created_in_decade_017",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p4",
    "relation": "created_in_decade",
    "subject": "Nike Swoosh",
    "object": "1970s",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "design_decades",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_design_l1_p4_created_in_decade_018",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p4",
    "relation": "created_in_decade",
    "subject": "London Underground Map",
    "object": "1930s",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "design_decades",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "C",
    "factPriority": "core"
  }
];

const conceptSet: LocalConceptSet = {
  id: "art_design_l1_p4",
  concepts,
};

export default conceptSet;