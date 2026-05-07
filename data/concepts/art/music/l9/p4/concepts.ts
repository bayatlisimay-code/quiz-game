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
 "id": "art_music_l9_p4_definition_of_rhythm_term_001",
 "topicId": "art",
 "subtopicId": "music",
 "levelId": "l9",
 "partId": "p4",
 "relation": "definition_of_rhythm_term",
 "subject": "Triplet",
 "object": "A group of three notes played in the time of two.",
 "answerKind": "long",
 "difficulty": 4,
 "distractorGroup": "music_rhythm_terms",
 "tags": ["music", "music_basics", "level_9"],
 "introducedIn": "A",
 "factPriority": "secondary"
 },
 {
 "id": "art_music_l9_p4_definition_of_rhythm_term_002",
 "topicId": "art",
 "subtopicId": "music",
 "levelId": "l9",
 "partId": "p4",
 "relation": "definition_of_rhythm_term",
 "subject": "Rhythmic Pattern",
 "object": "A repeated arrangement of beats and silences.",
 "answerKind": "long",
 "difficulty": 3,
 "distractorGroup": "music_rhythm_terms",
 "tags": ["music", "music_basics", "level_9"],
 "introducedIn": "A",
 "factPriority": "core"
 },
 {
 "id": "art_music_l9_p4_definition_of_rhythm_term_003",
 "topicId": "art",
 "subtopicId": "music",
 "levelId": "l9",
 "partId": "p4",
 "relation": "definition_of_rhythm_term",
 "subject": "Metronome",
 "object": "A device that keeps a steady beat for practicing.",
 "answerKind": "long",
 "difficulty": 3,
 "distractorGroup": "music_rhythm_terms",
 "tags": ["music", "music_basics", "level_9"],
 "introducedIn": "A",
 "factPriority": "core"
 },
{
"id": "art_music_l9_p4_definition_of_rhythm_term_004",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p4",
"relation": "definition_of_rhythm_term",
"subject": "Measure",
"object": "A small group of beats in written music.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_rhythm_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "A",
"factPriority": "secondary"
},
 {
 "id": "art_music_l9_p4_definition_of_rhythm_term_005",
 "topicId": "art",
 "subtopicId": "music",
 "levelId": "l9",
 "partId": "p4",
 "relation": "definition_of_rhythm_term",
 "subject": "Tempo Change",
 "object": "A speed change during a piece of music.",
 "answerKind": "long",
 "difficulty": 4,
 "distractorGroup": "music_rhythm_terms",
 "tags": ["music", "music_basics", "level_9"],
 "introducedIn": "A",
 "factPriority": "secondary"
 },
{
"id": "art_music_l9_p4_definition_of_rhythm_term_006",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p4",
"relation": "definition_of_rhythm_term",
"subject": "Meter",
"object": "The regular grouping of beats in music.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_rhythm_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "A",
"factPriority": "secondary"
},
{
"id": "art_music_l9_p4_definition_of_rhythm_term_007",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p4",
"relation": "definition_of_rhythm_term",
"subject": "Time Signature",
"object": "A symbol showing how beats are grouped in music.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_rhythm_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "A",
"factPriority": "secondary"
},
{
"id": "art_music_l9_p4_definition_of_rhythm_term_008",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p4",
"relation": "definition_of_rhythm_term",
"subject": "Rest",
"object": "A moment of silence in music.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_rhythm_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l9_p4_definition_of_rhythm_term_009",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p4",
"relation": "definition_of_rhythm_term",
"subject": "Syncopation",
"object": "Rhythm that stresses unexpected beats.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_rhythm_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_music_l9_p4_definition_of_rhythm_term_010",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p4",
"relation": "definition_of_rhythm_term",
"subject": "Downbeat",
"object": "The first beat of a measure.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_rhythm_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_music_l9_p4_definition_of_rhythm_term_011",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p4",
"relation": "definition_of_rhythm_term",
"subject": "Upbeat",
"object": "A weaker beat before a stronger beat.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_rhythm_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_music_l9_p4_definition_of_rhythm_term_012",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p4",
"relation": "definition_of_rhythm_term",
"subject": "Backbeat",
"object": "A strong beat often heard on beats two and four.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_rhythm_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_music_l9_p4_definition_of_rhythm_term_013",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p4",
"relation": "definition_of_rhythm_term",
"subject": "Groove",
"object": "A rhythm that feels steady and easy to move with.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_rhythm_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l9_p4_definition_of_rhythm_term_014",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p4",
"relation": "definition_of_rhythm_term",
"subject": "Pulse",
"object": "The regular heartbeat-like feel of music.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_rhythm_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l9_p4_definition_of_rhythm_term_015",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p4",
"relation": "definition_of_rhythm_term",
"subject": "Accent",
"object": "Extra emphasis placed on a note or beat.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_rhythm_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l9_p4_definition_of_rhythm_term_016",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p4",
"relation": "definition_of_rhythm_term",
"subject": "Offbeat",
"object": "A beat that falls between the main beats.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_rhythm_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "C",
"factPriority": "secondary"
},
 {
 "id": "art_music_l9_p4_definition_of_rhythm_term_017",
 "topicId": "art",
 "subtopicId": "music",
 "levelId": "l9",
 "partId": "p4",
 "relation": "definition_of_rhythm_term",
 "subject": "Adagio",
 "object": "A slow tempo marking in music.",
 "answerKind": "long",
 "difficulty": 4,
 "distractorGroup": "music_rhythm_terms",
 "tags": ["music", "music_basics", "level_9"],
 "introducedIn": "C",
 "factPriority": "secondary"
 },
 {
 "id": "art_music_l9_p4_definition_of_rhythm_term_018",
 "topicId": "art",
 "subtopicId": "music",
 "levelId": "l9",
 "partId": "p4",
 "relation": "definition_of_rhythm_term",
 "subject": "Allegro",
 "object": "A fast tempo marking in music.",
 "answerKind": "long",
 "difficulty": 4,
 "distractorGroup": "music_rhythm_terms",
 "tags": ["music", "music_basics", "level_9"],
 "introducedIn": "C",
 "factPriority": "secondary"
 }
]
  const conceptSet: LocalConceptSet = {
  id: "art_music_l9_p4",
  concepts,
};

export default conceptSet;