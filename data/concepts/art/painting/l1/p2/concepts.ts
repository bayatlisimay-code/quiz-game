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
"id": "art_painting_l1_p2_art_style_001",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l1",
"partId": "p2",
"relation": "art_style",
"subject": "Mona Lisa",
"object": "Renaissance",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_styles",
"tags": ["renaissance", "leonardo da vinci", "portrait"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l1_p2_art_style_002",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l1",
"partId": "p2",
"relation": "art_style",
"subject": "The Starry Night",
"object": "Post-Impressionism",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_styles",
"tags": ["post-impressionism", "vincent van gogh", "night"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l1_p2_art_style_003",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l1",
"partId": "p2",
"relation": "art_style",
"subject": "The Scream",
"object": "Expressionism",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_styles",
"tags": ["expressionism", "edvard munch", "emotion"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l1_p2_art_style_004",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l1",
"partId": "p2",
"relation": "art_style",
"subject": "Girl with a Pearl Earring",
"object": "Baroque",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_styles",
"tags": ["baroque", "johannes vermeer", "portrait"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l1_p2_art_style_005",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l1",
"partId": "p2",
"relation": "art_style",
"subject": "Guernica",
"object": "Cubism",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_styles",
"tags": ["cubism", "pablo picasso", "war"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l1_p2_art_style_006",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l1",
"partId": "p2",
"relation": "art_style",
"subject": "The Persistence of Memory",
"object": "Surrealism",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_styles",
"tags": ["surrealism", "salvador dali", "time"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l1_p2_art_style_007",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l1",
"partId": "p2",
"relation": "art_style",
"subject": "American Gothic",
"object": "Regionalism",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_styles",
"tags": ["regionalism", "grant wood", "portrait"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l1_p2_art_style_008",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l1",
"partId": "p2",
"relation": "art_style",
"subject": "The Night Watch",
"object": "Baroque",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_styles",
"tags": ["baroque", "rembrandt van rijn", "militia"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l1_p2_art_style_009",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l1",
"partId": "p2",
"relation": "art_style",
"subject": "The Creation of Adam",
"object": "Renaissance",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_styles",
"tags": ["renaissance", "michelangelo", "fresco"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l1_p2_art_style_010",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l1",
"partId": "p2",
"relation": "art_style",
"subject": "Irises",
"object": "Post-Impressionism",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_styles",
"tags": ["post-impressionism", "vincent van gogh", "flowers"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l1_p2_art_style_011",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l1",
"partId": "p2",
"relation": "art_style",
"subject": "The Kiss",
"object": "Symbolism",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_styles",
"tags": ["symbolism", "gustav klimt", "love"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l1_p2_art_style_012",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l1",
"partId": "p2",
"relation": "art_style",
"subject": "Las Meninas",
"object": "Baroque",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_styles",
"tags": ["baroque", "diego velazquez", "court"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l1_p2_art_style_013",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l1",
"partId": "p2",
"relation": "art_style",
"subject": "Liberty Leading the People",
"object": "Romanticism",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_styles",
"tags": ["romanticism", "eugene delacroix", "revolution"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l1_p2_art_style_014",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l1",
"partId": "p2",
"relation": "art_style",
"subject": "The Son of Man",
"object": "Surrealism",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_styles",
"tags": ["surrealism", "rene magritte", "portrait"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l1_p2_art_style_015",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l1",
"partId": "p2",
"relation": "art_style",
"subject": "Bal du moulin de la Galette",
"object": "Impressionism",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_styles",
"tags": ["impressionism", "pierre-auguste renoir", "crowd"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l1_p2_art_style_016",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l1",
"partId": "p2",
"relation": "art_style",
"subject": "The Sleeping Gypsy",
"object": "Naive Art",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_styles",
"tags": ["naive art", "henri rousseau", "desert"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l1_p2_art_style_017",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l1",
"partId": "p2",
"relation": "art_style",
"subject": "Nighthawks",
"object": "Realism",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_styles",
"tags": ["realism", "edward hopper", "night"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l1_p2_art_style_018",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l1",
"partId": "p2",
"relation": "art_style",
"subject": "The Arnolfini Portrait",
"object": "Northern Renaissance",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_styles",
"tags": ["northern renaissance", "jan van eyck", "portrait"],
"introducedIn": "C",
"factPriority": "secondary"
},
];

const conceptSet: LocalConceptSet = {
  id: "art_painting_l1_p2",
  concepts,
};

export default conceptSet;
