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
id: "art_architecture_l8_p2_example_of_architectural_style_001",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p2",
relation: "example_of_architectural_style",
subject: "Arts and Crafts",
object: "Red House",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l8_p2_example_of_architectural_style_002",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p2",
relation: "example_of_architectural_style",
subject: "Vienna Secession",
object: "Secession Building",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l8_p2_example_of_architectural_style_003",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p2",
relation: "example_of_architectural_style",
subject: "Prairie School",
object: "Robie House",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l8_p2_example_of_architectural_style_004",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p2",
relation: "example_of_architectural_style",
subject: "Expressionism",
object: "Einstein Tower",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l8_p2_example_of_architectural_style_005",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p2",
relation: "example_of_architectural_style",
subject: "De Stijl",
object: "Rietveld Schröder House",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l8_p2_example_of_architectural_style_006",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p2",
relation: "example_of_architectural_style",
subject: "Constructivism",
object: "Rusakov Workers' Club",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l8_p2_example_of_architectural_style_007",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p2",
relation: "example_of_architectural_style",
subject: "Modernism",
object: "Villa Savoye",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l8_p2_example_of_architectural_style_008",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p2",
relation: "example_of_architectural_style",
subject: "International Style",
object: "Seagram Building",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l8_p2_example_of_architectural_style_009",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p2",
relation: "example_of_architectural_style",
subject: "Brazilian Modernism",
object: "Cathedral of Brasília",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l8_p2_example_of_architectural_style_010",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p2",
relation: "example_of_architectural_style",
subject: "Scandinavian Modernism",
object: "Finlandia Hall",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l8_p2_example_of_architectural_style_011",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p2",
relation: "example_of_architectural_style",
subject: "Mid-century Modern",
object: "Eames House",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l8_p2_example_of_architectural_style_012",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p2",
relation: "example_of_architectural_style",
subject: "Brutalism",
object: "Barbican Estate",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l8_p2_example_of_architectural_style_013",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p2",
relation: "example_of_architectural_style",
subject: "Metabolism",
object: "Nakagin Capsule Tower",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l8_p2_example_of_architectural_style_014",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p2",
relation: "example_of_architectural_style",
subject: "Postmodernism",
object: "Portland Building",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l8_p2_example_of_architectural_style_015",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p2",
relation: "example_of_architectural_style",
subject: "High-Tech Architecture",
object: "Centre Pompidou",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l8_p2_example_of_architectural_style_016",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p2",
relation: "example_of_architectural_style",
subject: "Critical Regionalism",
object: "Sangath",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l8_p2_example_of_architectural_style_017",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p2",
relation: "example_of_architectural_style",
subject: "Deconstructivism",
object: "Guggenheim Museum Bilbao",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l8_p2_example_of_architectural_style_018",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p2",
relation: "example_of_architectural_style",
subject: "Parametricism",
object: "Heydar Aliyev Center",
answerKind: "short",
difficulty: 8,
distractorGroup: "architectural_style_examples",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_architecture_l8_p2",
concepts
};

export default conceptSet;