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
id: "art_sculpture_l7_p2_known_for_sculpture_001",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p2",
relation: "known_for_sculpture",
subject: "Phidias",
object: "Statue of Zeus at Olympia",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l7_p2_known_for_sculpture_002",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p2",
relation: "known_for_sculpture",
subject: "Praxiteles",
object: "Aphrodite of Knidos",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l7_p2_known_for_sculpture_003",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p2",
relation: "known_for_sculpture",
subject: "Giambologna",
object: "Abduction of a Sabine Woman",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l7_p2_known_for_sculpture_004",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p2",
relation: "known_for_sculpture",
subject: "Bertel Thorvaldsen",
object: "Christus",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l7_p2_known_for_sculpture_005",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p2",
relation: "known_for_sculpture",
subject: "François Rude",
object: "The Departure of the Volunteers of 1792",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l7_p2_known_for_sculpture_006",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p2",
relation: "known_for_sculpture",
subject: "Edmonia Lewis",
object: "The Death of Cleopatra",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l7_p2_known_for_sculpture_007",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p2",
relation: "known_for_sculpture",
subject: "Pablo Picasso",
object: "Guitar",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l7_p2_known_for_sculpture_008",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p2",
relation: "known_for_sculpture",
subject: "Jean (Hans) Arp",
object: "Human Concretion",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l7_p2_known_for_sculpture_009",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p2",
relation: "known_for_sculpture",
subject: "Augusta Savage",
object: "Gamin",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l7_p2_known_for_sculpture_010",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p2",
relation: "known_for_sculpture",
subject: "Isamu Noguchi",
object: "Black Sun",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l7_p2_known_for_sculpture_011",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p2",
relation: "known_for_sculpture",
subject: "Louise Nevelson",
object: "Sky Cathedral",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l7_p2_known_for_sculpture_012",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p2",
relation: "known_for_sculpture",
subject: "David Smith",
object: "Cubi XIX",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l7_p2_known_for_sculpture_013",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p2",
relation: "known_for_sculpture",
subject: "Eva Hesse",
object: "Repetition Nineteen III",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l7_p2_known_for_sculpture_014",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p2",
relation: "known_for_sculpture",
subject: "Robert Smithson",
object: "Spiral Jetty",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l7_p2_known_for_sculpture_015",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p2",
relation: "known_for_sculpture",
subject: "Claes Oldenburg",
object: "Clothespin",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l7_p2_known_for_sculpture_016",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p2",
relation: "known_for_sculpture",
subject: "Eduardo Chillida",
object: "Comb of the Wind",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l7_p2_known_for_sculpture_017",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p2",
relation: "known_for_sculpture",
subject: "Richard Serra",
object: "Tilted Arc",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l7_p2_known_for_sculpture_018",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p2",
relation: "known_for_sculpture",
subject: "Rachel Whiteread",
object: "House",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_sculpture_l7_p2",
concepts
};

export default conceptSet;
