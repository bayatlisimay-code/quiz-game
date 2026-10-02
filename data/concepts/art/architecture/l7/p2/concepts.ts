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
id: "art_architecture_l7_p2_known_for_building_001",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p2",
relation: "known_for_building",
subject: "Andrea Palladio",
object: "Villa Rotonda",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l7_p2_known_for_building_002",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p2",
relation: "known_for_building",
subject: "Victor Horta",
object: "Hôtel Tassel",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l7_p2_known_for_building_003",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p2",
relation: "known_for_building",
subject: "Charles Garnier",
object: "Palais Garnier",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l7_p2_known_for_building_004",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p2",
relation: "known_for_building",
subject: "Charles Rennie Mackintosh",
object: "Glasgow School of Art",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l7_p2_known_for_building_005",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p2",
relation: "known_for_building",
subject: "Gerrit Rietveld",
object: "Rietveld Schröder House",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l7_p2_known_for_building_006",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p2",
relation: "known_for_building",
subject: "Eileen Gray",
object: "E-1027",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l7_p2_known_for_building_007",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p2",
relation: "known_for_building",
subject: "Alvar Aalto",
object: "Finlandia Hall",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l7_p2_known_for_building_008",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p2",
relation: "known_for_building",
subject: "Luis Barragán",
object: "Casa Barragán",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l7_p2_known_for_building_009",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p2",
relation: "known_for_building",
subject: "Eero Saarinen",
object: "TWA Flight Center",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l7_p2_known_for_building_010",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p2",
relation: "known_for_building",
subject: "Louis Kahn",
object: "Jatiya Sangsad Bhaban",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l7_p2_known_for_building_011",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p2",
relation: "known_for_building",
subject: "Lina Bo Bardi",
object: "São Paulo Museum of Art",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l7_p2_known_for_building_012",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p2",
relation: "known_for_building",
subject: "Kisho Kurokawa",
object: "Nakagin Capsule Tower",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l7_p2_known_for_building_013",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p2",
relation: "known_for_building",
subject: "Michael Graves",
object: "Portland Building",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l7_p2_known_for_building_014",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p2",
relation: "known_for_building",
subject: "Norman Foster",
object: "30 St Mary Axe",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l7_p2_known_for_building_015",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p2",
relation: "known_for_building",
subject: "Rem Koolhaas",
object: "CCTV Headquarters",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l7_p2_known_for_building_016",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p2",
relation: "known_for_building",
subject: "Balkrishna Doshi",
object: "Sangath",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l7_p2_known_for_building_017",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p2",
relation: "known_for_building",
subject: "Hassan Fathy",
object: "New Gourna Village",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l7_p2_known_for_building_018",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p2",
relation: "known_for_building",
subject: "Glenn Murcutt",
object: "Magney House",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_architecture_l7_p2",
concepts
};

export default conceptSet;