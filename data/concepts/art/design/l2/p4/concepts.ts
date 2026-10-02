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
"id": "art_design_l2_p4_known_for_field_or_style_001",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_field_or_style",
"subject": "Charles and Ray Eames",
"object": "Furniture design",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "design_styles_fields",
"tags": ["design", "designers", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l2_p4_known_for_field_or_style_002",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_field_or_style",
"subject": "Dieter Rams",
"object": "Industrial design",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "design_styles_fields",
"tags": ["design", "designers", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l2_p4_known_for_field_or_style_003",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_field_or_style",
"subject": "Philippe Starck",
"object": "Product design",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "design_styles_fields",
"tags": ["design", "designers", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l2_p4_known_for_field_or_style_004",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_field_or_style",
"subject": "Paul Rand",
"object": "Graphic design",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "design_styles_fields",
"tags": ["design", "designers", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l2_p4_known_for_field_or_style_005",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_field_or_style",
"subject": "Saul Bass",
"object": "Graphic design",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "design_styles_fields",
"tags": ["design", "designers", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l2_p4_known_for_field_or_style_006",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_field_or_style",
"subject": "Massimo Vignelli",
"object": "Graphic design",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "design_styles_fields",
"tags": ["design", "designers", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l2_p4_known_for_field_or_style_007",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_field_or_style",
"subject": "Milton Glaser",
"object": "Graphic design",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "design_styles_fields",
"tags": ["design", "designers", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l2_p4_known_for_field_or_style_008",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_field_or_style",
"subject": "Achille Castiglioni",
"object": "Product design",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_styles_fields",
"tags": ["design", "designers", "level_2"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l2_p4_known_for_field_or_style_009",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_field_or_style",
"subject": "Verner Panton",
"object": "Furniture design",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "design_styles_fields",
"tags": ["design", "designers", "level_2"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l2_p4_known_for_field_or_style_010",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_field_or_style",
"subject": "Joe Colombo",
"object": "Furniture design",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_styles_fields",
"tags": ["design", "designers", "level_2"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l2_p4_known_for_field_or_style_011",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_field_or_style",
"subject": "Eero Aarnio",
"object": "Furniture design",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_styles_fields",
"tags": ["design", "designers", "level_2"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l2_p4_known_for_field_or_style_012",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_field_or_style",
"subject": "George Carwardine",
"object": "Lighting design",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_styles_fields",
"tags": ["design", "designers", "level_2"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l2_p4_known_for_field_or_style_013",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_field_or_style",
"subject": "Harry Beck",
"object": "Information design",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_styles_fields",
"tags": ["design", "designers", "level_2"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l2_p4_known_for_field_or_style_014",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_field_or_style",
"subject": "Paul Renner",
"object": "Typography",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_styles_fields",
"tags": ["design", "designers", "level_2"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_design_l2_p4_known_for_field_or_style_015",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_field_or_style",
"subject": "Bruno Munari",
"object": "Product design",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_styles_fields",
"tags": ["design", "designers", "level_2"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l2_p4_known_for_field_or_style_016",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_field_or_style",
"subject": "Susan Kare",
"object": "Graphic design",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_styles_fields",
"tags": ["design", "designers", "level_2"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l2_p4_known_for_field_or_style_017",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_field_or_style",
"subject": "Naoto Fukasawa",
"object": "Industrial design",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_styles_fields",
"tags": ["design", "designers", "level_2"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l2_p4_known_for_field_or_style_018",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p4",
"relation": "known_for_field_or_style",
"subject": "Shiro Kuramata",
"object": "Furniture design",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_styles_fields",
"tags": ["design", "designers", "level_2"],
"introducedIn": "C",
"factPriority": "secondary"
}
];

const conceptSet: LocalConceptSet = {
id: "art_design_l2_p4_known_for_field_or_style",
concepts,
};

export default conceptSet;