import { reviewedCohort, reviewedDefinitions, type ReviewedTerm } from './reviewedDefinitions';
const principles='https://www.getty.edu/education/teachers/building_lessons/principles_design.pdf';
const elements='https://www.getty.edu/education/teachers/building_lessons/formal_analysis.html';
const colour='https://www.getty.edu/education/teachers/classroom_resources/curricula/landscapes/downloads/worksheet03.pdf';
const glossary='https://www.moma.org/momaorg/shared/flattened_pages/moma_learning/glossary/';
const r=(id:string,term:string,meaning:string,url:string,locator:string,priority:number):ReviewedTerm=>({id,term,meaning,source:{url,locator,label:'Museum education glossary'},priority});
const principle:readonly ReviewedTerm[]=[
 r('symmetrical-balance','Symmetrical balance','Similar visual elements balanced on opposite sides.',principles,'p1 Balance: similar elements on either side',5),
 r('asymmetrical-balance','Asymmetrical balance','Different visual elements arranged to feel balanced.',principles,'p1 Balance: differing but balanced sides',5),
 r('emphasis','Emphasis','Making an area stand out to attract attention.',principles,'p1 Emphasis',5),
 r('movement','Visual movement','The path a viewer’s eye follows through a design.',principles,'p1 Movement; eye movement, not physical motion',5),
 r('proportion','Proportion','Size relationships among parts of a design.',principles,'p1 Proportion: head compared with body',5),
 r('variety','Variety','Using different visual elements to sustain interest.',principles,'p1 Variety',5),
 r('pattern','Pattern','An object or symbol repeated throughout a design.',principles,'p1 Pattern',4),
 r('rhythm','Rhythm','Repeated elements creating a sense of organized movement.',principles,'p1 Rhythm',4),
 r('unity','Unity','Harmony among parts, making a design feel complete.',principles,'p1 Unity',4),
 r('balance','Visual balance','The distribution of visual weight within a design.',principles,'p1 Balance; overarching principle, not only symmetry',3),
 r('radial-balance','Radial balance','Visual elements arranged around a central point.',principles,'p1 Balance: radial arrangement',3),
];
const composition:readonly ReviewedTerm[]=[
 r('line','Line','A visible path made by a point moving through space.',elements,'Line opening definition',5),
 r('shape','Shape','A two-dimensional area with height and width.',elements,'Shape and form: shape has two dimensions',5),
 r('form','Form','Three-dimensional volume with height, width and depth.',elements,'Shape and form: form has depth',5),
 r('positive-space','Positive space','The area occupied by the main objects in a composition.',elements,'Space: positive space',5),
 r('negative-space','Negative space','The area around the main objects in a composition.',elements,'Space: negative space',5),
 r('texture','Texture','A surface’s actual or visually suggested tactile quality.',elements,'Texture; physical and represented texture',5),
 r('geometric-shape','Geometric shape','A mathematically named shape, such as a circle or square.',elements,'Shape and form; geometric examples',4),
 r('organic-shape','Organic shape','An irregular shape suggesting forms found in nature.',elements,'Shape and form; natural and imitated organic forms',4),
 r('foreground','Foreground','The pictured area that appears nearest the viewer.',glossary,'Foreground entry',4),
 r('background','Background','The pictured area that appears farthest from the viewer.',glossary,'Background entry',3),
 r('contour','Contour','The outline or boundary of a depicted shape.',glossary,'Contour entry',3),
];
const colours:readonly ReviewedTerm[]=[
 r('hue','Hue','A colour’s identity, such as red or blue.',colour,'p2 Color: hue',5),
 r('value','Colour value','How light or dark a colour is.',colour,'p2 Color: value',5),
 r('intensity','Colour intensity','How bright or dull a colour is.',colour,'p2 Color: intensity',5),
 r('complementary','Complementary colours','Hues opposite each other on the colour wheel.',colour,'p2 Color: complementary pairs',5),
 r('primary','Traditional RYB primary colours','Red, yellow and blue in the traditional painter’s colour wheel.',colour,'p2 Color: traditional primaries; not RGB or CMY',5),
 r('secondary','Traditional RYB secondary colours','Orange, green and violet, mixed from traditional primary-colour pairs.',colour,'p2 Color: secondary hues',5),
 r('tertiary','Traditional RYB tertiary colours','Intermediate hues mixed from a primary and neighbouring secondary.',colour,'p2 Color: intermediate hues',4),
 r('warm','Warm colours','Hues such as red and yellow, conventionally associated with warmth.',elements,'Color: warm red and yellow; relative artistic convention',4),
 r('cool','Cool colours','Hues such as blue and gray, conventionally associated with coolness.',elements,'Color: cool blue and gray; relative artistic convention',4),
 r('analogous','Analogous colours','Neighbouring hues on the colour wheel.', 'https://www.sfmoma.org/read/fields-of-color/','Activity: adjacent analogous hues',3),
 r('monochrome','Monochrome','A design rendered in one colour.',glossary,'Monochrome entry; colour scheme sense',3),
];
const principlesUnknown=['asymmetrical-balance|balance','balance|radial-balance','balance|symmetrical-balance','pattern|rhythm','movement|rhythm','radial-balance|symmetrical-balance'];
export const designPrincipleSets=[
 reviewedDefinitions('design','l5','p1',principle,reviewedCohort(principle.map(t=>t.id),'Reviewed definitions distinguish attention, visual weight, arrangement, relative size and harmony; broader balance and overlapping repetition senses are omitted.',principlesUnknown)),
 reviewedDefinitions('design','l5','p2',composition,reviewedCohort(composition.map(t=>t.id),'Reviewed definitions distinguish spatial dimensions, occupied/empty areas, surface, boundary and pictured depth. Broader shape and line definitions remain unknown for their subtypes.',['contour|line','geometric-shape|shape','organic-shape|shape'])),
 reviewedDefinitions('design','l5','p4',colours,reviewedCohort(colours.map(t=>t.id),'Reviewed definitions distinguish colour attributes and the named wheel relationships under the traditional RYB convention; warm/cool boundaries are not universal physical temperatures.')),
];
