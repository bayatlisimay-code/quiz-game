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
"id": "art_design_l4_p4_famous_designer_of_field_001",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p4",
"relation": "famous_designer_of_field",
"subject": "Industrial Design",
"object": "Dieter Rams",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_field_designers",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l4_p4_famous_designer_of_field_002",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p4",
"relation": "famous_designer_of_field",
"subject": "Product Design",
"object": "Philippe Starck",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_field_designers",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l4_p4_famous_designer_of_field_003",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p4",
"relation": "famous_designer_of_field",
"subject": "Furniture Design",
"object": "Charles and Ray Eames",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_field_designers",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l4_p4_famous_designer_of_field_004",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p4",
"relation": "famous_designer_of_field",
"subject": "Graphic Design",
"object": "Paul Rand",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_field_designers",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l4_p4_famous_designer_of_field_005",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p4",
"relation": "famous_designer_of_field",
"subject": "Typography",
"object": "Adrian Frutiger",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_field_designers",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l4_p4_famous_designer_of_field_006",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p4",
"relation": "famous_designer_of_field",
"subject": "Brand Identity Design",
"object": "Otl Aicher",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_field_designers",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l4_p4_famous_designer_of_field_007",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p4",
"relation": "famous_designer_of_field",
"subject": "Interior Design",
"object": "Arne Jacobsen",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_field_designers",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l4_p4_famous_designer_of_field_008",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p4",
"relation": "famous_designer_of_field",
"subject": "Packaging Design",
"object": "Walter Landor",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_field_designers",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l4_p4_famous_designer_of_field_009",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p4",
"relation": "famous_designer_of_field",
"subject": "Lighting Design",
"object": "Achille Castiglioni",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_field_designers",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l4_p4_famous_designer_of_field_010",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p4",
"relation": "famous_designer_of_field",
"subject": "Information Design",
"object": "Edward Tufte",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_field_designers",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l4_p4_famous_designer_of_field_011",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p4",
"relation": "famous_designer_of_field",
"subject": "Wayfinding Design",
"object": "Jock Kinneir and Margaret Calvert",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_field_designers",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l4_p4_famous_designer_of_field_012",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p4",
"relation": "famous_designer_of_field",
"subject": "Editorial Design",
"object": "Alexey Brodovitch",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_field_designers",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l4_p4_famous_designer_of_field_013",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p4",
"relation": "famous_designer_of_field",
"subject": "Poster Design",
"object": "A.M. Cassandre",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_field_designers",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l4_p4_famous_designer_of_field_014",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p4",
"relation": "famous_designer_of_field",
"subject": "Exhibition Design",
"object": "Herbert Bayer",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "design_field_designers",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l4_p4_famous_designer_of_field_015",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p4",
"relation": "famous_designer_of_field",
"subject": "Title Sequence Design",
"object": "Saul Bass",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "design_field_designers",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l4_p4_famous_designer_of_field_016",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p4",
"relation": "famous_designer_of_field",
"subject": "Interface Design",
"object": "Susan Kare",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "design_field_designers",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l4_p4_famous_designer_of_field_017",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p4",
"relation": "famous_designer_of_field",
"subject": "Book Design",
"object": "Jan Tschichold",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "design_field_designers",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l4_p4_famous_designer_of_field_018",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p4",
"relation": "famous_designer_of_field",
"subject": "Textile Design",
"object": "William Morris",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "design_field_designers",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "C",
"factPriority": "secondary"
}
];

const conceptSet: LocalConceptSet = {
id: "art_design_l4_p4",
concepts,
};

export default conceptSet;