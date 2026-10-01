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
"id": "art_design_l2_p1_nationality_of_designer_001",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_designer",
"subject": "Charles and Ray Eames",
"object": "American",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "designer_nationalities",
"tags": ["design", "designers", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l2_p1_nationality_of_designer_002",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_designer",
"subject": "Dieter Rams",
"object": "German",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "designer_nationalities",
"tags": ["design", "designers", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l2_p1_nationality_of_designer_003",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_designer",
"subject": "Philippe Starck",
"object": "French",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "designer_nationalities",
"tags": ["design", "designers", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l2_p1_nationality_of_designer_004",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_designer",
"subject": "Paul Rand",
"object": "American",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "designer_nationalities",
"tags": ["design", "designers", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l2_p1_nationality_of_designer_005",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_designer",
"subject": "Saul Bass",
"object": "American",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "designer_nationalities",
"tags": ["design", "designers", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l2_p1_nationality_of_designer_006",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_designer",
"subject": "Massimo Vignelli",
"object": "Italian",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "designer_nationalities",
"tags": ["design", "designers", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l2_p1_nationality_of_designer_007",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_designer",
"subject": "Milton Glaser",
"object": "American",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "designer_nationalities",
"tags": ["design", "designers", "level_2"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l2_p1_nationality_of_designer_008",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_designer",
"subject": "Achille Castiglioni",
"object": "Italian",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "designer_nationalities",
"tags": ["design", "designers", "level_2"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l2_p1_nationality_of_designer_009",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_designer",
"subject": "Verner Panton",
"object": "Danish",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "designer_nationalities",
"tags": ["design", "designers", "level_2"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l2_p1_nationality_of_designer_010",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_designer",
"subject": "Joe Colombo",
"object": "Italian",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "designer_nationalities",
"tags": ["design", "designers", "level_2"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l2_p1_nationality_of_designer_011",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_designer",
"subject": "Eero Aarnio",
"object": "Finnish",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "designer_nationalities",
"tags": ["design", "designers", "level_2"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l2_p1_nationality_of_designer_012",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_designer",
"subject": "George Carwardine",
"object": "British",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "designer_nationalities",
"tags": ["design", "designers", "level_2"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l2_p1_nationality_of_designer_013",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_designer",
"subject": "Harry Beck",
"object": "British",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "designer_nationalities",
"tags": ["design", "designers", "level_2"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l2_p1_nationality_of_designer_014",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_designer",
"subject": "Paul Renner",
"object": "German",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "designer_nationalities",
"tags": ["design", "designers", "level_2"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_design_l2_p1_nationality_of_designer_015",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_designer",
"subject": "Bruno Munari",
"object": "Italian",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "designer_nationalities",
"tags": ["design", "designers", "level_2"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l2_p1_nationality_of_designer_016",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_designer",
"subject": "Susan Kare",
"object": "American",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "designer_nationalities",
"tags": ["design", "designers", "level_2"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l2_p1_nationality_of_designer_017",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_designer",
"subject": "Naoto Fukasawa",
"object": "Japanese",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "designer_nationalities",
"tags": ["design", "designers", "level_2"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l2_p1_nationality_of_designer_018",
"topicId": "art",
"subtopicId": "design",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_designer",
"subject": "Shiro Kuramata",
"object": "Japanese",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "designer_nationalities",
"tags": ["design", "designers", "level_2"],
"introducedIn": "C",
"factPriority": "secondary"
}
];

const conceptSet: LocalConceptSet = {
  id: "art_design_l2_p1",
  concepts,
};

export default conceptSet;
