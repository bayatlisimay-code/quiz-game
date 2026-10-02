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
"id": "art_design_l9_p2_style_or_type_of_design_001",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p2",
"relation": "style_or_type_of_design",
"subject": "SAS Royal Hotel Interior",
"object": "Scandinavian Modern",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "interior_styles_or_identity_types",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l9_p2_style_or_type_of_design_002",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p2",
"relation": "style_or_type_of_design",
"subject": "IBM Visual Identity",
"object": "Corporate identity",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "interior_styles_or_identity_types",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l9_p2_style_or_type_of_design_003",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p2",
"relation": "style_or_type_of_design",
"subject": "Lufthansa Visual Identity",
"object": "Airline visual identity",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "interior_styles_or_identity_types",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l9_p2_style_or_type_of_design_004",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p2",
"relation": "style_or_type_of_design",
"subject": "Miller House Interior",
"object": "Mid-Century Modern",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "interior_styles_or_identity_types",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l9_p2_style_or_type_of_design_005",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p2",
"relation": "style_or_type_of_design",
"subject": "NASA 1975 Visual Identity",
"object": "Government visual identity",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "interior_styles_or_identity_types",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l9_p2_style_or_type_of_design_006",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p2",
"relation": "style_or_type_of_design",
"subject": "Schröder House Interior",
"object": "De Stijl",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "interior_styles_or_identity_types",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l9_p2_style_or_type_of_design_007",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p2",
"relation": "style_or_type_of_design",
"subject": "London Underground Visual Identity",
"object": "Public transport identity",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "interior_styles_or_identity_types",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l9_p2_style_or_type_of_design_008",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p2",
"relation": "style_or_type_of_design",
"subject": "Knoll New York Showroom Interior",
"object": "Modernism",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "interior_styles_or_identity_types",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l9_p2_style_or_type_of_design_009",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p2",
"relation": "style_or_type_of_design",
"subject": "British Rail Corporate Identity",
"object": "Rail transport identity",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "interior_styles_or_identity_types",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l9_p2_style_or_type_of_design_010",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p2",
"relation": "style_or_type_of_design",
"subject": "Café Costes Interior",
"object": "Postmodernism",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "interior_styles_or_identity_types",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l9_p2_style_or_type_of_design_011",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p2",
"relation": "style_or_type_of_design",
"subject": "American Airlines 1967 Visual Identity",
"object": "Airline visual identity",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "interior_styles_or_identity_types",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l9_p2_style_or_type_of_design_012",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p2",
"relation": "style_or_type_of_design",
"subject": "Hill House Interior",
"object": "Glasgow Style",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "interior_styles_or_identity_types",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l9_p2_style_or_type_of_design_013",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p2",
"relation": "style_or_type_of_design",
"subject": "Mobil Visual Identity",
"object": "Corporate identity",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "interior_styles_or_identity_types",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l9_p2_style_or_type_of_design_014",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p2",
"relation": "style_or_type_of_design",
"subject": "Velvet and Silk Café Interior",
"object": "Modernism",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "interior_styles_or_identity_types",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l9_p2_style_or_type_of_design_015",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p2",
"relation": "style_or_type_of_design",
"subject": "Bell System 1969 Visual Identity",
"object": "Telecommunications corporate identity",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "interior_styles_or_identity_types",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l9_p2_style_or_type_of_design_016",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p2",
"relation": "style_or_type_of_design",
"subject": "Royalton Hotel Interior",
"object": "Postmodernism",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "interior_styles_or_identity_types",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l9_p2_style_or_type_of_design_017",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p2",
"relation": "style_or_type_of_design",
"subject": "Chase Manhattan Bank Visual Identity",
"object": "Financial corporate identity",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "interior_styles_or_identity_types",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l9_p2_style_or_type_of_design_018",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p2",
"relation": "style_or_type_of_design",
"subject": "Maison de Verre Interior",
"object": "Modernism",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "interior_styles_or_identity_types",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "C",
"factPriority": "secondary"
}
];

const conceptSet: LocalConceptSet = {
id: "art_design_l9_p2",
concepts,
};

export default conceptSet;