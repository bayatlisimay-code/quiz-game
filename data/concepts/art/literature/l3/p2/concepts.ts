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
    "id": "art_literature_l3_p2_period_of_movement_001",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p2",
    "relation": "period_of_movement",
    "subject": "renaissance",
    "object": "16th century",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "time_periods",
    "tags": ["early modern", "europe", "rebirth"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l3_p2_period_of_movement_002",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p2",
    "relation": "period_of_movement",
    "subject": "romanticism",
    "object": "late 18th century",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "time_periods",
    "tags": ["emotion", "nature", "europe"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l3_p2_period_of_movement_003",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p2",
    "relation": "period_of_movement",
    "subject": "realism",
    "object": "19th century",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "time_periods",
    "tags": ["ordinary life", "society", "europe"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l3_p2_period_of_movement_004",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p2",
    "relation": "period_of_movement",
    "subject": "naturalism",
    "object": "late 19th century",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "time_periods",
    "tags": ["science", "society", "determinism"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l3_p2_period_of_movement_005",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p2",
    "relation": "period_of_movement",
    "subject": "modernism",
    "object": "early 20th century",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "time_periods",
    "tags": ["experimentation", "fragmentation", "20th century"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l3_p2_period_of_movement_006",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p2",
    "relation": "period_of_movement",
    "subject": "symbolism",
    "object": "late 19th century",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "time_periods",
    "tags": ["poetry", "suggestion", "france"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l3_p2_period_of_movement_007",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p2",
    "relation": "period_of_movement",
    "subject": "existentialism",
    "object": "mid 20th century",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "time_periods",
    "tags": ["philosophy", "freedom", "meaning"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l3_p2_period_of_movement_008",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p2",
    "relation": "period_of_movement",
    "subject": "postmodernism",
    "object": "late 20th century",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "time_periods",
    "tags": ["irony", "fragmentation", "culture"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l3_p2_period_of_movement_009",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p2",
    "relation": "period_of_movement",
    "subject": "surrealism",
    "object": "early 20th century",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "time_periods",
    "tags": ["dreams", "unconscious", "avant garde"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l3_p2_period_of_movement_010",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p2",
    "relation": "period_of_movement",
    "subject": "magical realism",
    "object": "mid 20th century",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "time_periods",
    "tags": ["latin america", "magic", "reality"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l3_p2_period_of_movement_011",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p2",
    "relation": "period_of_movement",
    "subject": "gothic",
    "object": "late 18th century",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "time_periods",
    "tags": ["horror", "mystery", "darkness"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l3_p2_period_of_movement_012",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p2",
    "relation": "period_of_movement",
    "subject": "beat generation",
    "object": "mid 20th century",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "time_periods",
    "tags": ["counterculture", "america", "freedom"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l3_p2_period_of_movement_013",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p2",
    "relation": "period_of_movement",
    "subject": "harlem renaissance",
    "object": "early 20th century",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "time_periods",
    "tags": ["african american", "new york", "jazz age"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l3_p2_period_of_movement_014",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p2",
    "relation": "period_of_movement",
    "subject": "neoclassicism",
    "object": "18th century",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "time_periods",
    "tags": ["reason", "order", "classical"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l3_p2_period_of_movement_015",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p2",
    "relation": "period_of_movement",
    "subject": "transcendentalism",
    "object": "mid 19th century",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "time_periods",
    "tags": ["nature", "individualism", "america"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
  "id": "art_literature_l3_p2_period_of_movement_016",
  "topicId": "art",
  "subtopicId": "literature",
  "levelId": "l3",
  "partId": "p2",
  "relation": "period_of_movement",
  "subject": "expressionism",
  "object": "early 20th century",
  "answerKind": "short",
  "difficulty": 3,
  "distractorGroup": "time_periods",
  "tags": ["emotion", "modern", "europe"],
  "introducedIn": "C",
  "factPriority": "secondary"
  },
  {
    "id": "art_literature_l3_p2_period_of_movement_017",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p2",
    "relation": "period_of_movement",
    "subject": "absurdism",
    "object": "mid 20th century",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "time_periods",
    "tags": ["theatre", "meaninglessness", "existence"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
  "id": "art_literature_l3_p2_period_of_movement_018",
  "topicId": "art",
  "subtopicId": "literature",
  "levelId": "l3",
  "partId": "p2",
  "relation": "period_of_movement",
  "subject": "victorian realism",
  "object": "19th century",
  "answerKind": "short",
  "difficulty": 2,
  "distractorGroup": "time_periods",
  "tags": ["england", "industry", "society"],
  "introducedIn": "C",
  "factPriority": "core"
  }
]
  
const conceptSet: LocalConceptSet = {
  id: "art_literature_l3_p2",
  concepts,
};

export default conceptSet;