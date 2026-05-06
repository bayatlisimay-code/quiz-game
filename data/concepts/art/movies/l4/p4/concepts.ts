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
"id": "art_movies_l4_p4_characteristic_of_movement_001",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "German Expressionism",
"object": "Distorted sets",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_movements_characteristics",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l4_p4_characteristic_of_movement_002",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Soviet Montage",
"object": "Rapid editing",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_movements_characteristics",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l4_p4_characteristic_of_movement_003",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Italian Neorealism",
"object": "Location shooting",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_movements_characteristics",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l4_p4_characteristic_of_movement_004",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "French New Wave",
"object": "Jump cuts",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_movements_characteristics",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l4_p4_characteristic_of_movement_005",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "New Hollywood",
"object": "Antihero stories",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_movements_characteristics",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l4_p4_characteristic_of_movement_006",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Film Noir",
"object": "Shadowy visuals",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_movements_characteristics",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l4_p4_characteristic_of_movement_007",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Silent Era",
"object": "No synchronized dialogue",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_movements_characteristics",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l4_p4_characteristic_of_movement_008",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Golden Age of Hollywood",
"object": "Studio glamour",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_movements_characteristics",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l4_p4_characteristic_of_movement_009",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Japanese New Wave",
"object": "Youth rebellion",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "film_movements_characteristics",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_movies_l4_p4_characteristic_of_movement_010",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "British New Wave",
"object": "Working-class realism",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "film_movements_characteristics",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_movies_l4_p4_characteristic_of_movement_011",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Iranian New Wave",
"object": "Docufiction style",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "film_movements_characteristics",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_movies_l4_p4_characteristic_of_movement_012",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Hong Kong New Wave",
"object": "Stylish action",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "film_movements_characteristics",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_movies_l4_p4_characteristic_of_movement_013",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Dogme 95",
"object": "No artificial lighting",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_movements_characteristics",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l4_p4_characteristic_of_movement_014",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Cinema Novo",
"object": "Social criticism",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "film_movements_characteristics",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l4_p4_characteristic_of_movement_015",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "New German Cinema",
"object": "Political storytelling",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "film_movements_characteristics",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l4_p4_characteristic_of_movement_016",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Bollywood Golden Age",
"object": "Musical storytelling",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "film_movements_characteristics",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l4_p4_characteristic_of_movement_017",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "French Poetic Realism",
"object": "Fatalistic romance",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "film_movements_characteristics",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l4_p4_characteristic_of_movement_018",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Third Cinema",
"object": "Political resistance",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "film_movements_characteristics",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "C",
"factPriority": "secondary"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_movies_l4_p4",
  concepts,
};

export default conceptSet;