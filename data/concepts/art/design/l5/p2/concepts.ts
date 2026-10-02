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
"id": "art_design_l5_p2_purpose_of_design_principle_001",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p2",
"relation": "purpose_of_design_principle",
"subject": "Contrast",
"object": "To make important differences and key elements easier to notice",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_purposes",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l5_p2_purpose_of_design_principle_002",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p2",
"relation": "purpose_of_design_principle",
"subject": "Balance",
"object": "To create visual stability and prevent one area from feeling unintentionally dominant",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_purposes",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l5_p2_purpose_of_design_principle_003",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p2",
"relation": "purpose_of_design_principle",
"subject": "Hierarchy",
"object": "To show viewers what to notice first, second, and later",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_purposes",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l5_p2_purpose_of_design_principle_004",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p2",
"relation": "purpose_of_design_principle",
"subject": "Alignment",
"object": "To create order and visible relationships between separate elements",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_purposes",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l5_p2_purpose_of_design_principle_005",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p2",
"relation": "purpose_of_design_principle",
"subject": "Proximity",
"object": "To show which elements belong together",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_purposes",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l5_p2_purpose_of_design_principle_006",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p2",
"relation": "purpose_of_design_principle",
"subject": "Repetition",
"object": "To reinforce visual patterns and make a design feel connected",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_purposes",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l5_p2_purpose_of_design_principle_007",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p2",
"relation": "purpose_of_design_principle",
"subject": "White Space",
"object": "To reduce visual crowding and give important elements room to stand out",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_purposes",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l5_p2_purpose_of_design_principle_008",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p2",
"relation": "purpose_of_design_principle",
"subject": "Proportion",
"object": "To make relationships between parts feel appropriate and harmonious",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_purposes",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l5_p2_purpose_of_design_principle_009",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p2",
"relation": "purpose_of_design_principle",
"subject": "Scale",
"object": "To create an intended sense of size, drama, or impact",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_purposes",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l5_p2_purpose_of_design_principle_010",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p2",
"relation": "purpose_of_design_principle",
"subject": "Rhythm",
"object": "To create a sense of movement and pacing across a design",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_purposes",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l5_p2_purpose_of_design_principle_011",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p2",
"relation": "purpose_of_design_principle",
"subject": "Unity",
"object": "To make a design feel complete and intentional rather than fragmented",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_purposes",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l5_p2_purpose_of_design_principle_012",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p2",
"relation": "purpose_of_design_principle",
"subject": "Emphasis",
"object": "To draw attention to a particular focal element",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_purposes",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l5_p2_purpose_of_design_principle_013",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p2",
"relation": "purpose_of_design_principle",
"subject": "Consistency",
"object": "To make related designs predictable, recognizable, and easier to use",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_principle_purposes",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l5_p2_purpose_of_design_principle_014",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p2",
"relation": "purpose_of_design_principle",
"subject": "Symmetry",
"object": "To create an immediate sense of order, stability, and formality",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "design_principle_purposes",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l5_p2_purpose_of_design_principle_015",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p2",
"relation": "purpose_of_design_principle",
"subject": "Asymmetry",
"object": "To make a composition feel dynamic, informal, and energetic",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "design_principle_purposes",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l5_p2_purpose_of_design_principle_016",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p2",
"relation": "purpose_of_design_principle",
"subject": "Grid",
"object": "To keep layouts orderly and consistent across many pages or screens",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "design_principle_purposes",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l5_p2_purpose_of_design_principle_017",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p2",
"relation": "purpose_of_design_principle",
"subject": "Visual Flow",
"object": "To lead attention through information in an intended sequence",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "design_principle_purposes",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l5_p2_purpose_of_design_principle_018",
"topicId": "art",
"subtopicId": "design",
"levelId": "l5",
"partId": "p2",
"relation": "purpose_of_design_principle",
"subject": "Simplicity",
"object": "To make a design easier to understand and use by reducing unnecessary complexity",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "design_principle_purposes",
"tags": ["design", "design_principles", "level_5"],
"introducedIn": "C",
"factPriority": "secondary"
}
];

const conceptSet: LocalConceptSet = {
id: "art_design_l5_p2",
concepts,
};

export default conceptSet;