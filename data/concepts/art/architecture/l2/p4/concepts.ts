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
id: "art_architecture_l2_p4_known_for_style_001",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p4",
relation: "known_for_style",
subject: "Imhotep",
object: "Ancient Egyptian Architecture",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l2_p4_known_for_style_002",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p4",
relation: "known_for_style",
subject: "Ictinus",
object: "Classical Greek Architecture",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l2_p4_known_for_style_003",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p4",
relation: "known_for_style",
subject: "Filippo Brunelleschi",
object: "Renaissance Architecture",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l2_p4_known_for_style_004",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p4",
relation: "known_for_style",
subject: "Mimar Sinan",
object: "Ottoman Architecture",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l2_p4_known_for_style_005",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p4",
relation: "known_for_style",
subject: "Christopher Wren",
object: "English Baroque",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l2_p4_known_for_style_006",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p4",
relation: "known_for_style",
subject: "Antoni Gaudí",
object: "Catalan Modernism",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l2_p4_known_for_style_007",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p4",
relation: "known_for_style",
subject: "Louis Sullivan",
object: "Chicago School",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l2_p4_known_for_style_008",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p4",
relation: "known_for_style",
subject: "Frank Lloyd Wright",
object: "Organic Architecture",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l2_p4_known_for_style_009",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p4",
relation: "known_for_style",
subject: "Le Corbusier",
object: "Modernism",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l2_p4_known_for_style_010",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p4",
relation: "known_for_style",
subject: "Walter Gropius",
object: "Bauhaus",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l2_p4_known_for_style_011",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p4",
relation: "known_for_style",
subject: "Ludwig Mies van der Rohe",
object: "International Style",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l2_p4_known_for_style_012",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p4",
relation: "known_for_style",
subject: "William Van Alen",
object: "Art Deco",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l2_p4_known_for_style_013",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p4",
relation: "known_for_style",
subject: "Oscar Niemeyer",
object: "Brazilian Modernism",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l2_p4_known_for_style_014",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p4",
relation: "known_for_style",
subject: "Jørn Utzon",
object: "Expressionist Modernism",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l2_p4_known_for_style_015",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p4",
relation: "known_for_style",
subject: "I. M. Pei",
object: "Late Modernism",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l2_p4_known_for_style_016",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p4",
relation: "known_for_style",
subject: "Zaha Hadid",
object: "Deconstructivism",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l2_p4_known_for_style_017",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p4",
relation: "known_for_style",
subject: "Tadao Ando",
object: "Minimalism",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l2_p4_known_for_style_018",
topicId: "art",
subtopicId: "architecture",
levelId: "l2",
partId: "p4",
relation: "known_for_style",
subject: "Frank Gehry",
object: "Deconstructivism",
answerKind: "short",
difficulty: 2,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_2"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_architecture_l2_p4",
concepts
};

export default conceptSet;