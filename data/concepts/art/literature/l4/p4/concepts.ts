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
    "id": "art_literature_l4_p4_famous_author_of_genre_001",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p4",
    "relation": "famous_author_of_genre",
    "subject": "tragedy",
    "object": "William Shakespeare",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "authors",
    "tags": ["classic", "playwright"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p4_famous_author_of_genre_002",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p4",
    "relation": "famous_author_of_genre",
    "subject": "comedy",
    "object": "Oscar Wilde",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "authors",
    "tags": ["humor", "playwright"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p4_famous_author_of_genre_003",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p4",
    "relation": "famous_author_of_genre",
    "subject": "drama",
    "object": "Arthur Miller",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "authors",
    "tags": ["playwright", "drama"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p4_famous_author_of_genre_004",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p4",
    "relation": "famous_author_of_genre",
    "subject": "romance",
    "object": "Jane Austen",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "authors",
    "tags": ["love", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p4_famous_author_of_genre_005",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p4",
    "relation": "famous_author_of_genre",
    "subject": "fantasy",
    "object": "J. R. R. Tolkien",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "authors",
    "tags": ["magic", "fantasy"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p4_famous_author_of_genre_006",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p4",
    "relation": "famous_author_of_genre",
    "subject": "science fiction",
    "object": "Isaac Asimov",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "authors",
    "tags": ["science", "future"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p4_famous_author_of_genre_007",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p4",
    "relation": "famous_author_of_genre",
    "subject": "adventure",
    "object": "Robert Louis Stevenson",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "authors",
    "tags": ["journey", "adventure"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p4_famous_author_of_genre_008",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p4",
    "relation": "famous_author_of_genre",
    "subject": "horror",
    "object": "Stephen King",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "authors",
    "tags": ["fear", "horror"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p4_famous_author_of_genre_009",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p4",
    "relation": "famous_author_of_genre",
    "subject": "mystery",
    "object": "Agatha Christie",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "authors",
    "tags": ["crime", "detective"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p4_famous_author_of_genre_010",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p4",
    "relation": "famous_author_of_genre",
    "subject": "thriller",
    "object": "Gillian Flynn",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "authors",
    "tags": ["suspense", "thriller"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p4_famous_author_of_genre_011",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p4",
    "relation": "famous_author_of_genre",
    "subject": "dystopian",
    "object": "George Orwell",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "authors",
    "tags": ["society", "future"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p4_famous_author_of_genre_012",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p4",
    "relation": "famous_author_of_genre",
    "subject": "historical fiction",
    "object": "Leo Tolstoy",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "authors",
    "tags": ["history", "classic"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p4_famous_author_of_genre_013",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p4",
    "relation": "famous_author_of_genre",
    "subject": "satire",
    "object": "Jonathan Swift",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "authors",
    "tags": ["satire", "criticism"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l4_p4_famous_author_of_genre_014",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p4",
    "relation": "famous_author_of_genre",
    "subject": "realism",
    "object": "Gustave Flaubert",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "authors",
    "tags": ["real life", "classic"],
    "introducedIn": "C",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p4_famous_author_of_genre_015",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p4",
    "relation": "famous_author_of_genre",
    "subject": "magical realism",
    "object": "Gabriel Garcia Marquez",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "authors",
    "tags": ["magic", "real life"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l4_p4_famous_author_of_genre_016",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p4",
    "relation": "famous_author_of_genre",
    "subject": "gothic",
    "object": "Mary Shelley",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "authors",
    "tags": ["dark", "classic"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l4_p4_famous_author_of_genre_017",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p4",
    "relation": "famous_author_of_genre",
    "subject": "epic",
    "object": "Homer",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "authors",
    "tags": ["hero", "classic"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l4_p4_famous_author_of_genre_018",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p4",
    "relation": "famous_author_of_genre",
    "subject": "philosophical fiction",
    "object": "Albert Camus",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "authors",
    "tags": ["philosophy"],
    "introducedIn": "C",
    "factPriority": "secondary"
  }
]
  
const conceptSet: LocalConceptSet = {
  id: "art_literature_l4_p4",
  concepts,
};

export default conceptSet;