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
id: "art_sculpture_l6_p4_period_or_year_of_sculpture_001",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_sculpture",
subject: "Gates of Paradise",
object: "1425–1452",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_dates",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l6_p4_period_or_year_of_sculpture_002",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_sculpture",
subject: "Moses",
object: "1513–1515",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_dates",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l6_p4_period_or_year_of_sculpture_003",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_sculpture",
subject: "Abduction of a Sabine Woman",
object: "1581–1583",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_dates",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l6_p4_period_or_year_of_sculpture_004",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_sculpture",
subject: "Ecstasy of Saint Teresa",
object: "1647–1652",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_dates",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l6_p4_period_or_year_of_sculpture_005",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_sculpture",
subject: "Veiled Christ",
object: "1753",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_dates",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l6_p4_period_or_year_of_sculpture_006",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_sculpture",
subject: "Pauline Bonaparte as Venus Victrix",
object: "1805–1808",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_dates",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l6_p4_period_or_year_of_sculpture_007",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_sculpture",
subject: "The Burghers of Calais",
object: "1884–1889",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_dates",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l6_p4_period_or_year_of_sculpture_008",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_sculpture",
subject: "Unique Forms of Continuity in Space",
object: "1913 (cast 1931 or 1934)",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_dates",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l6_p4_period_or_year_of_sculpture_009",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_sculpture",
subject: "Guitar",
object: "1914",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_dates",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l6_p4_period_or_year_of_sculpture_010",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_sculpture",
subject: "Bird in Space",
object: "1928",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_dates",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l6_p4_period_or_year_of_sculpture_011",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_sculpture",
subject: "Reclining Figure: Festival",
object: "1951",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_dates",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l6_p4_period_or_year_of_sculpture_012",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_sculpture",
subject: "Sky Cathedral",
object: "1958",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_dates",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l6_p4_period_or_year_of_sculpture_013",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_sculpture",
subject: "Single Form",
object: "1961–1964",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_dates",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l6_p4_period_or_year_of_sculpture_014",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_sculpture",
subject: "Spiral Jetty",
object: "1970",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_dates",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l6_p4_period_or_year_of_sculpture_015",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_sculpture",
subject: "Flamingo",
object: "1974",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_dates",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l6_p4_period_or_year_of_sculpture_016",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_sculpture",
subject: "Spoonbridge and Cherry",
object: "1985–1988",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_dates",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l6_p4_period_or_year_of_sculpture_017",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_sculpture",
subject: "Charging Bull",
object: "1989",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_dates",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l6_p4_period_or_year_of_sculpture_018",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_sculpture",
subject: "Puppy",
object: "1992",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_dates",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_sculpture_l6_p4",
concepts
};

export default conceptSet;
