# Sculpture and Painting teaching content

Baseline: `64c6e297efebf75a06616541250210fa221bd785`.

> The original expansion report below is retained as historical context. The
> current six-fact content totals and validation are documented in the completion
> section immediately below and in `quiz-learning-progression.md`.

## Eleven-fact progression completion — 2026-10-15

Added 184 source-checked concepts without replacing existing facts: 96 Painting
and 88 Sculpture. Total registered content is 598 facts (297 Painting, 301
Sculpture). Every teaching placement supports eleven introductions; p3/p5 and
all l10 parts reuse original taught identities, without review clones.

| Subtopic / level | Added p1 | Added p2 | Added p4 | Added total |
|---|---:|---:|---:|---:|
| Painting l1 | 6 | 6 | 6 | 18 |
| Painting l2, l3, l4, l6, l7, l8 (each) | 2 | 2 | 2 | 6 |
| Painting l5, l9 (each) | 7 | 7 | 7 | 21 |
| Sculpture l1 | 4 | 4 | 4 | 12 |
| Sculpture l2, l3, l4, l6, l7, l8 (each) | 2 | 2 | 2 | 6 |
| Sculpture l5 | 7 | 7 | 7 | 21 |
| Sculpture l9 | 5 | 7 | 7 | 19 |
| Both l10 | 0 | 0 | 0 | cumulative review |

The p1/p2/p4 relation IDs remain exactly those in `data/artCurriculum.ts`.
There are 28 added historical work entries (84 facts) and six added movement
examples; two example identities are shared with historical lessons and one
historical work was already a movement example. The total is 32 additional
canonical work identities (153 overall), not 34 unrelated objects.

Historical additions are in `progressionWorks.ts`; sources include National
Gallery, Met, MoMA, Louvre, Vatican Museums, Getty and the relevant collection
foundations. Technical vocabulary uses National Gallery, MoMA, V&A, Getty and
MFA CAMEO dictionaries and teaching resources. Individual URLs, accession/version
identities and locators are retained with every fact. The tooling review label
explicitly disclaims independent human approval.

Dates preserve current catalogue precision: Van Dyck's Charles I is about
1638–1639; Rubens's NG194 is probably 1632–1635; Manet's London Maximilian is the
specific fragmentary version. Diana distinguishes creation from casting; William
is the Met faience hippopotamus; Seated Scribe is the Louvre limestone original.
The Gates of Paradise are original museum-held doors. Omero's Donatello source
is assessed via its original-work metadata, never as the date of its plaster copy.

New terminology has concise source-compared definitions and short matching
labels. Meaning contrasts concern the definition of a named term, not an
assertion that artistic processes or styles cannot coexist. Hierarchical or
plausibly overlapping comparisons remain unknown, including relief/low relief,
shape/geometric shape and chasing/metal chiseling. Getty's source-specific
brazing/soldering terminology retains visible qualifiers; casting from life is
explicitly distinguished from burnout life-casting. New terms do not acquire
negatives automatically.

Movement examples and pioneers retain their original-formative-context scope.
Negative chronology comparisons include both positive source references.
Contemporary or overlapping associations remain unknown: Matisse and Ernst are
not excluded from Pop merely because their primary movements differ.

Twenty attempts across all 300 combinations pass in both delivery modes:
6,000/6,000 text requests and 6,000/6,000 development-image requests. Fresh-learner
sequential sweeps independently pass another 6,000/6,000 per mode, with zero
prerequisite blocks, zero new review introductions and zero detected violations.
This is finite deterministic coverage, not a proof about all possible seeds or
independent external historical certification.

No image assets or bindings were added. Existing approved-for-staging assets
remain staging-only; existing development delivery stays development-only.
New recognition facts use source-checked authored descriptions, not runtime
summaries. No production image approval is implied by content readiness.

## Original expansion report (pre-six-fact progression)

The approved curriculum configuration and its version are unchanged.

## Registration and coverage

`data/artContent/index.ts` adds 356 source-checked teaching records to the
58 preserved pilot records: 201 Painting and 213 Sculpture records in total.
No independent review records, synthetic production fixtures or facts from
another Art subtopic are registered. All 54 teaching placements are populated.
There are 117 identified collection works/versions or ensembles (nine in each
of thirteen historical work pools), plus four additional movement examples:
Masaccio's Pisa panel, *Impression, Sunrise*, *Les Demoiselles d'Avignon*, and
the Farnese Gallery ceiling cycle. *Campbell's Soup Cans* is shared across its
movement and historical lessons by the same artwork identity.
Thus there are 121 work/version/ensemble identities, including 103 new ones;
this does not count every individual panel or terracotta warrior separately.

| Level | Painting teaching records | Sculpture teaching records | Ready requests per subtopic, per delivery mode |
|---|---:|---:|---:|
| l1 | 15 | 25 | 300/300 |
| l2 | 27 | 27 | 300/300 |
| l3 | 27 | 27 | 300/300 |
| l4 | 27 | 27 | 300/300 |
| l5 | 12 | 12 | 300/300 |
| l6 | 27 | 27 | 300/300 |
| l7 | 27 | 27 | 300/300 |
| l8 | 27 | 27 | 300/300 |
| l9 | 12 | 14 | 300/300 |
| l10 | 0 new; 201 cumulative | 0 new; 213 cumulative | 300/300 |

Every row covers five parts, three variants and twenty deterministic attempts.
p3/p5 reuse existing teaching IDs; every l10 part uses the full l1–l9 teaching
union. The records/evidence themselves live in modular files, not this document.

Run `node scripts/art-content-impact.cjs --attempts=20 --require-ready` and
repeat with `--development-images`. Both executed sweeps produced 6,000 ready
quizzes, zero shortages, zero composition/semantic violations and zero duplicate
matching answers. Each mode produced 14,000 MCQs, 14,000 blanks, 7,000 true and
7,000 false statements, and 6,000 four-pair matching exercises. The original
pilot's forward, terminology and optional reverse checks retained 780/780 ready
requests with development images.

These are engine/evidence-consistency checks, not independent historical
certification. Sources were compared by Codex; no museum employee or independent
human editor is represented as approving these records.

## Evidence and scope

Each work retains its museum/collection URL and source locator. Identification
clues are authored from inspected descriptions/catalogue material. New identity
prompts have a short collection-object scope; version and provenance detail stays
in the evidence and authored clue. Source-specific objects remain distinguished
by stable artwork IDs, collection/version titles and independently reviewed
image bindings.

Creator negatives assess the entry's named principal artist for the identified
object. Posthumous Boccioni, Burghers and Ratapoil bronzes use explicit artist-credit
wording, without implying that the credited artist physically made the later cast. Date negatives assess the visibly worded complete catalogue dating label;
they do not assert that every overlapping historical interval is false. Ancient
culture questions assess the primary cultural attribution stated in the collection
account at its stated specificity, not a broader parent label, modern nationality
or every cultural influence. Unqualified cultural membership receives no negative
certification from those source-label contracts. Their explicit
`catalogueField` wording preserves this scope.

Dates retain their precision: Boccioni's MoMA cast is **1913 (cast 1931 or 1934)**;
Bilbao's *Maman* is **1999 (cast 2001)**; Rodin's museum *Burghers* retain the
monument and casting dates; the original Naoshima *Pumpkin* is distinguished from
its 2022 replacement. Marcus Aurelius retains the museum's **161–180 CE** year
field rather than pretending either proposed erection date is certain. Month,
range, approximate and uncertain labels are not coerced into exact years.

Definition negatives use individually reviewed defining-meaning contrasts,
with both sources/locators and the distinction recorded. Processes and features
may coexist in artworks. Adding a term does not create negatives automatically.
Painting movement examples/pioneers have an explicit original historical-development
scope. Chronological exclusions concern the museum-documented formative contexts,
not arbitrary year cutoffs or denial of later influence. Unresolved Monet/Cubism
and Picasso/Pop relationships remain unknown. Adding a documented Baroque pioneer
and example gives the planner an independently certifiable matching group.

Sculpture form overlaps remain unknown (for example bust versus relief).
Represented-body, horse-and-rider and kinetic-form meanings provide additional
reviewed contrasts; they do not assert that every hybrid artwork has one exclusive
classification. The old insufficient four-fact subsets are regression-tested to
continue failing closed when the supporting new records are removed.

New creator facts use options blanks unless their accepted spelling/alias contract
has been explicitly reviewed. One catalogue spelling is not declared to exhaust
all defensible artist names. Typed input for the preserved pilot remains unchanged.
Date labels and long definitions use options. No fuzzy numerical acceptance was
introduced. Optional creator reverses retain independent grammar and known-valid
alternative exclusion; not every new reverse pool is promised to be ready.

## Exclusions and editorial limits

- No named culture is inferred for the Lion Man or Willendorf figurine from a
  broad prehistoric period. These two works have recognition and dating facts;
  their l1 culture pool contains seven supported records.
- The disputed Goya attribution for *Doña Isabel de Porcel* and the National
  Gallery's “possibly after Courbet” *Young Ladies on the Banks of the Seine*
  were not used as definite creator facts.
- A title naming Van Gogh was not used for a creator question. New Noguchi and
  Gandhara/Bactria-Margiana question titles avoid printing the tested attribution.
- Dating version notes do not print the answer. Exact full source labels and
  version history remain available in the evidence.
- Contemporary levels include documented postwar precedents; creation, casting,
  replacement, unveiling and acquisition dates are not conflated.
- Human editorial review of educational balance, recognition clues, sensitive
  mythological titles and final learner-facing prose remains appropriate before
  release. This content does not constitute a comprehensive account of each era.

## Images

Ten actual Met collection photographs were checked against object identities,
public-domain collection markings, API `isPublicDomain=true`, and the Met's
CC0 image policy at https://www.metmuseum.org/policies/image-resources.
Downloaded display-size bytes were visually reviewed, then re-encoded by the
existing ingestion tool with checksum, size, dimension and metadata validation.

| Asset | Object | License | Delivery |
|---|---|---|---|
| content-101 | Kneeling bull, Met66.173 | CC0 actual digital image | R2 development only |
| content-102 | Seated Gudea, Met59.2 | CC0 actual digital image | R2 development only |
| content-103 | Marble seated harp player, Met47.100.1 | CC0 actual digital image | R2 development only |
| content-104 | Seated Hatshepsut, Met29.3.2 | CC0 actual digital image | R2 development only |
| content-105 | Seated female, Met1989.281.41a,b | CC0 actual digital image | R2 development only |
| content-106 | Sahure and divine figure, Met18.2.4 | CC0 actual digital image | R2 development only |
| content-107 | Ushumgal stele, Met collection329079 | CC0 actual digital image | R2 development only |
| content-108 | Marble kouros, Met32.11.1 | CC0 actual digital image | R2 development only |
| content-109 | Seated Buddha, Met2003.593.1 | CC0 actual digital image | R2 development only |
| content-110 | Ugolino and His Sons, Met67.25 | CC0 actual digital image | R2 development only |

`data/imageCuration/art/sculptureExpansion.json` records source URLs, actual
source checksums, license/identity determination, collection/version, retrieval
and review timestamps. Photographer/ancient artist names are left unknown where
not supplied; no invented attribution is recorded. Files use opaque asset IDs,
not answer-bearing artwork names. Originals were not bundled; ten optimized
staging JPEGs are retained. The existing uploader verified authenticated R2 GET
and public HTTPS bytes for all eighteen development bindings, preserving the prior
eight images. Staging records retain needs-review status; no production bindings
or release image approvals were enabled. R2 development hosting is not production
CDN readiness. All remaining recognition records retain authored text stimuli;
additional Painting and Sculpture images still need separate rights/identity work.
The lamassu gallery photograph was withheld because it includes a second artwork
and background museum labels; its display-size alternate was unavailable. The
Met Noguchi image was rejected because the API does not mark it public domain.

## Device check and boundaries

The existing iPhone 16e app was launched against the worktree's own Metro port,
without reinstall, native rebuild, data reset, prerequisite fixture or progression
bypass. The new Gudea image loaded with contained aspect ratio; native MCQ correct
and incorrect feedback, an options blank, a certified false recognition statement,
and a text-only recognition stimulus were exercised. Matching images/cards were
visually inspected; incorrect attempts showed red feedback and returned, while
correct text- and image-based pairs locked green and remained locked. The quiz
was left before completion, with no completion XP awarded. This limited smoke check does not claim complete manual
validation of every new lesson, every matching sequence, typed aliases, network
timeouts, quiz completion/persistence or later-level unlocking. Automated tests
cover matching lock safety, failed-image replanning, review IDs and exact composition.
