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
    "id": "art_movies_l9_p1_character_of_movie_001",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p1",
    "relation": "character_of_movie",
    "subject": "The Dark Knight",
    "object": "The Joker",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_characters",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p1_character_of_movie_002",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p1",
    "relation": "character_of_movie",
    "subject": "The Terminator",
    "object": "The Terminator",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_characters",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p1_character_of_movie_003",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p1",
    "relation": "character_of_movie",
    "subject": "Forrest Gump",
    "object": "Forrest Gump",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_characters",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p1_character_of_movie_004",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p1",
    "relation": "character_of_movie",
    "subject": "The Godfather",
    "object": "Vito Corleone",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_characters",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p1_character_of_movie_005",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p1",
    "relation": "character_of_movie",
    "subject": "The Matrix",
    "object": "Neo",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_characters",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p1_character_of_movie_006",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p1",
    "relation": "character_of_movie",
    "subject": "The Lord of the Rings: The Fellowship of the Ring",
    "object": "Gandalf",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_characters",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p1_character_of_movie_007",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p1",
    "relation": "character_of_movie",
    "subject": "The Wizard of Oz",
    "object": "Dorothy Gale",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_characters",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p1_character_of_movie_008",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p1",
    "relation": "character_of_movie",
    "subject": "Taxi Driver",
    "object": "Travis Bickle",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_characters",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p1_character_of_movie_009",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p1",
    "relation": "character_of_movie",
    "subject": "Titanic",
    "object": "Jack Dawson",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_characters",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p1_character_of_movie_010",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p1",
    "relation": "character_of_movie",
    "subject": "Toy Story",
    "object": "Buzz Lightyear",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_characters",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p1_character_of_movie_011",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p1",
    "relation": "character_of_movie",
    "subject": "The Hunger Games",
    "object": "Katniss Everdeen",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_characters",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p1_character_of_movie_012",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p1",
    "relation": "character_of_movie",
    "subject": "Rocky",
    "object": "Rocky Balboa",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_characters",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p1_character_of_movie_013",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p1",
    "relation": "character_of_movie",
    "subject": "Casablanca",
    "object": "Rick Blaine",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_characters",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p1_character_of_movie_014",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p1",
    "relation": "character_of_movie",
    "subject": "Gone with the Wind",
    "object": "Scarlett O'Hara",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_characters",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "C",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p1_character_of_movie_015",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p1",
    "relation": "character_of_movie",
    "subject": "Barbie",
    "object": "Barbie",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_characters",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "C",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p1_character_of_movie_016",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p1",
    "relation": "character_of_movie",
    "subject": "V for Vendetta",
    "object": "V",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_characters",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_movies_l9_p1_character_of_movie_017",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p1",
    "relation": "character_of_movie",
    "subject": "Dead Poets Society",
    "object": "John Keating",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_characters",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_movies_l9_p1_character_of_movie_018",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p1",
    "relation": "character_of_movie",
    "subject": "A Few Good Men",
    "object": "Colonel Jessup",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_characters",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "C",
    "factPriority": "secondary"
  }
  ]
  const conceptSet: LocalConceptSet = {
  id: "art_movies_l9_p1",
  concepts,
};

export default conceptSet;