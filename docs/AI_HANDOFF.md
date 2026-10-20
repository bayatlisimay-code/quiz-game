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
| Uncommitted after the second checkpoint | none until the next edit |
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

## Changes made since the checkpoint (uncommitted)

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
| **Theatre l1** | Ordinary forms: Hamlet now has 4 certified wrong options (all forms available). Matching: best quartet {Antigone, Cyrano, Hamlet, Importance of Being Earnest} has **2 cells left**: *Cyrano ≠ Comedy of manners* (plausible) and *Earnest ≠ Heroic comedy* (**not certifiable** — no definitional source for "heroic comedy" beyond Rostand's own subtitle). Every other quartet needs Realist-drama cells (blocked by decision 2). With those and Tartuffe/heroic-comedy cells blocked, the current staging has no certifiable quartet; the only re-stagings that do (bring The Tempest into A) leave B/C with 4/20 and 1/45 feasible pools — fragile, not recommended. **Unresolved.** |
| **Theatre l5** | No re-staging of the existing 11 reduces the A requirement below 10 cells, and those rely on overlap-prone labels (Tragedy, Tragicomedy, Comedy of menace [also grouped with the Absurd], Memory play; Drama is valid for every play). With the Oklahoma! reserve (4 moves, Our Town leaves the plan) the best quartet still needs 12 cells including Birthday Party ≠ Absurdist drama (doubtful). **Not recommended to pursue now; unresolved.** |

## Remaining decisions for the user

1. Literature l1 / Theatre l1 / Theatre l5: accept as unresolved, or direct further work (see table). Theatre l1 is blocked **only** by matching (2 cells, one not certifiable).
2. Literature l5: authorise more sourced work/label cells for Gatsby and Their Eyes (ordinary forms) and for the B/C pools.
3. Matching architecture (read-only investigation requested next): see the investigation section once added.

## Exact next actions

1. Await the user's decision on the matching-architecture investigation and the items above. Do not implement engine changes without approval; do not push or merge.
2. If Literature l5 evidence work is approved: source ≥2 wrong options each for Gatsby and Their Eyes (A), then the B/C cells; re-run all validation; update this file.
3. Always update this file and re-run the validation commands before ending a session.

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
