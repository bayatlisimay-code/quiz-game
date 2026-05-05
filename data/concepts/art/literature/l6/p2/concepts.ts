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
    "id": "art_literature_l6_p2_known_for_book_001",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "Miguel de Cervantes",
    "object": "Don Quixote",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["renaissance", "satire", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p2_known_for_book_002",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "Victor Hugo",
    "object": "Les Miserables",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["romanticism", "historical fiction", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p2_known_for_book_003",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "Emily Bronte",
    "object": "Wuthering Heights",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["gothic", "romance", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p2_known_for_book_004",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "Edgar Allan Poe",
    "object": "The Tell-Tale Heart",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["gothic", "horror", "mystery"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p2_known_for_book_005",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "James Joyce",
    "object": "Ulysses",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["modernism", "stream of consciousness", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p2_known_for_book_006",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "H. G. Wells",
    "object": "The Time Machine",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["science fiction", "dystopian", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p2_known_for_book_007",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "Alexandre Dumas",
    "object": "The Three Musketeers",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["adventure", "historical fiction", "romanticism"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p2_known_for_book_008",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "Ray Bradbury",
    "object": "Fahrenheit 451",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "books",
    "tags": ["science fiction", "dystopian", "modern"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p2_known_for_book_009",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "Margaret Atwood",
    "object": "The Handmaid's Tale",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "books",
    "tags": ["dystopian", "postmodernism", "contemporary"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p2_known_for_book_010",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "Herman Melville",
    "object": "Moby-Dick",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "books",
    "tags": ["epic", "adventure", "classic"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p2_known_for_book_011",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "Samuel Beckett",
    "object": "Waiting for Godot",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "books",
    "tags": ["absurdism", "drama", "modernism"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p2_known_for_book_012",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "Toni Morrison",
    "object": "Beloved",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "books",
    "tags": ["realism", "drama", "contemporary"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l6_p2_known_for_book_013",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "Raymond Chandler",
    "object": "The Big Sleep",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "books",
    "tags": ["mystery", "noir", "thriller"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l6_p2_known_for_book_014",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "Haruki Murakami",
    "object": "Kafka on the Shore",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "books",
    "tags": ["magical realism", "postmodernism", "contemporary"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l6_p2_known_for_book_015",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "Chinua Achebe",
    "object": "Things Fall Apart",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "books",
    "tags": ["realism", "historical fiction", "postcolonial"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l6_p2_known_for_book_016",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "Ralph Ellison",
    "object": "Invisible Man",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "books",
    "tags": ["realism", "drama", "20th century"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l6_p2_known_for_book_017",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "Jorge Luis Borges",
    "object": "Ficciones",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "books",
    "tags": ["magical realism", "philosophy", "short stories"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l6_p2_known_for_book_018",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l6",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "Hermann Hesse",
    "object": "Siddhartha",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "books",
    "tags": ["philosophical fiction", "modernism", "spiritual"],
    "introducedIn": "C",
    "factPriority": "secondary"
  }
]
  
const conceptSet: LocalConceptSet = {
  id: "art_literature_l6_p2",
  concepts,
};

export default conceptSet;