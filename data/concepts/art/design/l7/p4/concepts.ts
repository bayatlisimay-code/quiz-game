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
"id": "art_design_l7_p4_visual_characteristic_of_001",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p4",
"relation": "visual_characteristic_of",
"subject": "IBM 8-bar Logo",
"object": "Horizontal stripes forming bold block letters",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "visual_design_characteristics",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l7_p4_visual_characteristic_of_002",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p4",
"relation": "visual_characteristic_of",
"subject": "I Love New York Logo",
"object": "A red heart symbol replacing the word love",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "visual_design_characteristics",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l7_p4_visual_characteristic_of_003",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p4",
"relation": "visual_characteristic_of",
"subject": "Vertigo Film Poster",
"object": "A large spiral motif surrounding simplified falling figures",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "visual_design_characteristics",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l7_p4_visual_characteristic_of_004",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p4",
"relation": "visual_characteristic_of",
"subject": "Helvetica",
"object": "Neo-grotesque sans-serif letterforms with minimal stroke contrast",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "visual_design_characteristics",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l7_p4_visual_characteristic_of_005",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p4",
"relation": "visual_characteristic_of",
"subject": "London Underground Map",
"object": "Color-coded routes simplified into horizontal, vertical, and diagonal lines",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "visual_design_characteristics",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l7_p4_visual_characteristic_of_006",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p4",
"relation": "visual_characteristic_of",
"subject": "Munich 1972 Olympic Visual Identity",
"object": "A rainbow-derived color palette paired with simple geometric pictograms",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "visual_design_characteristics",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l7_p4_visual_characteristic_of_007",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p4",
"relation": "visual_characteristic_of",
"subject": "FedEx Logo",
"object": "A hidden arrow formed by negative space between the E and x",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "visual_design_characteristics",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "A",
"factPriority": "core"
},
{
"id": "art_design_l7_p4_visual_characteristic_of_008",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p4",
"relation": "visual_characteristic_of",
"subject": "Futura",
"object": "Geometric sans-serif letterforms built from simple shapes",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "visual_design_characteristics",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l7_p4_visual_characteristic_of_009",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p4",
"relation": "visual_characteristic_of",
"subject": "New York City Subway Signage System",
"object": "White sans-serif lettering on standardized black directional signs",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "visual_design_characteristics",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l7_p4_visual_characteristic_of_010",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p4",
"relation": "visual_characteristic_of",
"subject": "NASA Worm Logotype",
"object": "Rounded continuous letterforms with crossbar-free A characters",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "visual_design_characteristics",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l7_p4_visual_characteristic_of_011",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p4",
"relation": "visual_characteristic_of",
"subject": "Revolver Album Cover",
"object": "Black-and-white pen drawings combined with photographic collage",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "visual_design_characteristics",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l7_p4_visual_characteristic_of_012",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p4",
"relation": "visual_characteristic_of",
"subject": "Unknown Pleasures Album Cover",
"object": "White stacked pulsar waveform lines against a black background",
"answerKind": "long",
"difficulty": 3,
"distractorGroup": "visual_design_characteristics",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "B",
"factPriority": "core"
},
{
"id": "art_design_l7_p4_visual_characteristic_of_013",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p4",
"relation": "visual_characteristic_of",
"subject": "1923 Bauhaus Exhibition Poster",
"object": "A geometric human profile constructed from circles and angular forms",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "visual_design_characteristics",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "B",
"factPriority": "secondary"
},
{
"id": "art_design_l7_p4_visual_characteristic_of_014",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p4",
"relation": "visual_characteristic_of",
"subject": "Beethoven Poster",
"object": "Concentric black arc segments radiating across the page",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "visual_design_characteristics",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l7_p4_visual_characteristic_of_015",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p4",
"relation": "visual_characteristic_of",
"subject": "Normandie Poster",
"object": "A towering ship bow seen from a low viewpoint",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "visual_design_characteristics",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l7_p4_visual_characteristic_of_016",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p4",
"relation": "visual_characteristic_of",
"subject": "Original Macintosh Icons",
"object": "Simple black-and-white pixel graphics of familiar objects",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "visual_design_characteristics",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "C",
"factPriority": "core"
},
{
"id": "art_design_l7_p4_visual_characteristic_of_017",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p4",
"relation": "visual_characteristic_of",
"subject": "The Passion of Muhammad Ali Esquire Cover",
"object": "Muhammad Ali posed as Saint Sebastian with arrows piercing his body",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "visual_design_characteristics",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "C",
"factPriority": "secondary"
},
{
"id": "art_design_l7_p4_visual_characteristic_of_018",
"topicId": "art",
"subtopicId": "design",
"levelId": "l7",
"partId": "p4",
"relation": "visual_characteristic_of",
"subject": "The Medium Is the Massage",
"object": "Photo-and-text montages with constantly changing page layouts",
"answerKind": "long",
"difficulty": 4,
"distractorGroup": "visual_design_characteristics",
"tags": ["design", "graphic_visual_design", "level_7"],
"introducedIn": "C",
"factPriority": "secondary"
}
];

const conceptSet: LocalConceptSet = {
id: "art_design_l7_p4",
concepts,
};

export default conceptSet;