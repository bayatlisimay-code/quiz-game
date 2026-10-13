# Art wording, image staging and gameplay validation

Baseline: `26bc0a4b286ba7b7aa6e39a78268706b32bc69b1`.

## Implemented behavior

Shared creator roles have active/passive wording for independently certain
painter/sculptor/author/poet/director/designer/architect attributions. For example,
“Who painted ‘The Arnolfini Portrait’?”, “Michelangelo Buonarroti sculpted ‘David
(Accademia marble)’”, and “‘The Last Supper’ was painted by _____”. Existing
principal collection-credit and original-version scope remains visible. Unknown
roles keep credit wording. Qualified attributions explicitly say “attributed” in
MCQ, True/False, blank and inverse forms; none becomes a certain authorship claim.
Inverse questions ask “Which of these works was painted by …?”, preserving
one-to-many compatible answers. Definitions use “What does … mean in sculpture?”
and “In sculpture, … has this definition: …”. Definition text retains its authored
capitalization; blanks use “refers to _____”. Catalogue dates retain full uncertainty,
source context, original version and creation/completion distinctions.

Matching now uses the same scoped question as ordinary forms. Previously its
bare artwork label plus general scope omitted the date event, so a learner could
not reliably distinguish completion from creation. No semantic matrix, grading,
fact reuse, quotas or curriculum progression rules change.

Recognition requests that never load or error now time out after 15 seconds.
A supplied verified description replaces the failed image. Image-only requests
invoke the existing invalidation/replanning path once; late load/error callbacks
and callbacks after unmount are ignored. Successful loads retain `contain`,
source aspect ratio and the existing size cap. No runtime external search exists.

See `../data/imageCuration/README.md` for the actual local asset workflow and
pending hosting/approval gates. Neither staged asset is active in production.

## Simulator/device boundary

An existing iPhone 17 Pro simulator with iOS 26.3 was booted without erasing data.
Its installed-app inventory contains neither this quiz app nor Expo Go. Native
UI inspection was attempted twice; the Computer Use tool reported that macOS
Accessibility/Screen Recording permissions were not granted. No quiz screen,
interaction, image rendering or persisted device progress was observed. No app
was installed, no stored progress was reset, and no simulator gameplay pass is
claimed. Booting and listing apps are environment checks only.

Automated checks exercise real production facts/planning, answer normalization,
matching compatibility and immediate-lock transitions, image load/error/timeout
component callbacks, and mocked AsyncStorage access/progression/XP/streak rules.
They do not prove native touch targets, animation timing, screen-reader behavior,
visual legibility or actual device persistence.

Manual checks still required with the quiz app installed and UI access enabled:

- Complete real MCQ, TF, typed/options blank and four-pair matching quizzes.
- Observe green permanent locks and red-return feedback; exercise compatible
  alternate matches and duplicate-label rejection.
- Review long clue/scope layout, matching columns and accessibility labels.
- Once image delivery is approved, check contain rendering, credits and leakage,
  actual network errors, stalled requests, fallback/restart and shortage screens.
- Complete A/B/C and part/level transitions, relaunch for persistence, reject
  locked/malformed deep links, verify Design Coming soon and Level 10 reviews.
- Existing prerequisites are preserved: the pilot levels are locked on a fresh
  profile until prior lessons are completed. Do not bypass production access
  rules or fabricate prerequisite content to perform these checks.

This task does not qualify remaining Art facts, source all artwork images,
provision a CDN, grant cultural-property permissions or establish release-wide
factual/editorial approval.

## Change manifest

Modified:

- `components/quiz/QuizImage.tsx`
- `data/imageCuration/README.md`
- `data/imageCuration/art/painting.json`
- `data/imageCuration/art/sculpture.json`
- `src/images/types.ts`
- `src/images/__tests__/recognitionFailure.test.ts`
- `src/quizEngine/relationDefinitions.ts`
- `src/quizEngine/assessmentTemplates.ts`
- `src/quizEngine/exerciseFactory.ts`
- `src/quizEngine/__tests__/artUpgrade.test.ts`
- `src/quizEngine/__tests__/quizEngine.test.ts`
- `src/quizEngine/__tests__/semanticValidation.test.ts`

Created:

- `assets/staged-art/pilot-001-92eeeabc155f.jpg` (950 × 1280, 210,598 bytes)
- `assets/staged-art/pilot-002-f58668bdbba4.jpg` (853 × 1280, 121,598 bytes)
- `scripts/art-image-assets.cjs`
- `src/images/__tests__/artImageAssets.test.ts`
- `src/quizEngine/__tests__/assessmentWording.test.ts`
- `docs/art-quality-validation.md`

No existing files removed. No curriculum/content fact records changed. No Git
commit or push performed. Temporary dependency access reuses the existing main
worktree installation and is removed after validation; no dependency installed.

## Executed final validation

- Full Jest suite: **15 suites / 438 tests passed** (watchman disabled).
- TypeScript `tsc --noEmit`: passed.
- `npm run lint`: passed without warnings.
- `git diff --check`: passed.
- Offline image check: two staged, zero approved; byte/metadata/identity checks
  passed. Pending assets remain unavailable through the runtime projection.
- Production pilot sweep, 20 attempts: 600/600 forward, 60/60 terminology and
  120/120 reverse requests ready (**780/780**), zero validity/composition issues.
- Full production Art sweep, 20 attempts: 24,000 requests, **1,380 ready / 22,620
  explicit shortages**, zero validity/composition issues. Ready ordinary forms:
  3,220 MCQ, 1,610 True, 1,610 False and 3,220 blanks; 1,380 matching exercises.
  Coverage is unchanged from the pilot baseline. No unsafe fallback added.
- Actual generated forward, reverse, date and identification samples were
  inspected. All assertions/accepted answers, source qualifiers, typed-answer
  permissions and A/B/C quotas remain enforced.

The first full run found two tests whose subject lookup assumed a bare matching
label. They now locate facts by stable concept ID and still assert supplied-pool
membership, displayed subject/object and factual alternate-pair compatibility.
The final full suite passes; grading tests were not weakened to accept invalid
pairs. New regression cases cover natural/qualified wording, matching date-event
scope, stalled image callbacks, metadata removal, staged byte integrity and
fail-closed asset projection.
