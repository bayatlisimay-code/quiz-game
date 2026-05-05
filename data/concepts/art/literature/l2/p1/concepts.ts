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
    "id": "art_literature_l2_p1_nationality_of_author_001",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "William Shakespeare",
    "object": "English",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "author_nationalities",
    "tags": ["renaissance", "drama", "england"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p1_nationality_of_author_002",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "Jane Austen",
    "object": "English",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "author_nationalities",
    "tags": ["romance", "classic", "19th century"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p1_nationality_of_author_003",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "Charles Dickens",
    "object": "English",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "author_nationalities",
    "tags": ["victorian", "social", "england"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p1_nationality_of_author_004",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "Mark Twain",
    "object": "American",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "author_nationalities",
    "tags": ["humor", "realism", "19th century"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p1_nationality_of_author_005",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "George Orwell",
    "object": "British",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "author_nationalities",
    "tags": ["dystopian", "political", "20th century"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p1_nationality_of_author_006",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "Leo Tolstoy",
    "object": "Russian",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "author_nationalities",
    "tags": ["realism", "russia", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p1_nationality_of_author_007",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "Fyodor Dostoevsky",
    "object": "Russian",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "author_nationalities",
    "tags": ["psychological", "russia", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p1_nationality_of_author_008",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "Ernest Hemingway",
    "object": "American",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "author_nationalities",
    "tags": ["modernism", "war", "20th century"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p1_nationality_of_author_009",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "F. Scott Fitzgerald",
    "object": "American",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "author_nationalities",
    "tags": ["modernism", "1920s", "american"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p1_nationality_of_author_010",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "Virginia Woolf",
    "object": "British",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "author_nationalities",
    "tags": ["modernism", "feminism", "england"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p1_nationality_of_author_011",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "Albert Camus",
    "object": "French",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "author_nationalities",
    "tags": ["existentialism", "philosophy", "20th century"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p1_nationality_of_author_012",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "Franz Kafka",
    "object": "Czech",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "author_nationalities",
    "tags": ["existential", "modernism", "20th century"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p1_nationality_of_author_013",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "Gabriel Garcia Marquez",
    "object": "Colombian",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "author_nationalities",
    "tags": ["magical realism", "latin america", "20th century"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p1_nationality_of_author_014",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "J. K. Rowling",
    "object": "British",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "author_nationalities",
    "tags": ["fantasy", "modern", "contemporary"],
    "introducedIn": "C",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p1_nationality_of_author_015",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "J. R. R. Tolkien",
    "object": "British",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "author_nationalities",
    "tags": ["fantasy", "epic", "20th century"],
    "introducedIn": "C",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p1_nationality_of_author_016",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "Antoine de Saint-Exupery",
    "object": "French",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "author_nationalities",
    "tags": ["children", "philosophy", "20th century"],
    "introducedIn": "C",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l2_p1_nationality_of_author_017",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "Paulo Coelho",
    "object": "Brazilian",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "author_nationalities",
    "tags": ["philosophy", "modern", "contemporary"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l2_p1_nationality_of_author_018",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l2",
    "partId": "p1",
    "relation": "nationality_of_author",
    "subject": "Dan Brown",
    "object": "American",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "author_nationalities",
    "tags": ["thriller", "modern", "contemporary"],
    "introducedIn": "C",
    "factPriority": "secondary"
  }
  ]
  const conceptSet: LocalConceptSet = {
  id: "art_literature_l2_p1",
  concepts,
};

export default conceptSet;