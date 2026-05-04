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
"id": "art_painting_l8_p4_country_of_museum_001",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p4",
"relation": "country_of_museum",
"subject": "Mona Lisa",
"object": "France",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "museum_countries",
"tags": ["louvre", "paris"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l8_p4_country_of_museum_002",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p4",
"relation": "country_of_museum",
"subject": "The Starry Night",
"object": "United States",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "museum_countries",
"tags": ["moma", "new york"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l8_p4_country_of_museum_003",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p4",
"relation": "country_of_museum",
"subject": "The Last Supper",
"object": "Italy",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "museum_countries",
"tags": ["milan", "church"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l8_p4_country_of_museum_004",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p4",
"relation": "country_of_museum",
"subject": "Guernica",
"object": "Spain",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "museum_countries",
"tags": ["madrid", "reina sofia"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l8_p4_country_of_museum_005",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p4",
"relation": "country_of_museum",
"subject": "The Birth of Venus",
"object": "Italy",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "museum_countries",
"tags": ["florence", "uffizi"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l8_p4_country_of_museum_006",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p4",
"relation": "country_of_museum",
"subject": "The Night Watch",
"object": "Netherlands",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "museum_countries",
"tags": ["amsterdam", "rijksmuseum"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l8_p4_country_of_museum_007",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p4",
"relation": "country_of_museum",
"subject": "Las Meninas",
"object": "Spain",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "museum_countries",
"tags": ["madrid", "prado"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l8_p4_country_of_museum_008",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p4",
"relation": "country_of_museum",
"subject": "Girl with a Pearl Earring",
"object": "Netherlands",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "museum_countries",
"tags": ["the hague", "mauritshuis"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l8_p4_country_of_museum_009",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p4",
"relation": "country_of_museum",
"subject": "The Persistence of Memory",
"object": "United States",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "museum_countries",
"tags": ["new york", "moma"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l8_p4_country_of_museum_010",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p4",
"relation": "country_of_museum",
"subject": "American Gothic",
"object": "United States",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "museum_countries",
"tags": ["chicago", "art institute"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l8_p4_country_of_museum_011",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p4",
"relation": "country_of_museum",
"subject": "The Kiss",
"object": "Austria",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "museum_countries",
"tags": ["vienna", "belvedere"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l8_p4_country_of_museum_012",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p4",
"relation": "country_of_museum",
"subject": "Impression, Sunrise",
"object": "France",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "museum_countries",
"tags": ["paris", "marmottan monet"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l8_p4_country_of_museum_013",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p4",
"relation": "country_of_museum",
"subject": "The Scream",
"object": "Norway",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "museum_countries",
"tags": ["oslo", "national museum"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l8_p4_country_of_museum_014",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p4",
"relation": "country_of_museum",
"subject": "Arnolfini Portrait",
"object": "United Kingdom",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "museum_countries",
"tags": ["london", "national gallery"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_painting_l8_p4_country_of_museum_015",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p4",
"relation": "country_of_museum",
"subject": "The Garden of Earthly Delights",
"object": "Spain",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "museum_countries",
"tags": ["madrid", "prado"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_painting_l8_p4_country_of_museum_016",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p4",
"relation": "country_of_museum",
"subject": "The Ambassadors",
"object": "United Kingdom",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "museum_countries",
"tags": ["london", "national gallery"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l8_p4_country_of_museum_017",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p4",
"relation": "country_of_museum",
"subject": "Arrangement in Grey and Black No. 1",
"object": "France",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "museum_countries",
"tags": ["paris", "orsay"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l8_p4_country_of_museum_018",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p4",
"relation": "country_of_museum",
"subject": "Nighthawks",
"object": "United States",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "museum_countries",
"tags": ["chicago", "art institute"],
"introducedIn": "C",
"factPriority": "core"
}
]
const conceptSet: LocalConceptSet = {
  id: "art_painting_l8_p4",
  concepts,
};

export default conceptSet;
