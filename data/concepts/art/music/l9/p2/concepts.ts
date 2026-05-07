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
 "id": "art_music_l9_p2_definition_of_pitch_term_001",
 "topicId": "art",
 "subtopicId": "music",
 "levelId": "l9",
 "partId": "p2",
 "relation": "definition_of_pitch_term",
 "subject": "Tonic",
 "object": "The home note of a scale or key.",
 "answerKind": "long",
 "difficulty": 4,
 "distractorGroup": "music_pitch_terms",
 "tags": ["music", "music_basics", "level_9"],
 "introducedIn": "A",
 "factPriority": "secondary"
 },
 {
 "id": "art_music_l9_p2_definition_of_pitch_term_002",
 "topicId": "art",
 "subtopicId": "music",
 "levelId": "l9",
 "partId": "p2",
 "relation": "definition_of_pitch_term",
 "subject": "Whole Step",
 "object": "A move equal to two semitones between notes.",
 "answerKind": "long",
 "difficulty": 4,
 "distractorGroup": "music_pitch_terms",
 "tags": ["music", "music_basics", "level_9"],
 "introducedIn": "A",
 "factPriority": "secondary"
 },
 {
 "id": "art_music_l9_p2_definition_of_pitch_term_003",
 "topicId": "art",
 "subtopicId": "music",
 "levelId": "l9",
 "partId": "p2",
 "relation": "definition_of_pitch_term",
 "subject": "Pentatonic Scale",
 "object": "A common scale made of five notes.",
 "answerKind": "long",
 "difficulty": 4,
 "distractorGroup": "music_pitch_terms",
 "tags": ["music", "music_basics", "level_9"],
 "introducedIn": "A",
 "factPriority": "secondary"
 },
{
"id": "art_music_l9_p2_definition_of_pitch_term_004",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p2",
"relation": "definition_of_pitch_term",
"subject": "Octave",
"object": "The same note repeated higher or lower.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_pitch_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "A",
"factPriority": "secondary"
},
{
"id": "art_music_l9_p2_definition_of_pitch_term_005",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p2",
"relation": "definition_of_pitch_term",
"subject": "Sharp",
"object": "A note raised slightly in pitch.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_pitch_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "A",
"factPriority": "secondary"
},
{
"id": "art_music_l9_p2_definition_of_pitch_term_006",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p2",
"relation": "definition_of_pitch_term",
"subject": "Flat",
"object": "A note lowered slightly in pitch.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_pitch_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "A",
"factPriority": "secondary"
},
{
"id": "art_music_l9_p2_definition_of_pitch_term_007",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p2",
"relation": "definition_of_pitch_term",
"subject": "Natural",
"object": "A note that is not sharp or flat.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_pitch_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "A",
"factPriority": "secondary"
},
{
"id": "art_music_l9_p2_definition_of_pitch_term_008",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p2",
"relation": "definition_of_pitch_term",
"subject": "Major Scale",
"object": "A scale that often sounds bright or happy.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_pitch_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_music_l9_p2_definition_of_pitch_term_009",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p2",
"relation": "definition_of_pitch_term",
"subject": "Minor Scale",
"object": "A scale that often sounds darker or sadder.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_pitch_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "B",
"factPriority": "secondary"
},
 {
 "id": "art_music_l9_p2_definition_of_pitch_term_010",
 "topicId": "art",
 "subtopicId": "music",
 "levelId": "l9",
 "partId": "p2",
 "relation": "definition_of_pitch_term",
 "subject": "Modulation",
 "object": "Changing from one key to another in a song.",
 "answerKind": "long",
 "difficulty": 4,
 "distractorGroup": "music_pitch_terms",
 "tags": ["music", "music_basics", "level_9"],
 "introducedIn": "B",
 "factPriority": "secondary"
 },
{
"id": "art_music_l9_p2_definition_of_pitch_term_011",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p2",
"relation": "definition_of_pitch_term",
"subject": "High Note",
"object": "A note with a higher pitch.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_pitch_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l9_p2_definition_of_pitch_term_012",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p2",
"relation": "definition_of_pitch_term",
"subject": "Low Note",
"object": "A note with a lower pitch.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_pitch_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l9_p2_definition_of_pitch_term_013",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p2",
"relation": "definition_of_pitch_term",
"subject": "Interval",
"object": "The distance between two notes.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_pitch_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "B",
"factPriority": "secondary"
},
 {
 "id": "art_music_l9_p2_definition_of_pitch_term_014",
 "topicId": "art",
 "subtopicId": "music",
 "levelId": "l9",
 "partId": "p2",
 "relation": "definition_of_pitch_term",
 "subject": "Triad",
 "object": "A chord made of three notes.",
 "answerKind": "long",
 "difficulty": 4,
 "distractorGroup": "music_pitch_terms",
 "tags": ["music", "music_basics", "level_9"],
 "introducedIn": "C",
 "factPriority": "secondary"
 },
 {
 "id": "art_music_l9_p2_definition_of_pitch_term_015",
 "topicId": "art",
 "subtopicId": "music",
 "levelId": "l9",
 "partId": "p2",
 "relation": "definition_of_pitch_term",
 "subject": "Phrase",
 "object": "A short musical idea, like a sentence in music.",
 "answerKind": "long",
 "difficulty": 4,
 "distractorGroup": "music_pitch_terms",
 "tags": ["music", "music_basics", "level_9"],
 "introducedIn": "C",
 "factPriority": "secondary"
 },
 {
 "id": "art_music_l9_p2_definition_of_pitch_term_016",
 "topicId": "art",
 "subtopicId": "music",
 "levelId": "l9",
 "partId": "p2",
 "relation": "definition_of_pitch_term",
 "subject": "Motif",
 "object": "A short musical idea repeated through a piece.",
 "answerKind": "long",
 "difficulty": 4,
 "distractorGroup": "music_pitch_terms",
 "tags": ["music", "music_basics", "level_9"],
 "introducedIn": "C",
 "factPriority": "secondary"
 },
{
"id": "art_music_l9_p2_definition_of_pitch_term_017",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p2",
"relation": "definition_of_pitch_term",
"subject": "Tone",
"object": "The sound quality or character of a note.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_pitch_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l9_p2_definition_of_pitch_term_018",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p2",
"relation": "definition_of_pitch_term",
"subject": "Semitone",
"object": "The smallest common step between two notes.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_pitch_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "C",
"factPriority": "secondary"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_music_l9_p2",
  concepts,
};

export default conceptSet;