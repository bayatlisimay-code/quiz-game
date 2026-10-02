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
id: "art_sculpture_l5_p2_material_used_in_sculpture_technique_001",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p2",
relation: "material_used_in_sculpture_technique",
subject: "Marble carving",
object: "marble",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculpture_materials",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l5_p2_material_used_in_sculpture_technique_002",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p2",
relation: "material_used_in_sculpture_technique",
subject: "Wood carving",
object: "wood",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculpture_materials",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l5_p2_material_used_in_sculpture_technique_003",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p2",
relation: "material_used_in_sculpture_technique",
subject: "Bronze casting",
object: "bronze",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculpture_materials",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l5_p2_material_used_in_sculpture_technique_004",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p2",
relation: "material_used_in_sculpture_technique",
subject: "Rock-cut sculpture",
object: "natural rock",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculpture_materials",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l5_p2_material_used_in_sculpture_technique_005",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p2",
relation: "material_used_in_sculpture_technique",
subject: "Relief carving",
object: "stone",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculpture_materials",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l5_p2_material_used_in_sculpture_technique_006",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p2",
relation: "material_used_in_sculpture_technique",
subject: "Clay modeling",
object: "clay",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculpture_materials",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l5_p2_material_used_in_sculpture_technique_007",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p2",
relation: "material_used_in_sculpture_technique",
subject: "Wax modeling",
object: "wax",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculpture_materials",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l5_p2_material_used_in_sculpture_technique_008",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p2",
relation: "material_used_in_sculpture_technique",
subject: "Terracotta sculpture",
object: "fired clay",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculpture_materials",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l5_p2_material_used_in_sculpture_technique_009",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p2",
relation: "material_used_in_sculpture_technique",
subject: "Lost-wax casting",
object: "wax and bronze",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculpture_materials",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l5_p2_material_used_in_sculpture_technique_010",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p2",
relation: "material_used_in_sculpture_technique",
subject: "Plaster casting",
object: "plaster",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculpture_materials",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l5_p2_material_used_in_sculpture_technique_011",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p2",
relation: "material_used_in_sculpture_technique",
subject: "Repoussé",
object: "sheet metal",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculpture_materials",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l5_p2_material_used_in_sculpture_technique_012",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p2",
relation: "material_used_in_sculpture_technique",
subject: "Welding",
object: "steel",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculpture_materials",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l5_p2_material_used_in_sculpture_technique_013",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p2",
relation: "material_used_in_sculpture_technique",
subject: "Wire sculpture",
object: "wire",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculpture_materials",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l5_p2_material_used_in_sculpture_technique_014",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p2",
relation: "material_used_in_sculpture_technique",
subject: "Metal fabrication",
object: "metal",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculpture_materials",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l5_p2_material_used_in_sculpture_technique_015",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p2",
relation: "material_used_in_sculpture_technique",
subject: "Assemblage",
object: "mixed materials",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculpture_materials",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l5_p2_material_used_in_sculpture_technique_016",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p2",
relation: "material_used_in_sculpture_technique",
subject: "Found-object sculpture",
object: "found objects",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculpture_materials",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l5_p2_material_used_in_sculpture_technique_017",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p2",
relation: "material_used_in_sculpture_technique",
subject: "Soft sculpture",
object: "fabric",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculpture_materials",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l5_p2_material_used_in_sculpture_technique_018",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p2",
relation: "material_used_in_sculpture_technique",
subject: "Glassblowing",
object: "glass",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculpture_materials",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_sculpture_l5_p2",
concepts
};

export default conceptSet;
