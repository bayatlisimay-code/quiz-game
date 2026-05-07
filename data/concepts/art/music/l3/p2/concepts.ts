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
"id": "art_music_l3_p2_example_of_genre_001",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "Classical",
"object": "Symphony No. 5",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_genre_examples",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l3_p2_example_of_genre_002",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "Opera",
"object": "Carmen",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_genre_examples",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l3_p2_example_of_genre_003",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "Jazz",
"object": "Take Five",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_genre_examples",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l3_p2_example_of_genre_004",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "Blues",
"object": "The Thrill Is Gone",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_genre_examples",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "A",
"factPriority": "secondary"
},
{
"id": "art_music_l3_p2_example_of_genre_005",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "Rock",
"object": "Bohemian Rhapsody",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_genre_examples",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l3_p2_example_of_genre_006",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "Pop",
"object": "Billie Jean",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_genre_examples",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l3_p2_example_of_genre_007",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "Reggae",
"object": "No Woman No Cry",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_genre_examples",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l3_p2_example_of_genre_008",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "Hip-hop",
"object": "Rapper's Delight",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_genre_examples",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l3_p2_example_of_genre_009",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "Country",
"object": "Ring of Fire",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_genre_examples",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l3_p2_example_of_genre_010",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "Soul",
"object": "Respect",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_genre_examples",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l3_p2_example_of_genre_011",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "Disco",
"object": "Stayin Alive",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_genre_examples",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l3_p2_example_of_genre_012",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "Folk",
"object": "Blowin in the Wind",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_genre_examples",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l3_p2_example_of_genre_013",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "Electronic",
"object": "One More Time",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_genre_examples",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_music_l3_p2_example_of_genre_014",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "Punk",
"object": "Anarchy in the UK",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_genre_examples",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l3_p2_example_of_genre_015",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "Metal",
"object": "Paranoid",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_genre_examples",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l3_p2_example_of_genre_016",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "Funk",
"object": "Superstition",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_genre_examples",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l3_p2_example_of_genre_017",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "Musical Theatre",
"object": "The Phantom of the Opera",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_genre_examples",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l3_p2_example_of_genre_018",
"topicId": "art",
"subtopicId": "music",
"levelId": "l3",
"partId": "p2",
"relation": "example_of_genre",
"subject": "K-Pop",
"object": "Dynamite",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_genre_examples",
"tags": ["music", "genres_and_forms", "level_3"],
"introducedIn": "C",
"factPriority": "core"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_music_l3_p2",
  concepts,
};

export default conceptSet;