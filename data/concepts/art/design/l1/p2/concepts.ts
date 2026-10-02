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
    "id": "art_design_l1_p2_type_of_design_001",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p2",
    "relation": "type_of_design",
    "subject": "Eames Lounge Chair",
    "object": "Furniture design",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "design_types",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_design_l1_p2_type_of_design_002",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p2",
    "relation": "type_of_design",
    "subject": "Wassily Chair",
    "object": "Furniture design",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "design_types",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_design_l1_p2_type_of_design_003",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p2",
    "relation": "type_of_design",
    "subject": "Braun SK 4",
    "object": "Product design",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "design_types",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_design_l1_p2_type_of_design_004",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p2",
    "relation": "type_of_design",
    "subject": "Juicy Salif",
    "object": "Product design",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "design_types",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_design_l1_p2_type_of_design_005",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p2",
    "relation": "type_of_design",
    "subject": "IBM 8-bar Logo",
    "object": "Logo design",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "design_types",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_design_l1_p2_type_of_design_006",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p2",
    "relation": "type_of_design",
    "subject": "Helvetica",
    "object": "Typeface design",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "design_types",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_design_l1_p2_type_of_design_007",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p2",
    "relation": "type_of_design",
    "subject": "I Love New York Logo",
    "object": "Logo design",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "design_types",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_design_l1_p2_type_of_design_008",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p2",
    "relation": "type_of_design",
    "subject": "Arco Floor Lamp",
    "object": "Lighting design",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "design_types",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_design_l1_p2_type_of_design_009",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p2",
    "relation": "type_of_design",
    "subject": "Moka Express",
    "object": "Product design",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "design_types",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_design_l1_p2_type_of_design_010",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p2",
    "relation": "type_of_design",
    "subject": "Anglepoise Lamp",
    "object": "Lighting design",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "design_types",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_design_l1_p2_type_of_design_011",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p2",
    "relation": "type_of_design",
    "subject": "New York City Subway Map",
    "object": "Information design",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "design_types",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_design_l1_p2_type_of_design_012",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p2",
    "relation": "type_of_design",
    "subject": "Vertigo Film Poster",
    "object": "Poster design",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "design_types",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_design_l1_p2_type_of_design_013",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p2",
    "relation": "type_of_design",
    "subject": "Coca-Cola Contour Bottle",
    "object": "Packaging design",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "design_types",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_design_l1_p2_type_of_design_014",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p2",
    "relation": "type_of_design",
    "subject": "Olivetti Valentine",
    "object": "Product design",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "design_types",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_design_l1_p2_type_of_design_015",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p2",
    "relation": "type_of_design",
    "subject": "iMac G3",
    "object": "Product design",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "design_types",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_design_l1_p2_type_of_design_016",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p2",
    "relation": "type_of_design",
    "subject": "Futura",
    "object": "Typeface design",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "design_types",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "C",
    "factPriority": "core"
  },
  {
    "id": "art_design_l1_p2_type_of_design_017",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p2",
    "relation": "type_of_design",
    "subject": "Nike Swoosh",
    "object": "Logo design",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "design_types",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_design_l1_p2_type_of_design_018",
    "topicId": "art",
    "subtopicId": "design",
    "levelId": "l1",
    "partId": "p2",
    "relation": "type_of_design",
    "subject": "London Underground Map",
    "object": "Information design",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "design_types",
    "tags": ["design", "famous_designs", "level_1"],
    "introducedIn": "C",
    "factPriority": "core"
  }
];

const conceptSet: LocalConceptSet = {
  id: "art_design_l1_p2",
  concepts,
};

export default conceptSet;