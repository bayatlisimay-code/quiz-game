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
id: "art_architecture_l4_p4_characteristic_of_civilization_architecture_001",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_architecture",
subject: "Ancient Egyptian",
object: "Monumental stone pyramids and tomb complexes",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_characteristics",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l4_p4_characteristic_of_civilization_architecture_002",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_architecture",
subject: "Sumerian",
object: "Stepped mud-brick temple platforms called ziggurats",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_characteristics",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l4_p4_characteristic_of_civilization_architecture_003",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_architecture",
subject: "Achaemenid Persian",
object: "Grand columned halls, monumental stairways, and carved reliefs",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_characteristics",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l4_p4_characteristic_of_civilization_architecture_004",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_architecture",
subject: "Ancient Greek",
object: "Columns, symmetry, and balanced proportions",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_characteristics",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l4_p4_characteristic_of_civilization_architecture_005",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_architecture",
subject: "Ancient Roman",
object: "Arches, domes, and monumental public spaces",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_characteristics",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l4_p4_characteristic_of_civilization_architecture_006",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_architecture",
subject: "Byzantine",
object: "Large domes and interiors glowing with gold mosaics",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_characteristics",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l4_p4_characteristic_of_civilization_architecture_007",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_architecture",
subject: "Umayyad",
object: "Arcades, gilded domes, and rich mosaic decoration",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_characteristics",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l4_p4_characteristic_of_civilization_architecture_008",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_architecture",
subject: "Nasrid",
object: "Intricate carved stucco, courtyards with water, and delicate arches",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_characteristics",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l4_p4_characteristic_of_civilization_architecture_009",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_architecture",
subject: "Ottoman",
object: "Cascading domes and slender pencil-shaped minarets",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_characteristics",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l4_p4_characteristic_of_civilization_architecture_010",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_architecture",
subject: "Mughal",
object: "Strict symmetry, onion domes, and formal gardens",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_characteristics",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l4_p4_characteristic_of_civilization_architecture_011",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_architecture",
subject: "Chola",
object: "Tall pyramidal temple towers covered in sculpture",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_characteristics",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l4_p4_characteristic_of_civilization_architecture_012",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_architecture",
subject: "Khmer",
object: "Lotus-bud towers, long galleries, and carved stone reliefs",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_characteristics",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l4_p4_characteristic_of_civilization_architecture_013",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_architecture",
subject: "Imperial Chinese",
object: "Sweeping tiled roofs, axial symmetry, and courtyards",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_characteristics",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l4_p4_characteristic_of_civilization_architecture_014",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_architecture",
subject: "Japanese Buddhist",
object: "Timber halls with layered roofs and deep overhanging eaves",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_characteristics",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l4_p4_characteristic_of_civilization_architecture_015",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_architecture",
subject: "Maya",
object: "Stepped pyramids topped by temples and steep stairways",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_characteristics",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l4_p4_characteristic_of_civilization_architecture_016",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_architecture",
subject: "Inca",
object: "Precisely fitted stone walls set into mountain landscapes",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_characteristics",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l4_p4_characteristic_of_civilization_architecture_017",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_architecture",
subject: "Medieval Ethiopian",
object: "Churches carved directly out of solid rock",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_characteristics",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l4_p4_characteristic_of_civilization_architecture_018",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_architecture",
subject: "Sudano-Sahelian",
object: "Sculptural mud-brick walls with projecting wooden beams",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_characteristics",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_architecture_l4_p4",
concepts
};

export default conceptSet;
