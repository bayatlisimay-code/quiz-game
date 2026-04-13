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
"id": "art_painting_l2_p4_movement_of_artist_001",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p4",
"relation": "movement_of_artist",
"subject": "Leonardo da Vinci",
"object": "Renaissance",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "art_movements",
"tags": ["italian", "mona lisa", "high renaissance"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l2_p4_movement_of_artist_002",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p4",
"relation": "movement_of_artist",
"subject": "Vincent van Gogh",
"object": "Post-Impressionism",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "art_movements",
"tags": ["dutch", "the starry night", "19th century"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l2_p4_movement_of_artist_003",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p4",
"relation": "movement_of_artist",
"subject": "Pablo Picasso",
"object": "Cubism",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "art_movements",
"tags": ["spanish", "guernica", "modern art"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l2_p4_movement_of_artist_004",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p4",
"relation": "movement_of_artist",
"subject": "Claude Monet",
"object": "Impressionism",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "art_movements",
"tags": ["french", "water lilies", "light"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l2_p4_movement_of_artist_005",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p4",
"relation": "movement_of_artist",
"subject": "Salvador Dali",
"object": "Surrealism",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "art_movements",
"tags": ["spanish", "the persistence of memory", "dreamlike"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l2_p4_movement_of_artist_006",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p4",
"relation": "movement_of_artist",
"subject": "Rembrandt",
"object": "Baroque",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "art_movements",
"tags": ["dutch", "the night watch", "dramatic light"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l2_p4_movement_of_artist_007",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p4",
"relation": "movement_of_artist",
"subject": "Michelangelo",
"object": "Renaissance",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "art_movements",
"tags": ["italian", "the creation of adam", "high renaissance"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l2_p4_movement_of_artist_008",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p4",
"relation": "movement_of_artist",
"subject": "Johannes Vermeer",
"object": "Baroque",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "art_movements",
"tags": ["dutch", "girl with a pearl earring", "17th century"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l2_p4_movement_of_artist_009",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p4",
"relation": "movement_of_artist",
"subject": "Edvard Munch",
"object": "Expressionism",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "art_movements",
"tags": ["norwegian", "the scream", "emotion"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l2_p4_movement_of_artist_010",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p4",
"relation": "movement_of_artist",
"subject": "Gustav Klimt",
"object": "Symbolism",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "art_movements",
"tags": ["austrian", "the kiss", "decorative"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l2_p4_movement_of_artist_011",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p4",
"relation": "movement_of_artist",
"subject": "Henri Matisse",
"object": "Fauvism",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "art_movements",
"tags": ["french", "the dance", "bold color"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l2_p4_movement_of_artist_012",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p4",
"relation": "movement_of_artist",
"subject": "Diego Velazquez",
"object": "Baroque",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "art_movements",
"tags": ["spanish", "las meninas", "court painting"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l2_p4_movement_of_artist_013",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p4",
"relation": "movement_of_artist",
"subject": "Sandro Botticelli",
"object": "Renaissance",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "art_movements",
"tags": ["italian", "the birth of venus", "mythology"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l2_p4_movement_of_artist_014",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p4",
"relation": "movement_of_artist",
"subject": "Paul Cezanne",
"object": "Post-Impressionism",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "art_movements",
"tags": ["french", "the card players", "structure"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l2_p4_movement_of_artist_015",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p4",
"relation": "movement_of_artist",
"subject": "Rene Magritte",
"object": "Surrealism",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "art_movements",
"tags": ["belgian", "the son of man", "conceptual"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l2_p4_movement_of_artist_016",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p4",
"relation": "movement_of_artist",
"subject": "Jackson Pollock",
"object": "Abstract Expressionism",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "art_movements",
"tags": ["american", "no. 5, 1948", "drip painting"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_painting_l2_p4_movement_of_artist_017",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p4",
"relation": "movement_of_artist",
"subject": "Grant Wood",
"object": "Regionalism",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "art_movements",
"tags": ["american", "american gothic", "rural america"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l2_p4_movement_of_artist_018",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p4",
"relation": "movement_of_artist",
"subject": "Georges Seurat",
"object": "Neo-Impressionism",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "art_movements",
"tags": ["french", "la grande jatte", "pointillism"],
"introducedIn": "C",
"factPriority": "secondary"
}
];

const conceptSet: LocalConceptSet = {
  id: "your_correct_id_here",
  concepts,
};

export default conceptSet;