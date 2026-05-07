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
"id": "art_music_l8_p4_famous_musician_of_instrument_001",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p4",
"relation": "famous_musician_of_instrument",
"subject": "Guitar",
"object": "Jimi Hendrix",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_instrument_musicians",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l8_p4_famous_musician_of_instrument_002",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p4",
"relation": "famous_musician_of_instrument",
"subject": "Piano",
"object": "Elton John",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_instrument_musicians",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l8_p4_famous_musician_of_instrument_003",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p4",
"relation": "famous_musician_of_instrument",
"subject": "Violin",
"object": "Itzhak Perlman",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_instrument_musicians",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l8_p4_famous_musician_of_instrument_004",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p4",
"relation": "famous_musician_of_instrument",
"subject": "Drums",
"object": "Ringo Starr",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_instrument_musicians",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l8_p4_famous_musician_of_instrument_005",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p4",
"relation": "famous_musician_of_instrument",
"subject": "Trumpet",
"object": "Miles Davis",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_instrument_musicians",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l8_p4_famous_musician_of_instrument_006",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p4",
"relation": "famous_musician_of_instrument",
"subject": "Saxophone",
"object": "John Coltrane",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_instrument_musicians",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_music_l8_p4_famous_musician_of_instrument_007",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p4",
"relation": "famous_musician_of_instrument",
"subject": "Flute",
"object": "James Galway",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "music_instrument_musicians",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "A",
"factPriority": "secondary"
},
{
"id": "art_music_l8_p4_famous_musician_of_instrument_008",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p4",
"relation": "famous_musician_of_instrument",
"subject": "Cello",
"object": "Yo-Yo Ma",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_instrument_musicians",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l8_p4_famous_musician_of_instrument_009",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p4",
"relation": "famous_musician_of_instrument",
"subject": "Bass Guitar",
"object": "Paul McCartney",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_instrument_musicians",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_music_l8_p4_famous_musician_of_instrument_010",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p4",
"relation": "famous_musician_of_instrument",
"subject": "Clarinet",
"object": "Benny Goodman",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "music_instrument_musicians",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_music_l8_p4_famous_musician_of_instrument_011",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p4",
"relation": "famous_musician_of_instrument",
"subject": "Harp",
"object": "Joanna Newsom",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "music_instrument_musicians",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_music_l8_p4_famous_musician_of_instrument_012",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p4",
"relation": "famous_musician_of_instrument",
"subject": "Synthesizer",
"object": "Jean-Michel Jarre",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "music_instrument_musicians",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_music_l8_p4_famous_musician_of_instrument_013",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p4",
"relation": "famous_musician_of_instrument",
"subject": "Organ",
"object": "Jimmy Smith",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "music_instrument_musicians",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_music_l8_p4_famous_musician_of_instrument_014",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p4",
"relation": "famous_musician_of_instrument",
"subject": "Ukulele",
"object": "Israel Kamakawiwo'ole",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "music_instrument_musicians",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l8_p4_famous_musician_of_instrument_015",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p4",
"relation": "famous_musician_of_instrument",
"subject": "Harmonica",
"object": "Little Walter",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "music_instrument_musicians",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l8_p4_famous_musician_of_instrument_016",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p4",
"relation": "famous_musician_of_instrument",
"subject": "Accordion",
"object": "Weird Al Yankovic",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "music_instrument_musicians",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l8_p4_famous_musician_of_instrument_017",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p4",
"relation": "famous_musician_of_instrument",
"subject": "Tambourine",
"object": "Stevie Nicks",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "music_instrument_musicians",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_music_l8_p4_famous_musician_of_instrument_018",
"topicId": "art",
"subtopicId": "music",
"levelId": "l8",
"partId": "p4",
"relation": "famous_musician_of_instrument",
"subject": "Voice",
"object": "Freddie Mercury",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "music_instrument_musicians",
"tags": ["music", "musical_instruments", "level_8"],
"introducedIn": "C",
"factPriority": "core"
}
]
  const conceptSet: LocalConceptSet = {
  id: "art_music_l8_p4",
  concepts,
};

export default conceptSet;