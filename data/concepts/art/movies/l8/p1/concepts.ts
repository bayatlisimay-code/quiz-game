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
"id": "art_movies_l8_p1_country_of_award_or_festival_001",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p1",
"relation": "country_of_award_or_festival",
"subject": "Academy Awards",
"object": "United States",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_awards_festivals_countries",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l8_p1_country_of_award_or_festival_002",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p1",
"relation": "country_of_award_or_festival",
"subject": "Cannes Film Festival",
"object": "France",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_awards_festivals_countries",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l8_p1_country_of_award_or_festival_003",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p1",
"relation": "country_of_award_or_festival",
"subject": "Venice Film Festival",
"object": "Italy",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_awards_festivals_countries",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l8_p1_country_of_award_or_festival_004",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p1",
"relation": "country_of_award_or_festival",
"subject": "Berlin International Film Festival",
"object": "Germany",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_awards_festivals_countries",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l8_p1_country_of_award_or_festival_005",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p1",
"relation": "country_of_award_or_festival",
"subject": "BAFTA Awards",
"object": "United Kingdom",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_awards_festivals_countries",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l8_p1_country_of_award_or_festival_006",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p1",
"relation": "country_of_award_or_festival",
"subject": "Golden Globe Awards",
"object": "United States",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_awards_festivals_countries",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l8_p1_country_of_award_or_festival_007",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p1",
"relation": "country_of_award_or_festival",
"subject": "Toronto International Film Festival",
"object": "Canada",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_awards_festivals_countries",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l8_p1_country_of_award_or_festival_008",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p1",
"relation": "country_of_award_or_festival",
"subject": "Sundance Film Festival",
"object": "United States",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_awards_festivals_countries",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l8_p1_country_of_award_or_festival_009",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p1",
"relation": "country_of_award_or_festival",
"subject": "European Film Awards",
"object": "Europe",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_awards_festivals_countries",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_movies_l8_p1_country_of_award_or_festival_010",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p1",
"relation": "country_of_award_or_festival",
"subject": "Cesar Awards",
"object": "France",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_awards_festivals_countries",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l8_p1_country_of_award_or_festival_011",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p1",
"relation": "country_of_award_or_festival",
"subject": "Goya Awards",
"object": "Spain",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_awards_festivals_countries",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l8_p1_country_of_award_or_festival_012",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p1",
"relation": "country_of_award_or_festival",
"subject": "Ariel Awards",
"object": "Mexico",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_awards_festivals_countries",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_movies_l8_p1_country_of_award_or_festival_013",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p1",
"relation": "country_of_award_or_festival",
"subject": "Asia Pacific Screen Awards",
"object": "Australia",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_awards_festivals_countries",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_movies_l8_p1_country_of_award_or_festival_014",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p1",
"relation": "country_of_award_or_festival",
"subject": "Busan International Film Festival",
"object": "South Korea",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_awards_festivals_countries",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l8_p1_country_of_award_or_festival_015",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p1",
"relation": "country_of_award_or_festival",
"subject": "Locarno Film Festival",
"object": "Switzerland",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_awards_festivals_countries",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l8_p1_country_of_award_or_festival_016",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p1",
"relation": "country_of_award_or_festival",
"subject": "San Sebastian International Film Festival",
"object": "Spain",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_awards_festivals_countries",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l8_p1_country_of_award_or_festival_017",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p1",
"relation": "country_of_award_or_festival",
"subject": "BFI London Film Festival",
"object": "United Kingdom",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_awards_festivals_countries",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l8_p1_country_of_award_or_festival_018",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p1",
"relation": "country_of_award_or_festival",
"subject": "International Documentary Film Festival Amsterdam",
"object": "Netherlands",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_awards_festivals_countries",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "C",
"factPriority": "secondary"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_movies_l8_p1",
  concepts,
};

export default conceptSet;