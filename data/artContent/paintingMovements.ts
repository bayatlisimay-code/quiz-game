import type { Concept } from "../../src/quizEngine/conceptTypes";
import type { SemanticEvidence } from "../../src/quizEngine/assessmentTypes";
import { authorDefinitions, type MeaningContrast } from "./definitions";
import { contentReview } from "./review";
const ng = "https://www.nationalgallery.org.uk/paintings/glossary/early-renaissance";
const imp = "https://www.moma.org/momaorg/shared/flattened_pages/moma_learning/glossary/";
const cub = "https://www.moma.org/collection/terms/cubism/what-is-cubism";
const pop = "https://www.moma.org/momaorg/shared/flattened_pages/moma_learning/themes/pop-art/";
const movements = [
  { id: "early-renaissance", term: "Early Renaissance", definition: "A fifteenth-century revival of classical ideals with more convincing figures and pictorial space.", url: ng, locator: "Early Renaissance: approximately15th century, realistic style introduced by Masaccio and Donatello", work: "The Virgin and Child (Masaccio's Pisa panel)", workId: "ng3046", workUrl: "https://www.nationalgallery.org.uk/paintings/masaccio-the-virgin-and-child", workLocator: "NG3046,1426, Masaccio's Pisa polyptych; artist page and Early Renaissance glossary document stylistic innovation", pioneer: "Masaccio", pioneerId: "masaccio", pioneerUrl: "https://www.nationalgallery.org.uk/artists/masaccio", pioneerLocator: "Most revolutionary Early Renaissance painter, one of Florentine school's founders;1401–1428/9?" },
  { id: "baroque", term: "Baroque", definition: "An artistic style associated with dramatic, exuberant effects, diagonal compositions and pictorial illusion.", url: "https://www.nationalgallery.org.uk/paintings/glossary/baroque", locator: "Painting/sculpture sense: usually17th-century dramatic/exuberant works, diagonal compositions and illusionistic effects", work: "Farnese Gallery ceiling (Carracci cycle)", workId: "carracci-farnese-ceiling", workUrl: "https://www.metmuseum.org/it/essays/annibale-carracci-1560-1609", workLocator: "Galleria Farnese ceiling, unveiled1600; synthesis of northern naturalism and Roman idealism described as basis of Baroque art", pioneer: "Annibale Carracci", pioneerId: "annibale-carracci", pioneerUrl: "https://www.metmuseum.org/it/essays/annibale-carracci-1560-1609", pioneerLocator: "Keith Christiansen: Annibale created basis of Baroque art;1560–1609; original Roman development around1600, not every later revival" },
  { id: "impressionism", term: "Impressionism", definition: "A French movement exploring observed light and everyday life with bright colours and sketch-like brushwork.", url: imp, locator: "Impressionism entry: experimentation early1860s, first independent exhibition1874, Monet's Impression Sunrise", work: "Impression, Sunrise", workId: "marmottan-impression", workUrl: "https://www.marmottan.fr/notice/4014/", workLocator: "Monet1872 original; MoMA glossary: exhibited1874 and gave group its name; do not adopt another glossary's conflicting1873 label", pioneer: "Claude Monet", pioneerId: "claude-monet", pioneerUrl: "https://www.moma.org/collection/works/80298", pioneerLocator: "Gallery label: brightly coloured sketchy landscapes galvanized Impressionists in1870s; artist chronology1840–1926" },
  { id: "cubism", term: "Cubism", definition: "A movement developed by Picasso and Braque that fragments subjects into geometric planes and multiple viewpoints.", url: cub, locator: "What Is Cubism: collaboration after1907 meeting, new visual language; Cubism learning page geometric planes and compressed space", work: "Les Demoiselles d'Avignon", workId: "moma-demoiselles", workUrl: "https://www.moma.org/collection/works/79766", workLocator: "1907; dealer Kahnweiler describes beginning of Cubism. Assess foundational example, not a claim that all scholars call it fully developed Cubism", pioneer: "Pablo Picasso", pioneerId: "pablo-picasso", pioneerUrl: cub, pioneerLocator: "Picasso and Braque worked together to develop Cubism after meeting1907; Demoiselles page identifies Picasso as25in1907" },
  { id: "pop-art", term: "Pop art", definition: "An art movement drawing on consumer goods, advertising, mass media and popular culture.", url: pop, locator: "Opening: consumer goods/mass media/popular culture; emergence late1950s and early1960s", work: "Campbell's Soup Cans", workId: "moma-476-1996", workUrl: "https://www.moma.org/collection/works/79809", workLocator: "1962,32-panel original; Pop art topic lists work; first Los Angeles exhibition1962 described https://www.moma.org/slideshows/36", pioneer: "Andy Warhol", pioneerId: "andy-warhol", pioneerUrl: "https://www.moma.org/artists/6246-andy-warhol", pioneerLocator: "Biography: two1962 exhibitions announced entry; source links popular culture/fine art; American artist1928–1987 in https://www.moma.org/slideshows/36" },
] as const;
const contrasts: readonly MeaningContrast[] = [
  ["early-renaissance", "baroque", "Fifteenth-century classical revival and convincing space versus dramatic seventeenth-century diagonal and illusionistic effects"],
  ["baroque", "impressionism", "Dramatic diagonal compositions and pictorial illusion versus nineteenth-century observed light and sketch-like brushwork"],
  ["baroque", "cubism", "Dramatic pictorial illusion versus fragmentation into geometric planes and multiple viewpoints"],
  ["baroque", "pop-art", "Dramatic seventeenth-century pictorial effects versus modern consumer and mass-media imagery"],
  ["early-renaissance", "impressionism", "Revival of classical ideals and fifteenth-century pictorial space versus nineteenth-century observed light and sketchy brushwork"],
  ["early-renaissance", "cubism", "Fifteenth-century classical revival versus twentieth-century geometric fragmentation and multiple viewpoints"],
  ["early-renaissance", "pop-art", "Classical revival versus modern consumer and mass-media imagery"],
  ["impressionism", "cubism", "Observed light and sketchy brushwork versus geometric fragmentation and combined viewpoints"],
  ["impressionism", "pop-art", "Observed light and everyday scenes versus consumer and mass-media imagery as defining programme"],
  ["cubism", "pop-art", "Geometric fragmentation and combined viewpoints versus popular consumer imagery"],
];
const definitions = authorDefinitions("painting", "l1", "p1", "definition_of_painting_movement", "historical-movement-definition", movements, contrasts);
const concepts: Concept[] = [], evidence: SemanticEvidence[] = [];
for (const partId of ["p2", "p4"] as const) {
  const relation = partId === "p2" ? "example_of_painting_movement" : "pioneer_of_painting_movement";
  const qualifiers = { assessmentScope: "original-formative-historical-context" };
  const value = (m: typeof movements[number]) => partId === "p2" ? `artwork:${m.workId}` : `person:${m.pioneerId}`;
  const assertion = (m: typeof movements[number], other: typeof movements[number], verdict: "valid" | "invalid", reason: string): SemanticEvidence => ({
    ...contentReview, id: `movement-check:${partId}:${m.id}:${other.id}`, kind: "assertion", predicateId: relation, qualifiers,
    subjectId: `movement:${m.id}`, valueId: value(other), verdict, sourceUrl: partId === "p2" ? m.workUrl : m.pioneerUrl,
    locator: `${partId === "p2" ? m.workLocator : m.pioneerLocator}. Movement history: ${m.url} (${m.locator}). Compared value: ${partId === "p2" ? other.workUrl : other.pioneerUrl} (${partId === "p2" ? other.workLocator : other.pioneerLocator}). ${reason}.`,
  });
  for (const m of movements) {
    const evidenceId = `movement-check:${partId}:${m.id}:${m.id}`;
    evidence.push(assertion(m, m, "valid", "Named original example or initiating figure; not claimed to be the only example or pioneer"));
    concepts.push({ id: `art_painting_l1_${partId}_${m.id}`, topicId: "art", subtopicId: "painting", levelId: "l1", partId, relation, subject: m.term,
      object: partId === "p2" ? m.work : m.pioneer, difficulty: 2, answerKind: "short", introducedIn: "A", tags: ["verified-art-content", "historical-movements"],
      semantic: { subject: { id: `movement:${m.id}`, entityType: "category", caseSensitive: false }, value: { id: value(m), entityType: partId === "p2" ? "work" : "person", caseSensitive: false }, qualifiers },
      assessment: { reviewStatus: "verified", answerLeakageReviewed: true, evidenceIds: [evidenceId], subjectType: "category", valueType: partId === "p2" ? "work" : "person",
        scope: { text: "The movement's original historical development; not later revivals, influences or appropriations. For Cubism, include foundational experiments.", qualifierKeys: ["assessmentScope"] } },
    });
  }
  if (partId === "p2") {
    // Reviewed chronological contrasts between these four ORIGINAL works and
    // the museum-documented formative contexts. No arbitrary date cutoff rule.
    for (const [leftId, rightId] of contrasts) {
      const left = movements.find(m => m.id === leftId)!, right = movements.find(m => m.id === rightId)!;
      evidence.push(assertion(left, right, "invalid", "The original work belongs to a substantially later documented formative context, not this movement's original historical development"),
        assertion(right, left, "invalid", "The original work predates this later movement's documented emergence; later influence or appropriation is a different claim"));
    }
  } else {
    const exclusions: readonly (readonly [string, string, string])[] = [
      ["baroque", "early-renaissance", "Masaccio died1428/9, before Baroque's original Roman development around1600"],
      ["baroque", "impressionism", "Monet was born1840, after the original seventeenth-century Baroque development"],
      ["baroque", "cubism", "Picasso was25in1907, after the original seventeenth-century Baroque development"],
      ["baroque", "pop-art", "Warhol was born1928, after the original seventeenth-century Baroque development"],
      ["early-renaissance", "baroque", "Carracci was born1560, after the source-defined fifteenth-century Early Renaissance phase"],
      ["impressionism", "baroque", "Carracci died1609, long before Impressionism's1860s/1870s emergence"],
      ["cubism", "baroque", "Carracci died1609, long before the documented1907 Cubist collaboration"],
      ["pop-art", "baroque", "Carracci died1609, long before Pop art's1950s/1960s emergence"],
      ["early-renaissance", "impressionism", "Monet was born1840, centuries after the fifteenth-century formative phase"],
      ["early-renaissance", "cubism", "Picasso was25in1907, centuries after the fifteenth-century formative phase"],
      ["early-renaissance", "pop-art", "Warhol was born1928, centuries after the fifteenth-century formative phase"],
      ["impressionism", "early-renaissance", "Masaccio died1428/9, long before the nineteenth-century movement's emergence"],
      ["impressionism", "pop-art", "Warhol was born1928, after Impressionism's original1860s/1870s development"],
      ["impressionism", "cubism", "Picasso was25in1907 and was not born during Impressionism's documented1860s/1870s initial development"],
      ["cubism", "early-renaissance", "Masaccio died centuries before the documented1907 Cubist collaboration"],
      ["cubism", "pop-art", "Warhol was born1928, after the documented1907–1914 Cubist collaboration"],
      ["pop-art", "early-renaissance", "Masaccio died centuries before the1950s/1960s emergence"],
      ["pop-art", "impressionism", "Monet died1926, before the1950s/1960s emergence"],
    ];
    for (const [subject, object, reason] of exclusions) evidence.push(assertion(movements.find(m => m.id === subject)!, movements.find(m => m.id === object)!, "invalid", reason));
    // Monet/Cubism and Picasso/Pop remain unknown: no negative is inferred
    // merely from their presence under another movement.
  }
}
export const paintingMovementSet = { concepts: [...definitions.concepts, ...concepts], evidence: [...definitions.evidence, ...evidence] };
