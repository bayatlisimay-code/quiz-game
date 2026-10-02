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
id: "art_sculpture_l3_p4_characteristic_of_sculpture_style_001",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "Ancient Egyptian sculpture",
object: "Rigid frontal poses and highly ordered body proportions",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l3_p4_characteristic_of_sculpture_style_002",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "Classical Greek sculpture",
object: "Idealized anatomy and balanced proportions",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l3_p4_characteristic_of_sculpture_style_003",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "Hellenistic sculpture",
object: "Dramatic movement and heightened emotional expression",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l3_p4_characteristic_of_sculpture_style_004",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "Roman sculpture",
object: "Individualized portraiture and commemorative political imagery",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l3_p4_characteristic_of_sculpture_style_005",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "Gothic sculpture",
object: "Elongated figures closely integrated with cathedral portals and columns",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l3_p4_characteristic_of_sculpture_style_006",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "Early Renaissance",
object: "Naturalistic anatomy and renewed use of Classical sculptural forms",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l3_p4_characteristic_of_sculpture_style_007",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "High Renaissance",
object: "Monumental idealized figures with harmonious anatomy",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l3_p4_characteristic_of_sculpture_style_008",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "Mannerism",
object: "Spiraling compositions and elongated, elegant bodies",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l3_p4_characteristic_of_sculpture_style_009",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "Baroque",
object: "Theatrical movement and intense emotional expression",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l3_p4_characteristic_of_sculpture_style_010",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "Neoclassicism",
object: "Polished idealized figures arranged in calm, controlled compositions",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l3_p4_characteristic_of_sculpture_style_011",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "Realism",
object: "Lifelike bodies shown with natural imperfections and believable physical presence",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l3_p4_characteristic_of_sculpture_style_012",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "Modernism",
object: "Simplified forms reduced toward their essential shapes",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l3_p4_characteristic_of_sculpture_style_013",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "Cubist sculpture",
object: "Fragmented geometric forms assembled from multiple viewpoints",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l3_p4_characteristic_of_sculpture_style_014",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "Futurism",
object: "Flowing forms that suggest speed, force, and continuous motion",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l3_p4_characteristic_of_sculpture_style_015",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "Surrealism",
object: "Familiar forms transformed into strange, dreamlike combinations",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l3_p4_characteristic_of_sculpture_style_016",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "Abstract sculpture",
object: "Nonrepresentational forms organized around mass, space, and shape",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l3_p4_characteristic_of_sculpture_style_017",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "Kinetic art",
object: "Balanced components that move through air currents or mechanical forces",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l3_p4_characteristic_of_sculpture_style_018",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "Minimalism",
object: "Simple geometric forms with little ornament or visible personal expression",
answerKind: "short",
difficulty: 3,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_sculpture_l3_p4",
concepts
};

export default conceptSet;
