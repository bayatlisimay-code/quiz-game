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
    "id": "art_painting_l3_p4_characteristic_of_movement_001",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p4",
    "relation": "characteristic_of_movement",
    "subject": "Renaissance",
    "object": "linear perspective",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "art_movement_characteristics",
    "tags": ["renaissance", "perspective", "realism"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_painting_l3_p4_characteristic_of_movement_002",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p4",
    "relation": "characteristic_of_movement",
    "subject": "Baroque",
    "object": "dramatic lighting",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "art_movement_characteristics",
    "tags": ["baroque", "light", "drama"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_painting_l3_p4_characteristic_of_movement_003",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p4",
    "relation": "characteristic_of_movement",
    "subject": "Impressionism",
    "object": "visible brushstrokes",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "art_movement_characteristics",
    "tags": ["impressionism", "brushwork", "light"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_painting_l3_p4_characteristic_of_movement_004",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p4",
    "relation": "characteristic_of_movement",
    "subject": "Post-Impressionism",
    "object": "expressive color",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "art_movement_characteristics",
    "tags": ["post-impressionism", "color", "emotion"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_painting_l3_p4_characteristic_of_movement_005",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p4",
    "relation": "characteristic_of_movement",
    "subject": "Cubism",
    "object": "fragmented forms",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "art_movement_characteristics",
    "tags": ["cubism", "geometry", "multiple views"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_painting_l3_p4_characteristic_of_movement_006",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p4",
    "relation": "characteristic_of_movement",
    "subject": "Surrealism",
    "object": "dream imagery",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "art_movement_characteristics",
    "tags": ["surrealism", "dreams", "unconscious"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_painting_l3_p4_characteristic_of_movement_007",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p4",
    "relation": "characteristic_of_movement",
    "subject": "Expressionism",
    "object": "emotional distortion",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "art_movement_characteristics",
    "tags": ["expressionism", "emotion", "distortion"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_painting_l3_p4_characteristic_of_movement_008",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p4",
    "relation": "characteristic_of_movement",
    "subject": "Romanticism",
    "object": "dramatic nature scenes",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "art_movement_characteristics",
    "tags": ["romanticism", "emotion", "nature"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_painting_l3_p4_characteristic_of_movement_009",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p4",
    "relation": "characteristic_of_movement",
    "subject": "Realism",
    "object": "everyday subjects",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "art_movement_characteristics",
    "tags": ["realism", "daily life", "ordinary people"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_painting_l3_p4_characteristic_of_movement_010",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p4",
    "relation": "characteristic_of_movement",
    "subject": "Symbolism",
    "object": "mythic symbolism",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "art_movement_characteristics",
    "tags": ["symbolism", "myth", "ideas"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_painting_l3_p4_characteristic_of_movement_011",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p4",
    "relation": "characteristic_of_movement",
    "subject": "Fauvism",
    "object": "bold color",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "art_movement_characteristics",
    "tags": ["fauvism", "color", "wild color"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_painting_l3_p4_characteristic_of_movement_012",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p4",
    "relation": "characteristic_of_movement",
    "subject": "Neoclassicism",
    "object": "classical order",
    "answerKind": "short",
    "difficulty": 4,
    "distractorGroup": "art_movement_characteristics",
    "tags": ["neoclassicism", "classical", "order"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_painting_l3_p4_characteristic_of_movement_013",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p4",
    "relation": "characteristic_of_movement",
    "subject": "Abstract Expressionism",
    "object": "gestural abstraction",
    "answerKind": "short",
    "difficulty": 4,
    "distractorGroup": "art_movement_characteristics",
    "tags": ["abstract expressionism", "gesture", "abstraction"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_painting_l3_p4_characteristic_of_movement_014",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p4",
    "relation": "characteristic_of_movement",
    "subject": "Pop Art",
    "object": "consumer imagery",
    "answerKind": "short",
    "difficulty": 4,
    "distractorGroup": "art_movement_characteristics",
    "tags": ["pop art", "consumer culture", "mass media"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_painting_l3_p4_characteristic_of_movement_015",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p4",
    "relation": "characteristic_of_movement",
    "subject": "Rococo",
    "object": "ornate elegance",
    "answerKind": "short",
    "difficulty": 4,
    "distractorGroup": "art_movement_characteristics",
    "tags": ["rococo", "ornate", "decorative"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_painting_l3_p4_characteristic_of_movement_016",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p4",
    "relation": "characteristic_of_movement",
    "subject": "Northern Renaissance",
    "object": "fine detail",
    "answerKind": "short",
    "difficulty": 5,
    "distractorGroup": "art_movement_characteristics",
    "tags": ["northern renaissance", "detail", "oil painting"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_painting_l3_p4_characteristic_of_movement_017",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p4",
    "relation": "characteristic_of_movement",
    "subject": "Regionalism",
    "object": "local scenes",
    "answerKind": "short",
    "difficulty": 5,
    "distractorGroup": "art_movement_characteristics",
    "tags": ["regionalism", "local life", "america"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_painting_l3_p4_characteristic_of_movement_018",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p4",
    "relation": "characteristic_of_movement",
    "subject": "Neo-Impressionism",
    "object": "pointillist dots",
    "answerKind": "short",
    "difficulty": 5,
    "distractorGroup": "art_movement_characteristics",
    "tags": ["neo-impressionism", "pointillism", "color theory"],
    "introducedIn": "C",
    "factPriority": "secondary"
  }
]

const conceptSet: LocalConceptSet = {
  id: "art_painting_l3_p4",
  concepts,
};

export default conceptSet;