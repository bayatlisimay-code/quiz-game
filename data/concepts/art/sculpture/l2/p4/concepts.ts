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
id: "art_sculpture_l2_p4_known_for_style_or_period_001",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p4",
relation: "known_for_style_or_period",
subject: "Lorenzo Ghiberti",
object: "Early Renaissance",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l2_p4_known_for_style_or_period_002",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p4",
relation: "known_for_style_or_period",
subject: "Donatello",
object: "Early Renaissance",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l2_p4_known_for_style_or_period_003",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p4",
relation: "known_for_style_or_period",
subject: "Michelangelo",
object: "High Renaissance",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l2_p4_known_for_style_or_period_004",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p4",
relation: "known_for_style_or_period",
subject: "Gian Lorenzo Bernini",
object: "Baroque",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l2_p4_known_for_style_or_period_005",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p4",
relation: "known_for_style_or_period",
subject: "Antonio Canova",
object: "Neoclassicism",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l2_p4_known_for_style_or_period_006",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p4",
relation: "known_for_style_or_period",
subject: "Auguste Rodin",
object: "Modern sculpture",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l2_p4_known_for_style_or_period_007",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p4",
relation: "known_for_style_or_period",
subject: "Camille Claudel",
object: "Realism",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l2_p4_known_for_style_or_period_008",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p4",
relation: "known_for_style_or_period",
subject: "Constantin Brâncuși",
object: "Modernism",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l2_p4_known_for_style_or_period_009",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p4",
relation: "known_for_style_or_period",
subject: "Umberto Boccioni",
object: "Futurism",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l2_p4_known_for_style_or_period_010",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p4",
relation: "known_for_style_or_period",
subject: "Alexander Calder",
object: "Kinetic art",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l2_p4_known_for_style_or_period_011",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p4",
relation: "known_for_style_or_period",
subject: "Henry Moore",
object: "Modernism",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l2_p4_known_for_style_or_period_012",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p4",
relation: "known_for_style_or_period",
subject: "Barbara Hepworth",
object: "Abstract sculpture",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l2_p4_known_for_style_or_period_013",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p4",
relation: "known_for_style_or_period",
subject: "Alberto Giacometti",
object: "Modernism",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l2_p4_known_for_style_or_period_014",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p4",
relation: "known_for_style_or_period",
subject: "Louise Bourgeois",
object: "Contemporary sculpture",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l2_p4_known_for_style_or_period_015",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p4",
relation: "known_for_style_or_period",
subject: "Niki de Saint Phalle",
object: "Nouveau Réalisme",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l2_p4_known_for_style_or_period_016",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p4",
relation: "known_for_style_or_period",
subject: "Antony Gormley",
object: "Contemporary sculpture",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l2_p4_known_for_style_or_period_017",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p4",
relation: "known_for_style_or_period",
subject: "Jeff Koons",
object: "Neo-pop",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l2_p4_known_for_style_or_period_018",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p4",
relation: "known_for_style_or_period",
subject: "Anish Kapoor",
object: "Contemporary sculpture",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculpture_styles_periods",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_sculpture_l2_p4",
concepts
};

export default conceptSet;
