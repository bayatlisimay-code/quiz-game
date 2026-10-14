import { isLevelCompleted, isPartCompleted } from "./progress";
import type { Progress } from "./progress";

/** Report persisted outcomes, never a hypothetical reward or hardcoded status.
 * Reward policy remains with the progress writer; this helper grants nothing.
 */
export function completionReceipt(before: Progress, after: Progress, lesson: {
  topicId: string; subtopicId: string; levelId: string; partId: string; totalParts: number;
}) {
  return {
    xp: after.totalXP - before.totalXP,
    partCompleted: isPartCompleted(after, lesson.topicId, lesson.subtopicId, lesson.levelId, lesson.partId),
    levelCompleted: isLevelCompleted(after, lesson.topicId, lesson.subtopicId, lesson.levelId, lesson.totalParts),
  };
}
