import { TOPIC_BY_ID } from "../../data/catalog";
import { artAvailability } from "../../data/artCurriculum";
import type { Progress } from "./progress";

export type LessonRequest = Readonly<{ topicId: string; subtopicId: string; levelId?: string; partId?: string; variant?: string }>;
export type AccessDecision = Readonly<{ allowed: boolean; reason: string }>;
export function lessonAccess(progress: Pick<Progress, "completedParts" | "completedQuizVariants">, request: LessonRequest,
  availability: Readonly<Record<string, "available" | "coming-soon">> = artAvailability): AccessDecision {
  const deny = (reason: string): AccessDecision => ({ allowed: false, reason });
  const subtopic = TOPIC_BY_ID[request.topicId]?.subtopics.find(s => s.id === request.subtopicId);
  if (!subtopic) return deny("Unknown lesson.");
  if ((request.topicId === "art" ? availability[request.subtopicId] ?? subtopic.availability : subtopic.availability) === "coming-soon") return deny("Coming soon");
  if (!request.levelId) return { allowed: true, reason: "Available" };
  if (!/^(?:l)?(?:[1-9]|10)$/.test(request.levelId)) return deny("Unknown level.");
  const level = Number(request.levelId.replace(/^l/, ""));
  const completed = progress.completedParts[request.topicId]?.[request.subtopicId] ?? {};
  for (let previous = 1; previous < level; previous++) {
    if (!["1", "2", "3", "4", "5"].every(p => completed[String(previous)]?.includes(p))) return deny("Complete the preceding levels first.");
  }
  if (!request.partId) return { allowed: true, reason: "Available" };
  if (!/^(?:p)?[1-5]$/.test(request.partId)) return deny("Unknown part.");
  const part = Number(request.partId.replace(/^p/, ""));
  for (let previous = 1; previous < part; previous++) if (!completed[String(level)]?.includes(String(previous))) return deny("Complete the preceding parts first.");
  if (request.variant !== undefined) {
    if (!["A", "B", "C"].includes(request.variant)) return deny("Unknown quiz variant.");
    const variants = progress.completedQuizVariants[request.topicId]?.[request.subtopicId]?.[String(level)]?.[String(part)] ?? [];
    if (request.variant === "B" && !variants.includes("A")) return deny("Complete Quiz A first.");
    if (request.variant === "C" && (!variants.includes("A") || !variants.includes("B"))) return deny("Complete Quiz A and Quiz B first.");
  }
  return { allowed: true, reason: "Available" };
}
