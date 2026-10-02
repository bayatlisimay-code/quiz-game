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
id: "art_architecture_l1_p2_location_of_building_001",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p2",
relation: "location_of_building",
subject: "Sagrada Família",
object: "Barcelona, Spain",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l1_p2_location_of_building_002",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p2",
relation: "location_of_building",
subject: "Parthenon",
object: "Athens, Greece",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l1_p2_location_of_building_003",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p2",
relation: "location_of_building",
subject: "Hagia Sophia",
object: "Istanbul, Türkiye",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l1_p2_location_of_building_004",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p2",
relation: "location_of_building",
subject: "Pyramid of Djoser",
object: "Saqqara, Egypt",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l1_p2_location_of_building_005",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p2",
relation: "location_of_building",
subject: "Florence Cathedral Dome",
object: "Florence, Italy",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l1_p2_location_of_building_006",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p2",
relation: "location_of_building",
subject: "Petronas Towers",
object: "Kuala Lumpur, Malaysia",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l1_p2_location_of_building_007",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p2",
relation: "location_of_building",
subject: "St Paul's Cathedral",
object: "London, United Kingdom",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l1_p2_location_of_building_008",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p2",
relation: "location_of_building",
subject: "Guggenheim Museum Bilbao",
object: "Bilbao, Spain",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l1_p2_location_of_building_009",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p2",
relation: "location_of_building",
subject: "Palace of Westminster",
object: "London, United Kingdom",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l1_p2_location_of_building_010",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p2",
relation: "location_of_building",
subject: "Villa Savoye",
object: "Poissy, France",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l1_p2_location_of_building_011",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p2",
relation: "location_of_building",
subject: "Bauhaus Building",
object: "Dessau, Germany",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l1_p2_location_of_building_012",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p2",
relation: "location_of_building",
subject: "Chrysler Building",
object: "New York City, United States",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l1_p2_location_of_building_013",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p2",
relation: "location_of_building",
subject: "Fallingwater",
object: "Mill Run, Pennsylvania, United States",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l1_p2_location_of_building_014",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p2",
relation: "location_of_building",
subject: "Cathedral of Brasília",
object: "Brasília, Brazil",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l1_p2_location_of_building_015",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p2",
relation: "location_of_building",
subject: "Sydney Opera House",
object: "Sydney, Australia",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l1_p2_location_of_building_016",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p2",
relation: "location_of_building",
subject: "Lotus Temple",
object: "New Delhi, India",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l1_p2_location_of_building_017",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p2",
relation: "location_of_building",
subject: "Hassan II Mosque",
object: "Casablanca, Morocco",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l1_p2_location_of_building_018",
topicId: "art",
subtopicId: "architecture",
levelId: "l1",
partId: "p2",
relation: "location_of_building",
subject: "Louvre Abu Dhabi",
object: "Abu Dhabi, United Arab Emirates",
answerKind: "short",
difficulty: 1,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_1"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_architecture_l1_p2",
concepts
};

export default conceptSet;