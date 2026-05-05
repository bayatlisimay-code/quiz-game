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
    "id": "art_literature_l1_p4_published_in_year_001",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p4",
    "relation": "published_in_year",
    "subject": "Harry Potter and the Sorcerer's Stone",
    "object": "1997",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "book_years",
    "tags": ["modern", "british"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l1_p4_published_in_year_002",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p4",
    "relation": "published_in_year",
    "subject": "1984",
    "object": "1949",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "book_years",
    "tags": ["20th century", "british"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l1_p4_published_in_year_003",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p4",
    "relation": "published_in_year",
    "subject": "Pride and Prejudice",
    "object": "1813",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "book_years",
    "tags": ["19th century", "british"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l1_p4_published_in_year_004",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p4",
    "relation": "published_in_year",
    "subject": "The Great Gatsby",
    "object": "1925",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "book_years",
    "tags": ["20th century", "american"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l1_p4_published_in_year_005",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p4",
    "relation": "published_in_year",
    "subject": "To Kill a Mockingbird",
    "object": "1960",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "book_years",
    "tags": ["20th century", "american"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l1_p4_published_in_year_006",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p4",
    "relation": "published_in_year",
    "subject": "The Hobbit",
    "object": "1937",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "book_years",
    "tags": ["20th century", "british"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l1_p4_published_in_year_007",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p4",
    "relation": "published_in_year",
    "subject": "The Little Prince",
    "object": "1943",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "book_years",
    "tags": ["20th century", "french"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l1_p4_published_in_year_008",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p4",
    "relation": "published_in_year",
    "subject": "The Lord of the Rings",
    "object": "1954",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "book_years",
    "tags": ["20th century", "british"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l1_p4_published_in_year_009",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p4",
    "relation": "published_in_year",
    "subject": "The Da Vinci Code",
    "object": "2003",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "book_years",
    "tags": ["modern", "american"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l1_p4_published_in_year_010",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p4",
    "relation": "published_in_year",
    "subject": "The Catcher in the Rye",
    "object": "1951",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "book_years",
    "tags": ["20th century", "american"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l1_p4_published_in_year_011",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p4",
    "relation": "published_in_year",
    "subject": "The Chronicles of Narnia",
    "object": "1950",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "book_years",
    "tags": ["20th century", "british"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l1_p4_published_in_year_012",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p4",
    "relation": "published_in_year",
    "subject": "The Alchemist",
    "object": "1988",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "book_years",
    "tags": ["20th century", "brazilian"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l1_p4_published_in_year_013",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p4",
    "relation": "published_in_year",
    "subject": "Frankenstein",
    "object": "1818",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "book_years",
    "tags": ["19th century", "british"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l1_p4_published_in_year_014",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p4",
    "relation": "published_in_year",
    "subject": "Dracula",
    "object": "1897",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "book_years",
    "tags": ["19th century", "irish"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l1_p4_published_in_year_015",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p4",
    "relation": "published_in_year",
    "subject": "Moby Dick",
    "object": "1851",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "book_years",
    "tags": ["19th century", "american"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l1_p4_published_in_year_016",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p4",
    "relation": "published_in_year",
    "subject": "Crime and Punishment",
    "object": "1866",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "book_years",
    "tags": ["19th century", "russian"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l1_p4_published_in_year_017",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p4",
    "relation": "published_in_year",
    "subject": "The Odyssey",
    "object": "8th century BC",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "book_years",
    "tags": ["ancient", "greek"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l1_p4_published_in_year_018",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l1",
    "partId": "p4",
    "relation": "published_in_year",
    "subject": "War and Peace",
    "object": "1869",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "book_years",
    "tags": ["19th century", "russian"],
    "introducedIn": "C",
    "factPriority": "secondary"
  }
]
  const conceptSet: LocalConceptSet = {
  id: "art_literature_l1_p4",
  concepts,
};

export default conceptSet;