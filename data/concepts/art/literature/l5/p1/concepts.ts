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
"id": "art_literature_l5_p1_written_by_001",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p1",
"relation": "written_by",
"subject": "Emma",
"object": "Jane Austen",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "authors",
"tags": ["classic", "austen", "romance"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l5_p1_written_by_002",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p1",
"relation": "written_by",
"subject": "Animal Farm",
"object": "George Orwell",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "authors",
"tags": ["orwell", "satire", "classic"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l5_p1_written_by_003",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p1",
"relation": "written_by",
"subject": "Oliver Twist",
"object": "Charles Dickens",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "authors",
"tags": ["dickens", "classic", "realism"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l5_p1_written_by_004",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p1",
"relation": "written_by",
"subject": "Anna Karenina",
"object": "Leo Tolstoy",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "authors",
"tags": ["tolstoy", "classic", "realism"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l5_p1_written_by_005",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p1",
"relation": "written_by",
"subject": "The Adventures of Tom Sawyer",
"object": "Mark Twain",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "authors",
"tags": ["twain", "adventure", "classic"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l5_p1_written_by_006",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p1",
"relation": "written_by",
"subject": "The Hobbit",
"object": "J. R. R. Tolkien",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "authors",
"tags": ["tolkien", "fantasy", "adventure"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l5_p1_written_by_007",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p1",
"relation": "written_by",
"subject": "To Kill a Mockingbird",
"object": "Harper Lee",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "authors",
"tags": ["modern classic", "realism"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l5_p1_written_by_008",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p1",
"relation": "written_by",
"subject": "The Brothers Karamazov",
"object": "Fyodor Dostoevsky",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "authors",
"tags": ["dostoevsky", "philosophy", "classic"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_literature_l5_p1_written_by_009",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p1",
"relation": "written_by",
"subject": "The Trial",
"object": "Franz Kafka",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "authors",
"tags": ["kafka", "surreal", "classic"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_literature_l5_p1_written_by_010",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p1",
"relation": "written_by",
"subject": "The Plague",
"object": "Albert Camus",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "authors",
"tags": ["camus", "philosophy", "classic"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_literature_l5_p1_written_by_011",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p1",
"relation": "written_by",
"subject": "The Picture of Dorian Gray",
"object": "Oscar Wilde",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "authors",
"tags": ["wilde", "gothic", "classic"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_literature_l5_p1_written_by_012",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p1",
"relation": "written_by",
"subject": "And Then There Were None",
"object": "Agatha Christie",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "authors",
"tags": ["christie", "mystery", "crime"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_literature_l5_p1_written_by_013",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p1",
"relation": "written_by",
"subject": "The Great Gatsby",
"object": "F. Scott Fitzgerald",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "authors",
"tags": ["modern classic", "realism"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_literature_l5_p1_written_by_014",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p1",
"relation": "written_by",
"subject": "Love in the Time of Cholera",
"object": "Gabriel Garcia Marquez",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "authors",
"tags": ["garcia marquez", "romance", "classic"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_literature_l5_p1_written_by_015",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p1",
"relation": "written_by",
"subject": "It",
"object": "Stephen King",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "authors",
"tags": ["king", "horror", "modern"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_literature_l5_p1_written_by_016",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p1",
"relation": "written_by",
"subject": "A Tale of a Tub",
"object": "Jonathan Swift",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "authors",
"tags": ["swift", "satire", "classic"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_literature_l5_p1_written_by_017",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p1",
"relation": "written_by",
"subject": "Jane Eyre",
"object": "Charlotte Bronte",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "authors",
"tags": ["gothic", "romance", "classic"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_literature_l5_p1_written_by_018",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p1",
"relation": "written_by",
"subject": "The Hunger Games",
"object": "Suzanne Collins",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "authors",
"tags": ["dystopian", "modern", "adventure"],
"introducedIn": "C",
"factPriority": "secondary"
}
]
  
const conceptSet: LocalConceptSet = {
  id: "art_literature_l5_p1",
  concepts,
};

export default conceptSet;