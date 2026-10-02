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
id: "art_sculpture_l9_p4_function_or_feature_of_sculpture_001",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p4",
relation: "function_or_feature_of_sculpture",
subject: "Scale",
object: "influences whether a sculpture feels intimate, human-sized, imposing, or monumental",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_functions_features",
tags: ["sculpture", "sculpture_features_functions", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l9_p4_function_or_feature_of_sculpture_002",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p4",
relation: "function_or_feature_of_sculpture",
subject: "Proportion",
object: "creates harmony, realism, emphasis, or deliberate distortion through size relationships between parts",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_functions_features",
tags: ["sculpture", "sculpture_features_functions", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l9_p4_function_or_feature_of_sculpture_003",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p4",
relation: "function_or_feature_of_sculpture",
subject: "Balance",
object: "distributes visual weight so a sculpture feels stable or held in controlled tension",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_functions_features",
tags: ["sculpture", "sculpture_features_functions", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l9_p4_function_or_feature_of_sculpture_004",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p4",
relation: "function_or_feature_of_sculpture",
subject: "Rhythm",
object: "guides the eye through repeated forms, intervals, gestures, or directional patterns",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_functions_features",
tags: ["sculpture", "sculpture_features_functions", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l9_p4_function_or_feature_of_sculpture_005",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p4",
relation: "function_or_feature_of_sculpture",
subject: "Texture",
object: "affects how a sculpture's surface catches light and suggests tactile qualities such as roughness or smoothness",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_functions_features",
tags: ["sculpture", "sculpture_features_functions", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l9_p4_function_or_feature_of_sculpture_006",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p4",
relation: "function_or_feature_of_sculpture",
subject: "Viewer movement",
object: "allows different forms, spaces, and relationships to emerge as the viewer moves around or through a sculpture",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_functions_features",
tags: ["sculpture", "sculpture_features_functions", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l9_p4_function_or_feature_of_sculpture_007",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p4",
relation: "function_or_feature_of_sculpture",
subject: "Light and shadow",
object: "reveal depth, modeling, and surface variation through changing highlights and shadows",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_functions_features",
tags: ["sculpture", "sculpture_features_functions", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l9_p4_function_or_feature_of_sculpture_008",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p4",
relation: "function_or_feature_of_sculpture",
subject: "Implied movement",
object: "makes a static sculpture seem to twist, stride, turn, or fly through pose, gesture, and directional lines",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_functions_features",
tags: ["sculpture", "sculpture_features_functions", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l9_p4_function_or_feature_of_sculpture_009",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p4",
relation: "function_or_feature_of_sculpture",
subject: "Viewpoint",
object: "changes which forms, details, and relationships are emphasized from different viewing positions",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_functions_features",
tags: ["sculpture", "sculpture_features_functions", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l9_p4_function_or_feature_of_sculpture_010",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p4",
relation: "function_or_feature_of_sculpture",
subject: "Relationship to site",
object: "allows a sculpture's location to shape its visibility, scale, interpretation, and meaning",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_functions_features",
tags: ["sculpture", "sculpture_features_functions", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l9_p4_function_or_feature_of_sculpture_011",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p4",
relation: "function_or_feature_of_sculpture",
subject: "Monumentality",
object: "creates a sense of grandeur, authority, or significance through scale, form, setting, and presentation",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_functions_features",
tags: ["sculpture", "sculpture_features_functions", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l9_p4_function_or_feature_of_sculpture_012",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p4",
relation: "function_or_feature_of_sculpture",
subject: "Commemoration",
object: "preserves or celebrates the memory of a person, event, achievement, or idea",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_functions_features",
tags: ["sculpture", "sculpture_features_functions", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l9_p4_function_or_feature_of_sculpture_013",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p4",
relation: "function_or_feature_of_sculpture",
subject: "Religious devotion",
object: "provides a sacred focus for worship, prayer, ritual, or religious teaching",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_functions_features",
tags: ["sculpture", "sculpture_features_functions", "level_9"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l9_p4_function_or_feature_of_sculpture_014",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p4",
relation: "function_or_feature_of_sculpture",
subject: "Funerary purpose",
object: "marks burials, honors the dead, or expresses beliefs about death and the afterlife",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_functions_features",
tags: ["sculpture", "sculpture_features_functions", "level_9"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l9_p4_function_or_feature_of_sculpture_015",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p4",
relation: "function_or_feature_of_sculpture",
subject: "Political messaging",
object: "communicates authority, ideology, legitimacy, or shared civic values through public imagery",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_functions_features",
tags: ["sculpture", "sculpture_features_functions", "level_9"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l9_p4_function_or_feature_of_sculpture_016",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p4",
relation: "function_or_feature_of_sculpture",
subject: "Narrative",
object: "communicates stories from myth, religion, history, or everyday life through figures and sequences of scenes",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_functions_features",
tags: ["sculpture", "sculpture_features_functions", "level_9"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l9_p4_function_or_feature_of_sculpture_017",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p4",
relation: "function_or_feature_of_sculpture",
subject: "Portraiture",
object: "preserves or communicates a person's likeness, identity, status, or memory",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_functions_features",
tags: ["sculpture", "sculpture_features_functions", "level_9"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l9_p4_function_or_feature_of_sculpture_018",
topicId: "art",
subtopicId: "sculpture",
levelId: "l9",
partId: "p4",
relation: "function_or_feature_of_sculpture",
subject: "Architectural decoration",
object: "adds symbolic, narrative, or ornamental meaning to buildings and architectural spaces",
answerKind: "long",
difficulty: 9,
distractorGroup: "sculpture_functions_features",
tags: ["sculpture", "sculpture_features_functions", "level_9"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_sculpture_l9_p4",
concepts
};

export default conceptSet;
