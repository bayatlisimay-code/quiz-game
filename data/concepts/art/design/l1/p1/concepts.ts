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
"id": "art_design_l1_p1_designed_by_001",
"topicId": "art",
"subtopicId": "design",
"levelId": "l1",
"partId": "p1",
"relation": "designed_by",
"subject": "Eames Lounge Chair",
"object": "Charles and Ray Eames",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "designers",
"tags": ["design", "famous_designs", "level_1"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l1_p1_designed_by_002",
"topicId": "art",
"subtopicId": "design",
"levelId": "l1",
"partId": "p1",
"relation": "designed_by",
"subject": "Wassily Chair",
"object": "Marcel Breuer",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "designers",
"tags": ["design", "famous_designs", "level_1"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l1_p1_designed_by_003",
"topicId": "art",
"subtopicId": "design",
"levelId": "l1",
"partId": "p1",
"relation": "designed_by",
"subject": "Braun SK 4",
"object": "Dieter Rams and Hans Gugelot",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "designers",
"tags": ["design", "famous_designs", "level_1"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l1_p1_designed_by_004",
"topicId": "art",
"subtopicId": "design",
"levelId": "l1",
"partId": "p1",
"relation": "designed_by",
"subject": "Juicy Salif",
"object": "Philippe Starck",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "designers",
"tags": ["design", "famous_designs", "level_1"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l1_p1_designed_by_005",
"topicId": "art",
"subtopicId": "design",
"levelId": "l1",
"partId": "p1",
"relation": "designed_by",
"subject": "IBM 8-bar Logo",
"object": "Paul Rand",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "designers",
"tags": ["design", "famous_designs", "level_1"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l1_p1_designed_by_006",
"topicId": "art",
"subtopicId": "design",
"levelId": "l1",
"partId": "p1",
"relation": "designed_by",
"subject": "Helvetica",
"object": "Max Miedinger and Eduard Hoffmann",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "designers",
"tags": ["design", "famous_designs", "level_1"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l1_p1_designed_by_007",
"topicId": "art",
"subtopicId": "design",
"levelId": "l1",
"partId": "p1",
"relation": "designed_by",
"subject": "I Love New York Logo",
"object": "Milton Glaser",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "designers",
"tags": ["design", "famous_designs", "level_1"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l1_p1_designed_by_008",
"topicId": "art",
"subtopicId": "design",
"levelId": "l1",
"partId": "p1",
"relation": "designed_by",
"subject": "Arco Floor Lamp",
"object": "Achille and Pier Giacomo Castiglioni",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "designers",
"tags": ["design", "famous_designs", "level_1"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l1_p1_designed_by_009",
"topicId": "art",
"subtopicId": "design",
"levelId": "l1",
"partId": "p1",
"relation": "designed_by",
"subject": "Moka Express",
"object": "Alfonso Bialetti",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "designers",
"tags": ["design", "famous_designs", "level_1"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l1_p1_designed_by_010",
"topicId": "art",
"subtopicId": "design",
"levelId": "l1",
"partId": "p1",
"relation": "designed_by",
"subject": "Anglepoise Original 1227 Lamp",
"object": "George Carwardine",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "designers",
"tags": ["design", "famous_designs", "level_1"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l1_p1_designed_by_011",
"topicId": "art",
"subtopicId": "design",
"levelId": "l1",
"partId": "p1",
"relation": "designed_by",
"subject": "New York City Subway Map",
"object": "Massimo Vignelli, Joan Charysyn, Bob Noorda, and Unimark International",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "designers",
"tags": ["design", "famous_designs", "level_1"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l1_p1_designed_by_012",
"topicId": "art",
"subtopicId": "design",
"levelId": "l1",
"partId": "p1",
"relation": "designed_by",
"subject": "Vertigo Film Poster",
"object": "Saul Bass",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "designers",
"tags": ["design", "famous_designs", "level_1"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l1_p1_designed_by_013",
"topicId": "art",
"subtopicId": "design",
"levelId": "l1",
"partId": "p1",
"relation": "designed_by",
"subject": "Coca-Cola Contour Bottle",
"object": "Root Glass Company",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "designers",
"tags": ["design", "famous_designs", "level_1"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l1_p1_designed_by_014",
"topicId": "art",
"subtopicId": "design",
"levelId": "l1",
"partId": "p1",
"relation": "designed_by",
"subject": "Olivetti Valentine",
"object": "Ettore Sottsass and Perry A. King",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "designers",
"tags": ["design", "famous_designs", "level_1"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l1_p1_designed_by_015",
"topicId": "art",
"subtopicId": "design",
"levelId": "l1",
"partId": "p1",
"relation": "designed_by",
"subject": "iMac G3",
"object": "Jonathan Ive and Apple Industrial Design Team",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "designers",
"tags": ["design", "famous_designs", "level_1"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l1_p1_designed_by_016",
"topicId": "art",
"subtopicId": "design",
"levelId": "l1",
"partId": "p1",
"relation": "designed_by",
"subject": "Futura",
"object": "Paul Renner",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "designers",
"tags": ["design", "famous_designs", "level_1"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_design_l1_p1_designed_by_017",
"topicId": "art",
"subtopicId": "design",
"levelId": "l1",
"partId": "p1",
"relation": "designed_by",
"subject": "Nike Swoosh",
"object": "Carolyn Davidson",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "designers",
"tags": ["design", "famous_designs", "level_1"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l1_p1_designed_by_018",
"topicId": "art",
"subtopicId": "design",
"levelId": "l1",
"partId": "p1",
"relation": "designed_by",
"subject": "London Underground Map",
"object": "Harry Beck",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "designers",
"tags": ["design", "famous_designs", "level_1"],
"introducedIn": "C",
"factPriority": "core"
}
];

const conceptSet: LocalConceptSet = {
  id: "art_design_l1_p1",
  concepts,
};

export default conceptSet;

