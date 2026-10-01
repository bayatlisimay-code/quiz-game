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
id: "art_architecture_l8_p4_characteristic_of_architectural_style_001",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "Arts and Crafts",
object: "Handcrafted details, natural materials, and cottage-like forms",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l8_p4_characteristic_of_architectural_style_002",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "Vienna Secession",
object: "Clean geometric surfaces with gilded, stylized ornament",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l8_p4_characteristic_of_architectural_style_003",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "Prairie School",
object: "Low horizontal lines and broad overhanging roofs",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l8_p4_characteristic_of_architectural_style_004",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "Expressionism",
object: "Sculptural, flowing forms and dramatic silhouettes",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l8_p4_characteristic_of_architectural_style_005",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "De Stijl",
object: "Intersecting flat planes accented with primary colors",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l8_p4_characteristic_of_architectural_style_006",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "Constructivism",
object: "Dynamic interlocking volumes and dramatic cantilevered forms",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l8_p4_characteristic_of_architectural_style_007",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "Modernism",
object: "Abstract forms, flat roofs, and no historical ornament",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l8_p4_characteristic_of_architectural_style_008",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "International Style",
object: "Glass-and-steel boxes with smooth, unadorned surfaces",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l8_p4_characteristic_of_architectural_style_009",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "Brazilian Modernism",
object: "Sweeping concrete curves and sculptural free-form shapes",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l8_p4_characteristic_of_architectural_style_010",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "Scandinavian Modernism",
object: "Clean forms softened by natural materials and human-scale details",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l8_p4_characteristic_of_architectural_style_011",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "Mid-century Modern",
object: "Large windows, open spaces, and strong indoor-outdoor connection",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l8_p4_characteristic_of_architectural_style_012",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "Brutalism",
object: "Massive block-like forms and exposed raw concrete",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l8_p4_characteristic_of_architectural_style_013",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "Metabolism",
object: "Stacked modular capsules attached to a central core",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l8_p4_characteristic_of_architectural_style_014",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "Postmodernism",
object: "Playful historical references, bold color, and symbolic ornament",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l8_p4_characteristic_of_architectural_style_015",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "High-Tech Architecture",
object: "Exposed structure and visible pipes and ducts as design features",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l8_p4_characteristic_of_architectural_style_016",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "Critical Regionalism",
object: "Modern forms adapted to local landscape, climate, and materials",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l8_p4_characteristic_of_architectural_style_017",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "Deconstructivism",
object: "Fragmented geometry, sharp angles, and visually unstable forms",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l8_p4_characteristic_of_architectural_style_018",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_architectural_style",
subject: "Parametricism",
object: "Smooth, seamless curves flowing continuously from wall to roof",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_characteristics",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_architecture_l8_p4",
concepts
};

export default conceptSet;
