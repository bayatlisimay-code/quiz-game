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
"id": "art_painting_l6_p1_movement_of_001",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of",
"subject": "Pablo Picasso",
"object": "Cubism",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "art_movements",
"tags": ["cubism", "modern art"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l6_p1_movement_of_002",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of",
"subject": "Salvador Dali",
"object": "Surrealism",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "art_movements",
"tags": ["surrealism", "dream"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l6_p1_movement_of_003",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of",
"subject": "Claude Monet",
"object": "Impressionism",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "art_movements",
"tags": ["impressionism", "light"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l6_p1_movement_of_004",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of",
"subject": "Vincent van Gogh",
"object": "Post-Impressionism",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "art_movements",
"tags": ["post-impressionism", "color"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l6_p1_movement_of_005",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of",
"subject": "Wassily Kandinsky",
"object": "Expressionism",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "art_movements",
"tags": ["expressionism", "abstract"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l6_p1_movement_of_006",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of",
"subject": "Andy Warhol",
"object": "Pop Art",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "art_movements",
"tags": ["pop art", "consumerism"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l6_p1_movement_of_007",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of",
"subject": "Henri Matisse",
"object": "Fauvism",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "art_movements",
"tags": ["fauvism", "color"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l6_p1_movement_of_008",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of",
"subject": "Paul Cezanne",
"object": "Post-Impressionism",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "art_movements",
"tags": ["post-impressionism", "structure"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l6_p1_movement_of_009",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of",
"subject": "Georges Seurat",
"object": "Neo-Impressionism",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "art_movements",
"tags": ["pointillism", "neo-impressionism"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l6_p1_movement_of_010",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of",
"subject": "Kazimir Malevich",
"object": "Suprematism",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "art_movements",
"tags": ["suprematism", "abstract"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l6_p1_movement_of_011",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of",
"subject": "Jackson Pollock",
"object": "Abstract Expressionism",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "art_movements",
"tags": ["abstract expressionism", "drip painting"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l6_p1_movement_of_012",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of",
"subject": "Mark Rothko",
"object": "Abstract Expressionism",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "art_movements",
"tags": ["abstract expressionism", "color field"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l6_p1_movement_of_013",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of",
"subject": "Edward Hopper",
"object": "Realism",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "art_movements",
"tags": ["american realism", "urban"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l6_p1_movement_of_014",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of",
"subject": "Piet Mondrian",
"object": "De Stijl",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "art_movements",
"tags": ["de stijl", "geometry"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l6_p1_movement_of_015",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of",
"subject": "Georges Braque",
"object": "Cubism",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "art_movements",
"tags": ["cubism", "collage"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_painting_l6_p1_movement_of_016",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of",
"subject": "Paul Gauguin",
"object": "Post-Impressionism",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "art_movements",
"tags": ["post-impressionism", "symbolism"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l6_p1_movement_of_017",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of",
"subject": "Paul Klee",
"object": "Expressionism",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "art_movements",
"tags": ["expressionism", "bauhaus"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l6_p1_movement_of_018",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p1",
"relation": "movement_of",
"subject": "Marc Chagall",
"object": "Expressionism",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "art_movements",
"tags": ["expressionism", "fantasy"],
"introducedIn": "C",
"factPriority": "secondary"
}
]
const conceptSet: LocalConceptSet = {
  id: "art_painting_l6_p1",
  concepts,
};

export default conceptSet;
