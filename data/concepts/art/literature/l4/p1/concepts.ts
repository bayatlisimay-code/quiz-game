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
    "id": "art_literature_l4_p1_core_feature_of_genre_001",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p1",
    "relation": "core_feature_of_genre",
    "subject": "tragedy",
    "object": "sad ending",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "genre_features",
    "tags": ["sad", "loss"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p1_core_feature_of_genre_002",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p1",
    "relation": "core_feature_of_genre",
    "subject": "comedy",
    "object": "humor",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "genre_features",
    "tags": ["funny"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p1_core_feature_of_genre_003",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p1",
    "relation": "core_feature_of_genre",
    "subject": "drama",
    "object": "serious conflict",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "genre_features",
    "tags": ["emotion", "conflict"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p1_core_feature_of_genre_004",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p1",
    "relation": "core_feature_of_genre",
    "subject": "romance",
    "object": "love story",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "genre_features",
    "tags": ["love"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p1_core_feature_of_genre_005",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p1",
    "relation": "core_feature_of_genre",
    "subject": "fantasy",
    "object": "magic elements",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "genre_features",
    "tags": ["magic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p1_core_feature_of_genre_006",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p1",
    "relation": "core_feature_of_genre",
    "subject": "science fiction",
    "object": "future technology",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "genre_features",
    "tags": ["future", "science"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p1_core_feature_of_genre_007",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p1",
    "relation": "core_feature_of_genre",
    "subject": "adventure",
    "object": "exciting journey",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "genre_features",
    "tags": ["journey"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p1_core_feature_of_genre_008",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p1",
    "relation": "core_feature_of_genre",
    "subject": "horror",
    "object": "fear",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "genre_features",
    "tags": ["scary"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p1_core_feature_of_genre_009",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p1",
    "relation": "core_feature_of_genre",
    "subject": "mystery",
    "object": "hidden truth",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "genre_features",
    "tags": ["clues", "crime"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p1_core_feature_of_genre_010",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p1",
    "relation": "core_feature_of_genre",
    "subject": "thriller",
    "object": "high tension",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "genre_features",
    "tags": ["suspense"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p1_core_feature_of_genre_011",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p1",
    "relation": "core_feature_of_genre",
    "subject": "dystopian",
    "object": "oppressive society",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "genre_features",
    "tags": ["future", "society"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p1_core_feature_of_genre_012",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p1",
    "relation": "core_feature_of_genre",
    "subject": "historical fiction",
    "object": "past setting",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "genre_features",
    "tags": ["history"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p1_core_feature_of_genre_013",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p1",
    "relation": "core_feature_of_genre",
    "subject": "satire",
    "object": "social criticism",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "genre_features",
    "tags": ["criticism", "humor"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l4_p1_core_feature_of_genre_014",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p1",
    "relation": "core_feature_of_genre",
    "subject": "realism",
    "object": "ordinary life",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "genre_features",
    "tags": ["real life"],
    "introducedIn": "C",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p1_core_feature_of_genre_015",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p1",
    "relation": "core_feature_of_genre",
    "subject": "magical realism",
    "object": "everyday magic",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "genre_features",
    "tags": ["magic", "real life"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l4_p1_core_feature_of_genre_016",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p1",
    "relation": "core_feature_of_genre",
    "subject": "gothic",
    "object": "dark atmosphere",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "genre_features",
    "tags": ["dark", "mystery"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l4_p1_core_feature_of_genre_017",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p1",
    "relation": "core_feature_of_genre",
    "subject": "epic",
    "object": "heroic journey",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "genre_features",
    "tags": ["hero", "journey"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l4_p1_core_feature_of_genre_018",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p1",
    "relation": "core_feature_of_genre",
    "subject": "philosophical fiction",
    "object": "big questions",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "genre_features",
    "tags": ["philosophy"],
    "introducedIn": "C",
    "factPriority": "secondary"
  }
]
  
const conceptSet: LocalConceptSet = {
  id: "art_literature_l4_p1",
  concepts,
};

export default conceptSet;