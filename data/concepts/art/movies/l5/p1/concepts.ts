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
"id": "art_movies_l5_p1_role_in_filmmaking_001",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p1",
"relation": "role_in_filmmaking",
"subject": "Director",
"object": "Guides the creative vision of a film",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "filmmaking_roles",
"tags": ["movies", "movie_basics", "filmmaking_roles"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l5_p1_role_in_filmmaking_002",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p1",
"relation": "role_in_filmmaking",
"subject": "Screenwriter",
"object": "Writes the script and dialogue",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "filmmaking_roles",
"tags": ["movies", "movie_basics", "filmmaking_roles"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l5_p1_role_in_filmmaking_003",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p1",
"relation": "role_in_filmmaking",
"subject": "Producer",
"object": "Manages the film project and resources",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "filmmaking_roles",
"tags": ["movies", "movie_basics", "filmmaking_roles"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l5_p1_role_in_filmmaking_004",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p1",
"relation": "role_in_filmmaking",
"subject": "Actor",
"object": "Performs a character on screen",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "filmmaking_roles",
"tags": ["movies", "movie_basics", "filmmaking_roles"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l5_p1_role_in_filmmaking_005",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p1",
"relation": "role_in_filmmaking",
"subject": "Cinematographer",
"object": "Responsible for lighting and camera work",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "filmmaking_roles",
"tags": ["movies", "movie_basics", "filmmaking_roles"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l5_p1_role_in_filmmaking_006",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p1",
"relation": "role_in_filmmaking",
"subject": "Editor",
"object": "Arranges shots into the final film",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "filmmaking_roles",
"tags": ["movies", "movie_basics", "filmmaking_roles"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l5_p1_role_in_filmmaking_007",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p1",
"relation": "role_in_filmmaking",
"subject": "Composer",
"object": "Creates original music for the film",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "filmmaking_roles",
"tags": ["movies", "movie_basics", "filmmaking_roles"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l5_p1_role_in_filmmaking_008",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p1",
"relation": "role_in_filmmaking",
"subject": "Production designer",
"object": "Designs the overall world of the film",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "filmmaking_roles",
"tags": ["movies", "movie_basics", "filmmaking_roles"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l5_p1_role_in_filmmaking_009",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p1",
"relation": "role_in_filmmaking",
"subject": "Costume designer",
"object": "Creates clothing for the characters",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "filmmaking_roles",
"tags": ["movies", "movie_basics", "filmmaking_roles"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l5_p1_role_in_filmmaking_010",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p1",
"relation": "role_in_filmmaking",
"subject": "Casting director",
"object": "Helps choose actors for roles",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "filmmaking_roles",
"tags": ["movies", "movie_basics", "filmmaking_roles"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l5_p1_role_in_filmmaking_011",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p1",
"relation": "role_in_filmmaking",
"subject": "Sound designer",
"object": "Creates and shapes film sounds",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "filmmaking_roles",
"tags": ["movies", "movie_basics", "filmmaking_roles"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l5_p1_role_in_filmmaking_012",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p1",
"relation": "role_in_filmmaking",
"subject": "Visual effects artist",
"object": "Creates digital images and effects",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "filmmaking_roles",
"tags": ["movies", "movie_basics", "filmmaking_roles"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l5_p1_role_in_filmmaking_013",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p1",
"relation": "role_in_filmmaking",
"subject": "Stunt coordinator",
"object": "Plans safe action and stunt scenes",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "filmmaking_roles",
"tags": ["movies", "movie_basics", "filmmaking_roles"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_movies_l5_p1_role_in_filmmaking_014",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p1",
"relation": "role_in_filmmaking",
"subject": "Makeup artist",
"object": "Creates character looks with makeup",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "filmmaking_roles",
"tags": ["movies", "movie_basics", "filmmaking_roles"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l5_p1_role_in_filmmaking_015",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p1",
"relation": "role_in_filmmaking",
"subject": "Camera operator",
"object": "Operates the camera during filming",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "filmmaking_roles",
"tags": ["movies", "movie_basics", "filmmaking_roles"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l5_p1_role_in_filmmaking_016",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p1",
"relation": "role_in_filmmaking",
"subject": "Art director",
"object": "Supervises sets and visual details",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "filmmaking_roles",
"tags": ["movies", "movie_basics", "filmmaking_roles"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l5_p1_role_in_filmmaking_017",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p1",
"relation": "role_in_filmmaking",
"subject": "Location manager",
"object": "Finds and manages filming places",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "filmmaking_roles",
"tags": ["movies", "movie_basics", "filmmaking_roles"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l5_p1_role_in_filmmaking_018",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p1",
"relation": "role_in_filmmaking",
"subject": "Animator",
"object": "Creates moving images frame by frame",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "filmmaking_roles",
"tags": ["movies", "movie_basics", "filmmaking_roles"],
"introducedIn": "C",
"factPriority": "core"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_movies_l5_p1",
  concepts,
};

export default conceptSet;