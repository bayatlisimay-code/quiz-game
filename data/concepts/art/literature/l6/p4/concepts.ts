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
    "id": "art_literature_l6_p4_genre_or_style_of_author_001",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "Miguel de Cervantes",
    "object": "satire",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "genres",
    "tags": ["renaissance", "classic", "spanish"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p4_genre_or_style_of_author_002",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "Victor Hugo",
    "object": "romanticism",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "genres",
    "tags": ["historical fiction", "classic", "french"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p4_genre_or_style_of_author_003",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "Emily Bronte",
    "object": "gothic",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "genres",
    "tags": ["romance", "classic", "british"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p4_genre_or_style_of_author_004",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "Edgar Allan Poe",
    "object": "gothic",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "genres",
    "tags": ["horror", "mystery", "american"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p4_genre_or_style_of_author_005",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "James Joyce",
    "object": "modernism",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "genres",
    "tags": ["stream of consciousness", "classic", "irish"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p4_genre_or_style_of_author_006",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "H. G. Wells",
    "object": "science fiction",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "genres",
    "tags": ["dystopian", "classic", "british"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p4_genre_or_style_of_author_007",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "Alexandre Dumas",
    "object": "adventure",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "genres",
    "tags": ["historical fiction", "romanticism", "french"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p4_genre_or_style_of_author_008",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "Ray Bradbury",
    "object": "science fiction",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "genres",
    "tags": ["dystopian", "modern", "american"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p4_genre_or_style_of_author_009",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "Margaret Atwood",
    "object": "dystopian",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "genres",
    "tags": ["postmodernism", "contemporary", "canadian"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p4_genre_or_style_of_author_010",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "Herman Melville",
    "object": "epic",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "genres",
    "tags": ["adventure", "classic", "american"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p4_genre_or_style_of_author_011",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "Samuel Beckett",
    "object": "absurdism",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "genres",
    "tags": ["drama", "modernism", "irish"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p4_genre_or_style_of_author_012",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "Toni Morrison",
    "object": "magical realism",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "genres",
    "tags": ["drama", "contemporary", "american"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p4_genre_or_style_of_author_013",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "Raymond Chandler",
    "object": "mystery",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "genres",
    "tags": ["noir", "thriller", "american"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l6_p4_genre_or_style_of_author_014",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "Haruki Murakami",
    "object": "magical realism",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "genres",
    "tags": ["postmodernism", "contemporary", "japanese"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l6_p4_genre_or_style_of_author_015",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "Chinua Achebe",
    "object": "historical fiction",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "genres",
    "tags": ["historical fiction", "postcolonial", "nigerian"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l6_p4_genre_or_style_of_author_016",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "Ralph Ellison",
    "object": "realism",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "genres",
    "tags": ["drama", "20th century", "american"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l6_p4_genre_or_style_of_author_017",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "Jorge Luis Borges",
    "object": "magical realism",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "genres",
    "tags": ["philosophy", "short stories", "argentine"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l6_p4_genre_or_style_of_author_018",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "Hermann Hesse",
    "object": "philosophical fiction",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "genres",
    "tags": ["modernism", "spiritual", "german"],
    "introducedIn": "C",
    "factPriority": "secondary"
  }
]
  
const conceptSet: LocalConceptSet = {
  id: "art_literature_l6_p4",
  concepts,
};

export default conceptSet;