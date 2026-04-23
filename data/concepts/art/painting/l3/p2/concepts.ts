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
    "id": "art_painting_l3_p2_period_of_movement_001",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p2",
    "relation": "period_of_movement",
    "subject": "Renaissance",
    "object": "14th–16th century",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "art_movement_periods",
    "tags": ["renaissance", "early modern", "europe"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_painting_l3_p2_period_of_movement_002",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p2",
    "relation": "period_of_movement",
    "subject": "Baroque",
    "object": "17th century",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "art_movement_periods",
    "tags": ["baroque", "17th century", "europe"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_painting_l3_p2_period_of_movement_003",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p2",
    "relation": "period_of_movement",
    "subject": "Impressionism",
    "object": "late 19th century",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "art_movement_periods",
    "tags": ["impressionism", "19th century", "france"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_painting_l3_p2_period_of_movement_004",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p2",
    "relation": "period_of_movement",
    "subject": "Post-Impressionism",
    "object": "late 19th century",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "art_movement_periods",
    "tags": ["post-impressionism", "19th century", "europe"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_painting_l3_p2_period_of_movement_005",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p2",
    "relation": "period_of_movement",
    "subject": "Cubism",
    "object": "early 20th century",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "art_movement_periods",
    "tags": ["cubism", "20th century", "modern art"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_painting_l3_p2_period_of_movement_006",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p2",
    "relation": "period_of_movement",
    "subject": "Surrealism",
    "object": "1920s–1930s",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "art_movement_periods",
    "tags": ["surrealism", "interwar", "modern art"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_painting_l3_p2_period_of_movement_007",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p2",
    "relation": "period_of_movement",
    "subject": "Expressionism",
    "object": "early 20th century",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "art_movement_periods",
    "tags": ["expressionism", "20th century", "germany"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_painting_l3_p2_period_of_movement_008",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p2",
    "relation": "period_of_movement",
    "subject": "Romanticism",
    "object": "late 18th–early 19th century",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "art_movement_periods",
    "tags": ["romanticism", "18th century", "19th century"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_painting_l3_p2_period_of_movement_009",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p2",
    "relation": "period_of_movement",
    "subject": "Realism",
    "object": "mid 19th century",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "art_movement_periods",
    "tags": ["realism", "19th century", "france"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_painting_l3_p2_period_of_movement_010",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p2",
    "relation": "period_of_movement",
    "subject": "Symbolism",
    "object": "late 19th century",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "art_movement_periods",
    "tags": ["symbolism", "19th century", "europe"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_painting_l3_p2_period_of_movement_011",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p2",
    "relation": "period_of_movement",
    "subject": "Fauvism",
    "object": "early 20th century",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "art_movement_periods",
    "tags": ["fauvism", "20th century", "france"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_painting_l3_p2_period_of_movement_012",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p2",
    "relation": "period_of_movement",
    "subject": "Neoclassicism",
    "object": "late 18th–early 19th century",
    "answerKind": "short",
    "difficulty": 4,
    "distractorGroup": "art_movement_periods",
    "tags": ["neoclassicism", "18th century", "classical revival"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_painting_l3_p2_period_of_movement_013",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p2",
    "relation": "period_of_movement",
    "subject": "Abstract Expressionism",
    "object": "1940s–1950s",
    "answerKind": "short",
    "difficulty": 4,
    "distractorGroup": "art_movement_periods",
    "tags": ["abstract expressionism", "20th century", "usa"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_painting_l3_p2_period_of_movement_014",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p2",
    "relation": "period_of_movement",
    "subject": "Pop Art",
    "object": "1950s–1960s",
    "answerKind": "short",
    "difficulty": 4,
    "distractorGroup": "art_movement_periods",
    "tags": ["pop art", "20th century", "postwar"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_painting_l3_p2_period_of_movement_015",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p2",
    "relation": "period_of_movement",
    "subject": "Rococo",
    "object": "18th century",
    "answerKind": "short",
    "difficulty": 4,
    "distractorGroup": "art_movement_periods",
    "tags": ["rococo", "18th century", "france"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_painting_l3_p2_period_of_movement_016",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p2",
    "relation": "period_of_movement",
    "subject": "Northern Renaissance",
    "object": "15th–16th century",
    "answerKind": "short",
    "difficulty": 5,
    "distractorGroup": "art_movement_periods",
    "tags": ["northern renaissance", "early modern", "northern europe"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_painting_l3_p2_period_of_movement_017",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p2",
    "relation": "period_of_movement",
    "subject": "Regionalism",
    "object": "1930s",
    "answerKind": "short",
    "difficulty": 5,
    "distractorGroup": "art_movement_periods",
    "tags": ["regionalism", "20th century", "usa"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_painting_l3_p2_period_of_movement_018",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p2",
    "relation": "period_of_movement",
    "subject": "Neo-Impressionism",
    "object": "late 19th century",
    "answerKind": "short",
    "difficulty": 5,
    "distractorGroup": "art_movement_periods",
    "tags": ["neo-impressionism", "19th century", "france"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
]
const conceptSet: LocalConceptSet = {
  id: "art_painting_l3_p2",
  concepts,
};

export default conceptSet;