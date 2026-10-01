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
"id": "art_design_l8_p2_function_of_product_001",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p2",
"relation": "function_of_product",
"subject": "Eames Lounge Chair",
"object": "Seating",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "product_functions",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l8_p2_function_of_product_002",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p2",
"relation": "function_of_product",
"subject": "Wassily Chair",
"object": "Seating",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "product_functions",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l8_p2_function_of_product_003",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p2",
"relation": "function_of_product",
"subject": "Panton Chair",
"object": "Seating",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "product_functions",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l8_p2_function_of_product_004",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p2",
"relation": "function_of_product",
"subject": "Braun SK 4",
"object": "Radio and record playback",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "product_functions",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l8_p2_function_of_product_005",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p2",
"relation": "function_of_product",
"subject": "Juicy Salif",
"object": "Citrus juicing",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "product_functions",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l8_p2_function_of_product_006",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p2",
"relation": "function_of_product",
"subject": "Arco Floor Lamp",
"object": "Overhead lighting",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "product_functions",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l8_p2_function_of_product_007",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p2",
"relation": "function_of_product",
"subject": "Moka Express",
"object": "Stovetop coffee brewing",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "product_functions",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l8_p2_function_of_product_008",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p2",
"relation": "function_of_product",
"subject": "Ball Chair",
"object": "Seating",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "product_functions",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l8_p2_function_of_product_009",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p2",
"relation": "function_of_product",
"subject": "Tulip Chair",
"object": "Seating",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "product_functions",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l8_p2_function_of_product_010",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p2",
"relation": "function_of_product",
"subject": "Anglepoise Lamp",
"object": "Task lighting",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "product_functions",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l8_p2_function_of_product_011",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p2",
"relation": "function_of_product",
"subject": "Tizio Lamp",
"object": "Task lighting",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "product_functions",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l8_p2_function_of_product_012",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p2",
"relation": "function_of_product",
"subject": "Olivetti Valentine",
"object": "Typing",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "product_functions",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l8_p2_function_of_product_013",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p2",
"relation": "function_of_product",
"subject": "Model 500 Telephone",
"object": "Voice telephony",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "product_functions",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l8_p2_function_of_product_014",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p2",
"relation": "function_of_product",
"subject": "Braun T3 Pocket Radio",
"object": "Portable radio playback",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "product_functions",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l8_p2_function_of_product_015",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p2",
"relation": "function_of_product",
"subject": "iMac G3",
"object": "Personal computing",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "product_functions",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_design_l8_p2_function_of_product_016",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p2",
"relation": "function_of_product",
"subject": "Dyson DC01",
"object": "Vacuum cleaning",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "product_functions",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l8_p2_function_of_product_017",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p2",
"relation": "function_of_product",
"subject": "9093 Kettle",
"object": "Water boiling",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "product_functions",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l8_p2_function_of_product_018",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p2",
"relation": "function_of_product",
"subject": "Chemex Coffeemaker",
"object": "Pour-over coffee brewing",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "product_functions",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "C",
"factPriority": "secondary"
}
];

const conceptSet: LocalConceptSet = {
  id: "art_design_l8_p2",
  concepts,
};

export default conceptSet;