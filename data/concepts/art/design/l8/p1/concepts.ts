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
"id": "art_design_l8_p1_designer_of_product_001",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p1",
"relation": "designer_of_product",
"subject": "Eames Lounge Chair",
"object": "Charles and Ray Eames",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "product_furniture_designers",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l8_p1_designer_of_product_002",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p1",
"relation": "designer_of_product",
"subject": "Wassily Chair",
"object": "Marcel Breuer",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "product_furniture_designers",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l8_p1_designer_of_product_003",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p1",
"relation": "designer_of_product",
"subject": "Panton Chair",
"object": "Verner Panton",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "product_furniture_designers",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l8_p1_designer_of_product_004",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p1",
"relation": "designer_of_product",
"subject": "Braun SK 4",
"object": "Dieter Rams and Hans Gugelot",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "product_furniture_designers",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l8_p1_designer_of_product_005",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p1",
"relation": "designer_of_product",
"subject": "Juicy Salif",
"object": "Philippe Starck",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "product_furniture_designers",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l8_p1_designer_of_product_006",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p1",
"relation": "designer_of_product",
"subject": "Arco Floor Lamp",
"object": "Achille and Pier Giacomo Castiglioni",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "product_furniture_designers",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l8_p1_designer_of_product_007",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p1",
"relation": "designer_of_product",
"subject": "Moka Express",
"object": "Alfonso Bialetti",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "product_furniture_designers",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l8_p1_designer_of_product_008",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p1",
"relation": "designer_of_product",
"subject": "Ball Chair",
"object": "Eero Aarnio",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "product_furniture_designers",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l8_p1_designer_of_product_009",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p1",
"relation": "designer_of_product",
"subject": "Tulip Chair",
"object": "Eero Saarinen",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "product_furniture_designers",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l8_p1_designer_of_product_010",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p1",
"relation": "designer_of_product",
"subject": "Anglepoise Lamp",
"object": "George Carwardine",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "product_furniture_designers",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l8_p1_designer_of_product_011",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p1",
"relation": "designer_of_product",
"subject": "Tizio Lamp",
"object": "Richard Sapper",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "product_furniture_designers",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l8_p1_designer_of_product_012",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p1",
"relation": "designer_of_product",
"subject": "Olivetti Valentine",
"object": "Ettore Sottsass and Perry A. King",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "product_furniture_designers",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l8_p1_designer_of_product_013",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p1",
"relation": "designer_of_product",
"subject": "Model 500 Telephone",
"object": "Henry Dreyfuss",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "product_furniture_designers",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l8_p1_designer_of_product_014",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p1",
"relation": "designer_of_product",
"subject": "Braun T3 Pocket Radio",
"object": "Dieter Rams",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "product_furniture_designers",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l8_p1_designer_of_product_015",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p1",
"relation": "designer_of_product",
"subject": "iMac G3",
"object": "Jonathan Ive",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "product_furniture_designers",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_design_l8_p1_designer_of_product_016",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p1",
"relation": "designer_of_product",
"subject": "Dyson DC01",
"object": "James Dyson",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "product_furniture_designers",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l8_p1_designer_of_product_017",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p1",
"relation": "designer_of_product",
"subject": "9093 Kettle",
"object": "Michael Graves",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "product_furniture_designers",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l8_p1_designer_of_product_018",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p1",
"relation": "designer_of_product",
"subject": "Chemex Coffeemaker",
"object": "Peter Schlumbohm",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "product_furniture_designers",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "C",
"factPriority": "secondary"
}
];

const conceptSet: LocalConceptSet = {
  id: "art_design_l8_p1",
  concepts,
};

export default conceptSet;