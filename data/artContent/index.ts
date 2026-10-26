import { paintingMovementSet } from "./paintingMovements";
import { paintingTerminologySets } from "./paintingTerminology";
import { sculptureTerminologySets } from "./sculptureTerminology";
import { authorWorks, authorAncientWorks } from "./authoring";
import { baroquePaintings, romanticPaintings, impressionistPaintings, modernPaintings, starryNight, scream } from "./paintingPeriods";
import { contemporaryPaintings } from "./contemporaryPainting";

import { baroqueSculptures } from "./baroqueSculpture";
import { nineteenthSculptures } from "./nineteenthSculpture";
import { contemporarySculptures } from "./contemporarySculpture";
import { modernSculptures } from "./modernSculpture";
import { classicalSculptures } from "./classicalSculpture";
import { earlySculptures, retiredEarlySculptures } from "./ancientSculpture";
// Culture-only beginner replacements preserve the existing, staged recognition
// bindings and original dating facts. The older culture records remain sourced
// below but are no longer taught; no image binding or infrastructure changes.
const earlySculptureSet = authorAncientWorks(earlySculptures, "l1");
const preservedEarlySet = authorAncientWorks(retiredEarlySculptures, "l1");
const oldWorkForNew: Readonly<Record<string,string>> = {
  "great-sphinx": "met-1989-281-41", "hongshan-jade-dragon": "met-ushumgal-stele",
};
const accessibleEarlySet = {
  concepts: earlySculptureSet.concepts.map(c => {
    if (c.partId === "p2") return c;
    const work = c.id.replace(`art_sculpture_l1_${c.partId}_`, "");
    const previous = oldWorkForNew[work];
    return previous ? preservedEarlySet.concepts.find(old => old.id === `art_sculpture_l1_${c.partId}_${previous}`)! : c;
  }),
  evidence: [...earlySculptureSet.evidence.map(e => Object.keys(oldWorkForNew).some(id => e.id.endsWith(`_${id}`))
    ? { ...e, reviewedAt: "2026-10-22" } : e), ...preservedEarlySet.evidence],
};
const paintingSets = [
  paintingMovementSet,
  ...paintingTerminologySets,
  ...sculptureTerminologySets,
  authorWorks(baroquePaintings, "painting", "l3"),
  authorWorks(romanticPaintings, "painting", "l4"),
  authorWorks(impressionistPaintings, "painting", "l6"),
  authorWorks([...modernPaintings.slice(0, 6), scream, ...modernPaintings.slice(6).map(w => ({ ...w, introducedIn: "C" as const })), starryNight], "painting", "l7"),
  authorWorks(contemporaryPaintings, "painting", "l8"),
  authorWorks(baroqueSculptures, "sculpture", "l4"),
  authorWorks(nineteenthSculptures, "sculpture", "l6"),
  accessibleEarlySet,
  authorAncientWorks(classicalSculptures, "l2"),
  authorWorks(modernSculptures, "sculpture", "l7"),
  authorWorks(contemporarySculptures, "sculpture", "l8"),
];
export const expandedArtConcepts = paintingSets.flatMap(set => set.concepts);
export const expandedArtEvidence = paintingSets.flatMap(set => set.evidence);
