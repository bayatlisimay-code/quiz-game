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
"id": "art_design_l3_p2_period_of_movement_001",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Arts and Crafts",
"object": "1880s–1910s",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_movement_periods",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l3_p2_period_of_movement_002",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Art Nouveau",
"object": "1890s–1910s",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_movement_periods",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l3_p2_period_of_movement_003",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Bauhaus",
"object": "1919–1933",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_movement_periods",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l3_p2_period_of_movement_004",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Art Deco",
"object": "1920s–1930s",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_movement_periods",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l3_p2_period_of_movement_005",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p2",
"relation": "period_of_movement",
"subject": "De Stijl",
"object": "1917–1931",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_movement_periods",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l3_p2_period_of_movement_006",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Constructivism",
"object": "1910s–1930s",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_movement_periods",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l3_p2_period_of_movement_007",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Swiss Style",
"object": "1950s–1970s",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_movement_periods",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l3_p2_period_of_movement_008",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Scandinavian Modern",
"object": "1930s–1960s",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_movement_periods",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l3_p2_period_of_movement_009",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Mid-Century Modern",
"object": "1940s–1960s",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_movement_periods",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l3_p2_period_of_movement_010",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Postmodernism",
"object": "1970s–1990s",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_movement_periods",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l3_p2_period_of_movement_011",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Memphis Group",
"object": "1981–1988",
"answerKind": "short",
"difficulty": 2,
"distractorGroup": "design_movement_periods",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l3_p2_period_of_movement_012",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Ulm School of Design",
"object": "1953–1968",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "design_movement_periods",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l3_p2_period_of_movement_013",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Streamline Moderne",
"object": "1930s–1940s",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "design_movement_periods",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l3_p2_period_of_movement_014",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Pop Design",
"object": "1960s",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "design_movement_periods",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l3_p2_period_of_movement_015",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Wiener Werkstätte",
"object": "1903–1932",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "design_movement_periods",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l3_p2_period_of_movement_016",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Deutscher Werkbund",
"object": "1900s–1930s",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "design_movement_periods",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l3_p2_period_of_movement_017",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p2",
"relation": "period_of_movement",
"subject": "New Typography",
"object": "1920s–1930s",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "design_movement_periods",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l3_p2_period_of_movement_018",
"topicId": "art",
"subtopicId": "design",
"levelId": "l3",
"partId": "p2",
"relation": "period_of_movement",
"subject": "Italian Radical Design",
"object": "1960s–1970s",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "design_movement_periods",
"tags": ["design", "design_movements", "level_3"],
"introducedIn": "C",
"factPriority": "secondary"
}
];

const conceptSet: LocalConceptSet = {
  id: "art_design_l3_p2",
  concepts,
};

export default conceptSet;
