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
"id": "art_music_l8_p2_type_of_instrument_001",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p2",
"relation": "type_of_instrument",
"subject": "Guitar",
"object": "String instrument",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_instrument_types",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l8_p2_type_of_instrument_002",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p2",
"relation": "type_of_instrument",
"subject": "Piano",
"object": "Keyboard instrument",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_instrument_types",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l8_p2_type_of_instrument_003",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p2",
"relation": "type_of_instrument",
"subject": "Violin",
"object": "String instrument",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_instrument_types",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l8_p2_type_of_instrument_004",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p2",
"relation": "type_of_instrument",
"subject": "Drums",
"object": "Percussion instrument",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_instrument_types",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l8_p2_type_of_instrument_005",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p2",
"relation": "type_of_instrument",
"subject": "Trumpet",
"object": "Brass instrument",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_instrument_types",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l8_p2_type_of_instrument_006",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p2",
"relation": "type_of_instrument",
"subject": "Saxophone",
"object": "Woodwind instrument",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_instrument_types",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l8_p2_type_of_instrument_007",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p2",
"relation": "type_of_instrument",
"subject": "Flute",
"object": "Woodwind instrument",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_instrument_types",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l8_p2_type_of_instrument_008",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p2",
"relation": "type_of_instrument",
"subject": "Cello",
"object": "String instrument",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_instrument_types",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l8_p2_type_of_instrument_009",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p2",
"relation": "type_of_instrument",
"subject": "Bass Guitar",
"object": "String instrument",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_instrument_types",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l8_p2_type_of_instrument_010",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p2",
"relation": "type_of_instrument",
"subject": "Clarinet",
"object": "Woodwind instrument",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_instrument_types",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l8_p2_type_of_instrument_011",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p2",
"relation": "type_of_instrument",
"subject": "Harp",
"object": "String instrument",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "music_instrument_types",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_music_l8_p2_type_of_instrument_012",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p2",
"relation": "type_of_instrument",
"subject": "Synthesizer",
"object": "Electronic instrument",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_instrument_types",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l8_p2_type_of_instrument_013",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p2",
"relation": "type_of_instrument",
"subject": "Organ",
"object": "Keyboard instrument",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "music_instrument_types",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_music_l8_p2_type_of_instrument_014",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p2",
"relation": "type_of_instrument",
"subject": "Ukulele",
"object": "String instrument",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_instrument_types",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l8_p2_type_of_instrument_015",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p2",
"relation": "type_of_instrument",
"subject": "Harmonica",
"object": "Wind instrument",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "music_instrument_types",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l8_p2_type_of_instrument_016",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p2",
"relation": "type_of_instrument",
"subject": "Accordion",
"object": "Keyboard instrument",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "music_instrument_types",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l8_p2_type_of_instrument_017",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p2",
"relation": "type_of_instrument",
"subject": "Tambourine",
"object": "Percussion instrument",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_instrument_types",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l8_p2_type_of_instrument_018",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p2",
"relation": "type_of_instrument",
"subject": "Voice",
"object": "Vocal instrument",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_instrument_types",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "C",
"factPriority": "core"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_music_l8_p2",
  concepts,
};

export default conceptSet;