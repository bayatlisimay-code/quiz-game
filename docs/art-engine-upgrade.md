# Approved Art engine upgrade

Pilot update (2026-10-13): the active registry now contains 58 source-checked
Sculpture/Painting/terminology records. See [art-content-pilot.md](art-content-pilot.md)
for provenance, source-qualified assessment scope, coverage and remaining release
gates. The zero-content measurements below describe the original engine milestone.

## Activation and source ownership

`data/artCurriculum.ts` transcribes the approved Miro curriculum: eight subtopics,
80 levels, 216 teaching placements and 147 relation IDs. The source document is
preserved in `art-curriculum-approved.md`; a regression test compares every title
and teaching placement against it. Levels 1–9 teach in p1/p2/p4. p3 reuses p1/p2;
p5 reuses p1/p2/p4. Every Level 10 part uses all teaching facts from Levels 1–9,
without inventing review records or weighting duplicate IDs.

The old authored facts remain recoverable in `data/concepts` and `CONCEPT_SETS`.
They are not silently served under different new lesson titles. Production uses
`ACTIVE_CONCEPT_SETS`, `activeSemanticContext`, and `approvedArtContent`. The last
array was deliberately empty at the engine milestone. The current pilot adds
source-checked records only for the documented slices; other teaching slices still
report shortages. No approved image assets have been fabricated.
`registeredSemanticContext` is an explicitly archived diagnostic snapshot; public
policy defaults require reviewed evidence for the new target relations.

Design stays in the catalogue. `artAvailability.design` controls whether it is
playable or visible as Coming soon. Both navigation and completion enforce it.

## Semantic authoring contract

Add pilot records to `data/activeArtContent.ts` only after independent review.
Keep concept IDs and image keys stable. Supply stable subject/value IDs and
structured qualifiers; curriculum positions do not define truth. Reviewed
assessment metadata declares entity types, leakage review, visible qualifier
scope and evidence references. Definitions, examples and genres remain valid
educational content; none automatically means exclusive membership.

`SemanticEvidence` supports sourced positive/negative assertions, independently
reviewed complete qualified sets, disjoint categories, broader categories, and
bounded dates. Evidence includes source URL, locator, reviewer, timestamp and
review status. Merely setting a status cannot verify historical truth: an author
must independently check the cited source and the precise claim. A complete set
requires evidence of completeness, never an inference from database contents.
Date bounds preserve intervals; different events, roles and versions need
separate qualifiers. Geographic questions explicitly ask about present-day
countries. First works, character relationships, music credits, award/festival
identity and creator attribution have additional typed contracts.

One immutable semantic context aggregates truth independently of candidate
selection. Scoped subject evidence and contract checks are memoized within that
context; curriculum moves do not redefine truth. Positive anchors require reviewed evidence. Negatives require explicit
proof under the same predicate/scope; missing membership is unknown. Hierarchy
can establish positive containment, not arbitrary negatives. Conflicting evidence
fails validation. Matching, MCQ, options blanks and false statements reuse the
same decisions. No runtime web lookup, AI assertion or arbitrary wrong-answer
list is used.

Shared template families supply the 147 target templates; relation policies
supply family contracts without factory relation-name switches. Optional reverse
views require independent wording/leakage/scope review and certified options.
They retain the original learning fact identity and do not create duplicate facts.

Typed blanks require reviewed complete accepted forms, declared case handling,
and known valid alternatives covered by those forms. Forward definition recall
is options-only. Numeric near-matches are never accepted through fuzzy grading.

## Planning and matching

Capabilities are computed before joint deterministic planning. A/B/C always mean
3/2/2, 2/3/2 and 2/2/3 ordinary MCQ/TF/blank questions, plus one four-pair matching
exercise. Both True and False capabilities are required for TF eligibility.
No unavailable type is replaced by a True statement. A bounded search tries
matching groups together with ordinary quotas; exhausted searches/shortages are
explicit and never playable partial quizzes. Reviewed fact identity controls
reuse across formats. Review mode includes all previously introduced A/B/C facts.

Matching answer cards must be visually distinguishable. Every cross-pairing is
valid, invalid or unknown under the semantic context. Unknown groups are rejected.
A four-by-four compatibility matrix is exhaustively checked: every sequence of
accepted permanent locks must leave a completion. This is stricter than merely
finding one perfect assignment. The shared interaction reducer gives immediate
feedback, permanently locks correct compatible pairs, and returns wrong cards.

## Recognition and failures

Recognition uses an independently approved identity binding and rights/provenance
validated runtime image registry, or an independently authored verified text
stimulus. It never synthesizes descriptions from answers. Image fallback approval
is separate from image approval. Recognition can participate in matching only
when the stimulus and pairing checks pass; answer names stay hidden on stimulus
cards. Required image failures render verified fallback text when supplied;
otherwise the screen invalidates the ungraded quiz and replans from the same
curriculum pool excluding the failed asset. The learner sees a restart notice.
If no complete safe quiz remains, it reports a shortage and disables grading.
A failed asset cannot silently leave an unanswerable graded question.

The curation/runtime datasets remain empty. Actual byte integrity, hosting,
license verification, identity review and approved descriptive alternatives are
content/release dependencies, not completed by these engine tests.

## Progress and access

The curriculum version backs up simulated stored progress to
`quizgame_progress_before_art_miro`, resets Art completion/variant state once,
and preserves unrelated completion, XP and streak totals. Obsolete Art resume
locations are ignored. Versioned attempts and generation guards prevent stale
route questions from being graded. A/B/C, part and level prerequisites are checked
on navigation and completion; malformed deep links cannot award completion.

## Diagnostics and pilot gate

Run `node scripts/quiz-validity-impact.cjs --attempts=20` for the production
24,000-request sweep. `--legacy-source` explicitly inspects archived facts and
must never be interpreted as current curriculum readiness. Validation checks
registration, orphaned populated source sets, evidence and exact composition.
`targetRelationReadiness(pool, context)` reports infrastructure separately from
actual content/asset capability, without widening the pool.

Synthetic tests exercise all 147 contracts; they are not historical evidence or
playable content. Start with independently reviewed Sculpture and Painting pilot
sets in actual target teaching slots. Measure all A/B/C attempts and review pools,
inspect the displayed prompts/options and test approved images on a simulator.
Stop before expansion if certified alternative diversity or immediate-lock
matching is insufficient. Do not weaken validity or composition to increase
coverage.

Manual release checks still include actual simulator navigation/unlocking,
wrong/correct matching animations, image network failures/restart/fallback,
credits and screen-reader leakage, persistence backup/reset, and real asset bytes.
No simulator/device release certification is implied by Jest, TypeScript or lint.

## Change manifest

Compared with the pre-upgrade checkpoint (including the pre-existing uncommitted
Phase 1 work), this implementation creates the following files:

- `components/quiz/AssessmentStimulus.tsx`
- `data/activeArtContent.ts`
- `data/artCurriculum.ts`
- `data/artRelations.ts`
- `docs/art-curriculum-approved.md`
- `docs/art-engine-upgrade.md`
- `src/images/__tests__/recognitionFailure.test.ts`
- `src/images/assessmentImages.ts`
- `src/quizEngine/__tests__/artUpgrade.test.ts`
- `src/quizEngine/assessmentTemplates.ts`
- `src/quizEngine/assessmentTypes.ts`
- `src/quizEngine/matchingInteraction.ts`
- `src/quizEngine/matchingSafety.ts`
- `src/quizEngine/relationCatalogue.ts`
- `src/quizEngine/relationDefinitions.ts`
- `src/quizEngine/semanticEvidence.ts`
- `src/quizEngine/targetReadiness.ts`
- `src/quizEngine/testSupport/targetFixtures.ts`
- `src/state/lessonAccess.ts`

It modifies these existing files:

- `app/topic/[topicId]/index.tsx`
- `app/topic/[topicId]/subtopic/[subtopicId]/[levelId].tsx`
- `app/topic/[topicId]/subtopic/[subtopicId]/index.tsx`
- `app/topic/[topicId]/subtopic/[subtopicId]/level/[levelId]/[partId].tsx`
- `components/quiz/QuizImage.tsx`
- `data/catalog.ts`
- `data/imageCuration/README.md`
- `scripts/quiz-validity-impact.cjs`
- `src/images/createRuntimeRegistry.ts`
- `src/images/resolveQuizImage.ts`
- `src/images/types.ts`
- `src/quizEngine/__tests__/answerValidation.test.ts`
- `src/quizEngine/__tests__/generationCoverage.test.ts`
- `src/quizEngine/__tests__/quizEngine.test.ts`
- `src/quizEngine/__tests__/semanticValidation.test.ts`
- `src/quizEngine/buildQuiz.ts`
- `src/quizEngine/conceptTypes.ts`
- `src/quizEngine/contentSnapshot.ts`
- `src/quizEngine/contentValidation.ts`
- `src/quizEngine/curriculumPool.ts`
- `src/quizEngine/exerciseFactory.ts`
- `src/quizEngine/generationCoverage.ts`
- `src/quizEngine/relationPolicies.ts`
- `src/quizEngine/semanticValidation.ts`
- `src/quizEngine/templates.ts`
- `src/state/__tests__/quizProgressCompatibility.test.ts`
- `src/state/__tests__/quizUnlockRefresh.test.ts`
- `src/state/lastLocation.ts`
- `src/state/progress.ts`

No files are removed. Earlier uncommitted curriculum registration and Phase 1
changes remain preserved; they are not counted as new work in this manifest.

## Validation at implementation completion

- `npm test -- --runInBand --watchman=false`: 12 suites, 388 tests passed.
- `./node_modules/.bin/tsc --noEmit`: passed.
- `npm run lint`: passed without warnings.
- `git diff --check`: passed.
- Active production sweep: 1,200 part/variant combinations × 20 attempts =
  24,000 requests; 0 ready, 24,000 explicit shortages, 0 validity/composition
  violations. The active replacement registry is intentionally empty.
- Original registration/orphan checks: no errors; archived review warnings remain
  review items, not certified replacement facts.

Tests reused the existing dependency installation through a temporary symlink;
no dependencies were installed. The symlink was removed after validation.
Device/simulator checks were not run. The pre-existing quiz result screen still
displays placeholder XP; this upgrade preserves its existing behavior and the
separate XP/streak helper rules rather than redesigning scoring.

Recovery checkpoint: `refs/checkpoints/art-engine-before-upgrade-20261013`
(`783068bbabfce3d336a9711756d68798ea59d59f`). The branch HEAD remains unchanged;
no implementation commit or push was made.
