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
"id": "art_music_l9_p1_definition_of_vocal_term_001",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p1",
"relation": "definition_of_vocal_term",
"subject": "Soprano",
"object": "The highest common female voice type.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_vocal_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l9_p1_definition_of_vocal_term_002",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p1",
"relation": "definition_of_vocal_term",
"subject": "Alto",
"object": "A lower female voice type.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_vocal_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l9_p1_definition_of_vocal_term_003",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p1",
"relation": "definition_of_vocal_term",
"subject": "Tenor",
"object": "A higher male voice type.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_vocal_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l9_p1_definition_of_vocal_term_004",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p1",
"relation": "definition_of_vocal_term",
"subject": "Bass",
"object": "The lowest common male voice type.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_vocal_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l9_p1_definition_of_vocal_term_005",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p1",
"relation": "definition_of_vocal_term",
"subject": "Baritone",
"object": "A male voice type between tenor and bass.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_vocal_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "A",
"factPriority": "secondary"
},
{
"id": "art_music_l9_p1_definition_of_vocal_term_006",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p1",
"relation": "definition_of_vocal_term",
"subject": "Mezzo-soprano",
"object": "A female voice type between soprano and alto.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_vocal_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "A",
"factPriority": "secondary"
},
{
"id": "art_music_l9_p1_definition_of_vocal_term_007",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p1",
"relation": "definition_of_vocal_term",
"subject": "Falsetto",
"object": "A very high singing voice above the normal range.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_vocal_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "A",
"factPriority": "secondary"
},
{
"id": "art_music_l9_p1_definition_of_vocal_term_008",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p1",
"relation": "definition_of_vocal_term",
"subject": "Vibrato",
"object": "A slight wavering sound in a held note.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_vocal_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "B",
"factPriority": "secondary"
},
 {
 "id": "art_music_l9_p1_definition_of_vocal_term_009",
 "topicId": "art",
 "subtopicId": "music",
 "levelId": "l9",
 "partId": "p1",
 "relation": "definition_of_vocal_term",
 "subject": "Diction",
 "object": "How clearly a singer pronounces words.",
 "answerKind": "long",
 "difficulty": 3,
 "distractorGroup": "music_vocal_terms",
 "tags": ["music", "music_basics", "level_9"],
 "introducedIn": "B",
 "factPriority": "core"
 },
 {
 "id": "art_music_l9_p1_definition_of_vocal_term_010",
 "topicId": "art",
 "subtopicId": "music",
 "levelId": "l9",
 "partId": "p1",
 "relation": "definition_of_vocal_term",
 "subject": "Belting",
 "object": "Singing loudly with a strong, powerful voice.",
 "answerKind": "long",
 "difficulty": 4,
 "distractorGroup": "music_vocal_terms",
 "tags": ["music", "music_basics", "level_9"],
 "introducedIn": "B",
 "factPriority": "secondary"
 },
{
"id": "art_music_l9_p1_definition_of_vocal_term_011",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p1",
"relation": "definition_of_vocal_term",
"subject": "Duet",
"object": "A piece performed by two singers or musicians.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_vocal_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l9_p1_definition_of_vocal_term_012",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p1",
"relation": "definition_of_vocal_term",
"subject": "A cappella",
"object": "Singing without instrumental accompaniment.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_vocal_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l9_p1_definition_of_vocal_term_013",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p1",
"relation": "definition_of_vocal_term",
"subject": "Lead Vocal",
"object": "The main singing part in a song.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_vocal_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l9_p1_definition_of_vocal_term_014",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p1",
"relation": "definition_of_vocal_term",
"subject": "Backing Vocal",
"object": "Singing that supports the lead vocal.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_vocal_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l9_p1_definition_of_vocal_term_015",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p1",
"relation": "definition_of_vocal_term",
"subject": "Choir",
"object": "A group of singers performing together.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_vocal_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l9_p1_definition_of_vocal_term_016",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p1",
"relation": "definition_of_vocal_term",
"subject": "Aria",
"object": "A solo song in an opera.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_vocal_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l9_p1_definition_of_vocal_term_017",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p1",
"relation": "definition_of_vocal_term",
"subject": "Recitative",
"object": "Opera singing that sounds close to speech.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_vocal_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l9_p1_definition_of_vocal_term_018",
"topicId": "art",
"subtopicId": "music",
"levelId": "l9",
"partId": "p1",
"relation": "definition_of_vocal_term",
"subject": "Vocal Range",
"object": "The span from a singer's lowest to highest note.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_vocal_terms",
"tags": ["music", "music_basics", "level_9"],
"introducedIn": "C",
"factPriority": "secondary"
} 
]
  const conceptSet: LocalConceptSet = {
  id: "art_music_l9_p1",
  concepts,
};

export default conceptSet;