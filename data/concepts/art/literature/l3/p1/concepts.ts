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
    "id": "art_literature_l3_p1_main_authors_of_movement_001",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p1",
    "relation": "main_authors_of_movement",
    "subject": "renaissance",
    "object": "William Shakespeare",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "authors",
    "tags": ["drama", "england", "early modern"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l3_p1_main_authors_of_movement_002",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p1",
    "relation": "main_authors_of_movement",
    "subject": "romanticism",
    "object": "Lord Byron",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "authors",
    "tags": ["emotion", "nature", "poetry"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l3_p1_main_authors_of_movement_003",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p1",
    "relation": "main_authors_of_movement",
    "subject": "realism",
    "object": "Leo Tolstoy",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "authors",
    "tags": ["society", "ordinary life", "russia"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l3_p1_main_authors_of_movement_004",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p1",
    "relation": "main_authors_of_movement",
    "subject": "naturalism",
    "object": "Emile Zola",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "authors",
    "tags": ["society", "determinism", "france"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l3_p1_main_authors_of_movement_005",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p1",
    "relation": "main_authors_of_movement",
    "subject": "modernism",
    "object": "Virginia Woolf",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "authors",
    "tags": ["stream of consciousness", "20th century", "britain"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l3_p1_main_authors_of_movement_006",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p1",
    "relation": "main_authors_of_movement",
    "subject": "symbolism",
    "object": "Charles Baudelaire",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "authors",
    "tags": ["poetry", "symbols", "france"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l3_p1_main_authors_of_movement_007",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p1",
    "relation": "main_authors_of_movement",
    "subject": "existentialism",
    "object": "Albert Camus",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "authors",
    "tags": ["philosophy", "absurd", "france"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l3_p1_main_authors_of_movement_008",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p1",
    "relation": "main_authors_of_movement",
    "subject": "postmodernism",
    "object": "Thomas Pynchon",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "authors",
    "tags": ["irony", "fragmentation", "america"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l3_p1_main_authors_of_movement_009",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p1",
    "relation": "main_authors_of_movement",
    "subject": "surrealism",
    "object": "Andre Breton",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "authors",
    "tags": ["dreams", "unconscious", "france"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l3_p1_main_authors_of_movement_010",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p1",
    "relation": "main_authors_of_movement",
    "subject": "magical realism",
    "object": "Gabriel Garcia Marquez",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "authors",
    "tags": ["latin america", "magic", "reality"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l3_p1_main_authors_of_movement_011",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p1",
    "relation": "main_authors_of_movement",
    "subject": "gothic",
    "object": "Mary Shelley",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "authors",
    "tags": ["horror", "darkness", "romantic era"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l3_p1_main_authors_of_movement_012",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p1",
    "relation": "main_authors_of_movement",
    "subject": "beat generation",
    "object": "Jack Kerouac",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "authors",
    "tags": ["america", "freedom", "counterculture"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l3_p1_main_authors_of_movement_013",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p1",
    "relation": "main_authors_of_movement",
    "subject": "harlem renaissance",
    "object": "Langston Hughes",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "authors",
    "tags": ["african american", "poetry", "new york"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l3_p1_main_authors_of_movement_014",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p1",
    "relation": "main_authors_of_movement",
    "subject": "neoclassicism",
    "object": "Alexander Pope",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "authors",
    "tags": ["order", "reason", "satire"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l3_p1_main_authors_of_movement_015",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p1",
    "relation": "main_authors_of_movement",
    "subject": "transcendentalism",
    "object": "Ralph Waldo Emerson",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "authors",
    "tags": ["nature", "individualism", "america"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l3_p1_main_authors_of_movement_016",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p1",
    "relation": "main_authors_of_movement",
    "subject": "expressionism",
    "object": "Franz Kafka",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "authors",
    "tags": ["emotion", "distortion", "modern"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l3_p1_main_authors_of_movement_017",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p1",
    "relation": "main_authors_of_movement",
    "subject": "absurdism",
    "object": "Samuel Beckett",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "authors",
    "tags": ["theatre", "meaninglessness", "modern"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
  "id": "art_literature_l3_p1_main_authors_of_movement_018",
  "topicId": "art",
  "subtopicId": "literature",
  "levelId": "l3",
  "partId": "p1",
  "relation": "main_authors_of_movement",
  "subject": "victorian realism",
  "object": "Charles Dickens",
  "answerKind": "short",
  "difficulty": 2,
  "distractorGroup": "authors",
  "tags": ["england", "social novel", "19th century"],
  "introducedIn": "C",
  "factPriority": "core"
  }
]

const conceptSet: LocalConceptSet = {
  id: "art_literature_l3_p1",
  concepts,
};

export default conceptSet;