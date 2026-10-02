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
id: "art_sculpture_l3_p1_definition_of_sculpture_style_001",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "Ancient Egyptian sculpture",
object: "a tradition of idealized, timeless figures made mainly for religious and funerary purposes",
answerKind: "long",
difficulty: 3,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l3_p1_definition_of_sculpture_style_002",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "Classical Greek sculpture",
object: "a Greek tradition seeking ideal human beauty through harmony, proportion, and naturalism",
answerKind: "long",
difficulty: 3,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l3_p1_definition_of_sculpture_style_003",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "Hellenistic sculpture",
object: "a later Greek tradition emphasizing drama, emotion, realism, and complex movement",
answerKind: "long",
difficulty: 3,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l3_p1_definition_of_sculpture_style_004",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "Roman sculpture",
object: "a tradition that adapted Greek models for portraiture, public monuments, and political imagery",
answerKind: "long",
difficulty: 3,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l3_p1_definition_of_sculpture_style_005",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "Gothic sculpture",
object: "a medieval style of increasingly naturalistic religious figures integrated into cathedral architecture",
answerKind: "long",
difficulty: 3,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l3_p1_definition_of_sculpture_style_006",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "Early Renaissance",
object: "a 15th-century Italian style that revived Classical naturalism and the freestanding human figure",
answerKind: "long",
difficulty: 3,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l3_p1_definition_of_sculpture_style_007",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "High Renaissance",
object: "a Renaissance style combining idealized anatomy, harmony, and monumental grandeur",
answerKind: "long",
difficulty: 3,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l3_p1_definition_of_sculpture_style_008",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "Mannerism",
object: "a 16th-century style favoring elegance, exaggeration, and deliberate artificiality over natural balance",
answerKind: "long",
difficulty: 3,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l3_p1_definition_of_sculpture_style_009",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "Baroque",
object: "a 17th-century style emphasizing drama, movement, and emotional intensity",
answerKind: "long",
difficulty: 3,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l3_p1_definition_of_sculpture_style_010",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "Neoclassicism",
object: "an 18th- and 19th-century style inspired by the clarity and restraint of ancient Greek and Roman art",
answerKind: "long",
difficulty: 3,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l3_p1_definition_of_sculpture_style_011",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "Realism",
object: "a 19th-century approach depicting people and bodies without Classical idealization",
answerKind: "long",
difficulty: 3,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l3_p1_definition_of_sculpture_style_012",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "Modernism",
object: "a break from academic tradition through simplification, abstraction, and experimentation with form",
answerKind: "long",
difficulty: 3,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l3_p1_definition_of_sculpture_style_013",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "Cubist sculpture",
object: "an early-20th-century approach that breaks objects into geometric parts and multiple viewpoints",
answerKind: "long",
difficulty: 3,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l3_p1_definition_of_sculpture_style_014",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "Futurism",
object: "an early-20th-century Italian movement celebrating speed, energy, technology, and modern life",
answerKind: "long",
difficulty: 3,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l3_p1_definition_of_sculpture_style_015",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "Surrealism",
object: "a movement exploring dreams, the unconscious, and unexpected combinations of familiar things",
answerKind: "long",
difficulty: 3,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l3_p1_definition_of_sculpture_style_016",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "Abstract sculpture",
object: "sculpture that emphasizes shape, space, material, and form rather than realistic representation",
answerKind: "long",
difficulty: 3,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l3_p1_definition_of_sculpture_style_017",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "Kinetic art",
object: "art that incorporates actual or perceived movement as part of the work",
answerKind: "long",
difficulty: 3,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l3_p1_definition_of_sculpture_style_018",
topicId: "art",
subtopicId: "sculpture",
levelId: "l3",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "Minimalism",
object: "a movement using simple geometric forms, repetition, and reduced visual complexity",
answerKind: "long",
difficulty: 3,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_3"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_sculpture_l3_p1",
concepts
};

export default conceptSet;
