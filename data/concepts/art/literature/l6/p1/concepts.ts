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
    "id": "art_literature_l6_p1_nationality_of_author_001",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "Miguel de Cervantes",
    "object": "Spanish",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "nationalities",
    "tags": ["renaissance", "satire", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p1_nationality_of_author_002",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "Victor Hugo",
    "object": "French",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "nationalities",
    "tags": ["romanticism", "historical fiction", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p1_nationality_of_author_003",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "Emily Bronte",
    "object": "British",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "nationalities",
    "tags": ["gothic", "romance", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p1_nationality_of_author_004",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "Edgar Allan Poe",
    "object": "American",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "nationalities",
    "tags": ["gothic", "horror", "mystery"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p1_nationality_of_author_005",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "James Joyce",
    "object": "Irish",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "nationalities",
    "tags": ["modernism", "stream of consciousness", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p1_nationality_of_author_006",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "H. G. Wells",
    "object": "British",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "nationalities",
    "tags": ["science fiction", "dystopian", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p1_nationality_of_author_007",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "Alexandre Dumas",
    "object": "French",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "nationalities",
    "tags": ["adventure", "historical fiction", "romanticism"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p1_nationality_of_author_008",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "Ray Bradbury",
    "object": "American",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "nationalities",
    "tags": ["science fiction", "dystopian", "modern"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p1_nationality_of_author_009",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "Margaret Atwood",
    "object": "Canadian",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "nationalities",
    "tags": ["dystopian", "postmodernism", "contemporary"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p1_nationality_of_author_010",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "Herman Melville",
    "object": "American",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "nationalities",
    "tags": ["epic", "adventure", "classic"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p1_nationality_of_author_011",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "Samuel Beckett",
    "object": "Irish",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "nationalities",
    "tags": ["absurdism", "drama", "modernism"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p1_nationality_of_author_012",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "Toni Morrison",
    "object": "American",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "nationalities",
    "tags": ["realism", "drama", "contemporary"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p1_nationality_of_author_013",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "Raymond Chandler",
    "object": "American",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "nationalities",
    "tags": ["mystery", "noir", "thriller"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l6_p1_nationality_of_author_014",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "Haruki Murakami",
    "object": "Japanese",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "nationalities",
    "tags": ["magical realism", "postmodernism", "contemporary"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l6_p1_nationality_of_author_015",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "Chinua Achebe",
    "object": "Nigerian",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "nationalities",
    "tags": ["realism", "historical fiction", "postcolonial"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l6_p1_nationality_of_author_016",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "Ralph Ellison",
    "object": "American",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "nationalities",
    "tags": ["realism", "drama", "20th century"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l6_p1_nationality_of_author_017",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "Jorge Luis Borges",
    "object": "Argentine",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "nationalities",
    "tags": ["magical realism", "philosophy", "short stories"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l6_p1_nationality_of_author_018",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "Hermann Hesse",
    "object": "German",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "nationalities",
    "tags": ["philosophical fiction", "modernism", "spiritual"],
    "introducedIn": "C",
    "factPriority": "secondary"
  }
]
  
const conceptSet: LocalConceptSet = {
  id: "art_literature_l6_p1",
  concepts,
};

export default conceptSet;