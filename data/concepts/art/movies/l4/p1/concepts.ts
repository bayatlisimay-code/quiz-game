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
"id": "art_movies_l4_p1_main_movie_of_movement_001",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p1",
"relation": "main_movie_of_movement",
"subject": "German Expressionism",
"object": "The Cabinet of Dr. Caligari",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_movements_movies",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l4_p1_main_movie_of_movement_002",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p1",
"relation": "main_movie_of_movement",
"subject": "Soviet Montage",
"object": "Battleship Potemkin",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_movements_movies",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l4_p1_main_movie_of_movement_003",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p1",
"relation": "main_movie_of_movement",
"subject": "Italian Neorealism",
"object": "Bicycle Thieves",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_movements_movies",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l4_p1_main_movie_of_movement_004",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p1",
"relation": "main_movie_of_movement",
"subject": "French New Wave",
"object": "Breathless",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_movements_movies",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l4_p1_main_movie_of_movement_005",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p1",
"relation": "main_movie_of_movement",
"subject": "New Hollywood",
"object": "Easy Rider",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_movements_movies",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l4_p1_main_movie_of_movement_006",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p1",
"relation": "main_movie_of_movement",
"subject": "Film Noir",
"object": "Double Indemnity",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_movements_movies",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l4_p1_main_movie_of_movement_007",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p1",
"relation": "main_movie_of_movement",
"subject": "Silent Era",
"object": "The General",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_movements_movies",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l4_p1_main_movie_of_movement_008",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p1",
"relation": "main_movie_of_movement",
"subject": "Golden Age of Hollywood",
"object": "Gone with the Wind",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_movements_movies",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l4_p1_main_movie_of_movement_009",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p1",
"relation": "main_movie_of_movement",
"subject": "Japanese New Wave",
"object": "Cruel Story of Youth",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_movements_movies",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_movies_l4_p1_main_movie_of_movement_010",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p1",
"relation": "main_movie_of_movement",
"subject": "British New Wave",
"object": "Saturday Night and Sunday Morning",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_movements_movies",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_movies_l4_p1_main_movie_of_movement_011",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p1",
"relation": "main_movie_of_movement",
"subject": "Iranian New Wave",
"object": "The Cow",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_movements_movies",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_movies_l4_p1_main_movie_of_movement_012",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p1",
"relation": "main_movie_of_movement",
"subject": "Hong Kong New Wave",
"object": "Boat People",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_movements_movies",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_movies_l4_p1_main_movie_of_movement_013",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p1",
"relation": "main_movie_of_movement",
"subject": "Dogme 95",
"object": "The Celebration",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_movements_movies",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l4_p1_main_movie_of_movement_014",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p1",
"relation": "main_movie_of_movement",
"subject": "Cinema Novo",
"object": "Black God, White Devil",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_movements_movies",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l4_p1_main_movie_of_movement_015",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p1",
"relation": "main_movie_of_movement",
"subject": "New German Cinema",
"object": "Aguirre, the Wrath of God",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_movements_movies",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l4_p1_main_movie_of_movement_016",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p1",
"relation": "main_movie_of_movement",
"subject": "Bollywood Golden Age",
"object": "Mother India",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_movements_movies",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l4_p1_main_movie_of_movement_017",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p1",
"relation": "main_movie_of_movement",
"subject": "French Poetic Realism",
"object": "Children of Paradise",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_movements_movies",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l4_p1_main_movie_of_movement_018",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p1",
"relation": "main_movie_of_movement",
"subject": "Third Cinema",
"object": "The Hour of the Furnaces",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_movements_movies",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "C",
"factPriority": "secondary"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_movies_l3_p4",
  concepts,
};

export default conceptSet;