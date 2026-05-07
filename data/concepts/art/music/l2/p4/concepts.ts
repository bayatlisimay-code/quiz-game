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
"id": "art_music_l2_p4_known_for_genre_001",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_genre",
"subject": "Ludwig van Beethoven",
"object": "Classical",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l2_p4_known_for_genre_002",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_genre",
"subject": "Wolfgang Amadeus Mozart",
"object": "Classical",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l2_p4_known_for_genre_003",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_genre",
"subject": "Johann Sebastian Bach",
"object": "Classical",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l2_p4_known_for_genre_004",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_genre",
"subject": "Queen",
"object": "Rock",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l2_p4_known_for_genre_005",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_genre",
"subject": "The Beatles",
"object": "Rock",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l2_p4_known_for_genre_006",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_genre",
"subject": "Michael Jackson",
"object": "Pop",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l2_p4_known_for_genre_007",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_genre",
"subject": "Bob Marley",
"object": "Reggae",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l2_p4_known_for_genre_008",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_genre",
"subject": "Louis Armstrong",
"object": "Jazz",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l2_p4_known_for_genre_009",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_genre",
"subject": "Elvis Presley",
"object": "Rock",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l2_p4_known_for_genre_010",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_genre",
"subject": "Madonna",
"object": "Pop",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l2_p4_known_for_genre_011",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_genre",
"subject": "Aretha Franklin",
"object": "Soul",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l2_p4_known_for_genre_012",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_genre",
"subject": "Johnny Cash",
"object": "Country",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l2_p4_known_for_genre_013",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_genre",
"subject": "ABBA",
"object": "Disco",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l2_p4_known_for_genre_014",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_genre",
"subject": "Bob Dylan",
"object": "Folk",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l2_p4_known_for_genre_015",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_genre",
"subject": "Frederic Chopin",
"object": "Classical",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l2_p4_known_for_genre_016",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_genre",
"subject": "Beyonce",
"object": "Pop",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l2_p4_known_for_genre_017",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_genre",
"subject": "Shakira",
"object": "Pop",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l2_p4_known_for_genre_018",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_genre",
"subject": "BTS",
"object": "K-Pop",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "C",
"factPriority": "core"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_music_l2_p4",
  concepts,
};

export default conceptSet;