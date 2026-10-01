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
id: "art_architecture_l6_p2_location_of_building_001",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p2",
relation: "location_of_building",
subject: "Villa Rotonda",
object: "Vicenza, Italy",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l6_p2_location_of_building_002",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p2",
relation: "location_of_building",
subject: "Monticello",
object: "Charlottesville, United States",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l6_p2_location_of_building_003",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p2",
relation: "location_of_building",
subject: "Palais Garnier",
object: "Paris, France",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l6_p2_location_of_building_004",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p2",
relation: "location_of_building",
subject: "Crystal Palace",
object: "London, United Kingdom",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l6_p2_location_of_building_005",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p2",
relation: "location_of_building",
subject: "Glasgow School of Art",
object: "Glasgow, United Kingdom",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l6_p2_location_of_building_006",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p2",
relation: "location_of_building",
subject: "Rietveld Schröder House",
object: "Utrecht, Netherlands",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l6_p2_location_of_building_007",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p2",
relation: "location_of_building",
subject: "Casa Barragán",
object: "Mexico City, Mexico",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l6_p2_location_of_building_008",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p2",
relation: "location_of_building",
subject: "TWA Flight Center",
object: "New York City, United States",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l6_p2_location_of_building_009",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p2",
relation: "location_of_building",
subject: "Habitat 67",
object: "Montreal, Canada",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l6_p2_location_of_building_010",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p2",
relation: "location_of_building",
subject: "Jatiya Sangsad Bhaban",
object: "Dhaka, Bangladesh",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l6_p2_location_of_building_011",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p2",
relation: "location_of_building",
subject: "São Paulo Museum of Art",
object: "São Paulo, Brazil",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l6_p2_location_of_building_012",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p2",
relation: "location_of_building",
subject: "Nakagin Capsule Tower",
object: "Tokyo, Japan",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l6_p2_location_of_building_013",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p2",
relation: "location_of_building",
subject: "Centre Pompidou",
object: "Paris, France",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l6_p2_location_of_building_014",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p2",
relation: "location_of_building",
subject: "Portland Building",
object: "Portland, United States",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l6_p2_location_of_building_015",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p2",
relation: "location_of_building",
subject: "Burj Al Arab",
object: "Dubai, United Arab Emirates",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l6_p2_location_of_building_016",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p2",
relation: "location_of_building",
subject: "Bibliotheca Alexandrina",
object: "Alexandria, Egypt",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l6_p2_location_of_building_017",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p2",
relation: "location_of_building",
subject: "CCTV Headquarters",
object: "Beijing, China",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l6_p2_location_of_building_018",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p2",
relation: "location_of_building",
subject: "Bosco Verticale",
object: "Milan, Italy",
answerKind: "short",
difficulty: 6,
distractorGroup: "building_locations",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_architecture_l6_p2",
concepts
};

export default conceptSet;
