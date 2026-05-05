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
    "id": "art_literature_l3_p4_characteristic_of_movement_001",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p4",
    "relation": "characteristic_of_movement",
    "subject": "renaissance",
    "object": "humanist ideas",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "literary_characteristics",
    "tags": ["humanism", "rebirth", "classical"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l3_p4_characteristic_of_movement_002",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p4",
    "relation": "characteristic_of_movement",
    "subject": "romanticism",
    "object": "focus on emotion",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "literary_characteristics",
    "tags": ["emotion", "nature", "individual"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l3_p4_characteristic_of_movement_003",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p4",
    "relation": "characteristic_of_movement",
    "subject": "realism",
    "object": "ordinary life",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "literary_characteristics",
    "tags": ["society", "reality", "everyday"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l3_p4_characteristic_of_movement_004",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p4",
    "relation": "characteristic_of_movement",
    "subject": "naturalism",
    "object": "social determinism",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "literary_characteristics",
    "tags": ["science", "environment", "fate"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l3_p4_characteristic_of_movement_005",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p4",
    "relation": "characteristic_of_movement",
    "subject": "modernism",
    "object": "fragmented narrative",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "literary_characteristics",
    "tags": ["experimentation", "inner life", "form"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l3_p4_characteristic_of_movement_006",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p4",
    "relation": "characteristic_of_movement",
    "subject": "symbolism",
    "object": "hidden meanings",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "literary_characteristics",
    "tags": ["symbols", "suggestion", "poetry"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l3_p4_characteristic_of_movement_007",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p4",
    "relation": "characteristic_of_movement",
    "subject": "existentialism",
    "object": "search for meaning",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "literary_characteristics",
    "tags": ["freedom", "choice", "existence"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l3_p4_characteristic_of_movement_008",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p4",
    "relation": "characteristic_of_movement",
    "subject": "postmodernism",
    "object": "irony and playfulness",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "literary_characteristics",
    "tags": ["irony", "fragmentation", "style"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l3_p4_characteristic_of_movement_009",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p4",
    "relation": "characteristic_of_movement",
    "subject": "surrealism",
    "object": "dreamlike imagery",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "literary_characteristics",
    "tags": ["dreams", "unconscious", "strange"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l3_p4_characteristic_of_movement_010",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p4",
    "relation": "characteristic_of_movement",
    "subject": "magical realism",
    "object": "magic in ordinary life",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "literary_characteristics",
    "tags": ["magic", "reality", "latin america"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l3_p4_characteristic_of_movement_011",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p4",
    "relation": "characteristic_of_movement",
    "subject": "gothic",
    "object": "dark atmosphere",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "literary_characteristics",
    "tags": ["horror", "mystery", "fear"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l3_p4_characteristic_of_movement_012",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p4",
    "relation": "characteristic_of_movement",
    "subject": "beat generation",
    "object": "rejection of conformity",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "literary_characteristics",
    "tags": ["freedom", "travel", "counterculture"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l3_p4_characteristic_of_movement_013",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p4",
    "relation": "characteristic_of_movement",
    "subject": "harlem renaissance",
    "object": "black cultural identity",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "literary_characteristics",
    "tags": ["african american", "identity", "culture"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l3_p4_characteristic_of_movement_014",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p4",
    "relation": "characteristic_of_movement",
    "subject": "neoclassicism",
    "object": "order and reason",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "literary_characteristics",
    "tags": ["classical", "balance", "satire"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l3_p4_characteristic_of_movement_015",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p4",
    "relation": "characteristic_of_movement",
    "subject": "transcendentalism",
    "object": "trust in nature",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "literary_characteristics",
    "tags": ["nature", "self reliance", "spirituality"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
{
  "id": "art_literature_l3_p4_characteristic_of_movement_016",
  "topicId": "art",
  "subtopicId": "literature",
  "levelId": "l3",
  "partId": "p4",
  "relation": "characteristic_of_movement",
  "subject": "expressionism",
  "object": "distorted emotional reality",
  "answerKind": "short",
  "difficulty": 3,
  "distractorGroup": "literary_characteristics",
  "tags": ["emotion", "distortion", "inner world"],
  "introducedIn": "C",
  "factPriority": "secondary"
},
  {
    "id": "art_literature_l3_p4_characteristic_of_movement_017",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l3",
    "partId": "p4",
    "relation": "characteristic_of_movement",
    "subject": "absurdism",
    "object": "meaningless existence",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "literary_characteristics",
    "tags": ["absurd", "theatre", "existence"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
{
  "id": "art_literature_l3_p4_characteristic_of_movement_018",
  "topicId": "art",
  "subtopicId": "literature",
  "levelId": "l3",
  "partId": "p4",
  "relation": "characteristic_of_movement",
  "subject": "victorian realism",
  "object": "social moral concerns",
  "answerKind": "short",
  "difficulty": 2,
  "distractorGroup": "literary_characteristics",
  "tags": ["society", "morality", "industry"],
  "introducedIn": "C",
  "factPriority": "core"
}
]
  
const conceptSet: LocalConceptSet = {
  id: "art_literature_l3_p4",
  concepts,
};

export default conceptSet;