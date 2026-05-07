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
"id": "art_music_l1_p2_genre_of_song_001",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_song",
"subject": "Symphony No. 5",
"object": "Classical",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_song_genres",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l1_p2_genre_of_song_002",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_song",
"subject": "Eine Kleine Nachtmusik",
"object": "Classical",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_song_genres",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l1_p2_genre_of_song_003",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_song",
"subject": "Bohemian Rhapsody",
"object": "Rock",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_song_genres",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l1_p2_genre_of_song_004",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_song",
"subject": "Imagine",
"object": "Rock",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_song_genres",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l1_p2_genre_of_song_005",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_song",
"subject": "Billie Jean",
"object": "Pop",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_song_genres",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l1_p2_genre_of_song_006",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_song",
"subject": "Hey Jude",
"object": "Rock",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_song_genres",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l1_p2_genre_of_song_007",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_song",
"subject": "What a Wonderful World",
"object": "Jazz",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_song_genres",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l1_p2_genre_of_song_008",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_song",
"subject": "Für Elise",
"object": "Classical",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_song_genres",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l1_p2_genre_of_song_009",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_song",
"subject": "No Woman No Cry",
"object": "Reggae",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_song_genres",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l1_p2_genre_of_song_010",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_song",
"subject": "Smells Like Teen Spirit",
"object": "Rock",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_song_genres",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l1_p2_genre_of_song_011",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_song",
"subject": "Like a Rolling Stone",
"object": "Folk",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_famous_song_genres",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_music_l1_p2_genre_of_song_012",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_song",
"subject": "Take Five",
"object": "Jazz",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_song_genres",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l1_p2_genre_of_song_013",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_song",
"subject": "Respect",
"object": "Soul",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_song_genres",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l1_p2_genre_of_song_014",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_song",
"subject": "Stayin Alive",
"object": "Disco",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_song_genres",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l1_p2_genre_of_song_015",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_song",
"subject": "Hotel California",
"object": "Rock",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_song_genres",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l1_p2_genre_of_song_016",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_song",
"subject": "Rapper's Delight",
"object": "Hip-hop",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_song_genres",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l1_p2_genre_of_song_017",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_song",
"subject": "Ring of Fire",
"object": "Country",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_song_genres",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l1_p2_genre_of_song_018",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p2",
"relation": "genre_of_song",
"subject": "Ode To Joy",
"object": "Classical",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_song_genres",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "C",
"factPriority": "core"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_music_l1_p2",
  concepts,
};

export default conceptSet;