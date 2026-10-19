# Architecture and Design authored content

> **Updated 18 October 2026:** see the [final typeface correction and validation](art-typeface-resolution.md).
> Architecture and Design each pass 150/150 combinations, including fresh-learner
> progression. The sections below preserve the original 16 October authoring and
> validation snapshot; its historical shortage counts are superseded by that report.

## Status

594 new teaching records: 297 Architecture and 297 Design. Each of the 54
approved teaching placements has eleven distinct canonical facts, educational
priorities, and a 6/3/2 A/B/C introduction schedule. No review records were
created. Painting/Sculpture's 598 records and 2,052 original evidence entries
remain byte-for-byte identical as serialized data (covered by regression tests).

This is **not complete release readiness**. Positive institutional evidence does
not establish arbitrary negative relationships. Ten teaching placements retain
positive-only evidence; their mandatory quizzes and some dependent reviews
correctly report shortages. Design remains Coming soon.

## Evidence and authoring

The modular files in `data/artContent/architecture*.ts` and `design*.ts` contain
source URLs and precise locators beside each claim. `sourceAuthoring.ts` builds
stable semantic identities, scoped assertions, finite catalogue fields where
justified, reviewed identification clues, and explicit priorities.

Institutional-source comparisons were performed by Codex. The stored reviewer
string explicitly says this is **not independent human editorial approval**.
A subsequent editorial check should inspect the claims and their locators,
especially complete-credit fields and authored definition contrasts.

Source families include UNESCO World Heritage, official building owners and
architectural practices, the Met, MoMA, V&A, Getty, MFA CAMEO, Microsoft Typography,
Adobe documentation, institutional archives and official brand histories. Primary
source URLs are retained in the content; no runtime web lookup is used.

Negative evidence is restricted to reviewed defining-meaning contrasts,
precisely scoped complete institutional fields, and documented date bounds.
Non-exclusive cultures, fields, examples, influences, careers and typeface
properties do not acquire invented completeness. Historical style examples
assess a visibly qualified original historical phase; conservative disjoint
date envelopes do not prohibit later revivals or overlapping influences.

Important distinctions/exclusions:

- Original architectural design, later completion, remodelling and engineering
  roles are separate; anonymous ancient architecture is not given invented
  named architects.
- Individual and studio/team creator identities coexist only inside an explicitly
  reviewed heterogeneous credit domain. Named valid collaborators are retained.
- Arial's initial Nicholas design and later family work with Saunders are
  qualified as initial/family-design credits, not two sole original authors.
- Typeface classifications remain non-exclusive; original design credits exclude
  later scripts and hinting only where the source supports that distinction.
- Design dates distinguish design/prototype from production and public identity
  introduction. Westinghouse's conflicting 1959/1960 accounts, an unsupported
  Mobil introduction year, and Lufthansa's project-start date were not converted
  into definite public-introduction facts. Separate well-documented identity
  introductions fill the approved relation instead.
- The film/other four Art subtopics were not modified.

## Reproduce the diagnostics

Use the existing installed project dependencies:

```sh
npm test -- --runInBand
./node_modules/.bin/tsc --noEmit
npm run lint
node scripts/art-image-assets.cjs --check
node scripts/art-content-impact.cjs --subtopics=architecture,design --attempts=20
node scripts/art-content-impact.cjs --subtopics=architecture,design --attempts=20 --development-images
node scripts/art-learning-impact.cjs --subtopics=architecture,design --attempts=20
node scripts/art-learning-impact.cjs --subtopics=architecture,design --attempts=20 --development-images
```

The learning sweep intentionally exits nonzero for genuine shortages or blocked
prerequisites. Raw generation assumes prerequisite receipts; it does not prove
fresh-learner reachability. All ready quizzes are checked for exact composition,
six facts, progression, certified negatives and permanent-lock matching safety.

### Measured availability (20 deterministic attempts per variant)

Each cell is ready part/variant combinations out of 15. Both delivery modes have
the same availability; every counted ready combination succeeded in all attempts.

| Level | Architecture | Design |
| --- | ---: | ---: |
| l1 | 15 | 15 |
| l2 | 9 | 3 |
| l3 | 9 | 3 |
| l4 | 15 | 0 |
| l5 | 15 | 15 |
| l6 | 15 | 9 |
| l7 | 15 | 15 |
| l8 | 15 | 15 |
| l9 | 15 | 15 |
| l10 | 15 | 15 |
| Total | 138/150 | 105/150 |

Raw sweep per mode: 6,000 requests, 4,860 ready, 1,140 insufficient; no grading,
composition or duplicate-matching violations. This is 243/300 ready combinations,
not 300/300.

Fresh learner per mode: 720 ready requests, 40 first shortages and 5,240 blocked
by prerequisites, with no progression/semantic violations. Each subtopic reaches
l1 p1–p5 and l2 p1, then stops at l2 p2. Later raw-ready levels cannot be reached
through normal progression until the earlier shortage is resolved.

Exact unavailable groups (all A/B/C):

- Architecture l2 and l3: p2 and p3.
- Design l2 and l3: p2, p3, p4 and p5.
- Design l4: p1–p5.
- Design l6: p2 and p3.

The ten positive-only teaching placements are Architecture l2/l3 p2; Design
l2/l3 p2/p4, l4 p1/p2/p4, and l6 p2. Their relations remain educationally useful.
They need sourced incompatibility evidence or a narrower defensible assessment
scope, not invented negatives or removal of the content. Some reviews lack two
assessable source groups. The planner now reports that proven mixture shortage
before bounded search; it does not relax the review rule or quiz quotas.

242 of the 243 raw-ready combinations varied their matching subset across the
20 attempts. Design l2 p1 B has exactly one certified four-fact group within its
selected six; exhaustive subset enumeration confirmed that forced variation
would be unsafe.

## Images and availability

Design is entirely text-only: no image assets, bindings, downloads or required
image delivery. Its identification clues are independently authored from the
cited textual accounts. The Coming soon flag remains unchanged. A temporary
local development-only availability expression used for simulator testing was
restored byte-for-byte; no access bypass is included.

Architecture adds one CC0 derivative: `architecture-201`, the Met's public-domain
1850s Colosseum photograph (object 268995, accession 46.1.51). The actual photograph
and source rights were checked; the image is optimized and metadata-stripped.
The source object and Met image-resources policy are recorded in
`data/imageCuration/art/architecture.json`. Its checksummed R2 object is enabled
only in the generated development registry, not the production registry.
A candidate Chartres photograph was rejected because an inscription reveals the
answer. Other works retain verified text clues; no image approval is implied.

Recognition matching now renders only the validated image/text stimulus, never
an internal `Description of work-key` caption. Normal compact work/term labels
and historical qualifiers remain unchanged. This was discovered and verified in
actual iPhone 16e gameplay; green permanent locks and quiz completion were checked.
Both Architecture l1 p1 A and development-only Design l1 p1 A completed 8/8.
The newly hosted Colosseum image was not exercised in a real simulator quiz;
public bytes, registry binding and image/fallback generation are automated checks.

## Remaining release work

1. Source and editorially approve negative evidence for the ten placements above.
2. Repeat fresh-learner sweeps; do not equate raw availability with unlocking.
3. Independently review historical facts, concise clues, definitions and credit
   scopes before a production content approval.
4. Perform broader device gameplay, including later levels, typed entry,
   image-failure/timeouts and full completion/unlocking paths.
5. Curate further Architecture photographs if desired; maintain text fallback.
6. Decide Design launch availability only after its earlier shortages and
   editorial review are resolved. Missing Design images are not a blocker.

## File inventory

15 modified files and 28 new files; no deletions. No commit or push.

### Modified

- `app/topic/[topicId]/subtopic/[subtopicId]/level/[levelId]/[partId].tsx`
- `data/activeArtContent.ts`
- `data/imageCuration/art/architecture.json`
- `scripts/art-content-impact.cjs`
- `scripts/art-learning-impact.cjs`
- `src/images/__tests__/artImageAssets.test.ts`
- `src/images/developmentRegistry.generated.json`
- `src/quizEngine/__tests__/artContent.test.ts`
- `src/quizEngine/__tests__/contentProgressionCompletion.test.ts`
- `src/quizEngine/__tests__/learnerText.test.ts`
- `src/quizEngine/assessmentTemplates.ts`
- `src/quizEngine/assessmentTypes.ts`
- `src/quizEngine/buildQuiz.ts`
- `src/quizEngine/learnerText.ts`
- `src/quizEngine/semanticEvidence.ts`

### New

- `assets/staged-art/architecture-201-7d936f64dd14.jpg`
- `data/artContent/architectureAuthoring.ts`
- `data/artContent/architectureConstruction.ts`
- `data/artContent/architectureContemporary.ts`
- `data/artContent/architectureDesignTerms.ts`
- `data/artContent/architectureElements.ts`
- `data/artContent/architectureForms.ts`
- `data/artContent/architectureHistorical.ts`
- `data/artContent/architectureMaterials.ts`
- `data/artContent/architectureModern.ts`
- `data/artContent/architectureStructure.ts`
- `data/artContent/architectureStyles.ts`
- `data/artContent/architectureWorld.ts`
- `data/artContent/designAuthoring.ts`
- `data/artContent/designFamous.ts`
- `data/artContent/designFields.ts`
- `data/artContent/designIdentity.ts`
- `data/artContent/designMovements.ts`
- `data/artContent/designPeople.ts`
- `data/artContent/designPrinciples.ts`
- `data/artContent/designProducts.ts`
- `data/artContent/designTypefaces.ts`
- `data/artContent/designTypography.ts`
- `data/artContent/designVisual.ts`
- `data/artContent/reviewedDefinitions.ts`
- `data/artContent/sourceAuthoring.ts`
- `docs/art-architecture-design-content.md`
- `src/quizEngine/__tests__/architectureDesignContent.test.ts`
