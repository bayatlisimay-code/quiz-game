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
"id": "art_painting_l4_p4_theme_of_001",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p4",
"relation": "theme_of",
"subject": "Mona Lisa",
"object": "mystery",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "painting_themes",
"tags": ["identity", "portrait", "personhood"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l4_p4_theme_of_002",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p4",
"relation": "theme_of",
"subject": "The Last Supper",
"object": "betrayal",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "painting_themes",
"tags": ["religion", "faith", "christianity"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l4_p4_theme_of_003",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p4",
"relation": "theme_of",
"subject": "The Starry Night",
"object": "spirituality",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "painting_themes",
"tags": ["nature", "sky", "wonder"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l4_p4_theme_of_004",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p4",
"relation": "theme_of",
"subject": "The Birth of Venus",
"object": "love",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_themes",
"tags": ["love", "beauty", "mythology"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l4_p4_theme_of_005",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p4",
"relation": "theme_of",
"subject": "Girl with a Pearl Earring",
"object": "beauty",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_themes",
"tags": ["beauty", "portrait", "mystery"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l4_p4_theme_of_006",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p4",
"relation": "theme_of",
"subject": "Sunflowers",
"object": "vitality",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_themes",
"tags": ["vitality", "flowers", "life"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l4_p4_theme_of_007",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p4",
"relation": "theme_of",
"subject": "American Gothic",
"object": "stoicism",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_themes",
"tags": ["daily life", "rural life", "america"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l4_p4_theme_of_008",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p4",
"relation": "theme_of",
"subject": "Guernica",
"object": "war",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_themes",
"tags": ["war", "violence", "suffering"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l4_p4_theme_of_009",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p4",
"relation": "theme_of",
"subject": "The Night Watch",
"object": "civic pride",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_themes",
"tags": ["civic pride", "duty", "group identity"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l4_p4_theme_of_010",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p4",
"relation": "theme_of",
"subject": "Las Meninas",
"object": "representation",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_themes",
"tags": ["power", "court", "status"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l4_p4_theme_of_011",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p4",
"relation": "theme_of",
"subject": "Water Lilies",
"object": "tranquility",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_themes",
"tags": ["tranquility", "nature", "calm"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l4_p4_theme_of_012",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p4",
"relation": "theme_of",
"subject": "The Persistence of Memory",
"object": "time",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "painting_themes",
"tags": ["time", "memory", "surrealism"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l4_p4_theme_of_013",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p4",
"relation": "theme_of",
"subject": "Liberty Leading the People",
"object": "freedom",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "painting_themes",
"tags": ["freedom", "revolution", "liberty"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l4_p4_theme_of_014",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p4",
"relation": "theme_of",
"subject": "The Arnolfini Portrait",
"object": "marriage",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "painting_themes",
"tags": ["marriage", "domestic life", "union"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l4_p4_theme_of_015",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p4",
"relation": "theme_of",
"subject": "The Hay Wain",
"object": "rural life",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "painting_themes",
"tags": ["rural life", "nature", "countryside"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l4_p4_theme_of_016",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p4",
"relation": "theme_of",
"subject": "Impression, Sunrise",
"object": "atmosphere",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "painting_themes",
"tags": ["atmosphere", "light", "moment"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l4_p4_theme_of_017",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p4",
"relation": "theme_of",
"subject": "The Raft of the Medusa",
"object": "survival",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "painting_themes",
"tags": ["survival", "disaster", "despair"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l4_p4_theme_of_018",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p4",
"relation": "theme_of",
"subject": "Whistler's Mother",
"object": "maternity",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "painting_themes",
"tags": ["family", "motherhood", "domesticity"],
"introducedIn": "C",
"factPriority": "secondary"
}
]
const conceptSet: LocalConceptSet = {
  id: "art_painting_l4_p4",
  concepts,
};

export default conceptSet;