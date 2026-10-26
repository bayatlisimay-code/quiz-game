import { authorBaroqueDecades } from "./artContent/baroqueSculpture";
import { accessibilityWording } from './artContent/learnerWording';
import { applyApprovedGenrePrimaries } from './artContent/approvedGenrePrimaries';
import { designIdentitySet } from './artContent/designIdentity';
import { designMovementSets } from './artContent/designMovements';
import { designPeopleSets } from './artContent/designPeople';
import { designVisualSet } from './artContent/designVisual';
import { designFieldSets } from './artContent/designFields';
import { designTypefaceSets } from './artContent/designTypefaces';
import { artCurriculum, teachingRelation } from "./artCurriculum";
import type { Concept } from "../src/quizEngine/conceptTypes";
import type { SemanticEvidence } from "../src/quizEngine/assessmentTypes";
import { authorArtworkPilot } from "./artPilot/authoring";
import { sculpturePilotWorks } from "./artPilot/sculpture";
import { paintingPilotWorks } from "./artPilot/painting";
import { terminologyPilotConcepts, terminologyPilotEvidence } from "./artPilot/terminology";
import { expandedArtConcepts, expandedArtEvidence } from "./artContent";
import { progressionMovementSet } from "./artContent/progressionMovements";
import { progressionPaintingTermSets } from "./artContent/progressionPaintingTerms";
import { progressionSculptureTermSets } from "./artContent/progressionSculptureTerms";
import { progressionWorkConcepts, progressionWorkEvidence } from "./artContent/progressionWorks";
import { architectureStyleSets } from "./artContent/architectureStyles";
import { designFamousSet } from "./artContent/designFamous";
import { architectureDesignTermSet } from "./artContent/architectureDesignTerms";
import { architectureFormSet } from "./artContent/architectureForms";
import { architectureConstructionSet } from "./artContent/architectureConstruction";
import { architectureStructureSet } from "./artContent/architectureStructure";
import { designTypographySet } from "./artContent/designTypography";
import { architectureElementSet } from "./artContent/architectureElements";
import { architectureMaterialSet } from "./artContent/architectureMaterials";
import { designPrincipleSets } from "./artContent/designPrinciples";
import { designProductSet } from "./artContent/designProducts";
import { architectureWorldSets } from "./artContent/architectureWorld";
import { architectureEarlyModernSet, architectureNineteenthSet } from "./artContent/architectureHistorical";
import { architectureModernSet } from "./artContent/architectureModern";
import { architectureContemporarySet } from "./artContent/architectureContemporary";
import { scheduleArtLearning } from "./artContent/learningPriorities";
import { theatreTerminologySets } from './artContent/theatreTerminology';
import { literatureClassicsSet } from './artContent/literatureClassics';
import { literatureAncientSet } from './artContent/literatureAncient';
import { literatureCharacterSet } from './artContent/literatureCharacters';
import { theatreCharacterSet } from './artContent/theatreCharacters';
import { literaryGenreSets } from './artContent/literaryGenres';
import { literatureShortFictionSet } from './artContent/literatureShortFiction';
import { theatrePlaySets } from './artContent/theatrePlays';
import { genreCompletionFacts } from './artContent/genreReserves';
import { theatreGenreSets } from './artContent/theatreGenres';
import { theatrePlaywrightSets } from './artContent/theatrePlaywrights';
import { literatureClassicNovelistsSet } from './artContent/literatureClassicNovelists';
import { literatureModernNovelistsSet } from './artContent/literatureModernNovelists';
import { literatureModernNovelsSet } from './artContent/literatureModernNovels';
import { literaturePoetrySet } from './artContent/literaturePoetry';
import { theatreVenueSet } from './artContent/theatreVenues';

// Production authoring boundary. Source-checked teaching facts, including preserved pilot originals;
// synthetic engine fixtures never enter this list. No image approvals implied.
// Original authored content remains intact in conceptSets.ts as reusable source material.
const architectureDesignSets = [designIdentitySet,...designMovementSets,...designPeopleSets,designVisualSet,...designFieldSets,...designTypefaceSets,...architectureStyleSets,designFamousSet,architectureDesignTermSet,architectureFormSet,architectureConstructionSet,architectureStructureSet, designTypographySet,architectureElementSet,architectureMaterialSet,...designPrincipleSets, designProductSet,...architectureWorldSets, architectureEarlyModernSet, architectureNineteenthSet, architectureModernSet, architectureContemporarySet];
const termSets = [progressionMovementSet, ...progressionPaintingTermSets, ...progressionSculptureTermSets];
const literatureTheatreSets = [literatureClassicsSet,literatureAncientSet,literatureCharacterSet,theatreCharacterSet,...literaryGenreSets,literatureShortFictionSet,...theatrePlaySets,...theatreGenreSets,...theatrePlaywrightSets,literatureClassicNovelistsSet,literatureModernNovelistsSet,literatureModernNovelsSet,literaturePoetrySet,theatreVenueSet, ...theatreTerminologySets].map(applyApprovedGenrePrimaries);
// Genre-only selections. Preserve the displaced, approved records for review
// and reuse; their writer/date lessons and all source/manual evidence stay active.
export const retainedGenreSelections: readonly Concept[] = literatureTheatreSets.flatMap(set => set.concepts)
  .filter(c => ['art_literature_l1_p2_dracula','art_theatre_l1_p2_cyrano'].includes(c.id))
  .map(c => ({...accessibilityWording(c), introducedIn: 'A' as const}));
const selectedLiteratureTheatreContent = literatureTheatreSets.flatMap(set => set.concepts).map(c => {
  if (c.id === 'art_literature_l1_p2_dracula') return genreCompletionFacts.concepts[0];
  if (c.id === 'art_theatre_l1_p2_cyrano') return genreCompletionFacts.concepts[1];
  const priority = c.id === 'art_literature_l1_p2_wuthering-heights' || c.id === 'art_theatre_l5_p2_rosencrantz-guildenstern' ? 5
    : c.id === 'art_theatre_l5_p2_bald-soprano' ? 4 : undefined;
  return priority === undefined ? c : {...c, learning: {...c.learning!, reinforcementPriority: priority}};
});
const sculpture = authorArtworkPilot(sculpturePilotWorks, "sculpture", "l3");
const painting = authorArtworkPilot(paintingPilotWorks, "painting", "l2");
const authoredArtContent: readonly Concept[] = scheduleArtLearning([...sculpture.concepts, ...painting.concepts, ...terminologyPilotConcepts, ...expandedArtConcepts, ...progressionWorkConcepts, ...termSets.flatMap(set => set.concepts), ...architectureDesignSets.flatMap(set => set.concepts), ...selectedLiteratureTheatreContent].map(accessibilityWording));
const authoredArtEvidence: readonly SemanticEvidence[] = Object.freeze([...sculpture.evidence, ...painting.evidence, ...terminologyPilotEvidence, ...expandedArtEvidence, ...progressionWorkEvidence, ...termSets.flatMap(set => set.evidence), ...architectureDesignSets.flatMap(set => set.evidence), ...literatureTheatreSets.flatMap(set => set.evidence), ...genreCompletionFacts.evidence]);

const baroqueDecades = authorBaroqueDecades(authoredArtContent, authoredArtEvidence);
export const approvedArtContent: readonly Concept[] = Object.freeze(baroqueDecades.concepts);
export const approvedArtEvidence: readonly SemanticEvidence[] = Object.freeze([...authoredArtEvidence, ...baroqueDecades.evidence]);

export function createActiveArtSets(records: readonly Concept[]) {
  const sets: Record<string, { id: string; concepts: Concept[] }> = {};
  for (const [subtopic, levels] of Object.entries(artCurriculum)) for (const level of Object.keys(levels)) for (let part = 1; part <= 5; part++) {
    const id = `art_${subtopic}_${level}_p${part}`;
    sets[id] = { id, concepts: [] };
  }
  const ids = new Set<string>();
  for (const record of records) {
    const key = `${record.topicId}_${record.subtopicId}_${record.levelId}_${record.partId}`;
    if (ids.has(record.id)) throw new Error(`Duplicate active concept ID: ${record.id}`);
    ids.add(record.id);
    if (record.topicId !== "art" || teachingRelation(record.subtopicId, record.levelId, record.partId) !== record.relation || !sets[key]) {
      throw new Error(`Active record disagrees with approved curriculum: ${record.id}`);
    }
    sets[key].concepts.push(record);
  }
  return sets;
}
export const activeArtConceptSets = createActiveArtSets(approvedArtContent);
