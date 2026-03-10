// app/quizResult.tsx
import { useLocalSearchParams, useRouter } from "expo-router";
import { useMemo } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function toBool(v: unknown): boolean {
  if (typeof v === "boolean") return v;
  if (typeof v === "string") return v === "true" || v === "1" || v.toLowerCase() === "yes";
  return false;
}

function toInt(v: unknown, fallback = 0): number {
  if (typeof v === "number") return Math.floor(v);
  if (typeof v === "string") {
    const n = parseInt(v, 10);
    return Number.isFinite(n) ? n : fallback;
  }
  return fallback;
}

export default function QuizResultScreen() {
  const router = useRouter();

  const params = useLocalSearchParams<{
    score?: string;
    total?: string;
    percent?: string;
    xp?: string;
    partCompleted?: string;
    levelCompleted?: string;

    retrySet?: string;
    retryTopicId?: string;
    retrySubtopicId?: string;
    retryLevelId?: string;
    retryPartId?: string;
  }>();

  const score = toInt(params.score, 0);
  const total = Math.max(1, toInt(params.total, 1));
  const xp = toInt(params.xp, 0);

  const partCompleted = toBool(params.partCompleted);
  const levelCompleted = toBool(params.levelCompleted);

  const percent = useMemo(() => {
    if (params.percent) return toInt(params.percent, Math.round((score / total) * 100));
    return Math.round((score / total) * 100);
  }, [params.percent, score, total]);

    const onRetry = () => {
      if (
        params.retryTopicId &&
        params.retrySubtopicId &&
        params.retryLevelId &&
        params.retryPartId
      ) {
        router.replace({
          pathname:
            "/topic/[topicId]/subtopic/[subtopicId]/level/[levelId]/[partId]",
          params: {
            topicId: params.retryTopicId,
            subtopicId: params.retrySubtopicId,
            levelId: params.retryLevelId,
            partId: params.retryPartId,
            set: params.retrySet ?? "A",
          },
        });
      } else {
        router.back();
      }
    };

    const onContinue = () => {
    router.back();
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 Quiz Complete!</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Score</Text>
        <Text style={styles.big}>
          {score} / {total} ({percent}%)
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>XP gained</Text>
        <Text style={styles.big}>⭐ +{xp} XP</Text>
        <Text style={styles.hint}>
          (We’ll plug in the real XP rules later. For now this screen just shows the value it receives.)
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Progress</Text>

        <Text style={styles.rowText}>
          {partCompleted ? "✅ Part completed" : "• Part not completed yet"}
        </Text>

        <Text style={styles.rowText}>
          {levelCompleted ? "🏆 Level completed" : "• Level not completed yet"}
        </Text>
      </View>

      <View style={styles.buttonRow}>
        <Pressable style={[styles.button, styles.secondary]} onPress={onRetry}>
          <Text style={styles.buttonText}>Retry</Text>
        </Pressable>

        <Pressable style={[styles.button, styles.primary]} onPress={onContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#050816",
    justifyContent: "flex-start",
    paddingTop: 80,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 14,
    textAlign: "center",
    color: "#FFFFFF",
  },
  card: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    backgroundColor: "#3567D6",
  },
  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FFFFFF",
    opacity: 0.9,
    marginBottom: 6,
  },
  big: {
    fontSize: 22,
    fontWeight: "800",
    color: "#FFFFFF",
  },
  hint: {
    marginTop: 8,
    fontSize: 12,
    color: "#FFFFFF",
    opacity: 0.85,
    lineHeight: 16,
  },
  rowText: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 6,
    color: "#FFFFFF",
  },
  buttonRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: "center",
    borderWidth: 2,
  },

  primary: {
    borderColor: "#3B82F6",
  },

  secondary: {
    borderColor: "#3B82F6",
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});