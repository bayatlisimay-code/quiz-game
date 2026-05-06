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
"id": "art_movies_l7_p4_known_for_style_001",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_style",
"subject": "Bong Joon Ho",
"object": "Genre mixing",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l7_p4_known_for_style_002",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_style",
"subject": "Greta Gerwig",
"object": "Coming-of-age stories",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l7_p4_known_for_style_003",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_style",
"subject": "Jane Campion",
"object": "Psychological drama",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "A",
"factPriority": "secondary"
},
{
"id": "art_movies_l7_p4_known_for_style_004",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_style",
"subject": "Ang Lee",
"object": "Versatile storytelling",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l7_p4_known_for_style_005",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_style",
"subject": "David Fincher",
"object": "Dark thrillers",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l7_p4_known_for_style_006",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_style",
"subject": "Denis Villeneuve",
"object": "Atmospheric sci-fi",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l7_p4_known_for_style_007",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_style",
"subject": "Kathryn Bigelow",
"object": "Tense action",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "A",
"factPriority": "secondary"
},
{
"id": "art_movies_l7_p4_known_for_style_008",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_style",
"subject": "Federico Fellini",
"object": "Dreamlike cinema",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l7_p4_known_for_style_009",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_style",
"subject": "Jean-Luc Godard",
"object": "Jump cuts",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l7_p4_known_for_style_010",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_style",
"subject": "Agnes Varda",
"object": "Personal documentary",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_movies_l7_p4_known_for_style_011",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_style",
"subject": "Pedro Almodovar",
"object": "Colorful melodrama",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l7_p4_known_for_style_012",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_style",
"subject": "Wong Kar Wai",
"object": "Romantic atmosphere",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l7_p4_known_for_style_013",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_style",
"subject": "Satyajit Ray",
"object": "Humanist realism",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l7_p4_known_for_style_014",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_style",
"subject": "Orson Welles",
"object": "Deep focus cinematography",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l7_p4_known_for_style_015",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_style",
"subject": "Billy Wilder",
"object": "Sharp dialogue",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l7_p4_known_for_style_016",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_style",
"subject": "Fritz Lang",
"object": "Expressionist visuals",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l7_p4_known_for_style_017",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_style",
"subject": "John Ford",
"object": "Western landscapes",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l7_p4_known_for_style_018",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_style",
"subject": "Sergio Leone",
"object": "Spaghetti Westerns",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_directors_styles",
"tags": ["movies", "famous_directors", "styles"],
"introducedIn": "C",
"factPriority": "core"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_movies_l7_p4",
  concepts,
};

export default conceptSet;