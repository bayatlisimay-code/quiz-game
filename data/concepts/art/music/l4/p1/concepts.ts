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
"id": "art_music_l4_p1_main_artist_of_movement_001",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p1",
"relation": "main_artist_of_movement",
"subject": "Baroque",
"object": "Johann Sebastian Bach",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_movement_main_artists",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l4_p1_main_artist_of_movement_002",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p1",
"relation": "main_artist_of_movement",
"subject": "Classical Period",
"object": "Wolfgang Amadeus Mozart",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_movement_main_artists",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l4_p1_main_artist_of_movement_003",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p1",
"relation": "main_artist_of_movement",
"subject": "Romantic Era",
"object": "Frederic Chopin",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_movement_main_artists",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l4_p1_main_artist_of_movement_004",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p1",
"relation": "main_artist_of_movement",
"subject": "Impressionist Music",
"object": "Claude Debussy",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_movement_main_artists",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "A",
"factPriority": "secondary"
},
{
"id": "art_music_l4_p1_main_artist_of_movement_005",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p1",
"relation": "main_artist_of_movement",
"subject": "Jazz Age",
"object": "Louis Armstrong",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_movement_main_artists",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l4_p1_main_artist_of_movement_006",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p1",
"relation": "main_artist_of_movement",
"subject": "Swing Era",
"object": "Benny Goodman",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_movement_main_artists",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "A",
"factPriority": "secondary"
},
{
"id": "art_music_l4_p1_main_artist_of_movement_007",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p1",
"relation": "main_artist_of_movement",
"subject": "Rock and Roll Era",
"object": "Elvis Presley",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_movement_main_artists",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l4_p1_main_artist_of_movement_008",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p1",
"relation": "main_artist_of_movement",
"subject": "Bebop",
"object": "Charlie Parker",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_movement_main_artists",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_music_l4_p1_main_artist_of_movement_009",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p1",
"relation": "main_artist_of_movement",
"subject": "Motown",
"object": "Stevie Wonder",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_movement_main_artists",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l4_p1_main_artist_of_movement_010",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p1",
"relation": "main_artist_of_movement",
"subject": "British Invasion",
"object": "The Beatles",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_movement_main_artists",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l4_p1_main_artist_of_movement_011",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p1",
"relation": "main_artist_of_movement",
"subject": "Disco Era",
"object": "Bee Gees",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_movement_main_artists",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l4_p1_main_artist_of_movement_012",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p1",
"relation": "main_artist_of_movement",
"subject": "Punk Movement",
"object": "Sex Pistols",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_movement_main_artists",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_music_l4_p1_main_artist_of_movement_013",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p1",
"relation": "main_artist_of_movement",
"subject": "Hip-Hop Golden Age",
"object": "Public Enemy",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_movement_main_artists",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_music_l4_p1_main_artist_of_movement_014",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p1",
"relation": "main_artist_of_movement",
"subject": "Grunge",
"object": "Nirvana",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_movement_main_artists",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l4_p1_main_artist_of_movement_015",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p1",
"relation": "main_artist_of_movement",
"subject": "Britpop",
"object": "Oasis",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_movement_main_artists",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l4_p1_main_artist_of_movement_016",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p1",
"relation": "main_artist_of_movement",
"subject": "New Wave",
"object": "The Police",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_movement_main_artists",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l4_p1_main_artist_of_movement_017",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p1",
"relation": "main_artist_of_movement",
"subject": "EDM Era",
"object": "Daft Punk",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_movement_main_artists",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l4_p1_main_artist_of_movement_018",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p1",
"relation": "main_artist_of_movement",
"subject": "K-Pop Wave",
"object": "BTS",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_movement_main_artists",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "C",
"factPriority": "core"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_music_l4_p1",
  concepts,
};

export default conceptSet;
