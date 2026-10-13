import { Text } from "react-native";
import type { AssessmentStimulus as Stimulus } from "../../src/quizEngine/assessmentTypes";
import { QuizImage } from "./QuizImage";

export function AssessmentStimulus({ stimulus, onUnavailable }: { stimulus: Stimulus; onUnavailable: (imageId: string) => void }) {
  if (stimulus.kind === "text") return <Text style={{ color: "#E5F3FF", marginVertical: 12 }}>{stimulus.text}</Text>;
  return <QuizImage image={stimulus.image} fallbackText={stimulus.fallbackText} onFailure={() => onUnavailable(stimulus.image.imageId)} />;
}
