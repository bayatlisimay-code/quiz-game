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
id: "art_sculpture_l5_p4_example_of_sculpture_technique_001",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p4",
relation: "example_of_sculpture_technique",
subject: "Marble carving",
object: "David",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l5_p4_example_of_sculpture_technique_002",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p4",
relation: "example_of_sculpture_technique",
subject: "Wood carving",
object: "Penitent Magdalene",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l5_p4_example_of_sculpture_technique_003",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p4",
relation: "example_of_sculpture_technique",
subject: "Bronze casting",
object: "The Thinker",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l5_p4_example_of_sculpture_technique_004",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p4",
relation: "example_of_sculpture_technique",
subject: "Rock-cut sculpture",
object: "Great Sphinx of Giza",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l5_p4_example_of_sculpture_technique_005",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p4",
relation: "example_of_sculpture_technique",
subject: "Relief carving",
object: "Ara Pacis Augustae",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l5_p4_example_of_sculpture_technique_006",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p4",
relation: "example_of_sculpture_technique",
subject: "Clay modeling",
object: "The Burghers of Calais",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l5_p4_example_of_sculpture_technique_007",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p4",
relation: "example_of_sculpture_technique",
subject: "Wax modeling",
object: "Little Dancer Aged Fourteen",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l5_p4_example_of_sculpture_technique_008",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p4",
relation: "example_of_sculpture_technique",
subject: "Terracotta sculpture",
object: "Sarcophagus of the Spouses",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l5_p4_example_of_sculpture_technique_009",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p4",
relation: "example_of_sculpture_technique",
subject: "Lost-wax casting",
object: "Perseus with the Head of Medusa",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l5_p4_example_of_sculpture_technique_010",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p4",
relation: "example_of_sculpture_technique",
subject: "Plaster casting",
object: "Ghost",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l5_p4_example_of_sculpture_technique_011",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p4",
relation: "example_of_sculpture_technique",
subject: "Repoussé",
object: "Statue of Liberty",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l5_p4_example_of_sculpture_technique_012",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p4",
relation: "example_of_sculpture_technique",
subject: "Welding",
object: "Hudson River Landscape",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l5_p4_example_of_sculpture_technique_013",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p4",
relation: "example_of_sculpture_technique",
subject: "Wire sculpture",
object: "Josephine Baker",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l5_p4_example_of_sculpture_technique_014",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p4",
relation: "example_of_sculpture_technique",
subject: "Metal fabrication",
object: "Cloud Gate",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l5_p4_example_of_sculpture_technique_015",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p4",
relation: "example_of_sculpture_technique",
subject: "Assemblage",
object: "Sky Cathedral",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l5_p4_example_of_sculpture_technique_016",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p4",
relation: "example_of_sculpture_technique",
subject: "Found-object sculpture",
object: "Bull's Head",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l5_p4_example_of_sculpture_technique_017",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p4",
relation: "example_of_sculpture_technique",
subject: "Soft sculpture",
object: "Floor Burger",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l5_p4_example_of_sculpture_technique_018",
topicId: "art",
subtopicId: "sculpture",
levelId: "l5",
partId: "p4",
relation: "example_of_sculpture_technique",
subject: "Glassblowing",
object: "Fiori di Como",
answerKind: "short",
difficulty: 5,
distractorGroup: "sculptures",
tags: ["sculpture", "sculpture_techniques", "level_5"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_sculpture_l5_p4",
concepts
};

export default conceptSet;
