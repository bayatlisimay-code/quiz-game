import type { Concept } from "../../src/quizEngine/conceptTypes";
import type { SemanticEvidence } from "../../src/quizEngine/assessmentTypes";
import type { PilotArtwork } from "../artPilot/types";
export const baroqueSculptures: readonly PilotArtwork[] = [
  { id: "borghese-apollo-daphne", title: "Apollo and Daphne", creatorId: "gian-lorenzo-bernini", creator: "Gian Lorenzo Bernini", introducedIn: "A", period: "Baroque", original: "Galleria Borghese original marble group",
    source: "Galleria Borghese", url: "https://galleriaborghese.beniculturali.it/il-museo/la-villa/sala-3-sala-di-%E2%80%8Bapollo-e-dafne/", locator: "Sala 3: sculpture attribution and execution 1622–1625; metamorphosis into laurel",
    date: "1622–1625", dateId: "date:year-interval:1622:1625", event: "creation", precision: "range", clue: "A running god reaches toward a fleeing nymph whose fingers and hair turn into laurel leaves. Her legs begin to become a tree trunk in this marble group in the Galleria Borghese." },
  { id: "louvre-mr1777", title: "Psyche Revived by Cupid's Kiss", creatorId: "antonio-canova", creator: "Antonio Canova", introducedIn: "A", period: "Neoclassicism", original: "Louvre MR1777, reclining marble version, not the standing Louvre-Lens group",
    source: "Louvre", url: "https://www.louvre.fr/en/explore/visitor-trails/the-louvre-s-masterpieces/bringing-marble-to-life", locator: "Bringing marble to life: artist and reclining group, contrasted with standing version",
    dateUrl: "https://mini-site.louvre.fr/trimestriel/2017/DRE/premiers_feux_au_musee/files/assets/common/downloads/publication.pdf", dateLocator: "Michelangelo Gallery guide p.15: Antonio Canova, 1793, marble, MR1777",
    date: "1793", dateId: "date:year:1793", event: "completion", precision: "year", clue: "A winged youth bends over a reclining young woman as her raised arms encircle his head. The lovers form an intertwined marble group in the Louvre, distinct from a standing version." },
  { id: "nga-voltaire-1963-10-240", title: "Voltaire (NGA marble bust)", creatorId: "jean-antoine-houdon", creator: "Jean-Antoine Houdon", introducedIn: "A", period: "Enlightenment portrait sculpture", original: "National Gallery of Art 1963.10.240, original marble bust",
    source: "National Gallery of Art", url: "https://www.nga.gov/artworks/46715-voltaire", locator: "Title, attribution, date 1778; visual description of elderly smiling man; Chester Dale collection version",
    date: "1778", dateId: "date:year:1778", event: "creation", precision: "year", clue: "A gaunt, elderly French writer smiles in a marble bust with a mostly bald head, hooded eyes and pronounced neck tendons. Identify the Chester Dale collection bust in the National Gallery of Art." },
  { id: "vam-handel-a3-1965", title: "George Frideric Handel (Vauxhall marble)", creatorId: "louis-francois-roubiliac", creator: "Louis-François Roubiliac", introducedIn: "A", period: "18th-century British sculpture", original: "V&A A.3&A-1965, finished marble statue, not Fitzwilliam terracotta model",
    source: "Fitzwilliam Museum", url: "https://fitzmuseum.cam.ac.uk/explore-our-collection/highlights/M3-1922", locator: "Opening history: finished marble at V&A erected April 1738; portrait in informal dress, lyre and slipped slipper",
    date: "1738", dateId: "date:year:1738", event: "completion", precision: "year", clue: "A composer in a nightcap and loose gown listens while plucking a lyre, with one slipper falling from his foot. Identify the finished marble portrait made for Vauxhall Gardens, now in the V&A." },
  { id: "borghese-david-lxxvii", title: "David (Borghese marble)", creatorId: "gian-lorenzo-bernini", creator: "Gian Lorenzo Bernini", introducedIn: "B", period: "Baroque", original: "Galleria Borghese LXXVII, original marble",
    source: "Galleria Borghese", url: "https://galleriaborghese.cultura.gov.it/en/archivio-schede/david/", locator: "Artist, date 1623–1624; hero caught before launching the stone, armour and lyre on ground",
    date: "1623–1624", dateId: "date:year-interval:1623:1624", event: "creation", precision: "range", clue: "A young biblical hero twists his torso as he prepares to sling a stone at a giant. Discarded armour and a lyre lie beneath him in this original marble in the Galleria Borghese." },
  { id: "borghese-proserpine-cclxviii", title: "The Rape of Proserpine", creatorId: "gian-lorenzo-bernini", creator: "Gian Lorenzo Bernini", introducedIn: "B", period: "Baroque", original: "Galleria Borghese CCLXVIII, original marble group",
    source: "Galleria Borghese", url: "https://www.collezionegalleriaborghese.it/en/opere/rape-of-proserpine", locator: "Object details: date 1621–1622; catalogue entry by Sonja Felici January 2024: abduction and fingers pressing into marble flesh",
    date: "1621–1622", dateId: "date:year-interval:1621:1622", event: "creation", precision: "range", clue: "The god of the underworld carries a struggling young woman, his fingers appearing to press into her flesh. The twisting marble group belongs to the Galleria Borghese.", notes: "Historical title retained; the depicted myth concerns abduction. No disputed start month is assessed." },
  { id: "thorvaldsen-a822", title: "Jason with the Golden Fleece (Hope marble)", creatorId: "bertel-thorvaldsen", creator: "Bertel Thorvaldsen", introducedIn: "B", period: "Neoclassicism", original: "Thorvaldsens Museum A822, Thomas Hope's marble, not the 1803 plaster A52",
    source: "Thorvaldsens Museum", url: "https://kataloget.thorvaldsensmuseum.dk/en/A822", locator: "Artist, A822 and explanation of marble version; Production Date no earlier than March 19 1803–1828",
    dateUrl: "https://arkivet.thorvaldsensmuseum.dk/kronologi/1828", dateLocator: "Værkproduktion: Fuldført 1828, Jason med det gyldne skind A822; August 1828 dispatch",
    date: "1828", dateId: "date:year:1828", event: "completion", precision: "year", dateContext: "Completion of Thomas Hope's marble A822, not modelling or commissioning in 1803",
    clue: "A classical Greek hero stands with the prize animal skin from his quest. Identify Thomas Hope's marble version in Copenhagen, delivered twenty-five years after it was commissioned." },
  { id: "vam-graces-a4-1994", title: "The Three Graces (Bedford version)", creatorId: "antonio-canova", creator: "Antonio Canova", introducedIn: "C", period: "Neoclassicism", original: "V&A/National Galleries of Scotland jointly owned Bedford marble, A.4-1994",
    source: "Victoria and Albert Museum", url: "https://www.vam.ac.uk/articles/the-three-graces", locator: "Opening and second-version paragraph: carved 1814–1817 for Bedford, white marble and round pillar; distinct from Hermitage version",
    date: "1814–1817", dateId: "date:year-interval:1814:1817", event: "creation", precision: "range", clue: "Three mythological sisters embrace in a close white-marble group beside a round pillar. Identify the Duke of Bedford's version, jointly owned by the V&A and National Galleries of Scotland." },
  { id: "borghese-paolina-liv", title: "Paolina Borghese as Venus Victorious", creatorId: "antonio-canova", creator: "Antonio Canova", introducedIn: "C", period: "Neoclassicism", original: "Galleria Borghese LIV, original Carrara marble portrait",
    source: "Galleria Borghese", url: "https://galleriaborghese.cultura.gov.it/en/archivio-schede/paolina-borghese-as-venus-victorious/", locator: "Year 1804–1808; artist; reclining figure on cushions, apple and rotating base",
    date: "1804–1808", dateId: "date:year-interval:1804:1808", event: "creation", precision: "range", clue: "Napoleon's sister reclines on cushions, holding the apple awarded in a mythological beauty contest. A mechanism inside the couch allows the marble portrait to rotate in the Galleria Borghese.", notes: "Uses current entry's 1804–1808, rather than older visitor guide's 1805–1808." },
];

// The existing lesson assesses meaningful chronology rather than neighbouring
// creation-year ranges. All eleven source ranges lie wholly within one decade.
// Original records/evidence remain in authoring history; new assertions state
// only containment in that decade, never an invented exact creation year.
const decadeSourceBounds: Readonly<Record<string, readonly [number, number]>> = {
  "borghese-apollo-daphne": [1622,1625], "louvre-mr1777": [1793,1793],
  "nga-voltaire-1963-10-240": [1778,1778], "vam-handel-a3-1965": [1738,1738],
  "borghese-david-lxxvii": [1623,1624], "borghese-proserpine-cclxviii": [1621,1622],
  "thorvaldsen-a822": [1828,1828], "vam-graces-a4-1994": [1814,1817],
  "borghese-paolina-liv": [1804,1808], "met-62-55": [1787,1787], "getty-103rqz": [1610,1615],
};
export function authorBaroqueDecades(concepts: readonly Concept[], sourceEvidence: readonly SemanticEvidence[]) {
  const evidence: SemanticEvidence[] = [];
  const revised = concepts.map(c => {
    if (c.subtopicId !== "sculpture" || c.levelId !== "l4" || c.partId !== "p4") return c;
    const bounds = decadeSourceBounds[c.id.replace("art_sculpture_l4_p4_", "")];
    if (!bounds) throw new Error(`Unreviewed decade conversion: ${c.id}`);
    const [start,end] = bounds, decade = Math.floor(start / 10) * 10;
    if (end > decade + 9) throw new Error(`Source range spans decades: ${c.id}`);
    const original = sourceEvidence.find(e => c.assessment!.evidenceIds.includes(e.id))!;
    const qualifiers = { event: c.assessment!.event!, datePrecision: "decade" };
    const valueId = `date:decade:${decade}`, id = `decade-containment:${c.id}`;
    const review = { sourceUrl: original.sourceUrl,
      locator: `${original.locator} Source dating ${c.object} lies entirely within ${decade}–${decade+9}; assess the decade, retaining the source dating internally.`,
      reviewStatus: "verified" as const, reviewedAt: "2026-10-22", reviewedBy: "Codex — source-date containment review (not independent human certification)",
      predicateId: c.relation, subjectId: c.semantic!.subject!.id!, qualifiers };
    evidence.push({ ...review, id, kind: "assertion", valueId, verdict: "valid" },
      { ...review, id: `${id}:bounds`, kind: "date-bound", start, end, calendar: "gregorian-proleptic" });
    return { ...c, object: `${decade}s`, semantic: { ...c.semantic!, qualifiers,
      value: { id: valueId, entityType: "period" as const, caseSensitive: false,
        temporal: { start: decade, end: decade+9, calendar: "gregorian-proleptic" as const } } },
      assessment: { ...c.assessment!, valueType: "period" as const, evidenceIds: [id], presentation: undefined,
        response: undefined, dateInterpretation: undefined,
        scope: { text: "Creation of this version.", qualifierKeys: Object.keys(qualifiers), visibility: "internal" as const } } };
  });
  return { concepts: revised, evidence };
}
