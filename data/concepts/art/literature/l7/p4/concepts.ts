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
"id": "art_literature_l7_p4_famous_book_of_movement_001",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p4",
"relation": "famous_book_of_movement",
"subject": "renaissance",
"object": "Don Quixote",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "books",
"tags": ["renaissance", "satire"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l7_p4_famous_book_of_movement_002",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p4",
"relation": "famous_book_of_movement",
"subject": "romanticism",
"object": "Les Miserables",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "books",
"tags": ["romanticism", "historical fiction"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l7_p4_famous_book_of_movement_003",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p4",
"relation": "famous_book_of_movement",
"subject": "realism",
"object": "Old Goriot",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "books",
"tags": ["realism", "society"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l7_p4_famous_book_of_movement_004",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p4",
"relation": "famous_book_of_movement",
"subject": "naturalism",
"object": "Sister Carrie",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "books",
"tags": ["naturalism", "realism"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l7_p4_famous_book_of_movement_005",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p4",
"relation": "famous_book_of_movement",
"subject": "symbolism",
"object": "A Season in Hell",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "books",
"tags": ["symbolism", "poetry"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l7_p4_famous_book_of_movement_006",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p4",
"relation": "famous_book_of_movement",
"subject": "modernism",
"object": "Mrs Dalloway",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "books",
"tags": ["modernism", "experimental"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l7_p4_famous_book_of_movement_007",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p4",
"relation": "famous_book_of_movement",
"subject": "postmodernism",
"object": "Slaughterhouse-Five",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "books",
"tags": ["postmodernism", "satire"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l7_p4_famous_book_of_movement_008",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p4",
"relation": "famous_book_of_movement",
"subject": "existentialism",
"object": "Nausea",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "books",
"tags": ["existentialism", "philosophy"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_literature_l7_p4_famous_book_of_movement_009",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p4",
"relation": "famous_book_of_movement",
"subject": "surrealism",
"object": "Nadja",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "books",
"tags": ["surrealism", "dreams"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_literature_l7_p4_famous_book_of_movement_010",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p4",
"relation": "famous_book_of_movement",
"subject": "magical realism",
"object": "The House of the Spirits",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "books",
"tags": ["magical realism", "magic"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_literature_l7_p4_famous_book_of_movement_011",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p4",
"relation": "famous_book_of_movement",
"subject": "gothic",
"object": "The Mysteries of Udolpho",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "books",
"tags": ["gothic", "horror"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_literature_l7_p4_famous_book_of_movement_012",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p4",
"relation": "famous_book_of_movement",
"subject": "beat generation",
"object": "Howl",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "books",
"tags": ["beat generation", "poetry"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_literature_l7_p4_famous_book_of_movement_013",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p4",
"relation": "famous_book_of_movement",
"subject": "The Weary Blues",
"object": "Color",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "books",
"tags": ["harlem renaissance", "poetry"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_literature_l7_p4_famous_book_of_movement_014",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p4",
"relation": "famous_book_of_movement",
"subject": "neoclassicism",
"object": "The Rape of the Lock",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "books",
"tags": ["neoclassicism", "satire"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_literature_l7_p4_famous_book_of_movement_015",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p4",
"relation": "famous_book_of_movement",
"subject": "transcendentalism",
"object": "Woman in the Nineteenth Century",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "books",
"tags": ["transcendentalism", "philosophy"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_literature_l7_p4_famous_book_of_movement_016",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p4",
"relation": "famous_book_of_movement",
"subject": "absurdism",
"object": "The Bald Soprano",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "books",
"tags": ["absurdism", "drama"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_literature_l7_p4_famous_book_of_movement_017",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p4",
"relation": "famous_book_of_movement",
"subject": "victorian realism",
"object": "North and South",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "books",
"tags": ["victorian realism", "realism"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_literature_l7_p4_famous_book_of_movement_018",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p4",
"relation": "famous_book_of_movement",
"subject": "expressionism",
"object": "From Morn to Midnight",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "books",
"tags": ["expressionism", "drama"],
"introducedIn": "C",
"factPriority": "secondary"
}
]
  
const conceptSet: LocalConceptSet = {
  id: "art_literature_l7_p4",
  concepts,
};

export default conceptSet;
