# AI handoff — Quiz Game (Codex ⇄ Claude Code)

Shared rules: [AGENTS.md](../AGENTS.md) (authoritative) · [CLAUDE.md](../CLAUDE.md). This file holds **current task state only**; it links to, and does not duplicate, the application docs.

**Last updated:** 2026-10-20 (third Claude Code session) — investigation only; **no content or code changed**; no evidence was added to the repo because the user's checkpoint-commit approval gate is still open. Only `AGENTS.md`, `CLAUDE.md` and this file were created/edited by Claude Code. Scratch analysis scripts live outside the repo (Claude scratchpad) and are reproducible from `scripts/art-genre-compatibility.cjs`.

## Repository

| | |
|---|---|
| Repo | `bayatlisimay-code/quiz-game` (origin `https://github.com/bayatlisimay-code/quiz-game.git`) |
| Working directory | `/Users/simaybayatli/.codex/worktrees/aeb2/quiz-game` |
| Branch | `codex/literature-theatre-content` |
| HEAD / baseline | `43f1859a4a825f10841a8dc29a343865a01053f0` — "feat(art): complete architecture and design curricula" |
| Staged | none |

## Restrictions (explicit)

- **No commit, push, merge, rebase, staging, stash, reset, clean, restore or worktree/branch switch** without the user's explicit approval in chat.
- **No image activation** (no production image bindings, no R2 upload, no registry/asset writes). Literature and Theatre are text-only. Design stays "Coming soon".
- Do not modify completed Painting/Sculpture/Architecture/Design content (baseline hashes are guarded by tests: 1,192 concepts / 4,730 evidence records — see [content doc](art-literature-theatre-content.md)).
- Do not change primary classifications to improve quiz-generation coverage; do not invent distractors or negatives.

## Uncommitted work inventory (as of 14:42)

All of it is Codex's Literature/Theatre work from earlier sessions, plus the 3 files this session added. **10 tracked files modified, 34 untracked.**

Modified (10): `data/activeArtContent.ts`, `data/artContent/reviewedDefinitions.ts`, `data/artContent/sourceAuthoring.ts`, `data/artRelations.ts`, `src/quizEngine/assessmentTemplates.ts`, `assessmentTypes.ts`, `relationDefinitions.ts`, `templates.ts`, `src/quizEngine/__tests__/artContent.test.ts`, `questionTemplates.test.ts`.

Untracked, from Codex (31):
- `data/artContent/`: `approvedGenrePrimaries.ts`, `genreCompatibility.ts`, `genreReserves.ts`, `literaryAuthoring.ts`, `literaryGenres.ts`, `literatureAncient.ts`, `literatureCharacters.ts`, `literatureClassicNovelists.ts`, `literatureClassics.ts`, `literatureModernNovelists.ts`, `literatureModernNovels.ts`, `literaturePoetry.ts`, `literatureShortFiction.ts`, `theatreCharacters.ts`, `theatreFirstPlays.ts`, `theatreGenres.ts`, `theatrePlays.ts`, `theatrePlaywrights.ts`, `theatreTerminology.ts`, `theatreVenues.ts`
- `docs/`: `art-genre-candidates.md`, `art-genre-completion.md`, `art-genre-quality-audit.md`, `art-literature-theatre-content.md`, `art-literature-theatre-validation.json`
- `scripts/`: `art-genre-compatibility.cjs`, `art-genre-reserves.cjs`, `art-literature-theatre-audit.cjs`
- `src/quizEngine/__tests__/`: `approvedGenrePrimaries.test.ts`, `literatureTheatreContent.test.ts`, `nonExclusiveClassification.test.ts`

Untracked, added this session (3): `AGENTS.md`, `CLAUDE.md`, `docs/AI_HANDOFF.md`.

Also present: `.git_backup_corrupt/` — **tracked in HEAD** (98 files, from an old commit "Extract quiz builder and add core buildQuiz tests"; unmodified). The user has said to **leave it untouched**. (An earlier version of this file wrongly called it git-ignored.)

## Objective

Make Literature and Theatre generation-ready (150/150 part×variant combinations each, fresh learners able to reach Level 10) **without** weakening correctness: final genre-primary corrections are applied; remaining work is evidence/content to make the four genre teaching placements assessable.

## Approved editorial decisions

The user's final 44-record primary classification (22 novel + 22 play records) is **recorded in the repo** and applied:
- Authoritative table: [art-genre-completion.md](art-genre-completion.md) → "Complete final primary table — applied".
- Authoritative code: [approvedGenrePrimaries.ts](../data/artContent/approvedGenrePrimaries.ts) (44 entries, verified by count; applied via `applyApprovedGenrePrimaries` in `data/activeArtContent.ts`; acceptance test `approvedGenrePrimaries.test.ts`).
- [art-genre-quality-audit.md](art-genre-quality-audit.md) and [art-genre-candidates.md](art-genre-candidates.md) are **superseded** (banner at top) — historical recommendations only. Do not implement them.
- Also approved: the two reserves (Nineteen Eighty-Four → Dystopian fiction; Oklahoma! → Musical), kept **outside** the active teaching plan; "Bildungsroman (coming-of-age fiction)" label on Jane Eyre and three modern records.
- **User confirmed (2nd session): the in-repo 44-record table is authoritative; do not revert to the provisional audit.** Verified against code: Pride and Prejudice → Novel of manners; Dracula → Gothic fiction; Moby-Dick → Adventure fiction; The Great Gatsby → Modernist novel; A Farewell to Arms → War fiction; Don Quixote → Satirical fiction; Cyrano de Bergerac → Heroic comedy; Our Town, Top Girls, "Master Harold"…and the Boys → Drama (all in `approvedGenrePrimaries.ts`). Nineteen Eighty-Four → Dystopian fiction and Oklahoma! → Musical are in `genreReserves.ts` (approved classifications, **not** active teaching facts; neither is mandatory in a teaching plan).
- Constraints on shortage repair (user, 2nd session): keep final primaries and existing verified records; reserves/alternative works may be investigated; **do not** introduce a work-feature assessment view or otherwise change the objective ("genre of the actual novel/play") without an explained design and approval; do not weaken semantic verification or the fixed quiz composition; prefer correctness over artificial 100 % coverage.

## Completed work (per Codex docs; test results re-verified below)

- 594 active teaching facts (297 Literature + 297 Theatre), 2,666 active evidence records, 305 source URLs; reviews are by Codex source comparison, **not independent human certification**.
- All 44 approved primaries applied at the authoring boundary with preserved fact IDs, stages, priorities and original evidence; +65 evidence assertions (44 primary, 7 extra positives, 14 work-specific negatives).
- Shared membership templates reworded to non-exclusive genre language; legacy Art wording updated to match.
- 9 earlier shortage placements repaired; 12 p3/p5 review combinations now generate in isolation.
- Latest Codex numbers: Literature 144/150 and Theatre 144/150 combinations ready; completed four Art subtopics 150/150 each with Level 10 reachable.

## Unfinished work / blockers

Twelve combinations fail (A/B/C × four placements); fresh learners stop at **l1/p2/A** in both subtopics:

| Placement | Problem |
|---|---|
| Literature l1/p2 (classic novel genres) | 0–1 verified incorrect options per A fact; no certified 4-pair matching group |
| Literature l5/p2 (modern novel genres) | same |
| Theatre l1/p2 (classic play genres) | 1–3 options per A fact; no certified matching group |
| Theatre l5/p2 (modern play genres) | 0–1 options; no certified matching group |

Cause is **content/evidence**, not an engine defect: positive genre facts exist, but work-specific *verified* negatives and a jointly compatible, permanently-lockable four-pair cohort are missing. Zero safe groups ≠ proof of impossibility. Reserve counterfactual (24 trials, 0 ready) shows adding the two reserves alone does not fix it. Details: [art-genre-completion.md](art-genre-completion.md) (§Remaining production shortages, §Reserve investigation) and per-option matrices in [the validation JSON](art-literature-theatre-validation.json) (`genreDiagnostics`).

## Validation results — run by Claude Code, 2026-10-20 ~14:00–14:42 +04

| Check | Result |
|---|---|
| `npm test -- --runInBand --watchman=false --testTimeout=60000` | **PASS** — 29/29 suites, 547/547 tests (392 s) |
| `npx tsc --noEmit` | PASS (exit 0) |
| `npm run lint` | PASS (no output beyond banner) |
| `git diff --check` | PASS |
| `node scripts/art-image-assets.cjs --check` | `{"assets":19,"staged":19,"approved":0,"stagingApproved":19}` — unchanged |
| `node scripts/art-literature-theatre-audit.cjs --require-ready` | **exit 1 (expected)** — readiness gate fails on the four genre placements; 594 facts authored |
| Content/learning impact sweeps, genre-compatibility script | **not re-run** this session; last Codex-reported figures (20 Oct) are in the table above and in [art-genre-completion.md](art-genre-completion.md) |

No failures other than the intentional readiness gate.

## Genre-shortage analysis (Claude Code, 2nd session — read-only, from `node scripts/art-genre-compatibility.cjs`)

**How verdicts work.** For a genre fact, a wrong option / false statement / matching cross-cell needs an *explicit sourced "invalid" assertion for that work × label* (`semanticEvidence.ts`; `stored-membership` policy: absence is `unknown`, never false). Distractors are drawn only from the other facts' answers in the same quiz pool (A = six facts, duplicate labels collapse). Matching needs a quartet of four distinct labels whose 12 off-diagonal cells are certified false and that is permanently lockable. The engine is behaving as designed.

Stage-A cell counts (off-diagonal, 30 per placement): **valid** = documented genuine overlap, **invalid** = certified false, **unknown** = no evidence.

| Placement (A) | valid | invalid | unknown | Best matching quartet |
|---|---:|---:|---:|---|
| Literature l1 | 8 | 1 | 21 | **none exists** — all 9 four-label quartets contain a documented true overlap |
| Literature l5 | 2 | 1 | 27 | overlap-free quartets exist; 11 cells to certify |
| Theatre l1 | 2 | 12 | 16 | Antigone, Cyrano/A Doll's House, Hamlet, Earnest: **5 cells** to certify |
| Theatre l5 | 6 | 1 | 23 | 2 overlap-free quartets; 11 cells to certify |

**Concrete examples**
1. *Literature l1, Dracula.* "Which of these genres describes Dracula?" would offer Science fiction, Bildungsroman, Adventure fiction, Novel of manners. None is a certified wrong answer: some are plainly unlikely (manners), others are defensible readings (adventure, SF), and nothing is sourced. Cannot build MCQ/false/options blank. This is correct refusal, not over-strictness, though the label pool is too close to Dracula to supply easy distractors.
2. *Literature l1 matching.* Gothic is documented-true for Dracula, Frankenstein, Jane Eyre and Wuthering Heights; Frankenstein is also documented as a Bildungsroman reading, as is Pride and Prejudice. Any 4-card quartet therefore contains a pair where one work legitimately accepts the other's label — the exact one-way-lock case the engine must reject (counterexample test exists). **No amount of extra negatives fixes this with the current six A works.**
3. *Theatre l5, "Drama".* Our Town / Top Girls / "Master Harold" are approved as **Drama**, which is documented-valid for every play in the pool (column of V in all six rows). Drama can never be a wrong option, and Our Town cannot join a matching quartet. Accepted consequence of the approved primaries; do not change them.
4. *Theatre l1 (closest).* Revenge tragedy / Greek tragedy / Comedy of manners already have 12 certified-false cells; only 5 more cells (plus one more option for Hamlet) separate it from a matching quartet.

**Not yet analysed:** B and C variants of these placements and the p3/p5 reviews (the pool is larger; they depend on the same evidence). A is the first blocker.

### Proposed solution (not implemented — needs user approval where marked)

1. **Content only, no engine change (can start now once approved to proceed):** author work-specific, source-verified negatives in `data/artContent/genreCompatibility.ts` for the cells above, prioritising the cheapest placements: Theatre l1 → Literature l5 → Theatre l5. Add only negatives backed by a work-feature comparison like the existing ones. Stop and report if a cell cannot be sourced honestly (e.g. debatable genres such as Dracula/Science fiction stay `unknown`).
2. **Teaching-plan decision (approval required):** Literature l1 cannot reach a safe matching quartet while A contains Jane Eyre, Wuthering Heights, Dracula and Frankenstein together. Options: re-stage which six works are introduced in A (e.g. bring in Scarlet Letter → Historical fiction or Don Quixote → Satirical fiction, moving Gothic duplicates to B/C; all records retained). Not done; changes stages/priorities.
3. **Possible small app-wide correction (approval required; design not yet validated against `curriculumPool`):** allow a relation to register *label-only distractors* (e.g. Western, Detective fiction, Sea story) that appear only as wrong options and are never taught or reviewed. Verification is unchanged — each (work, label) negative still needs reviewed evidence — but it widens the otherwise tiny pool for MCQ/false/options-blank. It does **not** help matching, which is limited to the four selected works' own answers. Recommend deferring until step 1 shows whether it is needed.
4. Not recommended: weakening `unknown` handling, blanket genre disjointness, or a work-feature assessment view (the user forbids the latter without approval).

## Third session: evidence investigation, re-staging proposal, distractor-label evaluation

**Mechanics confirmed from code.** (a) Stage = priority rank inside a placement: top 6 → A, next 3 → B, rest → C (`scheduleArtLearning`); re-staging therefore means changing the authored `priority`/reason of specific facts. (b) A quiz pool is exactly six facts (A: the six A facts; B: 3 of the A facts + 3 B; C: 2 A + 2 B + 2 C), tried over 1 / 20 / 45 combinations by priority. (c) Wrong options, false statements and matching cross-cells come only from those six facts' answers (`prepareQuizSession` → `getExerciseCapabilities(c, eligible, …)`). (d) A cell is certifiable only by an explicit sourced `invalid` assertion for that work × label (or a reviewed `disjoint-values`/`complete-set`); everything else is `unknown`.

### Theatre l1/p2 — what can and cannot be certified honestly

Current structural status (A / B / C pools having any overlap-free matching quartet): A 1/1 (5 cells to certify), B 10/20, C 26/45.

**Drafted, not yet in the repo** (sources actually retrieved this session; apply only after the checkpoint commit; reviewer label must say "Claude Code source/work-feature comparison, not independent human certification"):

| Draft cell (work ≠ label) | Basis | Confidence |
|---|---|---|
| Hamlet ≠ Comedy, ≠ Comedy of manners, ≠ Heroic comedy | Folger intro: revenge-tragedy form (`folger.edu/explore/shakespeares-works/hamlet/`); Folger Act 5 Sc. 2 text: Gertrude, Laertes, Claudius and Hamlet all die on stage, Fortinbras takes the crown — no comic restoration; existing `mw('comedy')` / `mw('comedy of manners')` definitions in `theatreGenres.ts`. Scope: structure of the play, not "tragedy excludes comedy" (gravedigger/Polonius comedy is incidental; the Folger further-reading page does not call the play comic). | Good |
| A Doll's House ≠ Comedy, ≠ Comedy of manners | `ibsen.uio.no/DRINNL_Du|intro_performance.html`: contemporary critics call it a realistic drama / "nearest" a tragedy; no source calls it comedy or tragicomedy; the Nora-leaves ending is serious. Comedy of manners must itself be a comedy (existing MW definition). | Moderate |
| Antigone ≠ Heroic comedy | Follows from the existing Antigone ≠ Comedy certificate; heroic comedy is Rostand's comedy designation (bard.org study guides already cited). | Good |

Scratch simulation (extra evidence injected into a copy of the semantic context, repo untouched): Hamlet goes from 1 to 4 certified wrong options (**all ordinary forms become available for Hamlet**), Doll's House 2→4, Antigone 3→4. Matching is still blocked: the best remaining quartet is {Antigone, Cyrano, Hamlet, Importance of Being Earnest} with **2 cells left**: *Cyrano ≠ Comedy of manners* (plausible: 1640s historical romance, not a satire of contemporary manners; Utah Festival/bard.org source already in repo; moderate) and ***Earnest ≠ Heroic comedy*** (**not certifiable**: no definitional source for "heroic comedy" exists beyond Rostand's own subtitle; I searched twice).

**Not certifiable without a user decision — "Realist drama" cells** (Antigone, Hamlet, Tartuffe/Earnest ≠ Realist drama; needed by the only other quartets). The app's own taught definition (`theatreGenres.ts`) is *"Drama presenting people and situations as recognisably true to life"* — descriptive, not the 1870s movement; and the A Doll's House primary rests on a review calling it "realistic". A chronology argument ("realism is an 1870s movement") would contradict the app's own definition and would require a scoping decision plus an authoritative dating source (Britannica/Oxford were not retrievable here; the Cambridge *Ibsen in Context* abstract only says Ibsen was not the first realist dramatist). Do not certify these unless the user approves a movement-scoped definition.

Also found: Britannica's comedy-of-manners entry names Molière a great exponent, so *Tartuffe* may legitimately be a comedy of manners; never certify Tartuffe ≠ Comedy of manners.

### Literature l5 and Theatre l5 — feasibility classification (cells not yet sourced)

- **Literature l5 A.** Every overlap-free quartet needs 11 cells and includes either 3–4 *Modernist novel* cells (a tradition label; Hammett and Tan are discussed in modernist terms) or 3 *Bildungsroman* cells (Gatsby, Joy Luck Club are arguable coming-of-age readings). The cells against Dystopian / Family saga / Detective are plot-based and likely certifiable from the NEA Big Read overviews already used. Expect the quartet to remain blocked unless the Modernist/Bildungsroman cells can be sourced honestly; do not force them.
- **Theatre l5 A.** The only two overlap-free quartets rely on *Tragedy / Tragicomedy / Comedy of menace / Memory play* cross-cells, all overlap-prone (Glass Menagerie and Fences are both widely called tragedies; comedy of menace is tragicomic; *Drama* is valid for every play). Most of the 11 cells are not honestly certifiable. This placement likely needs the re-staging/reserve route (e.g. Oklahoma! → Musical, The Crucible → Historical drama in A), as for Literature l1 — to be designed after approval.
- B/C pools (larger option pools) were not individually sourced. Current B/C quartet coverage: Lit l5 20/20 and 45/45 (11 cells), Th l1 10/20 and 26/45, Th l5 2/20 and 15/45.

### Literature l1 — exact re-staging proposals (NOT implemented; needs approval)

Both keep all 11 records, the 6/3/2 schedule and every approved primary; only two `priority` values (and their reasons) change. Both give A an overlap-free quartet; B and C then have 10/20 (R1) or 18/20 (R2) and 34/45 or 29/45 feasible pools. Feasibility is structural (no *documented* overlap): each still needs ~11 sourced cells, some of which may prove un-certifiable (e.g. Frankenstein ≠ Adventure fiction — the Arctic frame — and Scarlet Letter's Gothic/romance readings must be checked first).

| | A | B | C | Change |
|---|---|---|---|---|
| Current | Dracula, Frankenstein, Jane Eyre, Moby-Dick, Pride and Prejudice, Wuthering Heights | Scarlet Letter, Huckleberry Finn, Little Women | Don Quixote, Treasure Island | — |
| **R1 (recommended)** | Dracula, Frankenstein, Jane Eyre, Moby-Dick, Pride and Prejudice, **The Scarlet Letter** | **Wuthering Heights**, Huckleberry Finn, Little Women | unchanged | Wuthering 5→4, Scarlet Letter 4→5 |
| R2 | …, **Don Quixote** (replaces Wuthering) | Scarlet Letter, Huckleberry Finn, Little Women | **Wuthering Heights**, Treasure Island | Quixote 3→5, Wuthering 5→3 |

Why: Gothic is documented-true for Dracula, Wuthering Heights, Jane Eyre and Frankenstein; removing one Gothic work lets A form a quartet with Moby-Dick, Pride and Prejudice and either Dracula or Frankenstein. R1 keeps a famous canonical work (Wuthering Heights) in the same placement one stage later and brings in an important American classic; R2 delays it two stages. Exhaustive search: 3,030 of 4,620 arrangements are structurally feasible; every single-swap solution exchanges one of Jane Eyre / Wuthering / Frankenstein / Dracula with Scarlet Letter or Don Quixote. Tie-breaks: equal priorities fall back to ID order. Jane Eyre/Little Women share the same `bildungsroman` identity (labels differ), so they must not share a matching quartet.

### Wrong-option-only ("label-only") distractors — evaluation (NOT implemented)

- **Existing support: none.** Candidates come only from the quiz's six facts; `distractorGroup` merely prefers a bucket within them; unscheduled reserves never enter pools; `disjoint-values`/`complete-set` are evidence kinds, not distractor sources.
- **Benefit: real but partial.** A larger reviewed pool of clearly-distant, feature-defined labels (e.g. Western, Detective fiction; earlier-taught labels such as Gothic or Novel of manners for later levels) would give MCQ / false / options-blank forms more candidates. Each work × label negative would still need its own sourced evidence, so it reduces *competition for scarce labels*, not the evidence burden.
- **Does not fix matching**: matching cards and right-hand labels are the four selected facts; distractors cannot enter it. Literature l1 A and Theatre l5 A would remain blocked.
- **Risks:** unfamiliar labels (use only labels the learner has already been taught or are everyday terms); overlap-prone labels (Gothic, adventure, drama, tragedy) becoming false options by accident; quiet drift into teaching (must never be scheduled, reviewed, counted among the six facts, written to `learnedFactIds`, or shown with an answer key).
- **Smallest design if approved:** an optional `distractorPool` of label-only concept records passed to `prepareQuizSession` and used only in `getExerciseCapabilities` for `optionCandidates`/`falseCandidates`, excluded from `eligible`, composition counts, matching, review pools and progress. Verification unchanged (`context.evaluate` per pair). Needs tests that such records never appear as targets/facts/matching cards. Recommendation: **defer** until per-cell sourcing shows ordinary-form shortages remain after the evidence work above.

### Updated shortage diagnostics (A stage; unchanged in the repo)

| Placement | Overlap-free matching quartets | Min cells to certify | Honest provability |
|---|---:|---:|---|
| Literature l1 | 0 | n/a | blocked by documented overlaps → needs R1/R2 |
| Literature l5 | 9 | 11 | Modernist/Bildungsroman cells doubtful |
| Theatre l1 | 6 | 5 (→2 with drafted evidence) | one cell not certifiable; Realist cells need decision |
| Theatre l5 | 2 | 11 | most cells overlap-prone; likely needs re-staging |

## Git checkpoint report (inspection only — nothing committed or created)

- Worktree `…/worktrees/aeb2/quiz-game` on `codex/literature-theatre-content` at `43f1859`; `main` and `origin/main` are also `43f1859`, main is checked out at `/Users/simaybayatli/Developer/quiz-game`. Four other `codex/*` worktrees exist. Stash list is empty.
- **Would be included (44 files, 2.55 MB, all text):** 10 modified + 31 untracked Codex files + `AGENTS.md`, `CLAUDE.md`, `docs/AI_HANDOFF.md` (full lists above). Largest: `docs/art-literature-theatre-validation.json` (2.06 MB report; keep, it is the machine record) and `docs/art-genre-quality-audit.md` (88 KB).
- **Secrets scan:** regex scan (AWS/OpenAI/GitHub keys, private-key headers, `R2_SECRET_ACCESS_KEY=`, API-key/password/Bearer literals) over all 44 files: **no matches**. No `.r2.env.local` or `.art-r2-upload/` in the tree. No binaries, no build output, no `.DS_Store` among the 44 (those are ignored).
- **Exclude/never add:** `.r2.env.local`, `.art-r2-upload/`, `.DS_Store`, `node_modules/`, `.expo/`. Do not touch `.git_backup_corrupt/` (tracked, unmodified).
- **Recommended strategy (needs user approval; not done):** create the checkpoint **without changing the worktree, index, main, or the current branch pointer**, using a ref-only snapshot: build a tree from a temporary index (`GIT_INDEX_FILE=<tmp> git add -A`, `git write-tree`), `git commit-tree -p HEAD`, and store it as `refs/checkpoints/literature-theatre-2026-10-20` (local only, not pushed). This preserves every file as-is and is recoverable via `git checkout refs/checkpoints/… -- .` only if ever needed. Alternative if the user prefers a visible commit: one WIP commit on `codex/literature-theatre-content` (not main), message prefixed `wip:`, still unpushed. Either way: no push, no main changes, explicit approval first. Because `main` is a different checkout, committing on this branch cannot affect it.

## Checkpoint status

**Approved by the user and committed as a local `wip:` commit on `codex/literature-theatre-content`** (find it with `git log -1 --stat`; parent `43f1859`). Contents: exactly the 44 files listed above, staged by explicit path. Not pushed; `main` untouched; `.git_backup_corrupt/` untouched. Pre-commit checks (third session): jest 29/29 suites and 547/547 tests, `tsc --noEmit`, `npm run lint`, `git diff --check` all pass; secret-pattern scan clean (its only hit was this file's own description of the scan). The snapshot of this handoff inside the commit predates the work that follows; later edits to this file are normal uncommitted changes.

## Exact next actions

1. **User:** approve (or amend) the `wip:` checkpoint commit.
2. **Claude/Codex, after the checkpoint:** apply the drafted Theatre l1 evidence (table above) to `data/artContent/genreCompatibility.ts` with accurate reviewer wording; re-run `art-genre-compatibility.cjs`, the audit, both L/T sweeps, the four-Art regression and the full jest suite; update this file.
3. **User decisions needed:** (a) Realist-drama scope (movement vs. the app's descriptive definition) for Theatre l1; (b) R1 vs R2 vs neither for Literature l1; (c) whether to design re-staging for Theatre l5 (and Literature l5) after sourcing; (d) whether to approve a design write-up/implementation of label-only distractors.
4. Per-cell sourcing for Literature l5 and Theatre l5 only after the above; stop and record any cell that cannot be sourced honestly.

## Unresolved user decisions

- Checkpoint commit approval (contents/message in chat).
- Realist-drama scope; Heroic-comedy cell (currently uncertifiable) — accept Theatre l1 A as unresolved, or approve re-staging there too.
- Literature l1 re-staging choice (R1 recommended).
- Label-only distractors: defer (recommended) vs design.

## Key files affected so far

See the inventory above. Most relevant for the next step: `data/artContent/approvedGenrePrimaries.ts`, `genreCompatibility.ts`, `genreReserves.ts`, `literaryGenres.ts`, `theatreGenres.ts`, `scripts/art-genre-compatibility.cjs`, `src/quizEngine/__tests__/{approvedGenrePrimaries,literatureTheatreContent,nonExclusiveClassification}.test.ts`.

## Git status at end of this session

`git status --short`: 10 modified (`M`), 34 untracked (`??`), 0 staged — HEAD still `43f1859` (verified at the second session; `AGENTS.md`/`CLAUDE.md` have since been edited only by Claude Code). Nothing committed, pushed, staged, stashed or reset by Claude Code; no refs created.
