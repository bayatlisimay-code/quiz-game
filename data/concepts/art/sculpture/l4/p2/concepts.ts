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
id: "art_sculpture_l4_p2_example_of_sculpture_from_civilization_001",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p2",
relation: "example_of_sculpture_from_civilization",
subject: "Votive Statues from Tell Asmar",
object: "Statue of Gudea",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculptures",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l4_p2_example_of_sculpture_from_civilization_002",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p2",
relation: "example_of_sculpture_from_civilization",
subject: "Victory Stele of Naram-Sin",
object: "Head of an Akkadian Ruler",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculptures",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l4_p2_example_of_sculpture_from_civilization_003",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p2",
relation: "example_of_sculpture_from_civilization",
subject: "Bust of Nefertiti",
object: "Seated Scribe",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculptures",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l4_p2_example_of_sculpture_from_civilization_004",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p2",
relation: "example_of_sculpture_from_civilization",
subject: "Lamassu",
object: "Lion Hunt of Ashurbanipal",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculptures",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l4_p2_example_of_sculpture_from_civilization_005",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p2",
relation: "example_of_sculpture_from_civilization",
subject: "Persepolis Apadana Reliefs",
object: "Frieze of Archers",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculptures",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l4_p2_example_of_sculpture_from_civilization_006",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p2",
relation: "example_of_sculpture_from_civilization",
subject: "Peplos Kore",
object: "Anavysos Kouros",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculptures",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l4_p2_example_of_sculpture_from_civilization_007",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p2",
relation: "example_of_sculpture_from_civilization",
subject: "Sarcophagus of the Spouses",
object: "Apollo of Veii",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculptures",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l4_p2_example_of_sculpture_from_civilization_008",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p2",
relation: "example_of_sculpture_from_civilization",
subject: "Winged Victory of Samothrace",
object: "Venus de Milo",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculptures",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l4_p2_example_of_sculpture_from_civilization_009",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p2",
relation: "example_of_sculpture_from_civilization",
subject: "Augustus of Prima Porta",
object: "Ara Pacis Augustae",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculptures",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l4_p2_example_of_sculpture_from_civilization_010",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p2",
relation: "example_of_sculpture_from_civilization",
subject: "Lion Capital of Ashoka",
object: "Rampurva Bull Capital",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculptures",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l4_p2_example_of_sculpture_from_civilization_011",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p2",
relation: "example_of_sculpture_from_civilization",
subject: "Fasting Buddha",
object: "Standing Buddha from Gandhara",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculptures",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l4_p2_example_of_sculpture_from_civilization_012",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p2",
relation: "example_of_sculpture_from_civilization",
subject: "Seated Buddha from Sarnath",
object: "Standing Buddha from Mathura",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculptures",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l4_p2_example_of_sculpture_from_civilization_013",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p2",
relation: "example_of_sculpture_from_civilization",
subject: "Terracotta Army",
object: "Bronze Chariots and Horses",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculptures",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l4_p2_example_of_sculpture_from_civilization_014",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p2",
relation: "example_of_sculpture_from_civilization",
subject: "Vairocana Buddha at Longmen",
object: "Leshan Giant Buddha",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculptures",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l4_p2_example_of_sculpture_from_civilization_015",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p2",
relation: "example_of_sculpture_from_civilization",
subject: "Olmec Colossal Head",
object: "Las Limas Monument 1",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculptures",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l4_p2_example_of_sculpture_from_civilization_016",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p2",
relation: "example_of_sculpture_from_civilization",
subject: "Yaxchilán Lintel 24",
object: "Tikal Stela 31",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculptures",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l4_p2_example_of_sculpture_from_civilization_017",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p2",
relation: "example_of_sculpture_from_civilization",
subject: "Coatlicue",
object: "Coyolxauhqui Stone",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculptures",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l4_p2_example_of_sculpture_from_civilization_018",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p2",
relation: "example_of_sculpture_from_civilization",
subject: "Lanzón",
object: "Raimondi Stele",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculptures",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_sculpture_l4_p2",
concepts
};

export default conceptSet;
