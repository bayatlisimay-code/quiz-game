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
"id": "art_music_l5_p4_definition_of_music_structure_term_001",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p4",
"relation": "definition_of_music_structure_term",
"subject": "Verse",
"object": "A section that develops the song's story.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_structure_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l5_p4_definition_of_music_structure_term_002",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p4",
"relation": "definition_of_music_structure_term",
"subject": "Chorus",
"object": "The repeated main section of a song.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_structure_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l5_p4_definition_of_music_structure_term_003",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p4",
"relation": "definition_of_music_structure_term",
"subject": "Bridge",
"object": "A contrasting section that adds variety to a song.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_structure_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l5_p4_definition_of_music_structure_term_004",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p4",
"relation": "definition_of_music_structure_term",
"subject": "Intro",
"object": "The opening section of a song or piece.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_structure_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l5_p4_definition_of_music_structure_term_005",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p4",
"relation": "definition_of_music_structure_term",
"subject": "Outro",
"object": "The closing section of a song or piece.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_structure_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l5_p4_definition_of_music_structure_term_006",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p4",
"relation": "definition_of_music_structure_term",
"subject": "Hook",
"object": "A catchy musical idea meant to be remembered.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_structure_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l5_p4_definition_of_music_structure_term_007",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p4",
"relation": "definition_of_music_structure_term",
"subject": "Refrain",
"object": "A repeated line or section in a song.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_structure_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l5_p4_definition_of_music_structure_term_008",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p4",
"relation": "definition_of_music_structure_term",
"subject": "Pre-chorus",
"object": "A short section that leads into the chorus.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_structure_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l5_p4_definition_of_music_structure_term_009",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p4",
"relation": "definition_of_music_structure_term",
"subject": "Solo",
"object": "A section where one performer is featured.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_structure_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l5_p4_definition_of_music_structure_term_010",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p4",
"relation": "definition_of_music_structure_term",
"subject": "Interlude",
"object": "A short section between larger parts of music.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_structure_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_music_l5_p4_definition_of_music_structure_term_011",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p4",
"relation": "definition_of_music_structure_term",
"subject": "Coda",
"object": "A final ending section of a piece.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_structure_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_music_l5_p4_definition_of_music_structure_term_012",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p4",
"relation": "definition_of_music_structure_term",
"subject": "Breakdown",
"object": "A section where the music becomes simpler or more focused.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_structure_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_music_l5_p4_definition_of_music_structure_term_013",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p4",
"relation": "definition_of_music_structure_term",
"subject": "Drop",
"object": "A dance music section where the beat returns strongly.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_structure_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_music_l5_p4_definition_of_music_structure_term_014",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p4",
"relation": "definition_of_music_structure_term",
"subject": "Instrumental Break",
"object": "A section with instruments but no singing.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_structure_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l5_p4_definition_of_music_structure_term_015",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p4",
"relation": "definition_of_music_structure_term",
"subject": "Movement",
"object": "A large section of a longer classical work.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_structure_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l5_p4_definition_of_music_structure_term_016",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p4",
"relation": "definition_of_music_structure_term",
"subject": "Sonata",
"object": "A classical piece usually written for one or two instruments.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_structure_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l5_p4_definition_of_music_structure_term_017",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p4",
"relation": "definition_of_music_structure_term",
"subject": "Symphony",
"object": "A large classical work for an orchestra.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_structure_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l5_p4_definition_of_music_structure_term_018",
"topicId": "art",
"subtopicId": "music",
"levelId": "l5",
"partId": "p4",
"relation": "definition_of_music_structure_term",
"subject": "Concerto",
"object": "A piece for a soloist and orchestra.",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "music_structure_terms",
"tags": ["music", "music_basics", "level_5"],
"introducedIn": "C",
"factPriority": "secondary"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_music_l5_p4",
  concepts,
};

export default conceptSet;