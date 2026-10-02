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
id: "art_architecture_l2_p1_nationality_of_architect_001",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_architect",
subject: "Imhotep",
object: "Ancient Egyptian",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l2_p1_nationality_of_architect_002",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_architect",
subject: "Ictinus",
object: "Ancient Greek",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l2_p1_nationality_of_architect_003",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_architect",
subject: "Filippo Brunelleschi",
object: "Italian",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l2_p1_nationality_of_architect_004",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_architect",
subject: "Mimar Sinan",
object: "Ottoman",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l2_p1_nationality_of_architect_005",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_architect",
subject: "Christopher Wren",
object: "English",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l2_p1_nationality_of_architect_006",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_architect",
subject: "Antoni Gaudí",
object: "Spanish",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l2_p1_nationality_of_architect_007",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_architect",
subject: "Louis Sullivan",
object: "American",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l2_p1_nationality_of_architect_008",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_architect",
subject: "Frank Lloyd Wright",
object: "American",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l2_p1_nationality_of_architect_009",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_architect",
subject: "Le Corbusier",
object: "Swiss-French",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l2_p1_nationality_of_architect_010",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_architect",
subject: "Walter Gropius",
object: "German",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l2_p1_nationality_of_architect_011",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_architect",
subject: "Ludwig Mies van der Rohe",
object: "German-American",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l2_p1_nationality_of_architect_012",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_architect",
subject: "William Van Alen",
object: "American",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l2_p1_nationality_of_architect_013",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_architect",
subject: "Oscar Niemeyer",
object: "Brazilian",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l2_p1_nationality_of_architect_014",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_architect",
subject: "Jørn Utzon",
object: "Danish",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l2_p1_nationality_of_architect_015",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_architect",
subject: "I. M. Pei",
object: "Chinese-American",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l2_p1_nationality_of_architect_016",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_architect",
subject: "Zaha Hadid",
object: "Iraqi-British",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l2_p1_nationality_of_architect_017",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_architect",
subject: "Tadao Ando",
object: "Japanese",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l2_p1_nationality_of_architect_018",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_architect",
subject: "Frank Gehry",
object: "Canadian-American",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_nationalities",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_architecture_l2_p1",
concepts
};

export default conceptSet;