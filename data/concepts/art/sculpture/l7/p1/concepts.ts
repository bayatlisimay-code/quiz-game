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
id: "art_sculpture_l7_p1_nationality_of_sculptor_001",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "Phidias",
object: "Ancient Greek",
answerKind: "short",
difficulty: 7,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l7_p1_nationality_of_sculptor_002",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "Praxiteles",
object: "Ancient Greek",
answerKind: "short",
difficulty: 7,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l7_p1_nationality_of_sculptor_003",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "Giambologna",
object: "Flemish-Italian",
answerKind: "short",
difficulty: 7,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l7_p1_nationality_of_sculptor_004",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "Bertel Thorvaldsen",
object: "Danish",
answerKind: "short",
difficulty: 7,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l7_p1_nationality_of_sculptor_005",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "François Rude",
object: "French",
answerKind: "short",
difficulty: 7,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l7_p1_nationality_of_sculptor_006",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "Edmonia Lewis",
object: "American",
answerKind: "short",
difficulty: 7,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l7_p1_nationality_of_sculptor_007",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "Pablo Picasso",
object: "Spanish",
answerKind: "short",
difficulty: 7,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l7_p1_nationality_of_sculptor_008",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "Jean (Hans) Arp",
object: "French",
answerKind: "short",
difficulty: 7,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l7_p1_nationality_of_sculptor_009",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "Augusta Savage",
object: "American",
answerKind: "short",
difficulty: 7,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l7_p1_nationality_of_sculptor_010",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "Isamu Noguchi",
object: "American",
answerKind: "short",
difficulty: 7,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l7_p1_nationality_of_sculptor_011",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "Louise Nevelson",
object: "American",
answerKind: "short",
difficulty: 7,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l7_p1_nationality_of_sculptor_012",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "David Smith",
object: "American",
answerKind: "short",
difficulty: 7,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l7_p1_nationality_of_sculptor_013",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "Eva Hesse",
object: "German-American",
answerKind: "short",
difficulty: 7,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l7_p1_nationality_of_sculptor_014",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "Robert Smithson",
object: "American",
answerKind: "short",
difficulty: 7,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l7_p1_nationality_of_sculptor_015",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "Claes Oldenburg",
object: "Swedish-American",
answerKind: "short",
difficulty: 7,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l7_p1_nationality_of_sculptor_016",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "Eduardo Chillida",
object: "Spanish",
answerKind: "short",
difficulty: 7,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l7_p1_nationality_of_sculptor_017",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "Richard Serra",
object: "American",
answerKind: "short",
difficulty: 7,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l7_p1_nationality_of_sculptor_018",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "Rachel Whiteread",
object: "British",
answerKind: "short",
difficulty: 7,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_sculpture_l7_p1",
concepts
};

export default conceptSet;
