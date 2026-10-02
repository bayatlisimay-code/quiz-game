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
id: "art_sculpture_l6_p1_sculptor_of_sculpture_001",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p1",
relation: "sculptor_of_sculpture",
subject: "Gates of Paradise",
object: "Lorenzo Ghiberti",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculptors",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l6_p1_sculptor_of_sculpture_002",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p1",
relation: "sculptor_of_sculpture",
subject: "Moses",
object: "Michelangelo",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculptors",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l6_p1_sculptor_of_sculpture_003",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p1",
relation: "sculptor_of_sculpture",
subject: "Abduction of a Sabine Woman",
object: "Giambologna",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculptors",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l6_p1_sculptor_of_sculpture_004",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p1",
relation: "sculptor_of_sculpture",
subject: "Ecstasy of Saint Teresa",
object: "Gian Lorenzo Bernini",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculptors",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l6_p1_sculptor_of_sculpture_005",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p1",
relation: "sculptor_of_sculpture",
subject: "Veiled Christ",
object: "Giuseppe Sanmartino",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculptors",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l6_p1_sculptor_of_sculpture_006",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p1",
relation: "sculptor_of_sculpture",
subject: "Pauline Bonaparte as Venus Victrix",
object: "Antonio Canova",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculptors",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l6_p1_sculptor_of_sculpture_007",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p1",
relation: "sculptor_of_sculpture",
subject: "The Burghers of Calais",
object: "Auguste Rodin",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculptors",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l6_p1_sculptor_of_sculpture_008",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p1",
relation: "sculptor_of_sculpture",
subject: "Unique Forms of Continuity in Space",
object: "Umberto Boccioni",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculptors",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l6_p1_sculptor_of_sculpture_009",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p1",
relation: "sculptor_of_sculpture",
subject: "Guitar",
object: "Pablo Picasso",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculptors",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l6_p1_sculptor_of_sculpture_010",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p1",
relation: "sculptor_of_sculpture",
subject: "Bird in Space",
object: "Constantin Brâncuși",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculptors",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l6_p1_sculptor_of_sculpture_011",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p1",
relation: "sculptor_of_sculpture",
subject: "Reclining Figure: Festival",
object: "Henry Moore",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculptors",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l6_p1_sculptor_of_sculpture_012",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p1",
relation: "sculptor_of_sculpture",
subject: "Sky Cathedral",
object: "Louise Nevelson",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculptors",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l6_p1_sculptor_of_sculpture_013",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p1",
relation: "sculptor_of_sculpture",
subject: "Single Form",
object: "Barbara Hepworth",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculptors",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l6_p1_sculptor_of_sculpture_014",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p1",
relation: "sculptor_of_sculpture",
subject: "Spiral Jetty",
object: "Robert Smithson",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculptors",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l6_p1_sculptor_of_sculpture_015",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p1",
relation: "sculptor_of_sculpture",
subject: "Flamingo",
object: "Alexander Calder",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculptors",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l6_p1_sculptor_of_sculpture_016",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p1",
relation: "sculptor_of_sculpture",
subject: "Spoonbridge and Cherry",
object: "Claes Oldenburg and Coosje van Bruggen",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculptors",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l6_p1_sculptor_of_sculpture_017",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p1",
relation: "sculptor_of_sculpture",
subject: "Charging Bull",
object: "Arturo Di Modica",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculptors",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l6_p1_sculptor_of_sculpture_018",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p1",
relation: "sculptor_of_sculpture",
subject: "Puppy",
object: "Jeff Koons",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculptors",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_sculpture_l6_p1",
concepts
};

export default conceptSet;
