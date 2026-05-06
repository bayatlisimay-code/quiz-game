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
"id": "art_movies_l4_p2_period_of_movement_001",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "German Expressionism",
"object": "1920s",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_movements_periods",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l4_p2_period_of_movement_002",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Soviet Montage",
"object": "1920s",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_movements_periods",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l4_p2_period_of_movement_003",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Italian Neorealism",
"object": "1940s–1950s",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_movements_periods",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l4_p2_period_of_movement_004",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "French New Wave",
"object": "1950s–1960s",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_movements_periods",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l4_p2_period_of_movement_005",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "New Hollywood",
"object": "1960s–1970s",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_movements_periods",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l4_p2_period_of_movement_006",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Film Noir",
"object": "1940s–1950s",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_movements_periods",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l4_p2_period_of_movement_007",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Silent Era",
"object": "1910s–1920s",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_movements_periods",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l4_p2_period_of_movement_008",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Golden Age of Hollywood",
"object": "1930s–1940s",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_movements_periods",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l4_p2_period_of_movement_009",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Japanese New Wave",
"object": "1960s",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_movements_periods",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_movies_l4_p2_period_of_movement_010",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "British New Wave",
"object": "1950s–1960s",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_movements_periods",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_movies_l4_p2_period_of_movement_011",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Iranian New Wave",
"object": "1960s–1970s",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_movements_periods",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_movies_l4_p2_period_of_movement_012",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Hong Kong New Wave",
"object": "1970s–1980s",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_movements_periods",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_movies_l4_p2_period_of_movement_013",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Dogme 95",
"object": "1990s",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_movements_periods",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l4_p2_period_of_movement_014",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Cinema Novo",
"object": "1960s–1970s",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_movements_periods",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l4_p2_period_of_movement_015",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "New German Cinema",
"object": "1960s–1980s",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_movements_periods",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l4_p2_period_of_movement_016",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Bollywood Golden Age",
"object": "1940s–1960s",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_movements_periods",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l4_p2_period_of_movement_017",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "French Poetic Realism",
"object": "1930s",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_movements_periods",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l4_p2_period_of_movement_018",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Third Cinema",
"object": "1960s–1970s",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_movements_periods",
"tags": ["movies", "film_movements", "film_history"],
"introducedIn": "C",
"factPriority": "secondary"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_movies_l4_p2",
  concepts,
};

export default conceptSet;