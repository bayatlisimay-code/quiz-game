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
"id": "art_design_l5_p1_definition_of_design_principle_001",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p1",
"relation": "definition_of_design_principle",
"subject": "Contrast",
"object": "Using noticeable differences between visual elements",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_definitions",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l5_p1_definition_of_design_principle_002",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p1",
"relation": "definition_of_design_principle",
"subject": "Balance",
"object": "Distributing visual weight so a composition feels stable",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_definitions",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l5_p1_definition_of_design_principle_003",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p1",
"relation": "definition_of_design_principle",
"subject": "Hierarchy",
"object": "Organizing elements so their relative importance is visually clear",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_definitions",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l5_p1_definition_of_design_principle_004",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p1",
"relation": "definition_of_design_principle",
"subject": "Alignment",
"object": "Positioning elements along shared lines or visual axes",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_definitions",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l5_p1_definition_of_design_principle_005",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p1",
"relation": "definition_of_design_principle",
"subject": "Proximity",
"object": "Placing related elements close to one another",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_definitions",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l5_p1_definition_of_design_principle_006",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p1",
"relation": "definition_of_design_principle",
"subject": "Repetition",
"object": "Reusing visual elements such as shapes, colors, or forms throughout a design",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_definitions",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l5_p1_definition_of_design_principle_007",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p1",
"relation": "definition_of_design_principle",
"subject": "White Space",
"object": "Leaving areas around elements intentionally unoccupied",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_definitions",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l5_p1_definition_of_design_principle_008",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p1",
"relation": "definition_of_design_principle",
"subject": "Proportion",
"object": "Relating the sizes of parts to one another and to the whole",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_definitions",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l5_p1_definition_of_design_principle_009",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p1",
"relation": "definition_of_design_principle",
"subject": "Scale",
"object": "Using the size of an element in relation to its surroundings",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_definitions",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l5_p1_definition_of_design_principle_010",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p1",
"relation": "definition_of_design_principle",
"subject": "Rhythm",
"object": "Creating a sense of movement through repeated or varied visual patterns",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_definitions",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l5_p1_definition_of_design_principle_011",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p1",
"relation": "definition_of_design_principle",
"subject": "Unity",
"object": "Making different elements feel like parts of one coherent whole",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_definitions",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l5_p1_definition_of_design_principle_012",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p1",
"relation": "definition_of_design_principle",
"subject": "Emphasis",
"object": "Giving one element greater visual prominence than surrounding elements",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_definitions",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l5_p1_definition_of_design_principle_013",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p1",
"relation": "definition_of_design_principle",
"subject": "Consistency",
"object": "Applying recurring visual rules and treatments across related elements",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_definitions",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l5_p1_definition_of_design_principle_014",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p1",
"relation": "definition_of_design_principle",
"subject": "Symmetry",
"object": "Arranging elements so one side mirrors the other",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "design_principle_definitions",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l5_p1_definition_of_design_principle_015",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p1",
"relation": "definition_of_design_principle",
"subject": "Asymmetry",
"object": "Balancing unequal elements without mirroring them",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "design_principle_definitions",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l5_p1_definition_of_design_principle_016",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p1",
"relation": "definition_of_design_principle",
"subject": "Grid",
"object": "Using an underlying system of lines or columns to organize elements",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "design_principle_definitions",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l5_p1_definition_of_design_principle_017",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p1",
"relation": "definition_of_design_principle",
"subject": "Visual Flow",
"object": "Arranging elements along a path the eye naturally follows",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "design_principle_definitions",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l5_p1_definition_of_design_principle_018",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p1",
"relation": "definition_of_design_principle",
"subject": "Simplicity",
"object": "Removing unnecessary elements so essential features remain clear",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "design_principle_definitions",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "C",
"factPriority": "secondary"
}
];

const conceptSet: LocalConceptSet = {
id: "art_design_l5_p1",
concepts,
};

export default conceptSet;