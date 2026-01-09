export type XpLevel = {
  level: number;
  levelStartXP: number;
  nextLevelXP: number;
  xpIntoLevel: number;
  xpForNext: number;
  progress01: number;
};

const THRESHOLDS = [0, 50, 150, 300, 500, 750, 1050, 1400, 1800, 2250, 2750];

export function getXpLevel(totalXP: number): XpLevel {
  const xp = Math.max(0, Math.floor(totalXP || 0));

  let idx = 0;
  for (let i = 0; i < THRESHOLDS.length; i++) {
    if (xp >= THRESHOLDS[i]) idx = i;
    else break;
  }

  const level = idx + 1;
  const levelStartXP = THRESHOLDS[idx];
  const nextLevelXP =
    idx + 1 < THRESHOLDS.length ? THRESHOLDS[idx + 1] : levelStartXP + 500;

  const xpIntoLevel = xp - levelStartXP;
  const xpForNext = Math.max(0, nextLevelXP - xp);
  const denom = Math.max(1, nextLevelXP - levelStartXP);
  const progress01 = Math.min(1, Math.max(0, xpIntoLevel / denom));

  return { level, levelStartXP, nextLevelXP, xpIntoLevel, xpForNext, progress01 };
}
