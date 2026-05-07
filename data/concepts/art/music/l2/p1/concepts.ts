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
"id": "art_music_l2_p1_nationality_of_musician_001",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "Ludwig van Beethoven",
"object": "German",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l2_p1_nationality_of_musician_002",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "Wolfgang Amadeus Mozart",
"object": "Austrian",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l2_p1_nationality_of_musician_003",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "Johann Sebastian Bach",
"object": "German",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l2_p1_nationality_of_musician_004",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "Queen",
"object": "British",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l2_p1_nationality_of_musician_005",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "The Beatles",
"object": "British",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l2_p1_nationality_of_musician_006",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "Michael Jackson",
"object": "American",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l2_p1_nationality_of_musician_007",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "Bob Marley",
"object": "Jamaican",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l2_p1_nationality_of_musician_008",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "Louis Armstrong",
"object": "American",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l2_p1_nationality_of_musician_009",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "Elvis Presley",
"object": "American",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l2_p1_nationality_of_musician_010",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "Madonna",
"object": "American",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l2_p1_nationality_of_musician_011",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "Aretha Franklin",
"object": "American",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l2_p1_nationality_of_musician_012",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "Johnny Cash",
"object": "American",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_music_l2_p1_nationality_of_musician_013",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "ABBA",
"object": "Swedish",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l2_p1_nationality_of_musician_014",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "Bob Dylan",
"object": "American",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l2_p1_nationality_of_musician_015",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "Frederic Chopin",
"object": "Polish",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l2_p1_nationality_of_musician_016",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "Beyonce",
"object": "American",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l2_p1_nationality_of_musician_017",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "Shakira",
"object": "Colombian",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l2_p1_nationality_of_musician_018",
"topicId": "art",
"subtopicId": "music",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_musician",
"subject": "BTS",
"object": "South Korean",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "music_famous_musician_nationalities",
"tags": ["music", "famous_musicians", "level_2"],
"introducedIn": "C",
"factPriority": "core"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_music_l2_p1",
  concepts,
};

export default conceptSet;