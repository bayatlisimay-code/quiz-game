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
"id": "art_music_l3_p1_definition_of_genre_001",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p1",
"relation": "definition_of_genre",
"subject": "Classical",
"object": "Music often written for orchestras, pianos, and formal concerts.",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "music_genre_definitions",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l3_p1_definition_of_genre_002",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p1",
"relation": "definition_of_genre",
"subject": "Opera",
"object": "A dramatic stage work where the story is mostly sung.",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "music_genre_definitions",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l3_p1_definition_of_genre_003",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p1",
"relation": "definition_of_genre",
"subject": "Jazz",
"object": "Music known for swing rhythms, improvisation, and expressive playing.",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "music_genre_definitions",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l3_p1_definition_of_genre_004",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p1",
"relation": "definition_of_genre",
"subject": "Blues",
"object": "Music with emotional singing and repeated patterns from African American traditions.",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "music_genre_definitions",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l3_p1_definition_of_genre_005",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p1",
"relation": "definition_of_genre",
"subject": "Rock",
"object": "Popular music built around strong beats, guitars, and energetic singing.",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "music_genre_definitions",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l3_p1_definition_of_genre_006",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p1",
"relation": "definition_of_genre",
"subject": "Pop",
"object": "Popular music made to be catchy and easy to remember.",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "music_genre_definitions",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l3_p1_definition_of_genre_007",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p1",
"relation": "definition_of_genre",
"subject": "Reggae",
"object": "Jamaican music known for relaxed rhythms and offbeat guitar accents.",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "music_genre_definitions",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
 "id": "art_music_l3_p1_definition_of_genre_008",
 "topicId": "art",
 "subtopicId": "music",
 "levelId": "l3",
 "partId": "p1",
 "relation": "definition_of_genre",
 "subject": "Hip-Hop",
 "object": "Music centered on rhythmic speech, beats, and rhyming lyrics.",
 "answerKind": "long",
 "difficulty": 2,
 "distractorGroup": "music_genre_definitions",
 "tags": ["music", "genres_and_forms", "level_3"],
 "introducedIn": "B",
 "factPriority": "core"
},
{
"id": "art_music_l3_p1_definition_of_genre_009",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p1",
"relation": "definition_of_genre",
"subject": "Country",
"object": "American music often featuring storytelling, guitars, and rural themes.",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "music_genre_definitions",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "B",
"factPriority": "core"
},
{
 "id": "art_music_l3_p1_definition_of_genre_010",
 "topicId": "art",
 "subtopicId": "music",
 "levelId": "l3",
 "partId": "p1",
 "relation": "definition_of_genre",
 "subject": "Soul",
 "object": "Emotional popular music rooted in gospel and blues traditions.",
 "answerKind": "long",
 "difficulty": 2,
 "distractorGroup": "music_genre_definitions",
 "tags": ["music", "genres_and_forms", "level_3"],
 "introducedIn": "B",
 "factPriority": "core"
},
{
"id": "art_music_l3_p1_definition_of_genre_011",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p1",
"relation": "definition_of_genre",
"subject": "Disco",
"object": "Dance music with a steady beat and bright, energetic sound.",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "music_genre_definitions",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l3_p1_definition_of_genre_012",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p1",
"relation": "definition_of_genre",
"subject": "Folk",
"object": "Traditional-style music often passed through communities and storytelling.",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "music_genre_definitions",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l3_p1_definition_of_genre_013",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p1",
"relation": "definition_of_genre",
"subject": "Electronic",
"object": "Music made mainly with electronic instruments and digital sounds.",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "music_genre_definitions",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l3_p1_definition_of_genre_014",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p1",
"relation": "definition_of_genre",
"subject": "Punk",
"object": "Fast, raw rock music known for rebellious energy.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_genre_definitions",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l3_p1_definition_of_genre_015",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p1",
"relation": "definition_of_genre",
"subject": "Metal",
"object": "Heavy rock music with loud guitars, strong drums, and intense sound.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_genre_definitions",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l3_p1_definition_of_genre_016",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p1",
"relation": "definition_of_genre",
"subject": "Funk",
"object": "Danceable music with strong bass lines and rhythmic grooves.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_genre_definitions",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l3_p1_definition_of_genre_017",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p1",
"relation": "definition_of_genre",
"subject": "Musical Theatre",
"object": "Stage music where songs help tell a dramatic story.",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "music_genre_definitions",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l3_p1_definition_of_genre_018",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p1",
"relation": "definition_of_genre",
"subject": "K-Pop",
"object": "South Korean popular music known for polished songs and performances.",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "music_genre_definitions",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "C",
"factPriority": "core"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_music_l3_p1",
  concepts,
};

export default conceptSet;