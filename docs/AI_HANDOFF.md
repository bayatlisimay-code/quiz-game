# AI handoff — Quiz Game (Codex ⇄ Claude Code)

Shared rules: [AGENTS.md](../AGENTS.md) (authoritative) · [CLAUDE.md](../CLAUDE.md). This file holds **current task state only**. Application docs: [progression](quiz-learning-progression.md) · [validity](quiz-validity.md) · [curriculum](art-curriculum-approved.md) · [Literature/Theatre status](art-literature-theatre-content.md) · [genre report](art-genre-completion.md). Earlier research (matching architecture, duplicate-target design, the Codex prompt) lives in commits `2055707` and `ca8d66a`.

**Last updated:** 2026-10-21, Codex final checkpoint review. **Literature/Theatre 150/150 each.**

## Final checkpoint — local only (2026-10-21)

This document is included in the user-authorised checkpoint **`feat(art): complete Literature and Theatre genre readiness`**, parent `b2ca62133335c30ddfa78bccced49603386bb10a`, on `codex/literature-theatre-content`. The checkpoint hash is the containing commit (`git log -1`). Its 11 explicitly staged files cover only Literature/Theatre content, evidence, regression tests and status documentation. The complete diff was reviewed; no unrelated files, temporary files or potential secrets were found. The four factual corrections below are preserved. `.git_backup_corrupt/` is untouched.

Confirmed the latest full-suite and sweep logs against the unchanged implementation: **571/571 tests across 30 suites**, Literature/Theatre **150/150 combinations each**, generation and fresh progression **6,000/6,000 each in both delivery modes**, completed Art generation and fresh progression **12,000/12,000 each**, with zero validation failures or progression violations. TypeScript, lint, readiness/content audit and image validation were rerun successfully during checkpoint review; whitespace checks passed. No application code changed during this review, so the long suite and sweeps were not repeated.

**Git status / exact next action:** the 11 intended files form this checkpoint; the expected post-commit working tree is clean (verified in the commit report). No push, merge or Stage 3 integration is authorised. Await the user's explicit approval before beginning Stage 3.

**Outstanding release audit:** AI-authored semantic evidence remains provisional and needs human editorial review, including the five new work-specific comparisons below. Readability diagnostics have 79 advisory length warnings in the Literature/Theatre sample; these are editorial follow-ups, not generation violations. Matching quartet variety remains limited in the repaired placements. The older machine/status reports are historical. Literature/Theatre stay text-only; production image activation and Design availability remain unchanged. This checkpoint establishes technical readiness, not release certification.

## Final matching repair — current status (2026-10-21)

The three shortages identified in the independent review below are resolved without changing the engine, grading, quotas or curriculum relations. The four source-backed corrections remain positive and are covered by their regression test. The earlier blocked results below are historical.

### Minimal genre-only changes

- **Literature l1/p2:** Treasure Island C→A and The Scarlet Letter A→C via existing `genrePriority` overrides. All works, primary genres, IDs and evidence are retained. A can now match Pride and Prejudice → Novel of manners, The Moonstone → Detective fiction, and Moby-Dick / Treasure Island → two identical Adventure fiction cards. Existing evidence also supplies B/C quartets. No new Literature evidence or reserve was needed. The core Gothic/science-fiction introductions remain in A; author/publication lessons are unchanged.
- **Theatre l5/p2:** activate the already approved **Oklahoma! → Musical** reserve in **B**, replacing **Our Town’s genre slot only**. Move The Bald Soprano B→A using its existing genre-only override. All remaining stages and primary labels stay unchanged. Our Town keeps its author/date lessons and its original Drama genre record is exported as `retainedOurTownGenreFact` outside the active plan; its original source evidence and comparisons remain registered. It was not reclassified. The original l1 reserve IDs remain inactive, and Nineteen Eighty-Four remains unscheduled.
- Theatre B/C now match Glass Menagerie → Memory play (A), Bald Soprano → Absurdist drama (A), Rosencrantz and Guildenstern → an interchangeable Absurdist drama card (B), and Oklahoma! → Musical (B). This is exactly two A and two B facts, so the quartet fits both B and C while all ordinary-question progression quotas remain intact. Theatre A retains its prior safe quartet.
- The existing Theatre cohort has only one certified quartet, entirely from A; re-staging alone cannot make that quartet fit B/C. The single approved reserve is therefore a necessary, bounded genre-only adjustment rather than a changed learning objective. It adds the familiar integrated-musical form in place of a generic Drama answer. No unrelated lesson changed.

### Five new work-specific comparisons (provisional AI review)

| Negative | Source and exact basis |
|---|---|
| Oklahoma! ≠ Memory play | [Creator estate’s complete two-act synopsis](https://rodgersandhammerstein.com/oklahoma-synopsis/): forward courtships, auction, wedding and departure; Laurey’s ballet is a dream about a feared wedding, not a recollection presenting the staged past. |
| Oklahoma! ≠ Absurdist drama | [Creator estate’s show account](https://rodgersandhammerstein.com/show/oklahoma/) plus that synopsis: integrated musical narrative with intelligible causal action and stable characters, not the disrupted-language/narrative form. |
| Glass Menagerie ≠ Musical | [Licensed original drama](https://www.concordtheatricals.com/p/98161/the-glass-menagerie) and [Court Theatre guide, PDF pp. 4–5](https://www.courttheatre.org/wp-content/uploads/2017/06/PG_GlassMenagerie.pdf): spoken memory drama; accompanying music/dance does not make an integrated sung narrative. |
| Rosencrantz and Guildenstern ≠ Musical | [Licensed original Stoppard script](https://www.concordtheatricals.com/p/2819/rosencrantz-and-guildenstern-are-dead): spoken dramatic comedy around Hamlet; incidental player music and the recorder are not an integrated musical narrative. |
| Bald Soprano ≠ Musical | [Licensed Ionesco script](https://www.concordtheatricals.com/p/3070/the-bald-soprano-trans-allen), corroborated by [Huchette dossier, PDF pp. 4–5](https://www.theatre-huchette.com/pdf/DOSSIER-PEDAGOGIQUE-2023.pdf): antiplay derived from language lessons and nonsense conversation, not a sung story despite the title. |

These concern the original stage works, not separately musicalised adaptations or individual experimental productions. They are **not** general genre exclusions. No Oklahoma!/Historical-drama, Feminist-drama, Tragicomedy or Comedy-of-menace negative was invented; unverified relationships stay unknown. No Rosencrantz/Historical-drama or Glass-Menagerie/Realist-drama negative was added. The four previous corrections remain protected. New comparisons and the newly authored positive have 21 October review dates and do not claim human editorial certification.

### Validation for the repair

| Check | Result |
|---|---|
| `npm test -- --runInBand --watchman=false --testTimeout=60000` | **PASS 30/30 suites, 571/571 tests**, 677.006 seconds; all 1,800 frozen completed-Art matching hashes pass |
| Focused primary/staging and 120 deterministic repaired-quiz checks | PASS 12 tests |
| L/T generation, 20 attempts, production **and** development-image delivery, `--require-ready` | Each: **6,000/6,000 ready**, 0 shortages, 0 failures; **150/150 combinations each**; 305 safe duplicate-target matching exercises |
| L/T fresh learner, 20 attempts, both delivery modes | Each: **6,000/6,000 ready**, 0 shortages, prerequisite blocks or violations; full Level 10 reached |
| Readiness/content audit | exit 0; 297/297 ordinary-qualified facts each; validation errors `[]` |
| Completed Art generation and fresh progression, 20 attempts, development images | **12,000/12,000 ready each**; 0 shortages, failures, prerequisite blocks or violations; generation duplicates 0 |
| TypeScript / lint / whitespace / images | PASS, final type/lint reruns clean; image check unchanged: 19 assets, 19 staged, 0 approved, 19 staging-approved |

Actual A/B/C quizzes were inspected from both repaired placements: approved answers appear in MCQ/True-False/blanks and matching; eight exercises, exact quotas and the four source corrections are preserved. The new regression test checks all three variants for each repaired placement over 20 seeds using both composition and semantic validators. Matching fact-set variety remains limited: each repaired variant used one quartet across the 20 production seeds; no unsupported pair was added to increase variety. All **1,764 active records outside Literature l1/p2 and Theatre l5/p2 are byte-identical to the prior reviewed snapshot**, including every author/date lesson and the four completed Art subtopics. Engine, UI, image infrastructure, progress and other content files were not edited.

**Repair-session Git state (historical):** the repair ended at `b2ca621` with 11 modified tracked files, nothing staged or pushed. The user subsequently authorised the final checkpoint recorded above. Human editorial release certification remains outstanding; no production images or availability flags were enabled.

## Historical independent review outcome — BLOCKED (2026-10-21)

Verified worktree `/Users/simaybayatli/.codex/worktrees/aeb2/quiz-game`, branch `codex/literature-theatre-content`, checkpoint `b2ca621`. The initial tree contained **11 modified files**, nothing staged. No commit, stage, push, merge, reset, clean, stash or branch switch occurred; `.git_backup_corrupt/` was left untouched.

### P1 — four incorrect genre exclusions corrected

The initial 150/150 result was reproducible, but it relied on four negative assertions contradicted by documented classifications. Engine validation cannot independently discover factual errors in evidence marked verified. This review changed those four assertions to supported **positive alternatives**, preserving their evidence IDs and every primary teaching answer:

| Work | Alternative previously marked incorrect | Independently checked source |
|---|---|---|
| The Moonstone | Historical fiction | [CiNii Books, BA23862288](https://ci.nii.ac.jp/ncid/BA23862288), Subject Headings: Historical fiction (gsafd), Everyman's Library 122 / Knopf 1992, ISBN 0679417222; corroborated by [Ohrstrom Library, record 71859](https://librarycatalog.sps.edu/cgi-bin/koha/opac-detail.pl?biblionumber=71859), Genre/Form. This is the original novel, not a graded-reader adaptation. |
| Top Girls | Absurdist drama | [Travis Michael Holder's ArtsInLA review, hosted by Antaeus](https://antaeus.org/wp-content/uploads/2020/06/artsinla-top-girls.pdf), PDF page 1 under Top Girls: explicitly describes the work as an absurdist theatrical polemic. Feminist drama remains primary. |
| “Master Harold”…and the Boys | Tragicomedy | [Clive Barnes, original New York Post review, 5 May 1982, reprinted with permission](https://www.enotes.com/topics/athol-fugard/criticism/fugard-athol-vol-25/clive-barnes): explicitly identifies a tragicomedy. Realist drama remains primary. |
| A Raisin in the Sun | Feminist drama | [Hee Won Lee, Feminist Studies in English Literature 22.2 (2014), pp. 205–241](https://oak.go.kr/central/journallist/journaldetail.do?article_seq=20303), abstract and keywords explicitly document the feminist-drama reading. Realist drama remains primary. |

These are supported alternatives, not newly imposed primary classifications. Real pre-correction quizzes included Historical fiction as a wrong Moonstone MCQ option and as a competing matching card, and Absurdist drama as a wrong Top Girls MCQ option and competing matching cards. Those judgments are now forbidden. The 153 provisional AI-authored judgments remain provisional: 149 Claude-authored negatives plus four source-checked Codex positive corrections; none represent human editorial approval.

Changes made by this review: `genreCompatibility.ts` (four corrections, with accurate 21 October review dates via an optional authoring date override), one four-case regression test in `approvedGenrePrimaries.test.ts`, and these status documents. No engine, primary answer, fact identity, priority, staging, curriculum, UI, grading, progress or image code was changed by this review. Existing generation safeguards and test assertions were not weakened.

### P1 — three genuine matching shortages remain after the correction

- Literature **l1/p2/A**: no certified four-pair matching group. The Moonstone and The Scarlet Letter cannot be opposing exclusive targets when Historical fiction is legitimate for both.
- Theatre **l5/p2/B and C**: no compatible quartet inside a permitted six-fact teaching pool. The eligible-pool diagnostic still finds one quartet (Glass Menagerie, The Crucible, The Birthday Party, Top Girls), but all four are A facts. B allows only three A facts and C only two, so that quartet cannot fit either six-fact pool; do not mistake eligible-pool feasibility for quiz readiness. Top Girls cannot be used opposite an Absurdist drama card as an incorrect cross-pair.
- Literature l1 B/C, Literature l5 A/B/C, Theatre l1 A/B/C and Theatre l5 A remain ready in isolated generation. Fresh learners correctly stop at the earlier failed prerequisites; no bypass was introduced.

### Scope and educational review

Compared the active snapshot with `HEAD` by loading the five original data files through a read-only Git source overlay. All **1,742 records outside the four intended genre placements are byte-identical**; the only 11 differing concept IDs are inside those placements (including Jane Eyre removal / Moonstone addition). Evidence changes are confined to `genre_of_novel` and `genre_of_play`. In particular, author-credit and publication/date lessons remain unchanged.

The Moonstone is an educationally appropriate detective-fiction classic ([Penguin description](https://www.penguinrandomhouse.com/books/260151/the-moonstone-by-wilkie-collins/)), but its legitimate historical classification invalidates the proposed A matching quartet. Theatre l5's order is educationally reasonable and preserves 6/3/2, although its B/C compatibility still needs resolution. Gatsby retains Modernist novel, supported by the [Cambridge chapter abstract](https://www.cambridge.org/core/books/abs/cambridge-companion-to-f-scott-fitzgerald/great-art-small-art-and-modernist-cachet/B9BE748753C881A32D64774E5577A565), and was observed as an actual blank answer. Little Women's unified Bildungsroman wording is retained. Our Town's broad Drama answer is correct, is never treated as false for other plays, and works in ordinary questions; its inability to participate in a discriminating matching quartet is not itself an assessment failure.

Inspected representative real A/B/C quizzes from all four placements before and after correction: MCQ, both truth values, blanks, and four-pair matching. The ready quizzes have eight exercises, exact quotas, six ordinary facts and safe interchangeable duplicate targets. The three blocked quizzes now explicitly return no exercises rather than invalid questions.

### Independent validation after semantic correction

| Check | Result |
|---|---|
| `npm test -- --runInBand --watchman=false --testTimeout=60000` | **PASS 30/30 suites, 570/570 tests**, final rerun 676.133 seconds; includes the new four-case evidence regression and all 1,800 completed-Art matching baseline hashes |
| TypeScript / lint / whitespace | PASS after the final metadata/type check |
| `art-literature-theatre-audit.cjs --require-ready` | exit 0; validation errors `[]`, all 297 facts per subtopic ordinary-qualified. **This script checks ordinary-fact capability, not four-pair/joint quiz readiness.** |
| L/T generation, 20 attempts, production and development images, `--require-ready` | Each mode: **5,940/6,000 ready**, 60 explicit shortages, 0 failures, 220 safe duplicate-target matching exercises. Literature **149/150**, Theatre **148/150**; the only failing combinations are the three listed above. Exit 1 is the correct readiness gate. |
| L/T full fresh progression, 20 attempts, both modes | Each mode: 6,000 requests, **1,340 ready, 40 shortages, 4,620 prerequisite-blocked**, 0 violations. Literature stops at l1/p2/A; Theatre at l5/p2/B. Exit 1. |
| Completed Art generation, 20 attempts, development images, `--require-ready` | **12,000/12,000 ready**, 0 shortages/failures/duplicates; validation errors 0 |
| Completed Art fresh progression, 20 attempts, development images | **12,000/12,000 ready**, 0 shortages/prerequisite blocks/violations |
| Image validation | PASS: 19 assets, 19 staged, 0 approved, 19 staging-approved; no image writes |

**Final Git status:** branch `codex/literature-theatre-content`, HEAD unchanged at `b2ca621`; the same 11 tracked files remain modified, nothing staged and no new untracked files. No commit, push or merge occurred.

**Exact next action:** do not integrate as generation-complete. Resolve the three matching shortages with source-defensible alternatives within the current teaching pools, or obtain approval for the smallest reserve/staging adjustment if genuinely necessary. Do not reinstate any of the four contradicted negatives or narrow the question artificially. Then repeat generation and fresh-progression sweeps. Ratify the existing genre-only curriculum changes and retain a human editorial release audit for the remaining provisional evidence. No further curriculum or engine redesign was attempted in this review.

The tables and 150/150 claims below are **Claude's pre-review results**, retained as history, not the current readiness verdict.

## Historical pre-review status: Literature and Theatre reported generation-complete

| Check (run 2026-10-21) | Result |
|---|---|
| Literature + Theatre generation, 20 attempts, production and development-image modes, `--require-ready` | **6,000/6,000 ready in each mode = 150/150 combinations per subtopic**; 0 failures; content validation 0 errors |
| Literature + Theatre fresh-learner progression (both modes) | **6,000/6,000 ready, 0 prerequisite-blocked, 0 violations** — fresh learners now reach Level 10 |
| Completed Painting/Sculpture/Architecture/Design (dev images) generation + fresh learner | 12,000/12,000 each, 0 failures/violations, 0 duplicate cards (unchanged) |
| `npm test -- --runInBand --watchman=false --testTimeout=60000` | **30/30 suites, 569/569 tests** |
| `npx tsc --noEmit` / `npm run lint` / `git diff --check` | pass |
| `art-literature-theatre-audit.cjs --require-ready` | **exit 0**; 297/297 facts ordinary-qualified in each subtopic |
| `art-image-assets.cjs --check` | 19 assets, 19 staged, 0 approved — unchanged (Literature/Theatre remain text-only) |

Real generated quizzes from all four formerly blocked placements were inspected: eight exercises, correct quotas, sensible wrong options, and duplicate-target matching shown working (e.g. *The Importance of Being Earnest* and *The School for Scandal* both → "Comedy of manners").

## Git state

Branch `codex/literature-theatre-content` at `b2ca621` (chain: `ca8d66a` docs, `2055707` docs, `e4544c2` re-staging + first evidence, `603e0f9` first checkpoint, `43f1859` baseline). `main`/`origin/main` still `43f1859`. Nothing pushed. `.git_backup_corrupt/` untouched (tracked in history).

**Uncommitted (11 files):** `data/artContent/approvedGenrePrimaries.ts`, `genreCompatibility.ts`, `literaryAuthoring.ts`, `literatureClassics.ts`, `theatrePlays.ts`; tests `approvedGenrePrimaries.test.ts`, `literatureTheatreContent.test.ts`, `nonExclusiveClassification.test.ts`; docs `art-genre-completion.md`, `art-literature-theatre-content.md`, `AI_HANDOFF.md`.

## Restrictions (unchanged)
No push/merge/reset/clean/stash/branch switch and no commit without approval. No image activation (Literature/Theatre text-only; Design stays "Coming soon"). Do not touch completed Art content. Never invent negatives; unknown ≠ false. Keep the 8-exercise, six-fact, 6/3/2 contracts and permanent matching locks.

## What changed (all genre-lesson-only; 11 facts and 6/3/2 preserved per placement; every record retained)

| Placement | Change |
|---|---|
| **Theatre l1/p2** | Genre-only priorities: *She Stoops to Conquer* → A, *The Importance of Being Earnest* → B. Sourced negatives for Hamlet, Faustus, Bacchae, School for Scandal, She Stoops, Tempest — e.g. "She Stoops / School for Scandal are not revenge tragedies" using the required-main-action standard. The Bacchae and Tempest are deliberately **not** certified as "not revenge" (Dionysus's vengeance; Folger notes Prospero's appetite for revenge). |
| **Literature l5/p2** | Riders of the Purple Sage → A, The House on Mango Street → B (committed earlier). Added ~35 plain negatives (Dystopian/Western/Detective/Family saga/War/Fantasy) for Gatsby, Their Eyes, Farewell to Arms, My Ántonia, Mango Street, Red Harvest, Oz and cross cells. **Gatsby kept as "Modernist novel"** (reliably sourced; it does not block assessment; replacing it with "tragic love story" would add overlap with Farewell to Arms/Maltese Falcon). |
| **Literature l1/p2** | **The Moonstone** (Detective fiction; Penguin Random House/Britannica) takes Jane Eyre's slot **in the genre lesson only** (`novelSet(level, works, genreWorks)`); Jane Eyre keeps her author and publication lessons and record. 51 definition-based negatives across the 11 active works. Wuthering → B, Scarlet Letter → A (committed earlier). Little Women's display text unified to "Bildungsroman (coming-of-age fiction)". |
| **Theatre l5/p2** | *Top Girls* → **Feminist drama** (Encyclopedia.com: "a feminist drama with fantasy elements"); *"Master Harold"* → **Realist drama** (Encyclopedia.com Style section: "subscribes to the school of realism"; app's descriptive definition, **no chronology argument**). Genre-only priorities: Top Girls and The Crucible → A; Raisin in the Sun and Fences → C; Bald Soprano → B. 46 definition-based negatives. **Our Town remains "Drama"** (no reliable narrower source found; the Wilder estate only describes a bare stage). |

Mechanism: an optional per-work `genrePriority` overrides only the genre fact's priority, so author-credit (p1) and date/publication (p4) stages never move (asserted by tests). Evidence is table-driven in `genreCompatibility.ts` (work description from a catalogue/encyclopedia/publisher source + label definition + stated reason). Duplicate-target matching (`b2ca621`) is what lets repeated labels (Comedy of manners ×2, Realist drama ×2, Adventure ×2, Absurd ×2, Bildungsroman ×2, Detective ×2) appear as interchangeable cards; the sweeps now generate 267 such exercises in Literature/Theatre and none in completed Art.

## Curriculum decisions made under delegated authority — please ratify or revert
1. **The Moonstone replaces Jane Eyre in the Literature l1 genre lesson.** Smallest change found: the only mutually uncontested trio among the classics is Moby-Dick / Pride and Prejudice / The Scarlet Letter, and A needs a fourth uncontested work; an exhaustive search over all 11-of-12 selections and 6/3/2 arrangements under the consistent standard found none without a new work. Dracula was kept so the Gothic duplicate pair stays available. Reverting (`genreLessonNovels` in `literatureClassics.ts`) makes Literature l1 A fail again.
2. **Theatre l5 genre staging:** Raisin in the Sun and Fences moved to stage C of the genre lesson (still taught in l5/p2; p1/p4 unchanged). 120 arrangements were certifiable; this was the lowest-movement one (5 moves).
3. **Top Girls and "Master Harold" relabelled** (sourced). **Our Town unresolved:** still the broad "Drama" — flagged, not hidden. It cannot take part in matching (Drama is valid for every play) but is assessable in ordinary forms.
4. Gatsby unchanged; Little Women label unified (user-approved).

## Evidence provenance and standard
- 153 active assertions are **provisional AI-authored** (`reviewedBy: "Claude Code — source and work-feature comparison (not independent human editorial approval)"`). They are not independently approved.
- **Standard for a negative (work ≠ label):** certified only if no reliable catalogue classifies the work under that label **and** the label's definition does not plainly describe its organising action. Intentionally left unknown (reasonable readings exist): e.g. Moby-Dick/Gothic, Frankenstein/Adventure, Dracula/Adventure and Detective, Godot and Rosencrantz as comedy of menace, Birthday Party as realist, Glass Menagerie as tragedy or realist, Fences as historical.
- Sources actually opened this session: Project Gutenberg catalogue records, NEA Big Read (Their Eyes, My Ántonia, F451, Joy Luck Club, Maltese Falcon), Library of Congress, Penguin Random House, Britannica/Encyclopedia.com (fetches and search summaries), Grove Atlantic, Folger, Yale unit, Arthur Miller Society. Several pages returned 403 (NEA Gatsby/Farewell/Mango Street, Concord Theatricals, Britannica direct); descriptions for those works use alternative accessible sources named in each locator.

## Known limitations / for Codex's review
- Review is by Claude Code only; there is no independent human editorial certification. Spot-check locators' factual claims, especially the "plain" definition-based negatives and descriptions taken from encyclopedia search summaries.
- Matching pools are thin in places (Literature l1 B has a single feasible pool; Theatre l5 C has one), so matching variety there is limited, though every exercise is verified.
- `art-literature-theatre-validation.json` and the older sections of `art-genre-completion.md` are historical reports, not regenerated; current diagnostics come from the scripts below.

## Exact next actions
1. Codex: independent review of the uncommitted diff (start with `genreCompatibility.ts` locators and the decisions above), then re-run the validation commands.
2. User: ratify or amend the curriculum decisions; approve a checkpoint commit (explicit paths) and, later, any push/merge to `main`.
3. Optional follow-ups: a reliable narrower label for Our Town; a human editorial pass on the AI-authored evidence.

## Validation commands
```sh
npm test -- --runInBand --watchman=false --testTimeout=60000
npx tsc --noEmit && npm run lint && git diff --check
node scripts/art-image-assets.cjs --check
node scripts/art-genre-compatibility.cjs                        # per-placement status and shortages
node scripts/art-literature-theatre-audit.cjs --require-ready   # exits 0 now
node scripts/art-content-impact.cjs --subtopics=literature,theatre --attempts=20 --require-ready
node scripts/art-learning-impact.cjs --subtopics=literature,theatre --attempts=20
node scripts/art-content-impact.cjs --subtopics=painting,sculpture,architecture,design --attempts=20 --development-images --require-ready
node scripts/art-learning-impact.cjs --subtopics=painting,sculpture,architecture,design --attempts=20 --development-images
```
(Repeat the Literature/Theatre sweeps with `--development-images`.) Reviews here are source/work-feature comparisons by Codex or Claude Code, **not independent human editorial certification**.
