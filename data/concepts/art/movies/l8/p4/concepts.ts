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
"id": "art_movies_l8_p4_founded_decade_of_award_or_festival_001",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p4",
"relation": "founded_decade_of_award_or_festival",
"subject": "Academy Awards",
"object": "1920s",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_awards_festivals_founded_decades",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l8_p4_founded_decade_of_award_or_festival_002",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p4",
"relation": "founded_decade_of_award_or_festival",
"subject": "Cannes Film Festival",
"object": "1940s",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_awards_festivals_founded_decades",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l8_p4_founded_decade_of_award_or_festival_003",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p4",
"relation": "founded_decade_of_award_or_festival",
"subject": "Venice Film Festival",
"object": "1930s",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_awards_festivals_founded_decades",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l8_p4_founded_decade_of_award_or_festival_004",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p4",
"relation": "founded_decade_of_award_or_festival",
"subject": "Berlin International Film Festival",
"object": "1950s",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_awards_festivals_founded_decades",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l8_p4_founded_decade_of_award_or_festival_005",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p4",
"relation": "founded_decade_of_award_or_festival",
"subject": "BAFTA Awards",
"object": "1940s",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_awards_festivals_founded_decades",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l8_p4_founded_decade_of_award_or_festival_006",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p4",
"relation": "founded_decade_of_award_or_festival",
"subject": "Golden Globe Awards",
"object": "1940s",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_awards_festivals_founded_decades",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l8_p4_founded_decade_of_award_or_festival_007",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p4",
"relation": "founded_decade_of_award_or_festival",
"subject": "Toronto International Film Festival",
"object": "1970s",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_awards_festivals_founded_decades",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l8_p4_founded_decade_of_award_or_festival_008",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p4",
"relation": "founded_decade_of_award_or_festival",
"subject": "Sundance Film Festival",
"object": "1970s",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_awards_festivals_founded_decades",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l8_p4_founded_decade_of_award_or_festival_009",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p4",
"relation": "founded_decade_of_award_or_festival",
"subject": "European Film Awards",
"object": "1980s",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "film_awards_festivals_founded_decades",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_movies_l8_p4_founded_decade_of_award_or_festival_010",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p4",
"relation": "founded_decade_of_award_or_festival",
"subject": "Cesar Awards",
"object": "1970s",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_awards_festivals_founded_decades",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l8_p4_founded_decade_of_award_or_festival_011",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p4",
"relation": "founded_decade_of_award_or_festival",
"subject": "Goya Awards",
"object": "1980s",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_awards_festivals_founded_decades",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l8_p4_founded_decade_of_award_or_festival_012",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p4",
"relation": "founded_decade_of_award_or_festival",
"subject": "Ariel Awards",
"object": "1940s",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "film_awards_festivals_founded_decades",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_movies_l8_p4_founded_decade_of_award_or_festival_013",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p4",
"relation": "founded_decade_of_award_or_festival",
"subject": "Asia Pacific Screen Awards",
"object": "2000s",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "film_awards_festivals_founded_decades",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_movies_l8_p4_founded_decade_of_award_or_festival_014",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p4",
"relation": "founded_decade_of_award_or_festival",
"subject": "Busan International Film Festival",
"object": "1990s",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_awards_festivals_founded_decades",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_movies_l8_p4_founded_decade_of_award_or_festival_015",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p4",
"relation": "founded_decade_of_award_or_festival",
"subject": "Locarno Film Festival",
"object": "1940s",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "film_awards_festivals_founded_decades",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l8_p4_founded_decade_of_award_or_festival_016",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p4",
"relation": "founded_decade_of_award_or_festival",
"subject": "San Sebastian International Film Festival",
"object": "1950s",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "film_awards_festivals_founded_decades",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l8_p4_founded_decade_of_award_or_festival_017",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p4",
"relation": "founded_decade_of_award_or_festival",
"subject": "BFI London Film Festival",
"object": "1950s",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "film_awards_festivals_founded_decades",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l8_p4_founded_decade_of_award_or_festival_018",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p4",
"relation": "founded_decade_of_award_or_festival",
"subject": "International Documentary Film Festival Amsterdam",
"object": "1980s",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "film_awards_festivals_founded_decades",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "C",
"factPriority": "secondary"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_movies_l8_p4",
  concepts,
};

export default conceptSet;