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
"id": "art_design_l8_p4_material_or_design_feature_of_product_001",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p4",
"relation": "material_or_design_feature_of_product",
"subject": "Eames Lounge Chair",
"object": "Molded plywood shells with leather upholstery",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "product_material_features",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l8_p4_material_or_design_feature_of_product_002",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p4",
"relation": "material_or_design_feature_of_product",
"subject": "Wassily Chair",
"object": "Bent tubular-steel frame",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "product_material_features",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l8_p4_material_or_design_feature_of_product_003",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p4",
"relation": "material_or_design_feature_of_product",
"subject": "Panton Chair",
"object": "Single-piece cantilevered plastic form",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "product_material_features",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l8_p4_material_or_design_feature_of_product_004",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p4",
"relation": "material_or_design_feature_of_product",
"subject": "Braun SK 4",
"object": "Transparent acrylic lid over the turntable",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "product_material_features",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l8_p4_material_or_design_feature_of_product_005",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p4",
"relation": "material_or_design_feature_of_product",
"subject": "Juicy Salif",
"object": "Cast aluminum body on three long legs",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "product_material_features",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l8_p4_material_or_design_feature_of_product_006",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p4",
"relation": "material_or_design_feature_of_product",
"subject": "Arco Floor Lamp",
"object": "Long arched steel stem anchored by a marble base",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "product_material_features",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l8_p4_material_or_design_feature_of_product_007",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p4",
"relation": "material_or_design_feature_of_product",
"subject": "Moka Express",
"object": "Octagonal aluminum body",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "product_material_features",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l8_p4_material_or_design_feature_of_product_008",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p4",
"relation": "material_or_design_feature_of_product",
"subject": "Ball Chair",
"object": "Spherical fiberglass shell with an upholstered interior",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "product_material_features",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l8_p4_material_or_design_feature_of_product_009",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p4",
"relation": "material_or_design_feature_of_product",
"subject": "Tulip Chair",
"object": "Single pedestal base replacing conventional chair legs",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "product_material_features",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l8_p4_material_or_design_feature_of_product_010",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p4",
"relation": "material_or_design_feature_of_product",
"subject": "Anglepoise Lamp",
"object": "Spring-balanced adjustable arm",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "product_material_features",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l8_p4_material_or_design_feature_of_product_011",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p4",
"relation": "material_or_design_feature_of_product",
"subject": "Tizio Lamp",
"object": "Counterbalanced arms that carry low-voltage current",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "product_material_features",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l8_p4_material_or_design_feature_of_product_012",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p4",
"relation": "material_or_design_feature_of_product",
"subject": "Olivetti Valentine",
"object": "Bright red ABS plastic shell",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "product_material_features",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l8_p4_material_or_design_feature_of_product_013",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p4",
"relation": "material_or_design_feature_of_product",
"subject": "Model 500 Telephone",
"object": "Ergonomically contoured handset",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "product_material_features",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l8_p4_material_or_design_feature_of_product_014",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p4",
"relation": "material_or_design_feature_of_product",
"subject": "Braun T3 Pocket Radio",
"object": "Circular tuning dial beside a perforated speaker grille",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "product_material_features",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l8_p4_material_or_design_feature_of_product_015",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p4",
"relation": "material_or_design_feature_of_product",
"subject": "iMac G3",
"object": "Translucent colored plastic all-in-one enclosure",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "product_material_features",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_design_l8_p4_material_or_design_feature_of_product_016",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p4",
"relation": "material_or_design_feature_of_product",
"subject": "Dyson DC01",
"object": "Bagless dual-cyclone separation system",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "product_material_features",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l8_p4_material_or_design_feature_of_product_017",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p4",
"relation": "material_or_design_feature_of_product",
"subject": "9093 Kettle",
"object": "Bird-shaped whistle on the spout",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "product_material_features",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l8_p4_material_or_design_feature_of_product_018",
"topicId": "art",
"subtopicId": "design",
"levelId": "l8",
"partId": "p4",
"relation": "material_or_design_feature_of_product",
"subject": "Chemex Coffeemaker",
"object": "Hourglass-shaped glass vessel with a wooden collar",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "product_material_features",
"tags": ["design", "product_furniture", "level_8"],
"introducedIn": "C",
"factPriority": "secondary"
}
];

const conceptSet: LocalConceptSet = {
  id: "art_design_l8_p4",
  concepts,
};

export default conceptSet;