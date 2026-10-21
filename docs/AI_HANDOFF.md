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
| Documentation checkpoint | `2055707` (matching-architecture findings); newer duplicate-target findings below are uncommitted |
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

## Duplicate-target matching: minimal generator change (read-only investigation; NOT implemented, NOT committed)

Direction approved by the user: support **duplicate canonical target answers** in matching (e.g. Dracula and Wuthering Heights both → "Gothic fiction"), opt-in, reusing today's identity-based grading and the unchanged red/green UI. This **supersedes** the broader "interchangeable-block" recommendation above wherever they differ; the simpler rule below is strictly safer and costs almost no feasibility.

### Established facts
- Grading, the UI and saved progress already support interchangeable identical cards (see the section above). Only generation and the final validators forbid duplicates.
- Exact places that must change: `matchingCandidates`/`compatible()` in [exerciseFactory.ts](../src/quizEngine/exerciseFactory.ts); `hasIndistinguishableAnswers` in [matchingSafety.ts](../src/quizEngine/matchingSafety.ts) (callers unchanged); the policy type/builder in [relationPolicies.ts](../src/quizEngine/relationPolicies.ts).
- Existing tests that must keep passing unchanged: `semanticValidation.test.ts` "matching excludes indistinguishable RHS cards…" (duplicate answers stay `unavailable` for `created_in_decade`/`painted_by`), `answerValidation.test.ts` (legacy identity grading), `engineHardening.test.ts` (duplicate values, no duplicate MCQ cards).
- Scratch prototype of the recommended rule on the real planner (flag on `genre_of_novel`/`genre_of_play` only): Literature+Theatre 2,880/3,000 ready (identical to today), 0 failures, 0 duplicate cards generated in the currently-ready placements; completed Art sample 1,800/1,800 ready, 0 duplicates, identical counts (the unflagged path is the original expression, so output is unchanged by construction).

### Smallest recommended change (rule)
For a relation with the new opt-in flag, a matching quartet is acceptable only if:
1. Cards with the **same canonical target** (identical `answer.identity`, verified `valid` both ways) **and exactly the same displayed text** are interchangeable; their `acceptedAnswerIdentities` are identical. Same identity with different display text is not paired (deferred).
2. **Every pair with different targets must be verified `invalid` in both directions.** No verified-valid alternative and no `unknown` may be displayed. (Stricter than today's "valid overlap allowed if lockable"; this is what keeps the exercise unambiguous and canonical-target-only. A work's other true classifications simply cannot appear as competing cards.)
3. At least three distinct targets (at most one duplicated pair) and at least one `invalid` cell.
4. The existing `isPermanentlyLockable` check stays as defence in depth.
Left-side distinctness (subject, label, stimulus) is unchanged. Unflagged relations keep today's exact code path.

### Why it is safe
- Without cross-target valid cells, the valid relation is exactly "same target", an equivalence relation (verified exhaustively: of 4,096 four-card patterns, 15 = Bell(4) are lockable), so every verified-correct selection leaves a completion and nothing is silently rejected.
- Unknown cells cannot appear, so no unverified pair is ever graded.
- No grading, UI, progress, content, evidence or curriculum change; existing subjects unaffected unless flagged.
- **No `interchangeableTargets` marker is needed (decided).** The validators already check every pair against `context.evaluate`, lockability and "equivalent cards graded wrong" from the exercise's own data; identical text with the same defined `answerIdentity` and identical accepted sets is interchangeable by construction. The unflagged generator path is unchanged, and the byte-identical baseline plus the existing `duplicateMatching: 0` assertions (artPilot, artContent, architectureDesignContent tests; completed-Art scopes only) catch any leak.

### Expected effect on the four placements (existing evidence only; no new research)
| Placement | Helps? | Evidence still needed | A / B / C matching | Ordinary shortages that remain |
|---|---|---|---|---|
| Literature l1/p2 | B and C only (cells 11→9); A unchanged | A: 11 cells incl. uncertifiable ones | none certified | severe: 5 of 6 A facts have 0 wrong options |
| Literature l5/p2 | marginal (C 8→7) | A certified already; B/C ≈6–7 cells | A yes; B/C no | Gatsby, Their Eyes (A); B/C introductions have 0 wrong options |
| Theatre l1/p2 | B 3→1 cell, C 6→3; A needs re-staging to benefit | A: 2 cells, one uncertifiable (Earnest ≠ Heroic comedy) | none certified today | B/C: The Bacchae 0, four facts 1 |
| Theatre l5/p2 | C only (9→7) | A 11 cells, overlap-prone labels | none | severe |
**Implementing the change alone makes no blocked placement generate**; it lowers the evidence required in B/C pools and makes the Theatre l1 re-staging path viable. Ordinary-question shortages are independent and remain.

### Remaining limitations and risks
- **Final user decisions:** keep ≥3 distinct targets among the four pairs; duplicate cards must display exactly the same text; no different-label sharing for now; no new abstractions.
- Display-different same-identity cards (e.g. "Bildungsroman" vs "Coming-of-age fiction") are intentionally NOT paired; Literature l1/l5 B/C pools containing both stay unavailable for matching until labels are unified or this is revisited.
- Flagging the genre relations changes (narrows) the matching candidate set for genre reviews (p3/p5/l10); readiness was unchanged in the prototype, but the sweeps must be re-run after implementation.

### Final Codex implementation prompt (approved direction; copy from here)

```text
TASK: Opt-in duplicate-target matching (Quiz Game). Minimal generator + safety change.

Read first: AGENTS.md, CLAUDE.md, docs/AI_HANDOFF.md (section "Duplicate-target matching: minimal generator change").
Repo: /Users/simaybayatli/.codex/worktrees/aeb2/quiz-game, branch codex/literature-theatre-content. Verify pwd, branch and `git status` first; stop and report any mismatch.
Rules: do NOT commit, push, merge, stage, reset, clean, stash or touch .git_backup_corrupt/. Leave all work uncommitted for independent review. Do not edit content, evidence, priorities, staging, curricula, UI, grading (answerValidation.ts, matchingInteraction.ts), progress code, or MCQ / true-false / fill-blank logic. Add no new abstractions, helper modules, exercise metadata fields, or relation-specific logic in the engine (no mention of genres, Gothic fiction or specific works in engine code).

GOAL
Let a four-pair matching exercise contain two cards with the SAME canonical target answer and EXACTLY the same displayed text (e.g. two works whose taught answer is "Gothic fiction"). The two target cards are interchangeable (existing identity-based grading already does this); a correct pair locks permanently and shows the existing green feedback; a wrong choice shows the existing red feedback; the other identical card stays available for the other work. Opt-in per relation: every relation without the flag must behave exactly as today. Initially enable it only for genre_of_novel and genre_of_play.

BEFORE EDITING
1. Baseline: for painting, sculpture, architecture and design, generate matching exercises for a fixed seed set (all part/variant cases, at least 3 seeds, via buildQuizResult or measureGenerationCoverage) and save the JSON/hashes in a test fixture. After your change these must be byte-identical.
2. Prerequisite test, written and passing BEFORE any code change: isMatchingPairCorrect, attemptMatchingPair and gradeMatchingAssignment already treat two cards with equal answerIdentity and equal acceptedAnswerIdentities as interchangeable (either card accepted for either work; locked cards cannot be reused). If this is false, STOP and report.

CHANGES (all small)
A. src/quizEngine/relationPolicies.ts: add `readonly allowDuplicateTargetAnswers?: boolean` to RelationPolicy (undefined = false). Add a small readonly list of relation ids (same style as protectedRelationIds) containing exactly "genre_of_novel" and "genre_of_play", and set the flag true for those relations only in reviewedPolicy. First verify both relations resolve through reviewedPolicy in targetRelationPolicies; change no other relation, no legacy policy.
B. src/quizEngine/exerciseFactory.ts, matchingCandidates / compatible(a, b), applied ONLY to groups whose getRelationPolicy(...).allowDuplicateTargetAnswers === true (unflagged groups run the original expression and path unchanged):
   - sameTarget(a, b) = context.claim(a).answer.identity === context.claim(b).answer.identity AND normalised displayed matching answer text (getAnswerLabel(x, "matching")) is exactly equal AND context.evaluate(a, b).verdict === "valid" AND context.evaluate(b, a).verdict === "valid". A sameTarget pair skips only the existing "answer label differs", "answer text differs" and "!equivalentAnswers" tests.
   - a pair with the same identity but different displayed text is NOT compatible (do not pair it).
   - every other pair must have evaluate(a, b) AND evaluate(b, a) === "invalid" (never "valid", never "unknown") and still pass all existing distinctness tests. Missing evidence is never treated as false.
   - left-side distinctness (subject identity, matching label, stimulus) is unchanged for all pairs.
   - when four concepts are selected (flagged groups only), additionally require at least 3 distinct answer identities among the 4 (so at most one duplicated pair) and at least one "invalid" cell. Keep the existing isPermanentlyLockable check and the existing pair / acceptedAnswerIdentities construction unchanged.
C. src/quizEngine/matchingSafety.ts: change hasIndistinguishableAnswers itself (same signature, same callers, no options argument): identical normalised right-hand text is still "indistinguishable" EXCEPT when both pairs have the same defined answerIdentity and identical acceptedAnswerIdentities (as sets; treat a missing list as empty). Identical text with different or missing identity stays indistinguishable. Do not add an exercise-level marker: the validators (quizCompositionViolations, exerciseValidityViolations) already check every pair against context.evaluate, lockability and "equivalent cards graded wrong", so a duplicate that is not semantically interchangeable still fails.
D. Leave the duplicateMatching counter and its existing `duplicateMatching: 0` assertions (artPilot, artContent, architectureDesignContent tests; completed-Art scopes) untouched. If a change makes one of them fail, report it instead of weakening it.

TESTS (new file src/quizEngine/__tests__/duplicateTargetMatching.test.ts; all existing tests stay unchanged and passing)
1. Policy: allowDuplicateTargetAnswers is true for exactly genre_of_novel and genre_of_play across targetRelationPolicies and legacy policies, and false/undefined for every other relation.
2. Generation (synthetic certified fixtures via the existing helpers, with a policy override setting the flag): two records sharing a target and exact display text plus two distinct targets, all cross-target cells verified "invalid" -> status "generated", exactly 4 pairs, the two duplicate cards have identical right text and answerIdentity, distinct pair ids and identical acceptedAnswerIdentities, quizCompositionViolations and exerciseValidityViolations return [].
3. Interaction with the real attemptMatchingPair / gradeMatchingAssignment: either duplicate card is accepted for either duplicated work and locks permanently; the remaining identical card is accepted for the other duplicated work; a locked card cannot be reused; a wrong card yields the existing wrong state; both card orderings grade correct.
4. Property test: over all 4096 off-diagonal valid-patterns of four cards (own card valid), isPermanentlyLockable is true for exactly 15 patterns (the partitions of 4); every exercise generated across many seeds for the flagged fixtures has a partition structure with >= 3 distinct identities.
5. Overlapping classifications: a flagged fixture where a work also has a verified-valid alternative shown on another card (including a one-way validity) -> generation returns "unavailable"; it never produces a quartet that grades the alternative wrong or leaves a dead end.
6. Unknown relationships: a quartet needing any "unknown" cross cell -> "unavailable"; no generated exercise contains an unknown cell.
7. Degenerate / unsolvable: fewer than 3 distinct targets (3+1, 2+2, 4 identical) -> "unavailable"; same identity with different displayed text is never paired.
8. Validator: identical right text with the same defined answerIdentity and identical accepted sets is not flagged; identical text with different identity, or with missing identity, is still flagged ("Matching answers must be visibly distinct").
9. Flag off: the existing duplicate-answer fixtures for created_in_decade and painted_by remain "unavailable"; no new duplicate cards appear for any unflagged relation.
10. Determinism: the same seed returns the identical exercise; different seeds vary where candidates allow.
11. Regression: the saved baseline for the four completed Art subtopics is byte-identical.

VALIDATION (run all and report exact results)
npm test -- --runInBand --watchman=false --testTimeout=60000
npx tsc --noEmit
npm run lint
git diff --check
node scripts/art-literature-theatre-audit.cjs --require-ready   (expected exit 1)
node scripts/art-content-impact.cjs --subtopics=literature,theatre --attempts=20   (also with --development-images)
node scripts/art-learning-impact.cjs --subtopics=literature,theatre --attempts=20   (also with --development-images)
node scripts/art-content-impact.cjs --subtopics=painting,sculpture,architecture,design --attempts=20 --development-images --require-ready
node scripts/art-learning-impact.cjs --subtopics=painting,sculpture,architecture,design --attempts=20 --development-images
Expected: Literature and Theatre stay 144/150 ready each (this change alone does not unlock the blocked genre placements; evidence and ordinary-question shortages remain), 0 failures/violations, completed Art 12,000/12,000, fresh learners unchanged. Report any difference, especially in genre p3/p5/l10 review matching and any newly generated duplicate cards.

DELIVER
List the changed files with a one-line rationale each, the test and validation results, and any deviation from this prompt. Update docs/AI_HANDOFF.md (what changed, results, exact next action, git status). Leave everything uncommitted.
```

## Remaining decisions for the user

1. **Run the final Codex prompt above** (user approval to start implementation is still pending; Codex has not been invoked). The broader interchangeable-block architecture is NOT being pursued.
2. **Theatre l1:** approve re-staging She Stoops to Conquer→A / The Importance of Being Earnest→B (only meaningful once duplicate-target matching exists) and authorise sourcing the two revenge-tragedy cells plus Bacchae/ordinary-form evidence.
3. **Literature l5:** authorise ≥2 wrong-option cells each for The Great Gatsby and Their Eyes Were Watching God, then the B/C cells.
4. **Literature l1 and Theatre l5:** accept as unresolved (recommended) or direct a broader change (new works / reserves).

## Exact next actions

1. User approves and runs the Codex prompt; Claude Code then reviews the uncommitted diff independently (rule, tests, baseline, sweeps) before any checkpoint.
2. After the engine change is reviewed and checkpointed: Theatre l1 re-staging + sourced cells, then Literature l5 ordinary/B/C evidence (each needs the user's go-ahead).
3. No push or merge to `main` without approval. Always update this file before ending a session.

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
