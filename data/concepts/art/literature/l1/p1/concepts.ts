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
    "id": "art_literature_l1_p1_written_by_001",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p1",
    "relation": "written_by",
    "subject": "Harry Potter and the Sorcerer's Stone",
    "object": "J. K. Rowling",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "famous_books_authors",
    "tags": ["fantasy", "magic", "british"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l1_p1_written_by_002",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p1",
    "relation": "written_by",
    "subject": "1984",
    "object": "George Orwell",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "famous_books_authors",
    "tags": ["dystopian", "politics", "british"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l1_p1_written_by_003",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p1",
    "relation": "written_by",
    "subject": "Pride and Prejudice",
    "object": "Jane Austen",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "famous_books_authors",
    "tags": ["romance", "classic", "british"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l1_p1_written_by_004",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p1",
    "relation": "written_by",
    "subject": "The Great Gatsby",
    "object": "F. Scott Fitzgerald",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "famous_books_authors",
    "tags": ["american", "1920s", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l1_p1_written_by_005",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p1",
    "relation": "written_by",
    "subject": "To Kill a Mockingbird",
    "object": "Harper Lee",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "famous_books_authors",
    "tags": ["american", "justice", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l1_p1_written_by_006",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p1",
    "relation": "written_by",
    "subject": "The Hobbit",
    "object": "J. R. R. Tolkien",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "famous_books_authors",
    "tags": ["fantasy", "adventure", "british"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l1_p1_written_by_007",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p1",
    "relation": "written_by",
    "subject": "The Little Prince",
    "object": "Antoine de Saint-Exupery",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "famous_books_authors",
    "tags": ["children", "philosophy", "french"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l1_p1_written_by_008",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p1",
    "relation": "written_by",
    "subject": "The Lord of the Rings",
    "object": "J. R. R. Tolkien",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "famous_books_authors",
    "tags": ["fantasy", "epic", "british"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l1_p1_written_by_009",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p1",
    "relation": "written_by",
    "subject": "The Da Vinci Code",
    "object": "Dan Brown",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_books_authors",
    "tags": ["thriller", "mystery", "modern"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l1_p1_written_by_010",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p1",
    "relation": "written_by",
    "subject": "The Catcher in the Rye",
    "object": "J. D. Salinger",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_books_authors",
    "tags": ["american", "coming of age", "classic"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l1_p1_written_by_011",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p1",
    "relation": "written_by",
    "subject": "The Chronicles of Narnia",
    "object": "C. S. Lewis",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_books_authors",
    "tags": ["fantasy", "children", "british"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l1_p1_written_by_012",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p1",
    "relation": "written_by",
    "subject": "The Alchemist",
    "object": "Paulo Coelho",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_books_authors",
    "tags": ["philosophy", "journey", "brazilian"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l1_p1_written_by_013",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p1",
    "relation": "written_by",
    "subject": "Frankenstein",
    "object": "Mary Shelley",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_books_authors",
    "tags": ["gothic", "horror", "british"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l1_p1_written_by_014",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p1",
    "relation": "written_by",
    "subject": "Dracula",
    "object": "Bram Stoker",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_books_authors",
    "tags": ["gothic", "horror", "irish"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l1_p1_written_by_015",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p1",
    "relation": "written_by",
    "subject": "Moby Dick",
    "object": "Herman Melville",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "famous_books_authors",
    "tags": ["american", "adventure", "classic"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l1_p1_written_by_016",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p1",
    "relation": "written_by",
    "subject": "Crime and Punishment",
    "object": "Fyodor Dostoevsky",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "famous_books_authors",
    "tags": ["russian", "psychology", "classic"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l1_p1_written_by_017",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p1",
    "relation": "written_by",
    "subject": "The Odyssey",
    "object": "Homer",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "famous_books_authors",
    "tags": ["ancient", "epic", "greek"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l1_p1_written_by_018",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p1",
    "relation": "written_by",
    "subject": "War and Peace",
    "object": "Leo Tolstoy",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "famous_books_authors",
    "tags": ["russian", "historical fiction", "classic"],
    "introducedIn": "C",
    "factPriority": "secondary"
  }
]
  const conceptSet: LocalConceptSet = {
  id: "art_literature_l1_p1",
  concepts,
};

export default conceptSet;
