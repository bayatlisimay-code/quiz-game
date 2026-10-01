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
id: "art_architecture_l5_p2_visual_feature_of_architectural_element_001",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p2",
relation: "visual_feature_of_architectural_element",
subject: "Arch",
object: "A curved top over an opening, rising between two upright sides",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_visual_features",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l5_p2_visual_feature_of_architectural_element_002",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p2",
relation: "visual_feature_of_architectural_element",
subject: "Dome",
object: "A large rounded, half-sphere shape crowning a building",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_visual_features",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l5_p2_visual_feature_of_architectural_element_003",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p2",
relation: "visual_feature_of_architectural_element",
subject: "Column",
object: "A tall cylindrical shaft, often with a base and a decorative top",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_visual_features",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l5_p2_visual_feature_of_architectural_element_004",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p2",
relation: "visual_feature_of_architectural_element",
subject: "Capital",
object: "A widened block at the top of a column, often carved with scrolls or leaves",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_visual_features",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l5_p2_visual_feature_of_architectural_element_005",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p2",
relation: "visual_feature_of_architectural_element",
subject: "Façade",
object: "The decorated front wall facing the street or main entrance",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_visual_features",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l5_p2_visual_feature_of_architectural_element_006",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p2",
relation: "visual_feature_of_architectural_element",
subject: "Portico",
object: "A roofed porch of columns, often topped by a triangular gable",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_visual_features",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l5_p2_visual_feature_of_architectural_element_007",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p2",
relation: "visual_feature_of_architectural_element",
subject: "Pediment",
object: "A low triangle framed by moldings, often filled with sculpture",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_visual_features",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l5_p2_visual_feature_of_architectural_element_008",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p2",
relation: "visual_feature_of_architectural_element",
subject: "Colonnade",
object: "A long line of columns, sometimes curving around an open space",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_visual_features",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l5_p2_visual_feature_of_architectural_element_009",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p2",
relation: "visual_feature_of_architectural_element",
subject: "Arcade",
object: "A row of repeated arches, often forming a covered walkway",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_visual_features",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l5_p2_visual_feature_of_architectural_element_010",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p2",
relation: "visual_feature_of_architectural_element",
subject: "Courtyard",
object: "An unroofed area ringed by walls or galleries, often with fountains or gardens",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_visual_features",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l5_p2_visual_feature_of_architectural_element_011",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p2",
relation: "visual_feature_of_architectural_element",
subject: "Balcony",
object: "A railed ledge jutting out from an upper-floor window or door",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_visual_features",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l5_p2_visual_feature_of_architectural_element_012",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p2",
relation: "visual_feature_of_architectural_element",
subject: "Vault",
object: "A curved stone ceiling running overhead, sometimes crossed by decorative ribs",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_visual_features",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l5_p2_visual_feature_of_architectural_element_013",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p2",
relation: "visual_feature_of_architectural_element",
subject: "Flying Buttress",
object: "A slender outside arch leaping from a high wall to a separate pier",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_visual_features",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l5_p2_visual_feature_of_architectural_element_014",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p2",
relation: "visual_feature_of_architectural_element",
subject: "Rose Window",
object: "A round window divided into petal-like sections of stained glass",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_visual_features",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l5_p2_visual_feature_of_architectural_element_015",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p2",
relation: "visual_feature_of_architectural_element",
subject: "Bell Tower",
object: "A tall tower with open arched windows near the top where bells hang",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_visual_features",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l5_p2_visual_feature_of_architectural_element_016",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p2",
relation: "visual_feature_of_architectural_element",
subject: "Spire",
object: "A narrow cone or pyramid shape ending in a sharp point",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_visual_features",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l5_p2_visual_feature_of_architectural_element_017",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p2",
relation: "visual_feature_of_architectural_element",
subject: "Minaret",
object: "A tall, slender tower with small balconies, often topped by a pointed cap",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_visual_features",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l5_p2_visual_feature_of_architectural_element_018",
topicId: "art",
subtopicId: "architecture",
levelId: "l5",
partId: "p2",
relation: "visual_feature_of_architectural_element",
subject: "Cornice",
object: "A projecting ledge running along the top of a building like a crown",
answerKind: "short",
difficulty: 5,
distractorGroup: "architectural_element_visual_features",
tags: ["architecture", "architecture_basics", "level_5"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_architecture_l5_p2",
concepts
};

export default conceptSet;
