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
"id": "art_design_l9_p1_designer_of_interior_or_identity_001",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p1",
"relation": "designer_of_interior_or_identity",
"subject": "SAS Royal Hotel Interior",
"object": "Arne Jacobsen",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "interior_identity_designers",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l9_p1_designer_of_interior_or_identity_002",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p1",
"relation": "designer_of_interior_or_identity",
"subject": "IBM Visual Identity",
"object": "Paul Rand",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "interior_identity_designers",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l9_p1_designer_of_interior_or_identity_003",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p1",
"relation": "designer_of_interior_or_identity",
"subject": "Lufthansa Visual Identity",
"object": "Otl Aicher",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "interior_identity_designers",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l9_p1_designer_of_interior_or_identity_004",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p1",
"relation": "designer_of_interior_or_identity",
"subject": "Miller House Interior",
"object": "Alexander Girard",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "interior_identity_designers",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l9_p1_designer_of_interior_or_identity_005",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p1",
"relation": "designer_of_interior_or_identity",
"subject": "NASA 1975 Visual Identity",
"object": "Richard Danne and Bruce Blackburn",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "interior_identity_designers",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l9_p1_designer_of_interior_or_identity_006",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p1",
"relation": "designer_of_interior_or_identity",
"subject": "Schröder House Interior",
"object": "Gerrit Rietveld",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "interior_identity_designers",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l9_p1_designer_of_interior_or_identity_007",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p1",
"relation": "designer_of_interior_or_identity",
"subject": "London Underground Visual Identity",
"object": "Edward Johnston",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "interior_identity_designers",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l9_p1_designer_of_interior_or_identity_008",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p1",
"relation": "designer_of_interior_or_identity",
"subject": "Knoll New York Showroom Interior",
"object": "Florence Knoll",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "interior_identity_designers",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l9_p1_designer_of_interior_or_identity_009",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p1",
"relation": "designer_of_interior_or_identity",
"subject": "British Rail Corporate Identity",
"object": "Design Research Unit",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "interior_identity_designers",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l9_p1_designer_of_interior_or_identity_010",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p1",
"relation": "designer_of_interior_or_identity",
"subject": "Café Costes Interior",
"object": "Philippe Starck",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "interior_identity_designers",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l9_p1_designer_of_interior_or_identity_011",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p1",
"relation": "designer_of_interior_or_identity",
"subject": "American Airlines 1967 Visual Identity",
"object": "Massimo Vignelli",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "interior_identity_designers",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l9_p1_designer_of_interior_or_identity_012",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p1",
"relation": "designer_of_interior_or_identity",
"subject": "Hill House Interior",
"object": "Charles Rennie Mackintosh",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "interior_identity_designers",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l9_p1_designer_of_interior_or_identity_013",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p1",
"relation": "designer_of_interior_or_identity",
"subject": "Mobil Visual Identity",
"object": "Ivan Chermayeff and Tom Geismar",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "interior_identity_designers",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l9_p1_designer_of_interior_or_identity_014",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p1",
"relation": "designer_of_interior_or_identity",
"subject": "Velvet and Silk Café Interior",
"object": "Lilly Reich and Ludwig Mies van der Rohe",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "interior_identity_designers",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l9_p1_designer_of_interior_or_identity_015",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p1",
"relation": "designer_of_interior_or_identity",
"subject": "Bell System 1969 Visual Identity",
"object": "Saul Bass",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "interior_identity_designers",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l9_p1_designer_of_interior_or_identity_016",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p1",
"relation": "designer_of_interior_or_identity",
"subject": "Royalton Hotel Interior",
"object": "Philippe Starck",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "interior_identity_designers",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l9_p1_designer_of_interior_or_identity_017",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p1",
"relation": "designer_of_interior_or_identity",
"subject": "Chase Manhattan Bank Visual Identity",
"object": "Ivan Chermayeff and Tom Geismar",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "interior_identity_designers",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l9_p1_designer_of_interior_or_identity_018",
"topicId": "art",
"subtopicId": "design",
"levelId": "l9",
"partId": "p1",
"relation": "designer_of_interior_or_identity",
"subject": "Maison de Verre Interior",
"object": "Pierre Chareau and Bernard Bijvoet",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "interior_identity_designers",
"tags": ["design", "interior_brand_design", "level_9"],
"introducedIn": "C",
"factPriority": "secondary"
}
];

const conceptSet: LocalConceptSet = {
  id: "art_design_l9_p1",
  concepts,
};

export default conceptSet;