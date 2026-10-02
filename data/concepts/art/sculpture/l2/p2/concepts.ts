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
id: "art_sculpture_l2_p2_known_for_sculpture_001",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p2",
relation: "known_for_sculpture",
subject: "Lorenzo Ghiberti",
object: "Gates of Paradise",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l2_p2_known_for_sculpture_002",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p2",
relation: "known_for_sculpture",
subject: "Donatello",
object: "David",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l2_p2_known_for_sculpture_003",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p2",
relation: "known_for_sculpture",
subject: "Michelangelo",
object: "David",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l2_p2_known_for_sculpture_004",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p2",
relation: "known_for_sculpture",
subject: "Gian Lorenzo Bernini",
object: "Apollo and Daphne",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l2_p2_known_for_sculpture_005",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p2",
relation: "known_for_sculpture",
subject: "Antonio Canova",
object: "Psyche Revived by Cupid's Kiss",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l2_p2_known_for_sculpture_006",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p2",
relation: "known_for_sculpture",
subject: "Auguste Rodin",
object: "The Thinker",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l2_p2_known_for_sculpture_007",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p2",
relation: "known_for_sculpture",
subject: "Camille Claudel",
object: "The Waltz",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l2_p2_known_for_sculpture_008",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p2",
relation: "known_for_sculpture",
subject: "Constantin Brâncuși",
object: "Bird in Space",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l2_p2_known_for_sculpture_009",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p2",
relation: "known_for_sculpture",
subject: "Umberto Boccioni",
object: "Unique Forms of Continuity in Space",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l2_p2_known_for_sculpture_010",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p2",
relation: "known_for_sculpture",
subject: "Alexander Calder",
object: "Flamingo",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l2_p2_known_for_sculpture_011",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p2",
relation: "known_for_sculpture",
subject: "Henry Moore",
object: "Reclining Figure",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l2_p2_known_for_sculpture_012",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p2",
relation: "known_for_sculpture",
subject: "Barbara Hepworth",
object: "Single Form",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l2_p2_known_for_sculpture_013",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p2",
relation: "known_for_sculpture",
subject: "Alberto Giacometti",
object: "Walking Man I",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l2_p2_known_for_sculpture_014",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p2",
relation: "known_for_sculpture",
subject: "Louise Bourgeois",
object: "Maman",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l2_p2_known_for_sculpture_015",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p2",
relation: "known_for_sculpture",
subject: "Niki de Saint Phalle",
object: "Nana",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l2_p2_known_for_sculpture_016",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p2",
relation: "known_for_sculpture",
subject: "Antony Gormley",
object: "Angel of the North",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l2_p2_known_for_sculpture_017",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p2",
relation: "known_for_sculpture",
subject: "Jeff Koons",
object: "Balloon Dog",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l2_p2_known_for_sculpture_018",
topicId: "art",
subtopicId: "sculpture",
levelId: "l2",
partId: "p2",
relation: "known_for_sculpture",
subject: "Anish Kapoor",
object: "Cloud Gate",
answerKind: "short",
difficulty: 2,
distractorGroup: "sculptures",
tags: ["sculpture", "famous_sculptors", "level_2"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_sculpture_l2_p2",
concepts
};

export default conceptSet;
