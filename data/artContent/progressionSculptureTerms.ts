import { sculptureTerminologySets } from "./sculptureTerminology";
import { terminologyPilotConcepts, terminologyPilotEvidence } from "../artPilot/terminology";
import { expandTerms, type TermAddition, type DefinitionPool } from "./termExpansion";
const va="https://www.vam.ac.uk/articles/sculpture-techniques", metal="https://www.vam.ac.uk/articles/metalworking-techniques";
const br="https://www.getty.edu/publications/bronze-guidelines/vocabulary/", mf="https://cameo.mfa.org/wiki/";
const row=(id:string,term:string,definition:string,url:string,locator:string):TermAddition=>({id,term,definition,url,locator});
const techniques=[
  row("forging","Forging","Shaping metal by hammering or pressing, often after heating.",metal,"Forming / Forging; larger hard metals, heat and hammer or machinery"),
  row("repousse","Repoussé","Hammering sheet metal from behind to raise a relief design.","https://www.metmuseum.org/art/collection/search/309123","Crown description: worked from behind (repoussé), contrasted with front working"),
  row("engraving","Engraving metal","Cutting decorative V-shaped grooves into metal with a sharp tool.",br+"engraving/","Opening: chisel, burin or graver removing material; bronze-surface sense, not printmaking"),
  row("gilding","Gilding","Applying gold to the surface of a sculpture.",br+"gilding/","Opening definition; various methods, not exclusively leaf or mercury"),
  row("inlaying","Inlaying","Inserting shaped decorative material into a matching surface recess.",br+"inlay/","Opening: incised cavity, inserted shaped element generally flush; not overlay"),
  row("electroforming","Electroforming","Building a metal reproduction by electrodepositing metal onto a mould.",metal,"Forming / Electroforming; reproduction from mould, distinguished from coating a finished object"),
  row("polishing","Polishing stone","Abrading stone to produce a smooth, reflective surface.",va,"Stone carving: progressively smoothed/abraded marble or alabaster, polish with pumice"),
];
const tools=[
  row("stone-point","Stone-carving point","A pointed tool struck to remove rough stone in early carving.",va,"Stone carving: points and punches struck by hammer/mallet during roughing"),
  row("claw-chisel","Claw chisel","A toothed cutting tool for rapid, controlled stone removal.",va,"Stone carving: serrated edges of claw chisels"),
  row("gouge","Gouge","A curved-edged carving tool for cutting hollows in wood.",va,"Wood carving: gouges shape wood. Curved/hollow blade corroborated Sidney Museum catalogue https://hub.catalogit.app/sidney-museum-and-archives/folder/entry/gouge-1 (Description, cutting curved surfaces)"),
  row("broad-axe","Broad axe","A wide-bladed axe used to rough out a wooden sculpture.",va,"Wood carving: roughly carved with broad axe before finer shaping"),
  row("outside-calipers","Outside calipers","Two inward-curving legs used to measure an object's exterior dimensions.","https://data.fitzmuseum.cam.ac.uk/id/terminology/term-88442","Outside calipers scope note; measurement, not cutting; sculptural use also Met Late Medieval German Sculpture Materials and Techniques"),
  row("metal-punch","Metalworking punch","A struck rod that compresses patterns into a metal surface.",br+"punch/","Opening definition: steel rod, hammer, compressing metal; not cutting away metal"),
  row("pointing-machine","Pointing machine","A mechanical device transferring measured points from a model to stone.","https://americanart.si.edu/exhibitions/powers","Description: plaster studded with metal points for replication in multiple marble versions"),
];
const materials=[
  row("gypsum-alabaster","Gypsum alabaster","Fine-grained, compact gypsum used for translucent carvings.",mf+"Alabaster","Description: compact hydrated-calcium-sulfate gypsum; explicitly not calcite Egyptian alabaster"),
  row("granite","Granite","Hard, coarse-grained igneous rock containing quartz and feldspar.",mf+"Granite","Description: dense hard coarse-grain igneous; quartz/orthoclase/albite"),
  row("limestone","Limestone","Sedimentary rock composed mainly of calcium carbonate.",mf+"Limestone","Description: sedimentary, calcite/aragonite; not metamorphosed marble"),
  row("wood","Wood","Hard, fibrous tissue forming tree trunks, branches and roots.",mf+"Wood","Description: tissue, cellulose/hemicellulose/lignin"),
  row("plaster-of-paris","Plaster of Paris","Calcined gypsum powder that sets solid when mixed with water.",mf+"Plaster_of_Paris","Description calcium-sulfate hemihydrate; sets with water; used for sculpture/moulds"),
  row("steel","Steel","An iron alloy containing carbon.",mf+"Steel","Description: iron alloy, carbon; no disputed percentage thresholds taught"),
  row("aluminium","Aluminium","A lightweight, silvery-white metallic element, symbol Al.",mf+"Aluminum","Description metallic element; British spelling and US alias; no image approval"),
];
const forms=[
  row("in-the-round","Sculpture in the round","Freestanding sculpture worked on all sides, rather than attached to a background.","https://www.nga.gov/educational-resources/explore-basics-sculpture","Sculpture in the round versus relief; physical relation to background, not a subject classification"),
  row("low-relief","Low relief","Sculpted figures projecting only slightly from their background.","https://www.metmuseum.org/-/media/files/learn/for-educators/publications-for-educators/byzantine.pdf","KEYWORDS / relief: low relief figures project slightly; not every relief"),
  row("high-relief","High relief","Sculpted figures projecting at least half their natural depth from a background.","https://www.metmuseum.org/-/media/files/learn/for-educators/publications-for-educators/byzantine.pdf","KEYWORDS / relief: at least half natural circumference; preserves degree, not all relief"),
  row("installation","Installation","Art creating an enveloping sensory experience within a particular environment.","https://www.moma.org/momaorg/shared/flattened_pages/moma_learning/glossary/","Installation definition; not simply installing any sculpture"),
  row("readymade","Readymade","A manufactured object designated as art by an artist.","https://www.moma.org/momaorg/shared/flattened_pages/moma_learning/themes/dada/marcel-duchamp-and-the-readymade/","Glossary Readymade; prefabricated object isolated from intended use through artist selection"),
];
const terms=[
  row("casting-core","Casting core","The mould portion defining the internal space of a hollow bronze.",br+"core/","Opening definition; not supporting armature or whole mould"),
  row("mould","Mould","A negative form used to produce a positive cast or impression.",br+"mold/","Opening three-dimensional negative matrix; mould not positive replica"),
  row("sprue","Sprue","A channel feeding molten metal into a casting mould.",br+"sprue/","First meaning: feed channel, distinguished from vent; not cooled rod sense"),
  row("edition","Sculpture edition","An intentionally produced series of virtually identical casts.",br+"edition/","Opening definition; slight finishing differences remain possible"),
  row("replica","Bronze replica","A reproduction of a bronze made by its artist or original foundry.",br+"replica/","First stated sense; not any later unauthorized copy; qualified subject preserves authorship restriction"),
  row("seam-line","Casting seam line","A raised line formed where sections of a casting mould meet.",br+"seam-line/","Opening and Note: slight raised line at joins, unlike irregular flashing"),
  row("foundry-model","Foundry model","A model made by a foundry for mould-making or finishing reference.",br+"foundry-model/","Opening two paragraphs, protects artist's original model; not every preliminary sketch"),
];
const processes=[
  row("yellow-metal-brazing","Brazing (Getty bronze vocabulary)","Joining bronze parts with lower-melting copper-alloy filler, without melting their edges.",br+"brazing/","Opening and Note; source's copper-alloy usage differs from wider industrial brazing terminology"),
  row("white-metal-soldering","Soldering (Getty bronze vocabulary)","Joining bronze parts using a lower-melting white-metal filler.",br+"soldering/","Getty visual-identification convention: white silver/tin/lead filler versus yellow copper-alloy brazing; hard silver solder still called solder"),
  row("peening","Peening","Texturing metal with repeated blows from a peen hammer.",br+"punch/","Peening linked definition in punch Note: rounded/flat-ended hammer, disguise porosity/create faceted effect"),
  row("fettling","Fettling","Removing unwanted sprues, pins and excess metal after casting.",br+"fettling/","Opening: direct post-casting removal of unwanted features; not fine chasing detail"),
  row("metal-chiseling","Chiseling metal","Removing metal by striking a chisel with a hammer.",br+"chiseling/","Opening and Note: removal, step marks; may be part of fettling or chasing, not synonym of whole process"),
  row("cast-on-repair","Cast-on repair","Casting molten copper alloy locally to fill defects or secure a patch.",br+"cast-on-repair/","First two paragraphs; localized repair, not entire lost-wax process"),
  row("casting-from-life","Casting from life","Taking a reusable mould from a living form without harming it.",br+"life-casting/","To Be Distinguished From / casting from life; explicitly NOT burn-out life-casting"),
];
const bases: readonly DefinitionPool[]=[{concepts:terminologyPilotConcepts,evidence:terminologyPilotEvidence},...sculptureTerminologySets];
const lists=[techniques,tools,materials,forms,terms,processes];
// Deliberate, reviewed vocabularies. New entries are never automatically added
// to these comparison lists; each list needs a new explicit editorial review.
const reviewed=[
  ["carving","modelling","casting","assembling","forging","repousse","engraving","gilding","inlaying","electroforming","polishing"],
  ["chisel","rasp","mallet","drill","stone-point","claw-chisel","gouge","broad-axe","outside-calipers","metal-punch","pointing-machine"],
  ["bronze","marble","terracotta","wax","gypsum-alabaster","granite","limestone","wood","plaster-of-paris","steel","aluminium"],
  ["torso","equestrian-statue","bust","relief","mobile","stabile","in-the-round","low-relief","high-relief","installation","readymade"],
  ["maquette","armature","plinth","chemical-patina","casting-core","mould","sprue","edition","replica","seam-line","foundry-model"],
  ["lost-wax-casting","sand-casting","welding","chasing","yellow-metal-brazing","white-metal-soldering","peening","fettling","metal-chiseling","cast-on-repair","casting-from-life"],
];
const unknown=new Set([
  "chisel|claw-chisel","chisel|gouge","chisel|stone-point","claw-chisel|stone-point",
  "broad-axe|chisel","mallet|metal-punch","metal-punch|stone-point",
  "gypsum-alabaster|plaster-of-paris", "armature|casting-core", "casting-core|mould", "foundry-model|maquette", "edition|replica", "foundry-model|replica",
  "chasing|metal-chiseling","chasing|peening","fettling|metal-chiseling","cast-on-repair|lost-wax-casting","cast-on-repair|sand-casting",
  "casting-from-life|lost-wax-casting","casting-from-life|sand-casting",
]);
const supportedPairs=(ids:readonly string[],rows:readonly TermAddition[],i:number)=>ids.flatMap((a,index)=>ids.slice(index+1).filter(b=>{
  if(!rows.some(r=>r.id===a||r.id===b)||unknown.has([a,b].sort().join("|")))return false;
  if(i===3 && (a==="relief"||b==="relief") && [a,b].some(id=>id==="low-relief"||id==="high-relief")) return false;
  return true;
}).map(b=>[a,b,"Reviewed defining-meaning contrast in the cited technical senses, not mutually exclusive membership of artworks or denial that operations may be combined."] as const));
export const progressionSculptureTermSets=lists.map((rows,i)=>expandTerms(bases[i],rows,[...supportedPairs(reviewed[i],rows,i), ...(i===3 ? [
  ["relief","torso","Projection from a background defines relief; the anatomical central body excluding head and limbs defines torso. These definitions describe different meanings even when a torso is represented in relief."],
  ["relief","equestrian-statue","Background projection defines relief, whereas horse-and-rider subject matter defines an equestrian statue. Co-occurrence does not make these definitions interchangeable."],
] as const : [])]));
