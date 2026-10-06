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
id: "art_sculpture_l5_p1_definition_of_sculpture_technique_001",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p1",
relation: "definition_of_sculpture_technique",
subject: "Marble carving",
object: "removing marble from a solid block with chisels and abrasives to reveal a form",
answerKind: "long",
difficulty: 5,
distractorGroup: "sculpture_technique_definitions",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l5_p1_definition_of_sculpture_technique_002",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p1",
relation: "definition_of_sculpture_technique",
subject: "Wood carving",
object: "cutting away wood with knives, chisels, and gouges to create a form",
answerKind: "long",
difficulty: 5,
distractorGroup: "sculpture_technique_definitions",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l5_p1_definition_of_sculpture_technique_003",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p1",
relation: "definition_of_sculpture_technique",
subject: "Bronze casting",
object: "forming a sculpture by pouring molten bronze into a prepared mold and allowing it to solidify",
answerKind: "long",
difficulty: 5,
distractorGroup: "sculpture_technique_definitions",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l5_p1_definition_of_sculpture_technique_004",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p1",
relation: "definition_of_sculpture_technique",
subject: "Rock-cut sculpture",
object: "carving figures directly into natural bedrock or a cliff face rather than a separate block",
answerKind: "long",
difficulty: 5,
distractorGroup: "sculpture_technique_definitions",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l5_p1_definition_of_sculpture_technique_005",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p1",
relation: "definition_of_sculpture_technique",
subject: "Relief carving",
object: "carving a surface so figures project from a flat background while remaining attached to it",
answerKind: "long",
difficulty: 5,
distractorGroup: "sculpture_technique_definitions",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l5_p1_definition_of_sculpture_technique_006",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p1",
relation: "definition_of_sculpture_technique",
subject: "Clay modeling",
object: "building up a form by adding, pressing, and shaping soft clay",
answerKind: "long",
difficulty: 5,
distractorGroup: "sculpture_technique_definitions",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l5_p1_definition_of_sculpture_technique_007",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p1",
relation: "definition_of_sculpture_technique",
subject: "Wax modeling",
object: "shaping softened wax into a sculpture or into a model that can later be cast",
answerKind: "long",
difficulty: 5,
distractorGroup: "sculpture_technique_definitions",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l5_p1_definition_of_sculpture_technique_008",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p1",
relation: "definition_of_sculpture_technique",
subject: "Terracotta sculpture",
object: "shaping clay and firing it in a kiln so the form becomes permanently hard",
answerKind: "long",
difficulty: 5,
distractorGroup: "sculpture_technique_definitions",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l5_p1_definition_of_sculpture_technique_009",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p1",
relation: "definition_of_sculpture_technique",
subject: "Lost-wax casting",
object: "making a wax model, encasing it in a mold, melting the wax out, and filling the cavity with molten metal",
answerKind: "long",
difficulty: 5,
distractorGroup: "sculpture_technique_definitions",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l5_p1_definition_of_sculpture_technique_010",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p1",
relation: "definition_of_sculpture_technique",
subject: "Plaster casting",
object: "forming a sculpture by pouring or applying wet plaster into or onto a mold until it sets",
answerKind: "long",
difficulty: 5,
distractorGroup: "sculpture_technique_definitions",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l5_p1_definition_of_sculpture_technique_011",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p1",
relation: "definition_of_sculpture_technique",
subject: "Repoussé",
object: "shaping thin sheet metal by hammering it from the reverse side to create raised forms",
answerKind: "long",
difficulty: 5,
distractorGroup: "sculpture_technique_definitions",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l5_p1_definition_of_sculpture_technique_012",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p1",
relation: "definition_of_sculpture_technique",
subject: "Welding",
object: "joining metal pieces by melting and fusing them together with intense heat",
answerKind: "long",
difficulty: 5,
distractorGroup: "sculpture_technique_definitions",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l5_p1_definition_of_sculpture_technique_013",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p1",
relation: "definition_of_sculpture_technique",
subject: "Wire sculpture",
object: "bending and twisting wire into open, line-like three-dimensional forms",
answerKind: "long",
difficulty: 5,
distractorGroup: "sculpture_technique_definitions",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l5_p1_definition_of_sculpture_technique_014",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p1",
relation: "definition_of_sculpture_technique",
subject: "Metal fabrication",
object: "building sculpture from cut, shaped, and joined metal components",
answerKind: "long",
difficulty: 5,
distractorGroup: "sculpture_technique_definitions",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l5_p1_definition_of_sculpture_technique_015",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p1",
relation: "definition_of_sculpture_technique",
subject: "Assemblage",
object: "building a sculpture by combining and joining separate objects or materials into one composition",
answerKind: "long",
difficulty: 5,
distractorGroup: "sculpture_technique_definitions",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l5_p1_definition_of_sculpture_technique_016",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p1",
relation: "definition_of_sculpture_technique",
subject: "Found-object sculpture",
object: "using existing everyday objects as the main material or components of a sculpture",
answerKind: "long",
difficulty: 5,
distractorGroup: "sculpture_technique_definitions",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l5_p1_definition_of_sculpture_technique_017",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p1",
relation: "definition_of_sculpture_technique",
subject: "Soft sculpture",
object: "creating three-dimensional forms from flexible materials such as fabric, foam, or stuffing",
answerKind: "long",
difficulty: 5,
distractorGroup: "sculpture_technique_definitions",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l5_p1_definition_of_sculpture_technique_018",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p1",
relation: "definition_of_sculpture_technique",
subject: "Glassblowing",
object: "inflating molten glass through a blowpipe and shaping it while it remains hot",
answerKind: "long",
difficulty: 5,
distractorGroup: "sculpture_technique_definitions",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_sculpture_l5_p1",
concepts
};

export default conceptSet;
