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
"id": "art_design_l5_p4_example_of_design_principle_001",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_design_principle",
"subject": "Contrast",
"object": "Black text on a white background",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_examples",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l5_p4_example_of_design_principle_002",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_design_principle",
"subject": "Balance",
"object": "Distributing furniture so neither side of a room feels heavier",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_examples",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l5_p4_example_of_design_principle_003",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_design_principle",
"subject": "Hierarchy",
"object": "Making a title largest, a subtitle smaller, and body text smallest",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_examples",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l5_p4_example_of_design_principle_004",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_design_principle",
"subject": "Alignment",
"object": "Lining text and images along the same vertical edge",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_examples",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l5_p4_example_of_design_principle_005",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_design_principle",
"subject": "Proximity",
"object": "Placing a caption directly beneath the image it describes",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_examples",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l5_p4_example_of_design_principle_006",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_design_principle",
"subject": "Repetition",
"object": "Using a recurring circle motif throughout a poster",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_examples",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l5_p4_example_of_design_principle_007",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_design_principle",
"subject": "White Space",
"object": "Leaving generous empty space around a product on a poster",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_examples",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l5_p4_example_of_design_principle_008",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_design_principle",
"subject": "Proportion",
"object": "Sizing a chair's seat and backrest appropriately in relation to each other",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_examples",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l5_p4_example_of_design_principle_009",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_design_principle",
"subject": "Scale",
"object": "Placing a small human figure beside an oversized object to make it feel enormous",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_examples",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l5_p4_example_of_design_principle_010",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_design_principle",
"subject": "Rhythm",
"object": "Repeating wall panels at regular intervals along a hallway",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_examples",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l5_p4_example_of_design_principle_011",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_design_principle",
"subject": "Unity",
"object": "Using related colors and forms throughout a room so its elements feel connected",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_examples",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l5_p4_example_of_design_principle_012",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_design_principle",
"subject": "Emphasis",
"object": "Using one brightly colored chair in an otherwise neutral room",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_examples",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l5_p4_example_of_design_principle_013",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_design_principle",
"subject": "Consistency",
"object": "Using the same typography and button style throughout an interface",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_examples",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l5_p4_example_of_design_principle_014",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_design_principle",
"subject": "Symmetry",
"object": "Placing identical lamps on both sides of a bed",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "design_principle_examples",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l5_p4_example_of_design_principle_015",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_design_principle",
"subject": "Asymmetry",
"object": "Balancing a large image on one side with several smaller elements on the other",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "design_principle_examples",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l5_p4_example_of_design_principle_016",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_design_principle",
"subject": "Grid",
"object": "Arranging magazine text and images within a consistent column system",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "design_principle_examples",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l5_p4_example_of_design_principle_017",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_design_principle",
"subject": "Visual Flow",
"object": "Arranging a poster so the eye moves from headline to image to event details",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "design_principle_examples",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l5_p4_example_of_design_principle_018",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_design_principle",
"subject": "Simplicity",
"object": "Using only essential controls on a product's main panel",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "design_principle_examples",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "C",
"factPriority": "secondary"
}
];

const conceptSet: LocalConceptSet = {
id: "art_design_l5_p4",
concepts,
};

export default conceptSet;