> Historical snapshot: the final Design l6/p2 correction is documented in
> [art-typeface-resolution.md](art-typeface-resolution.md). The shortage counts
> below describe the preceding implementation, not the latest qualification.

# Architecture / Design shortage corrections — 18 October 2026

## Result and preservation

54 of the original 57 unavailable part/variant combinations are resolved.
Architecture is 150/150 raw-ready; Design is 147/150. The remaining three are
Design l6 p2 A/B/C. This is not a claim of complete Design release readiness.

No teaching records were added, removed or replaced. All 594 Architecture/Design
records retain their concept IDs, raw subjects/answers, canonical subject/value
and fact identities, numerical priorities and introduction stages. A regression
hash compares these fields with the pre-correction snapshot. Painting/Sculpture's
598 records and original 2,052 evidence entries are independently hash-protected.
The approved curricula and Design Coming soon flag remain unchanged.

## Corrections by relation

| Placement | Relation | Correction |
| --- | --- | --- |
| Architecture l2/l3 p2 | civilization_or_culture_of_architectural_work | Reviewed comparisons concern the named original building tradition, excluding later alterations and general influence. Related/successor traditions are left unknown. Identical Egyptian answers remain accepted. Córdoba gains a precise Met Islamic Art locator for its Umayyad phase rather than claiming UNESCO has an exact Umayyad label. |
| Design l2 p2 | example_of_design_field | Add the visible creator-credit constraint to a documented example. A candidate is contradicted by its own original project credit, not because it is absent from the field. Typeface/graphic overlap remains legitimate. |
| Design l2 p4 | notable_designer_of_field | Assess a specific documented project contribution in that field; preserve named collaborators and separate design, manufacture and commissioning. |
| Design l3 p2 | example_of_design_movement | Qualify examples by their sourced original design credit. The Wagenfeld/Jucker lamp and Bedin's Super lamp retain their actual creators. Movement membership is not made exclusive. |
| Design l3 p4 | pioneer_of_design_movement | Ask about an influential contributor's specific credited work or founding event. Gropius is the school founder, not the lamp designer. Sottsass's Postmodern contribution is Carlton, never Bedin's lamp. Other pioneers remain valid outside the qualified question. |
| Design l4 p1 | design_field_of_designer | Assess a specific activity on a named project, not a designer's entire career. Explicit activity comparisons are separate from definition contrasts. Broad product design, graphic/textile overlap and other legitimate shared disciplines stay unknown. UNESCO verifies the physical paving/planting aspect of Copacabana, distinct from its graphic patterns. |
| Design l4 p2 | known_for_design | Wrong works are contradicted by their original named design credits, not by an assumed exhaustive list of everything the designer is known for. |
| Design l4 p4 | design_period_of_designer | Add temporal values and sourced bounds for the specified project only. Preserve overlapping intervals and approximate dating; never fabricate full career start/end dates. |
| Design l6 p2 | classification_of_typeface | Add only specific Microsoft-supported pitch, serif-structure and character-design contradictions. Do not make spacing, letterform class and display use mutually exclusive. Ordinary capabilities improve; the mandatory matching group is still unsupported. |

Nine teaching placements and their dependent reviews now support the contract.
All reviews continue to reuse their teaching facts; no review records were authored.

## Evidence examples and exclusions

- UNESCO World Heritage entries supply the original cultural contexts. Greek /
  Roman / Byzantine continuity, Byzantine / Armenian blending, related Buddhist
  traditions and Andalusian succession are not treated as universally disjoint.
- The Met, *The Art of the Umayyad Period in Spain (711–1031)*, paragraphs on
  Abd al-Rahman I and al-Hakam II, support the Córdoba mosque phase:
  https://www.metmuseum.org/essays/the-art-of-the-umayyad-period-in-spain-711-1031
- MoMA's Table lamp record separately credits Wagenfeld/Jucker and names Gropius
  as school founder; those roles must not be swapped:
  https://www.moma.org/collection/works/4056
- V&A credits Martine Bedin with the Super lamp prototype, distinguishing Fausto
  Celati's manufacture. The Met credits Sottsass with Carlton:
  https://www.vam.ac.uk/articles/what-is-postmodernism
  https://www.metmuseum.org/art/collection/search/486989
- UNESCO's Rio entry, **Authenticity**, documents Burle Marx's Copacabana landscape
  redesign and its paving and planting. This supports the physical-space activity
  scope, not a denial of his work across graphic art, textiles or other fields:
  https://whc.unesco.org/en/list/1100/
- The Doug Engelbart Institute identifies Engelbart and the SRI research team as
  the collective NLS development credit, not an exhaustive roster of individual
  contributors. The question retains “team” and “developing”; person candidates
  are not contradicted by their absence from that collective credit. NLS is also
  excluded from individual-credit negative projections:
  https://www.dougengelbart.org/mousesite/1968Demo.html
- The c.1926 Chanel dress retains its approximate 1920s teaching period. Its
  exclusion bounds come only from the source's House of Chanel founding (1910)
  and designer's death (1971), not an invented exact1920–1929 interval. Plausible
  overlapping activity periods remain unknown:
  https://www.metmuseum.org/art/collection/search/83569
- Microsoft explicitly states Fixed pitch=False for proportional families and
  True for Consolas, and describes the actual serif/text/icon designs. Arial's
  documented display uses do not justify calling every display answer false:
  https://learn.microsoft.com/en-us/typography/font-list/arial
  https://learn.microsoft.com/en-us/typography/font-list/consolas
  https://learn.microsoft.com/en-us/typography/font-list/wingdings

Review metadata records Codex institutional-source comparison, not independent
human editorial approval. Failed/inaccessible supplementary pages were not
represented as verified sources. No image search or asset ingestion was performed.

## Shared implementation

`AssessmentContract.focus` declares a credited example, project contribution,
project-specific field or source-documented project period. Shared templates render these
without relation-ID switches. The strategy rejects focus/family/identity/credited-role mismatch.
It does not supply negatives by itself: the exact qualified evidence is required.

An explicit, sourced assertion can certify a contradiction involving an
independently validated value of another entity type (for example, a typeface
among design works). Type differences alone still return unknown; stored accepted
alternatives and conflicting evidence cannot become certified negatives.

`qualifiedContrasts.ts` creates traceable comparisons. Project credit comparisons
require explicit completeness declarations and source reasons for the named role;
these are not global closed-world lists of examples or practitioners.

Focused matching labels retain essential visible activity/source scopes. Without
those scopes, a valid graphic interpretation of a pavement or a source-specific
credit could be graded under the wrong wording. Recognition rendering, lock safety,
question quotas, scoring, progress and image delivery are otherwise unchanged.

An actual generated question review caught and removed an unsafe approach:
transferring different field definitions directly into incompatible project
memberships. In particular, Product design cannot be declared false for Morris's
furnishing-fabric work just because Textile design is the stored answer. The
regression suite checks that this alternative never enters its wrong-option pool.

## Remaining typeface shortage

All eleven classification records remain intact. Within the actual Quiz A stage
pool, Consolas has no certified negative: the symbol-font alternative is introduced
in B and cannot be borrowed prematurely. Thus A has five assessable facts rather
than the required six. B and C have more ordinary capabilities but no certified,
permanently lock-safe four-pair matching group. Even the full eleven-fact pool has
no such certified group with the currently available evidence.

The descriptors mix serif structure, spacing, symbols, script and intended display
use. Several are overlapping or incomparable. Treating their different strings as
exclusive, or relabelling a broad valid answer as wrong, would be unsafe. Completion
needs further independently verified classification/compatibility evidence or a
better-documented reserve pool; it is not an excuse to relax composition, introduce
future facts early or manufacture a False statement.

The read-only production diagnostic can be rerun for each variant:

```sh
node scripts/art-assessment-capabilities.cjs --subtopic=design --level=l6 --part=p2 --variant=A
node scripts/art-assessment-capabilities.cjs --subtopic=design --level=l6 --part=p2 --variant=B
node scripts/art-assessment-capabilities.cjs --subtopic=design --level=l6 --part=p2 --variant=C
```

It reports exact stage-eligible facts, individual form capabilities, decisions and
certificates, bounded eligible-pool matching enumeration, and actual joint-planner
shortages. Eligible-pool pair counts alone are not proof of a complete quiz.

## Coverage and release meaning

Per delivery mode, twenty attempts at all300 combinations produce:

- Architecture: 3,000/3,000 ready requests (150/150 combinations).
- Design: 2,940/3,000 ready requests (147/150 combinations).
- Combined: 5,940 ready and60 explicit shortages, with no composition, certified
  negative, duplicate-matching, progression or permanent-lock violations.

Fresh learners per mode: 4,560 ready requests,20 first shortages and1,420 later
prerequisite blocks, with no violations. Architecture completes all levels. Design
reaches l6 p1 and stops at l6 p2 A; later raw-ready reviews and levels remain
inaccessible until that prerequisite can be taught. All43 completed teaching
placements introduced exactly11 distinct facts across A/B/C; no untaught facts
entered reviews. The diagnostic intentionally
exits nonzero for this genuine shortage/blocked progression.

Design remains text-only and Coming soon. No asset, image binding, R2 configuration
or production approval was changed. iPhone16e was confirmed booted; no new gameplay
interaction is claimed because this session lacks native UI automation controls.
Manual checks should exercise the newly qualified matching cards and credit/date
prompts after the remaining content prerequisite is resolved or through the
previously approved reversible development test setup. Do not reset progress.

## Validation and matching diversity

The complete suite passed 527 tests across25 suites on an isolated rerun. A prior
concurrent run hit the existing five-second image-preparation timeout; its
assertions and timeout were not changed. TypeScript, lint, content validation,
image validation and whitespace checks passed. No new production image approval.

Matching varied across292/297 raw-ready combinations over20 attempts. The five
fixed groups are Design l2p1 B, l4p1 A/B/C, and l4p4 C. Exhaustive enumeration of
each attempt's selected six facts found exactly one certified group in every
case; no unsafe variation was forced.

## Files in this follow-up

Existing pending files updated (11):

- `src/quizEngine/assessmentTemplates.ts`
- `src/quizEngine/assessmentTypes.ts`
- `src/quizEngine/semanticEvidence.ts`
- `data/artContent/architectureWorld.ts`
- `data/artContent/designFields.ts`
- `data/artContent/designMovements.ts`
- `data/artContent/designPeople.ts`
- `data/artContent/designTypefaces.ts`
- `data/artContent/sourceAuthoring.ts`
- `docs/art-architecture-design-content.md`
- `src/quizEngine/__tests__/architectureDesignContent.test.ts`

New files (4):

- `data/artContent/qualifiedContrasts.ts`
- `docs/art-shortage-resolution.md`
- `scripts/art-assessment-capabilities.cjs`
- `src/quizEngine/__tests__/contentShortages.test.ts`

The complete worktree has47 pending files (including the preserved earlier
expansion), not just these15 follow-up files. No commit, push, availability
override or progress reset was performed.
