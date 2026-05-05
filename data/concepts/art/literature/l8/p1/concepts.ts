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
    "id": "art_literature_l8_p1_character_of_book_001",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p1",
    "relation": "character_of_book",
    "subject": "Elizabeth Bennet",
    "object": "Pride and Prejudice",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["romance", "austen", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l8_p1_character_of_book_002",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p1",
    "relation": "character_of_book",
    "subject": "Sherlock Holmes",
    "object": "The Hound of the Baskervilles",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["mystery", "detective", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l8_p1_character_of_book_003",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p1",
    "relation": "character_of_book",
    "subject": "Harry Potter",
    "object": "Harry Potter and the Philosopher's Stone",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["fantasy", "magic", "modern"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l8_p1_character_of_book_004",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p1",
    "relation": "character_of_book",
    "subject": "Frodo Baggins",
    "object": "The Lord of the Rings",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["fantasy", "tolkien", "adventure"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l8_p1_character_of_book_005",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p1",
    "relation": "character_of_book",
    "subject": "Winston Smith",
    "object": "1984",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["dystopian", "orwell", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l8_p1_character_of_book_006",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p1",
    "relation": "character_of_book",
    "subject": "Prince Hamlet",
    "object": "Hamlet",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["tragedy", "shakespeare", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l8_p1_character_of_book_007",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p1",
    "relation": "character_of_book",
    "subject": "Jay Gatsby",
    "object": "The Great Gatsby",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["modernism", "modern classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l8_p1_character_of_book_008",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p1",
    "relation": "character_of_book",
    "subject": "Atticus Finch",
    "object": "To Kill a Mockingbird",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["drama", "modern classic"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l8_p1_character_of_book_009",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p1",
    "relation": "character_of_book",
    "subject": "Holden Caulfield",
    "object": "The Catcher in the Rye",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "books",
    "tags": ["realism", "modern classic"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l8_p1_character_of_book_010",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p1",
    "relation": "character_of_book",
    "subject": "Don Quixote",
    "object": "Don Quixote",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["renaissance", "satire", "classic"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l8_p1_character_of_book_011",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p1",
    "relation": "character_of_book",
    "subject": "Count Dracula",
    "object": "Dracula",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["horror", "gothic", "classic"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l8_p1_character_of_book_012",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p1",
    "relation": "character_of_book",
    "subject": "Captain Ahab",
    "object": "Moby-Dick",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "books",
    "tags": ["adventure", "melville", "classic"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l8_p1_character_of_book_013",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p1",
    "relation": "character_of_book",
    "subject": "Heathcliff",
    "object": "Wuthering Heights",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "books",
    "tags": ["gothic", "romance", "classic"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l8_p1_character_of_book_014",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p1",
    "relation": "character_of_book",
    "subject": "Gregor Samsa",
    "object": "The Metamorphosis",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "books",
    "tags": ["modernism", "kafka", "classic"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l8_p1_character_of_book_015",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p1",
    "relation": "character_of_book",
    "subject": "Meursault",
    "object": "The Stranger",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "books",
    "tags": ["existentialism", "camus", "philosophy"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l8_p1_character_of_book_016",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p1",
    "relation": "character_of_book",
    "subject": "Hester Prynne",
    "object": "The Scarlet Letter",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "books",
    "tags": ["historical fiction", "hawthorne", "classic"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l8_p1_character_of_book_017",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p1",
    "relation": "character_of_book",
    "subject": "Katniss Everdeen",
    "object": "The Hunger Games",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["dystopian", "adventure", "modern"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l8_p1_character_of_book_018",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l8",
    "partId": "p1",
    "relation": "character_of_book",
    "subject": "Dorian Gray",
    "object": "The Picture of Dorian Gray",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "books",
    "tags": ["gothic", "wilde", "classic"],
    "introducedIn": "C",
    "factPriority": "secondary"
  }
]
  
const conceptSet: LocalConceptSet = {
  id: "art_literature_l8_p1",
  concepts,
};

export default conceptSet;
