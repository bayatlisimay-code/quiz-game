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
id: "art_architecture_l3_p4_characteristic_of_architectural_style_001",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "Ancient Egyptian Architecture",
object: "Massive stone forms with carved hieroglyphic decoration",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l3_p4_characteristic_of_architectural_style_002",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "Classical Greek Architecture",
object: "Columned temple fronts with balanced proportions",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l3_p4_characteristic_of_architectural_style_003",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "Roman Architecture",
object: "Monumental arches and vast vaulted spaces",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l3_p4_characteristic_of_architectural_style_004",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "Byzantine Architecture",
object: "Large central domes and golden mosaics",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l3_p4_characteristic_of_architectural_style_005",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "Romanesque",
object: "Thick walls, rounded arches, and small windows",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l3_p4_characteristic_of_architectural_style_006",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "Gothic",
object: "Pointed arches and flying buttresses",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l3_p4_characteristic_of_architectural_style_007",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "Renaissance Architecture",
object: "Symmetry and Classical proportions",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l3_p4_characteristic_of_architectural_style_008",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "Ottoman Architecture",
object: "Cascading domes framed by slender pencil-shaped minarets",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l3_p4_characteristic_of_architectural_style_009",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "Mughal Architecture",
object: "Onion domes, strict symmetry, and inlaid marble decoration",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l3_p4_characteristic_of_architectural_style_010",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "Baroque",
object: "Dramatic curves and rich ornament",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l3_p4_characteristic_of_architectural_style_011",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "Rococo",
object: "Pastel colors, gilding, and delicate shell-like ornament",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l3_p4_characteristic_of_architectural_style_012",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "Neoclassical",
object: "Temple-like porticoes with columns and plain surfaces",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l3_p4_characteristic_of_architectural_style_013",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "Gothic Revival",
object: "Pointed arches, spires, and medieval-inspired ornament",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l3_p4_characteristic_of_architectural_style_014",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "Beaux-Arts",
object: "Grand symmetrical facades with sculpture and elaborate Classical detail",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l3_p4_characteristic_of_architectural_style_015",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "Art Nouveau",
object: "Flowing whiplash curves and plant-inspired ornament",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l3_p4_characteristic_of_architectural_style_016",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "Catalan Modernism",
object: "Sculptural forms with colorful ceramic mosaics",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l3_p4_characteristic_of_architectural_style_017",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "Art Deco",
object: "Geometric ornament and streamlined forms",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l3_p4_characteristic_of_architectural_style_018",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "Bauhaus",
object: "Plain geometric forms, flat roofs, and no applied ornament",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_architecture_l3_p4",
concepts
};

export default conceptSet;

