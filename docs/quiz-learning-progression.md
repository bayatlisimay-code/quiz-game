# Six-fact learning contract

Every ready quiz has exactly six canonical ordinary facts, seven ordinary exercises
and one four-pair matching exercise drawn from those same six facts. The only
repeated ordinary fact combines positive retrieval with a certified false-claim
judgment, never two rearrangements of the same question. A/B/C retain 3/2/2,
2/3/2 and 2/2/3 MCQ/TF/blank quotas respectively.

Teaching introductions are explicitly scheduled as six A, three B and two C facts.
B reinforces three A facts. C reinforces two A and two B introductions. Stable
fact identity is independent of question direction and curriculum placement.
A introductions are fixed for the content snapshot; later reinforcement sets are
ranked by authored 1–5 priorities and rationale. Up to 20 B / 45 C combinations
are tried in priority order, jointly with matching and format feasibility. IDs
break equal-priority ties, never authoring array order. Attempt seeds vary safe
matching combinations within the selected six; they cannot authorize new facts.

Art priorities live in data/artContent/learningPriorities.ts. Anchor works and
movements receive higher reinforcement priority; supporting facts share a stated
priority tier. Registration rebalances existing facts to six A and three B before
assigning C. This changes learning annotations, not historical claims or IDs.

Review pools retain the approved p3/p5/l10 source unions. The engine selects only
facts from complete earlier introduction stages, never unused overflow facts.
Reviews introduce no new facts and mix at least two teaching sources when the
source pool spans multiple placements. No generic type substitution is allowed.

Production completion records persist introduced canonical fact IDs in the
optional learnedFactIds progress field. B/C and reviews require their earlier
facts to be recorded as learned. Old completion flags do not prove which six
facts were taught. Replaying earlier quizzes records the new evidence without
clearing existing completion history, XP, streaks or unrelated progress.

## Qualified content completion (2026-10-15)

All 54 Painting/Sculpture teaching placements now have at least eleven
source-checked facts. The 184 additions comprise 84 artwork facts (28 historical
work entries), 82 terminology facts and 18 movement facts. Existing IDs, sources and
pilot answer contracts remain intact. Registration contains 598 records; the
fixed eleven introductions per placement teach 594 facts. Four ancient-sculpture
recognition/date records remain reserve material, excluded from review unless
introduced; they do not receive invented duplicate introductions.

Each subtopic has 150 part/variant combinations. Twenty attempts per combination
pass in text and development-image modes, both as isolated generation checks and
as complete fresh-learner sequences with actual prior-fact receipts (24,000 total
requests). All 54 placements introduce exactly eleven distinct facts. Reviews
introduce none. Missing prerequisites still fail closed.

Matching varies in 296 of 300 isolated part/variant combinations across twenty
attempts. Painting l1/p2/C, l1/p4/A, l1/p4/C and Sculpture l9/p1/A each have exactly
one safe four-fact group within their selected six, independently enumerated in
tests. Those groups stay fixed rather than accepting uncertain cross-pairings.

The ordinary planner validates rendered question uniqueness during bounded
search. Reverse creator questions with duplicate artist prompts now backtrack
to another valid assignment. A capacity check rejects matching groups whose
mandatory facts cannot fit the remaining ordinary-form quotas before exhausting
the shared search budget. Neither fix relaxes composition or evidence rules.

Run scripts/art-content-impact.cjs with --attempts=20, with and without
--development-images. Structural/semantic failures are fatal; content shortages
are reported. --require-ready additionally fails on any shortage. Historical
coverage figures in earlier documentation predate this stricter contract.

Run `node scripts/art-learning-impact.cjs --attempts=20`, and repeat with
`--development-images`, to validate fresh-learner reachability. This diagnostic
starts with no learned receipts, records introductions only after complete ready
quizzes, and blocks downstream requests after a shortage. It never reads or writes
application progress. Content checks establish consistency with the recorded
source evidence, not independent human historical approval.

Simulator smoke check (2026-10-16): the updated iPhone 16e build completed
Painting l1/p1/A at 8/8 and opened B using the newly recorded A receipts.
MCQ, options blanks, both truth values, corrected-fact feedback and immediate
red/green matching locks were exercised. Replaying A added no XP (existing
completion retained). Sculpture l1/p1/A displayed the existing development-hosted
Sahure image and correctly rejected the Willendorf identification; its positive
feedback named Sahure. The incomplete B/Sculpture attempts were left without
completion. No storage reset, progress bypass or production image approval was
used. Later-level, typed-input and image-timeout device checks remain manual;
automated coverage exercises their engine/image contracts.
