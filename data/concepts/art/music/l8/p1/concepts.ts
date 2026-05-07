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
"id": "art_music_l8_p1_definition_of_instrument_type_001",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p1",
"relation": "definition_of_instrument_type",
"subject": "String Instruments",
"object": "Instruments that make sound from vibrating strings.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_instrument_type_definitions",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l8_p1_definition_of_instrument_type_002",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p1",
"relation": "definition_of_instrument_type",
"subject": "Woodwind Instruments",
"object": "Instruments often played by blowing air through a reed or opening.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_instrument_type_definitions",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l8_p1_definition_of_instrument_type_003",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p1",
"relation": "definition_of_instrument_type",
"subject": "Brass Instruments",
"object": "Instruments usually played by buzzing the lips into a mouthpiece.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_instrument_type_definitions",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l8_p1_definition_of_instrument_type_004",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p1",
"relation": "definition_of_instrument_type",
"subject": "Percussion Instruments",
"object": "Instruments played by striking, shaking, or scraping.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_instrument_type_definitions",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l8_p1_definition_of_instrument_type_005",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p1",
"relation": "definition_of_instrument_type",
"subject": "Keyboard Instruments",
"object": "Instruments played by pressing keys.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_instrument_type_definitions",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l8_p1_definition_of_instrument_type_006",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p1",
"relation": "definition_of_instrument_type",
"subject": "Electronic Instruments",
"object": "Instruments that use electricity or digital sound to make music.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_instrument_type_definitions",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
  "id": "art_music_l8_p1_definition_of_instrument_type_007",
  "topicId": "art",
  "subtopicId": "music",
  "levelId": "l8",
  "partId": "p1",
  "relation": "definition_of_instrument_type",
  "subject": "Acoustic Instruments",
  "object": "Instruments that make sound without needing electricity.",
  "answerKind": "long",
  "difficulty": 3,
  "distractorGroup": "music_instrument_type_definitions",
  "tags": ["music", "musical_instruments", "level_8"],
  "introducedIn": "A",
  "factPriority": "core"
},
{
"id": "art_music_l8_p1_definition_of_instrument_type_008",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p1",
"relation": "definition_of_instrument_type",
"subject": "Bowed String Instruments",
"object": "String instruments usually played by moving a bow across the strings.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_instrument_type_definitions",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "B",
"factPriority": "core"
},
{
 "id": "art_music_l8_p1_definition_of_instrument_type_009",
 "topicId": "art",
 "subtopicId": "music",
 "levelId": "l8",
 "partId": "p1",
 "relation": "definition_of_instrument_type",
 "subject": "Mallet Instruments",
 "object": "Instruments played by striking them with mallets.",
 "answerKind": "long",
 "difficulty": 4,
 "distractorGroup": "music_instrument_type_definitions",
 "tags": ["music", "musical_instruments", "level_8"],
 "introducedIn": "B",
 "factPriority": "secondary"
},
{
 "id": "art_music_l8_p1_definition_of_instrument_type_010",
 "topicId": "art",
 "subtopicId": "music",
 "levelId": "l8",
 "partId": "p1",
 "relation": "definition_of_instrument_type",
 "subject": "Marching Band Instruments",
 "object": "Instruments commonly played while marching in a band.",
 "answerKind": "long",
 "difficulty": 3,
 "distractorGroup": "music_instrument_type_definitions",
 "tags": ["music", "musical_instruments", "level_8"],
 "introducedIn": "B",
 "factPriority": "core"
},
{
 "id": "art_music_l8_p1_definition_of_instrument_type_011",
 "topicId": "art",
 "subtopicId": "music",
 "levelId": "l8",
 "partId": "p1",
 "relation": "definition_of_instrument_type",
 "subject": "Tuned Percussion Instruments",
 "object": "Percussion instruments that can play specific musical notes.",
 "answerKind": "long",
 "difficulty": 4,
 "distractorGroup": "music_instrument_type_definitions",
 "tags": ["music", "musical_instruments", "level_8"],
 "introducedIn": "B",
 "factPriority": "secondary"
},

{
"id": "art_music_l8_p1_definition_of_instrument_type_012",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p1",
"relation": "definition_of_instrument_type",
"subject": "Orchestral Instruments",
"object": "Instruments commonly played together in an orchestra.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_instrument_type_definitions",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l8_p1_definition_of_instrument_type_013",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p1",
"relation": "definition_of_instrument_type",
"subject": "Folk Instruments",
"object": "Instruments often used in traditional community music.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_instrument_type_definitions",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_music_l8_p1_definition_of_instrument_type_014",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p1",
"relation": "definition_of_instrument_type",
"subject": "Rock Band Instruments",
"object": "Instruments commonly used in rock groups, such as guitar, bass, and drums.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_instrument_type_definitions",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l8_p1_definition_of_instrument_type_015",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p1",
"relation": "definition_of_instrument_type",
"subject": "Jazz Instruments",
"object": "Instruments often used in jazz, such as saxophone, trumpet, piano, and drums.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_instrument_type_definitions",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l8_p1_definition_of_instrument_type_016",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p1",
"relation": "definition_of_instrument_type",
"subject": "Classical Instruments",
"object": "Instruments commonly used in classical music and orchestras.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_instrument_type_definitions",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l8_p1_definition_of_instrument_type_017",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p1",
"relation": "definition_of_instrument_type",
"subject": "Voice",
"object": "The human body used as a musical instrument for singing.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_instrument_type_definitions",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "C",
"factPriority": "core"
},
{
 "id": "art_music_l8_p1_definition_of_instrument_type_018",
 "topicId": "art",
 "subtopicId": "music",
 "levelId": "l8",
 "partId": "p1",
 "relation": "definition_of_instrument_type",
 "subject": "World Instruments",
 "object": "Traditional instruments associated with different cultures around the world.",
 "answerKind": "long",
 "difficulty": 4,
 "distractorGroup": "music_instrument_type_definitions",
 "tags": ["music", "musical_instruments", "level_8"],
 "introducedIn": "C",
 "factPriority": "secondary"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_music_l8_p1",
  concepts,
};

export default conceptSet;