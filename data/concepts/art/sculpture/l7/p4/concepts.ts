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
id: "art_sculpture_l7_p4_known_for_style_or_period_001",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p4",
relation: "known_for_style_or_period",
subject: "Phidias",
object: "Classical Greek",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l7_p4_known_for_style_or_period_002",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p4",
relation: "known_for_style_or_period",
subject: "Praxiteles",
object: "Late Classical Greek",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l7_p4_known_for_style_or_period_003",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p4",
relation: "known_for_style_or_period",
subject: "Giambologna",
object: "Mannerism",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l7_p4_known_for_style_or_period_004",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p4",
relation: "known_for_style_or_period",
subject: "Bertel Thorvaldsen",
object: "Neoclassicism",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l7_p4_known_for_style_or_period_005",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p4",
relation: "known_for_style_or_period",
subject: "François Rude",
object: "Romanticism",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l7_p4_known_for_style_or_period_006",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p4",
relation: "known_for_style_or_period",
subject: "Edmonia Lewis",
object: "Neoclassicism",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l7_p4_known_for_style_or_period_007",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p4",
relation: "known_for_style_or_period",
subject: "Pablo Picasso",
object: "Cubism",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l7_p4_known_for_style_or_period_008",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p4",
relation: "known_for_style_or_period",
subject: "Jean (Hans) Arp",
object: "Dada",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l7_p4_known_for_style_or_period_009",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p4",
relation: "known_for_style_or_period",
subject: "Augusta Savage",
object: "Harlem Renaissance",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l7_p4_known_for_style_or_period_010",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p4",
relation: "known_for_style_or_period",
subject: "Isamu Noguchi",
object: "Modernism",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l7_p4_known_for_style_or_period_011",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p4",
relation: "known_for_style_or_period",
subject: "Louise Nevelson",
object: "Assemblage",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l7_p4_known_for_style_or_period_012",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p4",
relation: "known_for_style_or_period",
subject: "David Smith",
object: "Abstract Expressionism",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l7_p4_known_for_style_or_period_013",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p4",
relation: "known_for_style_or_period",
subject: "Eva Hesse",
object: "Postminimalism",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l7_p4_known_for_style_or_period_014",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p4",
relation: "known_for_style_or_period",
subject: "Robert Smithson",
object: "Land art",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l7_p4_known_for_style_or_period_015",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p4",
relation: "known_for_style_or_period",
subject: "Claes Oldenburg",
object: "Pop art",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l7_p4_known_for_style_or_period_016",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p4",
relation: "known_for_style_or_period",
subject: "Eduardo Chillida",
object: "Abstract sculpture",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l7_p4_known_for_style_or_period_017",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p4",
relation: "known_for_style_or_period",
subject: "Richard Serra",
object: "Minimalism",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l7_p4_known_for_style_or_period_018",
topicId: "art",
subtopicId: "sculpture",
levelId: "l7",
partId: "p4",
relation: "known_for_style_or_period",
subject: "Rachel Whiteread",
object: "Young British Artists",
answerKind: "short",
difficulty: 7,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_7"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_sculpture_l7_p4",
concepts
};

export default conceptSet;
