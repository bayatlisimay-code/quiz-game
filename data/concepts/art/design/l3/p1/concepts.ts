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
"id": "art_design_l3_p1_main_designers_of_movement_001",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p1",
"relation": "main_designers_of_movement",
"subject": "Arts and Crafts",
"object": "William Morris, C.F.A. Voysey",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_movement_designers",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l3_p1_main_designers_of_movement_002",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p1",
"relation": "main_designers_of_movement",
"subject": "Art Nouveau",
"object": "Hector Guimard, Alphonse Mucha, Henry van de Velde",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_movement_designers",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l3_p1_main_designers_of_movement_003",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p1",
"relation": "main_designers_of_movement",
"subject": "Bauhaus",
"object": "Marcel Breuer, Herbert Bayer, Marianne Brandt",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_movement_designers",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l3_p1_main_designers_of_movement_004",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p1",
"relation": "main_designers_of_movement",
"subject": "Art Deco",
"object": "Émile-Jacques Ruhlmann, A.M. Cassandre",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_movement_designers",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l3_p1_main_designers_of_movement_005",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p1",
"relation": "main_designers_of_movement",
"subject": "De Stijl",
"object": "Gerrit Rietveld, Theo van Doesburg",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_movement_designers",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l3_p1_main_designers_of_movement_006",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p1",
"relation": "main_designers_of_movement",
"subject": "Constructivism",
"object": "Alexander Rodchenko, El Lissitzky",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_movement_designers",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l3_p1_main_designers_of_movement_007",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p1",
"relation": "main_designers_of_movement",
"subject": "Swiss Style",
"object": "Josef Müller-Brockmann, Armin Hofmann, Emil Ruder",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_movement_designers",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l3_p1_main_designers_of_movement_008",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p1",
"relation": "main_designers_of_movement",
"subject": "Scandinavian Modern",
"object": "Arne Jacobsen, Alvar Aalto, Hans J. Wegner",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_movement_designers",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l3_p1_main_designers_of_movement_009",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p1",
"relation": "main_designers_of_movement",
"subject": "Mid-Century Modern",
"object": "Charles and Ray Eames, George Nelson",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_movement_designers",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l3_p1_main_designers_of_movement_010",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p1",
"relation": "main_designers_of_movement",
"subject": "Postmodernism",
"object": "Michael Graves, Alessandro Mendini",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_movement_designers",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l3_p1_main_designers_of_movement_011",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p1",
"relation": "main_designers_of_movement",
"subject": "Memphis Group",
"object": "Ettore Sottsass, Nathalie du Pasquier, Michele De Lucchi",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_movement_designers",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l3_p1_main_designers_of_movement_012",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p1",
"relation": "main_designers_of_movement",
"subject": "Ulm School of Design",
"object": "Max Bill, Otl Aicher, Hans Gugelot",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "design_movement_designers",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l3_p1_main_designers_of_movement_013",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p1",
"relation": "main_designers_of_movement",
"subject": "Streamline Moderne",
"object": "Raymond Loewy, Henry Dreyfuss, Norman Bel Geddes",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "design_movement_designers",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l3_p1_main_designers_of_movement_014",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p1",
"relation": "main_designers_of_movement",
"subject": "Pop Design",
"object": "Eero Aarnio, Verner Panton",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "design_movement_designers",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l3_p1_main_designers_of_movement_015",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p1",
"relation": "main_designers_of_movement",
"subject": "Wiener Werkstätte",
"object": "Josef Hoffmann, Koloman Moser, Dagobert Peche",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "design_movement_designers",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l3_p1_main_designers_of_movement_016",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p1",
"relation": "main_designers_of_movement",
"subject": "Deutscher Werkbund",
"object": "Peter Behrens, Hermann Muthesius",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "design_movement_designers",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l3_p1_main_designers_of_movement_017",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p1",
"relation": "main_designers_of_movement",
"subject": "New Typography",
"object": "Jan Tschichold, Piet Zwart",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "design_movement_designers",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l3_p1_main_designers_of_movement_018",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p1",
"relation": "main_designers_of_movement",
"subject": "Italian Radical Design",
"object": "Andrea Branzi, Gaetano Pesce",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "design_movement_designers",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "C",
"factPriority": "secondary"
}
];

const conceptSet: LocalConceptSet = {
  id: "art_design_l3_p1",
  concepts,
};

export default conceptSet;