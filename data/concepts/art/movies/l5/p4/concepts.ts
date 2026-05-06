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
"id": "art_movies_l5_p4_example_of_technique_001",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_technique",
"subject": "Close-up",
"object": "The Good, the Bad and the Ugly",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_technique_examples",
"tags": ["movies", "movie_basics", "film_techniques"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l5_p4_example_of_technique_002",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_technique",
"subject": "Montage",
"object": "Rocky",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_technique_examples",
"tags": ["movies", "movie_basics", "film_techniques"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l5_p4_example_of_technique_003",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_technique",
"subject": "Flashback",
"object": "Citizen Kane",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_technique_examples",
"tags": ["movies", "movie_basics", "film_techniques"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l5_p4_example_of_technique_004",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_technique",
"subject": "Voice-over",
"object": "Goodfellas",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_technique_examples",
"tags": ["movies", "movie_basics", "film_techniques"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l5_p4_example_of_technique_005",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_technique",
"subject": "Slow motion",
"object": "The Matrix",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_technique_examples",
"tags": ["movies", "movie_basics", "film_techniques"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l5_p4_example_of_technique_006",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_technique",
"subject": "Tracking shot",
"object": "The Shining",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_technique_examples",
"tags": ["movies", "movie_basics", "film_techniques"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l5_p4_example_of_technique_007",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_technique",
"subject": "Long take",
"object": "Children of Men",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "film_technique_examples",
"tags": ["movies", "movie_basics", "film_techniques"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l5_p4_example_of_technique_008",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_technique",
"subject": "Cross-cutting",
"object": "The Godfather",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "film_technique_examples",
"tags": ["movies", "movie_basics", "film_techniques"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l5_p4_example_of_technique_009",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_technique",
"subject": "Match cut",
"object": "2001: A Space Odyssey",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "film_technique_examples",
"tags": ["movies", "movie_basics", "film_techniques"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l5_p4_example_of_technique_010",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_technique",
"subject": "Jump cut",
"object": "Breathless",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "film_technique_examples",
"tags": ["movies", "movie_basics", "film_techniques"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l5_p4_example_of_technique_011",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_technique",
"subject": "Point-of-view shot",
"object": "Halloween",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_technique_examples",
"tags": ["movies", "movie_basics", "film_techniques"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l5_p4_example_of_technique_012",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_technique",
"subject": "Handheld camera",
"object": "The Blair Witch Project",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "film_technique_examples",
"tags": ["movies", "movie_basics", "film_techniques"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_movies_l5_p4_example_of_technique_013",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_technique",
"subject": "Low-angle shot",
"object": "Citizen Kane",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "film_technique_examples",
"tags": ["movies", "movie_basics", "film_techniques"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_movies_l5_p4_example_of_technique_014",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_technique",
"subject": "High-angle shot",
"object": "Psycho",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "film_technique_examples",
"tags": ["movies", "movie_basics", "film_techniques"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l5_p4_example_of_technique_015",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_technique",
"subject": "Freeze frame",
"object": "The 400 Blows",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "film_technique_examples",
"tags": ["movies", "movie_basics", "film_techniques"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l5_p4_example_of_technique_016",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_technique",
"subject": "Split screen",
"object": "The Thomas Crown Affair",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "film_technique_examples",
"tags": ["movies", "movie_basics", "film_techniques"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l5_p4_example_of_technique_017",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_technique",
"subject": "Practical effects",
"object": "Jurassic Park",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_technique_examples",
"tags": ["movies", "movie_basics", "film_techniques"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l5_p4_example_of_technique_018",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l5",
"partId": "p4",
"relation": "example_of_technique",
"subject": "Computer-generated imagery",
"object": "Avatar",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_technique_examples",
"tags": ["movies", "movie_basics", "film_techniques"],
"introducedIn": "C",
"factPriority": "core"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_movies_l5_p4",
  concepts,
};

export default conceptSet;
