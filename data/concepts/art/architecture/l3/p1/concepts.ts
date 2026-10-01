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
id: "art_architecture_l3_p1_definition_of_architectural_style_001",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "Ancient Egyptian Architecture",
object: "An ancient Egyptian tradition of monumental stone temples and tombs designed to express permanence, power, and religious belief",
answerKind: "long",
difficulty: 3,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l3_p1_definition_of_architectural_style_002",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "Classical Greek Architecture",
object: "An ancient Greek tradition emphasizing harmony, balance, and proportion, best known for its columned temples",
answerKind: "long",
difficulty: 3,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l3_p1_definition_of_architectural_style_003",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "Roman Architecture",
object: "An ancient Roman tradition that adapted Greek forms and added arches, vaults, and domes to create vast public buildings",
answerKind: "long",
difficulty: 3,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l3_p1_definition_of_architectural_style_004",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "Byzantine Architecture",
object: "The architecture of the Eastern Roman Empire, known for great domed churches and glowing, richly decorated interiors",
answerKind: "long",
difficulty: 3,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l3_p1_definition_of_architectural_style_005",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "Romanesque",
object: "A medieval European style of solid, heavy churches and monasteries built on Roman-inspired rounded arches",
answerKind: "long",
difficulty: 3,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l3_p1_definition_of_architectural_style_006",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "Gothic",
object: "A medieval European style emphasizing height, verticality, light, and elaborate religious architecture",
answerKind: "long",
difficulty: 3,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l3_p1_definition_of_architectural_style_007",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "Renaissance Architecture",
object: "A European style that revived Classical Greek and Roman ideas of symmetry, proportion, geometry, and order",
answerKind: "long",
difficulty: 3,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l3_p1_definition_of_architectural_style_008",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "Ottoman Architecture",
object: "The imperial architecture of the Ottoman Empire, blending Islamic and Byzantine traditions in monumental domed mosques",
answerKind: "long",
difficulty: 3,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l3_p1_definition_of_architectural_style_009",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "Mughal Architecture",
object: "The imperial architecture of the Mughal Empire in South Asia, blending Persian, Central Asian, and Indian traditions",
answerKind: "long",
difficulty: 3,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l3_p1_definition_of_architectural_style_010",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "Baroque",
object: "A dramatic European style emphasizing grandeur, movement, rich ornament, and theatrical visual effects",
answerKind: "long",
difficulty: 3,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l3_p1_definition_of_architectural_style_011",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "Rococo",
object: "A lighter, more playful 18th-century outgrowth of Baroque, focused on elegant and delicately decorated interiors",
answerKind: "long",
difficulty: 3,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l3_p1_definition_of_architectural_style_012",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "Neoclassical",
object: "An 18th- and 19th-century revival of ancient Greek and Roman architecture, favoring simplicity and restraint over Baroque excess",
answerKind: "long",
difficulty: 3,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l3_p1_definition_of_architectural_style_013",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "Gothic Revival",
object: "A mainly 19th-century revival of medieval Gothic forms, popular for churches, universities, and government buildings",
answerKind: "long",
difficulty: 3,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l3_p1_definition_of_architectural_style_014",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "Beaux-Arts",
object: "A grand academic style taught at the École des Beaux-Arts in Paris, combining Classical composition with lavish decoration",
answerKind: "long",
difficulty: 3,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l3_p1_definition_of_architectural_style_015",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "Art Nouveau",
object: "A late-19th- and early-20th-century style that rejected historical imitation in favor of nature-inspired, flowing design",
answerKind: "long",
difficulty: 3,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l3_p1_definition_of_architectural_style_016",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "Catalan Modernism",
object: "The Catalan counterpart of Art Nouveau, centered on Barcelona and combining expressive forms with Catalan cultural identity",
answerKind: "long",
difficulty: 3,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l3_p1_definition_of_architectural_style_017",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "Art Deco",
object: "A 1920s and 1930s style combining bold geometry, luxurious decoration, and a sleek modern image",
answerKind: "long",
difficulty: 3,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l3_p1_definition_of_architectural_style_018",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "Bauhaus",
object: "An influential German school and movement that united art, craft, and industry through functional, geometric design",
answerKind: "long",
difficulty: 3,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_architecture_l3_p1",
concepts
};

export default conceptSet;