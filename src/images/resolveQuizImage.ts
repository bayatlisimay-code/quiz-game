import type { Exercise } from "../quizEngine/conceptTypes";
import { runtimeImageRegistry } from "./runtimeRegistry";
import type { QuizImage, RuntimeImageRegistry } from "./types";

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isHostname(value: unknown): value is string {
  return typeof value === "string" && value.length <= 253 &&
    /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i.test(value);
}

function isSupportedType(value: unknown): boolean {
  return value === "mcq" || value === "true_false" || value === "fill_blank";
}

export function isOwnedImageUrl(uri: unknown, ownedHosts: unknown): boolean {
  if (!isNonEmptyString(uri) || !Array.isArray(ownedHosts) || !ownedHosts.every(isHostname)) return false;
  try {
    const url = new URL(uri);
    return url.protocol === "https:" && !url.username && !url.password &&
      !url.port && isHostname(url.hostname) && ownedHosts.includes(url.hostname);
  } catch {
    return false; // URL parsing is the only throwing operation for ordinary manifest data.
  }
}

export function hasRequiredAttribution(credit: unknown): boolean {
  return isRecord(credit) && [credit.creator, credit.source, credit.sourceUrl, credit.licenseLabel,
    credit.licenseUrl, credit.changes].every(isNonEmptyString) &&
    (credit.title === undefined || isNonEmptyString(credit.title)) &&
    (credit.requiredNotices === undefined ||
      (Array.isArray(credit.requiredNotices) && credit.requiredNotices.every(isNonEmptyString)));
}

export function resolveQuizImage(
  conceptId: string,
  exerciseType: Exercise["type"],
  registry: RuntimeImageRegistry = runtimeImageRegistry,
): QuizImage | undefined {
  if (!isSupportedType(exerciseType) || !isNonEmptyString(conceptId) ||
      !isRecord(registry) || registry.schemaVersion !== 1 || !isRecord(registry.bindings) ||
      !Object.prototype.hasOwnProperty.call(registry.bindings, conceptId)) return undefined;
  const binding = registry.bindings[conceptId];
  if (!isRecord(binding) || binding.reviewStatus !== "approved" || binding.conceptId !== conceptId ||
      !Array.isArray(binding.allowedExerciseTypes) ||
      !binding.allowedExerciseTypes.every(isSupportedType) ||
      !binding.allowedExerciseTypes.includes(exerciseType)) return undefined;
  const image = binding.image;
  if (!isRecord(image) || !isNonEmptyString(image.imageId) || !isNonEmptyString(image.altText) ||
      typeof image.width !== "number" || !Number.isFinite(image.width) || image.width <= 0 ||
      typeof image.height !== "number" || !Number.isFinite(image.height) || image.height <= 0 ||
      !isOwnedImageUrl(image.uri, registry.ownedHosts) ||
      (image.attribution !== undefined && !hasRequiredAttribution(image.attribution))) return undefined;
  return image;
}
