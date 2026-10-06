import type { Exercise } from "../quizEngine/conceptTypes";
import { resolveQuizImage } from "./resolveQuizImage";
import { runtimeImageRegistry } from "./runtimeRegistry";
import type { PresentedExercise, RuntimeImageRegistry } from "./types";

export function attachQuizImages(
  exercises: readonly Exercise[],
  registry: RuntimeImageRegistry = runtimeImageRegistry,
): PresentedExercise[] {
  return exercises.map(exercise => {
    if (exercise.type === "matching") return exercise;
    const image = resolveQuizImage(exercise.conceptId, exercise.type, registry);
    return image ? { ...exercise, image } : exercise;
  });
}
