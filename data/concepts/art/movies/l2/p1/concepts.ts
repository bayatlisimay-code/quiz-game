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
"id": "art_movies_l2_p1_nationality_of_director_001",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "Steven Spielberg",
"object": "American",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l2_p1_nationality_of_director_002",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "Alfred Hitchcock",
"object": "British",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l2_p1_nationality_of_director_003",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "Martin Scorsese",
"object": "American",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l2_p1_nationality_of_director_004",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "Christopher Nolan",
"object": "British",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l2_p1_nationality_of_director_005",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "Quentin Tarantino",
"object": "American",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l2_p1_nationality_of_director_006",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "James Cameron",
"object": "Canadian",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l2_p1_nationality_of_director_007",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "George Lucas",
"object": "American",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l2_p1_nationality_of_director_008",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "Hayao Miyazaki",
"object": "Japanese",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l2_p1_nationality_of_director_009",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "Akira Kurosawa",
"object": "Japanese",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l2_p1_nationality_of_director_010",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "Stanley Kubrick",
"object": "American",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l2_p1_nationality_of_director_011",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "Francis Ford Coppola",
"object": "American",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l2_p1_nationality_of_director_012",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "Ridley Scott",
"object": "British",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l2_p1_nationality_of_director_013",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "Peter Jackson",
"object": "New Zealander",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l2_p1_nationality_of_director_014",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "Tim Burton",
"object": "American",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l2_p1_nationality_of_director_015",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "Wes Anderson",
"object": "American",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l2_p1_nationality_of_director_016",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "Guillermo del Toro",
"object": "Mexican",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l2_p1_nationality_of_director_017",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "Sofia Coppola",
"object": "American",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l2_p1_nationality_of_director_018",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l2",
"partId": "p1",
"relation": "nationality_of_director",
"subject": "Spike Lee",
"object": "American",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "famous_directors_nationalities",
"tags": ["movies", "famous_directors", "nationalities"],
"introducedIn": "C",
"factPriority": "secondary"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_movies_l2_p1",
  concepts,
};

export default conceptSet;