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
"id": "art_painting_l4_p1_genre_of_painting_001",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p1",
"relation": "genre_of_painting",
"subject": "Mona Lisa",
"object": "portrait",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "painting_genres",
"tags": ["portrait", "renaissance", "woman"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l4_p1_genre_of_painting_002",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p1",
"relation": "genre_of_painting",
"subject": "The Last Supper",
"object": "religious painting",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "painting_genres",
"tags": ["religious", "christianity", "renaissance"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l4_p1_genre_of_painting_003",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p1",
"relation": "genre_of_painting",
"subject": "The Starry Night",
"object": "landscape",
"answerKind": "short",
"difficulty": 1,
"distractorGroup": "painting_genres",
"tags": ["landscape", "night", "sky"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l4_p1_genre_of_painting_004",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p1",
"relation": "genre_of_painting",
"subject": "The Birth of Venus",
"object": "mythological painting",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_genres",
"tags": ["mythology", "venus", "renaissance"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l4_p1_genre_of_painting_005",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p1",
"relation": "genre_of_painting",
"subject": "Girl with a Pearl Earring",
"object": "portrait",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_genres",
"tags": ["portrait", "girl", "vermeer"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l4_p1_genre_of_painting_006",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p1",
"relation": "genre_of_painting",
"subject": "Sunflowers",
"object": "still life",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_genres",
"tags": ["still life", "flowers", "van gogh"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l4_p1_genre_of_painting_007",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p1",
"relation": "genre_of_painting",
"subject": "American Gothic",
"object": "portrait",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "painting_genres",
"tags": ["portrait", "american", "rural"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_painting_l4_p1_genre_of_painting_008",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p1",
"relation": "genre_of_painting",
"subject": "Guernica",
"object": "history painting",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_genres",
"tags": ["war", "history", "picasso"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l4_p1_genre_of_painting_009",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p1",
"relation": "genre_of_painting",
"subject": "The Night Watch",
"object": "portrait",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_genres",
"tags": ["militia", "group portrait", "rembrandt"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l4_p1_genre_of_painting_010",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p1",
"relation": "genre_of_painting",
"subject": "Las Meninas",
"object": "portrait",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_genres",
"tags": ["portrait", "court", "spain"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_painting_l4_p1_genre_of_painting_011",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p1",
"relation": "genre_of_painting",
"subject": "Water Lilies",
"object": "landscape",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "painting_genres",
"tags": ["landscape", "garden", "monet"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l4_p1_genre_of_painting_012",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p1",
"relation": "genre_of_painting",
"subject": "The Persistence of Memory",
"object": "landscape",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "painting_genres",
"tags": ["surreal", "clocks", "dali"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l4_p1_genre_of_painting_013",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p1",
"relation": "genre_of_painting",
"subject": "Liberty Leading the People",
"object": "history painting",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "painting_genres",
"tags": ["revolution", "history", "france"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_painting_l4_p1_genre_of_painting_014",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p1",
"relation": "genre_of_painting",
"subject": "The Arnolfini Portrait",
"object": "portrait",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "painting_genres",
"tags": ["portrait", "couple", "van eyck"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l4_p1_genre_of_painting_015",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p1",
"relation": "genre_of_painting",
"subject": "The Hay Wain",
"object": "landscape",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "painting_genres",
"tags": ["landscape", "countryside", "wagon"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l4_p1_genre_of_painting_016",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p1",
"relation": "genre_of_painting",
"subject": "Impression, Sunrise",
"object": "marine painting",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "painting_genres",
"tags": ["marine", "harbor", "sunrise"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l4_p1_genre_of_painting_017",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p1",
"relation": "genre_of_painting",
"subject": "The Raft of the Medusa",
"object": "history painting",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "painting_genres",
"tags": ["shipwreck", "history", "survival"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_painting_l4_p1_genre_of_painting_018",
"topicId": "art",
"subtopicId": "painting",
"levelId": "l4",
"partId": "p1",
"relation": "genre_of_painting",
"subject": "Whistler's Mother",
"object": "portrait",
"answerKind": "short",
"difficulty": 5,
"distractorGroup": "painting_genres",
"tags": ["portrait", "mother", "whistler"],
"introducedIn": "C",
"factPriority": "secondary"
}
]

const conceptSet: LocalConceptSet = {
  id: "art_painting_l3_p4",
  concepts,
};

export default conceptSet;