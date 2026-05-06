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
"id": "art_movies_l1_p2_genre_of_movie_001",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "The Godfather",
"object": "Crime",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l1_p2_genre_of_movie_002",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "Star Wars",
"object": "Science fiction",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l1_p2_genre_of_movie_003",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "Jaws",
"object": "Thriller",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l1_p2_genre_of_movie_004",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "E.T. the Extra-Terrestrial",
"object": "Science fiction",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l1_p2_genre_of_movie_005",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "Back to the Future",
"object": "Science fiction",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l1_p2_genre_of_movie_006",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "Jurassic Park",
"object": "Adventure",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l1_p2_genre_of_movie_007",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "Titanic",
"object": "Romance",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l1_p2_genre_of_movie_008",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "Forrest Gump",
"object": "Drama",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l1_p2_genre_of_movie_009",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "Toy Story",
"object": "Animation",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l1_p2_genre_of_movie_010",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "Gladiator",
"object": "Action",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l1_p2_genre_of_movie_011",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "The Lord of the Rings: The Fellowship of the Ring",
"object": "Fantasy",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l1_p2_genre_of_movie_012",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "Harry Potter and the Sorcerer's Stone",
"object": "Fantasy",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l1_p2_genre_of_movie_013",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "The Dark Knight",
"object": "Action",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l1_p2_genre_of_movie_014",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "Avatar",
"object": "Science fiction",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l1_p2_genre_of_movie_015",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "The Wizard of Oz",
"object": "Fantasy",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l1_p2_genre_of_movie_016",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "Casablanca",
"object": "Romance",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l1_p2_genre_of_movie_017",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "Psycho",
"object": "Horror",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l1_p2_genre_of_movie_018",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "Raiders of the Lost Ark",
"object": "Adventure",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "C",
"factPriority": "core"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_movies_l1_p2",
  concepts,
};

export default conceptSet;