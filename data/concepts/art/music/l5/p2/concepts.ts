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
"id": "art_music_l5_p2_definition_of_music_term_001",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_music_term",
"subject": "Melody",
"object": "The main tune of a piece of music.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_basic_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l5_p2_definition_of_music_term_002",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_music_term",
"subject": "Rhythm",
"object": "The pattern of sounds and silences in music.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_basic_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l5_p2_definition_of_music_term_003",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_music_term",
"subject": "Tempo",
"object": "The speed of the music.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_basic_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l5_p2_definition_of_music_term_004",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_music_term",
"subject": "Harmony",
"object": "Notes played together to support a melody.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_basic_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l5_p2_definition_of_music_term_005",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_music_term",
"subject": "Beat",
"object": "The steady pulse you can clap or tap to.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_basic_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l5_p2_definition_of_music_term_006",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_music_term",
"subject": "Pitch",
"object": "How high or low a sound is.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_basic_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l5_p2_definition_of_music_term_007",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_music_term",
"subject": "Dynamics",
"object": "How loud or soft the music is.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_basic_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l5_p2_definition_of_music_term_008",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_music_term",
"subject": "Chord",
"object": "Several notes played at the same time.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_basic_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l5_p2_definition_of_music_term_009",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_music_term",
"subject": "Scale",
"object": "A set of notes arranged from low to high.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_basic_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l5_p2_definition_of_music_term_010",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_music_term",
"subject": "Key",
"object": "The main note or scale a piece is based on.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_basic_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_music_l5_p2_definition_of_music_term_011",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_music_term",
"subject": "Note",
"object": "A single musical sound with a specific pitch.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_basic_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l5_p2_definition_of_music_term_012",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_music_term",
"subject": "Bassline",
"object": "The low musical line that supports a song.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_basic_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l5_p2_definition_of_music_term_013",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_music_term",
"subject": "Improvisation",
"object": "Making up music while performing.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_basic_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_music_l5_p2_definition_of_music_term_014",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_music_term",
"subject": "Accompaniment",
"object": "Music that supports the main melody or singer.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_basic_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l5_p2_definition_of_music_term_015",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_music_term",
"subject": "Timbre",
"object": "The unique sound color of a voice or instrument.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_basic_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l5_p2_definition_of_music_term_016",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_music_term",
"subject": "Lyrics",
"object": "The words of a song.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_basic_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l5_p2_definition_of_music_term_017",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_music_term",
"subject": "Orchestra",
"object": "A large group of musicians playing instruments together.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_basic_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l5_p2_definition_of_music_term_018",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p2",
"relation": "definition_of_music_term",
"subject": "Choir",
"object": "A group of singers performing together.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_basic_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "C",
"factPriority": "core"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_music_l5_p2",
  concepts,
};

export default conceptSet;