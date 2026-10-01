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
id: "art_architecture_l2_p2_known_for_building_001",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p2",
relation: "known_for_building",
subject: "Imhotep",
object: "Pyramid of Djoser",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l2_p2_known_for_building_002",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p2",
relation: "known_for_building",
subject: "Ictinus",
object: "Parthenon",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l2_p2_known_for_building_003",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p2",
relation: "known_for_building",
subject: "Filippo Brunelleschi",
object: "Florence Cathedral Dome",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l2_p2_known_for_building_004",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p2",
relation: "known_for_building",
subject: "Mimar Sinan",
object: "Süleymaniye Mosque",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l2_p2_known_for_building_005",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p2",
relation: "known_for_building",
subject: "Christopher Wren",
object: "St Paul's Cathedral",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l2_p2_known_for_building_006",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p2",
relation: "known_for_building",
subject: "Antoni Gaudí",
object: "Sagrada Família",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l2_p2_known_for_building_007",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p2",
relation: "known_for_building",
subject: "Louis Sullivan",
object: "Wainwright Building",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l2_p2_known_for_building_008",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p2",
relation: "known_for_building",
subject: "Frank Lloyd Wright",
object: "Fallingwater",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l2_p2_known_for_building_009",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p2",
relation: "known_for_building",
subject: "Le Corbusier",
object: "Villa Savoye",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l2_p2_known_for_building_010",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p2",
relation: "known_for_building",
subject: "Walter Gropius",
object: "Bauhaus Building",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l2_p2_known_for_building_011",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p2",
relation: "known_for_building",
subject: "Ludwig Mies van der Rohe",
object: "Farnsworth House",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l2_p2_known_for_building_012",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p2",
relation: "known_for_building",
subject: "William Van Alen",
object: "Chrysler Building",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l2_p2_known_for_building_013",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p2",
relation: "known_for_building",
subject: "Oscar Niemeyer",
object: "Cathedral of Brasília",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l2_p2_known_for_building_014",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p2",
relation: "known_for_building",
subject: "Jørn Utzon",
object: "Sydney Opera House",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l2_p2_known_for_building_015",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p2",
relation: "known_for_building",
subject: "I. M. Pei",
object: "Louvre Pyramid",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l2_p2_known_for_building_016",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p2",
relation: "known_for_building",
subject: "Zaha Hadid",
object: "Heydar Aliyev Center",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l2_p2_known_for_building_017",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p2",
relation: "known_for_building",
subject: "Tadao Ando",
object: "Church of the Light",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l2_p2_known_for_building_018",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p2",
relation: "known_for_building",
subject: "Frank Gehry",
object: "Guggenheim Museum Bilbao",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_buildings",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_architecture_l2_p2",
concepts
};

export default conceptSet;
