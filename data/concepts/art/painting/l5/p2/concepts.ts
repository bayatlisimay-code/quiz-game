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
"id": "art_painting_l5_p2_surface_of_001",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p2",
"relation": "surface_of",
"subject": "Mona Lisa",
"object": "wood panel",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "painting_surfaces",
"tags": ["wood panel", "renaissance", "leonardo"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l5_p2_surface_of_002",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p2",
"relation": "surface_of",
"subject": "The Birth of Venus",
"object": "canvas",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "painting_surfaces",
"tags": ["canvas", "botticelli", "renaissance"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l5_p2_surface_of_003",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p2",
"relation": "surface_of",
"subject": "Girl with a Pearl Earring",
"object": "canvas",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "painting_surfaces",
"tags": ["canvas", "vermeer", "portrait"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l5_p2_surface_of_004",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p2",
"relation": "surface_of",
"subject": "Sunflowers",
"object": "canvas",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_surfaces",
"tags": ["canvas", "van gogh", "still life"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l5_p2_surface_of_005",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p2",
"relation": "surface_of",
"subject": "The Starry Night",
"object": "canvas",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_surfaces",
"tags": ["canvas", "van gogh", "night"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l5_p2_surface_of_006",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p2",
"relation": "surface_of",
"subject": "The Night Watch",
"object": "canvas",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_surfaces",
"tags": ["canvas", "rembrandt", "group portrait"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l5_p2_surface_of_007",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p2",
"relation": "surface_of",
"subject": "The Arnolfini Portrait",
"object": "wood panel",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_surfaces",
"tags": ["wood panel", "van eyck", "portrait"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l5_p2_surface_of_008",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p2",
"relation": "surface_of",
"subject": "Las Meninas",
"object": "canvas",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_surfaces",
"tags": ["canvas", "velazquez", "court"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l5_p2_surface_of_009",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p2",
"relation": "surface_of",
"subject": "Impression, Sunrise",
"object": "canvas",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_surfaces",
"tags": ["canvas", "monet", "harbor"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l5_p2_surface_of_010",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p2",
"relation": "surface_of",
"subject": "Water Lilies",
"object": "canvas",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_surfaces",
"tags": ["canvas", "monet", "garden"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l5_p2_surface_of_011",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p2",
"relation": "surface_of",
"subject": "The Persistence of Memory",
"object": "canvas",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_surfaces",
"tags": ["canvas", "dali", "surrealism"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l5_p2_surface_of_012",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p2",
"relation": "surface_of",
"subject": "A Sunday Afternoon on the Island of La Grande Jatte",
"object": "canvas",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "painting_surfaces",
"tags": ["canvas", "seurat", "pointillism"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l5_p2_surface_of_013",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p2",
"relation": "surface_of",
"subject": "The Last Judgment",
"object": "plaster",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "painting_surfaces",
"tags": ["plaster", "michelangelo", "fresco"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l5_p2_surface_of_014",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p2",
"relation": "surface_of",
"subject": "The School of Athens",
"object": "plaster",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "painting_surfaces",
"tags": ["plaster", "raphael", "fresco"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_painting_l5_p2_surface_of_015",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p2",
"relation": "surface_of",
"subject": "The Scream",
"object": "cardboard",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "painting_surfaces",
"tags": ["cardboard", "munch", "expressionism"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l5_p2_surface_of_016",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p2",
"relation": "surface_of",
"subject": "Campbell's Soup Cans",
"object": "canvas",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "painting_surfaces",
"tags": ["canvas", "warhol", "pop art"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l5_p2_surface_of_017",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p2",
"relation": "surface_of",
"subject": "Christina's World",
"object": "wood panel",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "painting_surfaces",
"tags": ["wood panel", "wyeth", "tempera"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l5_p2_surface_of_018",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p2",
"relation": "surface_of",
"subject": "Whistler's Mother",
"object": "canvas",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "painting_surfaces",
"tags": ["canvas", "whistler", "portrait"],
"introducedIn": "C",
"factPriority": "secondary"
},
]
const conceptSet: LocalConceptSet = {
  id: "art_painting_l5_p2",
  concepts,
};

export default conceptSet;