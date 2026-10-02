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
"id": "art_design_l6_p2_reaction_against_001",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
"subject": "Arts and Crafts",
"object": "Industrial mass production",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "movement_reactions",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l6_p2_reaction_against_002",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
"subject": "Art Nouveau",
"object": "Historicist revival styles",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "movement_reactions",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l6_p2_reaction_against_003",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
"subject": "Bauhaus",
"object": "Separation of fine art and craft",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "movement_reactions",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l6_p2_reaction_against_004",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
"subject": "De Stijl",
"object": "Naturalistic representation",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "movement_reactions",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l6_p2_reaction_against_005",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
"subject": "Constructivism",
"object": "Art for art's sake",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "movement_reactions",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l6_p2_reaction_against_006",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
"subject": "Art Deco",
"object": "Art Nouveau's organic ornament",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "movement_reactions",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l6_p2_reaction_against_007",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
"subject": "Swiss Style",
"object": "Decorative and subjective graphic design",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "movement_reactions",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l6_p2_reaction_against_008",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
"subject": "Scandinavian Modern",
"object": "Ornate historicist design",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "movement_reactions",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l6_p2_reaction_against_009",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
"subject": "Mid-Century Modern",
"object": "Traditional decorative interiors",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "movement_reactions",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l6_p2_reaction_against_010",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
"subject": "Postmodernism",
"object": "Strict Modernist functionalism",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "movement_reactions",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l6_p2_reaction_against_011",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
"subject": "Memphis Group",
"object": "Conventional good taste",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "movement_reactions",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l6_p2_reaction_against_012",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
"subject": "Streamline Moderne",
"object": "Ornate Art Deco decoration",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "movement_reactions",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l6_p2_reaction_against_013",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
"subject": "Ulm School of Design",
"object": "Intuitive artist-led design methods",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "movement_reactions",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l6_p2_reaction_against_014",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
"subject": "Pop Design",
"object": "Restrained functionalist Good Design ideals",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "movement_reactions",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l6_p2_reaction_against_015",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
"subject": "Wiener Werkstätte",
"object": "Industrial mass production",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "movement_reactions",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l6_p2_reaction_against_016",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
"subject": "Deutscher Werkbund",
"object": "Poor-quality industrial production",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "movement_reactions",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l6_p2_reaction_against_017",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
"subject": "New Typography",
"object": "Traditional centered typography",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "movement_reactions",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l6_p2_reaction_against_018",
"topicId": "art",
"subtopicId": "design",
"levelId": "l6",
"partId": "p2",
"relation": "reaction_against",
"subject": "Italian Radical Design",
"object": "Consumerist mainstream design",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "movement_reactions",
"tags": ["design", "design_movements", "level_6"],
"introducedIn": "C",
"factPriority": "secondary"
}
];

const conceptSet: LocalConceptSet = {
id: "art_design_l6_p2",
concepts,
};

export default conceptSet;