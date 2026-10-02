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
"id": "art_design_l4_p2_example_of_design_field_001",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p2",
"relation": "example_of_design_field",
"subject": "Industrial Design",
"object": "Braun SK 4",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_field_examples",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l4_p2_example_of_design_field_002",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p2",
"relation": "example_of_design_field",
"subject": "Product Design",
"object": "Juicy Salif",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_field_examples",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l4_p2_example_of_design_field_003",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p2",
"relation": "example_of_design_field",
"subject": "Furniture Design",
"object": "Eames Lounge Chair",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_field_examples",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l4_p2_example_of_design_field_004",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p2",
"relation": "example_of_design_field",
"subject": "Graphic Design",
"object": "IBM 8-bar Logo",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_field_examples",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l4_p2_example_of_design_field_005",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p2",
"relation": "example_of_design_field",
"subject": "Typography",
"object": "Helvetica",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_field_examples",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l4_p2_example_of_design_field_006",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p2",
"relation": "example_of_design_field",
"subject": "Brand Identity Design",
"object": "Lufthansa Visual Identity",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_field_examples",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l4_p2_example_of_design_field_007",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p2",
"relation": "example_of_design_field",
"subject": "Interior Design",
"object": "SAS Royal Hotel Interiors",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_field_examples",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l4_p2_example_of_design_field_008",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p2",
"relation": "example_of_design_field",
"subject": "Packaging Design",
"object": "Coca-Cola Contour Bottle",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_field_examples",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l4_p2_example_of_design_field_009",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p2",
"relation": "example_of_design_field",
"subject": "Lighting Design",
"object": "Arco Floor Lamp",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_field_examples",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l4_p2_example_of_design_field_010",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p2",
"relation": "example_of_design_field",
"subject": "Information Design",
"object": "London Underground Map",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_field_examples",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l4_p2_example_of_design_field_011",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p2",
"relation": "example_of_design_field",
"subject": "Wayfinding Design",
"object": "British Road Sign System",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_field_examples",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l4_p2_example_of_design_field_012",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p2",
"relation": "example_of_design_field",
"subject": "Editorial Design",
"object": "Harper's Bazaar Magazine Layouts",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_field_examples",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l4_p2_example_of_design_field_013",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p2",
"relation": "example_of_design_field",
"subject": "Poster Design",
"object": "Vertigo Film Poster",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_field_examples",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l4_p2_example_of_design_field_014",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p2",
"relation": "example_of_design_field",
"subject": "Exhibition Design",
"object": "Mathematica Exhibition",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "design_field_examples",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l4_p2_example_of_design_field_015",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p2",
"relation": "example_of_design_field",
"subject": "Title Sequence Design",
"object": "Psycho Title Sequence",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "design_field_examples",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l4_p2_example_of_design_field_016",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p2",
"relation": "example_of_design_field",
"subject": "Interface Design",
"object": "Original Macintosh Icons",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "design_field_examples",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l4_p2_example_of_design_field_017",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p2",
"relation": "example_of_design_field",
"subject": "Book Design",
"object": "Penguin Books Cover System",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "design_field_examples",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l4_p2_example_of_design_field_018",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p2",
"relation": "example_of_design_field",
"subject": "Textile Design",
"object": "Strawberry Thief",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "design_field_examples",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "C",
"factPriority": "secondary"
}
];

const conceptSet: LocalConceptSet = {
id: "art_design_l4_p2",
concepts,
};

export default conceptSet;