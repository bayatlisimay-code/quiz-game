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
"id": "art_painting_l5_p1_medium_of_001",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p1",
"relation": "medium_of",
"subject": "Mona Lisa",
"object": "oil paint",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "painting_mediums",
"tags": ["oil paint", "renaissance", "leonardo"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l5_p1_medium_of_002",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p1",
"relation": "medium_of",
"subject": "The Birth of Venus",
"object": "tempera",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "painting_mediums",
"tags": ["tempera", "renaissance", "botticelli"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l5_p1_medium_of_003",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p1",
"relation": "medium_of",
"subject": "Girl with a Pearl Earring",
"object": "oil paint",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "painting_mediums",
"tags": ["oil paint", "baroque", "vermeer"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l5_p1_medium_of_004",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p1",
"relation": "medium_of",
"subject": "Sunflowers",
"object": "oil paint",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_mediums",
"tags": ["oil paint", "van gogh", "still life"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l5_p1_medium_of_005",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p1",
"relation": "medium_of",
"subject": "The Starry Night",
"object": "oil paint",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_mediums",
"tags": ["oil paint", "van gogh", "post-impressionism"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l5_p1_medium_of_006",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p1",
"relation": "medium_of",
"subject": "The Night Watch",
"object": "oil paint",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_mediums",
"tags": ["oil paint", "rembrandt", "baroque"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l5_p1_medium_of_007",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p1",
"relation": "medium_of",
"subject": "The Arnolfini Portrait",
"object": "oil paint",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_mediums",
"tags": ["oil paint", "van eyck", "northern renaissance"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l5_p1_medium_of_008",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p1",
"relation": "medium_of",
"subject": "Las Meninas",
"object": "oil paint",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_mediums",
"tags": ["oil paint", "velazquez", "baroque"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l5_p1_medium_of_009",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p1",
"relation": "medium_of",
"subject": "Impression, Sunrise",
"object": "oil paint",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_mediums",
"tags": ["oil paint", "monet", "impressionism"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l5_p1_medium_of_010",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p1",
"relation": "medium_of",
"subject": "Water Lilies",
"object": "oil paint",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_mediums",
"tags": ["oil paint", "monet", "garden"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l5_p1_medium_of_011",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p1",
"relation": "medium_of",
"subject": "The Persistence of Memory",
"object": "oil paint",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_mediums",
"tags": ["oil paint", "dali", "surrealism"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l5_p1_medium_of_012",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p1",
"relation": "medium_of",
"subject": "A Sunday Afternoon on the Island of La Grande Jatte",
"object": "oil paint",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "painting_mediums",
"tags": ["oil paint", "seurat", "neo-impressionism"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l5_p1_medium_of_013",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p1",
"relation": "medium_of",
"subject": "The Last Judgment",
"object": "fresco",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "painting_mediums",
"tags": ["fresco", "michelangelo", "religious"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l5_p1_medium_of_014",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p1",
"relation": "medium_of",
"subject": "The School of Athens",
"object": "fresco",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "painting_mediums",
"tags": ["fresco", "raphael", "renaissance"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_painting_l5_p1_medium_of_015",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p1",
"relation": "medium_of",
"subject": "The Scream",
"object": "tempera",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "painting_mediums",
"tags": ["tempera", "munch", "expressionism"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l5_p1_medium_of_016",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p1",
"relation": "medium_of",
"subject": "Campbell's Soup Cans",
"object": "acrylic",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "painting_mediums",
"tags": ["acrylic", "warhol", "pop art"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l5_p1_medium_of_017",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p1",
"relation": "medium_of",
"subject": "Christina's World",
"object": "tempera",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "painting_mediums",
"tags": ["tempera", "wyeth", "american"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l5_p1_medium_of_018",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p1",
"relation": "medium_of",
"subject": "Whistler's Mother",
"object": "oil paint",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "painting_mediums",
"tags": ["oil paint", "whistler", "portrait"],
"introducedIn": "C",
"factPriority": "secondary"
}
]
const conceptSet: LocalConceptSet = {
  id: "art_painting_l5_p1",
  concepts,
};

export default conceptSet;