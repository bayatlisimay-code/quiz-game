import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "quizgame_progress_v2"; // Changed version to avoid conflicts

export type Progress = {
  totalXP: number;
  completedParts: Record<string, Record<string, Record<string, number[]>>>; // topicId -> subtopicId -> levelId -> partIds[]
  streakCount: number;
  lastPlayedDate: string | null; // YYYY-MM-DD
};

const DEFAULT_PROGRESS: Progress = {
  totalXP: 0,
  completedParts: {},
  streakCount: 0,
  lastPlayedDate: null,
};

let inMemory: Progress | null = null;

function normalize(progress: Partial<Progress>): Progress {
  const completedParts: Progress["completedParts"] = {};

  const src = progress.completedParts ?? {};
  for (const topicId of Object.keys(src)) {
    completedParts[topicId] = {};
    for (const subtopicId of Object.keys(src[topicId] ?? {})) {
      completedParts[topicId][subtopicId] = {};
      for (const levelId of Object.keys(src[topicId][subtopicId] ?? {})) {
        const arr = src[topicId][subtopicId][levelId] ?? [];
        completedParts[topicId][subtopicId][levelId] = Array.from(new Set(arr)).sort((a, b) => a - b);
      }
    }
  }

  return {
    totalXP: Number.isFinite(progress.totalXP) ? progress.totalXP! : 0,
    completedParts,
    streakCount: Number.isFinite(progress.streakCount) ? progress.streakCount! : 0,
    lastPlayedDate: typeof progress.lastPlayedDate === "string" ? progress.lastPlayedDate : null,
  };
}

export async function loadProgress(): Promise<Progress> {
  if (inMemory) return inMemory;

  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (!raw) {
      inMemory = DEFAULT_PROGRESS;
      return inMemory;
    }
    inMemory = normalize(JSON.parse(raw));
    return inMemory;
  } catch {
    inMemory = DEFAULT_PROGRESS;
    return inMemory;
  }
}

export async function saveProgress(progress: Progress): Promise<void> {
  const normalized = normalize(progress);
  inMemory = normalized;
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
}

export const XP_PER_CORRECT = 5;
export const XP_PART_BONUS = 5;
export const XP_LEVEL_BONUS = 10;
export const XP_STREAK_3_BONUS = 5;
export const XP_STREAK_7_BONUS = 10;
export const XP_STREAK_14_BONUS = 20;

export function getStreakBonusXp(streakCount: number): number {
  if (streakCount >= 14) return XP_STREAK_14_BONUS;
  if (streakCount >= 7) return XP_STREAK_7_BONUS;
  if (streakCount >= 3) return XP_STREAK_3_BONUS;
  return 0;
}

export async function addXp(amount: number): Promise<void> {
  const progress = await loadProgress();
  await saveProgress({ ...progress, totalXP: progress.totalXP + amount });
}

export async function updateStreak(): Promise<number> {
  const progress = await loadProgress();

  const today = new Date().toISOString().slice(0, 10);
  if (progress.lastPlayedDate === today) return progress.streakCount;

  const y = new Date();
  y.setDate(y.getDate() - 1);
  const yesterday = y.toISOString().slice(0, 10);

  const streakCount =
    progress.lastPlayedDate === yesterday ? progress.streakCount + 1 : 1;

  await saveProgress({
    ...progress,
    streakCount,
    lastPlayedDate: today,
  });
  return streakCount;
}
// Helper function to check if a level is completed (all parts done)
export function isLevelCompleted(
  progress: Progress,
  topicId: string,
  subtopicId: string,
  levelId: string,
  totalParts: number
): boolean {
  const completedPartIds = progress.completedParts?.[topicId]?.[subtopicId]?.[levelId] ?? [];
  return completedPartIds.length === totalParts;
}

// Helper function to check if a part is completed
export function isPartCompleted(
  progress: Progress,
  topicId: string,
  subtopicId: string,
  levelId: string,
  partId: string
): boolean {
  const completedPartIds = progress.completedParts?.[topicId]?.[subtopicId]?.[levelId] ?? [];
  return completedPartIds.includes(Number(partId));
}

export async function markPartCompleted(
  topicId: string,
  subtopicId: string,
  levelId: string,
  partId: string
): Promise<void> {
  const progress = await loadProgress();

  const partNum = Number(partId);

  const nextCompletedParts = {
    ...progress.completedParts,
    [topicId]: {
      ...(progress.completedParts[topicId] ?? {}),
      [subtopicId]: {
        ...(progress.completedParts[topicId]?.[subtopicId] ?? {}),
        [levelId]: Array.from(
          new Set([
            ...((progress.completedParts[topicId]?.[subtopicId]?.[levelId] ?? []) as number[]),
            partNum,
          ])
        ).sort((a, b) => a - b),
      },
    },
  };

  await saveProgress({
    ...progress,
    completedParts: nextCompletedParts,
  });
}
