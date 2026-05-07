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
"id": "art_music_l2_p2_known_for_song_001",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_song",
"subject": "Ludwig van Beethoven",
"object": "Symphony No. 5",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l2_p2_known_for_song_002",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_song",
"subject": "Wolfgang Amadeus Mozart",
"object": "Eine Kleine Nachtmusik",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l2_p2_known_for_song_003",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_song",
"subject": "Johann Sebastian Bach",
"object": "Toccata and Fugue in D Minor",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "A",
"factPriority": "secondary"
},
{
"id": "art_music_l2_p2_known_for_song_004",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_song",
"subject": "Queen",
"object": "Bohemian Rhapsody",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l2_p2_known_for_song_005",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_song",
"subject": "The Beatles",
"object": "Hey Jude",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l2_p2_known_for_song_006",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_song",
"subject": "Michael Jackson",
"object": "Billie Jean",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l2_p2_known_for_song_007",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_song",
"subject": "Bob Marley",
"object": "No Woman No Cry",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l2_p2_known_for_song_008",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_song",
"subject": "Louis Armstrong",
"object": "What a Wonderful World",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l2_p2_known_for_song_009",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_song",
"subject": "Elvis Presley",
"object": "Jailhouse Rock",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l2_p2_known_for_song_010",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_song",
"subject": "Madonna",
"object": "Like a Virgin",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l2_p2_known_for_song_011",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_song",
"subject": "Aretha Franklin",
"object": "Respect",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l2_p2_known_for_song_012",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_song",
"subject": "Johnny Cash",
"object": "Ring of Fire",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l2_p2_known_for_song_013",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_song",
"subject": "ABBA",
"object": "Dancing Queen",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l2_p2_known_for_song_014",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_song",
"subject": "Bob Dylan",
"object": "Like a Rolling Stone",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l2_p2_known_for_song_015",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_song",
"subject": "Frederic Chopin",
"object": "Nocturne Op. 9 No. 2",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l2_p2_known_for_song_016",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_song",
"subject": "Beyonce",
"object": "Single Ladies",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l2_p2_known_for_song_017",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_song",
"subject": "Shakira",
"object": "Hips Don't Lie",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l2_p2_known_for_song_018",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_song",
"subject": "BTS",
"object": "Dynamite",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "C",
"factPriority": "core"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_music_l2_p2",
  concepts,
};

export default conceptSet;