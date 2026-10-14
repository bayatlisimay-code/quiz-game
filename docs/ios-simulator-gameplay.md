# iOS simulator workflow and executed gameplay validation

Baseline: `cfbd53d0cbba16c18bbfd82b03d1c9fa76aba492`.

## Diagnosis and launch

The previously inspected iPhone 17 Pro was an empty simulator. The existing
Quiz Game native debug app (`com.anonymous.quizgame`) is installed on the iPhone
16e running iOS 26.3. Its existing cached
native build is compatible with the current JS application. No dependency was
installed and no native app was rebuilt or reinstalled.

An existing Metro process on port 8081 belongs to the older
`codex/fix-question-templates` worktree. It was deliberately left untouched.
Latest committed main ran on port 8082; the isolated fix worktree ran on 8083.
The installed app accepts a launch-only React Native packager override:

```sh
# Main checkout; use its existing dependency installation.
cd /path/to/quiz-game
./node_modules/.bin/expo start --localhost --port 8082
```

In another terminal (boot the iPhone 16e first if it is shut down):

```sh
xcrun simctl list devices available
# Replace SIMULATOR_UDID with the existing device that has Quiz Game installed.
xcrun simctl launch SIMULATOR_UDID com.anonymous.quizgame -RCT_jsLocation localhost:8082
```

Do not start a second Metro on an already occupied port. During this session,
the main server was left available on 8082. Launch arguments are reversible and
do not permanently rewrite app preferences. Launching the icon after the process
has terminated can use default port 8081 again; use the explicit launch command
to avoid connecting to the older worktree.

The isolated worktree reused main's existing `node_modules` via a temporary
symlink. Default Expo virtual-entry rewriting escaped the project URL namespace
and produced an unresolved `Developer/quiz-game/node_modules/expo-router/entry`
path. `metro.config.js` now conditionally watches the real dependency target and
keeps native virtual-entry URLs inside `/node_modules/`. Ordinary installations
retain Expo defaults and all transform/query options are preserved. This was
validated by successfully loading the worktree bundle on the native simulator,
and by a temporary-project symlink regression test for iOS and Android URLs.
The temporary dependency symlink and worktree server were removed/stopped after
validation. To test the uncommitted worktree again, recreate that dependency
symlink, start Metro there on a free port, and use the matching launch override.

Expo emitted pre-existing advisory package-version warnings. They did not prevent
launch or gameplay; no dependency versions or lockfiles were changed.

## Actual native gameplay completed

Computer Use initially waited for macOS permissions, then became available.
The checks below used the actual native simulator UI, including screenshots,
button selection, text entry, feedback and completion screens:

| Quiz | Result | Ordinary MCQ / TF / blank | Matching |
|---|---|---|---|
| Painting l2 p1 A | 7/8 (one deliberately wrong MCQ) | 3 / 2 / 2 | four pairs |
| Painting l2 p1 B | 8/8 | 2 / 3 / 2 | four pairs |
| Painting l2 p1 C | 8/8 | 2 / 2 / 3 | four pairs |
| Painting l2 p2 A | 8/8 | 3 / 2 / 2 | four pairs |
| Sculpture l3 p1 A | 8/8 | 3 / 2 / 2 | four pairs |
| Painting l2 p5 C | 8/8 | 2 / 2 / 3 | four pairs |

Six quizzes / 48 exercises were played. MCQ showed incorrect selection red and
correct answer green. TF checked both truth values. A typed creator blank accepted
the declared `VAN EYCK` alias with extra spaces; the other creator blank switched
to certified options. Matching showed immediate red feedback for a wrong pair,
returned that pair, permanently locked correct pairs green and remained
completable. The actual generated cards had distinct answer labels. Long
recognition clues required scrolling; accessibility-target clicks successfully
brought lower cards and controls into view. Native swipe/scroll gestures themselves
were not exhaustively tested because coordinate scrolling was unreliable in the
Computer Use service.

On original unseeded progress, Renaissance Painting was locked and a direct
lesson URL showed “Complete the preceding levels first.” Design was disabled
with Coming soon, and its direct lesson URL also showed Coming soon.

For pilot access only, the stopped simulator app's AsyncStorage was backed up
before any launch. A temporary fixture completed earlier Painting/Sculpture
levels without changing production access code. Painting p1 B/C initially stayed
locked; A unlocked B, B unlocked C, C completed p1 and unlocked p2 while p3–p5
remained locked. Cold app termination/relaunch preserved the completed part and
next-part access.

For the final-review test, p1–p4 and p5 A/B were seeded temporarily; p5 C was
played normally. It completed the level and unlocked Baroque & Rococo Painting,
while later levels remained locked. This is not a claim that every preceding
part was manually played. The sampled p5 quiz selected previously taught
identification facts; creator/date variety across review seeds remains a learning
design consideration rather than an exercise-composition failure.

## Defects fixed and verified

- Results previously invented percentage-based XP (+44/+50), while persisted
  Total XP stayed zero. `completionReceipt` now reports actual persisted XP delta,
  part status and level status. The native result showed +0 XP correctly. No XP
  award policy, streak behavior or scoring rule was added or changed. Wiring
  intended XP awards remains a separate existing product dependency.
- Results hardcoded level completion false. The actual final-review result now
  shows both Part completed and Level completed from persisted progress.
- Continue called `router.back()` with no history after a cold deep link, causing
  an unhandled GO_BACK and trapping the learner. It now replaces the result with
  the guarded quiz chooser (or Home without retry coordinates). The same native
  result successfully continued after the fix; regression tests cover both paths.
- Worktree dependency symlinks broke Expo's native virtual entry. The conditional
  Metro fix is described above. Main remained untouched throughout implementation.

## Native image failure checks

A temporary `__DEV__`-only component harness used the real QuizImage component,
a localhost 404 and a deliberately never-completed HTTP response. The 404 rendered
the existing, source-checked School of Athens description. The stalled image-only
request emitted the recovery callback after the component timeout. These are
native component checks, not a claim of playing a production image-backed quiz
or end-to-end full-quiz regeneration. The local probe was stopped and the temporary
route was removed before final validation. No image registry binding was changed,
no staged asset approved, and no new educational fact was authored.

## Preservation and remaining checks

The app was terminated after testing. Its original AsyncStorage directory was
restored and all restored file hashes matched the pre-test backup byte-for-byte.
No temporary prerequisite or gameplay completion remains in the app store.
Backups remained outside the repository under `/tmp/quizgame-simulator-before-gameplay-*`;
test state was archived separately under `/tmp/quizgame-simulator-tested-state-*`.
No simulator storage, device identifier or workstation-specific user path is included
in this document or in the implementation.
The app was left stopped to preserve that exact snapshot. On a subsequent normal
launch, existing curriculum-version migration behavior still applies to old Art
progress; this task does not bypass that migration or alter unrelated progress.

Remaining manual/release checks: approved production images and attribution,
full quiz regeneration on an image-only failure, native gesture/touch-target
coverage, screen-reader behavior, smaller/larger devices, and exhaustive native
coverage of every part/variant and Level 10. Synthetic ambiguous-pair and duplicate
answer cases remain covered by automated tests, not claimed as native pilot cases.

## Automated validation

- Full Jest: 18 suites, 445 tests passed.
- TypeScript `tsc --noEmit`: passed.
- Lint: passed without warnings.
- Git whitespace checks: passed.
- Production pilot coverage: 780/780 requests ready, zero violations.
- New regressions cover native-entry rewriting with a real dependency symlink,
  persisted XP/part/level receipts, storage reload, and cold-result navigation.

## Files changed

Modified: `metro.config.js`, `app/quizResult.tsx`,
`app/topic/[topicId]/subtopic/[subtopicId]/level/[levelId]/[partId].tsx`.

Created: `src/state/completionReceipt.ts`,
`src/state/__tests__/completionReceipt.test.ts`,
`src/state/__tests__/quizResultNavigation.test.ts`,
`src/quizEngine/__tests__/metroWorktree.test.ts`, and this document.

No content or image records changed. No commit or push performed.
