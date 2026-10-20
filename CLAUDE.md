# CLAUDE.md

Shared project rules are in [AGENTS.md](AGENTS.md) — read and follow them; they are authoritative for both Claude Code and Codex. Current task state is in [docs/AI_HANDOFF.md](docs/AI_HANDOFF.md).

Claude-specific notes:

- Start every session by verifying `pwd` = `/Users/simaybayatli/.codex/worktrees/aeb2/quiz-game`, branch = `codex/literature-theatre-content`, and `git status`. Report any mismatch and stop.
- Everything uncommitted in this tree is Codex's unreleased work. Treat it as irreplaceable: no reset/clean/restore/stash/checkout/rebase, no commit/push/stage without explicit approval.
- Prefer the dedicated Read/Edit/Write tools for repo files; use Bash for validation commands in AGENTS.md.
- Do not implement genre/editorial changes from memory or from the superseded audit recommendations in `docs/art-genre-quality-audit.md` / `docs/art-genre-candidates.md`. The applied, authoritative primaries are `data/artContent/approvedGenrePrimaries.ts` and `docs/art-genre-completion.md`.
- Update `docs/AI_HANDOFF.md` before ending a session.
