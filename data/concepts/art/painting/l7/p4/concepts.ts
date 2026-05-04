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
"id": "art_painting_l7_p4_historical_context_of_001",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p4",
"relation": "historical_context_of",
"subject": "The Last Supper",
"object": "Renaissance Milan",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "painting_historical_contexts",
"tags": ["renaissance", "milan", "italy"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l7_p4_historical_context_of_002",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p4",
"relation": "historical_context_of",
"subject": "The School of Athens",
"object": "High Renaissance",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "painting_historical_contexts",
"tags": ["renaissance", "vatican", "philosophy"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l7_p4_historical_context_of_003",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p4",
"relation": "historical_context_of",
"subject": "Guernica",
"object": "Spanish Civil War",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "painting_historical_contexts",
"tags": ["war", "spain", "bombing"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l7_p4_historical_context_of_004",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p4",
"relation": "historical_context_of",
"subject": "The Night Watch",
"object": "Dutch Golden Age",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "painting_historical_contexts",
"tags": ["netherlands", "trade", "civic"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l7_p4_historical_context_of_005",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p4",
"relation": "historical_context_of",
"subject": "Oath of the Horatii",
"object": "Pre-Revolution France",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_historical_contexts",
"tags": ["france", "revolution", "politics"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l7_p4_historical_context_of_006",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p4",
"relation": "historical_context_of",
"subject": "Las Meninas",
"object": "Spanish Golden Age",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_historical_contexts",
"tags": ["spain", "royalty", "court"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l7_p4_historical_context_of_007",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p4",
"relation": "historical_context_of",
"subject": "The Coronation of Napoleon",
"object": "Napoleonic Empire",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_historical_contexts",
"tags": ["empire", "france", "napoleon"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l7_p4_historical_context_of_008",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p4",
"relation": "historical_context_of",
"subject": "The Calling of Saint Matthew",
"object": "Counter-Reformation",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_historical_contexts",
"tags": ["church", "rome", "baroque"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l7_p4_historical_context_of_009",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p4",
"relation": "historical_context_of",
"subject": "The Ghent Altarpiece",
"object": "Northern Renaissance",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_historical_contexts",
"tags": ["flanders", "religion", "altarpiece"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l7_p4_historical_context_of_010",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p4",
"relation": "historical_context_of",
"subject": "Isenheim Altarpiece",
"object": "monastic hospitals",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_historical_contexts",
"tags": ["disease", "hospital", "faith"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l7_p4_historical_context_of_011",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p4",
"relation": "historical_context_of",
"subject": "The Surrender of Breda",
"object": "Eighty Years War",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_historical_contexts",
"tags": ["war", "spain", "netherlands"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l7_p4_historical_context_of_012",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p4",
"relation": "historical_context_of",
"subject": "Napoleon Crossing the Alps",
"object": "Napoleonic Wars",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_historical_contexts",
"tags": ["war", "napoleon", "france"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l7_p4_historical_context_of_013",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p4",
"relation": "historical_context_of",
"subject": "The Apotheosis of Homer",
"object": "Neoclassical revival",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_historical_contexts",
"tags": ["classicism", "france", "ingres"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l7_p4_historical_context_of_014",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p4",
"relation": "historical_context_of",
"subject": "The Education of Marie de Medici",
"object": "Regency of Marie de Medici",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "painting_historical_contexts",
"tags": ["france", "royalty", "baroque"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l7_p4_historical_context_of_015",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p4",
"relation": "historical_context_of",
"subject": "The Triumph of Galatea",
"object": "Renaissance Rome",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "painting_historical_contexts",
"tags": ["rome", "renaissance", "mythology"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l7_p4_historical_context_of_016",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p4",
"relation": "historical_context_of",
"subject": "The Ambassadors",
"object": "Reformation Europe",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "painting_historical_contexts",
"tags": ["religion", "diplomacy", "reformation"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_painting_l7_p4_historical_context_of_017",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p4",
"relation": "historical_context_of",
"subject": "The Descent from the Cross",
"object": "Counter-Reformation",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "painting_historical_contexts",
"tags": ["church", "baroque", "flanders"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l7_p4_historical_context_of_018",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p4",
"relation": "historical_context_of",
"subject": "Assumption of the Virgin",
"object": "Venetian Renaissance",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "painting_historical_contexts",
"tags": ["venice", "renaissance", "altarpiece"],
"introducedIn": "C",
"factPriority": "secondary"
}
]
const conceptSet: LocalConceptSet = {
  id: "art_painting_l7_p4",
  concepts,
};

export default conceptSet;