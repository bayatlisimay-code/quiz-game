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
"id": "art_painting_l2_p1_nationality_of_artist_001",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_artist",
"subject": "Leonardo da Vinci",
"object": "Italian",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "artist_nationalities",
"tags": ["renaissance", "mona lisa", "italy"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l2_p1_nationality_of_artist_002",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_artist",
"subject": "Vincent van Gogh",
"object": "Dutch",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "artist_nationalities",
"tags": ["post-impressionism", "the starry night", "netherlands"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l2_p1_nationality_of_artist_003",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_artist",
"subject": "Pablo Picasso",
"object": "Spanish",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "artist_nationalities",
"tags": ["cubism", "guernica", "spain"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l2_p1_nationality_of_artist_004",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_artist",
"subject": "Claude Monet",
"object": "French",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "artist_nationalities",
"tags": ["impressionism", "water lilies", "france"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l2_p1_nationality_of_artist_005",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_artist",
"subject": "Salvador Dali",
"object": "Spanish",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "artist_nationalities",
"tags": ["surrealism", "the persistence of memory", "spain"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l2_p1_nationality_of_artist_006",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_artist",
"subject": "Rembrandt",
"object": "Dutch",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "artist_nationalities",
"tags": ["baroque", "the night watch", "netherlands"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l2_p1_nationality_of_artist_007",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_artist",
"subject": "Michelangelo",
"object": "Italian",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "artist_nationalities",
"tags": ["renaissance", "the creation of adam", "italy"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l2_p1_nationality_of_artist_008",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_artist",
"subject": "Johannes Vermeer",
"object": "Dutch",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "artist_nationalities",
"tags": ["baroque", "girl with a pearl earring", "netherlands"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l2_p1_nationality_of_artist_009",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_artist",
"subject": "Edvard Munch",
"object": "Norwegian",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "artist_nationalities",
"tags": ["expressionism", "the scream", "norway"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l2_p1_nationality_of_artist_010",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_artist",
"subject": "Gustav Klimt",
"object": "Austrian",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "artist_nationalities",
"tags": ["symbolism", "the kiss", "austria"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l2_p1_nationality_of_artist_011",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_artist",
"subject": "Henri Matisse",
"object": "French",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "artist_nationalities",
"tags": ["fauvism", "the dance", "france"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l2_p1_nationality_of_artist_012",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_artist",
"subject": "Diego Velazquez",
"object": "Spanish",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "artist_nationalities",
"tags": ["baroque", "las meninas", "spain"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l2_p1_nationality_of_artist_013",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_artist",
"subject": "Sandro Botticelli",
"object": "Italian",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "artist_nationalities",
"tags": ["renaissance", "the birth of venus", "italy"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l2_p1_nationality_of_artist_014",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_artist",
"subject": "Paul Cezanne",
"object": "French",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "artist_nationalities",
"tags": ["post-impressionism", "the card players", "france"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l2_p1_nationality_of_artist_015",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_artist",
"subject": "Rene Magritte",
"object": "Belgian",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "artist_nationalities",
"tags": ["surrealism", "the son of man", "belgium"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l2_p1_nationality_of_artist_016",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_artist",
"subject": "Jackson Pollock",
"object": "American",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "artist_nationalities",
"tags": ["abstract expressionism", "no. 5, 1948", "usa"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l2_p1_nationality_of_artist_017",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_artist",
"subject": "Grant Wood",
"object": "American",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "artist_nationalities",
"tags": ["regionalism", "american gothic", "usa"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l2_p1_nationality_of_artist_018",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_artist",
"subject": "Georges Seurat",
"object": "French",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "artist_nationalities",
"tags": ["neo-impressionism", "la grande jatte", "france"],
"introducedIn": "C",
"factPriority": "secondary"
},
];

const conceptSet: LocalConceptSet = {
  id: "art_painting_l2_p1",
  concepts,
};

export default conceptSet;