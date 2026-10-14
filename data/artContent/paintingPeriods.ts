import type { PilotArtwork } from "../artPilot/types";

// Source comparisons performed 2026-10-14. These are catalogue-label questions,
// not claims that dating intervals or historical movements are exclusive.
type Entry = readonly [id: string, title: string, creatorId: string, creator: string,
  slug: string, date: string, precision: PilotArtwork["precision"], clue: string];
function nationalGallery(entries: readonly Entry[], period: string): readonly PilotArtwork[] {
  return entries.map(([id, title, creatorId, creator, slug, date, precision, clue], index) => ({
    id, title, creatorId, creator, introducedIn: index < 4 ? "A" : index < 7 ? "B" : "C",
    period, original: `National Gallery ${id.toUpperCase()}; original painting in the cited entry`,
    source: "National Gallery", url: `https://www.nationalgallery.org.uk/paintings/${slug}`,
    locator: "Key facts: Full title, Artist, Date made, Inventory number; About the work and audio description where supplied",
    date, dateId: `date:catalogue:${date}`, event: "creation", precision,
    clue: `${clue} Identify the original in the National Gallery collection.`,
  }));
}
export const baroquePaintings = nationalGallery([
  ["ng172", "The Supper at Emmaus", "caravaggio", "Caravaggio", "michelangelo-merisi-da-caravaggio-the-supper-at-emmaus", "1601", "year", "Christ blesses bread at a table as one disciple grips his chair and another stretches out both arms. A basket of fruit projects over the table's edge."],
  ["ng221", "Self Portrait at the Age of 63", "rembrandt", "Rembrandt", "rembrandt-self-portrait-at-the-age-of-63", "1669", "year", "An ageing man faces the viewer in a dark robe and cap. Thick paint describes his illuminated face, while his folded hands and the background remain loosely painted."],
  ["ng1383", "A Young Woman standing at a Virginal", "johannes-vermeer", "Johannes Vermeer", "johannes-vermeer-a-young-woman-standing-at-a-virginal", "about 1670–1672", "approximate-range", "A woman stands at a keyboard beside a window. A large picture of Cupid hangs behind her and an empty blue chair occupies the foreground."],
  ["ng2057", "The Toilet of Venus ('The Rokeby Venus')", "diego-velazquez", "Diego Velázquez", "diego-velazquez-the-toilet-of-venus-the-rokeby-venus", "1647–1651", "range", "A reclining nude is seen from behind on a bed. A winged Cupid holds a mirror that reflects her face."],
  ["ng62", "A Bacchanalian Revel before a Term", "nicolas-poussin", "Nicolas Poussin", "nicolas-poussin-a-bacchanalian-revel-before-a-term", "1632–1633", "range", "Dancers form a linked group beside a carved bust on a pillar in a wooded setting. Bright draperies and a child receiving grape juice enliven the scene."],
  ["ng14", "Seaport with the Embarkation of the Queen of Sheba", "claude-lorrain", "Claude", "claude-seaport-with-the-embarkation-of-the-queen-of-sheba", "1648", "year", "A crowned woman in red descends steps toward boats in an imaginary classical harbour. Warm sunrise light shines between monumental buildings."],
  ["ng6671", "Self Portrait as Saint Catherine of Alexandria", "artemisia-gentileschi", "Artemisia Gentileschi", "artemisia-gentileschi-self-portrait-as-saint-catherine-of-alexandria", "about 1615–1617", "approximate-range", "A woman in a turban holds a palm branch at her chest and leans against a broken spiked wheel. Her resolute face and strong arm dominate the tightly cropped composition."],
  ["ng6301", "Mr and Mrs Andrews", "thomas-gainsborough", "Thomas Gainsborough", "thomas-gainsborough-mr-and-mrs-andrews", "about 1750", "approximate-year", "A man with a gun stands beside a seated woman under a tree, with harvested fields spreading behind them. A patch on her lap remains unpainted."],
  ["ng2897", "The Scale of Love", "jean-antoine-watteau", "Jean-Antoine Watteau", "jean-antoine-watteau-the-scale-of-love", "probably 1717–1718", "uncertain-range", "A seated guitarist in theatrical dress and a woman study a musical score outdoors. A carved head rises above them, and other couples occupy the background."],
], "Baroque and Rococo-era painting");

export const romanticPaintings = nationalGallery([
  ["ng524", "The Fighting Temeraire", "jmw-turner", "J. M. W. Turner", "joseph-mallord-william-turner-the-fighting-temeraire", "1839", "year", "A small dark steam tug pulls a pale, tall-masted warship toward its final berth against a glowing sunset. The depicted voyage occurred the year before the painting was made."],
  ["ng1207", "The Hay Wain", "john-constable", "John Constable", "john-constable-the-hay-wain", "1821", "year", "An empty wooden wagon crosses shallow water beside a cottage at Flatford. Haymakers work in the meadow beyond, under a broad cloudy sky."],
  ["ng4821", "Madame Moitessier", "ingres", "Jean-Auguste-Dominique Ingres", "jean-auguste-dominique-ingres-madame-moitessier", "1856", "year", "A seated woman in a richly patterned dress rests a finger against her temple. A mirror behind her reflects her profile and the luxurious room."],
  ["ng6495", "Portrait of Jacobus Blauw", "jacques-louis-david", "Jacques-Louis David", "jacques-louis-david-portrait-of-jacobus-blauw", "1795", "year", "A Dutch diplomat in a blue coat pauses while writing at a table. A quill and inkwell sit beside him against a restrained background."],
  ["ng538", "Rain, Steam, and Speed - The Great Western Railway", "jmw-turner", "J. M. W. Turner", "joseph-mallord-william-turner-rain-steam-and-speed-the-great-western-railway", "1844", "year", "A steam locomotive advances toward the viewer over the Maidenhead railway bridge. Rain and atmospheric haze blur the Thames landscape around it."],
  ["ng130", "The Cornfield", "john-constable", "John Constable", "john-constable-the-cornfield", "1826", "year", "A shepherd boy lies at a pool to drink while sheep follow a wooded Suffolk lane toward a sunlit field. The distant village is an invented part of the landscape."],
  ["ng6433", "Christ on the Cross", "eugene-delacroix", "Eugène Delacroix", "eugene-delacroix-christ-on-the-cross", "1853", "year", "The viewer looks upward from a compressed group of mourners at a crucified figure. The mother in blue and yellow collapses beneath a stormy sky."],
  ["ng4927", "A Horse frightened by Lightning", "theodore-gericault", "Théodore Géricault", "jean-louis-andre-theodore-gericault-a-horse-frightened-by-lightning", "about 1813–1814", "approximate-range", "A dappled horse stands in profile against a nearly black sky, frozen rather than rearing as a flash in the upper right illuminates its body."],
  ["ng6517", "Winter Landscape", "caspar-david-friedrich", "Caspar David Friedrich", "caspar-david-friedrich-winter-landscape", "probably 1811", "approximate-year", "A man has discarded his crutches and prays beside a boulder before a crucifix sheltered by fir trees. A Gothic church emerges through mist beyond the snow."],
], "Neoclassicism and Romanticism");

export const impressionistPaintings = nationalGallery([
  ["ng4240", "The Water-Lily Pond", "claude-monet", "Claude Monet", "claude-monet-the-water-lily-pond", "1899", "year", "A Japanese-style arched bridge spans a densely planted garden pool at Giverny. Floating plants and reflections fill the surface beneath it."],
  ["ng3268", "The Umbrellas", "pierre-auguste-renoir", "Pierre-Auguste Renoir", "pierre-auguste-renoir-the-umbrellas", "about 1881–1886", "approximate-range", "A Parisian street crowd shelters from rain. A woman with a basket stands at the left, and a small girl holding a hoop faces us at the right."],
  ["ng4119", "The Boulevard Montmartre at Night", "camille-pissarro", "Camille Pissarro", "camille-pissarro-the-boulevard-montmartre-at-night", "1897", "year", "Seen from above, a busy Parisian avenue glitters after dark. White street lamps and warm shop lights reflect on wet pavements."],
  ["ng3260", "Music in the Tuileries Gardens", "edouard-manet", "Edouard Manet", "edouard-manet-music-in-the-tuileries-gardens", "1862", "year", "Fashionably dressed Parisians gather among trees for an outdoor concert. Artists, friends and family form a crowded group portrait, with the painter at the far left."],
  ["ng4121", "Miss La La at the Cirque Fernando", "edgar-degas", "Edgar Degas", "hilaire-germain-edgar-degas-miss-la-la-at-the-cirque-fernando", "1879", "year", "Seen sharply from below, an acrobat is hoisted toward a circus roof by a rope held between her teeth. The roof structure occupies much of the canvas."],
  ["ng5983", "Still Life with Apples and a Pomegranate", "gustave-courbet", "Gustave Courbet", "gustave-courbet-still-life-with-apples-and-a-pomegranate", "1871–1872", "range", "Ripe fruit overflows a heavy earthenware bowl in a dark interior. A pewter coffee pot and a tall glass of red wine share the table."],
  ["ng4138", "The Watering Place at Marly-le-Roi", "alfred-sisley", "Alfred Sisley", "alfred-sisley-the-watering-place-at-marly-le-roi", "probably 1875", "approximate-year", "A winter village scene shows a surviving pool from Louis XIV's demolished water gardens. The foreground water is painted with rapid, thin brushstrokes."],
  ["ng3264", "Summer's Day", "berthe-morisot", "Berthe Morisot", "berthe-morisot-summer-s-day", "about 1879", "approximate-year", "Two women sit close to the viewer in a boat on a park lake in the Bois de Boulogne. Vigorous zigzag strokes connect their dresses, water and foliage."],
  ["ng6399", "The Thames below Westminster", "claude-monet", "Claude Monet", "claude-monet-the-thames-below-westminster", "about 1871", "approximate-year", "A misty river view is anchored by a foreground jetty, a bridge and the towers of Parliament. Tugboats and workers suggest the activity of modern London."],
], "Realism and Impressionism");

export const modernPaintings = nationalGallery([
  ["ng3863", "Sunflowers", "vincent-van-gogh", "Vincent van Gogh", "vincent-van-gogh-sunflowers", "1888", "year", "Fifteen large yellow blooms, ranging from buds to drying seed heads, stand in a vase. This is the London version of a still-life series made for a house in Arles."],
  ["ng6359", "Bathers (Les Grandes Baigneuses)", "paul-cezanne", "Paul Cezanne", "paul-cezanne-bathers-les-grandes-baigneuses", "about 1894–1905", "approximate-range", "Women rest in a woodland glade beneath a blue sky. Their bodies and the landscape form a broad, mountain-like composition. This is the London canvas, not either Philadelphia version."],
  ["ng6609", "Bowl of Fruit and Tankard before a Window", "paul-gauguin", "Paul Gauguin", "paul-gauguin-bowl-of-fruit-and-tankard-before-a-window", "probably 1890", "approximate-year", "Fruit, pottery, a rumpled tablecloth and an angled knife occupy a flattened still life. A narrow, puzzling strip of buildings appears along the top."],
  ["ng3908", "Bathers at Asnières", "georges-seurat", "Georges Seurat", "georges-seurat-bathers-at-asnieres", "1884", "year", "Men and boys sit or stand beside the Seine in an industrial suburb. The figures appear still and isolated from one another in bright, hazy daylight."],
  ["ng6421", "Surprised!", "henri-rousseau", "Henri Rousseau", "henri-rousseau-surprised", "1891", "year", "A tiger with an arched back and bared teeth crouches amid dense foliage during a storm. The tropical setting is imaginary rather than a scene the painter visited."],
  ["ng6434", "Portrait of Hermine Gallia", "gustav-klimt", "Gustav Klimt", "gustav-klimt-portrait-of-hermine-gallia", "1904", "year", "A society woman seems to float in a translucent white chiffon dress. Geometric patterns in the lower dress and carpet accompany its sinuous outlines."],
  ["ng6450", "Portrait of Greta Moll", "henri-matisse", "Henri Matisse", "henri-matisse-portrait-of-greta-moll", "1908", "year", "A sculptor enrolled at the painter's Paris art school poses before blue-and-white patterned fabric. The portrait juxtaposes pure colours and was made over ten sittings."],
], "Post-Impressionism and early modern painting");

export const starryNight: PilotArtwork = {
  id: "moma-472-1941", title: "The Starry Night", creatorId: "vincent-van-gogh", creator: "Vincent van Gogh", introducedIn: "C",
  period: "Post-Impressionism", original: "MoMA object 472.1941; original oil canvas",
  source: "Museum of Modern Art", url: "https://www.moma.org/collection/works/79802",
  locator: "Title/artist/date Saint Rémy, June 1889; About the work, Observation and Imagination: cypress, village and swirling sky; object number 472.1941",
  date: "June 1889", dateId: "date:month:1889:06", precision: "month", event: "creation",
  clue: "A flame-like cypress rises in front of a village and hills beneath a swirling blue sky with glowing celestial lights. The original oil canvas belongs to MoMA in New York.",
};
export const scream: PilotArtwork = {
  id: "oslo-ng-m-00939", title: "The Scream (National Museum painting)", creatorId: "edvard-munch", creator: "Edvard Munch", introducedIn: "B",
  period: "Symbolism and early Expressionism", original: "National Museum Oslo NG.M.00939, 1893 painting, not either pastel or the later Munch Museum painting",
  source: "National Museum Norway", url: "https://www.nasjonalmuseet.no/en/collection/object/NG.M.00939",
  locator: "Work details: artist and creation date1893; catalogue text distinguishes two painted versions and two pastels; Ekeberg landscape and two background figures",
  date: "1893", dateId: "date:year:1893", precision: "year", event: "creation",
  clue: "A schematic, hairless face turns toward the viewer above the Oslo fjord beneath a red sky. Two companions walk away in the background. Identify the National Museum's painting, not the pastel versions.",
};
