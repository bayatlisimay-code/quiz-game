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
id: "art_architecture_l6_p1_architect_of_building_001",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p1",
relation: "architect_of_building",
subject: "Villa Rotonda",
object: "Andrea Palladio",
answerKind: "short",
difficulty: 6,
distractorGroup: "architects",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l6_p1_architect_of_building_002",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p1",
relation: "architect_of_building",
subject: "Monticello",
object: "Thomas Jefferson",
answerKind: "short",
difficulty: 6,
distractorGroup: "architects",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l6_p1_architect_of_building_003",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p1",
relation: "architect_of_building",
subject: "Palais Garnier",
object: "Charles Garnier",
answerKind: "short",
difficulty: 6,
distractorGroup: "architects",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l6_p1_architect_of_building_004",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p1",
relation: "architect_of_building",
subject: "Crystal Palace",
object: "Joseph Paxton",
answerKind: "short",
difficulty: 6,
distractorGroup: "architects",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l6_p1_architect_of_building_005",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p1",
relation: "architect_of_building",
subject: "Glasgow School of Art",
object: "Charles Rennie Mackintosh",
answerKind: "short",
difficulty: 6,
distractorGroup: "architects",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l6_p1_architect_of_building_006",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p1",
relation: "architect_of_building",
subject: "Rietveld Schröder House",
object: "Gerrit Rietveld",
answerKind: "short",
difficulty: 6,
distractorGroup: "architects",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l6_p1_architect_of_building_007",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p1",
relation: "architect_of_building",
subject: "Casa Barragán",
object: "Luis Barragán",
answerKind: "short",
difficulty: 6,
distractorGroup: "architects",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l6_p1_architect_of_building_008",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p1",
relation: "architect_of_building",
subject: "TWA Flight Center",
object: "Eero Saarinen",
answerKind: "short",
difficulty: 6,
distractorGroup: "architects",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l6_p1_architect_of_building_009",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p1",
relation: "architect_of_building",
subject: "Habitat 67",
object: "Moshe Safdie",
answerKind: "short",
difficulty: 6,
distractorGroup: "architects",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l6_p1_architect_of_building_010",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p1",
relation: "architect_of_building",
subject: "Jatiya Sangsad Bhaban",
object: "Louis Kahn",
answerKind: "short",
difficulty: 6,
distractorGroup: "architects",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l6_p1_architect_of_building_011",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p1",
relation: "architect_of_building",
subject: "São Paulo Museum of Art",
object: "Lina Bo Bardi",
answerKind: "short",
difficulty: 6,
distractorGroup: "architects",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l6_p1_architect_of_building_012",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p1",
relation: "architect_of_building",
subject: "Nakagin Capsule Tower",
object: "Kisho Kurokawa",
answerKind: "short",
difficulty: 6,
distractorGroup: "architects",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l6_p1_architect_of_building_013",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p1",
relation: "architect_of_building",
subject: "Centre Pompidou",
object: "Renzo Piano and Richard Rogers",
answerKind: "short",
difficulty: 6,
distractorGroup: "architects",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l6_p1_architect_of_building_014",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p1",
relation: "architect_of_building",
subject: "Portland Building",
object: "Michael Graves",
answerKind: "short",
difficulty: 6,
distractorGroup: "architects",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l6_p1_architect_of_building_015",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p1",
relation: "architect_of_building",
subject: "Burj Al Arab",
object: "Tom Wright",
answerKind: "short",
difficulty: 6,
distractorGroup: "architects",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l6_p1_architect_of_building_016",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p1",
relation: "architect_of_building",
subject: "Bibliotheca Alexandrina",
object: "Snøhetta",
answerKind: "short",
difficulty: 6,
distractorGroup: "architects",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l6_p1_architect_of_building_017",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p1",
relation: "architect_of_building",
subject: "CCTV Headquarters",
object: "Rem Koolhaas and Ole Scheeren",
answerKind: "short",
difficulty: 6,
distractorGroup: "architects",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l6_p1_architect_of_building_018",
topicId: "art",
subtopicId: "architecture",
levelId: "l6",
partId: "p1",
relation: "architect_of_building",
subject: "Bosco Verticale",
object: "Stefano Boeri",
answerKind: "short",
difficulty: 6,
distractorGroup: "architects",
tags: ["architecture", "famous_buildings", "level_6"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_architecture_l6_p1",
concepts
};

export default conceptSet;