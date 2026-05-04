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
"id": "art_painting_l7_p2_commissioned_by_001",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p2",
"relation": "commissioned_by",
"subject": "The Last Supper",
"object": "Ludovico Sforza",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "painting_commissioners",
"tags": ["milan", "renaissance", "patron"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l7_p2_commissioned_by_002",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p2",
"relation": "commissioned_by",
"subject": "The School of Athens",
"object": "Pope Julius II",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "painting_commissioners",
"tags": ["vatican", "pope", "renaissance"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l7_p2_commissioned_by_003",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p2",
"relation": "commissioned_by",
"subject": "Guernica",
"object": "Spanish Republic",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "painting_commissioners",
"tags": ["war", "politics", "spain"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l7_p2_commissioned_by_004",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p2",
"relation": "commissioned_by",
"subject": "The Night Watch",
"object": "Amsterdam militia",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "painting_commissioners",
"tags": ["dutch", "militia", "civic"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l7_p2_commissioned_by_005",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p2",
"relation": "commissioned_by",
"subject": "Oath of the Horatii",
"object": "Louis XVI",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_commissioners",
"tags": ["france", "king", "neoclassicism"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l7_p2_commissioned_by_006",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p2",
"relation": "commissioned_by",
"subject": "Las Meninas",
"object": "King Philip IV",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_commissioners",
"tags": ["spain", "royalty", "court"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l7_p2_commissioned_by_007",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p2",
"relation": "commissioned_by",
"subject": "The Coronation of Napoleon",
"object": "Napoleon Bonaparte",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_commissioners",
"tags": ["empire", "napoleon", "france"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l7_p2_commissioned_by_008",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p2",
"relation": "commissioned_by",
"subject": "The Calling of Saint Matthew",
"object": "Cardinal Contarelli",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_commissioners",
"tags": ["rome", "church", "patron"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l7_p2_commissioned_by_009",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p2",
"relation": "commissioned_by",
"subject": "The Ghent Altarpiece",
"object": "Joos Vijd",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_commissioners",
"tags": ["flanders", "patron", "altarpiece"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l7_p2_commissioned_by_010",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p2",
"relation": "commissioned_by",
"subject": "Isenheim Altarpiece",
"object": "Antonite Order",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_commissioners",
"tags": ["hospital", "religion", "monastery"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l7_p2_commissioned_by_011",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p2",
"relation": "commissioned_by",
"subject": "The Surrender of Breda",
"object": "King Philip IV",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_commissioners",
"tags": ["spain", "war", "royalty"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l7_p2_commissioned_by_012",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p2",
"relation": "commissioned_by",
"subject": "Napoleon Crossing the Alps",
"object": "Charles IV of Spain",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_commissioners",
"tags": ["napoleon", "propaganda", "france"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l7_p2_commissioned_by_013",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p2",
"relation": "commissioned_by",
"subject": "The Apotheosis of Homer",
"object": "Charles X",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_commissioners",
"tags": ["france", "royalty", "neoclassicism"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l7_p2_commissioned_by_014",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p2",
"relation": "commissioned_by",
"subject": "The Education of Marie de Medici",
"object": "Marie de Medici",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "painting_commissioners",
"tags": ["france", "queen", "patron"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l7_p2_commissioned_by_015",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p2",
"relation": "commissioned_by",
"subject": "The Triumph of Galatea",
"object": "Agostino Chigi",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "painting_commissioners",
"tags": ["italy", "patron", "banker"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l7_p2_commissioned_by_016",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p2",
"relation": "commissioned_by",
"subject": "The Ambassadors",
"object": "Jean de Dinteville",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "painting_commissioners",
"tags": ["france", "diplomat", "portrait"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_painting_l7_p2_commissioned_by_017",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p2",
"relation": "commissioned_by",
"subject": "The Descent from the Cross",
"object": "Guild of Arquebusiers",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "painting_commissioners",
"tags": ["guild", "flanders", "baroque"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l7_p2_commissioned_by_018",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p2",
"relation": "commissioned_by",
"subject": "Assumption of the Virgin",
"object": "Santa Maria Gloriosa dei Frari",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "painting_commissioners",
"tags": ["venice", "church", "altarpiece"],
"introducedIn": "C",
"factPriority": "secondary"
}
]
const conceptSet: LocalConceptSet = {
  id: "art_painting_l7_p2",
  concepts,
};

export default conceptSet;
