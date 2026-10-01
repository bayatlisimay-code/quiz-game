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
id: "art_architecture_l4_p2_example_of_architecture_from_civilization_001",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p2",
relation: "example_of_architecture_from_civilization",
subject: "Ancient Egyptian",
object: "Pyramid of Djoser",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_examples",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l4_p2_example_of_architecture_from_civilization_002",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p2",
relation: "example_of_architecture_from_civilization",
subject: "Sumerian",
object: "Ziggurat of Ur",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_examples",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l4_p2_example_of_architecture_from_civilization_003",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p2",
relation: "example_of_architecture_from_civilization",
subject: "Achaemenid Persian",
object: "Persepolis",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_examples",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l4_p2_example_of_architecture_from_civilization_004",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p2",
relation: "example_of_architecture_from_civilization",
subject: "Ancient Greek",
object: "Parthenon",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_examples",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l4_p2_example_of_architecture_from_civilization_005",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p2",
relation: "example_of_architecture_from_civilization",
subject: "Ancient Roman",
object: "Pantheon",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_examples",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l4_p2_example_of_architecture_from_civilization_006",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p2",
relation: "example_of_architecture_from_civilization",
subject: "Byzantine",
object: "Hagia Sophia",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_examples",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l4_p2_example_of_architecture_from_civilization_007",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p2",
relation: "example_of_architecture_from_civilization",
subject: "Umayyad",
object: "Dome of the Rock",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_examples",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l4_p2_example_of_architecture_from_civilization_008",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p2",
relation: "example_of_architecture_from_civilization",
subject: "Nasrid",
object: "Alhambra",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_examples",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l4_p2_example_of_architecture_from_civilization_009",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p2",
relation: "example_of_architecture_from_civilization",
subject: "Ottoman",
object: "Blue Mosque",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_examples",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l4_p2_example_of_architecture_from_civilization_010",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p2",
relation: "example_of_architecture_from_civilization",
subject: "Mughal",
object: "Taj Mahal",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_examples",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l4_p2_example_of_architecture_from_civilization_011",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p2",
relation: "example_of_architecture_from_civilization",
subject: "Chola",
object: "Brihadeeswarar Temple",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_examples",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l4_p2_example_of_architecture_from_civilization_012",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p2",
relation: "example_of_architecture_from_civilization",
subject: "Khmer",
object: "Angkor Wat",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_examples",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l4_p2_example_of_architecture_from_civilization_013",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p2",
relation: "example_of_architecture_from_civilization",
subject: "Imperial Chinese",
object: "Forbidden City",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_examples",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l4_p2_example_of_architecture_from_civilization_014",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p2",
relation: "example_of_architecture_from_civilization",
subject: "Japanese Buddhist",
object: "Tōdai-ji",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_examples",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l4_p2_example_of_architecture_from_civilization_015",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p2",
relation: "example_of_architecture_from_civilization",
subject: "Maya",
object: "Chichén Itzá",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_examples",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l4_p2_example_of_architecture_from_civilization_016",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p2",
relation: "example_of_architecture_from_civilization",
subject: "Inca",
object: "Machu Picchu",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_examples",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l4_p2_example_of_architecture_from_civilization_017",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p2",
relation: "example_of_architecture_from_civilization",
subject: "Medieval Ethiopian",
object: "Church of Saint George, Lalibela",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_examples",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l4_p2_example_of_architecture_from_civilization_018",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p2",
relation: "example_of_architecture_from_civilization",
subject: "Sudano-Sahelian",
object: "Great Mosque of Djenné",
answerKind: "short",
difficulty: 4,
distractorGroup: "civilization_architecture_examples",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_architecture_l4_p2",
concepts
};

export default conceptSet;
