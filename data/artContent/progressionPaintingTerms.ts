import { paintingTerminologySets } from "./paintingTerminology";
import { expandTerms, type TermAddition } from "./termExpansion";
const ng="https://www.nationalgallery.org.uk/paintings/glossary/", mo="https://www.moma.org/momaorg/shared/flattened_pages/moma_learning/glossary/", mf="https://cameo.mfa.org/wiki/";
const elements="https://www.getty.edu/education/teachers/building_lessons/formal_analysis.html";
const principles="https://www.getty.edu/education/teachers/building_lessons/principles_design.pdf";
const colour="https://www.getty.edu/education/teachers/classroom_resources/curricula/landscapes/downloads/worksheet03.pdf";
const row=(id:string,term:string,definition:string,url:string,locator:string):TermAddition=>({id,term,definition,url,locator});
// Each list below explicitly authorizes its named defining-meaning comparisons.
// It is not an exclusive classification of artworks; processes can coexist.
function pairs(cliques: readonly (readonly string[])[], excluded: readonly string[]=[]) {
  return cliques.flatMap(ids=>ids.flatMap((a,i)=>ids.slice(i+1).filter(b=>!excluded.includes([a,b].sort().join("|"))).map(b=>[a,b,"Reviewed different defining operations, functions or attributes in the cited senses; neither supplied definition defines the other named term. This does not deny co-occurrence in one artwork."] as const)));
}
const technique=[
  row("scumbling","Scumbling","A thin, light-toned paint layer over a darker colour.",ng+"scumble","Scumble paragraph1; thinness creates translucency, distinguished from darker glaze"),
  row("grisaille","Grisaille","Painting with tonal variations in monochrome or a very limited palette.",ng+"grisaille","Opening definition; not restricted to grey alone"),
  row("chiaroscuro","Chiaroscuro","Clear light–dark contrasts used to model forms or create drama.",ng+"chiaroscuro","Paragraphs1–2 tonal contrast, volume and drama"),
  row("pointillism","Pointillism","Building an image from small, distinct dots of unmixed colour.",mo,"Pointillism entry: Seurat and Signac, distinct points in patterns"),
  row("collage","Collage","Affixing fragments of paper or other materials to a supporting surface.",mo,"Collage entry; technique sense, not any juxtaposition"),
  row("fresco-secco","Fresco secco","Painting on dry plaster, unlike painting into wet plaster.",ng+"fresco","Fresco a secco contrasted with buon fresco; dry-plaster method"),
  row("sgraffito","Sgraffito","Scratching a surface layer to reveal a differently coloured layer beneath.",mf+"Sgraffito","Description: painting/pottery/glass, revealing lower colour"),
];
const tools=[
  row("palette-knife","Palette knife","A spatula for mixing, applying or removing paint.","https://www.moma.org/collection/terms/palette-knife","Definition: spatula, mix on palette, apply/remove paint"),
  row("paint-muller","Paint muller","A flat-bottomed implement for grinding pigments against a fixed slab.","https://data.fitzmuseum.cam.ac.uk/id/terminology/term-80500","Mullers scope note; marble/glass, flat bottom against slab"),
  row("grinding-slab","Pigment-grinding slab","A fixed flat surface against which a muller grinds pigments.","https://www.reading.ac.uk/adlib/Details/collect/4585","Muller worked against flat stone; distinguish moving implement from stationary surface"),
  row("lay-figure","Lay figure","A poseable artist's mannequin used instead of a live sitter.","https://www.nationalgallery.org.uk/media/yj5dmiaf/ng-teachers-notes-2018_rev.pdf","Wright painting: wooden model could be posed and stand in for absent person"),
  row("camera-obscura","Camera obscura","A darkened box that projects an external scene onto a surface.","https://www.nationalgallery.org.uk/media/yj5dmiaf/ng-teachers-notes-2018_rev.pdf","Wright technique: shuttered box projects scene for tracing; not camera lucida"),
  row("airbrush","Airbrush","A hand-held tool spraying atomized paint with compressed air.",mf+"Airbrush","Description first two paragraphs: controlled spray, compressed-air supply"),
  row("paint-roller","Paint roller","A rotating cylinder used to spread paint across a surface.","https://www.mot.be/resource/Tool/verfroller?lang=nl","Description: roll in bracket, cylinder end, diameter/width and paint application; morphology wheel-shaped. Museum of Old Techniques ID1327"),
];
const media=[
  row("gouache","Gouache","Opaque water-based paint with a gum binder.",ng+"gouache","Paragraph2 opaque pigments ground in water and mixed with gum"),
  row("dry-pastel","Dry pastel","Pigment bound with gum and formed into usable sticks.",ng+"pastel","Pastel noun/medium sense, not a pale colour or oil pastel"),
  row("oil-pastel","Oil pastel","Pigment sticks with wax and a non-drying oil binder.",mf+"Oil_pastel","Description wax base softened with non-drying oil; not drying-oil paint"),
  row("casein-paint","Casein paint","Water-based matte paint bound with milk protein.",mf+"Casein_paint","Description casein binder; Casein linked definition milk protein"),
  row("encaustic-paint","Encaustic paint","Pigment mixed with molten wax and fused to its support.",mf+"Encaustic_paint","Description heated application and fusion, not cold oil-pastel stick"),
  row("glue-distemper","Collagen-glue distemper","Opaque, matte water-based paint using collagen-based animal glue as its binder.",mf+"Distemper","Qualified collagen-glue subtype, not every gum/casein distemper; Description plus Getty AAT300192836 (animal glue as degraded/denatured collagen): https://www.getty.edu/vow/AATFullDisplay?find=video&logic=AND&note=&page=1&subjectid=300192836"),
  row("carbon-ink","Carbon-based ink","Black liquid drawing or painting medium containing powdered carbon pigment.",mf+"Carbon-based_ink","Opening black ink containing powdered carbon; carbon-based sense, not all inks"),
];
const composition=[
  row("emphasis","Emphasis","Making an area stand out to attract the viewer's attention.",principles,"p1 Emphasis"),
  row("compositional-movement","Compositional movement","The path the viewer's eye follows through an artwork.",principles,"p1 Movement; visual attention, not physically moving sculpture"),
  row("pattern","Pattern","Repeating an object or symbol throughout a work.",principles,"p1 Pattern"),
  row("proportion","Proportion","Size relationships among the parts of a composition.",principles,"p1 Proportion, head size compared with body"),
  row("rhythm","Rhythm","Repeated visual elements creating a feeling of organized movement.",principles,"p1 Rhythm; not actual motion"),
  row("variety","Variety","Using several different visual elements to sustain interest.",principles,"p1 Variety; distinguish difference from repetition"),
  row("unity","Unity","Harmony among a work's parts, creating a sense of completeness.",principles,"p1 Unity"),
];
const colours=[
  row("primary-colours","Traditional primary colours","Red, yellow and blue in the traditional painter's colour wheel.",colour,"p2 Color; RYB teaching model, not RGB additive light or CMY printing"),
  row("secondary-colours","Traditional secondary colours","Orange, green and violet, made by mixing traditional primary-colour pairs.",colour,"p2 Color; traditional RYB model"),
  row("tertiary-colours","Traditional tertiary colours","Intermediate hues made by mixing a primary with a neighbouring secondary.",colour,"p2 intermediate/tertiary examples yellow-green, blue-green, blue-violet"),
  row("warm-colours","Warm colours","Colours such as red, orange and yellow, conventionally associated with warmth.","https://www.getty.edu/education/teachers/classroom_resources/curricula/esl3/esl3_lesson08.html","Lesson step2 warm red/orange/yellow; relative artistic description, not measured temperature"),
  row("cool-colours","Cool colours","Colours such as blue and green, conventionally associated with coolness.","https://www.getty.edu/education/teachers/classroom_resources/curricula/esl3/esl3_lesson08.html","Lesson step2 blue/green/white; examples not an exhaustive fixed boundary"),
  row("analogous-colours","Analogous colours","Neighbouring hues on the colour wheel that share a common colour.","https://www.sfmoma.org/read/fields-of-color/","Activity analogous-colour groupings, adjacent colours; not complementary opposites"),
  row("monochrome","Monochrome","A work rendered in one colour.",mo,"Monochrome entry; colour scheme rather than hue identity"),
];
const visual=[
  row("form","Form","Three-dimensional volume with height, width and depth.",elements,"Shape and form; form has depth"),
  row("positive-space","Positive space","The area occupied by the primary objects in an artwork.",elements,"Space paragraph and positive/negative example"),
  row("contour","Contour","The outline or boundary of a depicted shape.",mo,"Contour entry: outline; not every line"),
  row("geometric-shape","Geometric shape","A mathematically named shape, such as a circle or square.",elements,"Shape and form: geometric shapes examples"),
  row("organic-shape","Organic shape","An irregular shape suggesting forms found in nature.",elements,"Shape and form: irregular/asymmetrical, natural or human-made imitation"),
  row("foreground","Foreground","The pictured area that appears closest to the viewer.",mo,"Foreground entry; represented picture space"),
  row("background","Background","The pictured area that appears farthest from the viewer.",mo,"Background entry; represented picture space"),
];
const lists=[technique,tools,media,composition,colours,visual];
const reviewedMeaningGroups=[
  ["impasto","glazing","sfumato","buon-fresco","scumbling","grisaille","chiaroscuro","pointillism","collage","fresco-secco","sgraffito"],
  ["easel","palette","brush","mahlstick","palette-knife","paint-muller","grinding-slab","lay-figure","camera-obscura","airbrush","paint-roller"],
  ["oil-paint","watercolour","egg-tempera","acrylic-paint","gouache","dry-pastel","oil-pastel","casein-paint","encaustic-paint","glue-distemper","carbon-ink"],
  ["linear-perspective","foreshortening","symmetrical-balance","asymmetrical-balance","emphasis","compositional-movement","pattern","proportion","rhythm","variety","unity"],
  ["hue","value","intensity","complementary-colours","primary-colours","secondary-colours","tertiary-colours","warm-colours","cool-colours","analogous-colours","monochrome"],
  ["line","shape","visual-texture","negative-space","form","positive-space","contour","geometric-shape","organic-shape","foreground","background"],
];
// Explicit exceptions retain unknown where broader/narrower meanings or a
// plausible hybrid make a supplied partial description potentially valid.
const unknown=["glazing|scumbling","carbon-ink|gouache","carbon-ink|watercolour","contour|line","geometric-shape|shape","organic-shape|shape","compositional-movement|rhythm","pattern|rhythm"];
export const progressionPaintingTermSets=lists.map((rows,i)=>expandTerms(paintingTerminologySets[i],rows,
  pairs([reviewedMeaningGroups[i]],unknown).filter(([a,b])=>rows.some(r=>r.id===a||r.id===b))));
