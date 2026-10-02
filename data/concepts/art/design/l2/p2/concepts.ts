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
"id": "art_design_l2_p2_known_for_design_001",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_design",
"subject": "Charles and Ray Eames",
"object": "Eames Lounge Chair",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_designs",
"tags": ["design", "designers", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l2_p2_known_for_design_002",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_design",
"subject": "Dieter Rams",
"object": "Braun SK 4",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_designs",
"tags": ["design", "designers", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l2_p2_known_for_design_003",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_design",
"subject": "Philippe Starck",
"object": "Juicy Salif",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_designs",
"tags": ["design", "designers", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l2_p2_known_for_design_004",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_design",
"subject": "Paul Rand",
"object": "IBM 8-bar Logo",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_designs",
"tags": ["design", "designers", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l2_p2_known_for_design_005",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_design",
"subject": "Saul Bass",
"object": "Vertigo Film Poster",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_designs",
"tags": ["design", "designers", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l2_p2_known_for_design_006",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_design",
"subject": "Massimo Vignelli",
"object": "New York City Subway Map",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_designs",
"tags": ["design", "designers", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l2_p2_known_for_design_007",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_design",
"subject": "Milton Glaser",
"object": "I Love New York Logo",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_designs",
"tags": ["design", "designers", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l2_p2_known_for_design_008",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_design",
"subject": "Achille Castiglioni",
"object": "Arco Floor Lamp",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_designs",
"tags": ["design", "designers", "level_2"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l2_p2_known_for_design_009",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_design",
"subject": "Verner Panton",
"object": "Panton Chair",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_designs",
"tags": ["design", "designers", "level_2"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l2_p2_known_for_design_010",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_design",
"subject": "Joe Colombo",
"object": "Elda Chair",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_designs",
"tags": ["design", "designers", "level_2"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l2_p2_known_for_design_011",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_design",
"subject": "Eero Aarnio",
"object": "Ball Chair",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_designs",
"tags": ["design", "designers", "level_2"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l2_p2_known_for_design_012",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_design",
"subject": "George Carwardine",
"object": "Anglepoise Lamp",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_designs",
"tags": ["design", "designers", "level_2"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l2_p2_known_for_design_013",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_design",
"subject": "Harry Beck",
"object": "London Underground Map",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_designs",
"tags": ["design", "designers", "level_2"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l2_p2_known_for_design_014",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_design",
"subject": "Paul Renner",
"object": "Futura",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_designs",
"tags": ["design", "designers", "level_2"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_design_l2_p2_known_for_design_015",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_design",
"subject": "Bruno Munari",
"object": "Falkland Lamp",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_designs",
"tags": ["design", "designers", "level_2"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l2_p2_known_for_design_016",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_design",
"subject": "Susan Kare",
"object": "Happy Mac Icon",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_designs",
"tags": ["design", "designers", "level_2"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l2_p2_known_for_design_017",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_design",
"subject": "Naoto Fukasawa",
"object": "MUJI Wall-Mounted CD Player",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_designs",
"tags": ["design", "designers", "level_2"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l2_p2_known_for_design_018",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p2",
"relation": "known_for_design",
"subject": "Shiro Kuramata",
"object": "Miss Blanche Chair",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_designs",
"tags": ["design", "designers", "level_2"],
"introducedIn": "C",
"factPriority": "secondary"
}
];

const conceptSet: LocalConceptSet = {
id: "art_design_l2_p2_known_for_design",
concepts,
};

export default conceptSet;