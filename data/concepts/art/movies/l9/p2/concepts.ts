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
    "id": "art_movies_l9_p2_actor_of_character_001",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p2",
    "relation": "actor_of_character",
    "subject": "The Joker",
    "object": "Heath Ledger",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_character_actors",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p2_actor_of_character_002",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p2",
    "relation": "actor_of_character",
    "subject": "The Terminator",
    "object": "Arnold Schwarzenegger",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_character_actors",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p2_actor_of_character_003",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p2",
    "relation": "actor_of_character",
    "subject": "Forrest Gump",
    "object": "Tom Hanks",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_character_actors",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p2_actor_of_character_004",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p2",
    "relation": "actor_of_character",
    "subject": "Vito Corleone",
    "object": "Marlon Brando",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_character_actors",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p2_actor_of_character_005",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p2",
    "relation": "actor_of_character",
    "subject": "Neo",
    "object": "Keanu Reeves",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_character_actors",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p2_actor_of_character_006",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p2",
    "relation": "actor_of_character",
    "subject": "Gandalf",
    "object": "Ian McKellen",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_character_actors",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p2_actor_of_character_007",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p2",
    "relation": "actor_of_character",
    "subject": "Dorothy Gale",
    "object": "Judy Garland",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_character_actors",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p2_actor_of_character_008",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p2",
    "relation": "actor_of_character",
    "subject": "Travis Bickle",
    "object": "Robert De Niro",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_character_actors",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p2_actor_of_character_009",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p2",
    "relation": "actor_of_character",
    "subject": "Jack Dawson",
    "object": "Leonardo DiCaprio",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_character_actors",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p2_actor_of_character_010",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p2",
    "relation": "actor_of_character",
    "subject": "Buzz Lightyear",
    "object": "Tim Allen",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_character_actors",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p2_actor_of_character_011",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p2",
    "relation": "actor_of_character",
    "subject": "Katniss Everdeen",
    "object": "Jennifer Lawrence",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_character_actors",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p2_actor_of_character_012",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p2",
    "relation": "actor_of_character",
    "subject": "Rocky Balboa",
    "object": "Sylvester Stallone",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_character_actors",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p2_actor_of_character_013",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p2",
    "relation": "actor_of_character",
    "subject": "Rick Blaine",
    "object": "Humphrey Bogart",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_character_actors",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p2_actor_of_character_014",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p2",
    "relation": "actor_of_character",
    "subject": "Scarlett O'Hara",
    "object": "Vivien Leigh",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_character_actors",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "C",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p2_actor_of_character_015",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p2",
    "relation": "actor_of_character",
    "subject": "Barbie",
    "object": "Margot Robbie",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_character_actors",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "C",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p2_actor_of_character_016",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p2",
    "relation": "actor_of_character",
    "subject": "V",
    "object": "Hugo Weaving",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_character_actors",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_movies_l9_p2_actor_of_character_017",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p2",
    "relation": "actor_of_character",
    "subject": "John Keating",
    "object": "Robin Williams",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_character_actors",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_movies_l9_p2_actor_of_character_018",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p2",
    "relation": "actor_of_character",
    "subject": "Colonel Jessup",
    "object": "Jack Nicholson",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_character_actors",
    "tags": ["movies", "characters", "actors", "quotes"],
    "introducedIn": "C",
    "factPriority": "secondary"
  }
  ]
  const conceptSet: LocalConceptSet = {
  id: "art_movies_l9_p2",
  concepts,
};

export default conceptSet;