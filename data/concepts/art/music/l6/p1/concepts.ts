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
"id": "art_music_l6_p1_artist_of_song_001",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p1",
"relation": "artist_of_song",
"subject": "My Way",
"object": "Frank Sinatra",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_artists",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l6_p1_artist_of_song_002",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p1",
"relation": "artist_of_song",
"subject": "La Vie en Rose",
"object": "Edith Piaf",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "music_famous_song_artists",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "A",
"factPriority": "secondary"
},
{
"id": "art_music_l6_p1_artist_of_song_003",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p1",
"relation": "artist_of_song",
"subject": "Strange Fruit",
"object": "Billie Holiday",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "music_famous_song_artists",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "A",
"factPriority": "secondary"
},
{
"id": "art_music_l6_p1_artist_of_song_004",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p1",
"relation": "artist_of_song",
"subject": "Hit the Road Jack",
"object": "Ray Charles",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_artists",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l6_p1_artist_of_song_005",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p1",
"relation": "artist_of_song",
"subject": "Johnny B. Goode",
"object": "Chuck Berry",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_artists",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l6_p1_artist_of_song_006",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p1",
"relation": "artist_of_song",
"subject": "Can't Take My Eyes Off You",
"object": "Frankie Valli",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_artists",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l6_p1_artist_of_song_007",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p1",
"relation": "artist_of_song",
"subject": "Enter Sandman",
"object": "Metallica",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_artists",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l6_p1_artist_of_song_008",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p1",
"relation": "artist_of_song",
"subject": "American Idiot",
"object": "Green Day",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_artists",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l6_p1_artist_of_song_009",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p1",
"relation": "artist_of_song",
"subject": "In the End",
"object": "Linkin Park",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_artists",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l6_p1_artist_of_song_010",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p1",
"relation": "artist_of_song",
"subject": "With or Without You",
"object": "U2",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_artists",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l6_p1_artist_of_song_011",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p1",
"relation": "artist_of_song",
"subject": "Creep",
"object": "Radiohead",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_artists",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l6_p1_artist_of_song_012",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p1",
"relation": "artist_of_song",
"subject": "All I Want for Christmas Is You",
"object": "Mariah Carey",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_artists",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l6_p1_artist_of_song_013",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p1",
"relation": "artist_of_song",
"subject": "Toxic",
"object": "Britney Spears",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_artists",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l6_p1_artist_of_song_014",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p1",
"relation": "artist_of_song",
"subject": "Shake It Off",
"object": "Taylor Swift",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_artists",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l6_p1_artist_of_song_015",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p1",
"relation": "artist_of_song",
"subject": "Blinding Lights",
"object": "The Weeknd",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_artists",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l6_p1_artist_of_song_016",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p1",
"relation": "artist_of_song",
"subject": "Bad Romance",
"object": "Lady Gaga",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_artists",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l6_p1_artist_of_song_017",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p1",
"relation": "artist_of_song",
"subject": "Rolling in the Deep",
"object": "Adele",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_artists",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "C",
"factPriority": "core"
},
{
  "id": "art_music_l6_p1_artist_of_song_018",
  "topicId": "art",
  "subtopicId": "music",
  "levelId": "l6",
  "partId": "p1",
  "relation": "artist_of_song",
  "subject": "Tití Me Preguntó",
  "object": "Bad Bunny",
  "answerKind": "short",
  "difficulty": 3,
  "distractorGroup": "music_famous_song_artists",
  "tags": ["music", "famous_songs", "level_6"],
  "introducedIn": "C",
  "factPriority": "core"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_music_l6_p1",
  concepts,
};

export default conceptSet;
