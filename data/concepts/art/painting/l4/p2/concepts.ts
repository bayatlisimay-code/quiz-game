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
"id": "art_painting_l4_p2_depicts_001",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p2",
"relation": "depicts",
"subject": "Mona Lisa",
"object": "a woman",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "painting_depictions",
"tags": ["woman", "portrait", "smile"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l4_p2_depicts_002",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p2",
"relation": "depicts",
"subject": "The Last Supper",
"object": "Jesus and his apostles",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "painting_depictions",
"tags": ["jesus", "apostles", "meal"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l4_p2_depicts_003",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p2",
"relation": "depicts",
"subject": "The Starry Night",
"object": "a night sky over a village",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "painting_depictions",
"tags": ["night", "village", "sky"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l4_p2_depicts_004",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p2",
"relation": "depicts",
"subject": "The Birth of Venus",
"object": "Venus on a shell",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_depictions",
"tags": ["venus", "shell", "sea"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l4_p2_depicts_005",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p2",
"relation": "depicts",
"subject": "Girl with a Pearl Earring",
"object": "a girl with an earring",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_depictions",
"tags": ["girl", "earring", "portrait"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l4_p2_depicts_006",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p2",
"relation": "depicts",
"subject": "Sunflowers",
"object": "sunflowers in a vase",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_depictions",
"tags": ["flowers", "vase", "still life"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l4_p2_depicts_007",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p2",
"relation": "depicts",
"subject": "American Gothic",
"object": "a farmer and a woman",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_depictions",
"tags": ["farmer", "woman", "pitchfork"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l4_p2_depicts_008",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p2",
"relation": "depicts",
"subject": "Guernica",
"object": "people and animals in chaos",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_depictions",
"tags": ["chaos", "war", "figures"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l4_p2_depicts_009",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p2",
"relation": "depicts",
"subject": "The Night Watch",
"object": "a militia group",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_depictions",
"tags": ["militia", "group", "guards"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l4_p2_depicts_010",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p2",
"relation": "depicts",
"subject": "Las Meninas",
"object": "a princess and her attendants",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_depictions",
"tags": ["princess", "court", "attendants"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l4_p2_depicts_011",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p2",
"relation": "depicts",
"subject": "Water Lilies",
"object": "water lilies",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_depictions",
"tags": ["flowers", "pond", "garden"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l4_p2_depicts_012",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p2",
"relation": "depicts",
"subject": "The Persistence of Memory",
"object": "melting clocks",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "painting_depictions",
"tags": ["clocks", "desert", "surreal"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l4_p2_depicts_013",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p2",
"relation": "depicts",
"subject": "Liberty Leading the People",
"object": "a woman leading a crowd",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "painting_depictions",
"tags": ["woman", "crowd", "flag"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l4_p2_depicts_014",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p2",
"relation": "depicts",
"subject": "The Arnolfini Portrait",
"object": "a couple indoors",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "painting_depictions",
"tags": ["couple", "interior", "portrait"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l4_p2_depicts_015",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p2",
"relation": "depicts",
"subject": "The Hay Wain",
"object": "a wagon in the countryside",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "painting_depictions",
"tags": ["wagon", "countryside", "river"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l4_p2_depicts_016",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p2",
"relation": "depicts",
"subject": "Impression, Sunrise",
"object": "a harbor at sunrise",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "painting_depictions",
"tags": ["harbor", "sunrise", "boats"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l4_p2_depicts_017",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p2",
"relation": "depicts",
"subject": "The Raft of the Medusa",
"object": "shipwreck survivors on a raft",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "painting_depictions",
"tags": ["raft", "survivors", "sea"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l4_p2_depicts_018",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p2",
"relation": "depicts",
"subject": "Whistler's Mother",
"object": "an elderly woman seated",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "painting_depictions",
"tags": ["mother", "woman", "chair"],
"introducedIn": "C",
"factPriority": "secondary"
}
]

const conceptSet: LocalConceptSet = {
  id: "art_painting_l4_p2",
  concepts,
};

export default conceptSet;