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
"id": "art_painting_l6_p2_reaction_against_001",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
"subject": "Pablo Picasso",
"object": "Academic art",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "art_movements",
"tags": ["cubism", "modern art"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l6_p2_reaction_against_002",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
"subject": "Salvador Dali",
"object": "Cubism",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "art_movements",
"tags": ["surrealism", "dream"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l6_p2_reaction_against_003",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
"subject": "Claude Monet",
"object": "Academic art",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "art_movements",
"tags": ["impressionism", "light"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l6_p2_reaction_against_004",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
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
"id": "art_painting_l6_p2_reaction_against_005",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
"subject": "Wassily Kandinsky",
"object": "Realism",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "art_movements",
"tags": ["expressionism", "abstract"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l6_p2_reaction_against_006",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
"subject": "Andy Warhol",
"object": "Abstract Expressionism",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "art_movements",
"tags": ["pop art", "consumerism"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l6_p2_reaction_against_007",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
"subject": "Henri Matisse",
"object": "Academic art",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "art_movements",
"tags": ["fauvism", "color"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l6_p2_reaction_against_008",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
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
"id": "art_painting_l6_p2_reaction_against_009",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
"subject": "Georges Seurat",
"object": "Impressionism",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "art_movements",
"tags": ["neo-impressionism", "pointillism"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l6_p2_reaction_against_010",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
"subject": "Kazimir Malevich",
"object": "Realism",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "art_movements",
"tags": ["suprematism", "abstract"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l6_p2_reaction_against_011",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
"subject": "Jackson Pollock",
"object": "Regionalism",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "art_movements",
"tags": ["abstract expressionism", "drip painting"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l6_p2_reaction_against_012",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
"subject": "Mark Rothko",
"object": "Surrealism",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "art_movements",
"tags": ["abstract expressionism", "color field"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l6_p2_reaction_against_013",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
"subject": "Edward Hopper",
"object": "Abstract art",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "art_movements",
"tags": ["american realism", "urban"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l6_p2_reaction_against_014",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
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
"id": "art_painting_l6_p2_reaction_against_015",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
"subject": "Georges Braque",
"object": "Impressionism",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "art_movements",
"tags": ["cubism", "collage"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_painting_l6_p2_reaction_against_016",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
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
"id": "art_painting_l6_p2_reaction_against_017",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
"subject": "Paul Klee",
"object": "Academic art",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "art_movements",
"tags": ["expressionism", "bauhaus"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l6_p2_reaction_against_018",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
"subject": "Marc Chagall",
"object": "Cubism",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "art_movements",
"tags": ["expressionism", "fantasy"],
"introducedIn": "C",
"factPriority": "secondary"
}
]
const conceptSet: LocalConceptSet = {
  id: "art_painting_l6_p2",
  concepts,
};

export default conceptSet;
