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
"id": "art_design_l4_p1_core_feature_of_design_field_001",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p1",
"relation": "core_feature_of_design_field",
"subject": "Industrial Design",
"object": "Designing mass-produced products with a focus on manufacturing and engineering",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_field_features",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l4_p1_core_feature_of_design_field_002",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p1",
"relation": "core_feature_of_design_field",
"subject": "Product Design",
"object": "Shaping everyday objects around how people use and experience them",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_field_features",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l4_p1_core_feature_of_design_field_003",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p1",
"relation": "core_feature_of_design_field",
"subject": "Furniture Design",
"object": "Creating functional furnishings for seating, storage, work, and living",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_field_features",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l4_p1_core_feature_of_design_field_004",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p1",
"relation": "core_feature_of_design_field",
"subject": "Graphic Design",
"object": "Communicating ideas visually through images, type, color, and layout",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_field_features",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l4_p1_core_feature_of_design_field_005",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p1",
"relation": "core_feature_of_design_field",
"subject": "Typography",
"object": "Designing and arranging type for effective visual communication",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_field_features",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l4_p1_core_feature_of_design_field_006",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p1",
"relation": "core_feature_of_design_field",
"subject": "Brand Identity Design",
"object": "Creating a consistent visual identity for an organization or brand",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_field_features",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l4_p1_core_feature_of_design_field_007",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p1",
"relation": "core_feature_of_design_field",
"subject": "Interior Design",
"object": "Shaping indoor environments through space, materials, furnishings, and lighting",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_field_features",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l4_p1_core_feature_of_design_field_008",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p1",
"relation": "core_feature_of_design_field",
"subject": "Packaging Design",
"object": "Designing containers and visual packaging that protect and present products",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_field_features",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l4_p1_core_feature_of_design_field_009",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p1",
"relation": "core_feature_of_design_field",
"subject": "Lighting Design",
"object": "Designing light sources and fixtures for functional and visual effects",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_field_features",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l4_p1_core_feature_of_design_field_010",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p1",
"relation": "core_feature_of_design_field",
"subject": "Information Design",
"object": "Organizing complex information so it can be understood quickly and clearly",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_field_features",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l4_p1_core_feature_of_design_field_011",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p1",
"relation": "core_feature_of_design_field",
"subject": "Wayfinding Design",
"object": "Guiding people through spaces using signs, symbols, maps, and visual cues",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_field_features",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l4_p1_core_feature_of_design_field_012",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p1",
"relation": "core_feature_of_design_field",
"subject": "Editorial Design",
"object": "Structuring text and images for magazines, newspapers, and books",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_field_features",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l4_p1_core_feature_of_design_field_013",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p1",
"relation": "core_feature_of_design_field",
"subject": "Poster Design",
"object": "Combining image and type to communicate a message in a single display",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "design_field_features",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l4_p1_core_feature_of_design_field_014",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p1",
"relation": "core_feature_of_design_field",
"subject": "Exhibition Design",
"object": "Creating spatial displays that communicate content to visitors",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "design_field_features",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l4_p1_core_feature_of_design_field_015",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p1",
"relation": "core_feature_of_design_field",
"subject": "Title Sequence Design",
"object": "Designing animated opening credits that set the tone of a film",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "design_field_features",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l4_p1_core_feature_of_design_field_016",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p1",
"relation": "core_feature_of_design_field",
"subject": "Interface Design",
"object": "Designing visual controls and layouts for interaction with digital systems",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "design_field_features",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l4_p1_core_feature_of_design_field_017",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p1",
"relation": "core_feature_of_design_field",
"subject": "Glass Design",
"object": "Shaping glass into functional and decorative objects",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "design_field_features",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l4_p1_core_feature_of_design_field_018",
"topicId": "art",
"subtopicId": "design",
"levelId": "l4",
"partId": "p1",
"relation": "core_feature_of_design_field",
"subject": "Textile Design",
"object": "Designing patterns and structures for woven or printed fabrics",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "design_field_features",
"tags": ["design", "design_fields", "level_4"],
"introducedIn": "C",
"factPriority": "secondary"
}
];

const conceptSet: LocalConceptSet = {
  id: "art_design_l4_p1",
  concepts,
};

export default conceptSet;