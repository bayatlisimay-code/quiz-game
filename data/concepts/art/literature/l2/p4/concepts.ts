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
    "id": "art_literature_l2_p4_genre_or_style_of_author_001",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "William Shakespeare",
    "object": "drama",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "author_genres_styles",
    "tags": ["theatre", "tragedy", "english"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p4_genre_or_style_of_author_002",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "Jane Austen",
    "object": "romance",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "author_genres_styles",
    "tags": ["society", "relationships"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p4_genre_or_style_of_author_003",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "Charles Dickens",
    "object": "social novel",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "author_genres_styles",
    "tags": ["poverty", "victorian"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p4_genre_or_style_of_author_004",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "Mark Twain",
    "object": "satire",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "author_genres_styles",
    "tags": ["humor", "american"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p4_genre_or_style_of_author_005",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "George Orwell",
    "object": "dystopian fiction",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "author_genres_styles",
    "tags": ["politics", "totalitarianism"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p4_genre_or_style_of_author_006",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "Leo Tolstoy",
    "object": "realism",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "author_genres_styles",
    "tags": ["history", "russian"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p4_genre_or_style_of_author_007",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "Fyodor Dostoevsky",
    "object": "psychological fiction",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "author_genres_styles",
    "tags": ["mind", "morality"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p4_genre_or_style_of_author_008",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "Ernest Hemingway",
    "object": "realism",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "author_genres_styles",
    "tags": ["war", "minimalism"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p4_genre_or_style_of_author_009",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "F. Scott Fitzgerald",
    "object": "modernist fiction",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "author_genres_styles",
    "tags": ["1920s", "society"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p4_genre_or_style_of_author_010",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "Virginia Woolf",
    "object": "modernist fiction",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "author_genres_styles",
    "tags": ["stream of consciousness", "feminism"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p4_genre_or_style_of_author_011",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "Albert Camus",
    "object": "existential fiction",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "author_genres_styles",
    "tags": ["philosophy", "absurd"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p4_genre_or_style_of_author_012",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "Franz Kafka",
    "object": "existential fiction",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "author_genres_styles",
    "tags": ["absurd", "existence"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p4_genre_or_style_of_author_013",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "Gabriel Garcia Marquez",
    "object": "magical realism",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "author_genres_styles",
    "tags": ["latin america", "fantasy"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p4_genre_or_style_of_author_014",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "J. K. Rowling",
    "object": "fantasy",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "author_genres_styles",
    "tags": ["magic", "adventure"],
    "introducedIn": "C",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p4_genre_or_style_of_author_015",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "J. R. R. Tolkien",
    "object": "fantasy",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "author_genres_styles",
    "tags": ["epic", "myth"],
    "introducedIn": "C",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p4_genre_or_style_of_author_016",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "Antoine de Saint-Exupery",
    "object": "philosophical fiction",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "author_genres_styles",
    "tags": ["children", "meaning"],
    "introducedIn": "C",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p4_genre_or_style_of_author_017",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "Paulo Coelho",
    "object": "philosophical fiction",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "author_genres_styles",
    "tags": ["spiritual", "journey"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l2_p4_genre_or_style_of_author_018",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p4",
    "relation": "genre_or_style_of_author",
    "subject": "Dan Brown",
    "object": "thriller",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "author_genres_styles",
    "tags": ["mystery", "conspiracy"],
    "introducedIn": "C",
    "factPriority": "secondary"
  }
  ]
    const conceptSet: LocalConceptSet = {
  id: "art_literature_l2_p4",
  concepts,
};

export default conceptSet;