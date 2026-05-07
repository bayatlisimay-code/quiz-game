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
"id": "art_music_l5_p1_role_of_music_person_001",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p1",
"relation": "role_of_music_person",
"subject": "Composer",
"object": "Writes original music.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_basic_roles",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l5_p1_role_of_music_person_002",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p1",
"relation": "role_of_music_person",
"subject": "Backup Singer",
"object": "Sings supporting parts behind a lead vocalist.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_basic_roles",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l5_p1_role_of_music_person_003",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p1",
"relation": "role_of_music_person",
"subject": "Conductor",
"object": "Leads an orchestra or choir during a performance.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_basic_roles",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l5_p1_role_of_music_person_004",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p1",
"relation": "role_of_music_person",
"subject": "Producer",
"object": "Shapes how a recording sounds.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_basic_roles",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l5_p1_role_of_music_person_005",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p1",
"relation": "role_of_music_person",
"subject": "Lyricist",
"object": "Writes the words of a song.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_basic_roles",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l5_p1_role_of_music_person_006",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p1",
"relation": "role_of_music_person",
"subject": "Songwriter",
"object": "Creates songs by writing music, words, or both.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_basic_roles",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l5_p1_role_of_music_person_007",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p1",
"relation": "role_of_music_person",
"subject": "DJ",
"object": "Plays and mixes recorded music for an audience.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_basic_roles",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l5_p1_role_of_music_person_008",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p1",
"relation": "role_of_music_person",
"subject": "Guitarist",
"object": "Plays the guitar in music.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_basic_roles",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l5_p1_role_of_music_person_009",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p1",
"relation": "role_of_music_person",
"subject": "Pianist",
"object": "Plays the piano in music.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_basic_roles",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l5_p1_role_of_music_person_010",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p1",
"relation": "role_of_music_person",
"subject": "Drummer",
"object": "Plays drums to support the beat.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_basic_roles",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l5_p1_role_of_music_person_011",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p1",
"relation": "role_of_music_person",
"subject": "Bassist",
"object": "Plays the bass line in a song or group.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_basic_roles",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l5_p1_role_of_music_person_012",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p1",
"relation": "role_of_music_person",
"subject": "Violinist",
"object": "Plays the violin in music.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_basic_roles",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l5_p1_role_of_music_person_013",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p1",
"relation": "role_of_music_person",
"subject": "Vocalist",
"object": "Performs the singing parts of music.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_basic_roles",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l5_p1_role_of_music_person_014",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p1",
"relation": "role_of_music_person",
"subject": "Arranger",
"object": "Adapts music for different voices or instruments.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_basic_roles",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l5_p1_role_of_music_person_015",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p1",
"relation": "role_of_music_person",
"subject": "Sound Engineer",
"object": "Manages sound quality during recording or performance.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_basic_roles",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l5_p1_role_of_music_person_016",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p1",
"relation": "role_of_music_person",
"subject": "Rapper",
"object": "Performs rhythmic spoken lyrics over music.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_basic_roles",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l5_p1_role_of_music_person_017",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p1",
"relation": "role_of_music_person",
"subject": "Opera Singer",
"object": "Sings dramatic music in opera performances.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_basic_roles",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l5_p1_role_of_music_person_018",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p1",
"relation": "role_of_music_person",
"subject": "Choir Director",
"object": "Leads and trains a group of singers.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_basic_roles",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "C",
"factPriority": "secondary"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_music_l5_p1",
  concepts,
};

export default conceptSet;