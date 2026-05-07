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
"id": "art_music_l4_p4_characteristic_of_movement_001",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Baroque",
"object": "Ornate music with strong contrast and dramatic energy.",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "music_movement_characteristics",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l4_p4_characteristic_of_movement_002",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Classical Period",
"object": "Clear, balanced music with elegant melodies.",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "music_movement_characteristics",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l4_p4_characteristic_of_movement_003",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Romantic Era",
"object": "Emotional music with expressive melodies and dramatic mood.",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "music_movement_characteristics",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l4_p4_characteristic_of_movement_004",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Impressionist Music",
"object": "Soft, atmospheric music that suggests moods and colors.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_movement_characteristics",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "A",
"factPriority": "secondary"
},
{
"id": "art_music_l4_p4_characteristic_of_movement_005",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Jazz Age",
"object": "Lively jazz music linked with dancing and city nightlife.",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "music_movement_characteristics",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l4_p4_characteristic_of_movement_006",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Swing Era",
"object": "Big-band jazz made for energetic social dancing.",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "music_movement_characteristics",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l4_p4_characteristic_of_movement_007",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Rock and Roll Era",
"object": "Guitar-driven popular music with strong dance rhythms.",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "music_movement_characteristics",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l4_p4_characteristic_of_movement_008",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Bebop",
"object": "Fast jazz with complex solos and small groups.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_movement_characteristics",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_music_l4_p4_characteristic_of_movement_009",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Motown",
"object": "Polished soul-pop with strong melodies and smooth vocals.",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "music_movement_characteristics",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l4_p4_characteristic_of_movement_010",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "British Invasion",
"object": "Catchy British rock and pop that swept American charts.",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "music_movement_characteristics",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l4_p4_characteristic_of_movement_011",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Disco Era",
"object": "Dance music with steady beats and bright production.",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "music_movement_characteristics",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l4_p4_characteristic_of_movement_012",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Punk Movement",
"object": "Fast, raw rock music with rebellious attitude.",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "music_movement_characteristics",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l4_p4_characteristic_of_movement_013",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Hip-Hop Golden Age",
"object": "Creative rap music with strong beats and social messages.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_movement_characteristics",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_music_l4_p4_characteristic_of_movement_014",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Grunge",
"object": "Heavy alternative rock with raw emotion and distorted guitars.",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "music_movement_characteristics",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l4_p4_characteristic_of_movement_015",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "Britpop",
"object": "British guitar pop with catchy songs and national style.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_movement_characteristics",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l4_p4_characteristic_of_movement_016",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "New Wave",
"object": "Pop-rock music using synthesizers and stylish visuals.",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "music_movement_characteristics",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l4_p4_characteristic_of_movement_017",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "EDM Era",
"object": "Electronic dance music became popular at festivals and clubs.",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "music_movement_characteristics",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_music_l4_p4_characteristic_of_movement_018",
"topicId": "art",
"subtopicId": "music",
"levelId": "l4",
"partId": "p4",
"relation": "characteristic_of_movement",
"subject": "K-Pop Wave",
"object": "Polished Korean pop with strong choreography and global fans.",
"answerKind": "long",
"difficulty": 2,
"distractorGroup": "music_movement_characteristics",
"tags": ["music", "movements_and_eras", "level_4"],
"introducedIn": "C",
"factPriority": "core"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_music_l4_p4",
  concepts,
};

export default conceptSet;