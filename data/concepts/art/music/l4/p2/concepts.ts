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
"id": "art_music_l4_p2_period_of_movement_001",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Baroque",
"object": "1600s-1750s",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_movement_periods",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l4_p2_period_of_movement_002",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Classical Period",
"object": "1750s-1820s",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_movement_periods",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l4_p2_period_of_movement_003",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Romantic Era",
"object": "1800s-1910s",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_movement_periods",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l4_p2_period_of_movement_004",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Impressionist Music",
"object": "late 1800s-early 1900s",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_movement_periods",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "A",
"factPriority": "secondary"
},
{
"id": "art_music_l4_p2_period_of_movement_005",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Jazz Age",
"object": "1920s",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_movement_periods",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l4_p2_period_of_movement_006",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Swing Era",
"object": "1930s-1940s",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_movement_periods",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l4_p2_period_of_movement_007",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Rock and Roll Era",
"object": "1950s",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_movement_periods",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l4_p2_period_of_movement_008",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Bebop",
"object": "1940s",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_movement_periods",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_music_l4_p2_period_of_movement_009",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Motown",
"object": "1960s",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_movement_periods",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l4_p2_period_of_movement_010",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "British Invasion",
"object": "1960s",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_movement_periods",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l4_p2_period_of_movement_011",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Disco Era",
"object": "1970s",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_movement_periods",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l4_p2_period_of_movement_012",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Punk Movement",
"object": "1970s",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_movement_periods",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l4_p2_period_of_movement_013",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Hip-Hop Golden Age",
"object": "late 1980s-early 1990s",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_movement_periods",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_music_l4_p2_period_of_movement_014",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Grunge",
"object": "early 1990s",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_movement_periods",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l4_p2_period_of_movement_015",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Britpop",
"object": "1990s",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_movement_periods",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l4_p2_period_of_movement_016",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "New Wave",
"object": "late 1970s-1980s",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_movement_periods",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l4_p2_period_of_movement_017",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "EDM Era",
"object": "2000s-2010s",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_movement_periods",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l4_p2_period_of_movement_018",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p2",
"relation": "period_of_movement",
"subject": "K-Pop Wave",
"object": "2010s-present",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "music_movement_periods",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "C",
"factPriority": "core"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_music_l4_p2",
  concepts,
};

export default conceptSet;