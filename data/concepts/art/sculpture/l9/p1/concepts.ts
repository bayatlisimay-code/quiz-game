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
id: "art_sculpture_l9_p1_definition_of_sculpture_term_001",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p1",
relation: "definition_of_sculpture_term",
subject: "Armature",
object: "an internal framework, often of metal or wood, that supports a sculpture while it is being modeled or built",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_term_definitions",
tags: ["sculpture", "sculpture_terms", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l9_p1_definition_of_sculpture_term_002",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p1",
relation: "definition_of_sculpture_term",
subject: "Maquette",
object: "a small preliminary model used to plan a larger sculpture",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_term_definitions",
tags: ["sculpture", "sculpture_terms", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l9_p1_definition_of_sculpture_term_003",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p1",
relation: "definition_of_sculpture_term",
subject: "Cast",
object: "an individual object produced by forming material in or from a mold",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_term_definitions",
tags: ["sculpture", "sculpture_terms", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l9_p1_definition_of_sculpture_term_004",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p1",
relation: "definition_of_sculpture_term",
subject: "Edition",
object: "a limited set of authorized examples produced from the same original model or design",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_term_definitions",
tags: ["sculpture", "sculpture_terms", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l9_p1_definition_of_sculpture_term_005",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p1",
relation: "definition_of_sculpture_term",
subject: "Replica",
object: "a copy made to reproduce an existing work, whether produced by the artist, an authorized maker, or later copier",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_term_definitions",
tags: ["sculpture", "sculpture_terms", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l9_p1_definition_of_sculpture_term_006",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p1",
relation: "definition_of_sculpture_term",
subject: "Pedestal",
object: "a raised support that elevates and presents a sculpture for viewing",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_term_definitions",
tags: ["sculpture", "sculpture_terms", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l9_p1_definition_of_sculpture_term_007",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p1",
relation: "definition_of_sculpture_term",
subject: "Plinth",
object: "a low base or slab directly beneath a sculpture or pedestal",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_term_definitions",
tags: ["sculpture", "sculpture_terms", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l9_p1_definition_of_sculpture_term_008",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p1",
relation: "definition_of_sculpture_term",
subject: "Patina",
object: "a surface coloration or finish on materials such as bronze that develops naturally or is deliberately produced",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_term_definitions",
tags: ["sculpture", "sculpture_terms", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l9_p1_definition_of_sculpture_term_009",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p1",
relation: "definition_of_sculpture_term",
subject: "Polychromy",
object: "the use of multiple colors on a sculpture or architectural surface",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_term_definitions",
tags: ["sculpture", "sculpture_terms", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l9_p1_definition_of_sculpture_term_010",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p1",
relation: "definition_of_sculpture_term",
subject: "Axis",
object: "an imaginary directional line around which a figure or sculptural composition is organized",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_term_definitions",
tags: ["sculpture", "sculpture_terms", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l9_p1_definition_of_sculpture_term_011",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p1",
relation: "definition_of_sculpture_term",
subject: "Mass",
object: "the perceived solidity and weight of a sculpture's physical form",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_term_definitions",
tags: ["sculpture", "sculpture_terms", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l9_p1_definition_of_sculpture_term_012",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p1",
relation: "definition_of_sculpture_term",
subject: "Volume",
object: "the three-dimensional space that a sculptural form occupies or encloses",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_term_definitions",
tags: ["sculpture", "sculpture_terms", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l9_p1_definition_of_sculpture_term_013",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p1",
relation: "definition_of_sculpture_term",
subject: "Positive space",
object: "the space physically occupied by the solid parts of a sculpture",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_term_definitions",
tags: ["sculpture", "sculpture_terms", "level_9"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l9_p1_definition_of_sculpture_term_014",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p1",
relation: "definition_of_sculpture_term",
subject: "Negative space",
object: "the empty space around, between, or through the parts of a sculpture",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_term_definitions",
tags: ["sculpture", "sculpture_terms", "level_9"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l9_p1_definition_of_sculpture_term_015",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p1",
relation: "definition_of_sculpture_term",
subject: "Silhouette",
object: "the outer contour or overall outline of a sculpture seen against its background",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_term_definitions",
tags: ["sculpture", "sculpture_terms", "level_9"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l9_p1_definition_of_sculpture_term_016",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p1",
relation: "definition_of_sculpture_term",
subject: "Frontality",
object: "an arrangement in which a figure is oriented primarily toward the viewer and meant to be read chiefly from the front",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_term_definitions",
tags: ["sculpture", "sculpture_terms", "level_9"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l9_p1_definition_of_sculpture_term_017",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p1",
relation: "definition_of_sculpture_term",
subject: "Contrapposto",
object: "a standing pose in which weight rests mainly on one leg, causing the hips and shoulders to shift in opposite directions",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_term_definitions",
tags: ["sculpture", "sculpture_terms", "level_9"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l9_p1_definition_of_sculpture_term_018",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p1",
relation: "definition_of_sculpture_term",
subject: "Torsion",
object: "a twisting movement that runs through a figure or sculptural form",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_term_definitions",
tags: ["sculpture", "sculpture_terms", "level_9"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_sculpture_l9_p1",
concepts
};

export default conceptSet;
