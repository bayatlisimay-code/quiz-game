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
"id": "art_literature_l7_p1_main_authors_of_movement_001",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p1",
"relation": "main_authors_of_movement",
"subject": "renaissance",
"object": "Miguel de Cervantes",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "authors",
"tags": ["renaissance", "satire"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l7_p1_main_authors_of_movement_002",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p1",
"relation": "main_authors_of_movement",
"subject": "romanticism",
"object": "Victor Hugo",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "authors",
"tags": ["romanticism", "historical fiction"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l7_p1_main_authors_of_movement_003",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p1",
"relation": "main_authors_of_movement",
"subject": "realism",
"object": "Honore de Balzac",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "authors",
"tags": ["realism", "society"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l7_p1_main_authors_of_movement_004",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p1",
"relation": "main_authors_of_movement",
"subject": "naturalism",
"object": "Theodore Dreiser",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "authors",
"tags": ["naturalism", "realism"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l7_p1_main_authors_of_movement_005",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p1",
"relation": "main_authors_of_movement",
"subject": "symbolism",
"object": "Arthur Rimbaud",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "authors",
"tags": ["symbolism", "poetry"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l7_p1_main_authors_of_movement_006",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p1",
"relation": "main_authors_of_movement",
"subject": "modernism",
"object": "Virginia Woolf",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "authors",
"tags": ["modernism", "experimental"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l7_p1_main_authors_of_movement_007",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p1",
"relation": "main_authors_of_movement",
"subject": "postmodernism",
"object": "Kurt Vonnegut",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "authors",
"tags": ["postmodernism", "satire"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l7_p1_main_authors_of_movement_008",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p1",
"relation": "main_authors_of_movement",
"subject": "existentialism",
"object": "Jean-Paul Sartre",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "authors",
"tags": ["existentialism", "philosophy"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_literature_l7_p1_main_authors_of_movement_009",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p1",
"relation": "main_authors_of_movement",
"subject": "surrealism",
"object": "Andre Breton",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "authors",
"tags": ["surrealism", "dreams"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_literature_l7_p1_main_authors_of_movement_010",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p1",
"relation": "main_authors_of_movement",
"subject": "magical realism",
"object": "Isabel Allende",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "authors",
"tags": ["magical realism", "magic"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_literature_l7_p1_main_authors_of_movement_011",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p1",
"relation": "main_authors_of_movement",
"subject": "gothic",
"object": "Ann Radcliffe",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "authors",
"tags": ["gothic", "horror"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_literature_l7_p1_main_authors_of_movement_012",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p1",
"relation": "main_authors_of_movement",
"subject": "beat generation",
"object": "Allen Ginsberg",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "authors",
"tags": ["beat generation", "poetry"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_literature_l7_p1_main_authors_of_movement_013",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p1",
"relation": "main_authors_of_movement",
"subject": "harlem renaissance",
"object": "Countee Cullen",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "authors",
"tags": ["harlem renaissance", "poetry"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_literature_l7_p1_main_authors_of_movement_014",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p1",
"relation": "main_authors_of_movement",
"subject": "neoclassicism",
"object": "Alexander Pope",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "authors",
"tags": ["neoclassicism", "satire"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_literature_l7_p1_main_authors_of_movement_015",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p1",
"relation": "main_authors_of_movement",
"subject": "transcendentalism",
"object": "Margaret Fuller",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "authors",
"tags": ["transcendentalism", "philosophy"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_literature_l7_p1_main_authors_of_movement_016",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p1",
"relation": "main_authors_of_movement",
"subject": "absurdism",
"object": "Eugene Ionesco",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "authors",
"tags": ["absurdism", "drama"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_literature_l7_p1_main_authors_of_movement_017",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p1",
"relation": "main_authors_of_movement",
"subject": "victorian realism",
"object": "Elizabeth Gaskell",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "authors",
"tags": ["victorian realism", "realism"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_literature_l7_p1_main_authors_of_movement_018",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p1",
"relation": "main_authors_of_movement",
"subject": "expressionism",
"object": "Georg Kaiser",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "authors",
"tags": ["expressionism", "drama"],
"introducedIn": "C",
"factPriority": "secondary"
}
]
  
const conceptSet: LocalConceptSet = {
  id: "art_literature_l7_p1",
  concepts,
};

export default conceptSet;