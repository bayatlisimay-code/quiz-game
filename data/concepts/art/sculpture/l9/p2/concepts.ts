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
id: "art_sculpture_l9_p2_definition_of_sculpture_form_001",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p2",
relation: "definition_of_sculpture_form",
subject: "Freestanding sculpture",
object: "a sculpture physically independent of a wall or background and generally viewable from multiple sides",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_form_definitions",
tags: ["sculpture", "sculpture_forms", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l9_p2_definition_of_sculpture_form_002",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p2",
relation: "definition_of_sculpture_form",
subject: "Relief sculpture",
object: "a sculpture whose forms project from a background while remaining attached to it",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_form_definitions",
tags: ["sculpture", "sculpture_forms", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l9_p2_definition_of_sculpture_form_003",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p2",
relation: "definition_of_sculpture_form",
subject: "Bas-relief",
object: "a low relief in which forms project only slightly from the background",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_form_definitions",
tags: ["sculpture", "sculpture_forms", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l9_p2_definition_of_sculpture_form_004",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p2",
relation: "definition_of_sculpture_form",
subject: "High relief",
object: "a relief in which forms project strongly from the background and may be deeply undercut",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_form_definitions",
tags: ["sculpture", "sculpture_forms", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l9_p2_definition_of_sculpture_form_005",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p2",
relation: "definition_of_sculpture_form",
subject: "Sunken relief",
object: "a relief in which outlines or forms are cut below the surrounding surface",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_form_definitions",
tags: ["sculpture", "sculpture_forms", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l9_p2_definition_of_sculpture_form_006",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p2",
relation: "definition_of_sculpture_form",
subject: "Bust",
object: "a sculptural representation of a person's head, shoulders, and upper chest",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_form_definitions",
tags: ["sculpture", "sculpture_forms", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l9_p2_definition_of_sculpture_form_007",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p2",
relation: "definition_of_sculpture_form",
subject: "Statue",
object: "a three-dimensional representation of a person, animal, or figure, usually freestanding",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_form_definitions",
tags: ["sculpture", "sculpture_forms", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l9_p2_definition_of_sculpture_form_008",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p2",
relation: "definition_of_sculpture_form",
subject: "Statuette",
object: "a small-scale statue",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_form_definitions",
tags: ["sculpture", "sculpture_forms", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l9_p2_definition_of_sculpture_form_009",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p2",
relation: "definition_of_sculpture_form",
subject: "Torso",
object: "a sculptural representation of the trunk of the body, often without the head or limbs",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_form_definitions",
tags: ["sculpture", "sculpture_forms", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l9_p2_definition_of_sculpture_form_010",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p2",
relation: "definition_of_sculpture_form",
subject: "Equestrian statue",
object: "a statue showing a rider mounted on a horse",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_form_definitions",
tags: ["sculpture", "sculpture_forms", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l9_p2_definition_of_sculpture_form_011",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p2",
relation: "definition_of_sculpture_form",
subject: "Group sculpture",
object: "a sculpture of two or more figures designed as one unified composition",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_form_definitions",
tags: ["sculpture", "sculpture_forms", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l9_p2_definition_of_sculpture_form_012",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p2",
relation: "definition_of_sculpture_form",
subject: "Portrait sculpture",
object: "a sculpture intended to represent the appearance or identity of a specific person",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_form_definitions",
tags: ["sculpture", "sculpture_forms", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l9_p2_definition_of_sculpture_form_013",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p2",
relation: "definition_of_sculpture_form",
subject: "Monument",
object: "a public sculpture or structure created to commemorate a person, event, achievement, or idea",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_form_definitions",
tags: ["sculpture", "sculpture_forms", "level_9"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l9_p2_definition_of_sculpture_form_014",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p2",
relation: "definition_of_sculpture_form",
subject: "Memorial",
object: "a work created specifically to preserve remembrance of a person, group, or significant event",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_form_definitions",
tags: ["sculpture", "sculpture_forms", "level_9"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l9_p2_definition_of_sculpture_form_015",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p2",
relation: "definition_of_sculpture_form",
subject: "Architectural sculpture",
object: "sculpture designed as an integral part of a building or architectural setting",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_form_definitions",
tags: ["sculpture", "sculpture_forms", "level_9"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l9_p2_definition_of_sculpture_form_016",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p2",
relation: "definition_of_sculpture_form",
subject: "Frieze",
object: "a long horizontal band of decoration, often relief sculpture, running along a building or wall",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_form_definitions",
tags: ["sculpture", "sculpture_forms", "level_9"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l9_p2_definition_of_sculpture_form_017",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p2",
relation: "definition_of_sculpture_form",
subject: "Mobile",
object: "a suspended or balanced sculpture with parts designed to move, often in response to air currents",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_form_definitions",
tags: ["sculpture", "sculpture_forms", "level_9"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l9_p2_definition_of_sculpture_form_018",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p2",
relation: "definition_of_sculpture_form",
subject: "Stabile",
object: "a stationary abstract constructed sculpture, a term especially associated with Alexander Calder",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_form_definitions",
tags: ["sculpture", "sculpture_forms", "level_9"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_sculpture_l9_p2",
concepts
};

export default conceptSet;
