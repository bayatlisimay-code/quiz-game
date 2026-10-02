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
id: "art_sculpture_l8_p4_characteristic_of_sculpture_style_001",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "Symbolism",
object: "Mysterious, emotionally charged figures drawn from myth, dreams, and the inner mind",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l8_p4_characteristic_of_sculpture_style_002",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "Vorticism",
object: "Hard, angular, machine-like forms suggesting mechanical power and modern energy",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l8_p4_characteristic_of_sculpture_style_003",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "Dada",
object: "Everyday objects presented or altered to challenge traditional ideas of art",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l8_p4_characteristic_of_sculpture_style_004",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "Constructivism",
object: "Open geometric structures that emphasize space, tension, and industrial materials",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l8_p4_characteristic_of_sculpture_style_005",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "Harlem Renaissance",
object: "Figurative works emphasizing Black identity, dignity, history, music, and cultural experience",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l8_p4_characteristic_of_sculpture_style_006",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "Abstract Expressionism",
object: "Dynamic abstract forms that emphasize material, scale, gesture, and spatial presence",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l8_p4_characteristic_of_sculpture_style_007",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "Assemblage",
object: "Found or manufactured elements stacked, boxed, or joined into layered structures",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l8_p4_characteristic_of_sculpture_style_008",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "Nouveau Réalisme",
object: "Real objects accumulated, compressed, or transformed into new sculptural forms",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l8_p4_characteristic_of_sculpture_style_009",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "Pop art",
object: "Everyday consumer objects enlarged, repeated, or playfully transformed",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l8_p4_characteristic_of_sculpture_style_010",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "Conceptual art",
object: "Ideas, language, documentation, or ordinary objects used to question how art creates meaning",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l8_p4_characteristic_of_sculpture_style_011",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "Postminimalism",
object: "Soft, irregular, repeated forms that resist strict geometric order",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l8_p4_characteristic_of_sculpture_style_012",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "Arte Povera",
object: "Raw or ordinary materials such as rags, earth, wood, stone, and metal placed in unexpected combinations",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l8_p4_characteristic_of_sculpture_style_013",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "Process art",
object: "Gravity, cutting, hanging, repetition, and material change remain visible as part of the artwork",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l8_p4_characteristic_of_sculpture_style_014",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "Hyperrealism",
object: "Life-size figures use realistic surfaces, clothing, hair, and detail to imitate ordinary people",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l8_p4_characteristic_of_sculpture_style_015",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "Land art",
object: "Large-scale interventions are created directly in natural terrain",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l8_p4_characteristic_of_sculpture_style_016",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "Site-specific art",
object: "The work's form and meaning depend on the physical, social, or architectural conditions of its location",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l8_p4_characteristic_of_sculpture_style_017",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "New British Sculpture",
object: "Everyday and industrial materials are transformed into bold objects with figurative, symbolic, or cultural references",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l8_p4_characteristic_of_sculpture_style_018",
topicId: "art",
subtopicId: "sculpture",
levelId: "l8",
partId: "p4",
relation: "characteristic_of_sculpture_style",
subject: "Installation art",
object: "Immersive environments are experienced by moving through, around, or within the work",
answerKind: "short",
difficulty: 8,
distractorGroup: "sculpture_style_characteristics",
tags: ["sculpture", "sculpture_styles", "level_8"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_sculpture_l8_p4",
concepts
};

export default conceptSet;
