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
id: "art_architecture_l5_p4_example_of_architectural_element_001",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p4",
relation: "example_of_architectural_element",
subject: "Arch",
object: "Arc de Triomphe",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_examples",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l5_p4_example_of_architectural_element_002",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p4",
relation: "example_of_architectural_element",
subject: "Dome",
object: "Florence Cathedral",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_examples",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l5_p4_example_of_architectural_element_003",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p4",
relation: "example_of_architectural_element",
subject: "Column",
object: "Temple of Karnak",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_examples",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l5_p4_example_of_architectural_element_004",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p4",
relation: "example_of_architectural_element",
subject: "Capital",
object: "Temple of Olympian Zeus",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_examples",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l5_p4_example_of_architectural_element_005",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p4",
relation: "example_of_architectural_element",
subject: "Façade",
object: "Sagrada Família",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_examples",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l5_p4_example_of_architectural_element_006",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p4",
relation: "example_of_architectural_element",
subject: "Portico",
object: "Pantheon",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_examples",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l5_p4_example_of_architectural_element_007",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p4",
relation: "example_of_architectural_element",
subject: "Pediment",
object: "Parthenon",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_examples",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l5_p4_example_of_architectural_element_008",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p4",
relation: "example_of_architectural_element",
subject: "Colonnade",
object: "St Peter's Square",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_examples",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l5_p4_example_of_architectural_element_009",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p4",
relation: "example_of_architectural_element",
subject: "Arcade",
object: "Great Mosque of Córdoba",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_examples",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l5_p4_example_of_architectural_element_010",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p4",
relation: "example_of_architectural_element",
subject: "Courtyard",
object: "Alhambra",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_examples",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l5_p4_example_of_architectural_element_011",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p4",
relation: "example_of_architectural_element",
subject: "Balcony",
object: "Casa Batlló",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_examples",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l5_p4_example_of_architectural_element_012",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p4",
relation: "example_of_architectural_element",
subject: "Vault",
object: "King's College Chapel",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_examples",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l5_p4_example_of_architectural_element_013",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p4",
relation: "example_of_architectural_element",
subject: "Flying Buttress",
object: "Notre-Dame de Paris",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_examples",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l5_p4_example_of_architectural_element_014",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p4",
relation: "example_of_architectural_element",
subject: "Rose Window",
object: "Chartres Cathedral",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_examples",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l5_p4_example_of_architectural_element_015",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p4",
relation: "example_of_architectural_element",
subject: "Bell Tower",
object: "Leaning Tower of Pisa",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_examples",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l5_p4_example_of_architectural_element_016",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p4",
relation: "example_of_architectural_element",
subject: "Spire",
object: "Salisbury Cathedral",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_examples",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l5_p4_example_of_architectural_element_017",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p4",
relation: "example_of_architectural_element",
subject: "Minaret",
object: "Blue Mosque",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_examples",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l5_p4_example_of_architectural_element_018",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p4",
relation: "example_of_architectural_element",
subject: "Cornice",
object: "Palazzo Farnese",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_examples",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_architecture_l5_p4",
concepts
};

export default conceptSet;
