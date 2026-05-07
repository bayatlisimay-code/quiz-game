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
"id": "art_music_l7_p2_known_for_song_001",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_song",
"subject": "Ella Fitzgerald",
"object": "Summertime",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "A",
"factPriority": "secondary"
},
{
"id": "art_music_l7_p2_known_for_song_002",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_song",
"subject": "Nina Simone",
"object": "Feeling Good",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l7_p2_known_for_song_003",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_song",
"subject": "Red Hot Chili Peppers",
"object": "Californication",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l7_p2_known_for_song_004",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_song",
"subject": "Jennifer Lopez",
"object": "Jenny from the Block",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l7_p2_known_for_song_005",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_song",
"subject": "Rihanna",
"object": "Umbrella",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l7_p2_known_for_song_006",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_song",
"subject": "Dua Lipa",
"object": "New Rules",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l7_p2_known_for_song_007",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_song",
"subject": "Billie Eilish",
"object": "bad guy",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l7_p2_known_for_song_008",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_song",
"subject": "Olivia Rodrigo",
"object": "drivers license",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l7_p2_known_for_song_009",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_song",
"subject": "Justin Bieber",
"object": "Baby",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l7_p2_known_for_song_010",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_song",
"subject": "Maroon 5",
"object": "Moves Like Jagger",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l7_p2_known_for_song_011",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_song",
"subject": "Coldplay",
"object": "Viva la Vida",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l7_p2_known_for_song_012",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_song",
"subject": "Alicia Keys",
"object": "Fallin'",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l7_p2_known_for_song_013",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_song",
"subject": "Usher",
"object": "Yeah!",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l7_p2_known_for_song_014",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_song",
"subject": "Avicii",
"object": "Wake Me Up",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l7_p2_known_for_song_015",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_song",
"subject": "Calvin Harris",
"object": "Summer",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l7_p2_known_for_song_016",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_song",
"subject": "Pyotr Ilyich Tchaikovsky",
"object": "Swan Lake",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l7_p2_known_for_song_017",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_song",
"subject": "Maurice Ravel",
"object": "Bolero",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l7_p2_known_for_song_018",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p2",
"relation": "known_for_song",
"subject": "Igor Stravinsky",
"object": "The Rite of Spring",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "music_famous_musician_songs",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "C",
"factPriority": "secondary"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_music_l7_p2",
  concepts,
};

export default conceptSet;