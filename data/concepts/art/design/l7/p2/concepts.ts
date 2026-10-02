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
"id": "art_design_l7_p2_type_of_visual_design_001",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p2",
"relation": "type_of_visual_design",
"subject": "IBM 8-bar Logo",
"object": "Logo design",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "visual_design_types",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l7_p2_type_of_visual_design_002",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p2",
"relation": "type_of_visual_design",
"subject": "I Love New York Logo",
"object": "Logo design",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "visual_design_types",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l7_p2_type_of_visual_design_003",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p2",
"relation": "type_of_visual_design",
"subject": "Vertigo Film Poster",
"object": "Poster design",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "visual_design_types",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l7_p2_type_of_visual_design_004",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p2",
"relation": "type_of_visual_design",
"subject": "Helvetica",
"object": "Typeface design",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "visual_design_types",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l7_p2_type_of_visual_design_005",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p2",
"relation": "type_of_visual_design",
"subject": "London Underground Map",
"object": "Information design",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "visual_design_types",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l7_p2_type_of_visual_design_006",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p2",
"relation": "type_of_visual_design",
"subject": "Munich 1972 Olympic Visual Identity",
"object": "Visual identity",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "visual_design_types",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l7_p2_type_of_visual_design_007",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p2",
"relation": "type_of_visual_design",
"subject": "FedEx Logo",
"object": "Logo design",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "visual_design_types",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l7_p2_type_of_visual_design_008",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p2",
"relation": "type_of_visual_design",
"subject": "Futura",
"object": "Typeface design",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "visual_design_types",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l7_p2_type_of_visual_design_009",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p2",
"relation": "type_of_visual_design",
"subject": "New York City Subway Signage System",
"object": "Wayfinding design",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "visual_design_types",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l7_p2_type_of_visual_design_010",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p2",
"relation": "type_of_visual_design",
"subject": "NASA Worm Logotype",
"object": "Logo design",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "visual_design_types",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l7_p2_type_of_visual_design_011",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p2",
"relation": "type_of_visual_design",
"subject": "Revolver Album Cover",
"object": "Album-cover design",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "visual_design_types",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l7_p2_type_of_visual_design_012",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p2",
"relation": "type_of_visual_design",
"subject": "Unknown Pleasures Album Cover",
"object": "Album-cover design",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "visual_design_types",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l7_p2_type_of_visual_design_013",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p2",
"relation": "type_of_visual_design",
"subject": "1923 Bauhaus Exhibition Poster",
"object": "Poster design",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "visual_design_types",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l7_p2_type_of_visual_design_014",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p2",
"relation": "type_of_visual_design",
"subject": "Beethoven Poster",
"object": "Poster design",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "visual_design_types",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l7_p2_type_of_visual_design_015",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p2",
"relation": "type_of_visual_design",
"subject": "Normandie Poster",
"object": "Poster design",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "visual_design_types",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l7_p2_type_of_visual_design_016",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p2",
"relation": "type_of_visual_design",
"subject": "Original Macintosh Icons",
"object": "Interface design",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "visual_design_types",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_design_l7_p2_type_of_visual_design_017",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p2",
"relation": "type_of_visual_design",
"subject": "The Passion of Muhammad Ali Esquire Cover",
"object": "Editorial design",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "visual_design_types",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l7_p2_type_of_visual_design_018",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p2",
"relation": "type_of_visual_design",
"subject": "The Medium Is the Massage",
"object": "Book design",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "visual_design_types",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "C",
"factPriority": "secondary"
}
];

const conceptSet: LocalConceptSet = {
id: "art_design_l7_p2",
concepts,
};

export default conceptSet;