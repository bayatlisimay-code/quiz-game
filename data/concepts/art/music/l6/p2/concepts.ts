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
"id": "art_music_l6_p2_genre_of_song_001",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p2",
"relation": "genre_of_song",
"subject": "My Way",
"object": "Jazz",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_genres",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l6_p2_genre_of_song_002",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p2",
"relation": "genre_of_song",
"subject": "La Vie en Rose",
"object": "Jazz",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "music_famous_song_genres",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "A",
"factPriority": "secondary"
},
{
"id": "art_music_l6_p2_genre_of_song_003",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p2",
"relation": "genre_of_song",
"subject": "Strange Fruit",
"object": "Jazz",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "music_famous_song_genres",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "A",
"factPriority": "secondary"
},
{
"id": "art_music_l6_p2_genre_of_song_004",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p2",
"relation": "genre_of_song",
"subject": "Hit the Road Jack",
"object": "Soul",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_genres",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l6_p2_genre_of_song_005",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p2",
"relation": "genre_of_song",
"subject": "Johnny B. Goode",
"object": "Rock",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_genres",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l6_p2_genre_of_song_006",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p2",
"relation": "genre_of_song",
"subject": "Can't Take My Eyes Off You",
"object": "Soul",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_genres",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l6_p2_genre_of_song_007",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p2",
"relation": "genre_of_song",
"subject": "Enter Sandman",
"object": "Metal",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_genres",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l6_p2_genre_of_song_008",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p2",
"relation": "genre_of_song",
"subject": "American Idiot",
"object": "Punk Rock",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_genres",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l6_p2_genre_of_song_009",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p2",
"relation": "genre_of_song",
"subject": "In the End",
"object": "Rock",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_genres",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l6_p2_genre_of_song_010",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p2",
"relation": "genre_of_song",
"subject": "With or Without You",
"object": "Rock",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_genres",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l6_p2_genre_of_song_011",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p2",
"relation": "genre_of_song",
"subject": "Creep",
"object": "Alternative Rock",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_genres",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l6_p2_genre_of_song_012",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p2",
"relation": "genre_of_song",
"subject": "All I Want for Christmas Is You",
"object": "Pop",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_genres",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l6_p2_genre_of_song_013",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p2",
"relation": "genre_of_song",
"subject": "Toxic",
"object": "Dance-Pop",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_genres",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l6_p2_genre_of_song_014",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p2",
"relation": "genre_of_song",
"subject": "Shake It Off",
"object": "Pop",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_genres",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l6_p2_genre_of_song_015",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p2",
"relation": "genre_of_song",
"subject": "Blinding Lights",
"object": "Pop",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_genres",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l6_p2_genre_of_song_016",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p2",
"relation": "genre_of_song",
"subject": "Bad Romance",
"object": "Pop",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_genres",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l6_p2_genre_of_song_017",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p2",
"relation": "genre_of_song",
"subject": "Rolling in the Deep",
"object": "Pop",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_genres",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "C",
"factPriority": "core"
},
{
  "id": "art_music_l6_p2_genre_of_song_018",
  "topicId": "art",
  "subtopicId": "music",
  "levelId": "l6",
  "partId": "p2",
  "relation": "genre_of_song",
  "subject": "Tití Me Preguntó",
  "object": "Reggaeton",
  "answerKind": "short",
  "difficulty": 3,
  "distractorGroup": "music_famous_song_genres",
  "tags": ["music", "famous_songs", "level_6"],
  "introducedIn": "C",
  "factPriority": "core"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_music_l6_p2",
  concepts,
};

export default conceptSet;