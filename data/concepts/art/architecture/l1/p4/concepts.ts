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
id: "art_architecture_l1_p4_period_or_year_of_building_001",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p4",
relation: "period_or_year_of_building",
subject: "Sagrada Família",
object: "Construction began in 1882",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l1_p4_period_or_year_of_building_002",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p4",
relation: "period_or_year_of_building",
subject: "Parthenon",
object: "5th century BCE",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l1_p4_period_or_year_of_building_003",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p4",
relation: "period_or_year_of_building",
subject: "Hagia Sophia",
object: "Built 532–537",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l1_p4_period_or_year_of_building_004",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p4",
relation: "period_or_year_of_building",
subject: "Pyramid of Djoser",
object: "27th century BCE",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l1_p4_period_or_year_of_building_005",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p4",
relation: "period_or_year_of_building",
subject: "Florence Cathedral Dome",
object: "Built 1420–1436",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l1_p4_period_or_year_of_building_006",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p4",
relation: "period_or_year_of_building",
subject: "Petronas Towers",
object: "1998",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l1_p4_period_or_year_of_building_007",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p4",
relation: "period_or_year_of_building",
subject: "St Paul's Cathedral",
object: "Built 1675–1710",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l1_p4_period_or_year_of_building_008",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p4",
relation: "period_or_year_of_building",
subject: "Guggenheim Museum Bilbao",
object: "1997",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l1_p4_period_or_year_of_building_009",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p4",
relation: "period_or_year_of_building",
subject: "Palace of Westminster",
object: "Built 1840–1870",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l1_p4_period_or_year_of_building_010",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p4",
relation: "period_or_year_of_building",
subject: "Villa Savoye",
object: "1931",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l1_p4_period_or_year_of_building_011",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p4",
relation: "period_or_year_of_building",
subject: "Bauhaus Building",
object: "1926",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l1_p4_period_or_year_of_building_012",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p4",
relation: "period_or_year_of_building",
subject: "Chrysler Building",
object: "1930",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l1_p4_period_or_year_of_building_013",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p4",
relation: "period_or_year_of_building",
subject: "Fallingwater",
object: "1930s",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l1_p4_period_or_year_of_building_014",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p4",
relation: "period_or_year_of_building",
subject: "Cathedral of Brasília",
object: "1970",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l1_p4_period_or_year_of_building_015",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p4",
relation: "period_or_year_of_building",
subject: "Sydney Opera House",
object: "1973",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l1_p4_period_or_year_of_building_016",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p4",
relation: "period_or_year_of_building",
subject: "Lotus Temple",
object: "1986",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l1_p4_period_or_year_of_building_017",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p4",
relation: "period_or_year_of_building",
subject: "Hassan II Mosque",
object: "1993",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l1_p4_period_or_year_of_building_018",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p4",
relation: "period_or_year_of_building",
subject: "Louvre Abu Dhabi",
object: "2017",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_periods",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_architecture_l1_p4",
concepts
};

export default conceptSet;