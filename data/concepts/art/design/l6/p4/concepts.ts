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
"id": "art_design_l6_p4_influenced_by_movement_001",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "Arts and Crafts",
"object": "Gothic Revival",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "movement_influences",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l6_p4_influenced_by_movement_002",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "Art Nouveau",
"object": "Arts and Crafts",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "movement_influences",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l6_p4_influenced_by_movement_003",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "Bauhaus",
"object": "Deutscher Werkbund",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "movement_influences",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l6_p4_influenced_by_movement_004",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "De Stijl",
"object": "Cubism",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "movement_influences",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l6_p4_influenced_by_movement_005",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "Constructivism",
"object": "Futurism",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "movement_influences",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l6_p4_influenced_by_movement_006",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "Art Deco",
"object": "Cubism",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "movement_influences",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l6_p4_influenced_by_movement_007",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "Swiss Style",
"object": "New Typography",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "movement_influences",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l6_p4_influenced_by_movement_008",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "Scandinavian Modern",
"object": "Bauhaus",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "movement_influences",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l6_p4_influenced_by_movement_009",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "Mid-Century Modern",
"object": "Bauhaus",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "movement_influences",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l6_p4_influenced_by_movement_010",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "Postmodernism",
"object": "Pop Art",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "movement_influences",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l6_p4_influenced_by_movement_011",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "Memphis Group",
"object": "Italian Radical Design",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "movement_influences",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l6_p4_influenced_by_movement_012",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "Streamline Moderne",
"object": "Art Deco",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "movement_influences",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l6_p4_influenced_by_movement_013",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "Ulm School of Design",
"object": "Bauhaus",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "movement_influences",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l6_p4_influenced_by_movement_014",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "Pop Design",
"object": "Pop Art",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "movement_influences",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l6_p4_influenced_by_movement_015",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "Wiener Werkstätte",
"object": "Arts and Crafts",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "movement_influences",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l6_p4_influenced_by_movement_016",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "Deutscher Werkbund",
"object": "Arts and Crafts",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "movement_influences",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l6_p4_influenced_by_movement_017",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "New Typography",
"object": "Constructivism",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "movement_influences",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l6_p4_influenced_by_movement_018",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "Italian Radical Design",
"object": "Pop Art",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "movement_influences",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "C",
"factPriority": "secondary"
}
];

const conceptSet: LocalConceptSet = {
id: "art_design_l6_p4",
concepts,
};

export default conceptSet;