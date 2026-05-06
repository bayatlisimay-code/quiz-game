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
"id": "art_movies_l2_p2_known_for_movie_001",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_movie",
"subject": "Steven Spielberg",
"object": "Jaws",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l2_p2_known_for_movie_002",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_movie",
"subject": "Alfred Hitchcock",
"object": "Psycho",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l2_p2_known_for_movie_003",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_movie",
"subject": "Martin Scorsese",
"object": "Goodfellas",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l2_p2_known_for_movie_004",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_movie",
"subject": "Christopher Nolan",
"object": "The Dark Knight",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l2_p2_known_for_movie_005",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_movie",
"subject": "Quentin Tarantino",
"object": "Pulp Fiction",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l2_p2_known_for_movie_006",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_movie",
"subject": "James Cameron",
"object": "Titanic",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l2_p2_known_for_movie_007",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_movie",
"subject": "George Lucas",
"object": "Star Wars",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l2_p2_known_for_movie_008",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_movie",
"subject": "Hayao Miyazaki",
"object": "Spirited Away",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l2_p2_known_for_movie_009",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_movie",
"subject": "Akira Kurosawa",
"object": "Seven Samurai",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l2_p2_known_for_movie_010",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_movie",
"subject": "Stanley Kubrick",
"object": "2001: A Space Odyssey",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l2_p2_known_for_movie_011",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_movie",
"subject": "Francis Ford Coppola",
"object": "The Godfather",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l2_p2_known_for_movie_012",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_movie",
"subject": "Ridley Scott",
"object": "Alien",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l2_p2_known_for_movie_013",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_movie",
"subject": "Peter Jackson",
"object": "The Lord of the Rings: The Fellowship of the Ring",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l2_p2_known_for_movie_014",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_movie",
"subject": "Tim Burton",
"object": "Edward Scissorhands",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l2_p2_known_for_movie_015",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_movie",
"subject": "Wes Anderson",
"object": "The Grand Budapest Hotel",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l2_p2_known_for_movie_016",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_movie",
"subject": "Guillermo del Toro",
"object": "Pan's Labyrinth",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l2_p2_known_for_movie_017",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_movie",
"subject": "Sofia Coppola",
"object": "Lost in Translation",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l2_p2_known_for_movie_018",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_movie",
"subject": "Spike Lee",
"object": "Do the Right Thing",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_movies",
"tags": ["movies", "famous_directors", "famous_movies"],
"introducedIn": "C",
"factPriority": "secondary"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_movies_l2_p2",
  concepts,
};

export default conceptSet;