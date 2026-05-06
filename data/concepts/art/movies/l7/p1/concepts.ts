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
"id": "art_movies_l7_p1_nationality_of_director_001",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "Bong Joon Ho",
"object": "Korean",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l7_p1_nationality_of_director_002",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "Greta Gerwig",
"object": "American",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l7_p1_nationality_of_director_003",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "Jane Campion",
"object": "New Zealander",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "A",
"factPriority": "secondary"
},
{
"id": "art_movies_l7_p1_nationality_of_director_004",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "Ang Lee",
"object": "Taiwanese",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l7_p1_nationality_of_director_005",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "David Fincher",
"object": "American",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l7_p1_nationality_of_director_006",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "Denis Villeneuve",
"object": "Canadian",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l7_p1_nationality_of_director_007",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "Kathryn Bigelow",
"object": "American",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "A",
"factPriority": "secondary"
},
{
"id": "art_movies_l7_p1_nationality_of_director_008",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "Federico Fellini",
"object": "Italian",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l7_p1_nationality_of_director_009",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "Jean-Luc Godard",
"object": "French",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l7_p1_nationality_of_director_010",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "Agnes Varda",
"object": "French",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_movies_l7_p1_nationality_of_director_011",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "Pedro Almodovar",
"object": "Spanish",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l7_p1_nationality_of_director_012",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "Wong Kar Wai",
"object": "Hong Konger",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l7_p1_nationality_of_director_013",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "Satyajit Ray",
"object": "Indian",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l7_p1_nationality_of_director_014",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "Orson Welles",
"object": "American",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l7_p1_nationality_of_director_015",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "Billy Wilder",
"object": "American",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l7_p1_nationality_of_director_016",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "Fritz Lang",
"object": "German",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l7_p1_nationality_of_director_017",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "John Ford",
"object": "American",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l7_p1_nationality_of_director_018",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l7",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "Sergio Leone",
"object": "Italian",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "C",
"factPriority": "core"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_movies_l7_p1",
  concepts,
};

export default conceptSet;