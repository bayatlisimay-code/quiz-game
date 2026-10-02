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
id: "art_sculpture_l3_p2_example_of_sculpture_style_001",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "Ancient Egyptian sculpture",
object: "Menkaure and His Queen",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l3_p2_example_of_sculpture_style_002",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "Classical Greek sculpture",
object: "Discobolus",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l3_p2_example_of_sculpture_style_003",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "Hellenistic sculpture",
object: "Winged Victory of Samothrace",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l3_p2_example_of_sculpture_style_004",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "Roman sculpture",
object: "Augustus of Prima Porta",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l3_p2_example_of_sculpture_style_005",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "Gothic sculpture",
object: "Royal Portal of Chartres Cathedral",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l3_p2_example_of_sculpture_style_006",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "Early Renaissance",
object: "Gattamelata",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l3_p2_example_of_sculpture_style_007",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "High Renaissance",
object: "David",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l3_p2_example_of_sculpture_style_008",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "Mannerism",
object: "Abduction of a Sabine Woman",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l3_p2_example_of_sculpture_style_009",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "Baroque",
object: "Apollo and Daphne",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l3_p2_example_of_sculpture_style_010",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "Neoclassicism",
object: "Psyche Revived by Cupid's Kiss",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l3_p2_example_of_sculpture_style_011",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "Realism",
object: "The Age of Bronze",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l3_p2_example_of_sculpture_style_012",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "Modernism",
object: "Bird in Space",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l3_p2_example_of_sculpture_style_013",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "Cubist sculpture",
object: "Guitar",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l3_p2_example_of_sculpture_style_014",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "Futurism",
object: "Unique Forms of Continuity in Space",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l3_p2_example_of_sculpture_style_015",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "Surrealism",
object: "Venus de Milo with Drawers",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l3_p2_example_of_sculpture_style_016",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "Abstract sculpture",
object: "Single Form",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l3_p2_example_of_sculpture_style_017",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "Kinetic art",
object: "Lobster Trap and Fish Tail",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l3_p2_example_of_sculpture_style_018",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p2",
relation: "example_of_sculpture_style",
subject: "Minimalism",
object: "Die",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_sculpture_l3_p2",
concepts
};

export default conceptSet;
