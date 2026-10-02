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
"id": "art_design_l7_p1_designer_of_visual_work_001",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p1",
"relation": "designer_of_visual_work",
"subject": "IBM 8-bar Logo",
"object": "Paul Rand",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "graphic_visual_designers",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l7_p1_designer_of_visual_work_002",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p1",
"relation": "designer_of_visual_work",
"subject": "I Love New York Logo",
"object": "Milton Glaser",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "graphic_visual_designers",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l7_p1_designer_of_visual_work_003",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p1",
"relation": "designer_of_visual_work",
"subject": "Vertigo Film Poster",
"object": "Saul Bass",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "graphic_visual_designers",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l7_p1_designer_of_visual_work_004",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p1",
"relation": "designer_of_visual_work",
"subject": "Helvetica",
"object": "Max Miedinger and Eduard Hoffmann",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "graphic_visual_designers",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l7_p1_designer_of_visual_work_005",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p1",
"relation": "designer_of_visual_work",
"subject": "London Underground Map",
"object": "Harry Beck",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "graphic_visual_designers",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l7_p1_designer_of_visual_work_006",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p1",
"relation": "designer_of_visual_work",
"subject": "Munich 1972 Olympic Visual Identity",
"object": "Otl Aicher",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "graphic_visual_designers",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l7_p1_designer_of_visual_work_007",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p1",
"relation": "designer_of_visual_work",
"subject": "FedEx Logo",
"object": "Lindon Leader",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "graphic_visual_designers",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l7_p1_designer_of_visual_work_008",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p1",
"relation": "designer_of_visual_work",
"subject": "Futura",
"object": "Paul Renner",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "graphic_visual_designers",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l7_p1_designer_of_visual_work_009",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p1",
"relation": "designer_of_visual_work",
"subject": "New York City Subway Signage System",
"object": "Massimo Vignelli and Bob Noorda",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "graphic_visual_designers",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l7_p1_designer_of_visual_work_010",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p1",
"relation": "designer_of_visual_work",
"subject": "NASA Worm Logotype",
"object": "Richard Danne and Bruce Blackburn",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "graphic_visual_designers",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l7_p1_designer_of_visual_work_011",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p1",
"relation": "designer_of_visual_work",
"subject": "Revolver Album Cover",
"object": "Klaus Voormann",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "graphic_visual_designers",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l7_p1_designer_of_visual_work_012",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p1",
"relation": "designer_of_visual_work",
"subject": "Unknown Pleasures Album Cover",
"object": "Peter Saville",
"answerKind": "short",
"difficulty": 3,
"distractorGroup": "graphic_visual_designers",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l7_p1_designer_of_visual_work_013",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p1",
"relation": "designer_of_visual_work",
"subject": "1923 Bauhaus Exhibition Poster",
"object": "Joost Schmidt",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "graphic_visual_designers",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l7_p1_designer_of_visual_work_014",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p1",
"relation": "designer_of_visual_work",
"subject": "Beethoven Poster",
"object": "Josef Müller-Brockmann",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "graphic_visual_designers",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l7_p1_designer_of_visual_work_015",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p1",
"relation": "designer_of_visual_work",
"subject": "Normandie Poster",
"object": "A.M. Cassandre",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "graphic_visual_designers",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l7_p1_designer_of_visual_work_016",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p1",
"relation": "designer_of_visual_work",
"subject": "Original Macintosh Icons",
"object": "Susan Kare",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "graphic_visual_designers",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_design_l7_p1_designer_of_visual_work_017",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p1",
"relation": "designer_of_visual_work",
"subject": "The Passion of Muhammad Ali Esquire Cover",
"object": "George Lois",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "graphic_visual_designers",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l7_p1_designer_of_visual_work_018",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p1",
"relation": "designer_of_visual_work",
"subject": "The Medium Is the Massage",
"object": "Quentin Fiore",
"answerKind": "short",
"difficulty": 4,
"distractorGroup": "graphic_visual_designers",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "C",
"factPriority": "secondary"
}
];

const conceptSet: LocalConceptSet = {
id: "art_design_l7_p1",
concepts,
};

export default conceptSet;