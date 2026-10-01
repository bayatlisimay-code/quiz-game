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
id: "art_architecture_l8_p1_definition_of_architectural_style_001",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "Arts and Crafts",
object: "A late-19th-century movement favoring craftsmanship, natural materials, and simple design in reaction to industrial mass production",
answerKind: "long",
difficulty: 8,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l8_p1_definition_of_architectural_style_002",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "Vienna Secession",
object: "An Austrian movement founded in 1897 that broke from academic tradition, combining geometric clarity with stylized decorative art",
answerKind: "long",
difficulty: 8,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l8_p1_definition_of_architectural_style_003",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "Prairie School",
object: "An early-20th-century American movement emphasizing horizontal forms, open interiors, and harmony with the flat Midwestern landscape",
answerKind: "long",
difficulty: 8,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l8_p1_definition_of_architectural_style_004",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "Expressionism",
object: "An early-20th-century movement, later revived in postwar works, using dramatic sculptural forms to convey emotion and symbolism",
answerKind: "long",
difficulty: 8,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l8_p1_definition_of_architectural_style_005",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "De Stijl",
object: "A Dutch avant-garde movement founded in 1917 that reduced design to abstract planes, straight lines, and primary colors",
answerKind: "long",
difficulty: 8,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l8_p1_definition_of_architectural_style_006",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "Constructivism",
object: "A 1920s Soviet avant-garde movement that used dynamic geometry and industrial imagery to express a new revolutionary society",
answerKind: "long",
difficulty: 8,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l8_p1_definition_of_architectural_style_007",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "Modernism",
object: "The broad 20th-century movement that rejected historical imitation and ornament in favor of function, abstraction, and new materials",
answerKind: "long",
difficulty: 8,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l8_p1_definition_of_architectural_style_008",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "International Style",
object: "A strand of Modernism, dominant from the 1920s to the 1960s, that spread a universal design language of rectilinear volumes, glass, and steel",
answerKind: "long",
difficulty: 8,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l8_p1_definition_of_architectural_style_009",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "Brazilian Modernism",
object: "A mid-20th-century Brazilian movement that transformed Modernism with sweeping curves, sculptural concrete, and adaptations to a tropical climate",
answerKind: "long",
difficulty: 8,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l8_p1_definition_of_architectural_style_010",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "Scandinavian Modernism",
object: "A Nordic modern movement combining functional simplicity with natural materials, abundant light, human scale, and warmth",
answerKind: "long",
difficulty: 8,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l8_p1_definition_of_architectural_style_011",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "Mid-century Modern",
object: "A postwar approach, especially in American homes, favoring lighter, human-scaled modern design, open plans, and connection with nature",
answerKind: "long",
difficulty: 8,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l8_p1_definition_of_architectural_style_012",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "Brutalism",
object: "A mid-20th-century movement known for monumental geometric massing, repetitive forms, and the bold expression of raw materials",
answerKind: "long",
difficulty: 8,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l8_p1_definition_of_architectural_style_013",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "Metabolism",
object: "A postwar Japanese movement that imagined buildings as growing, changeable megastructures made of modular units",
answerKind: "long",
difficulty: 8,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l8_p1_definition_of_architectural_style_014",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "Postmodernism",
object: "A late-20th-century reaction against strict Modernism that reintroduced historical references, ornament, symbolism, and playful forms",
answerKind: "long",
difficulty: 8,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l8_p1_definition_of_architectural_style_015",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "High-Tech Architecture",
object: "A late-20th-century movement that celebrated technology by making structure and building services part of the visual design",
answerKind: "long",
difficulty: 8,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l8_p1_definition_of_architectural_style_016",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "Critical Regionalism",
object: "A late-20th-century approach that grounds modern architecture in local climate, landscape, materials, and cultural identity",
answerKind: "long",
difficulty: 8,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l8_p1_definition_of_architectural_style_017",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "Deconstructivism",
object: "A late-20th-century movement that disrupts traditional composition through fragmentation, distorted geometry, and visual instability",
answerKind: "long",
difficulty: 8,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l8_p1_definition_of_architectural_style_018",
topicId: "art",
subtopicId: "architecture",
levelId: "l8",
partId: "p1",
relation: "definition_of_architectural_style",
subject: "Parametricism",
object: "A 21st-century approach using digitally generated design to create fluid, continuous forms whose elements vary smoothly across a building",
answerKind: "long",
difficulty: 8,
distractorGroup: "architectural_style_definitions",
tags: ["architecture", "architectural_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_architecture_l8_p1",
concepts
};

export default conceptSet;
