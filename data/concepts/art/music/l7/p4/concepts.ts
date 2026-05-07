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
"id": "art_music_l7_p4_known_for_genre_001",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_genre",
"subject": "Ella Fitzgerald",
"object": "Jazz",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l7_p4_known_for_genre_002",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_genre",
"subject": "Nina Simone",
"object": "Jazz",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l7_p4_known_for_genre_003",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_genre",
"subject": "Red Hot Chili Peppers",
"object": "Rock",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l7_p4_known_for_genre_004",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_genre",
"subject": "Jennifer Lopez",
"object": "Latin Pop",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l7_p4_known_for_genre_005",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_genre",
"subject": "Rihanna",
"object": "R&B",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l7_p4_known_for_genre_006",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_genre",
"subject": "Dua Lipa",
"object": "Pop",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l7_p4_known_for_genre_007",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_genre",
"subject": "Billie Eilish",
"object": "Pop",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l7_p4_known_for_genre_008",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_genre",
"subject": "Olivia Rodrigo",
"object": "Pop",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l7_p4_known_for_genre_009",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_genre",
"subject": "Justin Bieber",
"object": "Pop",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l7_p4_known_for_genre_010",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_genre",
"subject": "Maroon 5",
"object": "Pop",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l7_p4_known_for_genre_011",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_genre",
"subject": "Coldplay",
"object": "Rock",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l7_p4_known_for_genre_012",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_genre",
"subject": "Alicia Keys",
"object": "R&B",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l7_p4_known_for_genre_013",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_genre",
"subject": "Usher",
"object": "R&B",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l7_p4_known_for_genre_014",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_genre",
"subject": "Avicii",
"object": "Electronic",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l7_p4_known_for_genre_015",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_genre",
"subject": "Calvin Harris",
"object": "Electronic",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l7_p4_known_for_genre_016",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_genre",
"subject": "Pyotr Ilyich Tchaikovsky",
"object": "Classical",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l7_p4_known_for_genre_017",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_genre",
"subject": "Maurice Ravel",
"object": "Classical",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l7_p4_known_for_genre_018",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p4",
"relation": "known_for_genre",
"subject": "Igor Stravinsky",
"object": "Classical",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_genres",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "C",
"factPriority": "core"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_music_l7_p4",
  concepts,
};

export default conceptSet;