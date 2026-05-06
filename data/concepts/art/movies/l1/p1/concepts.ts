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
"id": "art_movies_l1_p1_director_of_movie_001",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p1",
"relation": "director_of_movie",
"subject": "The Godfather",
"object": "Francis Ford Coppola",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l1_p1_director_of_movie_002",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p1",
"relation": "director_of_movie",
"subject": "Star Wars",
"object": "George Lucas",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l1_p1_director_of_movie_003",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p1",
"relation": "director_of_movie",
"subject": "Jaws",
"object": "Steven Spielberg",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l1_p1_director_of_movie_004",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p1",
"relation": "director_of_movie",
"subject": "E.T. the Extra-Terrestrial",
"object": "Steven Spielberg",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l1_p1_director_of_movie_005",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p1",
"relation": "director_of_movie",
"subject": "Back to the Future",
"object": "Robert Zemeckis",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l1_p1_director_of_movie_006",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p1",
"relation": "director_of_movie",
"subject": "Jurassic Park",
"object": "Steven Spielberg",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l1_p1_director_of_movie_007",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p1",
"relation": "director_of_movie",
"subject": "Titanic",
"object": "James Cameron",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l1_p1_director_of_movie_008",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p1",
"relation": "director_of_movie",
"subject": "Forrest Gump",
"object": "Robert Zemeckis",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l1_p1_director_of_movie_009",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p1",
"relation": "director_of_movie",
"subject": "Toy Story",
"object": "John Lasseter",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_movies_l1_p1_director_of_movie_010",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p1",
"relation": "director_of_movie",
"subject": "Gladiator",
"object": "Ridley Scott",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l1_p1_director_of_movie_011",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p1",
"relation": "director_of_movie",
"subject": "The Lord of the Rings: The Fellowship of the Ring",
"object": "Peter Jackson",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l1_p1_director_of_movie_012",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p1",
"relation": "director_of_movie",
"subject": "Harry Potter and the Sorcerer's Stone",
"object": "Chris Columbus",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_movies_l1_p1_director_of_movie_013",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p1",
"relation": "director_of_movie",
"subject": "The Dark Knight",
"object": "Christopher Nolan",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l1_p1_director_of_movie_014",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p1",
"relation": "director_of_movie",
"subject": "Avatar",
"object": "James Cameron",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l1_p1_director_of_movie_015",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p1",
"relation": "director_of_movie",
"subject": "The Wizard of Oz",
"object": "Victor Fleming",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l1_p1_director_of_movie_016",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p1",
"relation": "director_of_movie",
"subject": "Casablanca",
"object": "Michael Curtiz",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l1_p1_director_of_movie_017",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p1",
"relation": "director_of_movie",
"subject": "Psycho",
"object": "Alfred Hitchcock",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l1_p1_director_of_movie_018",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p1",
"relation": "director_of_movie",
"subject": "Raiders of the Lost Ark",
"object": "Steven Spielberg",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_movies_directors",
"tags": ["movies", "famous_movies", "directors"],
"introducedIn": "C",
"factPriority": "core"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_movies_l1_p1",
  concepts,
};

export default conceptSet;