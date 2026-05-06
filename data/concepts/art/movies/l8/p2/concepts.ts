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
"id": "art_movies_l8_p2_top_prize_of_award_or_festival_001",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p2",
"relation": "top_prize_of_award_or_festival",
"subject": "Academy Awards",
"object": "Best Picture",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_awards_festivals_top_prizes",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l8_p2_top_prize_of_award_or_festival_002",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p2",
"relation": "top_prize_of_award_or_festival",
"subject": "Cannes Film Festival",
"object": "Palme d'Or",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_awards_festivals_top_prizes",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l8_p2_top_prize_of_award_or_festival_003",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p2",
"relation": "top_prize_of_award_or_festival",
"subject": "Venice Film Festival",
"object": "Golden Lion",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_awards_festivals_top_prizes",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l8_p2_top_prize_of_award_or_festival_004",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p2",
"relation": "top_prize_of_award_or_festival",
"subject": "Berlin International Film Festival",
"object": "Golden Bear",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_awards_festivals_top_prizes",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l8_p2_top_prize_of_award_or_festival_005",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p2",
"relation": "top_prize_of_award_or_festival",
"subject": "BAFTA Awards",
"object": "Best Film",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_awards_festivals_top_prizes",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l8_p2_top_prize_of_award_or_festival_006",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p2",
"relation": "top_prize_of_award_or_festival",
"subject": "Golden Globe Awards",
"object": "Best Picture",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_awards_festivals_top_prizes",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l8_p2_top_prize_of_award_or_festival_007",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p2",
"relation": "top_prize_of_award_or_festival",
"subject": "Toronto International Film Festival",
"object": "People's Choice Award",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_awards_festivals_top_prizes",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_movies_l8_p2_top_prize_of_award_or_festival_008",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p2",
"relation": "top_prize_of_award_or_festival",
"subject": "Sundance Film Festival",
"object": "Grand Jury Prize",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_awards_festivals_top_prizes",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l8_p2_top_prize_of_award_or_festival_009",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p2",
"relation": "top_prize_of_award_or_festival",
"subject": "European Film Awards",
"object": "Best European Film",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_awards_festivals_top_prizes",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_movies_l8_p2_top_prize_of_award_or_festival_010",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p2",
"relation": "top_prize_of_award_or_festival",
"subject": "Cesar Awards",
"object": "Best Film",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_awards_festivals_top_prizes",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l8_p2_top_prize_of_award_or_festival_011",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p2",
"relation": "top_prize_of_award_or_festival",
"subject": "Goya Awards",
"object": "Best Film",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "film_awards_festivals_top_prizes",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_movies_l8_p2_top_prize_of_award_or_festival_012",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p2",
"relation": "top_prize_of_award_or_festival",
"subject": "Ariel Awards",
"object": "Golden Ariel",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_awards_festivals_top_prizes",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_movies_l8_p2_top_prize_of_award_or_festival_013",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p2",
"relation": "top_prize_of_award_or_festival",
"subject": "Asia Pacific Screen Awards",
"object": "Best Feature Film",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_awards_festivals_top_prizes",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_movies_l8_p2_top_prize_of_award_or_festival_014",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p2",
"relation": "top_prize_of_award_or_festival",
"subject": "Busan International Film Festival",
"object": "New Currents Award",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_awards_festivals_top_prizes",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l8_p2_top_prize_of_award_or_festival_015",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p2",
"relation": "top_prize_of_award_or_festival",
"subject": "Locarno Film Festival",
"object": "Golden Leopard",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_awards_festivals_top_prizes",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l8_p2_top_prize_of_award_or_festival_016",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p2",
"relation": "top_prize_of_award_or_festival",
"subject": "San Sebastian International Film Festival",
"object": "Golden Shell",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_awards_festivals_top_prizes",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l8_p2_top_prize_of_award_or_festival_017",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p2",
"relation": "top_prize_of_award_or_festival",
"subject": "BFI London Film Festival",
"object": "Best Film Award",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_awards_festivals_top_prizes",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_movies_l8_p2_top_prize_of_award_or_festival_018",
"topicId": "art",
"subtopicId": "movies",
"levelId": "l8",
"partId": "p2",
"relation": "top_prize_of_award_or_festival",
"subject": "International Documentary Film Festival Amsterdam",
"object": "IDFA Award for Best Film",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "film_awards_festivals_top_prizes",
"tags": ["movies", "awards", "festivals"],
"introducedIn": "C",
"factPriority": "secondary"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_movies_l8_p2",
  concepts,
};

export default conceptSet;