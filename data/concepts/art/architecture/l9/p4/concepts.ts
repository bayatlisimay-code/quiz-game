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
id: "art_architecture_l9_p4_example_of_design_principle_001",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p4",
relation: "example_of_design_principle",
subject: "Symmetry",
object: "Taj Mahal",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_examples",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l9_p4_example_of_design_principle_002",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p4",
relation: "example_of_design_principle",
subject: "Asymmetry",
object: "Guggenheim Museum Bilbao",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_examples",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l9_p4_example_of_design_principle_003",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p4",
relation: "example_of_design_principle",
subject: "Balance",
object: "Rietveld Schröder House",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_examples",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l9_p4_example_of_design_principle_004",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p4",
relation: "example_of_design_principle",
subject: "Proportion",
object: "Parthenon",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_examples",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l9_p4_example_of_design_principle_005",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p4",
relation: "example_of_design_principle",
subject: "Scale",
object: "Hassan II Mosque",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_examples",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l9_p4_example_of_design_principle_006",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p4",
relation: "example_of_design_principle",
subject: "Rhythm",
object: "Colosseum",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_examples",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l9_p4_example_of_design_principle_007",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p4",
relation: "example_of_design_principle",
subject: "Contrast",
object: "Louvre Pyramid",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_examples",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l9_p4_example_of_design_principle_008",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p4",
relation: "example_of_design_principle",
subject: "Hierarchy",
object: "St Peter's Basilica",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_examples",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l9_p4_example_of_design_principle_009",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p4",
relation: "example_of_design_principle",
subject: "Emphasis",
object: "Florence Cathedral",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_examples",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l9_p4_example_of_design_principle_010",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p4",
relation: "example_of_design_principle",
subject: "Unity",
object: "Villa Savoye",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_examples",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l9_p4_example_of_design_principle_011",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p4",
relation: "example_of_design_principle",
subject: "Ornament",
object: "Alhambra",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_examples",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l9_p4_example_of_design_principle_012",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p4",
relation: "example_of_design_principle",
subject: "Axis",
object: "Forbidden City",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_examples",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l9_p4_example_of_design_principle_013",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p4",
relation: "example_of_design_principle",
subject: "Monumentality",
object: "Jatiya Sangsad Bhaban",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_examples",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l9_p4_example_of_design_principle_014",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p4",
relation: "example_of_design_principle",
subject: "Movement",
object: "TWA Flight Center",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_examples",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l9_p4_example_of_design_principle_015",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p4",
relation: "example_of_design_principle",
subject: "Light",
object: "Church of the Light",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_examples",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l9_p4_example_of_design_principle_016",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p4",
relation: "example_of_design_principle",
subject: "Transparency",
object: "Farnsworth House",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_examples",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l9_p4_example_of_design_principle_017",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p4",
relation: "example_of_design_principle",
subject: "Enclosure",
object: "Pantheon",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_examples",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l9_p4_example_of_design_principle_018",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p4",
relation: "example_of_design_principle",
subject: "Integration with Nature",
object: "Fallingwater",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_examples",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_architecture_l9_p4",
concepts
};

export default conceptSet;