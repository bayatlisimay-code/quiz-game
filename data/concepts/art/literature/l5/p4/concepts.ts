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
"id": "art_literature_l5_p4_published_in_year_001",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p4",
"relation": "published_in_year",
"subject": "Emma",
"object": "1815",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "years",
"tags": ["classic", "austen", "romance"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l5_p4_published_in_year_002",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p4",
"relation": "published_in_year",
"subject": "Animal Farm",
"object": "1945",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "years",
"tags": ["orwell", "satire", "classic"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l5_p4_published_in_year_003",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p4",
"relation": "published_in_year",
"subject": "Oliver Twist",
"object": "1838",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "years",
"tags": ["dickens", "classic", "realism"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l5_p4_published_in_year_004",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p4",
"relation": "published_in_year",
"subject": "Anna Karenina",
"object": "1878",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "years",
"tags": ["tolstoy", "classic", "realism"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l5_p4_published_in_year_005",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p4",
"relation": "published_in_year",
"subject": "The Adventures of Tom Sawyer",
"object": "1876",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "years",
"tags": ["twain", "adventure", "classic"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l5_p4_published_in_year_006",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p4",
"relation": "published_in_year",
"subject": "The Hobbit",
"object": "1937",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "years",
"tags": ["tolkien", "fantasy", "adventure"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l5_p4_published_in_year_007",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p4",
"relation": "published_in_year",
"subject": "To Kill a Mockingbird",
"object": "1960",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "years",
"tags": ["modern classic", "drama"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l5_p4_published_in_year_008",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p4",
"relation": "published_in_year",
"subject": "The Brothers Karamazov",
"object": "1880",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "years",
"tags": ["dostoevsky", "philosophy", "classic"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_literature_l5_p4_published_in_year_009",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p4",
"relation": "published_in_year",
"subject": "The Trial",
"object": "1925",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "years",
"tags": ["kafka", "philosophy", "classic"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_literature_l5_p4_published_in_year_010",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p4",
"relation": "published_in_year",
"subject": "The Plague",
"object": "1947",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "years",
"tags": ["camus", "philosophy", "classic"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_literature_l5_p4_published_in_year_011",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p4",
"relation": "published_in_year",
"subject": "The Picture of Dorian Gray",
"object": "1890",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "years",
"tags": ["wilde", "gothic", "classic"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_literature_l5_p4_published_in_year_012",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p4",
"relation": "published_in_year",
"subject": "And Then There Were None",
"object": "1939",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "years",
"tags": ["christie", "mystery", "crime"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_literature_l5_p4_published_in_year_013",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p4",
"relation": "published_in_year",
"subject": "The Great Gatsby",
"object": "1925",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "years",
"tags": ["modern classic", "realism"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_literature_l5_p4_published_in_year_014",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p4",
"relation": "published_in_year",
"subject": "Love in the Time of Cholera",
"object": "1985",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "years",
"tags": ["garcia marquez", "romance", "classic"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_literature_l5_p4_published_in_year_015",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p4",
"relation": "published_in_year",
"subject": "It",
"object": "1986",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "years",
"tags": ["king", "horror", "modern"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_literature_l5_p4_published_in_year_016",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p4",
"relation": "published_in_year",
"subject": "A Tale of a Tub",
"object": "1704",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "years",
"tags": ["swift", "satire", "classic"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_literature_l5_p4_published_in_year_017",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p4",
"relation": "published_in_year",
"subject": "Jane Eyre",
"object": "1847",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "years",
"tags": ["gothic", "romance", "classic"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_literature_l5_p4_published_in_year_018",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p4",
"relation": "published_in_year",
"subject": "The Hunger Games",
"object": "2008",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "years",
"tags": ["dystopian", "modern", "adventure"],
"introducedIn": "C",
"factPriority": "secondary"
}
]
  
const conceptSet: LocalConceptSet = {
  id: "art_literature_l5_p4",
  concepts,
};

export default conceptSet;