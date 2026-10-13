import type { RuntimeImageRegistry } from "./types";
import { resolveQuizImage } from "./resolveQuizImage";
import type { Concept, Exercise } from "../quizEngine/conceptTypes";
import type { AssessmentStimulus } from "../quizEngine/assessmentTypes";
import type { SemanticContext } from "../quizEngine/semanticValidation";
import { relationDefinitions } from "../quizEngine/relationCatalogue";

export function planAssessmentStimulus(concept: Concept, context: SemanticContext, type: Exercise["type"]): { available: boolean; reason: string; stimulus?: AssessmentStimulus } {
  if (relationDefinitions[concept.relation]?.family !== "identification") return { available: true, reason: "Text question" };
  const description = concept.assessment?.identification?.description;
  const text = description?.answerLeakageReviewed && description.text.trim() && description.evidenceIds.length &&
    description.evidenceIds.every(id => context.evidenceForId(id)?.reviewStatus === "verified") ? description.text : undefined;
  const binding = context.images.bindings[concept.id];
  const image = binding?.recognition?.answerId === concept.semantic?.value?.id && binding.recognition.answerLeakageReviewed
    ? resolveQuizImage(concept.id, type, context.images) : undefined;
  if (image) return { available: true, reason: "Approved recognition image", stimulus: { kind: "image", image, fallbackText: text } };
  if (text) return { available: true, reason: "Verified authored identification description", stimulus: { kind: "text", text } };
  return { available: false, reason: "Identification requires an approved recognition asset or verified authored description" };
}
export function withoutFailedImages(registry: RuntimeImageRegistry, failed: readonly string[]): RuntimeImageRegistry {
  const unavailable = new Set(failed);
  return { ...registry, bindings: Object.fromEntries(Object.entries(registry.bindings).filter(([, binding]) => !unavailable.has(binding.image.imageId))) };
}
