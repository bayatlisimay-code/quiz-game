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
"id": "art_movies_l6_p2_genre_of_movie_001",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "Spirited Away",
"object": "Animation",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l6_p2_genre_of_movie_002",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "Parasite",
"object": "Thriller",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l6_p2_genre_of_movie_003",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "Inception",
"object": "Science fiction",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l6_p2_genre_of_movie_004",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "The Matrix",
"object": "Science fiction",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l6_p2_genre_of_movie_005",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "Pulp Fiction",
"object": "Crime",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l6_p2_genre_of_movie_006",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "Goodfellas",
"object": "Crime",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l6_p2_genre_of_movie_007",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "Schindler's List",
"object": "Drama",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l6_p2_genre_of_movie_008",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "Amelie",
"object": "Romance",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_movies_l6_p2_genre_of_movie_009",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "Cinema Paradiso",
"object": "Drama",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_movies_l6_p2_genre_of_movie_010",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "Seven Samurai",
"object": "Drama",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l6_p2_genre_of_movie_011",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "The Shawshank Redemption",
"object": "Drama",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l6_p2_genre_of_movie_012",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "Fight Club",
"object": "Drama",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l6_p2_genre_of_movie_013",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "Alien",
"object": "Science fiction",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l6_p2_genre_of_movie_014",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "The Silence of the Lambs",
"object": "Thriller",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l6_p2_genre_of_movie_015",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "La La Land",
"object": "Musical",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l6_p2_genre_of_movie_016",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "Life Is Beautiful",
"object": "Drama",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l6_p2_genre_of_movie_017",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "Pan's Labyrinth",
"object": "Fantasy",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l6_p2_genre_of_movie_018",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l6",
"partId": "p2",
"relation": "genre_of_movie",
"subject": "Crouching Tiger, Hidden Dragon",
"object": "Action",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_movies_genres",
"tags": ["movies", "famous_movies", "genres"],
"introducedIn": "C",
"factPriority": "secondary"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_movies_l6_p2",
  concepts,
};

export default conceptSet;