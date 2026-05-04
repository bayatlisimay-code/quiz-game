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
"id": "art_painting_l8_p2_city_of_museum_001",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p2",
"relation": "city_of_museum",
"subject": "Mona Lisa",
"object": "Paris",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "museum_cities",
"tags": ["louvre", "france"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l8_p2_city_of_museum_002",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p2",
"relation": "city_of_museum",
"subject": "The Starry Night",
"object": "New York",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "museum_cities",
"tags": ["moma", "united states"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l8_p2_city_of_museum_003",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p2",
"relation": "city_of_museum",
"subject": "The Last Supper",
"object": "Milan",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "museum_cities",
"tags": ["italy", "church"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l8_p2_city_of_museum_004",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p2",
"relation": "city_of_museum",
"subject": "Guernica",
"object": "Madrid",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "museum_cities",
"tags": ["spain", "reina sofia"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l8_p2_city_of_museum_005",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p2",
"relation": "city_of_museum",
"subject": "The Birth of Venus",
"object": "Florence",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "museum_cities",
"tags": ["italy", "uffizi"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l8_p2_city_of_museum_006",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p2",
"relation": "city_of_museum",
"subject": "The Night Watch",
"object": "Amsterdam",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "museum_cities",
"tags": ["netherlands", "rijksmuseum"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l8_p2_city_of_museum_007",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p2",
"relation": "city_of_museum",
"subject": "Las Meninas",
"object": "Madrid",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "museum_cities",
"tags": ["spain", "prado"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l8_p2_city_of_museum_008",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p2",
"relation": "city_of_museum",
"subject": "Girl with a Pearl Earring",
"object": "The Hague",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "museum_cities",
"tags": ["netherlands", "mauritshuis"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l8_p2_city_of_museum_009",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p2",
"relation": "city_of_museum",
"subject": "The Persistence of Memory",
"object": "New York",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "museum_cities",
"tags": ["united states", "moma"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l8_p2_city_of_museum_010",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p2",
"relation": "city_of_museum",
"subject": "American Gothic",
"object": "Chicago",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "museum_cities",
"tags": ["united states", "art institute"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l8_p2_city_of_museum_011",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p2",
"relation": "city_of_museum",
"subject": "The Kiss",
"object": "Vienna",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "museum_cities",
"tags": ["austria", "belvedere"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l8_p2_city_of_museum_012",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p2",
"relation": "city_of_museum",
"subject": "Impression, Sunrise",
"object": "Paris",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "museum_cities",
"tags": ["france", "marmottan monet"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l8_p2_city_of_museum_013",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p2",
"relation": "city_of_museum",
"subject": "The Scream",
"object": "Oslo",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "museum_cities",
"tags": ["norway", "national museum"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l8_p2_city_of_museum_014",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p2",
"relation": "city_of_museum",
"subject": "Arnolfini Portrait",
"object": "London",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "museum_cities",
"tags": ["united kingdom", "national gallery"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_painting_l8_p2_city_of_museum_015",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p2",
"relation": "city_of_museum",
"subject": "The Garden of Earthly Delights",
"object": "Madrid",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "museum_cities",
"tags": ["spain", "prado"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_painting_l8_p2_city_of_museum_016",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p2",
"relation": "city_of_museum",
"subject": "The Ambassadors",
"object": "London",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "museum_cities",
"tags": ["united kingdom", "national gallery"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l8_p2_city_of_museum_017",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p2",
"relation": "city_of_museum",
"subject": "Arrangement in Grey and Black No. 1",
"object": "Paris",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "museum_cities",
"tags": ["france", "orsay"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l8_p2_city_of_museum_018",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p2",
"relation": "city_of_museum",
"subject": "Nighthawks",
"object": "Chicago",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "museum_cities",
"tags": ["united states", "art institute"],
"introducedIn": "C",
"factPriority": "core"
}
]
const conceptSet: LocalConceptSet = {
  id: "art_painting_l8_p2",
  concepts,
};

export default conceptSet;