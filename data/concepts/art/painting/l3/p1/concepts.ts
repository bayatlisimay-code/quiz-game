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
    "id": "art_painting_l3_p1_main_artists_of_movement_001",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p1",
    "relation": "main_artists_of_movement",
    "subject": "Renaissance",
    "object": "Leonardo da Vinci",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "art_movement_artists",
    "tags": ["renaissance", "italy", "high renaissance"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_painting_l3_p1_main_artists_of_movement_002",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p1",
    "relation": "main_artists_of_movement",
    "subject": "Baroque",
    "object": "Caravaggio",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "art_movement_artists",
    "tags": ["baroque", "italy", "dramatic light"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_painting_l3_p1_main_artists_of_movement_003",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p1",
    "relation": "main_artists_of_movement",
    "subject": "Impressionism",
    "object": "Claude Monet",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "art_movement_artists",
    "tags": ["impressionism", "france", "light"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_painting_l3_p1_main_artists_of_movement_004",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p1",
    "relation": "main_artists_of_movement",
    "subject": "Post-Impressionism",
    "object": "Vincent van Gogh",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "art_movement_artists",
    "tags": ["post-impressionism", "netherlands", "color"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_painting_l3_p1_main_artists_of_movement_005",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p1",
    "relation": "main_artists_of_movement",
    "subject": "Cubism",
    "object": "Pablo Picasso",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "art_movement_artists",
    "tags": ["cubism", "spain", "geometric forms"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_painting_l3_p1_main_artists_of_movement_006",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p1",
    "relation": "main_artists_of_movement",
    "subject": "Surrealism",
    "object": "Salvador Dali",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "art_movement_artists",
    "tags": ["surrealism", "spain", "dream imagery"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_painting_l3_p1_main_artists_of_movement_007",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p1",
    "relation": "main_artists_of_movement",
    "subject": "Expressionism",
    "object": "Edvard Munch",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "art_movement_artists",
    "tags": ["expressionism", "norway", "emotion"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_painting_l3_p1_main_artists_of_movement_008",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p1",
    "relation": "main_artists_of_movement",
    "subject": "Romanticism",
    "object": "Eugene Delacroix",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "art_movement_artists",
    "tags": ["romanticism", "france", "drama"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_painting_l3_p1_main_artists_of_movement_009",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p1",
    "relation": "main_artists_of_movement",
    "subject": "Realism",
    "object": "Gustave Courbet",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "art_movement_artists",
    "tags": ["realism", "france", "everyday life"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_painting_l3_p1_main_artists_of_movement_010",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p1",
    "relation": "main_artists_of_movement",
    "subject": "Symbolism",
    "object": "Odilon Redon",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "art_movement_artists",
    "tags": ["symbolism", "france", "myth"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_painting_l3_p1_main_artists_of_movement_011",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p1",
    "relation": "main_artists_of_movement",
    "subject": "Fauvism",
    "object": "Henri Matisse",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "art_movement_artists",
    "tags": ["fauvism", "france", "bold color"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_painting_l3_p1_main_artists_of_movement_012",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p1",
    "relation": "main_artists_of_movement",
    "subject": "Neoclassicism",
    "object": "Jacques-Louis David",
    "answerKind": "short",
    "difficulty": 4,
    "distractorGroup": "art_movement_artists",
    "tags": ["neoclassicism", "france", "classical"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_painting_l3_p1_main_artists_of_movement_013",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p1",
    "relation": "main_artists_of_movement",
    "subject": "Abstract Expressionism",
    "object": "Jackson Pollock",
    "answerKind": "short",
    "difficulty": 4,
    "distractorGroup": "art_movement_artists",
    "tags": ["abstract expressionism", "usa", "action painting"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_painting_l3_p1_main_artists_of_movement_014",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p1",
    "relation": "main_artists_of_movement",
    "subject": "Pop Art",
    "object": "Andy Warhol",
    "answerKind": "short",
    "difficulty": 4,
    "distractorGroup": "art_movement_artists",
    "tags": ["pop art", "usa", "consumer culture"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_painting_l3_p1_main_artists_of_movement_015",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p1",
    "relation": "main_artists_of_movement",
    "subject": "Rococo",
    "object": "Jean-Honore Fragonard",
    "answerKind": "short",
    "difficulty": 4,
    "distractorGroup": "art_movement_artists",
    "tags": ["rococo", "france", "ornate"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_painting_l3_p1_main_artists_of_movement_016",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p1",
    "relation": "main_artists_of_movement",
    "subject": "Northern Renaissance",
    "object": "Jan van Eyck",
    "answerKind": "short",
    "difficulty": 5,
    "distractorGroup": "art_movement_artists",
    "tags": ["northern renaissance", "netherlands", "detail"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_painting_l3_p1_main_artists_of_movement_017",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p1",
    "relation": "main_artists_of_movement",
    "subject": "Regionalism",
    "object": "Grant Wood",
    "answerKind": "short",
    "difficulty": 5,
    "distractorGroup": "art_movement_artists",
    "tags": ["regionalism", "usa", "american midwest"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_painting_l3_p1_main_artists_of_movement_018",
    "topicId": "art",
    "subtopicId": "painting",
    "levelId": "l3",
    "partId": "p1",
    "relation": "main_artists_of_movement",
    "subject": "Neo-Impressionism",
    "object": "Georges Seurat",
    "answerKind": "short",
    "difficulty": 5,
    "distractorGroup": "art_movement_artists",
    "tags": ["neo-impressionism", "france", "pointillism"],
    "introducedIn": "C",
    "factPriority": "secondary"
  }
]
const conceptSet: LocalConceptSet = {
  id: "art_painting_l3_p1",
  concepts,
};

export default conceptSet;