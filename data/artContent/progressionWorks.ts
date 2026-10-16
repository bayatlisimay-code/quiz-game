import type { Concept } from "../../src/quizEngine/conceptTypes";
import type { SemanticEvidence } from "../../src/quizEngine/assessmentTypes";
import type { PilotArtwork } from "../artPilot/types";
import type { AncientArtwork } from "./ancientSculpture";
import { authorWorks, authorAncientWorks } from "./authoring";

// Primary collection pages compared 2026-10-15. These are the named collection
// objects and their catalogue fields, not universal claims about every version.
type Work = readonly [id: string, title: string, creatorId: string, creator: string, url: string, source: string,
  date: string, precision: PilotArtwork["precision"], clue: string, locator: string];
function works(subtopic: "painting" | "sculpture", level: string, entries: readonly Work[]) {
  return authorWorks(entries.map(([id, title, creatorId, creator, url, source, date, precision, clue, locator]): PilotArtwork => ({
    id, title, creatorId, creator, url, source, date, precision, clue, locator, introducedIn: "C",
    original: `${source}: the specific object identified by the cited collection entry`, period: `${subtopic} curriculum ${level}`,
    dateId: `date:catalogue:${date}`, event: "creation", creatorVerb: subtopic === "sculpture" ? "credited" : undefined,
    notes: "Source-checked factual record and authored text stimulus only. No image permission or production binding is implied.",
  })), subtopic, level);
}
const ng = "https://www.nationalgallery.org.uk/paintings/", moma = "https://www.moma.org/collection/works/", met = "https://www.metmuseum.org/art/collection/search/";
const additions: { concepts: Concept[]; evidence: SemanticEvidence[] }[] = [
  works("painting", "l2", [
    ["ng35", "Bacchus and Ariadne", "titian", "Titian", ng + "titian-bacchus-and-ariadne", "National Gallery", "1520–1523", "range", "A young god leaps from a cheetah-drawn chariot towards a woman by the sea; a crown of stars appears above her. Identify the National Gallery canvas.", "NG35; Key facts Date made 1520-3, Artist; Overview and audio description: chariot, cheetahs, leap and constellation"],
    ["ng168", "Saint Catherine of Alexandria (National Gallery NG168)", "raphael", "Raphael", ng + "raphael-saint-catherine-of-alexandria", "National Gallery", "about 1507", "approximate-year", "A saint leans on a spiked wheel, one hand over her heart, and looks towards a golden opening in the clouds. Identify the National Gallery panel, with a dandelion in the foreground.", "NG168; Key facts About1507, Raphael; Overview: hand on heart, wheel, heavenward gaze, dandelion"],
  ]),
  works("painting", "l3", [
    ["ng1172", "Equestrian Portrait of Charles I", "anthony-van-dyck", "Anthony van Dyck", ng + "anthony-van-dyck-equestrian-portrait-of-charles-i", "National Gallery", "about 1638–1639", "approximate-range", "An armoured king rides a large horse while an attendant carries his helmet. Identify the monumental equestrian portrait in the National Gallery.", "NG1172; current Key facts About1638–9, not older 1637–8 publications; Overview and audio: armoured king, horse, attendant"],
    ["ng194", "The Judgement of Paris (National Gallery NG194)", "peter-paul-rubens", "Peter Paul Rubens", ng + "peter-paul-rubens-the-judgement-of-paris", "National Gallery", "probably 1632–1635", "uncertain-range", "A shepherd offers a golden apple to the central one of three goddesses, while a peacock and a sheepdog confront each other. Identify the National Gallery's later version, NG194.", "Key facts Probably1632-5, Rubens; Overview apple to central Venus, peacock and sheepdog; not earlier NG6379"],
  ]),
  works("painting", "l4", [
    ["ng6322", "The Duke of Wellington", "francisco-de-goya", "Francisco de Goya", ng + "francisco-de-goya-the-duke-of-wellington", "National Gallery", "1812–1814", "range", "A gaunt military commander wears a bright crimson uniform decorated with medals. Identify the National Gallery's small panel portrait, rather than the equestrian portrait at Apsley House.", "NG6322; Key facts1812-14, Goya; Overview crimson uniform, exhausted face; later alterations as medals awarded"],
    ["ng1909", "The Execution of Lady Jane Grey", "paul-delaroche", "Paul Delaroche", ng + "paul-delaroche-the-execution-of-lady-jane-grey", "National Gallery", "1833", "year", "A blindfolded young woman in white reaches for an execution block as a man guides her hands. Identify the National Gallery's theatrical history painting, not the historical event's date.", "NG1909; Key facts1833; Overview blindfold, guidance, execution block; first exhibited1834, event1554"],
  ]),
  works("painting", "l6", [
    ["ng3294", "The Execution of Maximilian (National Gallery fragments)", "edouard-manet", "Edouard Manet", ng + "edouard-manet-the-execution-of-maximilian", "National Gallery", "about 1867–1868", "approximate-range", "Soldiers form a firing squad in a damaged canvas whose surviving fragments were collected by Degas. Identify the National Gallery version, reassembled on one canvas after the artist's death.", "NG3294; Key facts About1867-8; Overview second of four versions, surviving fragments and late1970s recombination"],
    ["ng4168", "Ballet Dancers (National Gallery NG4168)", "edgar-degas", "Edgar Degas", ng + "hilaire-germain-edgar-degas-ballet-dancers", "National Gallery", "about 1890–1900", "approximate-range", "Two red-haired heads stand out among dancers in white practice tutus; the nearest dancer rests her foot on a bench to adjust her shoe. Identify National Gallery canvas NG4168.", "Key facts About1890-1900; Overview and In-depth white practice tutus, two red heads and bench"],
  ]),
  works("painting", "l7", [
    ["moma-162-1934", "The Persistence of Memory", "salvador-dali", "Salvador Dalí", moma + "79018", "Museum of Modern Art", "1931", "year", "Soft watches droop across a barren dream landscape with distant golden cliffs and ants on a hard watch. Identify the small oil canvas in MoMA.", "Title/date1931/artist; Publication excerpt limp watches, Catalonian cliffs, ants; object162.1934"],
    ["moma-demoiselles", "Les Demoiselles d'Avignon", "pablo-picasso", "Pablo Picasso", moma + "79766", "Museum of Modern Art", "June–July 1907", "range", "Five angular nude figures crowd a shallow space, with mask-like faces on the right and fruit below. Identify MoMA's large canvas that challenged traditional figure painting.", "Title/full dating label Paris, June-July1907; publication excerpt five figures and mask-like right figures; not preparatory studies"],
  ]),
  works("painting", "l8", [
    ["moma-38-1952", "No. 10 (MoMA painting)", "mark-rothko", "Mark Rothko", moma + "78594", "Museum of Modern Art", "1950", "year", "Broad areas of yellow, blue, white and grey form softly edged horizontal fields. Identify MoMA's numbered oil canvas, object 38.1952.", "No.10,1950, Rothko; text distinguishes warm yellow and cool blue/white/grey; object38.1952, not a date in its title"],
    ["tate-t03254", "A Bigger Splash", "david-hockney", "David Hockney", "https://www.thedavidhockneyfoundation.org/artwork/3667", "David Hockney Foundation", "1967", "year", "A splash breaks the flat blue surface of a swimming pool before a low modern house; a diving board projects diagonally. Identify the large acrylic painting in Tate's collection, not the related smaller versions.", "Artwork A Bigger Splash,1967, Tate; image of pool, house, board and splash; distinct from The Splash1966"],
  ]),
  works("sculpture", "l3", [
    ["duomo-gates-paradise", "Gates of Paradise (original Baptistery doors)", "lorenzo-ghiberti", "Lorenzo Ghiberti", "https://duomo.firenze.it/en/discover/opera-duomo-museum/the-halls/sala-del-paradiso/8622/lorenzo-ghiberti-porta-del-paradiso", "Opera di Santa Maria del Fiore", "1425–1452", "range", "Ten gilded bronze panels depict Old Testament scenes using deep pictorial space. Identify the original east doors of Florence's Baptistery, now protected in its cathedral museum.", "Title/description LorenzoGhiberti, realized1425–1452; ten panels, OldTestament; originals not outdoor replacement"],
    ["bargello-donatello-bronze-david", "David (Bargello bronze)", "donatello", "Donatello", "https://museoomero.it/en/opere/david/", "Museo Tattile Statale Omero", "about 1440", "approximate-year", "A slender bronze youth wears a broad-brimmed hat and boots, with one foot on a defeated giant's head. Identify the original in the Bargello, not the marble youth in the same museum.", "Original metadata: Donatello,1440about,bronze,Bargello; not Omero's plaster copy. Narrative gives1438–1442; assessment uses Original Date field"],
  ]),
  works("sculpture", "l4", [
    ["met-62-55", "Winter (Met bronze)", "jean-antoine-houdon", "Jean-Antoine Houdon", met + "202614", "Metropolitan Museum of Art", "1787", "year", "A young woman draws a shawl tightly around her upper body while her legs remain exposed. Identify the Met bronze allegory of cold, rather than the earlier Montpellier marble.", "Met62.55; artist/date1787; narrative distinguishes marble1783 from bronze cast by Houdon himself"],
    ["getty-103rqz", "Rearing Horse (Getty bronze)", "adriaen-de-vries", "Adriaen de Vries", "https://www.getty.edu/education/for_teachers/curricula/sculpture/downloads/devries_horse.pdf", "J. Paul Getty Museum", "1610–1615", "range", "A bronze horse rears, balancing its body on two hind legs. Identify the riderless Getty sculpture discussed in the museum's sculpture teaching guide.", "Teaching sheet heading RearingHorse,AdriaendeVries,Dutch,1610–1615; bronze and balance; named educational-source dating, not conflicting earlier CONA estimate"],
  ]),
  works("sculpture", "l6", [
    ["met-1985-353", "Diana (Met reduced bronze)", "augustus-saint-gaudens", "Augustus Saint-Gaudens", met + "11999", "Metropolitan Museum of Art", "1893–1894, cast 1894 or after", "range", "A slender nude archer balances on one foot while drawing her bow. Identify the Met's reduced bronze after the tower figure, not the full-size weather vane in Philadelphia.", "Current title/artist/full date1893–94,cast1894orafter; reduced version after MadisonSquareGarden figure; preserve casting distinction"],
    ["met-39-65-45", "The Broncho Buster (Met enlarged version)", "frederic-remington", "Frederic Remington", met + "11859", "Metropolitan Museum of Art", "1895, revised 1909, cast by November 1910", "range", "A cowboy clings to a rearing horse, one arm lifted and stirrups swinging. Identify the Met's enlarged bronze version, modelled near the artist's death and cast afterwards.", "Met39.65.45; full Date field1895,revised1909,castbyNovember1910; Remington artist, RomanBronzeWorks founder; not first1895 cast"],
  ]),
  works("sculpture", "l7", [
    ["moma-oppenheim-object", "Object (MoMA fur-covered tea service)", "meret-oppenheim", "Meret Oppenheim", moma + "80997", "Museum of Modern Art", "1936", "year", "A cup, saucer and spoon are covered with fur, making familiar tableware strangely unusable. Identify the Surrealist object in MoMA, rather than a ceramic tea service.", "Title Object,Paris1936,MeretOppenheim; MoMA Learning section A Sensational Teacup; fur-covered cup/saucer/spoon"],
    ["moma-palace-4am", "The Palace at 4 a.m.", "alberto-giacometti", "Alberto Giacometti", moma + "80928", "Museum of Modern Art", "1932", "year", "A fragile open wooden framework encloses enigmatic upright forms, with glass, wire and string. Identify MoMA's small dreamlike construction, rather than a full-size building.", "Title/artist/date1932; medium wood,glass,wire,string; publication excerpt fragile palace structure"],
  ]),
  works("sculpture", "l8", [
    ["moma-sky-cathedral", "Sky Cathedral (MoMA assemblage)", "louise-nevelson", "Louise Nevelson", moma + "81006", "Museum of Modern Art", "1958", "year", "Stacked shallow boxes hold salvaged wooden mouldings and furniture parts, all painted black. Identify the wall-sized assemblage in MoMA, not another work from the artist's related series.", "Title/date1958/artist; object136.1958.1–59; gallery label boxes and salvaged components uniformly black"],
    ["moma-floor-cake", "Floor Cake", "claes-oldenburg", "Claes Oldenburg", moma + "81450", "Museum of Modern Art", "1962", "year", "An enormous soft wedge of cake rests on the floor, made from painted fabric stuffed with foam and cardboard. Identify the Pop sculpture conserved by MoMA.", "Title/artist/date1962/material; MoMA conservation post https://www.moma.org/explore/inside_out/2009/10/31/claes-oldenburg-conservation-of-floor-cake/"],
  ]),
];
type Ancient = readonly [id: string, title: string, culture: string, cultureId: string, date: string, precision: AncientArtwork["precision"], url: string, source: string, clue: string, locator: string];
function ancient(level: string, entries: readonly Ancient[]) {
  return authorAncientWorks(entries.map(([id,title,culture,cultureId,date,precision,url,source,clue,locator]): AncientArtwork => ({
    id,title,culture,cultureId,date,precision,url,source,clue,locator, introducedIn:"C", dateId:`date:catalogue:${date}`,
    period:"Ancient sculpture", original:`${source}: specifically identified collection object`, event:"creation",
    dateContext:"Use the source's full approximate dating label for this collection object",
  })),level);
}
additions.push(ancient("l1", [
  ["met-23-10-1", "Haremhab as a Scribe of the King", "Ancient Egyptian", "culture:ancient-egyptian", "c. 1328–1314 BCE", "approximate-range", met+"544692", "Metropolitan Museum of Art", "A seated official unrolls a papyrus across his lap, with an ink shell on one knee. Identify the Met's life-size granodiorite figure made before this official became king.", "Met23.10.1; current Date ca1328–1314BCE (not old1336–1323); NewKingdom,Dynasty18,fromEgypt; Overview scribe/papyrus/ink shell"],
  ["met-17-9-1", "Hippopotamus ('William')", "Ancient Egyptian", "culture:ancient-egyptian", "c. 1961–1878 BCE", "approximate-range", met+"544227", "Metropolitan Museum of Art", "A small bright-blue faience hippopotamus is painted with lotus plants. Identify the Met's figure from a Middle Kingdom tomb at Meir, popularly given a human nickname.", "Met17.9.1; Dateca1961–1878BC; MiddleKingdom,Dynasty12,Egypt; description blue glaze and lotuses"],
  ["met-32-143-2", "Human-headed winged lion (Nimrud lamassu)", "Assyrian", "culture:assyrian", "c. 883–859 BCE", "approximate-range", met+"322609", "Metropolitan Museum of Art", "A human-headed winged lion has five legs and a horned cap. Identify the gypsum palace guardian in the Met, distinguished from its bull-bodied counterpart.", "Met32.143.2; Assyrian,Neo-Assyrian,ca883–859BCE; narrative lion/horned cap/five legs"],
  ["louvre-e3023", "The Seated Scribe (Louvre limestone)", "Ancient Egyptian", "culture:ancient-egyptian", "2620–2500 BCE (Fourth Dynasty)", "range", "https://collections.louvre.fr/ark:/53355/cl010006582", "Musée du Louvre", "A painted limestone scribe sits cross-legged with a papyrus on his lap and inlaid eyes. Identify the Louvre's Old Kingdom original, rather than the Met's later granodiorite official.", "E3023; Places/dates IVedynastie,-2620/-2500; painted limestone, inlaid eyes, seated papyrus; original not reproductions"],
]));
additions.push(ancient("l2", [
  ["vatican-augustus-prima-porta", "Augustus from Prima Porta", "Roman", "culture:roman", "beginning of the 1st century CE", "range", "https://www.museivaticani.va/content/museivaticani/en/collezioni/musei/braccio-nuovo/Augusto-di-Prima-Porta.html", "Vatican Museums", "An emperor raises his arm to address troops, wearing a decorated breastplate with a scene of returned military standards. Identify the Vatican statue discovered at Livia's villa.", "Opening: beginning1stcenturyAD,emperorAugustus,VillaLivia; Roman cuirass scene; not date20BCE of depicted event"],
  ["met-32-11-4", "Marble statue of a wounded Amazon (Met)", "Roman", "culture:roman", "1st–2nd century CE", "range", met+"253373", "Metropolitan Museum of Art", "A wounded female warrior leans on a pillar with one arm over her head and a loosened tunic. Identify the Met's Roman marble; parts of the raised arm and legs are later restorations.", "Met32.11.4; CultureRoman,Imperial,Date1st–2ndcenturyCE; narrative wound/rightarm/pillar; not conjectured lostGreekprototype"],
]));
export const progressionWorkConcepts = additions.flatMap(set => set.concepts).map(c => ({ ...c, assessment: { ...c.assessment!, ...(c.assessment?.presentation?.scope ? { presentation: { ...c.assessment.presentation, scope: { ...c.assessment.presentation.scope, reviewedAt: "2026-10-15" } } } : {}) } }));
export const progressionWorkEvidence = additions.flatMap(set => set.evidence).map(e => ({ ...e, reviewedAt: "2026-10-15T08:06:23Z" }));
