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
"id": "art_movies_l6_p1_director_of_movie_001",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p1",
"relation": "director_of_movie",
"subject": "Spirited Away",
"object": "Hayao Miyazaki",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l6_p1_director_of_movie_002",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p1",
"relation": "director_of_movie",
"subject": "Parasite",
"object": "Bong Joon Ho",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l6_p1_director_of_movie_003",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p1",
"relation": "director_of_movie",
"subject": "Inception",
"object": "Christopher Nolan",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l6_p1_director_of_movie_004",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p1",
"relation": "director_of_movie",
"subject": "The Matrix",
"object": "The Wachowskis",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l6_p1_director_of_movie_005",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p1",
"relation": "director_of_movie",
"subject": "Pulp Fiction",
"object": "Quentin Tarantino",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l6_p1_director_of_movie_006",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p1",
"relation": "director_of_movie",
"subject": "Goodfellas",
"object": "Martin Scorsese",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l6_p1_director_of_movie_007",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p1",
"relation": "director_of_movie",
"subject": "Schindler's List",
"object": "Steven Spielberg",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l6_p1_director_of_movie_008",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p1",
"relation": "director_of_movie",
"subject": "Amelie",
"object": "Jean-Pierre Jeunet",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_movies_l6_p1_director_of_movie_009",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p1",
"relation": "director_of_movie",
"subject": "Cinema Paradiso",
"object": "Giuseppe Tornatore",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_movies_l6_p1_director_of_movie_010",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p1",
"relation": "director_of_movie",
"subject": "Seven Samurai",
"object": "Akira Kurosawa",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l6_p1_director_of_movie_011",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p1",
"relation": "director_of_movie",
"subject": "The Shawshank Redemption",
"object": "Frank Darabont",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l6_p1_director_of_movie_012",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p1",
"relation": "director_of_movie",
"subject": "Fight Club",
"object": "David Fincher",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l6_p1_director_of_movie_013",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p1",
"relation": "director_of_movie",
"subject": "Alien",
"object": "Ridley Scott",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l6_p1_director_of_movie_014",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p1",
"relation": "director_of_movie",
"subject": "The Silence of the Lambs",
"object": "Jonathan Demme",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l6_p1_director_of_movie_015",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p1",
"relation": "director_of_movie",
"subject": "La La Land",
"object": "Damien Chazelle",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l6_p1_director_of_movie_016",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p1",
"relation": "director_of_movie",
"subject": "Life Is Beautiful",
"object": "Roberto Benigni",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l6_p1_director_of_movie_017",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p1",
"relation": "director_of_movie",
"subject": "Pan's Labyrinth",
"object": "Guillermo del Toro",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l6_p1_director_of_movie_018",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p1",
"relation": "director_of_movie",
"subject": "Crouching Tiger, Hidden Dragon",
"object": "Ang Lee",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "C",
"factPriority": "secondary"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_movies_l6_p1",
  concepts,
};

export default conceptSet;