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
"id": "art_painting_l8_p1_housed_in_001",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p1",
"relation": "housed_in",
"subject": "Mona Lisa",
"object": "Louvre Museum",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "art_museums",
"tags": ["renaissance", "leonardo", "paris"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l8_p1_housed_in_002",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p1",
"relation": "housed_in",
"subject": "The Starry Night",
"object": "Museum of Modern Art",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "art_museums",
"tags": ["van gogh", "new york", "post-impressionism"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l8_p1_housed_in_003",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p1",
"relation": "housed_in",
"subject": "The Last Supper",
"object": "Santa Maria delle Grazie",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "art_museums",
"tags": ["leonardo", "milan", "renaissance"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l8_p1_housed_in_004",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p1",
"relation": "housed_in",
"subject": "Guernica",
"object": "Reina Sofia Museum",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "art_museums",
"tags": ["picasso", "madrid", "war"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l8_p1_housed_in_005",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p1",
"relation": "housed_in",
"subject": "The Birth of Venus",
"object": "Uffizi Gallery",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "art_museums",
"tags": ["botticelli", "florence", "renaissance"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l8_p1_housed_in_006",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p1",
"relation": "housed_in",
"subject": "The Night Watch",
"object": "Rijksmuseum",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "art_museums",
"tags": ["rembrandt", "amsterdam", "dutch golden age"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l8_p1_housed_in_007",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p1",
"relation": "housed_in",
"subject": "Las Meninas",
"object": "Prado Museum",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "art_museums",
"tags": ["velazquez", "madrid", "spain"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l8_p1_housed_in_008",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p1",
"relation": "housed_in",
"subject": "Girl with a Pearl Earring",
"object": "Mauritshuis",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "art_museums",
"tags": ["vermeer", "the hague", "dutch"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l8_p1_housed_in_009",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p1",
"relation": "housed_in",
"subject": "The Persistence of Memory",
"object": "Museum of Modern Art",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "art_museums",
"tags": ["dali", "new york", "surrealism"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l8_p1_housed_in_010",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p1",
"relation": "housed_in",
"subject": "American Gothic",
"object": "Art Institute of Chicago",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "art_museums",
"tags": ["grant wood", "chicago", "american"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l8_p1_housed_in_011",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p1",
"relation": "housed_in",
"subject": "The Kiss",
"object": "Belvedere Museum",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "art_museums",
"tags": ["klimt", "vienna", "symbolism"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l8_p1_housed_in_012",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p1",
"relation": "housed_in",
"subject": "Impression, Sunrise",
"object": "Marmottan Monet Museum",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "art_museums",
"tags": ["monet", "paris", "impressionism"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l8_p1_housed_in_013",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p1",
"relation": "housed_in",
"subject": "The Scream",
"object": "National Museum of Norway",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "art_museums",
"tags": ["munch", "oslo", "expressionism"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l8_p1_housed_in_014",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p1",
"relation": "housed_in",
"subject": "Arnolfini Portrait",
"object": "National Gallery London",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "art_museums",
"tags": ["van eyck", "london", "northern renaissance"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_painting_l8_p1_housed_in_015",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p1",
"relation": "housed_in",
"subject": "The Garden of Earthly Delights",
"object": "Prado Museum",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "art_museums",
"tags": ["bosch", "madrid", "northern renaissance"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_painting_l8_p1_housed_in_016",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p1",
"relation": "housed_in",
"subject": "The Ambassadors",
"object": "National Gallery London",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "art_museums",
"tags": ["holbein", "london", "renaissance"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l8_p1_housed_in_017",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p1",
"relation": "housed_in",
"subject": "Arrangement in Grey and Black No. 1",
"object": "Musee d'Orsay",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "art_museums",
"tags": ["whistler", "paris", "portrait"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l8_p1_housed_in_018",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l8",
"partId": "p1",
"relation": "housed_in",
"subject": "Nighthawks",
"object": "Art Institute of Chicago",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "art_museums",
"tags": ["hopper", "chicago", "american realism"],
"introducedIn": "C",
"factPriority": "core"
}
]
const conceptSet: LocalConceptSet = {
  id: "art_painting_l8_p1",
  concepts,
};

export default conceptSet;