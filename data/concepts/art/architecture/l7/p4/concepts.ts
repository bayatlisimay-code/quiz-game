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
id: "art_architecture_l7_p4_known_for_style_001",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p4",
relation: "known_for_style",
subject: "Andrea Palladio",
object: "Renaissance Architecture",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l7_p4_known_for_style_002",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p4",
relation: "known_for_style",
subject: "Victor Horta",
object: "Art Nouveau",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l7_p4_known_for_style_003",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p4",
relation: "known_for_style",
subject: "Charles Garnier",
object: "Beaux-Arts",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l7_p4_known_for_style_004",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p4",
relation: "known_for_style",
subject: "Charles Rennie Mackintosh",
object: "Glasgow Style",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l7_p4_known_for_style_005",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p4",
relation: "known_for_style",
subject: "Gerrit Rietveld",
object: "De Stijl",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l7_p4_known_for_style_006",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p4",
relation: "known_for_style",
subject: "Eileen Gray",
object: "Modernism",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l7_p4_known_for_style_007",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p4",
relation: "known_for_style",
subject: "Alvar Aalto",
object: "Scandinavian Modernism",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l7_p4_known_for_style_008",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p4",
relation: "known_for_style",
subject: "Luis Barragán",
object: "Mexican Modernism",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l7_p4_known_for_style_009",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p4",
relation: "known_for_style",
subject: "Eero Saarinen",
object: "Expressionist Modernism",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l7_p4_known_for_style_010",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p4",
relation: "known_for_style",
subject: "Louis Kahn",
object: "Late Modernism",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l7_p4_known_for_style_011",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p4",
relation: "known_for_style",
subject: "Lina Bo Bardi",
object: "Brutalism",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l7_p4_known_for_style_012",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p4",
relation: "known_for_style",
subject: "Kisho Kurokawa",
object: "Metabolism",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l7_p4_known_for_style_013",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p4",
relation: "known_for_style",
subject: "Michael Graves",
object: "Postmodernism",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l7_p4_known_for_style_014",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p4",
relation: "known_for_style",
subject: "Norman Foster",
object: "High-Tech Architecture",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l7_p4_known_for_style_015",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p4",
relation: "known_for_style",
subject: "Rem Koolhaas",
object: "Deconstructivism",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l7_p4_known_for_style_016",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p4",
relation: "known_for_style",
subject: "Balkrishna Doshi",
object: "Critical Regionalism",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l7_p4_known_for_style_017",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p4",
relation: "known_for_style",
subject: "Hassan Fathy",
object: "Vernacular Architecture",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l7_p4_known_for_style_018",
topicId: "art",
subtopicId: "architecture",
levelId: "l7",
partId: "p4",
relation: "known_for_style",
subject: "Glenn Murcutt",
object: "Critical Regionalism",
answerKind: "short",
difficulty: 7,
distractorGroup: "architect_styles",
tags: ["architecture", "famous_architects", "level_7"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_architecture_l7_p4",
concepts
};

export default conceptSet;