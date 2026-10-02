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
id: "art_sculpture_l2_p1_nationality_of_sculptor_001",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "Lorenzo Ghiberti",
object: "Italian",
answerKind: "short",
difficulty: 2,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l2_p1_nationality_of_sculptor_002",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "Donatello",
object: "Italian",
answerKind: "short",
difficulty: 2,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l2_p1_nationality_of_sculptor_003",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "Michelangelo",
object: "Italian",
answerKind: "short",
difficulty: 2,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l2_p1_nationality_of_sculptor_004",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "Gian Lorenzo Bernini",
object: "Italian",
answerKind: "short",
difficulty: 2,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l2_p1_nationality_of_sculptor_005",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "Antonio Canova",
object: "Italian",
answerKind: "short",
difficulty: 2,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l2_p1_nationality_of_sculptor_006",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "Auguste Rodin",
object: "French",
answerKind: "short",
difficulty: 2,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l2_p1_nationality_of_sculptor_007",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "Camille Claudel",
object: "French",
answerKind: "short",
difficulty: 2,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l2_p1_nationality_of_sculptor_008",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "Constantin Brâncuși",
object: "Romanian-French",
answerKind: "short",
difficulty: 2,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l2_p1_nationality_of_sculptor_009",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "Umberto Boccioni",
object: "Italian",
answerKind: "short",
difficulty: 2,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l2_p1_nationality_of_sculptor_010",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "Alexander Calder",
object: "American",
answerKind: "short",
difficulty: 2,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l2_p1_nationality_of_sculptor_011",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "Henry Moore",
object: "British",
answerKind: "short",
difficulty: 2,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l2_p1_nationality_of_sculptor_012",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "Barbara Hepworth",
object: "British",
answerKind: "short",
difficulty: 2,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l2_p1_nationality_of_sculptor_013",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "Alberto Giacometti",
object: "Swiss",
answerKind: "short",
difficulty: 2,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l2_p1_nationality_of_sculptor_014",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "Louise Bourgeois",
object: "French-American",
answerKind: "short",
difficulty: 2,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l2_p1_nationality_of_sculptor_015",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "Niki de Saint Phalle",
object: "French-American",
answerKind: "short",
difficulty: 2,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l2_p1_nationality_of_sculptor_016",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "Antony Gormley",
object: "British",
answerKind: "short",
difficulty: 2,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l2_p1_nationality_of_sculptor_017",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "Jeff Koons",
object: "American",
answerKind: "short",
difficulty: 2,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l2_p1_nationality_of_sculptor_018",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p1",
relation: "nationality_of_sculptor",
subject: "Anish Kapoor",
object: "Indian-British",
answerKind: "short",
difficulty: 2,
distractorGroup: "nationalities",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_sculpture_l2_p1",
concepts
};

export default conceptSet;
