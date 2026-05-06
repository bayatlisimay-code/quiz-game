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
"id": "art_movies_l3_p2_example_of_genre_001",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "Action",
"object": "Die Hard",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "movie_genres_examples",
"tags": ["movies", "genres", "movie_examples"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l3_p2_example_of_genre_002",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "Adventure",
"object": "Raiders of the Lost Ark",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "movie_genres_examples",
"tags": ["movies", "genres", "movie_examples"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l3_p2_example_of_genre_003",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "Comedy",
"object": "Home Alone",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "movie_genres_examples",
"tags": ["movies", "genres", "movie_examples"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l3_p2_example_of_genre_004",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "Drama",
"object": "Forrest Gump",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "movie_genres_examples",
"tags": ["movies", "genres", "movie_examples"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l3_p2_example_of_genre_005",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "Romance",
"object": "Titanic",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "movie_genres_examples",
"tags": ["movies", "genres", "movie_examples"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l3_p2_example_of_genre_006",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "Horror",
"object": "Psycho",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "movie_genres_examples",
"tags": ["movies", "genres", "movie_examples"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l3_p2_example_of_genre_007",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "Thriller",
"object": "Jaws",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "movie_genres_examples",
"tags": ["movies", "genres", "movie_examples"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l3_p2_example_of_genre_008",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "Science fiction",
"object": "Star Wars",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "movie_genres_examples",
"tags": ["movies", "genres", "movie_examples"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l3_p2_example_of_genre_009",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "Fantasy",
"object": "The Lord of the Rings: The Fellowship of the Ring",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "movie_genres_examples",
"tags": ["movies", "genres", "movie_examples"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l3_p2_example_of_genre_010",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "Animation",
"object": "Toy Story",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "movie_genres_examples",
"tags": ["movies", "genres", "movie_examples"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l3_p2_example_of_genre_011",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "Musical",
"object": "The Wizard of Oz",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "movie_genres_examples",
"tags": ["movies", "genres", "movie_examples"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l3_p2_example_of_genre_012",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "Documentary",
"object": "March of the Penguins",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "movie_genres_examples",
"tags": ["movies", "genres", "movie_examples"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_movies_l3_p2_example_of_genre_013",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "Western",
"object": "The Good, the Bad and the Ugly",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "movie_genres_examples",
"tags": ["movies", "genres", "movie_examples"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l3_p2_example_of_genre_014",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "Crime",
"object": "The Godfather",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "movie_genres_examples",
"tags": ["movies", "genres", "movie_examples"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l3_p2_example_of_genre_015",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "Mystery",
"object": "Murder on the Orient Express",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "movie_genres_examples",
"tags": ["movies", "genres", "movie_examples"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l3_p2_example_of_genre_016",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "War",
"object": "Saving Private Ryan",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "movie_genres_examples",
"tags": ["movies", "genres", "movie_examples"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l3_p2_example_of_genre_017",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "Historical",
"object": "Gladiator",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "movie_genres_examples",
"tags": ["movies", "genres", "movie_examples"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l3_p2_example_of_genre_018",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "Superhero",
"object": "The Dark Knight",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "movie_genres_examples",
"tags": ["movies", "genres", "movie_examples"],
"introducedIn": "C",
"factPriority": "core"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_movies_l3_p2",
  concepts,
};

export default conceptSet;