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
    "id": "art_movies_l9_p4_famous_quote_of_character_001",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p4",
    "relation": "famous_quote_of_character",
    "subject": "The Joker",
    "object": "Why so serious?",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_character_quotes",
    "tags": ["movies", "characters", "quotes"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p4_famous_quote_of_character_002",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p4",
    "relation": "famous_quote_of_character",
    "subject": "The Terminator",
    "object": "I'll be back.",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_character_quotes",
    "tags": ["movies", "characters", "quotes"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p4_famous_quote_of_character_003",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p4",
    "relation": "famous_quote_of_character",
    "subject": "Forrest Gump",
    "object": "Life is like a box of chocolates.",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_character_quotes",
    "tags": ["movies", "characters", "quotes"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p4_famous_quote_of_character_004",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p4",
    "relation": "famous_quote_of_character",
    "subject": "Vito Corleone",
    "object": "I'm gonna make him an offer he can't refuse.",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_character_quotes",
    "tags": ["movies", "characters", "quotes"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p4_famous_quote_of_character_005",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p4",
    "relation": "famous_quote_of_character",
    "subject": "Neo",
    "object": "I know kung fu.",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_character_quotes",
    "tags": ["movies", "characters", "quotes"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p4_famous_quote_of_character_006",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p4",
    "relation": "famous_quote_of_character",
    "subject": "Gandalf",
    "object": "You shall not pass!",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_character_quotes",
    "tags": ["movies", "characters", "quotes"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p4_famous_quote_of_character_007",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p4",
    "relation": "famous_quote_of_character",
    "subject": "Dorothy Gale",
    "object": "There's no place like home.",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_character_quotes",
    "tags": ["movies", "characters", "quotes"],
    "introducedIn": "A",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p4_famous_quote_of_character_008",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p4",
    "relation": "famous_quote_of_character",
    "subject": "Travis Bickle",
    "object": "You talking to me?",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_character_quotes",
    "tags": ["movies", "characters", "quotes"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p4_famous_quote_of_character_009",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p4",
    "relation": "famous_quote_of_character",
    "subject": "Jack Dawson",
    "object": "I'm the king of the world!",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_character_quotes",
    "tags": ["movies", "characters", "quotes"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p4_famous_quote_of_character_010",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p4",
    "relation": "famous_quote_of_character",
    "subject": "Buzz Lightyear",
    "object": "To infinity and beyond!",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_character_quotes",
    "tags": ["movies", "characters", "quotes"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p4_famous_quote_of_character_011",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p4",
    "relation": "famous_quote_of_character",
    "subject": "Katniss Everdeen",
    "object": "I volunteer as tribute.",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_character_quotes",
    "tags": ["movies", "characters", "quotes"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p4_famous_quote_of_character_012",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p4",
    "relation": "famous_quote_of_character",
    "subject": "Rocky Balboa",
    "object": "Yo, Adrian!",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_character_quotes",
    "tags": ["movies", "characters", "quotes"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p4_famous_quote_of_character_013",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p4",
    "relation": "famous_quote_of_character",
    "subject": "Rick Blaine",
    "object": "Here's looking at you, kid.",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_character_quotes",
    "tags": ["movies", "characters", "quotes"],
    "introducedIn": "B",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p4_famous_quote_of_character_014",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p4",
    "relation": "famous_quote_of_character",
    "subject": "Scarlett O'Hara",
    "object": "After all, tomorrow is another day.",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "movie_character_quotes",
    "tags": ["movies", "characters", "quotes"],
    "introducedIn": "C",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p4_famous_quote_of_character_015",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p4",
    "relation": "famous_quote_of_character",
    "subject": "Barbie",
    "object": "Hi, Barbie!",
    "answerKind": "short",
    "difficulty": 2,
    "distractorGroup": "movie_character_quotes",
    "tags": ["movies", "characters", "quotes"],
    "introducedIn": "C",
    "factPriority": "core"
  },
  {
    "id": "art_movies_l9_p4_famous_quote_of_character_016",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p4",
    "relation": "famous_quote_of_character",
    "subject": "V",
    "object": "Ideas are bulletproof.",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "movie_character_quotes",
    "tags": ["movies", "characters", "quotes"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_movies_l9_p4_famous_quote_of_character_017",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p4",
    "relation": "famous_quote_of_character",
    "subject": "John Keating",
    "object": "Carpe diem.",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "movie_character_quotes",
    "tags": ["movies", "characters", "quotes"],
    "introducedIn": "C",
    "factPriority": "secondary"
  },
  {
    "id": "art_movies_l9_p4_famous_quote_of_character_018",
    "topicId": "art",
    "subtopicId": "movies",
    "levelId": "l9",
    "partId": "p4",
    "relation": "famous_quote_of_character",
    "subject": "Colonel Jessup",
    "object": "You can't handle the truth!",
    "answerKind": "short",
    "difficulty": 3,
    "distractorGroup": "movie_character_quotes",
    "tags": ["movies", "characters", "quotes"],
    "introducedIn": "C",
    "factPriority": "secondary"
  }
]
  const conceptSet: LocalConceptSet = {
  id: "art_movies_l9_p4",
  concepts,
};

export default conceptSet;