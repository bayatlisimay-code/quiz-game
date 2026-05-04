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
"id": "art_painting_l9_p4_signature_style_001",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p4",
"relation": "signature_style",
"subject": "Pablo Picasso",
"object": "fragmented forms",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "art_styles",
"tags": ["cubism", "geometry", "modern art"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l9_p4_signature_style_002",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p4",
"relation": "signature_style",
"subject": "Vincent van Gogh",
"object": "thick brushstrokes",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "art_styles",
"tags": ["post-impressionism", "brushwork", "color"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l9_p4_signature_style_003",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p4",
"relation": "signature_style",
"subject": "Claude Monet",
"object": "loose brushwork",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "art_styles",
"tags": ["impressionism", "light", "landscape"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l9_p4_signature_style_004",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p4",
"relation": "signature_style",
"subject": "Salvador Dali",
"object": "dreamlike imagery",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "art_styles",
"tags": ["surrealism", "dreams", "symbols"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l9_p4_signature_style_005",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p4",
"relation": "signature_style",
"subject": "Henri Matisse",
"object": "bold colors",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "art_styles",
"tags": ["fauvism", "color", "modern art"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l9_p4_signature_style_006",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p4",
"relation": "signature_style",
"subject": "Wassily Kandinsky",
"object": "abstract shapes",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "art_styles",
"tags": ["abstraction", "color", "expressionism"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l9_p4_signature_style_007",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p4",
"relation": "signature_style",
"subject": "Andy Warhol",
"object": "repeated images",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "art_styles",
"tags": ["pop art", "silkscreen", "celebrity"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l9_p4_signature_style_008",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p4",
"relation": "signature_style",
"subject": "Paul Cezanne",
"object": "structured brushwork",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "art_styles",
"tags": ["post-impressionism", "structure", "form"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l9_p4_signature_style_009",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p4",
"relation": "signature_style",
"subject": "Georges Seurat",
"object": "pointillism",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "art_styles",
"tags": ["neo-impressionism", "dots", "color"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l9_p4_signature_style_010",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p4",
"relation": "signature_style",
"subject": "Kazimir Malevich",
"object": "geometric abstraction",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "art_styles",
"tags": ["suprematism", "geometry", "abstract"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l9_p4_signature_style_011",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p4",
"relation": "signature_style",
"subject": "Jackson Pollock",
"object": "drip painting",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "art_styles",
"tags": ["abstract expressionism", "drip", "action painting"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l9_p4_signature_style_012",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p4",
"relation": "signature_style",
"subject": "Mark Rothko",
"object": "color fields",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "art_styles",
"tags": ["color field", "abstraction", "emotion"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l9_p4_signature_style_013",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p4",
"relation": "signature_style",
"subject": "Edward Hopper",
"object": "lonely interiors",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "art_styles",
"tags": ["american realism", "isolation", "urban"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l9_p4_signature_style_014",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p4",
"relation": "signature_style",
"subject": "Piet Mondrian",
"object": "grid abstraction",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "art_styles",
"tags": ["de stijl", "grid", "geometry"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_painting_l9_p4_signature_style_015",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p4",
"relation": "signature_style",
"subject": "Georgia O'Keeffe",
"object": "large flowers",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "art_styles",
"tags": ["american modernism", "flowers", "new mexico"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_painting_l9_p4_signature_style_016",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p4",
"relation": "signature_style",
"subject": "Frida Kahlo",
"object": "symbolic self-portraits",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "art_styles",
"tags": ["self-portrait", "mexico", "symbolism"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_painting_l9_p4_signature_style_017",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p4",
"relation": "signature_style",
"subject": "Paul Klee",
"object": "childlike symbols",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "art_styles",
"tags": ["bauhaus", "symbols", "abstraction"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l9_p4_signature_style_018",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l9",
"partId": "p4",
"relation": "signature_style",
"subject": "Marc Chagall",
"object": "floating figures",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "art_styles",
"tags": ["dreamlike", "floating", "memory"],
"introducedIn": "C",
"factPriority": "secondary"
}
]
const conceptSet: LocalConceptSet = {
  id: "art_painting_l9_p4",
  concepts,
};

export default conceptSet;
