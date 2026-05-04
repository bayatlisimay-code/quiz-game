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
"id": "art_painting_l6_p4_influenced_by_movement_001",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "Pablo Picasso",
"object": "African art",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "art_movements",
"tags": ["cubism", "modern art"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l6_p4_influenced_by_movement_002",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "Salvador Dali",
"object": "Metaphysical art",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "art_movements",
"tags": ["surrealism", "dream"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l6_p4_influenced_by_movement_003",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "Claude Monet",
"object": "Realism",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "art_movements",
"tags": ["impressionism", "light"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l6_p4_influenced_by_movement_004",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "Vincent van Gogh",
"object": "Impressionism",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "art_movements",
"tags": ["post-impressionism", "color"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l6_p4_influenced_by_movement_005",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "Wassily Kandinsky",
"object": "Fauvism",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "art_movements",
"tags": ["expressionism", "abstract"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l6_p4_influenced_by_movement_006",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "Andy Warhol",
"object": "Dada",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "art_movements",
"tags": ["pop art", "consumerism"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l6_p4_influenced_by_movement_007",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "Henri Matisse",
"object": "Post-Impressionism",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "art_movements",
"tags": ["fauvism", "color"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l6_p4_influenced_by_movement_008",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "Paul Cezanne",
"object": "Impressionism",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "art_movements",
"tags": ["post-impressionism", "structure"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l6_p4_influenced_by_movement_009",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "Georges Seurat",
"object": "Impressionism",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "art_movements",
"tags": ["pointillism", "neo-impressionism"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l6_p4_influenced_by_movement_010",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "Kazimir Malevich",
"object": "Cubism",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "art_movements",
"tags": ["suprematism", "geometry"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l6_p4_influenced_by_movement_011",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "Jackson Pollock",
"object": "Surrealism",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "art_movements",
"tags": ["abstract expressionism", "automatic"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l6_p4_influenced_by_movement_012",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "Mark Rothko",
"object": "Expressionism",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "art_movements",
"tags": ["abstract expressionism", "emotion"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l6_p4_influenced_by_movement_013",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "Edward Hopper",
"object": "Impressionism",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "art_movements",
"tags": ["american realism", "urban"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l6_p4_influenced_by_movement_014",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "Piet Mondrian",
"object": "Cubism",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "art_movements",
"tags": ["de stijl", "geometry"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l6_p4_influenced_by_movement_015",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "Georges Braque",
"object": "Post-Impressionism",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "art_movements",
"tags": ["cubism", "structure"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_painting_l6_p4_influenced_by_movement_016",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "Paul Gauguin",
"object": "Impressionism",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "art_movements",
"tags": ["post-impressionism", "symbolism"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l6_p4_influenced_by_movement_017",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "Paul Klee",
"object": "Cubism",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "art_movements",
"tags": ["cubism", "bauhaus"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l6_p4_influenced_by_movement_018",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p4",
"relation": "influenced_by_movement",
"subject": "Marc Chagall",
"object": "Fauvism",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "art_movements",
"tags": ["expressionism", "color"],
"introducedIn": "C",
"factPriority": "secondary"
}
]
const conceptSet: LocalConceptSet = {
  id: "art_painting_l6_p4",
  concepts,
};

export default conceptSet;
