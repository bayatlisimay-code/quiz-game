# Design l6/p2 typeface qualification — 18 October 2026

This targeted correction supersedes the three remaining shortages in
`art-shortage-resolution.md`. It changes no engine policy, curriculum relation,
image configuration, progress state, Architecture record, or other teaching part.

## Diagnosis

Before correction, Quiz A had five assessable facts: Consolas could not use
unqualified Serif or Sans serif as a certified negative. Spacing and serif
structure are independent properties. B/C had zero certified four-pair groups,
with the matching search completing without budget exhaustion. Repeated sans-serif
answers reduced distinct answer cards, while the decorative/script/display
categories had unknown or overlapping relationships with the other answers.
There was no justification for declaring these classifications universally disjoint.

## Exact content change

All eleven concept, subject and canonical fact IDs remain stable. No typefaces
were added or removed. The six changed displayed values have new value identities
because the more specific meanings must not silently reuse broad category IDs:

| Concept suffix (`art_design_l6_p2_…`) | Previous answer | Reviewed answer / value ID |
| --- | --- | --- |
| arial | Sans serif | Proportional sans-serif text / `type-property:proportional-sans-serif-text` |
| calibri | Sans serif | Proportional sans-serif text / same ID |
| verdana | Sans serif | Proportional sans-serif text / same ID |
| trebuchet-ms | Sans serif | Proportional sans-serif text / same ID |
| georgia | Serif | Proportional serif text / `type-property:proportional-serif-text` |
| cambria | Serif | Proportional serif text / same ID |

Consolas remains **Monospaced**. Its source explicitly states equal character
widths and Fixed pitch=True. This contradicts the proportional attribute in both
compound options without implying that monospaced fonts cannot have serifs.

Wingdings remains **Symbol typeface**. Its question subject changes from
“Wingdings (original symbols)” to “Wingdings (original family)” to avoid revealing
the answer. Its explicitly documented icon/symbol repertoire is distinct from the
Latin text-family classifications. Individual decorative letters or numerals do
not make this repertoire a Latin text alphabet.

All eleven positive source locators now record the independently checked pitch
and repertoire properties. Twelve explicit comparison certificates are added:
Consolas and Wingdings against the six proportional-text records (two unique
answer meanings). Existing pitch, repertoire and opposite-serif-structure
contradictions are retained. No complete classification set or global exclusive
taxonomy is asserted. Unknown display/script relationships remain unknown.

## Source evidence

Only textual documentation was retrieved; no Design specimen images or font
binaries were searched for, downloaded or distributed.

Microsoft Typography pages, **Overview**, **Fixed pitch**, **Script Tags** and
**Code pages** supply the reviewed source locators:

- https://learn.microsoft.com/en-us/typography/font-list/consolas — equal widths,
  programming environments, Fixed pitch=True, Latin text repertoire.
- https://learn.microsoft.com/en-us/typography/font-list/arial — sans-serif
  description, Fixed pitch=False; also documents display use, which must not be
  declared false merely because the stored answer is a text classification.
- https://learn.microsoft.com/en-us/typography/font-list/calibri — explicitly no
  serifs, Fixed pitch=False; original Latin design distinguished from later scripts.
- https://learn.microsoft.com/en-us/typography/font-list/verdana — sans-serif
  screen design and Fixed pitch=False.
- https://learn.microsoft.com/en-us/typography/font-list/trebuchet-ms — sans-serif
  influences and Fixed pitch=False; heading/display use remains legitimate.
- https://learn.microsoft.com/en-us/typography/font-list/georgia — Scotch Roman
  ancestry and actual top serifs, Fixed pitch=False.
- https://learn.microsoft.com/en-us/typography/font-list/cambria — serif text
  design, Fixed pitch=False; not conflated with the separate Cambria Math face.
- https://learn.microsoft.com/en-us/typography/font-list/wingdings — icons,
  arrows and ornaments, Zsym, Symbol character set, Fixed pitch=False.
- https://learn.microsoft.com/en-us/typography/font-list/impact — condensed face,
  Fixed pitch=False and Latin repertoire.
- https://learn.microsoft.com/en-us/typography/font-list/gabriola — decorative
  display face, Fixed pitch=False and Latin repertoire.
- https://learn.microsoft.com/en-us/typography/font-list/comic-sans-ms — comic
  lettering script, Fixed pitch=False and Latin repertoire.

These source checks are not independent human editorial approval. A failed
supplementary LucasFonts fetch is not represented as verified evidence.

## Educational allocation

Only l6/p2 priorities change: Wingdings 4→5, Impact 5→4, Cambria 3→4, Comic Sans
4→3. The existing deterministic priority scheduler produces:

- A: Arial, Calibri, Consolas, Georgia, Verdana, Wingdings.
- B introduces: Cambria, Gabriola, Impact; reinforces three A facts.
- C introduces: Comic Sans MS, Trebuchet MS; reinforces two A and two B facts.

In the inspected fresh-learner run, B reinforces Arial, Consolas and Wingdings;
C reinforces Consolas/Wingdings from A and Cambria/Gabriola from B. Matching
uses Cambria with Arial in B and with Trebuchet in C, alongside Consolas and
Wingdings. Quiz A can choose among its three proportional sans-serif faces.

The rationale is to introduce spacing, text-family structure and symbol repertoire
in A, reinforce the serif group with another documented text family in B, then
reinforce sans-serif structure in C. Decorative uses remain educational material
without being forced into the matching assessment. Creator lessons in p4 retain
their previous records, priorities and introduction stages.

A safe matching group uses a proportional sans-serif text face, a proportional
serif text face, Consolas and Wingdings. All four cards are distinguishable; each
cross-pair is contradicted by a reviewed spacing, structure or repertoire property.
B/C can reinforce these classes with Cambria/Trebuchet without borrowing future
facts. All accepted immediate-lock sequences must remain completable.

## Validation

Twenty deterministic attempts at all 300 Architecture/Design combinations in each
of text and development-image modes produced 6,000/6,000 ready requests per mode,
zero shortages, zero duplicate matching cards and zero composition/safety failures.
Architecture and Design each have 150/150 ready combinations. Each mode generated
14,000 MCQs,7,000 True statements,7,000 False statements,14,000 blanks and 6,000 matching
exercises.

Independent fresh-learner sweeps also completed 6,000/6,000 requests per mode,
including l6p3 and all l10 parts: zero shortages, prerequisite blocks or progression
violations. All 54 teaching placements introduced exactly 11 distinct facts across
A/B/C. These are production-pipeline results, not synthetic fixtures.

Typeface Quiz A used 3 matching combinations across 20 attempts. B/C used 1 each;
exhaustive enumeration of every attempt's selected six facts found exactly one
safe group in those cases. Across all 300 combinations, 293 varied their matching
selection; the remaining 7 each had one certified group in their selected pool.
No unknown pairing was relabelled false to force variety.

Focused regression suites: 23 tests passed across 3 suites. TypeScript, lint,
content validation and image-integrity checks passed. The unchanged image registry
has 19 staging-approved assets and zero production-approved assets. Design remains
text-only and Coming soon; no Design images or bindings were added. No simulator
interaction or state reset was performed in this targeted correction.

Full suite: 531 tests passed across 26 suites on the final standard-timeout rerun
(310.478 seconds). The initial full run passed 530 tests but hit the unchanged
five-second R2 image-preparation timeout. That image suite subsequently passed
all 17 tests in isolation, then the complete suite passed without changing any
assertion or timeout. Git whitespace checks passed.

A separate before/after serialization comparison also confirmed that all 1,181
non-target records and all 4,671 non-classification evidence entries are identical,
including the l6p4 creator lesson in the same authoring file.

## Files changed in this follow-up

- `data/artContent/designTypefaces.ts`
- `src/quizEngine/__tests__/typefaceClassification.test.ts` (new)
- `src/quizEngine/__tests__/contentShortages.test.ts`
- `src/quizEngine/__tests__/architectureDesignContent.test.ts`
- `docs/art-typeface-resolution.md` (new)
- `docs/art-shortage-resolution.md` (historical-snapshot notice only)

The existing 583 Architecture/Design records outside l6/p2 retain their previous
canonical-field snapshot hash. The 598 Painting/Sculpture records and their 2,052
original evidence entries retain their previous serialized hashes. Tests keep
these preservation baselines and add specific assertions for the authorized
classification migration rather than silently accepting unrelated changes.
