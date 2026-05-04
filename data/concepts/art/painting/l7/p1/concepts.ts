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
"id": "art_painting_l7_p1_symbolizes_001",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p1",
"relation": "symbolizes",
"subject": "The Last Supper",
"object": "betrayal",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "painting_symbols",
"tags": ["renaissance", "christianity", "betrayal"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l7_p1_symbolizes_002",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p1",
"relation": "symbolizes",
"subject": "The School of Athens",
"object": "philosophy",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "painting_symbols",
"tags": ["renaissance", "philosophy", "learning"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l7_p1_symbolizes_003",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p1",
"relation": "symbolizes",
"subject": "Guernica",
"object": "civilian suffering",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "painting_symbols",
"tags": ["war", "picasso", "suffering"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l7_p1_symbolizes_004",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p1",
"relation": "symbolizes",
"subject": "The Night Watch",
"object": "civic pride",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "painting_symbols",
"tags": ["rembrandt", "dutch golden age", "civic"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l7_p1_symbolizes_005",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p1",
"relation": "symbolizes",
"subject": "Oath of the Horatii",
"object": "patriotic duty",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_symbols",
"tags": ["neoclassicism", "duty", "rome"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l7_p1_symbolizes_006",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p1",
"relation": "symbolizes",
"subject": "Las Meninas",
"object": "royal power",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_symbols",
"tags": ["velazquez", "royalty", "spain"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l7_p1_symbolizes_007",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p1",
"relation": "symbolizes",
"subject": "The Coronation of Napoleon",
"object": "imperial power",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_symbols",
"tags": ["napoleon", "empire", "power"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l7_p1_symbolizes_008",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p1",
"relation": "symbolizes",
"subject": "The Calling of Saint Matthew",
"object": "divine calling",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_symbols",
"tags": ["caravaggio", "baroque", "faith"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l7_p1_symbolizes_009",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p1",
"relation": "symbolizes",
"subject": "The Ghent Altarpiece",
"object": "divine salvation",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_symbols",
"tags": ["northern renaissance", "faith", "salvation"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l7_p1_symbolizes_010",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p1",
"relation": "symbolizes",
"subject": "Isenheim Altarpiece",
"object": "suffering",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_symbols",
"tags": ["altarpiece", "illness", "faith"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l7_p1_symbolizes_011",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p1",
"relation": "symbolizes",
"subject": "The Surrender of Breda",
"object": "mercy",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_symbols",
"tags": ["velazquez", "war", "mercy"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l7_p1_symbolizes_012",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p1",
"relation": "symbolizes",
"subject": "Napoleon Crossing the Alps",
"object": "heroic leadership",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_symbols",
"tags": ["napoleon", "propaganda", "leadership"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l7_p1_symbolizes_013",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p1",
"relation": "symbolizes",
"subject": "The Apotheosis of Homer",
"object": "classical genius",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_symbols",
"tags": ["neoclassicism", "homer", "genius"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l7_p1_symbolizes_014",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p1",
"relation": "symbolizes",
"subject": "The Education of Marie de Medici",
"object": "royal legitimacy",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "painting_symbols",
"tags": ["rubens", "royalty", "legitimacy"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l7_p1_symbolizes_015",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p1",
"relation": "symbolizes",
"subject": "The Triumph of Galatea",
"object": "classical beauty",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "painting_symbols",
"tags": ["raphael", "mythology", "love"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
  "id": "art_painting_l7_p1_symbolizes_016",
  "topicId": "art",
  "subtopicId": "painting",
  "levelId": "l7",
  "partId": "p1",
  "relation": "symbolizes",
  "subject": "The Ambassadors",
  "object": "mortality",
  "answerKind": "short",
  "difficulty": 4,
  "distractorGroup": "painting_symbols",
  "tags": ["holbein", "skull", "mortality"],
  "introducedIn": "C",
  "factPriority": "core"
},
{
"id": "art_painting_l7_p1_symbolizes_017",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p1",
"relation": "symbolizes",
"subject": "The Descent from the Cross",
"object": "sacrifice",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "painting_symbols",
"tags": ["rubens", "baroque", "sacrifice"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l7_p1_symbolizes_018",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l7",
"partId": "p1",
"relation": "symbolizes",
"subject": "Assumption of the Virgin",
"object": "divine glory",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "painting_symbols",
"tags": ["titian", "venice", "glory"],
"introducedIn": "C",
"factPriority": "secondary"
}
]
const conceptSet: LocalConceptSet = {
  id: "art_painting_l7_p1",
  concepts,
};

export default conceptSet;