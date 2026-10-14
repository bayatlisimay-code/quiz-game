import { authorDefinitions, type DefinitionEntry, type MeaningContrast } from "./definitions";
const va = "https://www.vam.ac.uk/articles/sculpture-techniques";
const bronze = "https://www.getty.edu/publications/bronze-guidelines/vocabulary/";
const entry = (id: string, term: string, definition: string, url: string, locator: string): DefinitionEntry => ({ id, term, definition, url, locator });
const tools = [
  entry("chisel", "Chisel", "An edged cutting tool used to remove and shape stone when struck.", va, "Stone-carving: flat and claw chisels remove material"),
  entry("rasp", "Rasp", "A rough-surfaced metal tool used to abrade and smooth a carving.", va, "Stone-carving: rasps and rifflers with rough metal surfaces"),
  entry("mallet", "Mallet", "A striking tool used to drive carving tools into the material.", va, "Stone-carving: points and punches struck by hammer or mallet"),
  entry("drill", "Drill", "A rotary boring tool used to excavate holes in stone or create decorative effects.", va, "Stone-carving: drills excavate stone and create decorative effects"),
];
const toolContrasts: readonly MeaningContrast[] = [
  ["chisel", "rasp", "Struck cutting edge versus rough abrading surface"], ["chisel", "mallet", "Cutting implement versus tool striking it"], ["chisel", "drill", "Struck cutting edge versus rotary boring"],
  ["rasp", "mallet", "Rough abrading tool versus striking tool"], ["rasp", "drill", "Surface abrasion versus rotary boring"], ["mallet", "drill", "Striking other tools versus boring directly"],
];
const materials = [
  entry("bronze", "Bronze", "A copper alloy whose principal added element is tin.", bronze + "bronze/", "Recommended specific copper-tin sense, not every copper alloy loosely called bronze"),
  entry("marble", "Marble", "A crystalline stone formed by the metamorphism of limestone.", "https://www.getty.edu/publications/resources/virtuallibrary/0892361743.pdf", "Marble: Art Historical and Scientific Perspectives, geological discussion: temperature of metamorphism converting limestone into marble; geological sense"),
  entry("terracotta", "Terracotta", "Clay hardened by firing.", "https://resources.metmuseum.org/resources/metpublications/pdf/French_Terracottas_The_Metropolitan_Museum_of_Art_Bulletin_v_49_no_3_Winter_1991_1992.pdf", "Introduction: terracotta commonly used term for fired clay"),
  entry("wax", "Wax", "A low-melting, water-repellent material that can be softened and reshaped.", "https://www.getty.edu/vow/AATFullDisplay?find=&logic=&nation=&note=&place=&role=&subjectid=300014585", "AAT300014585 scope note: solid/semi-solid, thermoplastic, low melting, water-repellent"),
];
const materialContrasts: readonly MeaningContrast[] = [
  ["bronze", "marble", "Metal alloy versus metamorphic stone"], ["bronze", "terracotta", "Metal alloy versus fired clay"], ["bronze", "wax", "Copper-tin alloy versus low-melting wax material"],
  ["marble", "terracotta", "Metamorphic stone versus clay transformed by firing"], ["marble", "wax", "Crystalline stone versus low-melting thermoplastic wax"], ["terracotta", "wax", "Fired clay versus thermoplastic wax"],
];
const forms = [
  entry("torso", "Torso", "The central portion of a figure's body, excluding the head and limbs.", "https://www.getty.edu/vow/AATFullDisplay?find=Wood&logic=AND&note=&subjectid=300375051", "AAT300375051 scope note; represented anatomical portion, not an assertion that every artwork titled Torso omits all limbs"),
  entry("equestrian-statue", "Equestrian statue", "A sculptural group representing a horse and its rider.", "https://www.getty.edu/vow/AATFullDisplay?find=&logic=AND&note=&subjectid=300047606", "AAT300047606 scope note: sculptural groups consisting of horse and rider"),
  entry("bust", "Bust", "A portrait sculpture showing the head, neck, shoulders and upper chest.", "https://www.npg.org.uk/collections/explore/glossary-of-art-terms/bust", "Bust definition; specifically sculptural rather than painted portrait sense"),
  entry("relief", "Relief", "Sculpted figures or forms that project from a background surface.", "https://www.moma.org/collection/terms/relief", "Sculptural sense, not relief printing or apparent painted projection"),
  entry("mobile", "Mobile", "A kinetic sculpture with balanced components designed to move.", "https://www.si.edu/object/gwenfritz%3Asaam_1969.116", "Opening distinction: mobiles are kinetic abstract sculptures, stabiles stationary equivalents; MoMA Calder movement card https://www.moma.org/docs/learn/ArtCard_MOVEMENT_CALDER.pdf"),
  entry("stabile", "Stabile", "A stationary abstract sculpture, contrasted with the moving components of a mobile.", "https://www.si.edu/object/gwenfritz%3Asaam_1969.116", "Opening distinction: stabiles stationary equivalents of mobiles"),
];
// Partial compatibility evidence is intentional. Busts can be reliefs, and
// abstract reliefs can be stationary. These overlaps do not certify negatives.
const formContrasts: readonly MeaningContrast[] = [
  ["torso", "bust", "Central body portion excluding the head versus a portrait including head, neck and upper chest"],
  ["torso", "equestrian-statue", "A central body portion versus a group representing rider and horse"],
  ["torso", "mobile", "Anatomical represented portion versus a sculpture defined by balanced components designed to move"],
  ["bust", "equestrian-statue", "Upper-body portrait sense versus a group representing horse and rider"],
  ["equestrian-statue", "mobile", "Horse-and-rider subject form versus design for kinetic movement, not a claim that a horse sculpture cannot move"],
  ["bust", "mobile", "A portrait's represented upper body versus a form defined by moving balanced components; not a classification of every possible hybrid artwork"],
  ["mobile", "stabile", "Designed kinetic movement versus stationary abstract construction"],
];
const terms = [
  entry("maquette", "Maquette", "A small, rough three-dimensional sketch for a sculpture.", "https://www.getty.edu/vow/AATFullDisplay?find=&logic=AND&note=&page=1&subjectid=300047837", "AAT300047837 scope note; not all finished small sculptures"),
  entry("armature", "Armature", "A structural framework supporting a sculpture or its model.", bronze + "armature/", "Opening definition: rods, tubes, wires or other materials supporting sculpture, generally internal but sometimes temporary external components"),
  entry("plinth", "Plinth", "A solid base used to support a statue or memorial.", "https://www.getty.edu/vow/AATFullDisplay?find=&logic=AND&note=&subjectid=300001749", "AAT300001749, statue/memorial base sense, not external wall plinth course"),
  entry("chemical-patina", "Chemical patina", "A mineral layer formed by chemical transformation of a metal surface.", bronze + "patina/", "Second explicitly distinguished meaning of patina, not every organic coating or pleasing age change"),
];
const termContrasts: readonly MeaningContrast[] = [
  ["maquette", "armature", "Three-dimensional preparatory sketch versus supporting framework"], ["maquette", "plinth", "Preparatory model versus supporting base"], ["maquette", "chemical-patina", "Preparatory model versus chemically transformed surface layer"],
  ["armature", "plinth", "Supporting framework versus solid supporting base, even when attached"], ["armature", "chemical-patina", "Structural framework versus surface mineral layer"], ["plinth", "chemical-patina", "Supporting base versus surface mineral layer"],
];
const processes = [
  entry("lost-wax-casting", "Lost-wax casting", "Casting metal into the space left when a wax model is melted out of a heat-resistant mould.", bronze + "lost-wax-casting/", "Opening definition: wax embedded in refractory mould, heated out and replaced with molten metal"),
  entry("sand-casting", "Sand casting", "Casting metal into a mould made from compacted, bound sand around a rigid model.", bronze + "sand-casting/", "Opening definition: bound sand piece mould rammed around rigid model"),
  entry("welding", "Welding", "Joining metal parts by heat that partly melts the parts at the join.", bronze + "welding/", "Opening definition distinguishes partial melting of parts from lower-melting filler-only soldering/brazing"),
  entry("chasing", "Chasing", "Detailed cold-working of a cast metal surface to refine or correct it.", bronze + "chasing/", "Bronze-sculpture sense: detailed cold work after casting and fettling, not only decorative sheet-metal punching"),
];
const processContrasts: readonly MeaningContrast[] = [
  ["lost-wax-casting", "sand-casting", "Sacrificed wax model versus compacted bound-sand piece mould around rigid model"], ["lost-wax-casting", "welding", "Filling a mould left by wax versus fusing separate metal parts"], ["lost-wax-casting", "chasing", "Casting into a mould versus cold surface refinement after casting"],
  ["sand-casting", "welding", "Casting into sand mould versus fusion joining"], ["sand-casting", "chasing", "Casting into sand mould versus later surface cold work"], ["welding", "chasing", "Heat-fusion joining versus cold surface refinement"],
];
export const sculptureTerminologySets = [
  authorDefinitions("sculpture", "l5", "p2", "definition_of_sculpture_tool", "stone-carving-tool-function", tools, toolContrasts),
  authorDefinitions("sculpture", "l5", "p4", "definition_of_sculpture_material", "material-composition", materials, materialContrasts),
  authorDefinitions("sculpture", "l9", "p1", "definition_of_sculpture_form", "sculptural-form-defining-feature", forms, formContrasts),
  authorDefinitions("sculpture", "l9", "p2", "definition_of_sculpture_term", "sculpture-technical-terminology", terms, termContrasts),
  authorDefinitions("sculpture", "l9", "p4", "definition_of_advanced_sculpture_process", "bronze-process-defining-operation", processes, processContrasts),
];
