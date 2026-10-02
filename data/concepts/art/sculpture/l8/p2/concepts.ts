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
id: "art_sculpture_l8_p2_example_of_sculpture_style_001",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "Symbolism",
object: "The Gates of Hell",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l8_p2_example_of_sculpture_style_002",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "Vorticism",
object: "Rock Drill",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l8_p2_example_of_sculpture_style_003",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "Dada",
object: "Fountain",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l8_p2_example_of_sculpture_style_004",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "Constructivism",
object: "Linear Construction in Space No. 1",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l8_p2_example_of_sculpture_style_005",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "Harlem Renaissance",
object: "The Harp",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l8_p2_example_of_sculpture_style_006",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "Abstract Expressionism",
object: "Cubi XIX",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l8_p2_example_of_sculpture_style_007",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "Assemblage",
object: "Sky Cathedral",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l8_p2_example_of_sculpture_style_008",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "Nouveau Réalisme",
object: "Compression Ricard",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l8_p2_example_of_sculpture_style_009",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "Pop art",
object: "Clothespin",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l8_p2_example_of_sculpture_style_010",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "Conceptual art",
object: "One and Three Chairs",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l8_p2_example_of_sculpture_style_011",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "Postminimalism",
object: "Repetition Nineteen III",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l8_p2_example_of_sculpture_style_012",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "Arte Povera",
object: "Venus of the Rags",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l8_p2_example_of_sculpture_style_013",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "Process art",
object: "Belts",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l8_p2_example_of_sculpture_style_014",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "Hyperrealism",
object: "Supermarket Lady",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l8_p2_example_of_sculpture_style_015",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "Land art",
object: "Spiral Jetty",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l8_p2_example_of_sculpture_style_016",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "Site-specific art",
object: "Tilted Arc",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l8_p2_example_of_sculpture_style_017",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "New British Sculpture",
object: "Britain Seen from the North",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l8_p2_example_of_sculpture_style_018",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "Installation art",
object: "The Weather Project",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_sculpture_l8_p2",
concepts
};

export default conceptSet;
