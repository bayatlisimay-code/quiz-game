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
    "id": "art_literature_l8_p4_author_of_character_001",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p4",
    "relation": "author_of_character",
    "subject": "Elizabeth Bennet",
    "object": "Jane Austen",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "authors",
    "tags": ["romance", "austen", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l8_p4_author_of_character_002",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p4",
    "relation": "author_of_character",
    "subject": "Sherlock Holmes",
    "object": "Arthur Conan Doyle",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "authors",
    "tags": ["mystery", "detective", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l8_p4_author_of_character_003",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p4",
    "relation": "author_of_character",
    "subject": "Harry Potter",
    "object": "J. K. Rowling",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "authors",
    "tags": ["fantasy", "magic", "modern"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l8_p4_author_of_character_004",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p4",
    "relation": "author_of_character",
    "subject": "Frodo Baggins",
    "object": "J. R. R. Tolkien",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "authors",
    "tags": ["fantasy", "tolkien", "adventure"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l8_p4_author_of_character_005",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p4",
    "relation": "author_of_character",
    "subject": "Winston Smith",
    "object": "George Orwell",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "authors",
    "tags": ["dystopian", "orwell", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l8_p4_author_of_character_006",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p4",
    "relation": "author_of_character",
    "subject": "Prince Hamlet",
    "object": "William Shakespeare",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "authors",
    "tags": ["tragedy", "shakespeare", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l8_p4_author_of_character_007",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p4",
    "relation": "author_of_character",
    "subject": "Jay Gatsby",
    "object": "F. Scott Fitzgerald",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "authors",
    "tags": ["modernism", "modern classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l8_p4_author_of_character_008",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p4",
    "relation": "author_of_character",
    "subject": "Atticus Finch",
    "object": "Harper Lee",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "authors",
    "tags": ["drama", "modern classic"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l8_p4_author_of_character_009",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p4",
    "relation": "author_of_character",
    "subject": "Holden Caulfield",
    "object": "J. D. Salinger",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "authors",
    "tags": ["realism", "modern classic"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l8_p4_author_of_character_010",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p4",
    "relation": "author_of_character",
    "subject": "Don Quixote",
    "object": "Miguel de Cervantes",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "authors",
    "tags": ["renaissance", "satire", "classic"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l8_p4_author_of_character_011",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p4",
    "relation": "author_of_character",
    "subject": "Count Dracula",
    "object": "Bram Stoker",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "authors",
    "tags": ["horror", "gothic", "classic"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l8_p4_author_of_character_012",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p4",
    "relation": "author_of_character",
    "subject": "Captain Ahab",
    "object": "Herman Melville",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "authors",
    "tags": ["adventure", "melville", "classic"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l8_p4_author_of_character_013",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p4",
    "relation": "author_of_character",
    "subject": "Heathcliff",
    "object": "Emily Bronte",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "authors",
    "tags": ["gothic", "romance", "classic"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l8_p4_author_of_character_014",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p4",
    "relation": "author_of_character",
    "subject": "Gregor Samsa",
    "object": "Franz Kafka",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "authors",
    "tags": ["modernism", "kafka", "classic"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l8_p4_author_of_character_015",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p4",
    "relation": "author_of_character",
    "subject": "Meursault",
    "object": "Albert Camus",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "authors",
    "tags": ["existentialism", "camus", "philosophy"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l8_p4_author_of_character_016",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p4",
    "relation": "author_of_character",
    "subject": "Hester Prynne",
    "object": "Nathaniel Hawthorne",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "authors",
    "tags": ["historical fiction", "hawthorne", "classic"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l8_p4_author_of_character_017",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p4",
    "relation": "author_of_character",
    "subject": "Katniss Everdeen",
    "object": "Suzanne Collins",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "authors",
    "tags": ["dystopian", "adventure", "modern"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l8_p4_author_of_character_018",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p4",
    "relation": "author_of_character",
    "subject": "Dorian Gray",
    "object": "Oscar Wilde",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "authors",
    "tags": ["gothic", "wilde", "classic"],
    "introducedIn": "C",
    "factPriority": "secondary"
  }
]
  
const conceptSet: LocalConceptSet = {
  id: "art_literature_l8_p4",
  concepts,
};

export default conceptSet;