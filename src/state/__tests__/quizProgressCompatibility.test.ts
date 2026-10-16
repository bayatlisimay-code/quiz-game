import { ART_CURRICULUM_VERSION } from "../../../data/artCurriculum";
let mockSaved: string | null;
jest.mock("@react-native-async-storage/async-storage", () => ({
  __esModule: true, default: {
    getItem: jest.fn(async () => mockSaved),
    setItem: jest.fn(async (_key: string, value: string) => { mockSaved = value; }),
  },
}));
const saved = () => ({ curriculumVersion: ART_CURRICULUM_VERSION, totalXP: 42, completedParts: { art: { painting: { "1": ["1"] } } },
  streakCount: 4, lastPlayedDate: "2026-10-11", completedQuizVariants: { art: { painting: { "1": { "1": ["A", "B", "C"] } } } } });
let progress: typeof import("../progress");
beforeEach(async () => {
  jest.resetModules(); mockSaved = JSON.stringify(saved());
  progress = await import("../progress");
});
test("activated curriculum progress loads unchanged without another reset", async () => {
  expect(await progress.loadProgress()).toEqual(saved());
  expect(JSON.parse(mockSaved!)).toEqual(saved());
  expect(await progress.getCompletedQuizVariants("art", "painting", "1", "1")).toEqual(["A", "B", "C"]);
  expect(progress.isPartCompleted(await progress.loadProgress(), "art", "painting", "1", "1")).toBe(true);
});
test("part completion requires A/B/C and does not reset existing XP or streak", async () => {
  expect(await progress.markQuizVariantCompleted("art", "painting", "1", "2", "A")).toBe(false);
  expect(progress.isPartCompleted(await progress.loadProgress(), "art", "painting", "1", "2")).toBe(false);
  expect(await progress.markQuizVariantCompleted("art", "painting", "1", "2", "B")).toBe(false);
  expect(await progress.markQuizVariantCompleted("art", "painting", "1", "2", "C")).toBe(true);
  expect(progress.isPartCompleted(await progress.loadProgress(), "art", "painting", "1", "2")).toBe(true);
  expect(await progress.loadProgress()).toMatchObject({ totalXP: 42, streakCount: 4, lastPlayedDate: "2026-10-11" });
});
test("XP awarding preserves completion records and streak state", async () => {
  await progress.addXp(15);
  expect(await progress.loadProgress()).toEqual({ ...saved(), totalXP: 57 });
});
test("existing daily streak updates remain idempotent", async () => {
  jest.useFakeTimers().setSystemTime(new Date("2026-10-12T12:00:00Z"));
  try {
    expect(await progress.updateStreak()).toBe(5);
    expect(await progress.updateStreak()).toBe(5);
    expect(await progress.loadProgress()).toEqual({ ...saved(), streakCount: 5, lastPlayedDate: "2026-10-12" });
  } finally { jest.useRealTimers(); }
});

test("activation backs up simulated progress and resets only obsolete Art completion once", async () => {
  jest.resetModules();
  const old = { ...saved(), curriculumVersion: undefined, completedParts: { ...saved().completedParts, science: { chemistry: { "1": ["1"] } } } };
  mockSaved = JSON.stringify(old);
  const fresh = await import("../progress");
  const result = await fresh.loadProgress();
  expect(result.completedParts.art).toBeUndefined(); expect(result.completedQuizVariants.art).toBeUndefined();
  expect(result.completedParts.science).toEqual(old.completedParts.science);
  expect(result).toMatchObject({ totalXP: 42, streakCount: 4, curriculumVersion: ART_CURRICULUM_VERSION });
  const storage = (await import("@react-native-async-storage/async-storage")).default;
  expect(storage.setItem).toHaveBeenCalledWith("quizgame_progress_before_art_miro", JSON.stringify(old));
  const calls = (storage.setItem as jest.Mock).mock.calls.length;
  await fresh.loadProgress(); expect((storage.setItem as jest.Mock).mock.calls.length).toBe(calls);
});

test("completion cannot bypass A/B/C, preceding parts, levels, or locked Design", async () => {
  await expect(progress.markQuizVariantCompleted("art", "painting", "1", "2", "B")).rejects.toThrow(/Quiz A/);
  await expect(progress.markQuizVariantCompleted("art", "painting", "1", "2", "C")).rejects.toThrow(/Quiz A/);
  await expect(progress.markQuizVariantCompleted("art", "painting", "1", "3", "A")).rejects.toThrow(/preceding parts/);
  await expect(progress.markQuizVariantCompleted("art", "painting", "2", "1", "A")).rejects.toThrow(/preceding levels/);
  await expect(progress.markQuizVariantCompleted("art", "design", "1", "1", "A")).rejects.toThrow(/Coming soon/);
});


test("Design availability can be deliberately enabled without changing shared curriculum support", async () => {
  const { lessonAccess } = await import("../lessonAccess");
  const request = { topicId: "art", subtopicId: "design", levelId: "1", partId: "1", variant: "A" };
  expect(lessonAccess(await progress.loadProgress(), request).allowed).toBe(false);
  expect(lessonAccess(await progress.loadProgress(), request, { design: "available" }).allowed).toBe(true);
});

test('new taught-fact receipts survive save/reload without clearing old completion history, XP or streak', async () => {
  const taught = Array.from({length:6},(_,i)=>`fixture-fact:${i}`);
  await progress.markQuizVariantCompleted('art','painting','1','1','A',taught);
  const current = await progress.loadProgress();
  expect(current).toEqual({...saved(),learnedFactIds:taught});
  await progress.markQuizVariantCompleted('art','painting','1','1','A',taught);
  expect((await progress.loadProgress()).learnedFactIds).toEqual(taught);
  jest.resetModules(); progress = await import('../progress');
  expect(await progress.loadProgress()).toEqual({...saved(),learnedFactIds:taught});
});
