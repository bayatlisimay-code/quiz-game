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
"id": "art_literature_l5_p2_genre_of_book_001",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p2",
"relation": "genre_of_book",
"subject": "Emma",
"object": "romance",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "genres",
"tags": ["classic", "austen", "romance"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l5_p2_genre_of_book_002",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p2",
"relation": "genre_of_book",
"subject": "Animal Farm",
"object": "satire",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "genres",
"tags": ["orwell", "satire", "classic"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l5_p2_genre_of_book_003",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p2",
"relation": "genre_of_book",
"subject": "Oliver Twist",
"object": "realism",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "genres",
"tags": ["dickens", "classic", "realism"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l5_p2_genre_of_book_004",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p2",
"relation": "genre_of_book",
"subject": "Anna Karenina",
"object": "realism",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "genres",
"tags": ["tolstoy", "classic", "realism"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l5_p2_genre_of_book_005",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p2",
"relation": "genre_of_book",
"subject": "The Adventures of Tom Sawyer",
"object": "adventure",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "genres",
"tags": ["twain", "adventure", "classic"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l5_p2_genre_of_book_006",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p2",
"relation": "genre_of_book",
"subject": "The Hobbit",
"object": "fantasy",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "genres",
"tags": ["tolkien", "fantasy", "adventure"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l5_p2_genre_of_book_007",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p2",
"relation": "genre_of_book",
"subject": "To Kill a Mockingbird",
"object": "drama",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "genres",
"tags": ["modern classic", "drama"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_literature_l5_p2_genre_of_book_008",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p2",
"relation": "genre_of_book",
"subject": "The Brothers Karamazov",
"object": "philosophical fiction",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "genres",
"tags": ["dostoevsky", "philosophy", "classic"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_literature_l5_p2_genre_of_book_009",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p2",
"relation": "genre_of_book",
"subject": "The Trial",
"object": "existential fiction",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "genres",
"tags": ["kafka", "philosophy", "classic"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_literature_l5_p2_genre_of_book_010",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p2",
"relation": "genre_of_book",
"subject": "The Plague",
"object": "philosophical fiction",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "genres",
"tags": ["camus", "philosophy", "classic"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_literature_l5_p2_genre_of_book_011",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p2",
"relation": "genre_of_book",
"subject": "The Picture of Dorian Gray",
"object": "gothic",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "genres",
"tags": ["wilde", "gothic", "classic"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_literature_l5_p2_genre_of_book_012",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p2",
"relation": "genre_of_book",
"subject": "And Then There Were None",
"object": "mystery",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "genres",
"tags": ["christie", "mystery", "crime"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_literature_l5_p2_genre_of_book_013",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p2",
"relation": "genre_of_book",
"subject": "The Great Gatsby",
"object": "modernist fiction",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "genres",
"tags": ["modern classic", "realism"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_literature_l5_p2_genre_of_book_014",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p2",
"relation": "genre_of_book",
"subject": "Love in the Time of Cholera",
"object": "romance",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "genres",
"tags": ["garcia marquez", "romance", "classic"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_literature_l5_p2_genre_of_book_015",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p2",
"relation": "genre_of_book",
"subject": "It",
"object": "horror",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "genres",
"tags": ["king", "horror", "modern"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_literature_l5_p2_genre_of_book_016",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p2",
"relation": "genre_of_book",
"subject": "A Tale of a Tub",
"object": "satire",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "genres",
"tags": ["swift", "satire", "classic"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_literature_l5_p2_genre_of_book_017",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p2",
"relation": "genre_of_book",
"subject": "Jane Eyre",
"object": "gothic",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "genres",
"tags": ["gothic", "romance", "classic"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_literature_l5_p2_genre_of_book_018",
"topicId": "art",
"subtopicId": "literature",
"levelId": "l5",
"partId": "p2",
"relation": "genre_of_book",
"subject": "The Hunger Games",
"object": "dystopian",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "genres",
"tags": ["dystopian", "modern", "adventure"],
"introducedIn": "C",
"factPriority": "secondary"
}
]
  
const conceptSet: LocalConceptSet = {
  id: "art_literature_l5_p2",
  concepts,
};

export default conceptSet;