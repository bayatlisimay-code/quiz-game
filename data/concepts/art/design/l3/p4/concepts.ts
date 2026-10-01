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
"id": "art_design_l3_p4_characteristic_of_movement_001",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Arts and Crafts",
"object": "Traditional craftsmanship valued over industrial mass production",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_movement_characteristics",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l3_p4_characteristic_of_movement_002",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Art Nouveau",
"object": "Flowing organic lines inspired by plants and natural forms",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_movement_characteristics",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l3_p4_characteristic_of_movement_003",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Bauhaus",
"object": "Functional design uniting art, craft, and industrial production",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_movement_characteristics",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l3_p4_characteristic_of_movement_004",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Art Deco",
"object": "Luxurious decoration built from bold geometric forms",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_movement_characteristics",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l3_p4_characteristic_of_movement_005",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "De Stijl",
"object": "Abstract compositions using straight lines and primary colors",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_movement_characteristics",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l3_p4_characteristic_of_movement_006",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Constructivism",
"object": "Dynamic geometric graphics designed for social communication",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_movement_characteristics",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l3_p4_characteristic_of_movement_007",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Swiss Style",
"object": "Grid-based layouts with clear sans-serif typography",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_movement_characteristics",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l3_p4_characteristic_of_movement_008",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Scandinavian Modern",
"object": "Functional simplicity combined with natural materials and craftsmanship",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_movement_characteristics",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l3_p4_characteristic_of_movement_009",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Mid-Century Modern",
"object": "Organic curves in new materials such as molded plywood and fiberglass",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_movement_characteristics",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l3_p4_characteristic_of_movement_010",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Postmodernism",
"object": "Playful historical references that reject strict modernist restraint",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_movement_characteristics",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l3_p4_characteristic_of_movement_011",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Memphis Group",
"object": "Clashing colors and patterned laminates on irregular geometric forms",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_movement_characteristics",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l3_p4_characteristic_of_movement_012",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Ulm School of Design",
"object": "Systematic design methods grounded in function and technology",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "design_movement_characteristics",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l3_p4_characteristic_of_movement_013",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Streamline Moderne",
"object": "Aerodynamic forms with smooth curves and horizontal lines",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "design_movement_characteristics",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l3_p4_characteristic_of_movement_014",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Pop Design",
"object": "Bright molded-plastic forms inspired by pop and space-age culture",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "design_movement_characteristics",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l3_p4_characteristic_of_movement_015",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Wiener Werkstätte",
"object": "Unified handcrafted interiors conceived as total works of art",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "design_movement_characteristics",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l3_p4_characteristic_of_movement_016",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Deutscher Werkbund",
"object": "High-quality design combined with standardized industrial production",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "design_movement_characteristics",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l3_p4_characteristic_of_movement_017",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "New Typography",
"object": "Asymmetrical layouts using functional sans-serif typography",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "design_movement_characteristics",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l3_p4_characteristic_of_movement_018",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Italian Radical Design",
"object": "Provocative experimental design that challenged conventional function",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "design_movement_characteristics",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "C",
"factPriority": "secondary"
}
];

const conceptSet: LocalConceptSet = {
  id: "art_design_l3_p4",
  concepts,
};

export default conceptSet;