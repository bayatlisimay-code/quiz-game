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
"id": "art_design_l9_p4_characteristic_of_interior_or_identity_001",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p4",
"relation": "characteristic_of_interior_or_identity",
"subject": "SAS Royal Hotel Interior",
"object": "Furniture, lighting, textiles, and fittings designed as one coordinated environment",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "interior_identity_characteristics",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l9_p4_characteristic_of_interior_or_identity_002",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p4",
"relation": "characteristic_of_interior_or_identity",
"subject": "IBM Visual Identity",
"object": "Striped logotype applied consistently across packaging, print, and products",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "interior_identity_characteristics",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l9_p4_characteristic_of_interior_or_identity_003",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p4",
"relation": "characteristic_of_interior_or_identity",
"subject": "Lufthansa Visual Identity",
"object": "Crane symbol applied with a standardized grid, typography, and color system",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "interior_identity_characteristics",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l9_p4_characteristic_of_interior_or_identity_004",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p4",
"relation": "characteristic_of_interior_or_identity",
"subject": "Miller House Interior",
"object": "Colorful textiles and furnishings organized around a sunken conversation pit",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "interior_identity_characteristics",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l9_p4_characteristic_of_interior_or_identity_005",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p4",
"relation": "characteristic_of_interior_or_identity",
"subject": "NASA 1975 Visual Identity",
"object": "Red worm logotype applied through a detailed graphics standards manual",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "interior_identity_characteristics",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l9_p4_characteristic_of_interior_or_identity_006",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p4",
"relation": "characteristic_of_interior_or_identity",
"subject": "Schröder House Interior",
"object": "Movable partitions and primary-color elements organized by rectilinear geometry",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "interior_identity_characteristics",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l9_p4_characteristic_of_interior_or_identity_007",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p4",
"relation": "characteristic_of_interior_or_identity",
"subject": "London Underground Visual Identity",
"object": "Bar-and-circle roundel paired with a dedicated sans-serif typeface",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "interior_identity_characteristics",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l9_p4_characteristic_of_interior_or_identity_008",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p4",
"relation": "characteristic_of_interior_or_identity",
"subject": "Knoll New York Showroom Interior",
"object": "Open-plan space with furniture arranged as complete room settings",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "interior_identity_characteristics",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l9_p4_characteristic_of_interior_or_identity_009",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p4",
"relation": "characteristic_of_interior_or_identity",
"subject": "British Rail Corporate Identity",
"object": "Double-arrow symbol integrated with standardized typography and signage",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "interior_identity_characteristics",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l9_p4_characteristic_of_interior_or_identity_010",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p4",
"relation": "characteristic_of_interior_or_identity",
"subject": "Café Costes Interior",
"object": "Three-legged chairs arranged around a wide central staircase",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "interior_identity_characteristics",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l9_p4_characteristic_of_interior_or_identity_011",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p4",
"relation": "characteristic_of_interior_or_identity",
"subject": "American Airlines 1967 Visual Identity",
"object": "Red-and-blue AA lettermark paired with a Helvetica-based system",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "interior_identity_characteristics",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l9_p4_characteristic_of_interior_or_identity_012",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p4",
"relation": "characteristic_of_interior_or_identity",
"subject": "Hill House Interior",
"object": "Tall geometric furniture combined with stylized rose motifs",
"answerKind": "long",
"difficulty": 5,
"distractorGroup": "interior_identity_characteristics",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l9_p4_characteristic_of_interior_or_identity_013",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p4",
"relation": "characteristic_of_interior_or_identity",
"subject": "Mobil Visual Identity",
"object": "Blue lowercase lettering with a contrasting red circular o",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "interior_identity_characteristics",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l9_p4_characteristic_of_interior_or_identity_014",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p4",
"relation": "characteristic_of_interior_or_identity",
"subject": "Velvet and Silk Café Interior",
"object": "Colored silk and velvet curtains hung from metal rods to divide the space",
"answerKind": "long",
"difficulty": 5,
"distractorGroup": "interior_identity_characteristics",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l9_p4_characteristic_of_interior_or_identity_015",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p4",
"relation": "characteristic_of_interior_or_identity",
"subject": "Bell System 1969 Visual Identity",
"object": "Simplified bell symbol supported by standardized typography and applications",
"answerKind": "long",
"difficulty": 5,
"distractorGroup": "interior_identity_characteristics",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l9_p4_characteristic_of_interior_or_identity_016",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p4",
"relation": "characteristic_of_interior_or_identity",
"subject": "Royalton Hotel Interior",
"object": "Long corridor-like lobby furnished with custom sculptural furniture",
"answerKind": "long",
"difficulty": 5,
"distractorGroup": "interior_identity_characteristics",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l9_p4_characteristic_of_interior_or_identity_017",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p4",
"relation": "characteristic_of_interior_or_identity",
"subject": "Chase Manhattan Bank Visual Identity",
"object": "Four geometric wedges forming an abstract octagonal symbol",
"answerKind": "long",
"difficulty": 5,
"distractorGroup": "interior_identity_characteristics",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l9_p4_characteristic_of_interior_or_identity_018",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p4",
"relation": "characteristic_of_interior_or_identity",
"subject": "Maison de Verre Interior",
"object": "Exposed industrial steel fittings and translucent glass-block walls",
"answerKind": "long",
"difficulty": 5,
"distractorGroup": "interior_identity_characteristics",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "C",
"factPriority": "secondary"
}
];

const conceptSet: LocalConceptSet = {
id: "art_design_l9_p4",
concepts,
};

export default conceptSet;