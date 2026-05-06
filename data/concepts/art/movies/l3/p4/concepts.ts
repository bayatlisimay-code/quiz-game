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
"id": "art_movies_l3_p4_famous_director_of_genre_001",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p4",
"relation": "famous_director_of_genre",
"subject": "Action",
"object": "Michael Bay",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "movie_genres_directors",
"tags": ["movies", "genres", "movie_directors"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l3_p4_famous_director_of_genre_002",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p4",
"relation": "famous_director_of_genre",
"subject": "Adventure",
"object": "Steven Spielberg",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "movie_genres_directors",
"tags": ["movies", "genres", "movie_directors"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l3_p4_famous_director_of_genre_003",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p4",
"relation": "famous_director_of_genre",
"subject": "Comedy",
"object": "Charlie Chaplin",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "movie_genres_directors",
"tags": ["movies", "genres", "movie_directors"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l3_p4_famous_director_of_genre_004",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p4",
"relation": "famous_director_of_genre",
"subject": "Drama",
"object": "Robert Zemeckis",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "movie_genres_directors",
"tags": ["movies", "genres", "movie_directors"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l3_p4_famous_director_of_genre_005",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p4",
"relation": "famous_director_of_genre",
"subject": "Romance",
"object": "James Cameron",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "movie_genres_directors",
"tags": ["movies", "genres", "movie_directors"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l3_p4_famous_director_of_genre_006",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p4",
"relation": "famous_director_of_genre",
"subject": "Horror",
"object": "John Carpenter",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "movie_genres_directors",
"tags": ["movies", "genres", "movie_directors"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l3_p4_famous_director_of_genre_007",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p4",
"relation": "famous_director_of_genre",
"subject": "Thriller",
"object": "Alfred Hitchcock",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "movie_genres_directors",
"tags": ["movies", "genres", "movie_directors"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l3_p4_famous_director_of_genre_008",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p4",
"relation": "famous_director_of_genre",
"subject": "Science fiction",
"object": "George Lucas",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "movie_genres_directors",
"tags": ["movies", "genres", "movie_directors"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l3_p4_famous_director_of_genre_009",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p4",
"relation": "famous_director_of_genre",
"subject": "Fantasy",
"object": "Peter Jackson",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "movie_genres_directors",
"tags": ["movies", "genres", "movie_directors"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l3_p4_famous_director_of_genre_010",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p4",
"relation": "famous_director_of_genre",
"subject": "Animation",
"object": "Hayao Miyazaki",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "movie_genres_directors",
"tags": ["movies", "genres", "movie_directors"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l3_p4_famous_director_of_genre_011",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p4",
"relation": "famous_director_of_genre",
"subject": "Musical",
"object": "Damien Chazelle",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "movie_genres_directors",
"tags": ["movies", "genres", "movie_directors"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l3_p4_famous_director_of_genre_012",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p4",
"relation": "famous_director_of_genre",
"subject": "Documentary",
"object": "Michael Moore",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "movie_genres_directors",
"tags": ["movies", "genres", "movie_directors"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_movies_l3_p4_famous_director_of_genre_013",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p4",
"relation": "famous_director_of_genre",
"subject": "Western",
"object": "Sergio Leone",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "movie_genres_directors",
"tags": ["movies", "genres", "movie_directors"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l3_p4_famous_director_of_genre_014",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p4",
"relation": "famous_director_of_genre",
"subject": "Crime",
"object": "Martin Scorsese",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "movie_genres_directors",
"tags": ["movies", "genres", "movie_directors"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l3_p4_famous_director_of_genre_015",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p4",
"relation": "famous_director_of_genre",
"subject": "Mystery",
"object": "David Fincher",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "movie_genres_directors",
"tags": ["movies", "genres", "movie_directors"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l3_p4_famous_director_of_genre_016",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p4",
"relation": "famous_director_of_genre",
"subject": "War",
"object": "Stanley Kubrick",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "movie_genres_directors",
"tags": ["movies", "genres", "movie_directors"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l3_p4_famous_director_of_genre_017",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p4",
"relation": "famous_director_of_genre",
"subject": "Historical",
"object": "Ridley Scott",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "movie_genres_directors",
"tags": ["movies", "genres", "movie_directors"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l3_p4_famous_director_of_genre_018",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p4",
"relation": "famous_director_of_genre",
"subject": "Superhero",
"object": "Christopher Nolan",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "movie_genres_directors",
"tags": ["movies", "genres", "movie_directors"],
"introducedIn": "C",
"factPriority": "core"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_movies_l3_p4",
  concepts,
};

export default conceptSet;
