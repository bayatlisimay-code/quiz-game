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
id: "art_architecture_l5_p1_definition_of_architectural_element_001",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p1",
relation: "definition_of_architectural_element",
subject: "Arch",
object: "A curved structure spanning an opening",
answerKind: "long",
difficulty: 5,
distractorGroup: "architectural_element_definitions",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l5_p1_definition_of_architectural_element_002",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p1",
relation: "definition_of_architectural_element",
subject: "Dome",
object: "A rounded roof or ceiling covering a central space",
answerKind: "long",
difficulty: 5,
distractorGroup: "architectural_element_definitions",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l5_p1_definition_of_architectural_element_003",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p1",
relation: "definition_of_architectural_element",
subject: "Column",
object: "An upright, usually round, freestanding support",
answerKind: "long",
difficulty: 5,
distractorGroup: "architectural_element_definitions",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l5_p1_definition_of_architectural_element_004",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p1",
relation: "definition_of_architectural_element",
subject: "Capital",
object: "The top part of a column, between the shaft and the structure it supports",
answerKind: "long",
difficulty: 5,
distractorGroup: "architectural_element_definitions",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l5_p1_definition_of_architectural_element_005",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p1",
relation: "definition_of_architectural_element",
subject: "Façade",
object: "The exterior face of a building, especially its principal front",
answerKind: "long",
difficulty: 5,
distractorGroup: "architectural_element_definitions",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l5_p1_definition_of_architectural_element_006",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p1",
relation: "definition_of_architectural_element",
subject: "Portico",
object: "A covered entrance or porch supported by columns",
answerKind: "long",
difficulty: 5,
distractorGroup: "architectural_element_definitions",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l5_p1_definition_of_architectural_element_007",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p1",
relation: "definition_of_architectural_element",
subject: "Pediment",
object: "A triangular gable crowning a portico, door, or window, typical of Classical architecture",
answerKind: "long",
difficulty: 5,
distractorGroup: "architectural_element_definitions",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l5_p1_definition_of_architectural_element_008",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p1",
relation: "definition_of_architectural_element",
subject: "Colonnade",
object: "A long row of evenly spaced columns supporting a roof or beam",
answerKind: "long",
difficulty: 5,
distractorGroup: "architectural_element_definitions",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l5_p1_definition_of_architectural_element_009",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p1",
relation: "definition_of_architectural_element",
subject: "Arcade",
object: "A series of arches supported by columns or piers",
answerKind: "long",
difficulty: 5,
distractorGroup: "architectural_element_definitions",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l5_p1_definition_of_architectural_element_010",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p1",
relation: "definition_of_architectural_element",
subject: "Courtyard",
object: "An open-air space enclosed or partly enclosed by a building",
answerKind: "long",
difficulty: 5,
distractorGroup: "architectural_element_definitions",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l5_p1_definition_of_architectural_element_011",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p1",
relation: "definition_of_architectural_element",
subject: "Balcony",
object: "A platform projecting from an upper floor and enclosed by a railing or low wall",
answerKind: "long",
difficulty: 5,
distractorGroup: "architectural_element_definitions",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l5_p1_definition_of_architectural_element_012",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p1",
relation: "definition_of_architectural_element",
subject: "Vault",
object: "An arched ceiling covering a long interior space",
answerKind: "long",
difficulty: 5,
distractorGroup: "architectural_element_definitions",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l5_p1_definition_of_architectural_element_013",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p1",
relation: "definition_of_architectural_element",
subject: "Flying Buttress",
object: "An arched exterior support that braces a high wall from a distance",
answerKind: "long",
difficulty: 5,
distractorGroup: "architectural_element_definitions",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l5_p1_definition_of_architectural_element_014",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p1",
relation: "definition_of_architectural_element",
subject: "Rose Window",
object: "A large circular window typical of Gothic churches",
answerKind: "long",
difficulty: 5,
distractorGroup: "architectural_element_definitions",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l5_p1_definition_of_architectural_element_015",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p1",
relation: "definition_of_architectural_element",
subject: "Bell Tower",
object: "A tower built to hold bells, usually part of or beside a church",
answerKind: "long",
difficulty: 5,
distractorGroup: "architectural_element_definitions",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l5_p1_definition_of_architectural_element_016",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p1",
relation: "definition_of_architectural_element",
subject: "Spire",
object: "A tall, tapering structure rising from the top of a tower or roof",
answerKind: "long",
difficulty: 5,
distractorGroup: "architectural_element_definitions",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l5_p1_definition_of_architectural_element_017",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p1",
relation: "definition_of_architectural_element",
subject: "Minaret",
object: "A tall tower associated with a mosque and traditionally used for the call to prayer",
answerKind: "long",
difficulty: 5,
distractorGroup: "architectural_element_definitions",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l5_p1_definition_of_architectural_element_018",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p1",
relation: "definition_of_architectural_element",
subject: "Cornice",
object: "A projecting decorative molding along the top of a wall or building",
answerKind: "long",
difficulty: 5,
distractorGroup: "architectural_element_definitions",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_architecture_l5_p1",
concepts
};

export default conceptSet;
