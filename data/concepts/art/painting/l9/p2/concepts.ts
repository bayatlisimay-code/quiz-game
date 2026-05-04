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
"id": "art_painting_l9_p2_lived_in_001",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p2",
"relation": "lived_in",
"subject": "Pablo Picasso",
"object": "Paris",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "cities",
"tags": ["cubism", "france", "modern art"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l9_p2_lived_in_002",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p2",
"relation": "lived_in",
"subject": "Vincent van Gogh",
"object": "Arles",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "cities",
"tags": ["post-impressionism", "france", "sunflowers"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l9_p2_lived_in_003",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p2",
"relation": "lived_in",
"subject": "Claude Monet",
"object": "Giverny",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "cities",
"tags": ["impressionism", "france", "garden"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l9_p2_lived_in_004",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p2",
"relation": "lived_in",
"subject": "Salvador Dali",
"object": "Figueres",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "cities",
"tags": ["surrealism", "spain", "catalonia"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l9_p2_lived_in_005",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p2",
"relation": "lived_in",
"subject": "Henri Matisse",
"object": "Nice",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "cities",
"tags": ["fauvism", "france", "color"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l9_p2_lived_in_006",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p2",
"relation": "lived_in",
"subject": "Wassily Kandinsky",
"object": "Munich",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "cities",
"tags": ["expressionism", "germany", "blue rider"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l9_p2_lived_in_007",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p2",
"relation": "lived_in",
"subject": "Andy Warhol",
"object": "New York",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "cities",
"tags": ["pop art", "factory", "united states"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l9_p2_lived_in_008",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p2",
"relation": "lived_in",
"subject": "Paul Cezanne",
"object": "Aix-en-Provence",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "cities",
"tags": ["post-impressionism", "france", "provence"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l9_p2_lived_in_009",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p2",
"relation": "lived_in",
"subject": "Georges Seurat",
"object": "Paris",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "cities",
"tags": ["neo-impressionism", "france", "pointillism"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l9_p2_lived_in_010",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p2",
"relation": "lived_in",
"subject": "Kazimir Malevich",
"object": "Moscow",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "cities",
"tags": ["suprematism", "russia", "abstract"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l9_p2_lived_in_011",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p2",
"relation": "lived_in",
"subject": "Jackson Pollock",
"object": "New York",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "cities",
"tags": ["abstract expressionism", "united states", "drip painting"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l9_p2_lived_in_012",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p2",
"relation": "lived_in",
"subject": "Mark Rothko",
"object": "New York",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "cities",
"tags": ["color field", "united states", "abstraction"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l9_p2_lived_in_013",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p2",
"relation": "lived_in",
"subject": "Edward Hopper",
"object": "New York",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "cities",
"tags": ["american realism", "united states", "urban"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l9_p2_lived_in_014",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p2",
"relation": "lived_in",
"subject": "Piet Mondrian",
"object": "Paris",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "cities",
"tags": ["de stijl", "france", "geometry"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l9_p2_lived_in_015",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p2",
"relation": "lived_in",
"subject": "Georgia O'Keeffe",
"object": "Santa Fe",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "cities",
"tags": ["american modernism", "new mexico", "flowers"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_painting_l9_p2_lived_in_016",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p2",
"relation": "lived_in",
"subject": "Frida Kahlo",
"object": "Mexico City",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "cities",
"tags": ["mexico", "self-portrait", "casa azul"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_painting_l9_p2_lived_in_017",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p2",
"relation": "lived_in",
"subject": "Paul Klee",
"object": "Bern",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "cities",
"tags": ["switzerland", "bauhaus", "abstract"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l9_p2_lived_in_018",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p2",
"relation": "lived_in",
"subject": "Marc Chagall",
"object": "Paris",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "cities",
"tags": ["france", "school of paris", "dreamlike"],
"introducedIn": "C",
"factPriority": "secondary"
}
]
const conceptSet: LocalConceptSet = {
  id: "art_painting_l9_p2",
  concepts,
};

export default conceptSet;