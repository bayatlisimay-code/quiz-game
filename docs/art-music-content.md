# Art → Music — implementation status

2026-10-26 · `main` · baseline `9359a38a0e8075790e94c410f9d13cce9bdb37c8` · uncommitted

**Registered and active (2026-10-26): 150/150 and full fresh progression through the production context.** The editorial approvals are applied ([decision record](art-music-editorial-approval.md)). `data/activeArtContent.ts` registers the 297 teaching facts and all Music evidence; the 189 reserves stay outside review. The existing six completed Art subtopics are unchanged. Band formation questions now read “When was “The Beatles” formed?”.

## Inventory and curriculum

`data/artContent/musicContent.ts` assembles **486 unique concepts: 18 per teaching placement, 27 placements**. `musicTeachingContent` selects the **297 introductory facts (11 per placement)**; **189 additional facts remain reserves**. The existing production rule teaches six A, three B and two C facts; including all nine C-stage candidates in review would introduce untaught reserves. No progression rule was changed.

The exact approved level titles, order, p1/p2/p4 relations, p3/p5 dependencies and Level 10 cumulative review remain in `data/artCurriculum.ts`, unchanged. There are no audio/image assets or runtime searches.

| Level | Authored facts | Isolated combination readiness |
|---|---:|---:|
| 1 — Music Genres & Forms | 54 | 15/15 |
| 2 — Famous Solo Artists I | 54 | 15/15 |
| 3 — Famous Bands & Groups I | 54 | 15/15 |
| 4 — Famous Classical Composers | 54 | 15/15 |
| 5 — Music Basics I | 54 | 15/15 |
| 6 — Famous Solo Artists II | 54 | 15/15 |
| 7 — Famous Bands & Groups II | 54 | 15/15 |
| 8 — Musical Instruments | 54 | 15/15 |
| 9 — Music Basics II | 54 | 15/15 |
| 10 — Final Review / Mastery | 0 new | 15/15; reachable by a fresh learner |

## Source and accessibility passes

The source register contains **351 field-specific review entries** supporting all 486 positive facts. These are AI source comparisons in a separate pass from initial drafting, **not independent human editorial certification**. Locators and review provenance are internal; candidate/guessed dictionary URLs were removed from the term inventory. Credits distinguish performer, songwriter/composer, original release, cover and joint lead.

Important initial-draft corrections:

- BTS's formation/debut convention was avoided by choosing a-ha (Norway, 1982); Phoenix's conflicting dates by choosing Air (France, 1995); the Kinks' early-lineup/renaming dates by choosing Blur (UK, 1988). These were draft candidates, not existing completed content.
- Soda Stereo (Argentina, 1982) and Babasónicos (Argentina, 1991) replace ambiguous draft band-date selections while retaining Latin American representation.
- Tinariwen formed in Algeria; Maria Callas was born in the USA. Nationality/member origins are not substituted for the question's country.
- Debussy's historical era is 20th-century music, rather than the movement Impressionism; Beethoven retains the combined Classical and Romantic answer. Overlapping careers are not categorically excluded.
- Nusrat's actual recording title is *Allah Hoo Allah Hoo*. Fela's *Zombie* version displays **1976–77** to preserve the release-date distinction.
- Gardel's explicitly documented tango *Por una cabeza* replaces the initial genre-example candidate *El día que me quieras*, which his foundation lists as a canción.
- Alto is described as the choral part between soprano and tenor. Definitions avoid mood-only major/minor claims and tie/slur confusion. Strings replaces unnecessary bowed/plucked family divisions; piano's Strings/Percussion alternatives remain valid.
- Genre labels use ordinary broad categories where suitable and retain worthwhile world traditions. Recording qualifiers are short year/version labels; the artist's name is not repeated in a genre-song option where the prompt already names it.

## Safe compatibility support implemented

L1 genre-song questions reuse the existing literary genre/byline `example-credit` pattern: e.g. “Which work by Bob Marley & the Wailers is an example of Reggae?” Wrong options are checked against the named recording artist, not a supposed exclusive genre. Removing that qualifier restores unknown for the unqualified comparison.

L1 genre-artist questions use the existing named-work credit focus: e.g. “Which Blues act recorded ‘The Thrill Is Gone (1969 version)’?” Shared support adds only the `recorded` action and the noun `act`. No matching, grading, selection or progression algorithm changed.

Definitions use reviewed defining-meaning contrasts while broad/hierarchical overlaps stay unknown. Country/formation-year comparisons use the sourced finite field; named recording/composition comparisons use the credited role and version. Joint leads and known secondary classifications are retained: Cesária Évora on Salif Keita's *Yamore*, Alice Coltrane on piano and harp, Stevie's other genres, Beyoncé/Country, Nusrat/Folk, and others. This is not a closed-world genre list.

## Resolved blockers (2026-10-26)

The nine L2/p4, L6/p4 and L8/p4 variants are now ready. The fix uses 98 user-approved manual-editorial comparisons and 8 Claude-selected comparisons that the user then approved, plus the approved L2/L6 staging changes and the João Gilberto → Bossa nova replacement. See the [decision record](art-music-editorial-approval.md). No engine, grading, matching or progression code changed. The two relations' wording now asks about an artist's known genre / a musician famous for an instrument.

History — these A/B/C variants were previously blocked:

1. **L2/p4 — genre_associated_with_solo_artist**
2. **L6/p4 — genre_associated_with_solo_artist**
3. **L8/p4 — notable_musician_of_instrument**

Positive anchors exist, but the eligible cohorts lack certified wrong alternatives and cross-pair negatives. Positive True/False assertions alone cannot satisfy the balanced forms, two wrong MCQ/option-blank choices, and four safe matching pairs. Unknowns are not graded false. This is an evidence/selection gap, not permission to weaken an engine invariant.

Automatic approval review rejected broad proposed genre/instrument exclusion tables as unsupported. They were **not installed**. A later, narrower named-recording implementation was independently tried in memory, demonstrated that unqualified genre judgments remain unknown, and was approved/applied. It cleared all L1 shortages.

The user chose **“Prepare a short comparison list for my editorial approval.”** See [pending editorial approval](art-music-editorial-approval.md): **106 work-specific proposed judgments**, with two separately identified selection/staging decisions. None of those proposals is applied. In particular, the Teresa Teng/Brazilian popular music judgment needs attention; do not automatically approve it. Keep existing positives and leave any rejected comparisons unknown.

## Validation after approvals (2026-10-26, Claude Code)

| Check | Result |
|---|---|
| Full Jest | **36/36 suites, 639/639 tests**; 549 s |
| TypeScript / lint / whitespace / image check | PASS (19 staged, 0 approved) |
| `node scripts/art-music-audit.cjs --attempts=20 --require-ready` | **Exit 0**: 3,000/3,000 generated, 0 shortages, 0 violations; 150/150 |
| Music fresh learner | **3,000/3,000 ready**, 0 prerequisite-blocked, 0 violations |
| Six completed Art generation / fresh progression | **18,000/18,000** each, 0 shortages/violations |

## Validation after final executable changes (Codex, pre-approval history)

| Check | Result |
|---|---|
| Full Jest | **36/36 suites, 637/637 tests**, including 33 new Music tests; 442.043 s |
| TypeScript / Expo lint / whitespace | PASS |
| Music schema, identities, relations, stages, evidence consistency | PASS; zero content errors/evidence issues |
| `node scripts/art-music-audit.cjs --attempts=20 --require-ready` | **Exit 1, correctly**: **2,820/3,000 ready**, 180 explicit shortages, **0 violations**, 141/150 combinations |
| Music fresh learner, same 20 attempts | 3,000 requests: **480 ready**, **20 shortages**, **2,500 prerequisite-blocked**, **0 violations**; stops at **L2/p4/A** |
| Six completed Art generation, 20 attempts, development images | **18,000/18,000**, 0 shortages/errors; each subtopic 150/150 |
| Six completed Art fresh progression, same scope | **18,000/18,000**, 0 shortages/blocks/violations |
| Image validation | PASS: 19 assets, 19 staged, 0 approved, 19 staging-approved; unchanged |
| Real Music samples | Inspected teaching A samples across all 27 placements and the generated MCQ/TF/blank/matching output; internal authoring notes do not appear. Three unsupported placements correctly emit no exercises. |

The completed-Art matching hashes and existing 604 tests remain unchanged and passing. Existing Literature/Theatre interchangeable duplicates still appear safely (339 exercises in the 18,000-request generation regression); Music does not gain duplicate-target permission.

## Files and next action

New Music modules: `musicAuthoring.ts`, `musicBands.ts`, `musicCompatibility.ts`, `musicComposers.ts`, `musicContent.ts`, `musicGenres.ts`, `musicInstruments.ts`, `musicSoloArtists.ts`, `musicSourceReviews.ts`, `musicTerms.ts`.

Other changes: Music-only recording, instrument-group and composer-period wording in `data/artRelations.ts`; Music added to `SourceFact`'s subtopic type; the existing focus action type/wording; `scripts/art-music-audit.cjs`; `src/quizEngine/__tests__/musicContent.test.ts`; these two Music documents and `docs/AI_HANDOFF.md`.

**Done:** Music is registered and the full regression gate passes (640/640 tests). Remaining: user approval to stage/commit. Do not certify unapproved comparisons or modify frozen test expectations.

`main` remains at `9359a38`; all work is uncommitted/unstaged. No push, progress reset, image setting change or `.git_backup_corrupt/` modification.
