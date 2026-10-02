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
id: "art_architecture_l9_p2_visual_effect_of_design_principle_001",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p2",
relation: "visual_effect_of_design_principle",
subject: "Symmetry",
object: "Creates a sense of order, stability, and formality",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_effects",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l9_p2_visual_effect_of_design_principle_002",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p2",
relation: "visual_effect_of_design_principle",
subject: "Asymmetry",
object: "Creates visual tension, informality, and dynamic energy",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_effects",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l9_p2_visual_effect_of_design_principle_003",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p2",
relation: "visual_effect_of_design_principle",
subject: "Balance",
object: "Makes a composition feel stable and resolved rather than lopsided",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_effects",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l9_p2_visual_effect_of_design_principle_004",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p2",
relation: "visual_effect_of_design_principle",
subject: "Proportion",
object: "Makes the parts of a building feel harmoniously related to one another",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_effects",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l9_p2_visual_effect_of_design_principle_005",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p2",
relation: "visual_effect_of_design_principle",
subject: "Scale",
object: "Determines whether architecture feels intimate, human-sized, grand, or overwhelming",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_effects",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l9_p2_visual_effect_of_design_principle_006",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p2",
relation: "visual_effect_of_design_principle",
subject: "Rhythm",
object: "Guides the eye along a building in a steady, beat-like sequence",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_effects",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l9_p2_visual_effect_of_design_principle_007",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p2",
relation: "visual_effect_of_design_principle",
subject: "Contrast",
object: "Makes differences stand out and heightens the character of each element",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_effects",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l9_p2_visual_effect_of_design_principle_008",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p2",
relation: "visual_effect_of_design_principle",
subject: "Hierarchy",
object: "Shows at a glance which parts of a building matter most and which are secondary",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_effects",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l9_p2_visual_effect_of_design_principle_009",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p2",
relation: "visual_effect_of_design_principle",
subject: "Emphasis",
object: "Pulls the eye immediately to a single dominant feature",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_effects",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l9_p2_visual_effect_of_design_principle_010",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p2",
relation: "visual_effect_of_design_principle",
subject: "Unity",
object: "Makes varied parts read as one complete and coherent whole",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_effects",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l9_p2_visual_effect_of_design_principle_011",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p2",
relation: "visual_effect_of_design_principle",
subject: "Ornament",
object: "Adds visual richness, texture, and symbolic meaning to surfaces",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_effects",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l9_p2_visual_effect_of_design_principle_012",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p2",
relation: "visual_effect_of_design_principle",
subject: "Axis",
object: "Creates a strong sense of direction that leads views and visitors toward a goal",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_effects",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l9_p2_visual_effect_of_design_principle_013",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p2",
relation: "visual_effect_of_design_principle",
subject: "Monumentality",
object: "Makes architecture feel powerful, timeless, and solemn",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_effects",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l9_p2_visual_effect_of_design_principle_014",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p2",
relation: "visual_effect_of_design_principle",
subject: "Movement",
object: "Makes solid forms appear to sweep, soar, or flow as if in motion",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_effects",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l9_p2_visual_effect_of_design_principle_015",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p2",
relation: "visual_effect_of_design_principle",
subject: "Light",
object: "Shapes mood, reveals texture, and changes the perception of space",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_effects",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l9_p2_visual_effect_of_design_principle_016",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p2",
relation: "visual_effect_of_design_principle",
subject: "Transparency",
object: "Creates visual continuity between spaces and can blur the distinction between inside and outside",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_effects",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l9_p2_visual_effect_of_design_principle_017",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p2",
relation: "visual_effect_of_design_principle",
subject: "Enclosure",
object: "Creates a feeling of shelter, focus, and intimacy",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_effects",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l9_p2_visual_effect_of_design_principle_018",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p2",
relation: "visual_effect_of_design_principle",
subject: "Integration with Nature",
object: "Makes a building feel rooted in its landscape, framing views of terrain, water, or vegetation",
answerKind: "short",
difficulty: 9,
distractorGroup: "architectural_design_principle_effects",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_architecture_l9_p2",
concepts
};

export default conceptSet;