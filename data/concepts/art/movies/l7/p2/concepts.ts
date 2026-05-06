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
"id": "art_movies_l7_p2_known_for_movie_001",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_movie",
"subject": "Bong Joon Ho",
"object": "Parasite",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l7_p2_known_for_movie_002",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_movie",
"subject": "Greta Gerwig",
"object": "Lady Bird",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l7_p2_known_for_movie_003",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_movie",
"subject": "Jane Campion",
"object": "The Piano",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "A",
"factPriority": "secondary"
},
{
"id": "art_movies_l7_p2_known_for_movie_004",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_movie",
"subject": "Ang Lee",
"object": "Crouching Tiger, Hidden Dragon",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l7_p2_known_for_movie_005",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_movie",
"subject": "David Fincher",
"object": "Fight Club",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l7_p2_known_for_movie_006",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_movie",
"subject": "Denis Villeneuve",
"object": "Dune",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l7_p2_known_for_movie_007",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_movie",
"subject": "Kathryn Bigelow",
"object": "The Hurt Locker",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "A",
"factPriority": "secondary"
},
{
"id": "art_movies_l7_p2_known_for_movie_008",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_movie",
"subject": "Federico Fellini",
"object": "La Dolce Vita",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l7_p2_known_for_movie_009",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_movie",
"subject": "Jean-Luc Godard",
"object": "Breathless",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l7_p2_known_for_movie_010",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_movie",
"subject": "Agnes Varda",
"object": "Cleo from 5 to 7",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_movies_l7_p2_known_for_movie_011",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_movie",
"subject": "Pedro Almodovar",
"object": "Talk to Her",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l7_p2_known_for_movie_012",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_movie",
"subject": "Wong Kar Wai",
"object": "In the Mood for Love",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l7_p2_known_for_movie_013",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_movie",
"subject": "Satyajit Ray",
"object": "Pather Panchali",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l7_p2_known_for_movie_014",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_movie",
"subject": "Orson Welles",
"object": "Citizen Kane",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l7_p2_known_for_movie_015",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_movie",
"subject": "Billy Wilder",
"object": "Some Like It Hot",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l7_p2_known_for_movie_016",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_movie",
"subject": "Fritz Lang",
"object": "Metropolis",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l7_p2_known_for_movie_017",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_movie",
"subject": "John Ford",
"object": "The Searchers",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l7_p2_known_for_movie_018",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_movie",
"subject": "Sergio Leone",
"object": "The Good, the Bad and the Ugly",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "C",
"factPriority": "core"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_movies_l7_p2",
  concepts,
};

export default conceptSet;