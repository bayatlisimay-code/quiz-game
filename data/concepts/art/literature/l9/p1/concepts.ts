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
    "id": "art_literature_l9_p1_quote_of_book_001",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p1",
    "relation": "quote_of_book",
    "subject": "to be or not to be",
    "object": "Hamlet",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["shakespeare", "tragedy", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l9_p1_quote_of_book_002",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p1",
    "relation": "quote_of_book",
    "subject": "big brother is watching you",
    "object": "1984",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["orwell", "dystopian", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l9_p1_quote_of_book_003",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p1",
    "relation": "quote_of_book",
    "subject": "call me ishmael",
    "object": "Moby-Dick",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["melville", "adventure", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l9_p1_quote_of_book_004",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p1",
    "relation": "quote_of_book",
    "subject": "all animals are equal but some more equal",
    "object": "Animal Farm",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["orwell", "satire", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l9_p1_quote_of_book_005",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p1",
    "relation": "quote_of_book",
    "subject": "it was the best of times",
    "object": "A Tale of Two Cities",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["dickens", "historical fiction", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l9_p1_quote_of_book_006",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p1",
    "relation": "quote_of_book",
    "subject": "stay gold ponyboy",
    "object": "The Outsiders",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["modern classic", "drama"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l9_p1_quote_of_book_007",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p1",
    "relation": "quote_of_book",
    "subject": "tomorrow is another day",
    "object": "Gone with the Wind",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["historical fiction", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l9_p1_quote_of_book_008",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p1",
    "relation": "quote_of_book",
    "subject": "so it goes",
    "object": "Slaughterhouse-Five",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "books",
    "tags": ["postmodernism", "satire"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l9_p1_quote_of_book_009",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p1",
    "relation": "quote_of_book",
    "subject": "whatever our souls are made of",
    "object": "Wuthering Heights",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "books",
    "tags": ["gothic", "romance", "classic"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l9_p1_quote_of_book_010",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p1",
    "relation": "quote_of_book",
    "subject": "nevermore",
    "object": "The Raven",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["poetry", "gothic", "poe"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l9_p1_quote_of_book_011",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p1",
    "relation": "quote_of_book",
    "subject": "the horror the horror",
    "object": "Heart of Darkness",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "books",
    "tags": ["modernism", "classic"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l9_p1_quote_of_book_012",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p1",
    "relation": "quote_of_book",
    "subject": "reader i married him",
    "object": "Jane Eyre",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "books",
    "tags": ["gothic", "romance", "classic"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l9_p1_quote_of_book_013",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p1",
    "relation": "quote_of_book",
    "subject": "the game is afoot",
    "object": "The Hound of the Baskervilles",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "books",
    "tags": ["mystery", "detective", "classic"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l9_p1_quote_of_book_014",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p1",
    "relation": "quote_of_book",
    "subject": "the sky was the color of television",
    "object": "Neuromancer",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "books",
    "tags": ["science fiction", "cyberpunk"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l9_p1_quote_of_book_015",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p1",
    "relation": "quote_of_book",
    "subject": "it is a truth universally acknowledged",
    "object": "Pride and Prejudice",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["austen", "romance", "classic"],
    "introducedIn": "C",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l9_p1_quote_of_book_016",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p1",
    "relation": "quote_of_book",
    "subject": "the past is never dead it is not even past",
    "object": "Requiem for a Nun",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "books",
    "tags": ["modernism", "southern gothic"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l9_p1_quote_of_book_017",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p1",
    "relation": "quote_of_book",
    "subject": "i am fearless therefore powerful",
    "object": "Frankenstein",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "books",
    "tags": ["gothic", "shelley", "classic"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l9_p1_quote_of_book_018",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p1",
    "relation": "quote_of_book",
    "subject": "i am an invisible man",
    "object": "Invisible Man",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "books",
    "tags": ["realism", "drama"],
    "introducedIn": "C",
    "factPriority": "secondary"
  }
]
  
const conceptSet: LocalConceptSet = {
  id: "art_literature_l9_p1",
  concepts,
};

export default conceptSet;