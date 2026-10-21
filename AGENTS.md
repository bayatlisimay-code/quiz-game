# AGENTS.md — shared guidance for AI coding assistants (Codex, Claude Code)

Quiz Game is a Duolingo-style general-knowledge learning app (iOS/Android): React Native 0.81, React 19, Expo SDK 54, TypeScript, Expo Router. Continue the existing architecture; do not replace it or add a second app.

**Current task state lives in [docs/AI_HANDOFF.md](docs/AI_HANDOFF.md). Read it first, and update it before you stop.**

## Current project status

- Literature and Theatre are complete at **150/150 ready each**, including full fresh-learner progression. Checkpoint `e79efc6` and its separately committed Stage 3 review are approved for local fast-forward integration into `main`.
- The integration commits preserve the four factual corrections, non-exclusive genre evidence, safe interchangeable matching targets and all completed Art regressions. Technical readiness is not human editorial release certification; provisional evidence still requires editorial review.
- No push or Stage 4 work is authorised. Literature/Theatre remain text-only, production image settings stay unchanged and Design remains "Coming soon".

## Repository safety (non-negotiable)

- Main checkout: `/Users/simaybayatli/Developer/quiz-game`, branch `main`. Retained development worktree: `/Users/simaybayatli/.codex/worktrees/aeb2/quiz-game`, branch `codex/literature-theatre-content`. Verify cwd, branch, HEAD and working-tree status against the user's task before proceeding; stop and report an unexpected mismatch. The historical pre-Literature/Theatre baseline is `43f1859a4a825f10841a8dc29a343865a01053f0`.
- Treat all **uncommitted work as valuable and potentially not backed up elsewhere**. Never run `git reset`, `clean`, `restore`, `checkout -- <path>`, `stash`, `rebase`, `merge`, or switch worktrees/branches without explicit user approval. Approved integration must fast-forward; do not squash or rewrite history.
- Do not commit, push, stage, or open PRs without explicit user approval in chat.
- Do not edit files you do not need to; preserve existing source-verified records, evidence, fact IDs, priorities and introduction stages unless the user-approved change requires otherwise.
- Leave `.git_backup_corrupt/` (tracked in HEAD) untouched.
- Do not add a work-feature assessment view or otherwise change what Literature/Theatre genre lessons teach (the genre of the actual work) without an explained design and user approval.
- Never touch credentials (`.r2.env.local`), run `art-r2-upload.cjs --upload`, or write image registry/assets.
- Literature and Theatre are **text-only**. Do not modify completed Art content (Painting, Sculpture, Architecture, Design) and do not activate production image bindings. Design stays "Coming soon".

## Quiz contract (enforced by code and tests — never relax)

Authoritative: [docs/quiz-learning-progression.md](docs/quiz-learning-progression.md), [docs/quiz-validity.md](docs/quiz-validity.md), [docs/art-curriculum-approved.md](docs/art-curriculum-approved.md).

- 8 exercises per quiz: one safe four-pair matching exercise + seven ordinary exercises with exact A/B/C MCQ/true-false/blank quotas (A 3/2/2, B 2/3/2, C 2/2/3).
- Six distinct canonical facts in ordinary questions; one fact repeated in a genuinely different format (positive retrieval + certified false judgment).
- A introduces six facts; B revisits three A + introduces three; C revisits two A + two B + introduces two. Parts 3 and 5 review earlier material; Level 10 is cumulative.
- Correct/incorrect answers must be verified. No unsupported negatives, ambiguous grading, unsafe matching, or quota relaxation. Unknown ≠ false: a missing classification is never a negative.
- Genre membership is non-exclusive; a primary answer never turns another supported description into a wrong option.
- Progression and matching are deterministic and tested; fresh learners must not skip blocked lessons.

## Map

- `data/artCurriculum.ts` — approved curriculum config. `data/activeArtContent.ts` — production authoring boundary (registers content sets).
- `data/artContent/` — authored content + evidence. Literature/Theatre modules: `literature*.ts`, `theatre*.ts`, `literaryGenres.ts`, `genreCompatibility.ts`, `genreReserves.ts`, `approvedGenrePrimaries.ts`.
- `src/quizEngine/` — generation, validation, matching safety, progression. Tests in `src/quizEngine/__tests__/`.
- `scripts/art-*.cjs` — read-only validation/impact diagnostics (stdout only; `art-image-assets.cjs` and `art-r2-upload.cjs` can write — use only `--check`/read modes).
- Docs: [Literature/Theatre status](docs/art-literature-theatre-content.md) → [genre completion report](docs/art-genre-completion.md); machine report [docs/art-literature-theatre-validation.json](docs/art-literature-theatre-validation.json); images: [docs/art-r2-development.md](docs/art-r2-development.md).

## Validation commands

```sh
npm test -- --runInBand --watchman=false --testTimeout=60000
npx tsc --noEmit
npm run lint
git diff --check
node scripts/art-image-assets.cjs --check
node scripts/art-genre-compatibility.cjs
node scripts/art-literature-theatre-audit.cjs --require-ready   # must exit 0: all genre shortages are resolved
node scripts/art-content-impact.cjs --subtopics=literature,theatre --attempts=20 --require-ready
node scripts/art-learning-impact.cjs --subtopics=literature,theatre --attempts=20
node scripts/art-content-impact.cjs --subtopics=painting,sculpture,architecture,design --attempts=20 --development-images --require-ready
node scripts/art-learning-impact.cjs --subtopics=painting,sculpture,architecture,design --attempts=20 --development-images
```

A test pass is not independent human editorial certification. If evidence cannot resolve a shortage, report the limitation; do not weaken correctness, invent distractors, or change primary classifications to improve coverage.

## Before you stop

Update `docs/AI_HANDOFF.md`: what changed, what remains, test results (with date), failures/open questions, exact next action, and `git status`. Leave the tree inspectable; leave changes uncommitted unless the user explicitly authorised a checkpoint or integration commit.
