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
id: "art_architecture_l9_p1_definition_of_design_principle_001",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p1",
relation: "definition_of_design_principle",
subject: "Symmetry",
object: "The mirrored arrangement of architectural elements on either side of a central line or around a point",
answerKind: "long",
difficulty: 9,
distractorGroup: "architectural_design_principle_definitions",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l9_p1_definition_of_design_principle_002",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p1",
relation: "definition_of_design_principle",
subject: "Asymmetry",
object: "An arrangement in which the parts of a composition differ rather than mirror each other",
answerKind: "long",
difficulty: 9,
distractorGroup: "architectural_design_principle_definitions",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l9_p1_definition_of_design_principle_003",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p1",
relation: "definition_of_design_principle",
subject: "Balance",
object: "The overall distribution of visual weight in a composition, whether symmetrical or asymmetrical",
answerKind: "long",
difficulty: 9,
distractorGroup: "architectural_design_principle_definitions",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l9_p1_definition_of_design_principle_004",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p1",
relation: "definition_of_design_principle",
subject: "Proportion",
object: "The size relationships between the different parts of a building and the whole",
answerKind: "long",
difficulty: 9,
distractorGroup: "architectural_design_principle_definitions",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l9_p1_definition_of_design_principle_005",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p1",
relation: "definition_of_design_principle",
subject: "Scale",
object: "The perceived size of a building or its parts in relation to the human body, surroundings, or other buildings",
answerKind: "long",
difficulty: 9,
distractorGroup: "architectural_design_principle_definitions",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l9_p1_definition_of_design_principle_006",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p1",
relation: "definition_of_design_principle",
subject: "Rhythm",
object: "The visual pattern created by repeated forms and the intervals between them",
answerKind: "long",
difficulty: 9,
distractorGroup: "architectural_design_principle_definitions",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_architecture_l9_p1_definition_of_design_principle_007",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p1",
relation: "definition_of_design_principle",
subject: "Contrast",
object: "The deliberate pairing of opposing forms, colors, materials, textures, or styles",
answerKind: "long",
difficulty: 9,
distractorGroup: "architectural_design_principle_definitions",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l9_p1_definition_of_design_principle_008",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p1",
relation: "definition_of_design_principle",
subject: "Hierarchy",
object: "The ranking of architectural elements so that some read as more important than others",
answerKind: "long",
difficulty: 9,
distractorGroup: "architectural_design_principle_definitions",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l9_p1_definition_of_design_principle_009",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p1",
relation: "definition_of_design_principle",
subject: "Emphasis",
object: "The design of one feature so that it becomes the dominant focal point of a composition",
answerKind: "long",
difficulty: 9,
distractorGroup: "architectural_design_principle_definitions",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l9_p1_definition_of_design_principle_010",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p1",
relation: "definition_of_design_principle",
subject: "Unity",
object: "The sense that all the parts of a building belong together as one coherent composition",
answerKind: "long",
difficulty: 9,
distractorGroup: "architectural_design_principle_definitions",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l9_p1_definition_of_design_principle_011",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p1",
relation: "definition_of_design_principle",
subject: "Ornament",
object: "Decorative pattern and detail used to enrich surfaces and express meaning or identity",
answerKind: "long",
difficulty: 9,
distractorGroup: "architectural_design_principle_definitions",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l9_p1_definition_of_design_principle_012",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p1",
relation: "definition_of_design_principle",
subject: "Axis",
object: "A strong organizing line that aligns spaces or elements and gives a composition direction",
answerKind: "long",
difficulty: 9,
distractorGroup: "architectural_design_principle_definitions",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_architecture_l9_p1_definition_of_design_principle_013",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p1",
relation: "definition_of_design_principle",
subject: "Monumentality",
object: "The quality of conveying grandeur, permanence, and ceremonial importance through form and composition",
answerKind: "long",
difficulty: 9,
distractorGroup: "architectural_design_principle_definitions",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l9_p1_definition_of_design_principle_014",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p1",
relation: "definition_of_design_principle",
subject: "Movement",
object: "The perceived directional energy or flow suggested by architectural forms",
answerKind: "long",
difficulty: 9,
distractorGroup: "architectural_design_principle_definitions",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l9_p1_definition_of_design_principle_015",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p1",
relation: "definition_of_design_principle",
subject: "Light",
object: "The deliberate use of natural or artificial light to shape space, surfaces, and atmosphere",
answerKind: "long",
difficulty: 9,
distractorGroup: "architectural_design_principle_definitions",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l9_p1_definition_of_design_principle_016",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p1",
relation: "definition_of_design_principle",
subject: "Transparency",
object: "The visual or spatial effect of allowing boundaries and layers to be perceived through or across one another",
answerKind: "long",
difficulty: 9,
distractorGroup: "architectural_design_principle_definitions",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l9_p1_definition_of_design_principle_017",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p1",
relation: "definition_of_design_principle",
subject: "Enclosure",
object: "The sense of a space being clearly defined and contained by the forms around it",
answerKind: "long",
difficulty: 9,
distractorGroup: "architectural_design_principle_definitions",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_architecture_l9_p1_definition_of_design_principle_018",
topicId: "art",
subtopicId: "architecture",
levelId: "l9",
partId: "p1",
relation: "definition_of_design_principle",
subject: "Integration with Nature",
object: "The visual and spatial connection of a building with its landscape and natural setting",
answerKind: "long",
difficulty: 9,
distractorGroup: "architectural_design_principle_definitions",
tags: ["architecture", "architecture_basics", "design_principles", "level_9"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_architecture_l9_p1",
concepts
};

export default conceptSet;