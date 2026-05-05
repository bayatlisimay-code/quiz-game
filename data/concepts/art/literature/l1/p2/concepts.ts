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
    "id": "art_literature_l1_p2_genre_of_book_001",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p2",
    "relation": "genre_of_book",
    "subject": "Harry Potter and the Sorcerer's Stone",
    "object": "fantasy",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "book_genres",
    "tags": ["magic", "adventure"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l1_p2_genre_of_book_002",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p2",
    "relation": "genre_of_book",
    "subject": "1984",
    "object": "dystopian",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "book_genres",
    "tags": ["politics", "future"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l1_p2_genre_of_book_003",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p2",
    "relation": "genre_of_book",
    "subject": "Pride and Prejudice",
    "object": "romance",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "book_genres",
    "tags": ["classic", "british"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l1_p2_genre_of_book_004",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p2",
    "relation": "genre_of_book",
    "subject": "The Great Gatsby",
    "object": "classic",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "book_genres",
    "tags": ["american", "1920s"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l1_p2_genre_of_book_005",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p2",
    "relation": "genre_of_book",
    "subject": "To Kill a Mockingbird",
    "object": "classic",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "book_genres",
    "tags": ["american", "justice"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l1_p2_genre_of_book_006",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p2",
    "relation": "genre_of_book",
    "subject": "The Hobbit",
    "object": "fantasy",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "book_genres",
    "tags": ["adventure", "british"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l1_p2_genre_of_book_007",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p2",
    "relation": "genre_of_book",
    "subject": "The Little Prince",
    "object": "fable",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "book_genres",
    "tags": ["children", "philosophy"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l1_p2_genre_of_book_008",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p2",
    "relation": "genre_of_book",
    "subject": "The Lord of the Rings",
    "object": "fantasy",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "book_genres",
    "tags": ["epic", "british"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l1_p2_genre_of_book_009",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p2",
    "relation": "genre_of_book",
    "subject": "The Da Vinci Code",
    "object": "thriller",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "book_genres",
    "tags": ["mystery", "modern"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l1_p2_genre_of_book_010",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p2",
    "relation": "genre_of_book",
    "subject": "The Catcher in the Rye",
    "object": "classic",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "book_genres",
    "tags": ["american", "coming of age"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l1_p2_genre_of_book_011",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p2",
    "relation": "genre_of_book",
    "subject": "The Chronicles of Narnia",
    "object": "fantasy",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "book_genres",
    "tags": ["children", "british"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l1_p2_genre_of_book_012",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p2",
    "relation": "genre_of_book",
    "subject": "The Alchemist",
    "object": "fable",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "book_genres",
    "tags": ["philosophy", "journey"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l1_p2_genre_of_book_013",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p2",
    "relation": "genre_of_book",
    "subject": "Frankenstein",
    "object": "gothic",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "book_genres",
    "tags": ["horror", "british"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l1_p2_genre_of_book_014",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p2",
    "relation": "genre_of_book",
    "subject": "Dracula",
    "object": "gothic",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "book_genres",
    "tags": ["horror", "irish"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l1_p2_genre_of_book_015",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p2",
    "relation": "genre_of_book",
    "subject": "Moby Dick",
    "object": "classic",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "book_genres",
    "tags": ["american", "adventure"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l1_p2_genre_of_book_016",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p2",
    "relation": "genre_of_book",
    "subject": "Crime and Punishment",
    "object": "classic",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "book_genres",
    "tags": ["russian", "psychology"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l1_p2_genre_of_book_017",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p2",
    "relation": "genre_of_book",
    "subject": "The Odyssey",
    "object": "epic",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "book_genres",
    "tags": ["ancient", "greek"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l1_p2_genre_of_book_018",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p2",
    "relation": "genre_of_book",
    "subject": "War and Peace",
    "object": "historical fiction",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "book_genres",
    "tags": ["russian", "classic"],
    "introducedIn": "C",
    "factPriority": "secondary"
  }
]
  const conceptSet: LocalConceptSet = {
  id: "art_literature_l1_p2",
  concepts,
};

export default conceptSet;