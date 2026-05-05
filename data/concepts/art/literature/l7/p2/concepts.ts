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
"id": "art_literature_l7_p2_origin_of_movement_001",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p2",
"relation": "origin_of_movement",
"subject": "renaissance",
"object": "italy",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "regions",
"tags": ["renaissance", "europe"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l7_p2_origin_of_movement_002",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p2",
"relation": "origin_of_movement",
"subject": "romanticism",
"object": "europe",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "regions",
"tags": ["romanticism", "europe"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l7_p2_origin_of_movement_003",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p2",
"relation": "origin_of_movement",
"subject": "realism",
"object": "france",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "regions",
"tags": ["realism", "france"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l7_p2_origin_of_movement_004",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p2",
"relation": "origin_of_movement",
"subject": "naturalism",
"object": "france",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "regions",
"tags": ["naturalism", "france"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l7_p2_origin_of_movement_005",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p2",
"relation": "origin_of_movement",
"subject": "symbolism",
"object": "france",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "regions",
"tags": ["symbolism", "france"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l7_p2_origin_of_movement_006",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p2",
"relation": "origin_of_movement",
"subject": "modernism",
"object": "europe",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "regions",
"tags": ["modernism", "europe"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l7_p2_origin_of_movement_007",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p2",
"relation": "origin_of_movement",
"subject": "postmodernism",
"object": "united states",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "regions",
"tags": ["postmodernism", "united states"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l7_p2_origin_of_movement_008",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p2",
"relation": "origin_of_movement",
"subject": "existentialism",
"object": "france",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "regions",
"tags": ["existentialism", "france"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_literature_l7_p2_origin_of_movement_009",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p2",
"relation": "origin_of_movement",
"subject": "surrealism",
"object": "france",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "regions",
"tags": ["surrealism", "france"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_literature_l7_p2_origin_of_movement_010",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p2",
"relation": "origin_of_movement",
"subject": "magical realism",
"object": "latin america",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "regions",
"tags": ["magical realism", "latin america"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_literature_l7_p2_origin_of_movement_011",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p2",
"relation": "origin_of_movement",
"subject": "gothic",
"object": "england",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "regions",
"tags": ["gothic", "england"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_literature_l7_p2_origin_of_movement_012",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p2",
"relation": "origin_of_movement",
"subject": "beat generation",
"object": "united states",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "regions",
"tags": ["beat generation", "united states"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_literature_l7_p2_origin_of_movement_013",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p2",
"relation": "origin_of_movement",
"subject": "harlem renaissance",
"object": "united states",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "regions",
"tags": ["harlem renaissance", "united states"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_literature_l7_p2_origin_of_movement_014",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p2",
"relation": "origin_of_movement",
"subject": "neoclassicism",
"object": "france",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "regions",
"tags": ["neoclassicism", "france"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_literature_l7_p2_origin_of_movement_015",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p2",
"relation": "origin_of_movement",
"subject": "transcendentalism",
"object": "united states",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "regions",
"tags": ["transcendentalism", "united states"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_literature_l7_p2_origin_of_movement_016",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p2",
"relation": "origin_of_movement",
"subject": "absurdism",
"object": "europe",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "regions",
"tags": ["absurdism", "europe"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_literature_l7_p2_origin_of_movement_017",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p2",
"relation": "origin_of_movement",
"subject": "victorian realism",
"object": "england",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "regions",
"tags": ["victorian realism", "england"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_literature_l7_p2_origin_of_movement_018",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l7",
"partId": "p2",
"relation": "origin_of_movement",
"subject": "expressionism",
"object": "germany",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "regions",
"tags": ["expressionism", "germany"],
"introducedIn": "C",
"factPriority": "secondary"
}
]
  
const conceptSet: LocalConceptSet = {
  id: "art_literature_l7_p2",
  concepts,
};

export default conceptSet;