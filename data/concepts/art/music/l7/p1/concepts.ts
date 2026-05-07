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
"id": "art_music_l7_p1_nationality_of_musician_001",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "Ella Fitzgerald",
"object": "American",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l7_p1_nationality_of_musician_002",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "Nina Simone",
"object": "American",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l7_p1_nationality_of_musician_003",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "Red Hot Chili Peppers",
"object": "American",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l7_p1_nationality_of_musician_004",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "Jennifer Lopez",
"object": "American",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l7_p1_nationality_of_musician_005",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "Rihanna",
"object": "Barbadian",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l7_p1_nationality_of_musician_006",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "Dua Lipa",
"object": "British",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l7_p1_nationality_of_musician_007",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "Billie Eilish",
"object": "American",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l7_p1_nationality_of_musician_008",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "Olivia Rodrigo",
"object": "American",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l7_p1_nationality_of_musician_009",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "Justin Bieber",
"object": "Canadian",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l7_p1_nationality_of_musician_010",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "Maroon 5",
"object": "American",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l7_p1_nationality_of_musician_011",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "Coldplay",
"object": "British",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l7_p1_nationality_of_musician_012",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "Alicia Keys",
"object": "American",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l7_p1_nationality_of_musician_013",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "Usher",
"object": "American",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l7_p1_nationality_of_musician_014",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "Avicii",
"object": "Swedish",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l7_p1_nationality_of_musician_015",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "Calvin Harris",
"object": "Scottish",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l7_p1_nationality_of_musician_016",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "Pyotr Ilyich Tchaikovsky",
"object": "Russian",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l7_p1_nationality_of_musician_017",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "Maurice Ravel",
"object": "French",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l7_p1_nationality_of_musician_018",
"topicId": "art",
"subtopicId": "music",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "Igor Stravinsky",
"object": "Russian",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_7"],
"introducedIn": "C",
"factPriority": "secondary"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_music_l7_p1",
  concepts,
};

export default conceptSet;
