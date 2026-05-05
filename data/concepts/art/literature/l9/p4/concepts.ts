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
    "id": "art_literature_l9_p4_author_of_quote_001",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p4",
    "relation": "author_of_quote",
    "subject": "to be or not to be",
    "object": "William Shakespeare",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "authors",
    "tags": ["shakespeare", "tragedy", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l9_p4_author_of_quote_002",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p4",
    "relation": "author_of_quote",
    "subject": "big brother is watching you",
    "object": "George Orwell",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "authors",
    "tags": ["orwell", "dystopian", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l9_p4_author_of_quote_003",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p4",
    "relation": "author_of_quote",
    "subject": "call me ishmael",
    "object": "Herman Melville",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "authors",
    "tags": ["melville", "adventure", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l9_p4_author_of_quote_004",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p4",
    "relation": "author_of_quote",
    "subject": "all animals are equal but some more equal",
    "object": "George Orwell",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "authors",
    "tags": ["orwell", "satire", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l9_p4_author_of_quote_005",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p4",
    "relation": "author_of_quote",
    "subject": "it was the best of times",
    "object": "Charles Dickens",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "authors",
    "tags": ["dickens", "historical fiction", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l9_p4_author_of_quote_006",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p4",
    "relation": "author_of_quote",
    "subject": "stay gold ponyboy",
    "object": "S. E. Hinton",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "authors",
    "tags": ["modern classic", "drama"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l9_p4_author_of_quote_007",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p4",
    "relation": "author_of_quote",
    "subject": "tomorrow is another day",
    "object": "Margaret Mitchell",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "authors",
    "tags": ["historical fiction", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l9_p4_author_of_quote_008",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p4",
    "relation": "author_of_quote",
    "subject": "so it goes",
    "object": "Kurt Vonnegut",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "authors",
    "tags": ["postmodernism", "satire"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l9_p4_author_of_quote_009",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p4",
    "relation": "author_of_quote",
    "subject": "whatever our souls are made of",
    "object": "Emily Bronte",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "authors",
    "tags": ["gothic", "romance", "classic"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l9_p4_author_of_quote_010",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p4",
    "relation": "author_of_quote",
    "subject": "nevermore",
    "object": "Edgar Allan Poe",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "authors",
    "tags": ["poetry", "gothic", "poe"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l9_p4_author_of_quote_011",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p4",
    "relation": "author_of_quote",
    "subject": "the horror the horror",
    "object": "Joseph Conrad",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "authors",
    "tags": ["modernism", "classic"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l9_p4_author_of_quote_012",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p4",
    "relation": "author_of_quote",
    "subject": "reader i married him",
    "object": "Charlotte Bronte",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "authors",
    "tags": ["gothic", "romance", "classic"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l9_p4_author_of_quote_013",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p4",
    "relation": "author_of_quote",
    "subject": "the game is afoot",
    "object": "Arthur Conan Doyle",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "authors",
    "tags": ["mystery", "detective", "classic"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l9_p4_author_of_quote_014",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p4",
    "relation": "author_of_quote",
    "subject": "the sky was the color of television",
    "object": "William Gibson",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "authors",
    "tags": ["science fiction", "cyberpunk"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l9_p4_author_of_quote_015",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p4",
    "relation": "author_of_quote",
    "subject": "it is a truth universally acknowledged",
    "object": "Jane Austen",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "authors",
    "tags": ["austen", "romance", "classic"],
    "introducedIn": "C",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l9_p4_author_of_quote_016",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p4",
    "relation": "author_of_quote",
    "subject": "the past is never dead it is not even past",
    "object": "William Faulkner",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "authors",
    "tags": ["modernism", "southern gothic"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l9_p4_author_of_quote_017",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p4",
    "relation": "author_of_quote",
    "subject": "i am fearless therefore powerful",
    "object": "Mary Shelley",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "authors",
    "tags": ["gothic", "shelley", "classic"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l9_p4_author_of_quote_018",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l9",
    "partId": "p4",
    "relation": "author_of_quote",
    "subject": "i am an invisible man",
    "object": "Ralph Ellison",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "authors",
    "tags": ["realism", "drama"],
    "introducedIn": "C",
    "factPriority": "secondary"
  }
]
  
const conceptSet: LocalConceptSet = {
  id: "art_literature_l9_p4",
  concepts,
};

export default conceptSet;
