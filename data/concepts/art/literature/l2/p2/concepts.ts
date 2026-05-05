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
    "id": "art_literature_l2_p2_known_for_book_001",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "William Shakespeare",
    "object": "Hamlet",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "famous_books",
    "tags": ["tragedy", "drama"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p2_known_for_book_002",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "Jane Austen",
    "object": "Pride and Prejudice",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "famous_books",
    "tags": ["romance", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p2_known_for_book_003",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "Charles Dickens",
    "object": "Oliver Twist",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "famous_books",
    "tags": ["victorian", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p2_known_for_book_004",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "Mark Twain",
    "object": "Adventures of Huckleberry Finn",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "famous_books",
    "tags": ["american", "realism"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p2_known_for_book_005",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "George Orwell",
    "object": "1984",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "famous_books",
    "tags": ["dystopian", "political"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p2_known_for_book_006",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "Leo Tolstoy",
    "object": "War and Peace",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "famous_books",
    "tags": ["russian", "epic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p2_known_for_book_007",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "Fyodor Dostoevsky",
    "object": "Crime and Punishment",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "famous_books",
    "tags": ["psychological", "russian"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p2_known_for_book_008",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "Ernest Hemingway",
    "object": "The Old Man and the Sea",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_books",
    "tags": ["modernism", "american"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p2_known_for_book_009",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "F. Scott Fitzgerald",
    "object": "The Great Gatsby",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_books",
    "tags": ["modernism", "1920s"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p2_known_for_book_010",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "Virginia Woolf",
    "object": "Mrs Dalloway",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_books",
    "tags": ["modernism", "feminism"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p2_known_for_book_011",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "Albert Camus",
    "object": "The Stranger",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_books",
    "tags": ["existentialism", "philosophy"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p2_known_for_book_012",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "Franz Kafka",
    "object": "The Metamorphosis",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_books",
    "tags": ["existential", "modernism"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p2_known_for_book_013",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "Gabriel Garcia Marquez",
    "object": "One Hundred Years of Solitude",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_books",
    "tags": ["magical realism", "latin america"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p2_known_for_book_014",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "J. K. Rowling",
    "object": "Harry Potter and the Sorcerer's Stone",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "famous_books",
    "tags": ["fantasy", "modern"],
    "introducedIn": "C",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p2_known_for_book_015",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "J. R. R. Tolkien",
    "object": "The Lord of the Rings",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "famous_books",
    "tags": ["fantasy", "epic"],
    "introducedIn": "C",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p2_known_for_book_016",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "Antoine de Saint-Exupery",
    "object": "The Little Prince",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "famous_books",
    "tags": ["children", "philosophy"],
    "introducedIn": "C",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p2_known_for_book_017",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "Paulo Coelho",
    "object": "The Alchemist",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_books",
    "tags": ["philosophy", "journey"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l2_p2_known_for_book_018",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p2",
    "relation": "known_for_book",
    "subject": "Dan Brown",
    "object": "The Da Vinci Code",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_books",
    "tags": ["thriller", "mystery"],
    "introducedIn": "C",
    "factPriority": "secondary"
  }
]
    const conceptSet: LocalConceptSet = {
  id: "art_literature_l2_p2",
  concepts,
};

export default conceptSet;
