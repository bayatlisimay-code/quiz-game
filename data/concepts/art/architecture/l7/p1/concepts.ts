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
id: "art_architecture_l7_p1_nationality_of_architect_001",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_architect",
subject: "Andrea Palladio",
object: "Italian",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l7_p1_nationality_of_architect_002",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_architect",
subject: "Victor Horta",
object: "Belgian",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l7_p1_nationality_of_architect_003",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_architect",
subject: "Charles Garnier",
object: "French",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l7_p1_nationality_of_architect_004",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_architect",
subject: "Charles Rennie Mackintosh",
object: "Scottish",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l7_p1_nationality_of_architect_005",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_architect",
subject: "Gerrit Rietveld",
object: "Dutch",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l7_p1_nationality_of_architect_006",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_architect",
subject: "Eileen Gray",
object: "Irish",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l7_p1_nationality_of_architect_007",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_architect",
subject: "Alvar Aalto",
object: "Finnish",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l7_p1_nationality_of_architect_008",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_architect",
subject: "Luis Barragán",
object: "Mexican",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l7_p1_nationality_of_architect_009",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_architect",
subject: "Eero Saarinen",
object: "Finnish-American",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l7_p1_nationality_of_architect_010",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_architect",
subject: "Louis Kahn",
object: "Estonian-American",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l7_p1_nationality_of_architect_011",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_architect",
subject: "Lina Bo Bardi",
object: "Italian-Brazilian",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l7_p1_nationality_of_architect_012",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_architect",
subject: "Kisho Kurokawa",
object: "Japanese",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l7_p1_nationality_of_architect_013",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_architect",
subject: "Michael Graves",
object: "American",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l7_p1_nationality_of_architect_014",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_architect",
subject: "Norman Foster",
object: "British",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l7_p1_nationality_of_architect_015",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_architect",
subject: "Rem Koolhaas",
object: "Dutch",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l7_p1_nationality_of_architect_016",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_architect",
subject: "Balkrishna Doshi",
object: "Indian",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l7_p1_nationality_of_architect_017",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_architect",
subject: "Hassan Fathy",
object: "Egyptian",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l7_p1_nationality_of_architect_018",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_architect",
subject: "Glenn Murcutt",
object: "Australian",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_architecture_l7_p1",
concepts
};

export default conceptSet;