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
"id": "art_movies_l5_p2_definition_of_film_term_001",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_film_term",
"subject": "Scene",
"object": "A part of a film in one setting",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_terms_definitions",
"tags": ["movies", "movie_basics", "film_terms"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l5_p2_definition_of_film_term_002",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_film_term",
"subject": "Shot",
"object": "One continuous camera recording",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_terms_definitions",
"tags": ["movies", "movie_basics", "film_terms"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l5_p2_definition_of_film_term_003",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_film_term",
"subject": "Frame",
"object": "A single image in a film",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_terms_definitions",
"tags": ["movies", "movie_basics", "film_terms"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l5_p2_definition_of_film_term_004",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_film_term",
"subject": "Close-up",
"object": "A shot showing a subject closely",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_terms_definitions",
"tags": ["movies", "movie_basics", "film_terms"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l5_p2_definition_of_film_term_005",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_film_term",
"subject": "Long shot",
"object": "A shot showing a wide view",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_terms_definitions",
"tags": ["movies", "movie_basics", "film_terms"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l5_p2_definition_of_film_term_006",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_film_term",
"subject": "Montage",
"object": "A sequence of edited short shots",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_terms_definitions",
"tags": ["movies", "movie_basics", "film_terms"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l5_p2_definition_of_film_term_007",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_film_term",
"subject": "Voice-over",
"object": "Narration heard over the images",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_terms_definitions",
"tags": ["movies", "movie_basics", "film_terms"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l5_p2_definition_of_film_term_008",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_film_term",
"subject": "Flashback",
"object": "A scene showing an earlier time",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_terms_definitions",
"tags": ["movies", "movie_basics", "film_terms"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l5_p2_definition_of_film_term_009",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_film_term",
"subject": "Soundtrack",
"object": "The music and sound of a film",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_terms_definitions",
"tags": ["movies", "movie_basics", "film_terms"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l5_p2_definition_of_film_term_010",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_film_term",
"subject": "Dialogue",
"object": "Words spoken by characters",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_terms_definitions",
"tags": ["movies", "movie_basics", "film_terms"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l5_p2_definition_of_film_term_011",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_film_term",
"subject": "Setting",
"object": "Where and when the story happens",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_terms_definitions",
"tags": ["movies", "movie_basics", "film_terms"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l5_p2_definition_of_film_term_012",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_film_term",
"subject": "Plot",
"object": "The main events of a story",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_terms_definitions",
"tags": ["movies", "movie_basics", "film_terms"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l5_p2_definition_of_film_term_013",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_film_term",
"subject": "Protagonist",
"object": "The main character of a story",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_terms_definitions",
"tags": ["movies", "movie_basics", "film_terms"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l5_p2_definition_of_film_term_014",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_film_term",
"subject": "Antagonist",
"object": "A character opposing the protagonist",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_terms_definitions",
"tags": ["movies", "movie_basics", "film_terms"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l5_p2_definition_of_film_term_015",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_film_term",
"subject": "Genre",
"object": "A category or type of film",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_terms_definitions",
"tags": ["movies", "movie_basics", "film_terms"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l5_p2_definition_of_film_term_016",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_film_term",
"subject": "Sequel",
"object": "A story continuing an earlier film",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_terms_definitions",
"tags": ["movies", "movie_basics", "film_terms"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l5_p2_definition_of_film_term_017",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_film_term",
"subject": "Prequel",
"object": "A story set before an earlier film",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_terms_definitions",
"tags": ["movies", "movie_basics", "film_terms"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l5_p2_definition_of_film_term_018",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_film_term",
"subject": "Adaptation",
"object": "A film based on another work",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_terms_definitions",
"tags": ["movies", "movie_basics", "film_terms"],
"introducedIn": "C",
"factPriority": "secondary"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_movies_l5_p2",
  concepts,
};

export default conceptSet;