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
"id": "art_painting_l5_p4_technique_of_001",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p4",
"relation": "technique_of",
"subject": "Mona Lisa",
"object": "sfumato",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "painting_techniques",
"tags": ["sfumato", "leonardo", "renaissance"],
"introducedIn": "A",
"factPriority": "core"
},
{
  "id": "art_painting_l5_p4_technique_of_002",
  "topicId": "art",
  "subtopicId": "painting",
  "levelId": "l5",
  "partId": "p4",
  "relation": "technique_of",
  "subject": "The Birth of Venus",
  "object": "tempera layering",
  "answerKind": "short",
  "difficulty": 1,
  "distractorGroup": "painting_techniques",
  "tags": ["tempera layering", "botticelli", "renaissance"],
  "introducedIn": "A",
  "factPriority": "core"
},
{
"id": "art_painting_l5_p4_technique_of_003",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p4",
"relation": "technique_of",
"subject": "Girl with a Pearl Earring",
"object": "glazing",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "painting_techniques",
"tags": ["glazing", "vermeer", "oil painting"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l5_p4_technique_of_004",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p4",
"relation": "technique_of",
"subject": "Sunflowers",
"object": "impasto",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_techniques",
"tags": ["impasto", "van gogh", "thick paint"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l5_p4_technique_of_005",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p4",
"relation": "technique_of",
"subject": "The Starry Night",
"object": "impasto",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_techniques",
"tags": ["impasto", "van gogh", "brushwork"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l5_p4_technique_of_006",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p4",
"relation": "technique_of",
"subject": "The Night Watch",
"object": "chiaroscuro",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_techniques",
"tags": ["chiaroscuro", "rembrandt", "baroque"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l5_p4_technique_of_007",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p4",
"relation": "technique_of",
"subject": "The Arnolfini Portrait",
"object": "glazing",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_techniques",
"tags": ["glazing", "van eyck", "oil painting"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l5_p4_technique_of_008",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p4",
"relation": "technique_of",
"subject": "Las Meninas",
"object": "loose brushwork",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_techniques",
"tags": ["loose brushwork", "velazquez", "baroque"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l5_p4_technique_of_009",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p4",
"relation": "technique_of",
"subject": "Impression, Sunrise",
"object": "broken brushwork",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_techniques",
"tags": ["broken brushwork", "monet", "impressionism"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l5_p4_technique_of_010",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p4",
"relation": "technique_of",
"subject": "Water Lilies",
"object": "broken brushwork",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_techniques",
"tags": ["broken brushwork", "monet", "impressionism"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
  "id": "art_painting_l5_p4_technique_of_011",
  "topicId": "art",
  "subtopicId": "painting",
  "levelId": "l5",
  "partId": "p4",
  "relation": "technique_of",
  "subject": "The Persistence of Memory",
  "object": "fine blending",
  "answerKind": "short",
  "difficulty": 3,
  "distractorGroup": "painting_techniques",
  "tags": ["fine blending", "dali", "surrealism"],
  "introducedIn": "B",
  "factPriority": "secondary"
},
{
"id": "art_painting_l5_p4_technique_of_012",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p4",
"relation": "technique_of",
"subject": "A Sunday Afternoon on the Island of La Grande Jatte",
"object": "pointillism",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "painting_techniques",
"tags": ["pointillism", "seurat", "neo-impressionism"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l5_p4_technique_of_013",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p4",
"relation": "technique_of",
"subject": "The Last Judgment",
"object": "fresco",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "painting_techniques",
"tags": ["fresco", "michelangelo", "mural"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l5_p4_technique_of_014",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p4",
"relation": "technique_of",
"subject": "The School of Athens",
"object": "fresco",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "painting_techniques",
"tags": ["fresco", "raphael", "mural"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_painting_l5_p4_technique_of_015",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p4",
"relation": "technique_of",
"subject": "The Scream",
"object": "expressive brushwork",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "painting_techniques",
"tags": ["expressive brushwork", "munch", "expressionism"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
  "id": "art_painting_l5_p4_technique_of_016",
  "topicId": "art",
  "subtopicId": "painting",
  "levelId": "l5",
  "partId": "p4",
  "relation": "technique_of",
  "subject": "Campbell's Soup Cans",
  "object": "silkscreen",
  "answerKind": "short",
  "difficulty": 5,
  "distractorGroup": "painting_techniques",
  "tags": ["silkscreen", "warhol", "pop art"],
  "introducedIn": "C",
  "factPriority": "secondary"
},
{
"id": "art_painting_l5_p4_technique_of_017",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p4",
"relation": "technique_of",
"subject": "Christina's World",
"object": "drybrush",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "painting_techniques",
"tags": ["drybrush", "wyeth", "tempera"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l5_p4_technique_of_018",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l5",
"partId": "p4",
"relation": "technique_of",
"subject": "Whistler's Mother",
"object": "thin layering",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "painting_techniques",
"tags": ["thin layering", "whistler", "portrait"],
"introducedIn": "C",
"factPriority": "secondary"
}
]
const conceptSet: LocalConceptSet = {
  id: "art_painting_l5_p4",
  concepts,
};

export default conceptSet;