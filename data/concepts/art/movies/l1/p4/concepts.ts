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
    "id": "art_movies_l1_p4_release_year_of_movie_001",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l1",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "The Godfather",
    "object": "1972",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l1_p4_release_year_of_movie_002",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l1",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "Star Wars",
    "object": "1977",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l1_p4_release_year_of_movie_003",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l1",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "Jaws",
    "object": "1975",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l1_p4_release_year_of_movie_004",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l1",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "E.T. the Extra-Terrestrial",
    "object": "1982",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l1_p4_release_year_of_movie_005",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l1",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "Back to the Future",
    "object": "1985",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l1_p4_release_year_of_movie_006",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l1",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "Jurassic Park",
    "object": "1993",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l1_p4_release_year_of_movie_007",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l1",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "Titanic",
    "object": "1997",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l1_p4_release_year_of_movie_008",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l1",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "Forrest Gump",
    "object": "1994",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l1_p4_release_year_of_movie_009",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l1",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "Toy Story",
    "object": "1995",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l1_p4_release_year_of_movie_010",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l1",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "Gladiator",
    "object": "2000",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l1_p4_release_year_of_movie_011",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l1",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "The Lord of the Rings: The Fellowship of the Ring",
    "object": "2001",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l1_p4_release_year_of_movie_012",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l1",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "Harry Potter and the Sorcerer's Stone",
    "object": "2001",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l1_p4_release_year_of_movie_013",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l1",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "The Dark Knight",
    "object": "2008",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l1_p4_release_year_of_movie_014",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l1",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "Avatar",
    "object": "2009",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "C",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l1_p4_release_year_of_movie_015",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l1",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "The Wizard of Oz",
    "object": "1939",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_movies_l1_p4_release_year_of_movie_016",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l1",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "Casablanca",
    "object": "1942",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_movies_l1_p4_release_year_of_movie_017",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l1",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "Psycho",
    "object": "1960",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "C",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l1_p4_release_year_of_movie_018",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l1",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "Raiders of the Lost Ark",
    "object": "1981",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "C",
    "factPriority": "core"
  }
  ]
  const conceptSet: LocalConceptSet = {
  id: "art_movies_l1_p4",
  concepts,
};

export default conceptSet;