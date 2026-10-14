import { authorDefinitions, type DefinitionEntry, type MeaningContrast } from "./definitions";
const ng = "https://www.nationalgallery.org.uk/paintings/glossary/";
const getty = "https://www.getty.edu/education/k-12-learning/describe-listen-draw/vocabulary-for-describing-an-artwork/";
const entry = (id: string, term: string, definition: string, url: string, locator: string): DefinitionEntry => ({ id, term, definition, url, locator });
const techniques = [
  entry("impasto", "Impasto", "Applying paint thickly enough to leave a raised surface and visible marks.", "https://www.moma.org/collection/works/79802", "Art term Impasto below The Starry Night"),
  entry("glazing", "Glazing", "Applying a transparent paint layer over another colour to modify it without hiding it.", ng + "glaze", "Glaze: transparent films over another colour"),
  entry("sfumato", "Sfumato", "Softening contours through gradual tonal transitions without hard outlines.", ng + "sfumato", "Smoky quality and gradual tonal modulation"),
  entry("buon-fresco", "Buon fresco", "Painting onto freshly applied wet plaster so the paint bonds with the wall.", ng + "fresco", "Buon fresco on wet intonaco, explicitly distinguished from dry fresco a secco"),
];
const techniqueContrasts: readonly MeaningContrast[] = [
  ["impasto", "glazing", "Raised paint thickness versus a transparent modifying layer"], ["impasto", "sfumato", "Raised surface application versus softened tonal contours"],
  ["impasto", "buon-fresco", "Paint's raised surface versus wet-plaster wall-painting process"], ["glazing", "sfumato", "Transparent superimposed layer versus gradual contour transition"],
  ["glazing", "buon-fresco", "Transparent layer over another colour versus pigment application to wet plaster"], ["sfumato", "buon-fresco", "Smoky contour treatment versus wet-plaster bonding process"],
];
const toolSource = "https://www.nationalgallery.org.uk/paintings/workshop-of-quinten-massys-saint-luke-painting-the-virgin-and-child";
const tools = [
  entry("easel", "Easel", "An upright support that holds a painting while the artist works.", toolSource, "Overview: adjustable easel ledge holding the framed panel"),
  entry("palette", "Palette", "A board used to hold and mix paints while painting.", toolSource, "Overview: wooden palette and pigments"),
  entry("brush", "Paintbrush", "A handled tool with a brush head used to apply paint.", toolSource, "Overview: brushes with wooden handles"),
  entry("mahlstick", "Mahlstick", "A rod with a padded end used to steady the painter's hand.", toolSource, "Overview: mahlstick with soft padded knob"),
];
const toolContrasts: readonly MeaningContrast[] = [
  ["easel", "palette", "Upright painting support versus paint-holding board"], ["easel", "brush", "Support for the painting versus paint applicator"], ["easel", "mahlstick", "Support for the painting versus rod supporting the working hand"],
  ["palette", "brush", "Paint-holding board versus handled applicator"], ["palette", "mahlstick", "Paint-mixing board versus padded hand-rest rod"], ["brush", "mahlstick", "Paint application head versus padded hand support"],
];
const media = [
  entry("oil-paint", "Oil paint", "Paint in which pigment is bound in a drying oil.", ng + "oil", "Oil: pigment mixed with oil; examples linseed, walnut and poppy"),
  entry("watercolour", "Watercolour", "Transparent paint with a water-soluble gum binder, thinned with water.", "https://www.npg.org.uk/collections/explore/glossary-of-art-terms/watercolour", "Transparent pigment bound with gum Arabic; specific traditional wash-painting sense"),
  entry("egg-tempera", "Egg tempera", "Paint using egg yolk to bind the pigment.", ng + "tempera", "Specific egg-tempera sense, not every historical tempera medium"),
  entry("acrylic-paint", "Acrylic paint", "Fast-drying paint with pigment suspended in an acrylic polymer emulsion.", "https://www.moma.org/collection/terms/", "Art terms index: Acrylic paint definition, not the individual term page's works list"),
];
const mediumContrasts: readonly MeaningContrast[] = [
  ["oil-paint", "watercolour", "Drying-oil binder versus water-soluble gum binder"], ["oil-paint", "egg-tempera", "Drying oil versus egg-yolk binder"], ["oil-paint", "acrylic-paint", "Drying oil versus acrylic polymer emulsion"],
  ["watercolour", "egg-tempera", "Traditional gum binder versus egg yolk"], ["watercolour", "acrylic-paint", "Water-soluble gum binder versus acrylic polymer emulsion, not merely both diluted with water"], ["egg-tempera", "acrylic-paint", "Egg-yolk binder versus acrylic polymer emulsion"],
];
const composition = [
  entry("linear-perspective", "Linear perspective", "Creating pictured depth with receding lines that converge towards vanishing points.", ng + "linear-perspective", "Linear perspective: receding parallel lines and vanishing point"),
  entry("foreshortening", "Foreshortening", "Depicting a body or object as receding into the picture space.", ng + "foreshorten", "Foreshorten: object or person receding from viewer"),
  entry("symmetrical-balance", "Symmetrical balance", "Distributing visual weight in a mirror-like arrangement across an axis.", getty, "Principles of Design: Balance, symmetrical mirror image"),
  entry("asymmetrical-balance", "Asymmetrical balance", "Balancing visual weight with different arrangements on opposite sides.", getty, "Principles of Design: Balance, asymmetrical different but still balanced"),
];
const compositionContrasts: readonly MeaningContrast[] = [
  ["linear-perspective", "foreshortening", "Vanishing-point line system versus depiction of a receding object, which can use that system"], ["linear-perspective", "symmetrical-balance", "Depth construction versus mirror-like visual-weight distribution"],
  ["linear-perspective", "asymmetrical-balance", "Depth construction versus unequal arrangement of balanced visual weight"], ["foreshortening", "symmetrical-balance", "A receding object's depiction versus mirrored visual weights"],
  ["foreshortening", "asymmetrical-balance", "Depicted recession versus differing but balanced arrangements"], ["symmetrical-balance", "asymmetrical-balance", "Mirrored versus different-sided arrangements, not a claim that a picture cannot combine local balances"],
];
const colours = [
  entry("hue", "Hue", "The name or identity of a colour, such as red or blue.", getty, "Elements of Art: Color, hue(name)"),
  entry("value", "Value", "How light or dark a colour is.", getty, "Elements of Art: Color, value(light or dark)"),
  entry("intensity", "Intensity", "How bright or dull a colour is.", getty, "Elements of Art: Color, intensity(bright or dull)"),
  entry("complementary-colours", "Complementary colours", "Colours opposite each other on the traditional red-yellow-blue colour wheel.", "https://www.getty.edu/education/for_teachers/curricula/impressionism/lesson01.html", "Lesson1 traditional colour wheel: opposite pairs red/green, blue/orange, yellow/violet; not RGB primaries"),
];
const colourContrasts: readonly MeaningContrast[] = [
  ["hue", "value", "Colour identity versus lightness"], ["hue", "intensity", "Colour identity versus brightness or dullness"], ["hue", "complementary-colours", "An individual colour's identity versus a pair's wheel relationship"],
  ["value", "intensity", "Lightness versus brightness or dullness, explicitly distinguished by the guide"], ["value", "complementary-colours", "Lightness versus opposite positions on a specified colour wheel"], ["intensity", "complementary-colours", "Brightness or dullness versus a relationship between opposite wheel colours"],
];
const visual = [
  entry("line", "Line", "A mark that is longer than it is wide.", getty, "Elements of Art: Line"),
  entry("shape", "Shape", "A flat enclosed area with length and width.", getty, "Elements of Art: Shape, distinguished from three-dimensional form"),
  entry("visual-texture", "Visual texture", "The appearance of a surface's texture, which may differ from how it actually feels.", getty, "Elements of Art: Texture, visual versus actual feel"),
  entry("negative-space", "Negative space", "The empty area around and between depicted objects.", getty, "Elements of Art: Space, negative space between objects"),
];
const visualContrasts: readonly MeaningContrast[] = [
  ["line", "shape", "Elongated mark versus enclosed flat area"], ["line", "visual-texture", "Mark dimensions versus apparent surface quality"], ["line", "negative-space", "A mark versus surrounding empty area"],
  ["shape", "visual-texture", "Enclosed area versus apparent surface quality"], ["shape", "negative-space", "Enclosed shape as element versus empty surrounding area as spatial relationship"], ["visual-texture", "negative-space", "Apparent surface quality versus unoccupied area"],
];
export const paintingTerminologySets = [
  authorDefinitions("painting", "l5", "p1", "definition_of_painting_technique", "defining-painting-process", techniques, techniqueContrasts),
  authorDefinitions("painting", "l5", "p2", "definition_of_painting_tool", "painting-tool-function", tools, toolContrasts),
  authorDefinitions("painting", "l5", "p4", "definition_of_painting_medium", "paint-binder-composition", media, mediumContrasts),
  authorDefinitions("painting", "l9", "p1", "definition_of_painting_composition_term", "composition-terminology", composition, compositionContrasts),
  authorDefinitions("painting", "l9", "p2", "definition_of_color_theory_term", "traditional-painting-colour-terminology", colours, colourContrasts),
  authorDefinitions("painting", "l9", "p4", "definition_of_painting_visual_term", "visual-element-terminology", visual, visualContrasts),
];
