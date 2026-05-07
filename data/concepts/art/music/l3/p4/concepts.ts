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
"id": "art_music_l3_p4_famous_artist_of_genre_001",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p4",
"relation": "famous_artist_of_genre",
"subject": "Classical",
"object": "Ludwig van Beethoven",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_genre_artists",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l3_p4_famous_artist_of_genre_002",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p4",
"relation": "famous_artist_of_genre",
"subject": "Opera",
"object": "Giuseppe Verdi",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_genre_artists",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "A",
"factPriority": "secondary"
},
{
"id": "art_music_l3_p4_famous_artist_of_genre_003",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p4",
"relation": "famous_artist_of_genre",
"subject": "Jazz",
"object": "Louis Armstrong",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_genre_artists",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l3_p4_famous_artist_of_genre_004",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p4",
"relation": "famous_artist_of_genre",
"subject": "Blues",
"object": "B.B. King",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_genre_artists",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l3_p4_famous_artist_of_genre_005",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p4",
"relation": "famous_artist_of_genre",
"subject": "Rock",
"object": "Queen",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_genre_artists",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l3_p4_famous_artist_of_genre_006",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p4",
"relation": "famous_artist_of_genre",
"subject": "Pop",
"object": "Michael Jackson",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_genre_artists",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l3_p4_famous_artist_of_genre_007",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p4",
"relation": "famous_artist_of_genre",
"subject": "Reggae",
"object": "Bob Marley",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_genre_artists",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
 "id": "art_music_l3_p4_famous_artist_of_genre_008",
 "topicId": "art",
 "subtopicId": "music",
 "levelId": "l3",
 "partId": "p4",
 "relation": "famous_artist_of_genre",
 "subject": "Hip-Hop",
 "object": "Eminem",
 "answerKind": "short",
 "difficulty": 2,
 "distractorGroup": "music_genre_artists",
 "tags": ["music", "genres_and_forms", "level_3"],
 "introducedIn": "B",
 "factPriority": "core"
},
{
"id": "art_music_l3_p4_famous_artist_of_genre_009",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p4",
"relation": "famous_artist_of_genre",
"subject": "Country",
"object": "Johnny Cash",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_genre_artists",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l3_p4_famous_artist_of_genre_010",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p4",
"relation": "famous_artist_of_genre",
"subject": "Soul",
"object": "Aretha Franklin",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_genre_artists",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l3_p4_famous_artist_of_genre_011",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p4",
"relation": "famous_artist_of_genre",
"subject": "Disco",
"object": "Bee Gees",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_genre_artists",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l3_p4_famous_artist_of_genre_012",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p4",
"relation": "famous_artist_of_genre",
"subject": "Folk",
"object": "Bob Dylan",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_genre_artists",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l3_p4_famous_artist_of_genre_013",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p4",
"relation": "famous_artist_of_genre",
"subject": "Electronic",
"object": "Daft Punk",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_genre_artists",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l3_p4_famous_artist_of_genre_014",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p4",
"relation": "famous_artist_of_genre",
"subject": "Punk",
"object": "Sex Pistols",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_genre_artists",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l3_p4_famous_artist_of_genre_015",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p4",
"relation": "famous_artist_of_genre",
"subject": "Metal",
"object": "Black Sabbath",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_genre_artists",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l3_p4_famous_artist_of_genre_016",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p4",
"relation": "famous_artist_of_genre",
"subject": "Funk",
"object": "James Brown",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_genre_artists",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l3_p4_famous_artist_of_genre_017",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p4",
"relation": "famous_artist_of_genre",
"subject": "Musical Theatre",
"object": "Andrew Lloyd Webber",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_genre_artists",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l3_p4_famous_artist_of_genre_018",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p4",
"relation": "famous_artist_of_genre",
"subject": "K-Pop",
"object": "BTS",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_genre_artists",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "C",
"factPriority": "core"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_music_l3_p4",
  concepts,
};

export default conceptSet;