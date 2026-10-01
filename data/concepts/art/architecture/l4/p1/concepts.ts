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
id: "art_architecture_l4_p1_civilization_or_culture_of_landmark_001",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_landmark",
subject: "Pyramid of Djoser",
object: "Ancient Egyptian",
answerKind: "short",
difficulty: 4,
distractorGroup: "architectural_civilizations",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l4_p1_civilization_or_culture_of_landmark_002",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_landmark",
subject: "Ziggurat of Ur",
object: "Sumerian",
answerKind: "short",
difficulty: 4,
distractorGroup: "architectural_civilizations",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l4_p1_civilization_or_culture_of_landmark_003",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_landmark",
subject: "Persepolis",
object: "Achaemenid Persian",
answerKind: "short",
difficulty: 4,
distractorGroup: "architectural_civilizations",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l4_p1_civilization_or_culture_of_landmark_004",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_landmark",
subject: "Parthenon",
object: "Ancient Greek",
answerKind: "short",
difficulty: 4,
distractorGroup: "architectural_civilizations",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l4_p1_civilization_or_culture_of_landmark_005",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_landmark",
subject: "Pantheon",
object: "Ancient Roman",
answerKind: "short",
difficulty: 4,
distractorGroup: "architectural_civilizations",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l4_p1_civilization_or_culture_of_landmark_006",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_landmark",
subject: "Hagia Sophia",
object: "Byzantine",
answerKind: "short",
difficulty: 4,
distractorGroup: "architectural_civilizations",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l4_p1_civilization_or_culture_of_landmark_007",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_landmark",
subject: "Dome of the Rock",
object: "Umayyad",
answerKind: "short",
difficulty: 4,
distractorGroup: "architectural_civilizations",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l4_p1_civilization_or_culture_of_landmark_008",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_landmark",
subject: "Alhambra",
object: "Nasrid",
answerKind: "short",
difficulty: 4,
distractorGroup: "architectural_civilizations",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l4_p1_civilization_or_culture_of_landmark_009",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_landmark",
subject: "Blue Mosque",
object: "Ottoman",
answerKind: "short",
difficulty: 4,
distractorGroup: "architectural_civilizations",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l4_p1_civilization_or_culture_of_landmark_010",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_landmark",
subject: "Taj Mahal",
object: "Mughal",
answerKind: "short",
difficulty: 4,
distractorGroup: "architectural_civilizations",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l4_p1_civilization_or_culture_of_landmark_011",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_landmark",
subject: "Brihadeeswarar Temple",
object: "Chola",
answerKind: "short",
difficulty: 4,
distractorGroup: "architectural_civilizations",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l4_p1_civilization_or_culture_of_landmark_012",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_landmark",
subject: "Angkor Wat",
object: "Khmer",
answerKind: "short",
difficulty: 4,
distractorGroup: "architectural_civilizations",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l4_p1_civilization_or_culture_of_landmark_013",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_landmark",
subject: "Forbidden City",
object: "Imperial Chinese",
answerKind: "short",
difficulty: 4,
distractorGroup: "architectural_civilizations",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l4_p1_civilization_or_culture_of_landmark_014",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_landmark",
subject: "Tōdai-ji",
object: "Japanese Buddhist",
answerKind: "short",
difficulty: 4,
distractorGroup: "architectural_civilizations",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l4_p1_civilization_or_culture_of_landmark_015",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_landmark",
subject: "Chichén Itzá",
object: "Maya",
answerKind: "short",
difficulty: 4,
distractorGroup: "architectural_civilizations",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l4_p1_civilization_or_culture_of_landmark_016",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_landmark",
subject: "Machu Picchu",
object: "Inca",
answerKind: "short",
difficulty: 4,
distractorGroup: "architectural_civilizations",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l4_p1_civilization_or_culture_of_landmark_017",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_landmark",
subject: "Church of Saint George, Lalibela",
object: "Medieval Ethiopian",
answerKind: "short",
difficulty: 4,
distractorGroup: "architectural_civilizations",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l4_p1_civilization_or_culture_of_landmark_018",
topicId: "art",
subtopicId: "architecture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_landmark",
subject: "Great Mosque of Djenné",
object: "Sudano-Sahelian",
answerKind: "short",
difficulty: 4,
distractorGroup: "architectural_civilizations",
tags: ["architecture", "landmarks_and_civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_architecture_l4_p1",
concepts
};

export default conceptSet;
