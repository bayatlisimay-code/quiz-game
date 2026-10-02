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
id: "art_sculpture_l6_p2_location_of_sculpture_001",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p2",
relation: "location_of_sculpture",
subject: "Gates of Paradise",
object: "Museo dell'Opera del Duomo, Florence",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_locations",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l6_p2_location_of_sculpture_002",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p2",
relation: "location_of_sculpture",
subject: "Moses",
object: "San Pietro in Vincoli, Rome",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_locations",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l6_p2_location_of_sculpture_003",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p2",
relation: "location_of_sculpture",
subject: "Abduction of a Sabine Woman",
object: "Loggia dei Lanzi, Florence",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_locations",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l6_p2_location_of_sculpture_004",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p2",
relation: "location_of_sculpture",
subject: "Ecstasy of Saint Teresa",
object: "Santa Maria della Vittoria, Rome",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_locations",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l6_p2_location_of_sculpture_005",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p2",
relation: "location_of_sculpture",
subject: "Veiled Christ",
object: "Cappella Sansevero, Naples",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_locations",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l6_p2_location_of_sculpture_006",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p2",
relation: "location_of_sculpture",
subject: "Pauline Bonaparte as Venus Victrix",
object: "Galleria Borghese, Rome",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_locations",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "A",
factPriority: "core"
},
{
id: "art_sculpture_l6_p2_location_of_sculpture_007",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p2",
relation: "location_of_sculpture",
subject: "The Burghers of Calais",
object: "Calais Town Hall, Calais",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_locations",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l6_p2_location_of_sculpture_008",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p2",
relation: "location_of_sculpture",
subject: "Unique Forms of Continuity in Space",
object: "MoMA, New York",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_locations",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l6_p2_location_of_sculpture_009",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p2",
relation: "location_of_sculpture",
subject: "Guitar",
object: "MoMA, New York",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_locations",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l6_p2_location_of_sculpture_010",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p2",
relation: "location_of_sculpture",
subject: "Bird in Space",
object: "MoMA, New York",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_locations",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l6_p2_location_of_sculpture_011",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p2",
relation: "location_of_sculpture",
subject: "Reclining Figure: Festival",
object: "Scottish National Gallery of Modern Art, Edinburgh",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_locations",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l6_p2_location_of_sculpture_012",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p2",
relation: "location_of_sculpture",
subject: "Sky Cathedral",
object: "MoMA, New York",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_locations",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "B",
factPriority: "core"
},
{
id: "art_sculpture_l6_p2_location_of_sculpture_013",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p2",
relation: "location_of_sculpture",
subject: "Single Form",
object: "United Nations Headquarters, New York",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_locations",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l6_p2_location_of_sculpture_014",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p2",
relation: "location_of_sculpture",
subject: "Spiral Jetty",
object: "Great Salt Lake, Utah",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_locations",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l6_p2_location_of_sculpture_015",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p2",
relation: "location_of_sculpture",
subject: "Flamingo",
object: "Federal Plaza, Chicago",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_locations",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l6_p2_location_of_sculpture_016",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p2",
relation: "location_of_sculpture",
subject: "Spoonbridge and Cherry",
object: "Minneapolis Sculpture Garden, Minneapolis",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_locations",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l6_p2_location_of_sculpture_017",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p2",
relation: "location_of_sculpture",
subject: "Charging Bull",
object: "Bowling Green, New York",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_locations",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "C",
factPriority: "core"
},
{
id: "art_sculpture_l6_p2_location_of_sculpture_018",
topicId: "art",
subtopicId: "sculpture",
levelId: "l6",
partId: "p2",
relation: "location_of_sculpture",
subject: "Puppy",
object: "Guggenheim Museum Bilbao, Bilbao",
answerKind: "short",
difficulty: 6,
distractorGroup: "sculpture_locations",
tags: ["sculpture", "famous_sculptures", "level_6"],
introducedIn: "C",
factPriority: "core"
}
];

const conceptSet: LocalConceptSet = {
id: "art_sculpture_l6_p2",
concepts
};

export default conceptSet;
