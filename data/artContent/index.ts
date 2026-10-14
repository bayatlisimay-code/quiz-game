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
import { earlySculptures } from "./ancientSculpture";
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
  authorAncientWorks(earlySculptures, "l1"),
  authorAncientWorks(classicalSculptures, "l2"),
  authorWorks(modernSculptures, "sculpture", "l7"),
  authorWorks(contemporarySculptures, "sculpture", "l8"),
];
export const expandedArtConcepts = paintingSets.flatMap(set => set.concepts);
export const expandedArtEvidence = paintingSets.flatMap(set => set.evidence);
