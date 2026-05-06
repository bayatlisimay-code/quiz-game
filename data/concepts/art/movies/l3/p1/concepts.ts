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
"id": "art_movies_l3_p1_definition_of_genre_001",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p1",
"relation": "definition_of_genre",
"subject": "Action",
"object": "Fast-paced films with fights, chases, or danger",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "movie_genres_definitions",
"tags": ["movies", "genres", "movie_forms"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l3_p1_definition_of_genre_002",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p1",
"relation": "definition_of_genre",
"subject": "Adventure",
"object": "Films about journeys, quests, or exciting exploration",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "movie_genres_definitions",
"tags": ["movies", "genres", "movie_forms"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l3_p1_definition_of_genre_003",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p1",
"relation": "definition_of_genre",
"subject": "Comedy",
"object": "Films made mainly to make people laugh",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "movie_genres_definitions",
"tags": ["movies", "genres", "movie_forms"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l3_p1_definition_of_genre_004",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p1",
"relation": "definition_of_genre",
"subject": "Drama",
"object": "Serious films focused on emotions and conflict",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "movie_genres_definitions",
"tags": ["movies", "genres", "movie_forms"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l3_p1_definition_of_genre_005",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p1",
"relation": "definition_of_genre",
"subject": "Romance",
"object": "Films centered on love and relationships",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "movie_genres_definitions",
"tags": ["movies", "genres", "movie_forms"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l3_p1_definition_of_genre_006",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p1",
"relation": "definition_of_genre",
"subject": "Horror",
"object": "Films designed to scare or disturb viewers",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "movie_genres_definitions",
"tags": ["movies", "genres", "movie_forms"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l3_p1_definition_of_genre_007",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p1",
"relation": "definition_of_genre",
"subject": "Thriller",
"object": "Suspenseful films built around tension and danger",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "movie_genres_definitions",
"tags": ["movies", "genres", "movie_forms"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l3_p1_definition_of_genre_008",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p1",
"relation": "definition_of_genre",
"subject": "Science fiction",
"object": "Films about futuristic science or technology",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "movie_genres_definitions",
"tags": ["movies", "genres", "movie_forms"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l3_p1_definition_of_genre_009",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p1",
"relation": "definition_of_genre",
"subject": "Fantasy",
"object": "Films with magic, imaginary worlds, or mythical beings",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "movie_genres_definitions",
"tags": ["movies", "genres", "movie_forms"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l3_p1_definition_of_genre_010",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p1",
"relation": "definition_of_genre",
"subject": "Animation",
"object": "Films made from drawn or computer-created images",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "movie_genres_definitions",
"tags": ["movies", "genres", "movie_forms"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l3_p1_definition_of_genre_011",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p1",
"relation": "definition_of_genre",
"subject": "Musical",
"object": "Films where songs help tell the story",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "movie_genres_definitions",
"tags": ["movies", "genres", "movie_forms"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l3_p1_definition_of_genre_012",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p1",
"relation": "definition_of_genre",
"subject": "Documentary",
"object": "Nonfiction films about real people or events",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "movie_genres_definitions",
"tags": ["movies", "genres", "movie_forms"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l3_p1_definition_of_genre_013",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p1",
"relation": "definition_of_genre",
"subject": "Western",
"object": "Films set around cowboys and the American frontier",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "movie_genres_definitions",
"tags": ["movies", "genres", "movie_forms"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l3_p1_definition_of_genre_014",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p1",
"relation": "definition_of_genre",
"subject": "Crime",
"object": "Films about criminals, police, or illegal acts",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "movie_genres_definitions",
"tags": ["movies", "genres", "movie_forms"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l3_p1_definition_of_genre_015",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p1",
"relation": "definition_of_genre",
"subject": "Mystery",
"object": "Films about solving secrets or unexplained events",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "movie_genres_definitions",
"tags": ["movies", "genres", "movie_forms"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l3_p1_definition_of_genre_016",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p1",
"relation": "definition_of_genre",
"subject": "War",
"object": "Films focused on battles, soldiers, or military conflict",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "movie_genres_definitions",
"tags": ["movies", "genres", "movie_forms"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l3_p1_definition_of_genre_017",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p1",
"relation": "definition_of_genre",
"subject": "Historical",
"object": "Films depicting real historical events or eras",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "movie_genres_definitions",
"tags": ["movies", "genres", "movie_forms"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l3_p1_definition_of_genre_018",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l3",
"partId": "p1",
"relation": "definition_of_genre",
"subject": "Superhero",
"object": "Films about heroes with powers or special identities",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "movie_genres_definitions",
"tags": ["movies", "genres", "movie_forms"],
"introducedIn": "C",
"factPriority": "core"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_movies_l3_p1",
  concepts,
};

export default conceptSet;