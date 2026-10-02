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
id: "art_sculpture_l4_p1_civilization_or_culture_of_sculpture_001",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_sculpture",
subject: "Votive Statues from Tell Asmar",
object: "Sumerian",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_civilizations",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l4_p1_civilization_or_culture_of_sculpture_002",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_sculpture",
subject: "Victory Stele of Naram-Sin",
object: "Akkadian",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_civilizations",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l4_p1_civilization_or_culture_of_sculpture_003",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_sculpture",
subject: "Bust of Nefertiti",
object: "Ancient Egyptian",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_civilizations",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l4_p1_civilization_or_culture_of_sculpture_004",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_sculpture",
subject: "Lamassu",
object: "Assyrian",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_civilizations",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l4_p1_civilization_or_culture_of_sculpture_005",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_sculpture",
subject: "Persepolis Apadana Reliefs",
object: "Achaemenid Persian",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_civilizations",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l4_p1_civilization_or_culture_of_sculpture_006",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_sculpture",
subject: "Peplos Kore",
object: "Archaic Greek",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_civilizations",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l4_p1_civilization_or_culture_of_sculpture_007",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_sculpture",
subject: "Sarcophagus of the Spouses",
object: "Etruscan",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_civilizations",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l4_p1_civilization_or_culture_of_sculpture_008",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_sculpture",
subject: "Winged Victory of Samothrace",
object: "Hellenistic Greek",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_civilizations",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l4_p1_civilization_or_culture_of_sculpture_009",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_sculpture",
subject: "Augustus of Prima Porta",
object: "Roman",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_civilizations",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l4_p1_civilization_or_culture_of_sculpture_010",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_sculpture",
subject: "Lion Capital of Ashoka",
object: "Mauryan Indian",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_civilizations",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l4_p1_civilization_or_culture_of_sculpture_011",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_sculpture",
subject: "Fasting Buddha",
object: "Gandharan",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_civilizations",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l4_p1_civilization_or_culture_of_sculpture_012",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_sculpture",
subject: "Seated Buddha from Sarnath",
object: "Gupta Indian",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_civilizations",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l4_p1_civilization_or_culture_of_sculpture_013",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_sculpture",
subject: "Terracotta Army",
object: "Qin dynasty China",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_civilizations",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l4_p1_civilization_or_culture_of_sculpture_014",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_sculpture",
subject: "Vairocana Buddha at Longmen",
object: "Tang dynasty China",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_civilizations",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l4_p1_civilization_or_culture_of_sculpture_015",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_sculpture",
subject: "Olmec Colossal Head",
object: "Olmec",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_civilizations",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l4_p1_civilization_or_culture_of_sculpture_016",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_sculpture",
subject: "Yaxchilán Lintel 24",
object: "Maya",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_civilizations",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l4_p1_civilization_or_culture_of_sculpture_017",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_sculpture",
subject: "Coatlicue",
object: "Aztec",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_civilizations",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l4_p1_civilization_or_culture_of_sculpture_018",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p1",
relation: "civilization_or_culture_of_sculpture",
subject: "Lanzón",
object: "Chavín",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_civilizations",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_sculpture_l4_p1",
concepts
};

export default conceptSet;
