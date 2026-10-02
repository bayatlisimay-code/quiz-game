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
id: "art_sculpture_l8_p1_definition_of_sculpture_style_001",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "Symbolism",
object: "a late-19th-century movement using mythological, dreamlike, and psychological imagery to express ideas and emotions rather than describe reality",
answerKind: "long",
difficulty: 8,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l8_p1_definition_of_sculpture_style_002",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "Vorticism",
object: "a short-lived British avant-garde movement of the 1910s that emphasized machine-age energy through angular, geometric forms",
answerKind: "long",
difficulty: 8,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l8_p1_definition_of_sculpture_style_003",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "Dada",
object: "an anti-art movement born during World War I that rejected artistic conventions through absurdity, provocation, and readymades",
answerKind: "long",
difficulty: 8,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l8_p1_definition_of_sculpture_style_004",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "Constructivism",
object: "an early-20th-century movement originating in Russia that built abstract works from geometric structures and modern materials",
answerKind: "long",
difficulty: 8,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l8_p1_definition_of_sculpture_style_005",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "Harlem Renaissance",
object: "a 1920s and 1930s African American cultural movement in which artists celebrated Black identity, history, and experience",
answerKind: "long",
difficulty: 8,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l8_p1_definition_of_sculpture_style_006",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "Abstract Expressionism",
object: "a postwar American movement emphasizing expressive abstraction, individual gesture, and the physical presence of materials",
answerKind: "long",
difficulty: 8,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l8_p1_definition_of_sculpture_style_007",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "Assemblage",
object: "a sculptural approach that combines found or manufactured objects into a new three-dimensional composition",
answerKind: "long",
difficulty: 8,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l8_p1_definition_of_sculpture_style_008",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "Nouveau Réalisme",
object: "a French-founded movement of 1960 that directly incorporated or transformed objects and materials from everyday life",
answerKind: "long",
difficulty: 8,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l8_p1_definition_of_sculpture_style_009",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "Pop art",
object: "a movement that drew on consumer culture, advertising, mass media, and familiar everyday objects",
answerKind: "long",
difficulty: 8,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l8_p1_definition_of_sculpture_style_010",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "Conceptual art",
object: "an approach in which the idea or proposition behind a work is more important than traditional craftsmanship or appearance",
answerKind: "long",
difficulty: 8,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l8_p1_definition_of_sculpture_style_011",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "Postminimalism",
object: "a reaction to Minimalism that retained simple forms while embracing irregularity, flexible materials, process, and bodily qualities",
answerKind: "long",
difficulty: 8,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l8_p1_definition_of_sculpture_style_012",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "Arte Povera",
object: "an Italian movement of the late 1960s that used humble, everyday, natural, or industrial materials to challenge conventional artistic value",
answerKind: "long",
difficulty: 8,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l8_p1_definition_of_sculpture_style_013",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "Process art",
object: "an approach in which the actions of making and the behavior of materials are central to the finished work",
answerKind: "long",
difficulty: 8,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l8_p1_definition_of_sculpture_style_014",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "Hyperrealism",
object: "an approach that creates figures with an exceptionally lifelike appearance and carefully simulated physical detail",
answerKind: "long",
difficulty: 8,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l8_p1_definition_of_sculpture_style_015",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "Land art",
object: "an approach that uses landscape and natural materials as the site or medium of the artwork",
answerKind: "long",
difficulty: 8,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l8_p1_definition_of_sculpture_style_016",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "Site-specific art",
object: "art created in response to one particular location, with meaning shaped by its relationship to that site",
answerKind: "long",
difficulty: 8,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l8_p1_definition_of_sculpture_style_017",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "New British Sculpture",
object: "a loose group of British sculptors emerging in the 1980s who renewed object-based sculpture through diverse materials, imagery, and fabrication",
answerKind: "long",
difficulty: 8,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l8_p1_definition_of_sculpture_style_018",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p1",
relation: "definition_of_sculpture_style",
subject: "Installation art",
object: "an approach in which artworks are arranged to occupy or transform a space that viewers experience physically",
answerKind: "long",
difficulty: 8,
distractorGroup: "sculpture_style_definitions",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_sculpture_l8_p1",
concepts
};

export default conceptSet;
