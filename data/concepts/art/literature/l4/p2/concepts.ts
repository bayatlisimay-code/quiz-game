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
    "id": "art_literature_l4_p2_example_of_genre_001",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p2",
    "relation": "example_of_genre",
    "subject": "tragedy",
    "object": "Romeo and Juliet",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["shakespeare", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p2_example_of_genre_002",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p2",
    "relation": "example_of_genre",
    "subject": "comedy",
    "object": "A Midsummer Night's Dream",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["shakespeare", "humor"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p2_example_of_genre_003",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p2",
    "relation": "example_of_genre",
    "subject": "drama",
    "object": "Death of a Salesman",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["drama", "classic"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p2_example_of_genre_004",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p2",
    "relation": "example_of_genre",
    "subject": "romance",
    "object": "Pride and Prejudice",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["austen", "love"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p2_example_of_genre_005",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p2",
    "relation": "example_of_genre",
    "subject": "fantasy",
    "object": "The Lord of the Rings",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["magic", "tolkien"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p2_example_of_genre_006",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p2",
    "relation": "example_of_genre",
    "subject": "science fiction",
    "object": "Dune",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["science", "future"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p2_example_of_genre_007",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p2",
    "relation": "example_of_genre",
    "subject": "adventure",
    "object": "Treasure Island",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["journey", "pirates"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p2_example_of_genre_008",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p2",
    "relation": "example_of_genre",
    "subject": "horror",
    "object": "Dracula",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["fear", "vampire"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p2_example_of_genre_009",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p2",
    "relation": "example_of_genre",
    "subject": "mystery",
    "object": "The Hound of the Baskervilles",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["detective", "crime"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p2_example_of_genre_010",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p2",
    "relation": "example_of_genre",
    "subject": "thriller",
    "object": "The Girl with the Dragon Tattoo",
    "answerKind": "short",
    "difficulty": 1,
    "distractorGroup": "books",
    "tags": ["suspense", "crime"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p2_example_of_genre_011",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p2",
    "relation": "example_of_genre",
    "subject": "dystopian",
    "object": "1984",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "books",
    "tags": ["society", "orwell"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p2_example_of_genre_012",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p2",
    "relation": "example_of_genre",
    "subject": "historical fiction",
    "object": "War and Peace",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "books",
    "tags": ["history", "classic"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p2_example_of_genre_013",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p2",
    "relation": "example_of_genre",
    "subject": "satire",
    "object": "Animal Farm",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "books",
    "tags": ["satire", "orwell"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l4_p2_example_of_genre_014",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p2",
    "relation": "example_of_genre",
    "subject": "realism",
    "object": "Madame Bovary",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "books",
    "tags": ["real life", "classic"],
    "introducedIn": "C",
    "factPriority": "core"
  },
  {
    "id": "art_literature_l4_p2_example_of_genre_015",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p2",
    "relation": "example_of_genre",
    "subject": "magical realism",
    "object": "One Hundred Years of Solitude",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "books",
    "tags": ["magic", "real life"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l4_p2_example_of_genre_016",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p2",
    "relation": "example_of_genre",
    "subject": "gothic",
    "object": "Frankenstein",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "books",
    "tags": ["dark", "classic"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l4_p2_example_of_genre_017",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p2",
    "relation": "example_of_genre",
    "subject": "epic",
    "object": "The Odyssey",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "books",
    "tags": ["hero", "journey"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_literature_l4_p2_example_of_genre_018",
    "topicId": "art",
    "subtopicId": "literature",
    "levelId": "l4",
    "partId": "p2",
    "relation": "example_of_genre",
    "subject": "philosophical fiction",
    "object": "The Stranger",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "books",
    "tags": ["philosophy"],
    "introducedIn": "C",
    "factPriority": "secondary"
  }
]
  
const conceptSet: LocalConceptSet = {
  id: "art_literature_l4_p2",
  concepts,
};

export default conceptSet;