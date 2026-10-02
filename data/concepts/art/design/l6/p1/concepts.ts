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
"id": "art_design_l6_p1_movement_of_design_001",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of_design",
"subject": "Strawberry Thief",
"object": "Arts and Crafts",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "design_movements",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l6_p1_movement_of_design_002",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of_design",
"subject": "Dragonfly Table Lamp",
"object": "Art Nouveau",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "design_movements",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l6_p1_movement_of_design_003",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of_design",
"subject": "Wassily Chair",
"object": "Bauhaus",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "design_movements",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l6_p1_movement_of_design_004",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of_design",
"subject": "Red and Blue Chair",
"object": "De Stijl",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "design_movements",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l6_p1_movement_of_design_005",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of_design",
"subject": "Beat the Whites with the Red Wedge Poster",
"object": "Constructivism",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "design_movements",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l6_p1_movement_of_design_006",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of_design",
"subject": "Normandie Poster",
"object": "Art Deco",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "design_movements",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l6_p1_movement_of_design_007",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of_design",
"subject": "Beethoven Poster",
"object": "Swiss Style",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "design_movements",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l6_p1_movement_of_design_008",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of_design",
"subject": "Paimio Chair",
"object": "Scandinavian Modern",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "design_movements",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l6_p1_movement_of_design_009",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of_design",
"subject": "Eames Lounge Chair",
"object": "Mid-Century Modern",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "design_movements",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l6_p1_movement_of_design_010",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of_design",
"subject": "Proust Armchair",
"object": "Postmodernism",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "design_movements",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l6_p1_movement_of_design_011",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of_design",
"subject": "Carlton Room Divider",
"object": "Memphis Group",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "design_movements",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l6_p1_movement_of_design_012",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of_design",
"subject": "Chrysler Airflow",
"object": "Streamline Moderne",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "design_movements",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l6_p1_movement_of_design_013",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of_design",
"subject": "Braun SK 4",
"object": "Ulm School of Design",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "design_movements",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l6_p1_movement_of_design_014",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of_design",
"subject": "Ball Chair",
"object": "Pop Design",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "design_movements",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l6_p1_movement_of_design_015",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of_design",
"subject": "Palais Stoclet Interiors",
"object": "Wiener Werkstätte",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "design_movements",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l6_p1_movement_of_design_016",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of_design",
"subject": "AEG Electric Kettle",
"object": "Deutscher Werkbund",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "design_movements",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l6_p1_movement_of_design_017",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of_design",
"subject": "Die neue Typographie",
"object": "New Typography",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "design_movements",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l6_p1_movement_of_design_018",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of_design",
"subject": "Superonda Sofa",
"object": "Italian Radical Design",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "design_movements",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "C",
"factPriority": "secondary"
}
];

const conceptSet: LocalConceptSet = {
id: "art_design_l6_p1",
concepts,
};

export default conceptSet;