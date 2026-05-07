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
"id": "art_music_l1_p4_year_of_song_001",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p4",
"relation": "year_of_song",
"subject": "Symphony No. 5",
"object": "1808",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_famous_song_years",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "A",
"factPriority": "secondary"
},
{
"id": "art_music_l1_p4_year_of_song_002",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p4",
"relation": "year_of_song",
"subject": "Eine Kleine Nachtmusik",
"object": "1787",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_famous_song_years",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "A",
"factPriority": "secondary"
},
{
"id": "art_music_l1_p4_year_of_song_003",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p4",
"relation": "year_of_song",
"subject": "Bohemian Rhapsody",
"object": "1975",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_song_years",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l1_p4_year_of_song_004",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p4",
"relation": "year_of_song",
"subject": "Imagine",
"object": "1971",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_song_years",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l1_p4_year_of_song_005",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p4",
"relation": "year_of_song",
"subject": "Billie Jean",
"object": "1982",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_song_years",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l1_p4_year_of_song_006",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p4",
"relation": "year_of_song",
"subject": "Hey Jude",
"object": "1968",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_song_years",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l1_p4_year_of_song_007",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p4",
"relation": "year_of_song",
"subject": "What a Wonderful World",
"object": "1967",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_famous_song_years",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "A",
"factPriority": "secondary"
},
{
"id": "art_music_l1_p4_year_of_song_008",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p4",
"relation": "year_of_song",
"subject": "Für Elise",
"object": "1810",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_famous_song_years",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_music_l1_p4_year_of_song_009",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p4",
"relation": "year_of_song",
"subject": "No Woman No Cry",
"object": "1974",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_famous_song_years",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_music_l1_p4_year_of_song_010",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p4",
"relation": "year_of_song",
"subject": "Smells Like Teen Spirit",
"object": "1991",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_song_years",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l1_p4_year_of_song_011",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p4",
"relation": "year_of_song",
"subject": "Like a Rolling Stone",
"object": "1965",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_famous_song_years",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_music_l1_p4_year_of_song_012",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p4",
"relation": "year_of_song",
"subject": "Take Five",
"object": "1959",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_famous_song_years",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_music_l1_p4_year_of_song_013",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p4",
"relation": "year_of_song",
"subject": "Respect",
"object": "1967",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_famous_song_years",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_music_l1_p4_year_of_song_014",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p4",
"relation": "year_of_song",
"subject": "Stayin Alive",
"object": "1977",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_song_years",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l1_p4_year_of_song_015",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p4",
"relation": "year_of_song",
"subject": "Hotel California",
"object": "1976",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_song_years",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l1_p4_year_of_song_016",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p4",
"relation": "year_of_song",
"subject": "Rapper's Delight",
"object": "1979",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_famous_song_years",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l1_p4_year_of_song_017",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p4",
"relation": "year_of_song",
"subject": "Ring of Fire",
"object": "1963",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_famous_song_years",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l1_p4_year_of_song_018",
"topicId": "art",
"subtopicId": "music",
"levelId": "l1",
"partId": "p4",
"relation": "year_of_song",
"subject": "Ode To Joy",
"object": "1824",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_famous_song_years",
"tags": ["music", "famous_songs", "level_1"],
"introducedIn": "C",
"factPriority": "secondary"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_music_l1_p4",
  concepts,
};

export default conceptSet;