# AI handoff — Quiz Game (Codex ⇄ Claude Code)

Shared rules: [AGENTS.md](../AGENTS.md) (authoritative) · [CLAUDE.md](../CLAUDE.md). This file holds **current task state only**; it links to, and does not duplicate, the application docs ([progression](quiz-learning-progression.md), [validity](quiz-validity.md), [curriculum](art-curriculum-approved.md), [Literature/Theatre status](art-literature-theatre-content.md), [genre completion report](art-genre-completion.md), [machine report](art-literature-theatre-validation.json)).

**Last updated:** 2026-10-20, Claude Code, second-checkpoint session. Scratch analysis scripts are outside the repo (Claude scratchpad); everything below is reproducible with `scripts/art-genre-compatibility.cjs` and the commands at the end.

## Repository and Git state

| | |
|---|---|
| Repo | `bayatlisimay-code/quiz-game` (origin `https://github.com/bayatlisimay-code/quiz-game.git`) |
| Working directory | `/Users/simaybayatli/.codex/worktrees/aeb2/quiz-game` |
| Branch | `codex/literature-theatre-content` (local only; not pushed) |
| Checkpoints | `603e0f9` first `wip:` checkpoint (44 files, parent `43f1859`) → **second `wip:` checkpoint** (the commit directly after it; `git log -2`): R1, Literature l5 rank 1, 16 evidence assertions, tests, docs |
| `main` / `origin/main` | unchanged at `43f1859` |
| Uncommitted after the second checkpoint | `docs/AI_HANDOFF.md` only (the read-only matching-architecture findings below; awaiting approval to commit) |
| `.git_backup_corrupt/` | tracked in history (98 files); **untouched — leave it that way** |

## Restrictions (explicit)

- **No push, merge, rebase, reset, clean, restore, stash, branch/worktree switch** without explicit user approval. No further commit without approval.
- **No image activation** (no image bindings, no R2 upload, no registry/asset writes). Literature and Theatre are text-only. Design stays "Coming soon".
- Do not touch completed Painting/Sculpture/Architecture/Design content (baseline hashes are test-guarded).
- Do not change the 44 approved primaries; do not weaken semantic verification, the fixed 8-exercise/6-fact composition or safe matching; **fail closed on uncertain negatives**; unknown is never false.
- Do not change what genre lessons teach (the genre of the actual work). No work-feature assessment view, and **no wrong-option-only / assessment-only labels** unless ordinary-question feasibility is still deficient after evidence and re-staging — then design first, get approval.

## Decisions the user has made (authoritative)

1. The 44-record primary table in [approvedGenrePrimaries.ts](../data/artContent/approvedGenrePrimaries.ts) / [art-genre-completion.md](art-genre-completion.md) is final. Nineteen Eighty-Four → Dystopian fiction and Oklahoma! → Musical are approved classifications (in `genreReserves.ts`), **not** mandatory active teaching facts. The older audit/candidates documents are superseded.
2. **"Realist drama" keeps the app's current descriptive definition** (`theatreGenres.ts`: "recognisably true to life"). Do **not** use historical chronology to certify Realist-drama negatives.
3. **R1 adopted for Literature l1** and **Literature l5 rank 1 adopted** (both done, below).
4. Re-staging for Literature l5 and Theatre l5: analyse exhaustively first, rank by valid matching quartets, minimal priority movement and curriculum coherence, then research only the cells the strongest candidates need. The Literature l5 re-staging was approved and applied; no Theatre l5 re-staging is approved.
5. Wrong-option-only labels: **deferred**.
6. Preserve legitimate genre overlap; a source calling a work one genre never proves it is not another.

## Changes made after the first checkpoint (committed in the second checkpoint)

**A. Literature l1 R1 re-staging (approved).** Stage is priority rank inside a placement (top 6 → A, next 3 → B, rest → C; `scheduleArtLearning`). A work's `priority` also feeds its author-credit (p1) and publication (p4) facts, so changing it would have moved those too. Instead an optional `genrePriority` on `LiteraryWork` overrides only the l1/p2 genre fact ([literaryAuthoring.ts](../data/artContent/literaryAuthoring.ts), used in [literatureClassics.ts](../data/artContent/literatureClassics.ts)): Wuthering Heights `genrePriority:4` (A→B), The Scarlet Letter `genrePriority:5` (B→A). Result Literature l1/p2: **A** Dracula, Frankenstein, Jane Eyre, Moby-Dick, Pride and Prejudice, The Scarlet Letter · **B** Wuthering Heights, Huckleberry Finn, Little Women · **C** Don Quixote, Treasure Island. 6/3/2, 11 facts, all records and primaries retained; author and publication stages of both works verified unchanged. A now holds one Gothic primary (Dracula).

**A2. Literature l5 rank 1 re-staging (approved).** Same genre-only mechanism in [literatureModernNovels.ts](../data/artContent/literatureModernNovels.ts) (`genrePriorities`): Riders of the Purple Sage 4→5 (B→A), The House on Mango Street 5→4 (A→B). Literature l5/p2 now: **A** Fahrenheit 451, The Great Gatsby, The Joy Luck Club, The Maltese Falcon, Riders of the Purple Sage, Their Eyes Were Watching God · **B** A Farewell to Arms, The House on Mango Street, My Ántonia · **C** Red Harvest, The Wonderful Wizard of Oz. Author (p1) and publication (p4) stages of both works verified unchanged.

**B. 16 new work-specific negative assertions** in [genreCompatibility.ts](../data/artContent/genreCompatibility.ts) (reviewer `Claude Code — source and work-feature comparison (not independent human editorial approval)`; new optional `reviewer` field, others still stamped Codex). **All 16 remain provisional AI-authored evidence — including the 11 Literature l5 matching cells — and must not be treated as independently approved.** Sources were fetched this session (NEA Big Read, Penguin Random House, Library of Congress, Folger, Ibsen Centre, Yale, Dictionary.com); definitions reuse those already in `literaryGenres.ts`/`theatreGenres.ts`.

| Work ≠ label | Source (basis) |
|---|---|
| Fahrenheit 451 ≠ Family saga, Detective fiction, Western | NEA overview: one fireman, society-wide action, science fiction |
| The Joy Luck Club ≠ Dystopian, Detective, Western | NEA overview: San Francisco / China family stories |
| The Maltese Falcon ≠ Dystopian, Western | NEA overview: real 1928 San Francisco |
| Riders of the Purple Sage ≠ Dystopian, Family saga, Detective | Penguin Random House description + Library of Congress (Western, 1912): moderate confidence, summary-level sources |
| Hamlet ≠ Comedy, Comedy of manners, Heroic comedy | Folger introduction (revenge tragedy) + Folger Act 5 Sc. 2 text: four principal deaths, no comic restoration; structural comparison, not "tragedy excludes comedy" |
| Antigone ≠ Heroic comedy | extends existing non-comedy certificate |
| A Doll's House ≠ Comedy of manners | Ibsen Centre reception account (serious drama, nearest tragedy); moderate confidence |

**C. Tests.** [approvedGenrePrimaries.test.ts](../src/quizEngine/__tests__/approvedGenrePrimaries.test.ts): the 44-primary test now expects table-order stages **except** an explicit, documented override map for the two R1 facts; three new tests (R1 and l5 shape/author-publication stages unchanged; the 16 assertions are `invalid`, `verified`, honestly labelled and never contradict a documented positive).

**D. Docs.** `art-genre-completion.md` has an R1 banner and its two stage cells updated; the historical counts there are otherwise as Codex reported.

## Validation — run by Claude Code, 2026-10-20 (after the changes above)

| Check | Result |
|---|---|
| `npm test -- --runInBand --watchman=false --testTimeout=60000` | **PASS 29/29 suites, 550/550 tests** (547 + 3 new) |
| `npx tsc --noEmit` / `npm run lint` / `git diff --check` | PASS |
| `art-image-assets.cjs --check` | 19 assets, 19 staged, 0 approved — unchanged |
| `art-literature-theatre-audit.cjs --require-ready` | exit 1 (expected readiness gate) |
| `art-content-impact` Literature+Theatre, 20 attempts | 6,000 requests: **5,760 ready, 240 insufficient, 0 failures; validation clean**. The same 12 combinations fail (l1/p2 and l5/p2 in both subtopics, A/B/C) |
| `art-learning-impact` Literature+Theatre | 6,000: 120 ready, 40 insufficient, 5,840 prerequisite-blocked, 0 violations — fresh learners still stop at l1/p2/A |
| Same sweeps with development images | identical (5,760 / 6,000 ready; 0 failures) |
| Completed Art regression (4 subtopics, dev images): content + learning | 12,000/12,000 ready, 0 failures/violations |
| Content validation (`validateContent`) | no errors |

Net effect on readiness: **none yet** — Literature and Theatre remain **144/150** each. All gains are in certified cells, below.

## Where each blocked placement stands (A stage, after this session)

Cells = off-diagonal "work ≠ label" pairs still unevidenced inside the best overlap-free matching quartet; "doubtful" = pairs I judged not honestly certifiable.

| Placement | Status |
|---|---|
| **Literature l1** | R1 removed the documented Gothic/Bildungsroman overlaps; A now has one quartet needing 11 cells (B 10/20, C 34/45 pools). **But** every quartet in R1's A needs cells that cannot be honestly certified (e.g. Moby-Dick ≠ Gothic, The Scarlet Letter ≠ Gothic/Romance, Frankenstein ≠ Adventure [Arctic frame], Dracula ≠ Adventure). A search of all 4,620 arrangements, treating those doubtful pairs as blocked, finds **zero** arrangement whose A, B and C each keep a certifiable quartet. Matching therefore remains blocked; adding more ordinary-form negatives here would not unlock the lesson, so none were added beyond those listed. |
| **Literature l5** | **Re-staged (rank 1).** A has a fully evidenced matching quartet {Fahrenheit 451, Joy Luck Club, Maltese Falcon, Riders} (all 11 cells; provisional AI-authored evidence). **Still blocked:** (1) *ordinary forms* — The Great Gatsby and Their Eyes Were Watching God have no certified wrong options among the A answers ("six assessable facts required; has 4"); each needs ≥2 sourced work ≠ label cells against Dystopian / Family saga / Detective / Western (or Modernist/Bildungsroman for each other, which are doubtful); (2) *B and C* — pools hold only three A facts, so they currently need about 6 more cells each (e.g. War-fiction cells for A Farewell to Arms). Note: before the re-staging B had a certified quartet; the move traded B for A (A was the harder blocker). |
| **Theatre l1** | Ordinary forms: Hamlet now has 4 certified wrong options. **A** is blocked only by matching (2 cells, one — *Earnest ≠ Heroic comedy* — not certifiable; no definitional source for "heroic comedy"). **B and C are also short on ordinary forms** (The Bacchae has 0 wrong options; School for Scandal, She Stoops, Faustus, Tempest have 1) — the planner reports only the first shortage. Every other quartet needs Realist-drama cells (blocked by decision 2). See the matching-architecture section for the duplicate-card + two-fact re-staging path. **Unresolved.** |
| **Theatre l5** | No re-staging of the existing 11 reduces the A requirement below 10 cells, and those rely on overlap-prone labels (Tragedy, Tragicomedy, Comedy of menace [also grouped with the Absurd], Memory play; Drama is valid for every play). With the Oklahoma! reserve (4 moves, Our Town leaves the plan) the best quartet still needs 12 cells including Birthday Party ≠ Absurdist drama (doubtful). **Not recommended to pursue now; unresolved.** |

## Matching-architecture investigation (read-only; findings are NOT committed)

Nothing in the engine, UI, content or evidence was changed for this investigation. All experiments ran in scratch copies (monkey-patched in memory, hypothetical evidence labelled `SIMULATION`) outside the repo.

### A. Established facts (verified in code or by running the repo's own functions)

1. **Grading is already identity-based, not positional.** `isMatchingPairCorrect` ([answerValidation.ts](../src/quizEngine/answerValidation.ts)) accepts a card when its `answerIdentity` is in the left item's `acceptedAnswerIdentities`; the generator fills that list from every displayed card the evidence layer rates `valid` for that work. Duplicate-identity cards are therefore **already interchangeable at grading time**, and many-to-many acceptance already exists in the data. `attemptMatchingPair` locks left→right index and rejects an already-used right card, so identical cards are consumed one at a time. Verified with the real functions: Dracula→the *other* Gothic card locks, Wuthering→the remaining Gothic card locks, Moby→the manners card is rejected, and a swapped-Gothic assignment grades correct.
2. **Where the engine actually forbids the proposed pattern** ([exerciseFactory.ts](../src/quizEngine/exerciseFactory.ts) `matchingCandidates`/`compatible`, [matchingSafety.ts](../src/quizEngine/matchingSafety.ts), `quizCompositionViolations`): (a) displayed answer label, answer text and `equivalentAnswers` must differ; (b) **every** cross cell must be `valid` or `invalid` — `unknown` disqualifies the pair; (c) at least one `invalid` cell; (d) the valid-matrix must be `isPermanentlyLockable`; (e) the final validator rejects identical right-hand text (`hasIndistinguishableAnswers`).
3. **Valid overlaps are already allowed** when the quartet stays lockable. Exhaustive check of all 4,096 possible valid-patterns on four cards (own card always valid): **exactly 15 are permanently lockable — Bell(4), the number of partitions of four items.** `isPermanentlyLockable` ⇔ the "also valid for" relation is an **equivalence relation**: the four works split into blocks that accept exactly the same cards, with block size = number of cards in the block. Any partial overlap (a work valid for another work's card but not vice-versa, e.g. Jane Eyre valid for Gothic and Bildungsroman while Dracula/Wuthering accept only Gothic) makes the quartet unlockable, and no extra evidence or duplicate card can repair that.
4. **Edge cases run against the real code:** locally-valid dead end — Jane Eyre→a Gothic card is semantically valid, is accepted, and the exercise can then **no longer be completed** (completion check false) while Jane→Bildungsroman remains completable. Fully identical quartet is lockable but discriminates nothing. Same text with different identity is correctly flagged indistinguishable. Legacy pairs without identity metadata are already text-interchangeable.
5. **UI and persistence:** the quiz screen keys cards by `pair.id` + index, selects by index, never de-duplicates by text, and keeps matching state in React state only. [src/state/progress.ts](../src/state/progress.ts)/`lib/progress.ts` store completion, XP, streaks and `learnedFactIds` — never exercise payloads. Saved progress and the UI therefore need no migration for duplicate cards.
6. **Global relaxation changes existing content.** An unconditional "allow identical-identity cards" patch (scratch) changed **158 of 2,880** ready Literature/Theatre quizzes and **119 of 1,800** sampled quizzes in the four completed Art subtopics (0 failures, all still valid) — e.g. two works sharing an answer now appear as two identical cards. This should therefore be opt-in per relation.
7. **Duplicate cards alone unlock none of the four blocked placements** (prototype sweep: the same 12 combinations stay unready). Reasons are below.

### B. Findings per blocked placement (current staging; evidence as committed)

"Cells" = still-unevidenced work ≠ label pairs inside the cheapest lockable quartet; "blocked" = pairs I judge cannot honestly be certified. Duplicate-aware rule = identical-identity cards allowed as one interchangeable block, ≥3 distinct answers per exercise.

| Placement | Duplicates help? | Many-to-many help? | Evidence sufficient? | Can A, B, C become feasible? | Independent ordinary shortages |
|---|---|---|---|---|---|
| **Literature l1/p2** | Not in A (no repeated label after R1). B 11→8 cells, C 11→6, via repeated Adventure/Gothic/Bildungsroman cards. | No: the documented partial overlaps (Frankenstein/Jane Eyre/Pride and Prejudice share Gothic/Bildungsroman readings) are non-equivalence and stay unsafe. | No: A needs 11 cells, several blocked. | **No** under fail-closed. With duplicates the only arrangements need 4 stage moves and ≥10 cells per stage with most pools infeasible. | Severe: 5 of 6 A facts have 0 certified wrong options; Pride and Prejudice has 1. |
| **Literature l5/p2** | A already certified without duplicates. Duplicates cut C 8→6 cells (Maltese/Red Harvest both Detective; Mango Street/Ántonia both Bildungsroman). | n/a | A: yes (11 AI-authored cells, provisional). B/C: ~6 cells each (War, Modernist/Bildungsroman cells — doubtful). | A yes; B/C need more sourced cells; fresh-learner path blocked until then. | **The Great Gatsby and Their Eyes have 0 wrong options** ("six assessable facts required; has 4"); B introductions A Farewell to Arms, My Ántonia, Mango Street and C's Red Harvest/Oz also have 0. |
| **Theatre l1/p2** | **Yes — decisive** in combination with re-staging (below). Tartuffe and She Stoops to Conquer (both "Comedy") become one interchangeable block. | Not needed. | A: with re-staging only **1 cell** (She Stoops ≠ Revenge tragedy); B/C: 1 cell (School for Scandal ≠ Revenge tragedy). | **Matching: yes** (see simulation). Ordinary: B/C still blocked by The Bacchae (0 wrong options) and 1-option facts. | A none (all six have ≥2). B: Bacchae 0, School 1, She Stoops 1; C: Faustus 1, Tempest 1. |
| **Theatre l5/p2** | No. | No. | No: most cells use overlap-prone labels (Tragedy, Tragicomedy, Drama [valid for every play], Comedy of menace ↔ Absurd). | **No** (0 arrangements under fail-closed, even with duplicates). | Severe: A facts have 0–1 wrong options. |

Hypothesis-tested end to end (scratch, **hypothetical** cells and a two-fact re-staging: She Stoops to Conquer B→A, The Importance of Being Earnest A→B): Theatre l1/p2 **A generated 20/20 through the real planner** with matching {Hamlet→Revenge tragedy, Antigone→Greek tragedy, Tartuffe→Comedy, She Stoops→Comedy}; all eight exercises, quotas and checks passed. B and C did not: B stopped on The Bacchae having no assessable form.

### C. Answers to the ten investigation questions

1. The model already identifies duplicates and valid overlaps: `answer.identity`, `context.evaluate` (valid/invalid/unknown) and `acceptedAnswerIdentities` exist. Missing: any statement that the *four-card valid relation is an equivalence relation*, and a per-relation opt-in.
2. Duplicate cards need **no schema change**: cards already carry distinct instance `id`s (the concept id) and shared `answerIdentity`. Required: relax `compatible()` and `hasIndistinguishableAnswers` for identical-identity, mutually-valid cards.
3. Validate by **identity + verified relationships** (already done). Fixed card-to-card assignment is not used.
4. **Locking and feedback:** a valid pair locks permanently and turns green; an invalid pair flashes red for 800 ms; with duplicate cards either identical card is accepted and the other remains for the next work in the block.
5. Safety is **a property of the quartet, not of the move**: pick only quartets whose valid relation is an equivalence relation (= permanently lockable), so every verified-valid move can always be completed.
6. **Yes, certify before presenting** (offline, exhaustive over four cards). Lockability implies a complete valid assignment exists.
7. Several works with several verified relations: allowed only if they form interchangeable blocks; otherwise exclude that quartet. Dynamic grading cannot fix it fairly (see option comparison).
8. **Unknown is never presented.** Treating it as wrong would punish a possibly-true classification; treating it as right would certify unverified claims. A "neutral/unconfirmed" third feedback state would break red/green permanent-lock semantics.
9. The existing structures, UI and saved progress support it; the change is confined to generation + validation. Completed subtopics stay unchanged **only if it is opt-in per relation**.
10. One four-pair exercise, 8 exercises, A/B/C quotas and the six-fact rule are unaffected: the matching exercise still uses four of the six facts; duplicates only change which four can be chosen.

### D. Architecture options compared

| Option | Correct under verified relations | Fair (never rejects a valid answer) | Lock-compatible | Notes |
|---|---|---|---|---|
| 0. Status quo, add evidence only | yes | yes | yes | blocks Theatre l1 B/C-style repeated-label cases |
| **1. Interchangeable-block matching (recommended)** | yes | yes | yes | offline certification; opt-in per relation |
| 2. Dynamic gate: accept a valid pair only if a completion remains | yes | **no** — rejects verified-valid answers (the "hidden assignment") | yes | rejected |
| 3. Reusable label cards (many-to-one bank) | yes | yes | no (cards not consumed) | degenerate with broad labels (Drama accepts everything); changes the exercise |
| 4. General partial-overlap many-to-many with re-assignment/undo | yes | partly | **no** | violates permanent lock |

### E. Recommended architecture (NOT implemented)

**Interchangeable-block matching, opt-in per relation.** A matching exercise is certifiable iff: (i) all 12 cross cells are verified `valid` or `invalid`; (ii) the `valid` relation among the four items is an equivalence relation (blocks of interchangeable cards); (iii) at least three distinct answer identities and at least one `invalid` cell (quality rule — avoids "odd one out" exercises); (iv) subject/stimulus cards are distinct. Cards of one block share `answerIdentity`, carry distinct instance ids, and may display identical text.

- **Data model:** reuse `MatchingPair`; add an opt-in flag in the relation policy (e.g. `allowInterchangeableAnswerCards`), enable first for `genre_of_novel`/`genre_of_play`. No change to `Concept`, evidence or progress.
- **Engine:** relax `compatible()` for same-identity mutually-valid pairs when the policy flag is on; add a pure `matchingBlocks(pairs)` helper (equivalence check + ≥3 identities) used by the generator and by `quizCompositionViolations`; make `hasIndistinguishableAnswers` identity-aware (same text OK only when identities match). Seeded variation and the search budget stay as is (the pool graph grows modestly).
- **UI:** none required (index-based selection, unique keys). Optional: accessibility labels for identical cards.
- **Tests:** property test of the 4,096-pattern/Bell(4) characterization; interaction tests for identical cards (the cases above); dead-end quartet never generated; unknown cell never presented; opt-in off ⇒ byte-identical output for completed subtopics; coverage and fresh-learner sweeps; deterministic seeds.
- **Roadmap link (item 4, assessment alternatives):** same identity/evidence layer; verified assessment-only alternatives would feed *ordinary* options and false statements (the Bacchae/Gatsby-type shortages above) but cannot enter matching cards, so they complement rather than replace this change.

### F. Hypotheses and risks (not yet proven)

- Theatre l1 would need, on top of the architecture: re-staging She Stoops→A and Earnest→B; sourced cells *She Stoops ≠ Revenge tragedy* and *School for Scandal ≠ Revenge tragedy* (same kind as the four existing required-main-action certificates); and ordinary-form evidence for The Bacchae (≥1–2 wrong options; note its Dionysus-vengeance plot makes "≠ Revenge tragedy" **not** safely certifiable) and the 1-option facts.
- Quality: a block of three identical cards is legal but pedagogically weak — hence the ≥3-distinct-answers rule.
- Literature l1 and Theatre l5 appear unresolvable with the current works and fail-closed evidence regardless of architecture.
- Cell judgments marked "blocked/doubtful" are my conservative editorial calls, not source findings.

## Remaining decisions for the user

1. **Approve (or reject) the recommended interchangeable-block matching architecture** (opt-in per relation, genre relations first, ≥3 distinct answers). Not requested of Codex yet.
2. **Theatre l1:** approve re-staging She Stoops to Conquer→A / The Importance of Being Earnest→B (only meaningful with item 1) and authorise sourcing the two revenge-tragedy cells plus Bacchae/ordinary-form evidence.
3. **Literature l5:** authorise ≥2 wrong-option cells each for The Great Gatsby and Their Eyes Were Watching God, then the B/C cells.
4. **Literature l1 and Theatre l5:** accept as unresolved (recommended) or direct a broader change (new works / reserves).
5. Whether to commit these findings (not committed) and whether display-different same-identity cards (e.g. "Bildungsroman" vs "Coming-of-age fiction") may share a block.

## Exact next actions

1. Wait for the user's decision on architecture and Theatre l1/Literature l5 evidence. No engine/UI/content changes until approved; no push or merge.
2. If approved, implement in small validated steps: (a) policy flag + `matchingBlocks` + tests with the flag off (no output change), (b) enable for genre relations, (c) Theatre l1 re-staging + sourced cells, (d) Literature l5 ordinary/B/C evidence; run all validation after each; update this file; checkpoint with explicit file paths.
3. Always update this file before ending a session.

## Validation commands

```sh
npm test -- --runInBand --watchman=false --testTimeout=60000
npx tsc --noEmit && npm run lint && git diff --check
node scripts/art-image-assets.cjs --check
node scripts/art-genre-compatibility.cjs          # matrices; read-only
node scripts/art-literature-theatre-audit.cjs --require-ready   # exits 1 until all genre shortages are repaired
node scripts/art-content-impact.cjs --subtopics=literature,theatre --attempts=20
node scripts/art-learning-impact.cjs --subtopics=literature,theatre --attempts=20
node scripts/art-content-impact.cjs --subtopics=painting,sculpture,architecture,design --attempts=20 --development-images --require-ready
node scripts/art-learning-impact.cjs --subtopics=painting,sculpture,architecture,design --attempts=20 --development-images
```

Reviews in this repo are source/work-feature comparisons by Codex or Claude Code, **not independent human editorial certification**.
