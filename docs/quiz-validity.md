# Quiz validity architecture

## Data flow and ownership

`AUTHORED_CONCEPT_SETS → contentRegistry → CONCEPT_SETS → contentSnapshot → SemanticContext → prepareQuizSession →
buildQuizResult → generateExercise/generateMatchingExercise → quiz presentation`.

The application explicitly supplies `registeredSemanticContext`, an immutable
snapshot of ALL registered facts, independently of the selected curriculum pool.
The validator does not import content. A quiz session snapshots eligible records,
computes capabilities once, and can reuse them across deterministic attempts.
A context passed to a constructor intentionally describes that entire snapshot;
use `context.withClaims(additional)` to extend it without losing registered truth.
The isolated default on the compatibility APIs is for supplied-pool callers/tests.
Do not use it for production content that has other registered accepted answers.

## Relation catalogue

Every registered relation needs a static entry in `relationPolicies.ts`.
Never populate the catalogue by enumerating content at runtime. CI validates
coverage, strategy names, strategy metadata, and authored concept ID uniqueness.
Registry aliases/misalignment and duplicate authored IDs are errors. A typed
authoring adapter validates scope, introduction stage, answer kind and difficulty.
Filesystem diagnostics also check orphaned populated sets and duplicate source IDs.

Policies declare ordinary exercise types, certified-negative requirements,
typed/options blank permissions, matching permission and validation requirements,
strategy ID/metadata, and migration status. Unknown relations fail closed.

- `legacy-reviewed`: explicit review status for existing content, never permission
  to infer negatives or cross-pair incompatibility. Unknown alternatives are
  unavailable for every relation. Legacy typed blanks remain disabled.
- `semantically-validated`: configured strategies certify the required decisions.
- `blocked-pending-metadata`: positive facts remain indexed but no assessments
  or matching are generated. All original 30 deferrals currently use this status.

Do not interpret a legacy label as a complete factual or semantic audit.

## Claims, identities, and incremental migration

`Concept.semantic` optionally supplies subject/value IDs, aliases, value kinds,
case sensitivity, a canonical predicate ID, structured qualifiers, accepted answer
forms, and strategy metadata. Existing concept IDs and display strings remain intact.

Qualified claim identity contains subject identity, predicate, and canonicalized
qualifiers. Topic/subtopic/level/part are selection scope, never truth identity.
Legacy `context` is adapted into an explicit legacy-context qualifier. Structured
qualifiers should replace that convention as facts migrate.

The legacy adapter deliberately folds ordinary legacy text; it is not a universal
identity rule. Supplied semantic identities are case-sensitive by default, so
symbols such as `Co` and `CO` remain distinct. Stable IDs distinguish homonyms;
explicit unambiguous subject aliases bridge stable and legacy subject identities.
Two stable value IDs are never asserted equivalent just because labels match.
Raw names remain an imperfect adapter: future authors should provide stable IDs
and qualifiers for homonyms, versions, roles, dates, and temporally qualified facts.

## Strategies and evidence

Every strategy has metadata validation and a three-valued decision with a reason:
`valid`, `invalid`, or `unknown`. Strategies receive claims and the shared context;
they can inspect accepted answers, structured qualifiers, and registered evidence.
Additional graph/provenance/date strategies can be added through this interface
and catalogue configuration without relation switches in the factory.

Implemented strategies:

1. `stored-membership`: all explicit accepted answers are positive evidence;
   absence is unknown. This includes the Renaissance/Shakespeare/Cervantes case.
2. `explicit-evidence`: claim metadata supplies certified incompatible stable
   answer IDs. Positive registered evidence always overrides negative evidence.
3. `exclusive-classification`: author-declared disjoint vocabulary and scheme;
   different values are invalid only within the same predicate/scheme/qualifiers.
   The production pilot is `created_in_decade`, covering the actual design-event
   decade records. It does not reinterpret creation years, release years, or
   instrument families as exclusive without a separate review.

The design-decade pilot is now selected in its authored p4 and the configured
review pools. No additional relations were declared exclusive to improve coverage.

## Capabilities and planning

Capabilities distinguish MCQ, True, False, options blank, typed blank, and matching
eligibility. Each unavailable capability has a reason. Matching additionally needs
a compatible four-subject group.

The planner computes capabilities before selection and searches certified matching
cliques jointly with ordinary assignments. A/B/C always require respectively
3/2/2, 2/3/2 and 2/2/3 MCQ/TF/blank plus one four-pair matching exercise. Attempts
never change those quotas. Every TF concept must support both truth values;
planned values are balanced with a seeded starting value and shuffled presentation.

Search preserves introduction-stage eligibility and the existing B/C older-fact
limits. It prefers five ordinary facts/two recalls, but can use four, six or seven
facts when the preferred layout cannot satisfy the fixed quotas. Each fact appears
at most twice, in different families; matching reuses selected ordinary facts.
Matching groups are enumerated rather than committing to the first group. Search
is bounded at 50,000 nodes; a limit result explicitly says feasibility is unknown,
not that content insufficiency has been proved. No requested family is substituted.

Options are deduplicated by identities, aliases and display forms before sampling.
Known accepted forms are excluded and every selected negative must be certified
`invalid`, including legacy content. Identical labels with conflicting semantic
identities cannot authorize an ambiguous negative. At least two certified negative
choices are required. Unknown is never treated as false.
Distractor selection never adds content from outside the active curriculum pool.

`buildQuizResult` reports `ready` or `insufficient-content`, generated/requested
counts, unavailable concepts/reasons, and matching availability. The existing
array-returning adapter remains for callers/tests; production consumes the result.
A result is ready only after full eight-exercise contract validation. Insufficient
results contain no partial exercises and expose form quotas, capabilities, shortage
codes and search diagnostics. The screen does not start incomplete assessments, so shortages cannot produce a
completion/XP event. Scoring and progression formulas are unchanged.

## Answer presentation and matching

Blank payloads declare `allowedInputModes`; the screen cannot switch into a
forbidden mode. Typed blanks require policy permission and an exclusive short value or an
explicitly complete accepted-answer set (including alternatives for long answers). Explicit aliases/accepted forms are supplied to presentation.
New typed payloads match only their explicit normalized accepted forms, with
per-form case sensitivity. Edit distance cannot accidentally accept a neighboring
decade or chemical symbol. Previously generated legacy payloads also use exact normalized accepted forms;
edit-distance tolerance no longer accepts nearby numeric or spelling values.

Matching carries each card's answer identity and accepted answer identities.
For every relation, every cross-pair must be valid or invalid;
unknown cross-pairs make that group unavailable. Known valid alternatives are
represented rather than graded as positional errors. A deterministic bounded
search looks for compatible four-subject subsets; failure is reported honestly.

`answerValidation.ts` supplies immediate correctness and final one-to-one grading.
Identical/equivalent cards are interchangeable. Duplicate visible labels with
conflicting stable identities are not put into the same matching group. All quiz
feedback and final matching grading use these helpers, never original pair indices.

## Authoring and CI

`validateContent` errors on missing policies, unknown strategies, missing required
metadata, missing templates, invalid challenge ratings, duplicate concept IDs,
and conflicting explicitly exclusive answers.
It emits review issues for repeated semantic facts, blocked evidence, and legacy
assumptions. Human-authored `strategyMetadata.reviewFlags` can record answer
leakage, ambiguous attribution, excerpts/paraphrases, and category overlap.
Subject-name/capitalization heuristics do not certify these judgments.

Generation tests check deterministic output, policy enforcement, accepted-answer
exclusion, matching equivalence, blank-mode contracts, and complete safe fixtures.
A reviewed actual Art count baseline detects subsequent availability/count losses;
intentional reductions require a deliberate baseline review, not an automatic update.

Run the release diagnostic with:

```sh
node scripts/quiz-validity-impact.cjs --attempts=20
node scripts/quiz-validity-impact.cjs --attempts=20 --baseline=/path/to/reviewed-report.json
```

It uses the same `getCurriculumPool` helper as the screen and checks actual
`buildQuizResult` output. Reports include explicit shortages and no partial assessments. The sweep validates
exact composition, both TF values, certified negatives, matching compatibility and
selection rules. Content qualification/coverage remains a separate release task.

## Curriculum and difficulty contracts

Regular p3 reuses p1+p2; p5 reuses p1+p2+p4. Level 10 collects the corresponding
sources across levels 1–9. `reviewSources` is shared by production and diagnostics.
Pools deduplicate IDs and check scope, without creating new records or weighting
aliased imports. Part membership determines what has been taught; a challenge
rating does not exclude an authored fact from its own teaching/review part.

`Difficulty` remains an integer challenge rating 1–5. The 81 explicit existing
Architecture/Sculpture/Theatre teaching sets encode difficulty=curriculum level.
Their 1,458 records retain that number as `legacyCurriculumRank` in the engine;
challenge difficulty is unspecified rather than guessed or clamped. All raw
source values remain intact, including the 648 ranks above five. Future sets do
not inherit this exception. Invalid challenge values or mismatched legacy ranks
fail authoring validation and are omitted from runtime registration. Assigning
actual challenge ratings to those records remains an authoring/product decision.

## Hardening release-impact results

All 1,200 Art part/variant combinations, attempts 1–20: 24,000 requests.
240 ready / 23,760 insufficient, no partial exercises and zero detected violations.
All 240 ready quizzes have exactly eight exercises and their assigned quotas.
There are 560 MCQs, 560 blanks, 280 True and 280 certified False statements,
and 240 matching exercises. The 153 matching sets with repeated RHS displays
use accepted identities and interchangeable cards. Readiness is stable across
all attempts, and the sweep encounters no planning limit outcomes.

Only Design l1/p4, l1/p5, l10/p4 and l10/p5 support A/B/C. The other 396 parts
lack qualified assessment evidence. In particular, fresh Art entry parts remain
unavailable; the category is not release-ready. Regular reviews now load 36/54
facts and cumulative p5 loads 486 per subtopic, but loading alone cannot certify
negatives. Registration restores the omitted 108 records (3,888 unique total),
without changing factual content, concept IDs or image keys. All 152 registered
relations have explicit policies: 2,880 legacy records and 990 records under the
original 30 blocked relations lack qualified negatives; 18 use the validated pilot.
There are zero empty curriculum pools after review/registration/difficulty fixes.
The three Design
l2 set-container IDs are aligned with their existing registry positions.

The historical legacy-count baseline below is retained as evidence. It is not a
release-ready baseline: all 7,020 previously marked-ready quizzes violated the
required distribution, and 2,027 lacked matching. The new exact-contract CI
baseline covers the four safe Design parts; the prior artifact is preserved.

Current validation: 10 Jest suites / 206 tests passed, TypeScript no-emit passed,
lint passed with nine pre-existing warnings, and `git diff --check` passed. Jest
ran with `--watchman=false` because the sandbox cannot use the host Watchman
state directory. Existing image/unlock tests and added saved-progress, XP, streak
and completion tests pass. Full on-device navigation remains unverified.

## Historical refactor measurements (before hardening; invalid release contract)

Measured against all 400 Art catalogue parts, A/B/C, attempts 1–20, using the
screen's unchanged curriculum filters and actual generation path: 24,000 requests.

| Outcome | Count |
| --- | ---: |
| Complete, presentable quizzes | 7,020 |
| Insufficient-content results | 16,980 |
| Empty diagnostic exercise lists | 16,940 |
| Partial diagnostic quizzes (five ordinary questions) | 40 |
| All generated ordinary candidates | 49,340 |
| Presentable ordinary questions | 49,140 |
| Presentable MCQs | 24,530 |
| Presentable options blanks | 24,610 |
| Presentable True / False statements | 0 / 0 |
| Presentable matching exercises | 4,993 |
| Matching exercises with equivalent duplicate RHS cards | 782 |
| Detected generation validity violations | 0 |
| Catalogue/metadata validation errors | 0 |

The duplicate RHS cards are intentionally interchangeable and correctly graded.
The diagnostic checks policy escape, known-positive negatives, False certification,
visible option duplicates, and equivalent matching cards. Zero violations is not
proof of factual completeness or of every legacy distractor's semantic invalidity.
All original 30 protected relations produce zero assessments/matching.

| Variant | Previous full ordinary-count parts | Current complete parts | Previous empty parts | Current empty parts |
| --- | ---: | ---: | ---: | ---: |
| A | 137 | 106 | 259 | 294 |
| B | 160 | 117 | 236 | 281 |
| C | 172 | 128 | 226 | 272 |

Previous measurements were the Phase 1 audit, using the same attempts and filters.
Phase 1 produced 66,660 ordinary questions, including 18,479 protected True-only
questions, and 6,749 matching exercises. It had 9,380 full-count requests plus
200 short nonempty requests. Current complete requests decrease by 2,360;
the reduction is an explicit safety result, not a repaired content shortage.

106 parts now support complete A/B/C. 272 parts generate no questions in any
variant; 226 such parts already existed before validity work. The two current
partial cases are Literature l10/p4 B and l10/p5 B. Their partial candidates are
reported but are not presented as completable assessments. Existing empty sets,
introduction-stage gaps, and difficulty-filter gaps remain unrepaired.

The real registered design-decade pilot, supplied directly without broadening
production filters, generated a complete Quiz C with two MCQs, two blanks,
one True, two certified False statements, and one matching exercise. It proves
strategy integration while its production curriculum coverage remains separate.

Validation completed: TypeScript no-emit; 8 Jest suites / 171 tests; lint with
zero errors and nine existing warnings; `git diff --check`. No content records,
concept IDs, scoring/XP/streak formulas, progression rules, navigation, image
system, or content registration were changed. Nothing was committed or merged.

Before a complete app release, resolve protected metadata/content, migrate
remaining legacy compatibility assumptions where needed, and repair Art content
coverage in its separate release-readiness task. Do not re-enable True-only filler
or unvalidated matching to improve these counts.
