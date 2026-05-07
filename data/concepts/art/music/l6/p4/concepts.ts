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
"id": "art_music_l6_p4_year_of_song_001",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p4",
"relation": "year_of_song",
"subject": "My Way",
"object": "1969",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_years",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l6_p4_year_of_song_002",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p4",
"relation": "year_of_song",
"subject": "La Vie en Rose",
"object": "1947",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "music_famous_song_years",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "A",
"factPriority": "secondary"
},
{
"id": "art_music_l6_p4_year_of_song_003",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p4",
"relation": "year_of_song",
"subject": "Strange Fruit",
"object": "1939",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "music_famous_song_years",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "A",
"factPriority": "secondary"
},
{
"id": "art_music_l6_p4_year_of_song_004",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p4",
"relation": "year_of_song",
"subject": "Hit the Road Jack",
"object": "1961",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_years",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l6_p4_year_of_song_005",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p4",
"relation": "year_of_song",
"subject": "Johnny B. Goode",
"object": "1958",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_years",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l6_p4_year_of_song_006",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p4",
"relation": "year_of_song",
"subject": "Can't Take My Eyes Off You",
"object": "1967",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_years",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l6_p4_year_of_song_007",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p4",
"relation": "year_of_song",
"subject": "Enter Sandman",
"object": "1991",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_years",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l6_p4_year_of_song_008",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p4",
"relation": "year_of_song",
"subject": "American Idiot",
"object": "2004",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_years",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l6_p4_year_of_song_009",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p4",
"relation": "year_of_song",
"subject": "In the End",
"object": "2000",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_years",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l6_p4_year_of_song_010",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p4",
"relation": "year_of_song",
"subject": "With or Without You",
"object": "1987",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_years",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l6_p4_year_of_song_011",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p4",
"relation": "year_of_song",
"subject": "Creep",
"object": "1992",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_years",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l6_p4_year_of_song_012",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p4",
"relation": "year_of_song",
"subject": "All I Want for Christmas Is You",
"object": "1994",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_years",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l6_p4_year_of_song_013",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p4",
"relation": "year_of_song",
"subject": "Toxic",
"object": "2003",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_years",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l6_p4_year_of_song_014",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p4",
"relation": "year_of_song",
"subject": "Shake It Off",
"object": "2014",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_years",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l6_p4_year_of_song_015",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p4",
"relation": "year_of_song",
"subject": "Blinding Lights",
"object": "2019",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_years",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l6_p4_year_of_song_016",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p4",
"relation": "year_of_song",
"subject": "Bad Romance",
"object": "2009",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_years",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l6_p4_year_of_song_017",
"topicId": "art",
"subtopicId": "music",
"levelId": "l6",
"partId": "p4",
"relation": "year_of_song",
"subject": "Rolling in the Deep",
"object": "2010",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_song_years",
"tags": ["music", "famous_songs", "level_6"],
"introducedIn": "C",
"factPriority": "core"
},
{
  "id": "art_music_l6_p4_year_of_song_018",
  "topicId": "art",
  "subtopicId": "music",
  "levelId": "l6",
  "partId": "p4",
  "relation": "year_of_song",
  "subject": "Tití Me Preguntó",
  "object": "2022",
  "answerKind": "short",
  "difficulty": 3,
  "distractorGroup": "music_famous_song_years",
  "tags": ["music", "famous_songs", "level_6"],
  "introducedIn": "C",
  "factPriority": "core"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_music_l6_p4",
  concepts,
};

export default conceptSet;