# Movies content and integration

Status: 2026-10-27, `main`, based on Music checkpoint `3a4fd6f`. Movies remains registered. All changes remain unstaged/uncommitted. The final editorial decisions below supersede the earlier genre-inference and four-distinct-target notes. No canonical facts, teaching stages, UI components, grading/interaction code, media, image bindings, learner progress or previous Art content were changed by this follow-up.

## Final editorial decisions and names-only matching, 2026-10-27

- The user approved **85 work-specific incorrect genre comparisons**. They use the existing `manual-editorial:2026-10-27:movies:` provenance convention and `User — manual editorial approval (not external source verification)` reviewer. Linked sources provide context, not direct verification of exclusions. **The Umbrellas of Cherbourg → Comedy was removed and stays unknown**; Musical remains canonical and every existing secondary positive is preserved.
- With four distinct genre targets required, withdrawing that comparison exposed **L1/p2/C** (149/150 ready; all 20 attempts safely unavailable). An in-memory alternative passed all 3,000 generation and fresh-progression requests. The user then explicitly approved enabling the **existing duplicate-target opt-in for `genre_of_movie`**. It retains at least three target identities, at most one duplicated pair, identical interchangeable cards, verified compatibility and permanent safe locks. No negative evidence was invented and no facts were restaged.
- Only Movies `associated_character_in_same_movie` matching now uses the instruction **“Match each character with another character from the same movie.”** Both columns show character names only. MCQ, True/False and blanks keep their exact ordinary relationship scope and canonical answers.
- Separate, explicitly enumerated same-movie assertions cover the eleven taught pairs: **11 intended positives and 110 reviewed cross-pair negatives**. Seven reserve self-positives and the two Luke/Leia cross-positives are retained too: **130 assertions in total**. These compare the named screen characters and cited film narratives/credits; different IDs or missing database entries do not generate negatives. Unlisted comparisons remain unknown.
- The generator and matching validator use this broader matching evidence, rather than reusing a narrow “father/mentor/companion” negative. Every selected quartet requires all twelve off-diagonal cells to be verified invalid. Luke/Leia therefore cannot be combined in names-only matching. A single missing certificate blocks the quartet. Existing identity grading and permanent locks are untouched.
- Focused Movies and duplicate-target suites: **53/53 tests pass**. Coverage checks confirm all three L9/p4 variants, all cross-pairs, missing-evidence rejection, overlapping-film rejection, relationship wording and exact quiz composition.
- Current Movies isolated sweep: **150/150**, **3,000/3,000 generation and fresh progression**, zero shortages or violations. Seven-subtopic regression: **21,000/21,000** each, zero violations; all **210 saved sample quizzes are unchanged**. Registered development-image delivery also passes 3,000/3,000 generation and fresh progression, zero violations. Movies has 162 safely interchangeable duplicate-card exercises across those 3,000 generation attempts; the previous seven retain their 339 duplicates unchanged. Full Jest rerun: **677/677 tests, 37/37 suites**, 509.927 s.
- No UI change or real-device verification: the 103/111-character L9/p4 matching labels are eliminated. Other matching formats are unchanged; a narrow-screen/enlarged-text iOS/Android smoke test remains a release item.

## Curriculum and counts

The user's supplied October 12 curriculum is authoritative. The older transcription had parenthetical I/II titles and two different L8 identifiers. `artCurriculum.ts` and the Movies section of `art-curriculum-approved.md` now agree with the final titles, `top_prize_of_award_or_festival`, and `founded_decade_of_award_or_festival`. The unused superseded relation definitions were retired; no legacy content records were rewritten.

| Level | Title | p1 facts | p2 facts | p4 facts | Readiness |
|---|---|---:|---:|---:|---:|
| 1 | Famous Movies I | 18 | 18 | 18 | 15/15 |
| 2 | Movie Genres & Forms | 18 | 18 | 18 | 15/15 |
| 3 | Famous Directors I | 18 | 18 | 18 | 15/15 |
| 4 | Animated Films | 18 | 18 | 18 | 15/15 |
| 5 | Movie Basics | 18 | 18 | 18 | 15/15 |
| 6 | Famous Movies II | 18 | 18 | 18 | 15/15 |
| 7 | Famous Directors II | 18 | 18 | 18 | 15/15 |
| 8 | Film Awards & Festivals | 18 | 18 | 18 | 15/15 |
| 9 | Characters & Movies | 18 | 18 | 18 | 15/15 |
| 10 | Final Review / Mastery | — | — | — | 15/15 |

Total **486 authored concepts**, including **297 introduced teaching facts** and **189 retained reserves**. Each teaching placement introduces eleven facts in the established A6/B3/C2 stages. The seven reserves per placement are excluded from production teaching and reviews. p3/p5 use only eligible introduced facts; every L10 part draws cumulatively from the 297 introduced facts. There are no documentary or animated-feature examples outside the dedicated animation placement.

Movies is appended after the existing Art-wide scheduling and wording passes, exactly like Music. Its authoring data contains evidence, not finished quiz questions.

## Source checking and corrections

`moviesSourceReviews.ts` records field-specific consulted URLs, locators and qualifications (606 ledger entries, including shared/retained checks; 285 distinct URLs). All 486 assessable positive records have checked source fields. The source-ledger check and semantic validator report no pending positive records, malformed evidence or conflicting assertions.

Principal sources include the AFI Catalog, BFI, official studio/distributor records and production notes, Criterion's filmmaker-approved editions, national film institutes, official festival histories/rules, and film-history research. A checked source comparison is **not independent human editorial certification**. The ledger records what each source supports; it does not certify every statement on a source page.

Material corrections/qualifications from the draft:

- Avoided Mira Nair's ambiguous first-feature scope by selecting Gurinder Chadha, whose debut is *Bhaji on the Beach* (1993). The related birth/notable-film placements use the same director.
- Replaced the unverified Almodóvar reserve with Alfonso Cuarón: *Sólo con tu pareja* (1991), rather than silently ignoring Almodóvar's earlier Super-8 feature. Cuarón's birth country is supported by his Academy oral history.
- First features include credited co-directed debuts: Fellini/Lattuada's *Variety Lights*, Wilder/Esway's *Mauvaise Graine*, and Lean/Coward's *In Which We Serve*. They are not described as solo debuts.
- Murnau's reserve *The Boy in Blue* (1919) is the first completed feature directed; its uncertain release is not assessed as a release-year fact. Short, unfinished and television projects are distinguished in source notes.
- Studio credits distinguish animation production from distribution. *The Boxtrolls* replaced a draft with an unclear studio credit. *Persepolis* uses Je Suis Bien Content, with Pumpkin 3D retained as a production partner, rather than confusing delegated producer 2.4.7 Films with the animation studio. Known animation co-production relationships remain accepted.
- Hermione's three related facts specify *The Prisoner of Azkaban* (2004), where Crookshanks appears. Frodo is not incorrectly assigned Bilbo as an uncle; a source-specific Sam companion clue is used instead. Leia's association identifies R2-D2 carrying her message, not ambiguous ownership of C-3PO. Neo's clue identifies the red-pill guide, without denying other mentors.
- *Amélie* retains its significant French film/performer relationship. Its film-identification subject is a descriptive waitress clue, avoiding a title that gives away its own answer; the companion relation uses Nino rather than an obscure father's first name.
- Cannes's planned 1939 launch and first full festival in 1946 are distinguished. Its qualified pre-war-launch decade fact is a reserve with an explicit semantic basis. **Only L8/p4** swaps Cannes to reserve and IFFI (1952) into A, preserving 6/3/2. Cannes's country and Palme d'Or remain taught. IFFI's founding decade avoids an ambiguous beginner chronology question and broadens representation.
- Tallinn uses the festival's own 1997 history, rejecting a conflicting FIAPF 1987 profile entry. Award/festival founding dates are separate from the introduction of their present prizes. BAFTA assesses only the unambiguous 1940s, not conflicting first-ceremony-year conventions.
- Original film years are distinguished from production, reissue and wider-release dates, including *Evita*'s December 1996 opening and *Whiplash*'s 2014 release.

## Assessment compatibility and accessibility

Genres stay broad and non-exclusive. Canonical teaching answers are reinforced; supported secondary classifications remain positive. The authored tables contain **38 additional positive genre comparisons across 20 works** and **85 user-approved work-specific negative comparisons across 24 works**. The original AI inferences were manually approved by the user on 2026-10-27; provenance explicitly distinguishes those judgments from external exclusion verification. Umbrellas/Comedy remains unknown. They compare documented narratives with the defined genre, not an assumed exhaustive classification list. Unlisted relationships stay unknown, including Star Wars/Romance, Titanic/Horror, Raiders/Romance and Dangal/Musical.

Studio, character, director-credit and definition assessments use the existing evidence mechanisms. Animation character questions have checked descriptive clues rather than arbitrary complete character lists. Named-film credit focus reuses the existing Music/design focus mechanism with a `directed` action. Definition comparisons concern defining meanings, never universal claims that jobs or genres cannot overlap.

Shared executable changes include the existing focus action/date verbs/relation metadata and the narrowly scoped Movies same-movie matching check described above. No matching, interaction, grading, quota, progression or selection algorithm was weakened. Movie genres now use the existing limited duplicate-target opt-in with the user’s explicit approval (2026-10-27). Existing Literature/Theatre duplicate-target behavior is unchanged.

Editorial inspection covered generated MCQ, positive/negative True/False, blank and matching examples across L1–9, including all relation families. Production samples also include L10. Examples use familiar genre contrasts and concise definitions. Some other long film titles and descriptive clues still exceed soft word-count targets (23 warnings in the current 30-quiz production sample); these are not catalogue notes or semantic violations. The sampled L9/p4 cards are now at most 17 characters, replacing the previous 111-character label. A real-device layout check remains advisable.

Replay limits remain explicit: 143/150 combinations have multiple matching quartets across 20 production attempts; seven, including the six film-genre variants, have one safe quartet; duplicate-target support restores readiness without inventing comparisons. Card/order/question variation remains deterministic for fixed seeds. Unsupported alternatives were not added merely to increase variety.

## Final verification, 2026-10-27

- Movies isolated and registered development-image delivery: each 3,000/3,000 generated and 3,000/3,000 fresh progression, 150/150 combinations, zero safety/composition/progression violations and zero content/evidence errors.
- Prior seven Art subtopics: 21,000/21,000 generation and fresh progression, all 150/150, zero violations. Their 210 saved sample quizzes match the previous report exactly.
- Movies/duplicate-target focused tests: 53/53. Historical Literature/Theatre completion tests: 3/3 after scoping the manual-evidence count to its original 2026-10-23 cohort (expected 102 unchanged; Movies approvals are independently checked).
- TypeScript, lint, content/evidence integrity, read-only image check (19 staged, 0 production-approved) and whitespace checks pass. No frozen hash or snapshot was changed.
- Full Jest rerun: **677/677 tests, 37/37 suites**, 509.927 s. Initial full run: 676/677; sole failure was the historical manual-evidence count accidentally including the 85 new Movies approvals. The scope correction changes no runtime behavior.

## Original implementation validation, 2026-10-26 (historical)

- Pre-registration isolated catalogue gate, `--attempts=20 --require-ready`: **3,000/3,000 generation and 3,000/3,000 fresh progression**, zero shortages/violations, zero content/evidence errors.
- Registered Movies, text mode, 20 attempts: **3,000/3,000 generation and fresh progression**, 150/150 combinations, zero failures/violations or duplicate-target cards.
- All eight Art subtopics, development-image delivery mode, 20 attempts: **24,000/24,000 generation and fresh progression**, every subtopic 150/150. The earlier seven account for **21,000/21,000** in each sweep. All quiz composition, grading, matching and progression validators pass. The 339 duplicate-card exercises occur in the already opted-in Literature/Theatre scope; Movies has none.
- TypeScript, lint, whitespace, image validation and Literature/Theatre readiness/genre checks pass. Images remain 19 staged, zero production-approved.
- Final standalone full Jest suite: **675/675 tests, 37/37 suites**, 483.812 s. Movies focused tests: **35/35**. An earlier concurrent run timed out in one unchanged local image-preparation test; its isolated image suite passed 17/17 in 6.4 s, followed by the passing standalone full run. No timeout, expectation or image code was changed to obtain that result.
- Historical snapshot values and hashes were not updated. Only their scope filters exclude the newly registered Movies data, as they already excluded later Music additions. The new Movies suite independently checks all 486 positives, active registration, reviews, exact progression/quotas and known positive/unknown comparisons.

## Remaining release review

No known active generation shortage or confirmed factual contradiction remains. The 85 reviewed genre negatives now have explicit user approval. Other context-dependent positive classifications remain AI/source-reviewed, not independently human-certified; technical readiness is not exhaustive independent certification. Preserve the documented debut/founding/credit qualifications. Optional improvements are more source-supported matching variety and device-layout review of long titles/clues. No new engine system is required for either.

## File map

- Data: `moviesFilms`, `moviesDirectors`, `moviesAnimation`, `moviesAwards`, `moviesCharacters`, `moviesGenres`, `moviesTerms`.
- Authoring/evidence: `moviesAuthoring`, `moviesSourceReviews`, `moviesCompatibility`, `moviesGenreEvidence`, `moviesContent`.
- Registration/configuration: `activeArtContent.ts`, `artCurriculum.ts`, `artRelations.ts`, the `SourceFact` subtopic union and existing relation/focus metadata.
- Validation: `scripts/art-movies-audit.cjs`, `moviesContent.test.ts`, historical-scope filters in four tests and the Literature/Theatre audit script. Full manifests are visible through `git status --short`; no generated reports or temporary research scripts are in the repository.

### Exact changed-file manifest (34 files)

```text
data/activeArtContent.ts
data/artContent/sourceAuthoring.ts
data/artCurriculum.ts
data/artRelations.ts
docs/AI_HANDOFF.md
docs/art-curriculum-approved.md
scripts/art-literature-theatre-audit.cjs
src/quizEngine/__tests__/accessibilityCleanup.test.ts
src/quizEngine/__tests__/artContent.test.ts
src/quizEngine/__tests__/literatureTheatreContent.test.ts
src/quizEngine/__tests__/manualGenreApprovals.test.ts
src/quizEngine/__tests__/artPilot.test.ts
src/quizEngine/__tests__/duplicateTargetMatching.test.ts
src/quizEngine/__tests__/genreCompletion.test.ts
src/quizEngine/exerciseFactory.ts
src/quizEngine/generationCoverage.ts
src/quizEngine/assessmentTemplates.ts
src/quizEngine/assessmentTypes.ts
src/quizEngine/relationPolicies.ts
data/artContent/moviesAnimation.ts
data/artContent/moviesAuthoring.ts
data/artContent/moviesAwards.ts
data/artContent/moviesCharacters.ts
data/artContent/moviesCompatibility.ts
data/artContent/moviesContent.ts
data/artContent/moviesDirectors.ts
data/artContent/moviesFilms.ts
data/artContent/moviesGenreEvidence.ts
data/artContent/moviesGenres.ts
data/artContent/moviesSourceReviews.ts
data/artContent/moviesTerms.ts
docs/art-movies-content.md
scripts/art-movies-audit.cjs
src/quizEngine/__tests__/moviesContent.test.ts
```
