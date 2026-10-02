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
id: "art_architecture_l6_p4_period_or_year_of_building_001",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_building",
subject: "Villa Rotonda",
object: "16th century",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l6_p4_period_or_year_of_building_002",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_building",
subject: "Monticello",
object: "Built 1769–1809",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l6_p4_period_or_year_of_building_003",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_building",
subject: "Palais Garnier",
object: "Built 1861–1875",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l6_p4_period_or_year_of_building_004",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_building",
subject: "Crystal Palace",
object: "1851",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l6_p4_period_or_year_of_building_005",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_building",
subject: "Glasgow School of Art",
object: "Built 1897–1909",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l6_p4_period_or_year_of_building_006",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_building",
subject: "Rietveld Schröder House",
object: "1924",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l6_p4_period_or_year_of_building_007",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_building",
subject: "Casa Barragán",
object: "1948",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l6_p4_period_or_year_of_building_008",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_building",
subject: "TWA Flight Center",
object: "1962",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l6_p4_period_or_year_of_building_009",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_building",
subject: "Habitat 67",
object: "1967",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l6_p4_period_or_year_of_building_010",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_building",
subject: "Jatiya Sangsad Bhaban",
object: "Completed 1982",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l6_p4_period_or_year_of_building_011",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_building",
subject: "São Paulo Museum of Art",
object: "1968",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l6_p4_period_or_year_of_building_012",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_building",
subject: "Nakagin Capsule Tower",
object: "1972",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l6_p4_period_or_year_of_building_013",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_building",
subject: "Centre Pompidou",
object: "1977",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l6_p4_period_or_year_of_building_014",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_building",
subject: "Portland Building",
object: "1982",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l6_p4_period_or_year_of_building_015",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_building",
subject: "Burj Al Arab",
object: "1999",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l6_p4_period_or_year_of_building_016",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_building",
subject: "Bibliotheca Alexandrina",
object: "2002",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l6_p4_period_or_year_of_building_017",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_building",
subject: "CCTV Headquarters",
object: "2012",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l6_p4_period_or_year_of_building_018",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p4",
relation: "period_or_year_of_building",
subject: "Bosco Verticale",
object: "2014",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_architecture_l6_p4",
concepts
};

export default conceptSet;