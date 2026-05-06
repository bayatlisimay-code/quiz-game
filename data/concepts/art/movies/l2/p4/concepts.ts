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
"id": "art_movies_l2_p4_known_for_style_001",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_style",
"subject": "Steven Spielberg",
"object": "Spectacle and wonder",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l2_p4_known_for_style_002",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_style",
"subject": "Alfred Hitchcock",
"object": "Suspense",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l2_p4_known_for_style_003",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_style",
"subject": "Martin Scorsese",
"object": "Crime dramas",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l2_p4_known_for_style_004",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_style",
"subject": "Christopher Nolan",
"object": "Complex timelines",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l2_p4_known_for_style_005",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_style",
"subject": "Quentin Tarantino",
"object": "Nonlinear storytelling",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l2_p4_known_for_style_006",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_style",
"subject": "James Cameron",
"object": "Sci-fi spectacle",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l2_p4_known_for_style_007",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_style",
"subject": "George Lucas",
"object": "Space fantasy",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l2_p4_known_for_style_008",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_style",
"subject": "Hayao Miyazaki",
"object": "Hand-drawn fantasy",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l2_p4_known_for_style_009",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_style",
"subject": "Akira Kurosawa",
"object": "Samurai epics",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l2_p4_known_for_style_010",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_style",
"subject": "Stanley Kubrick",
"object": "Precise visuals",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l2_p4_known_for_style_011",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_style",
"subject": "Francis Ford Coppola",
"object": "Epic crime",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l2_p4_known_for_style_012",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_style",
"subject": "Ridley Scott",
"object": "Dark sci-fi",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l2_p4_known_for_style_013",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_style",
"subject": "Peter Jackson",
"object": "Epic fantasy",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l2_p4_known_for_style_014",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_style",
"subject": "Tim Burton",
"object": "Gothic visuals",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l2_p4_known_for_style_015",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_style",
"subject": "Wes Anderson",
"object": "Symmetrical visuals",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l2_p4_known_for_style_016",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_style",
"subject": "Guillermo del Toro",
"object": "Dark fantasy",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l2_p4_known_for_style_017",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_style",
"subject": "Sofia Coppola",
"object": "Atmospheric drama",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l2_p4_known_for_style_018",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_style",
"subject": "Spike Lee",
"object": "Social commentary",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "C",
"factPriority": "core"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_movies_l2_p4",
  concepts,
};

export default conceptSet;
