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
id: "art_sculpture_l4_p4_characteristic_of_civilization_sculpture_001",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_sculpture",
subject: "Votive Statues from Tell Asmar",
object: "Stylized devotional figures with clasped hands and wide, attentive eyes",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculpture_characteristics",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l4_p4_characteristic_of_civilization_sculpture_002",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_sculpture",
subject: "Victory Stele of Naram-Sin",
object: "Royal imagery emphasizing military victory and the elevated status of kings",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculpture_characteristics",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l4_p4_characteristic_of_civilization_sculpture_003",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_sculpture",
subject: "Bust of Nefertiti",
object: "Idealized figures shaped by formal conventions, status, and religious purpose",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculpture_characteristics",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l4_p4_characteristic_of_civilization_sculpture_004",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_sculpture",
subject: "Lamassu",
object: "Colossal guardian figures and palace reliefs projecting royal power",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculpture_characteristics",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l4_p4_characteristic_of_civilization_sculpture_005",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_sculpture",
subject: "Persepolis Apadana Reliefs",
object: "Orderly processional reliefs presenting imperial authority and cultural unity",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculpture_characteristics",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l4_p4_characteristic_of_civilization_sculpture_006",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_sculpture",
subject: "Peplos Kore",
object: "Frontal standing figures with patterned forms and the Archaic smile",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculpture_characteristics",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l4_p4_characteristic_of_civilization_sculpture_007",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_sculpture",
subject: "Sarcophagus of the Spouses",
object: "Lively terracotta figures with expressive gestures and strong funerary associations",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculpture_characteristics",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l4_p4_characteristic_of_civilization_sculpture_008",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_sculpture",
subject: "Winged Victory of Samothrace",
object: "Dynamic poses, dramatic movement, and heightened emotional or visual impact",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculpture_characteristics",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l4_p4_characteristic_of_civilization_sculpture_009",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_sculpture",
subject: "Augustus of Prima Porta",
object: "Portraiture and public reliefs used for commemoration, status, and political messaging",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculpture_characteristics",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l4_p4_characteristic_of_civilization_sculpture_010",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_sculpture",
subject: "Lion Capital of Ashoka",
object: "Highly polished stone monuments using symbolic animals and imperial Buddhist imagery",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculpture_characteristics",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l4_p4_characteristic_of_civilization_sculpture_011",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_sculpture",
subject: "Fasting Buddha",
object: "Buddhist subjects rendered with Greco-Roman naturalism and deeply modeled drapery",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculpture_characteristics",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l4_p4_characteristic_of_civilization_sculpture_012",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_sculpture",
subject: "Seated Buddha from Sarnath",
object: "Serene idealized figures with refined surfaces and an emphasis on spiritual calm",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculpture_characteristics",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l4_p4_characteristic_of_civilization_sculpture_013",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_sculpture",
subject: "Terracotta Army",
object: "Large-scale funerary figures combining standardized production with individualized detail",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculpture_characteristics",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l4_p4_characteristic_of_civilization_sculpture_014",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_sculpture",
subject: "Vairocana Buddha at Longmen",
object: "Monumental Buddhist figures with full forms, calm expressions, and imposing scale",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculpture_characteristics",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l4_p4_characteristic_of_civilization_sculpture_015",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_sculpture",
subject: "Olmec Colossal Head",
object: "Monumental stone figures with powerful mass and distinctive human features",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculpture_characteristics",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l4_p4_characteristic_of_civilization_sculpture_016",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_sculpture",
subject: "Yaxchilán Lintel 24",
object: "Carved monuments combining rulers, ritual scenes, and hieroglyphic texts",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculpture_characteristics",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l4_p4_characteristic_of_civilization_sculpture_017",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_sculpture",
subject: "Coatlicue",
object: "Monumental sacred stone imagery combining human, animal, and symbolic forms",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculpture_characteristics",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l4_p4_characteristic_of_civilization_sculpture_018",
topicId: "art",
subtopicId: "sculpture",
levelId: "l4",
partId: "p4",
relation: "characteristic_of_civilization_sculpture",
subject: "Lanzón",
object: "Complex sacred imagery blending human, feline, serpent, and other animal features",
answerKind: "short",
difficulty: 4,
distractorGroup: "ancient_sculpture_characteristics",
tags: ["sculpture", "ancient_sculpture", "civilizations", "level_4"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_sculpture_l4_p4",
concepts
};

export default conceptSet;
