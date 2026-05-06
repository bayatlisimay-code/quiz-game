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
    "id": "art_movies_l6_p4_release_year_of_movie_001",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l6",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "Spirited Away",
    "object": "2001",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l6_p4_release_year_of_movie_002",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l6",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "Parasite",
    "object": "2019",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l6_p4_release_year_of_movie_003",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l6",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "Inception",
    "object": "2010",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l6_p4_release_year_of_movie_004",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l6",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "The Matrix",
    "object": "1999",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l6_p4_release_year_of_movie_005",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l6",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "Pulp Fiction",
    "object": "1994",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l6_p4_release_year_of_movie_006",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l6",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "Goodfellas",
    "object": "1990",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l6_p4_release_year_of_movie_007",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l6",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "Schindler's List",
    "object": "1993",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l6_p4_release_year_of_movie_008",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l6",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "Amelie",
    "object": "2001",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_movies_l6_p4_release_year_of_movie_009",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l6",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "Cinema Paradiso",
    "object": "1988",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "B",
    "factPriority": "secondary"
  },
  {
    "id": "art_movies_l6_p4_release_year_of_movie_010",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l6",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "Seven Samurai",
    "object": "1954",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l6_p4_release_year_of_movie_011",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l6",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "The Shawshank Redemption",
    "object": "1994",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l6_p4_release_year_of_movie_012",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l6",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "Fight Club",
    "object": "1999",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l6_p4_release_year_of_movie_013",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l6",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "Alien",
    "object": "1979",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l6_p4_release_year_of_movie_014",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l6",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "The Silence of the Lambs",
    "object": "1991",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "C",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l6_p4_release_year_of_movie_015",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l6",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "La La Land",
    "object": "2016",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "C",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l6_p4_release_year_of_movie_016",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l6",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "Life Is Beautiful",
    "object": "1997",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_movies_l6_p4_release_year_of_movie_017",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l6",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "Pan's Labyrinth",
    "object": "2006",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "C",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l6_p4_release_year_of_movie_018",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l6",
    "partId": "p4",
    "relation": "release_year_of_movie",
    "subject": "Crouching Tiger, Hidden Dragon",
    "object": "2000",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "famous_movies_release_years",
    "tags": ["movies", "famous_movies", "release_years"],
    "introducedIn": "C",
    "factPriority": "secondary"
  }
]
  const conceptSet: LocalConceptSet = {
  id: "art_movies_l6_p4",
  concepts,
};

export default conceptSet;