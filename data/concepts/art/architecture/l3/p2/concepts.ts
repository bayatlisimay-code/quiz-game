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
id: "art_architecture_l3_p2_example_of_architectural_style_001",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p2",
relation: "example_of_architectural_style",
subject: "Ancient Egyptian Architecture",
object: "Temple of Karnak",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l3_p2_example_of_architectural_style_002",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p2",
relation: "example_of_architectural_style",
subject: "Classical Greek Architecture",
object: "Parthenon",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l3_p2_example_of_architectural_style_003",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p2",
relation: "example_of_architectural_style",
subject: "Roman Architecture",
object: "Colosseum",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l3_p2_example_of_architectural_style_004",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p2",
relation: "example_of_architectural_style",
subject: "Byzantine Architecture",
object: "Hagia Sophia",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l3_p2_example_of_architectural_style_005",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p2",
relation: "example_of_architectural_style",
subject: "Romanesque",
object: "Pisa Cathedral",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l3_p2_example_of_architectural_style_006",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p2",
relation: "example_of_architectural_style",
subject: "Gothic",
object: "Notre-Dame de Paris",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l3_p2_example_of_architectural_style_007",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p2",
relation: "example_of_architectural_style",
subject: "Renaissance Architecture",
object: "Florence Cathedral Dome",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l3_p2_example_of_architectural_style_008",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p2",
relation: "example_of_architectural_style",
subject: "Ottoman Architecture",
object: "Süleymaniye Mosque",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l3_p2_example_of_architectural_style_009",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p2",
relation: "example_of_architectural_style",
subject: "Mughal Architecture",
object: "Taj Mahal",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l3_p2_example_of_architectural_style_010",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p2",
relation: "example_of_architectural_style",
subject: "Baroque",
object: "St Paul's Cathedral",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l3_p2_example_of_architectural_style_011",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p2",
relation: "example_of_architectural_style",
subject: "Rococo",
object: "Sanssouci Palace",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l3_p2_example_of_architectural_style_012",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p2",
relation: "example_of_architectural_style",
subject: "Neoclassical",
object: "United States Capitol",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l3_p2_example_of_architectural_style_013",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p2",
relation: "example_of_architectural_style",
subject: "Gothic Revival",
object: "Palace of Westminster",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l3_p2_example_of_architectural_style_014",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p2",
relation: "example_of_architectural_style",
subject: "Beaux-Arts",
object: "Grand Central Terminal",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l3_p2_example_of_architectural_style_015",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p2",
relation: "example_of_architectural_style",
subject: "Art Nouveau",
object: "Hôtel Tassel",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l3_p2_example_of_architectural_style_016",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p2",
relation: "example_of_architectural_style",
subject: "Catalan Modernism",
object: "Sagrada Família",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l3_p2_example_of_architectural_style_017",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p2",
relation: "example_of_architectural_style",
subject: "Art Deco",
object: "Chrysler Building",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l3_p2_example_of_architectural_style_018",
topicId: "art",
subtopicId: "architecture",
levelId: "l3",
partId: "p2",
relation: "example_of_architectural_style",
subject: "Bauhaus",
object: "Bauhaus Building",
answerKind: "short",
difficulty: 3,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_architecture_l3_p2",
concepts
};

export default conceptSet;
