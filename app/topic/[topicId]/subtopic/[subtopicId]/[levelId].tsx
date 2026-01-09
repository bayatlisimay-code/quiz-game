import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { getQuestionSetOrEmpty, type MCQQuestion } from "../../../../../data/questionBank/registry";
import {
  addXp,
  getStreakBonusXp,
  loadProgress,
  saveProgress,
  updateStreak,
  XP_PART_BONUS,
  XP_PER_CORRECT,
} from "../../../../../src/state/progress";


export default function QuizScreen() {
  const router = useRouter();
  const { topicId, subtopicId, levelId, partId, set } = useLocalSearchParams<{
  topicId: string;
  subtopicId: string;
  levelId: string;
  partId: string;
  set: string;
}>();

  const questions = useMemo(() => {
    if (!set) return [];
    return getQuestionSetOrEmpty(String(set));
  }, [set]);

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const q: MCQQuestion | undefined = questions[index];
  const total = questions.length;

  const onPick = (i: number) => {
    if (checked) return;
    setSelected(i);
  };

  const onCheck = async () => {
  if (!q || selected == null) return;
  setChecked(true);
  if (selected === q.correctIndex) {
    setCorrectCount((c) => c + 1);
    await addXp(XP_PER_CORRECT);
  }
};
  
const finishPart = async () => {
  const t = String(topicId);
  const s = String(subtopicId);
  const l = String(levelId);
  const p = Number(partId);

  const progress = await loadProgress();
  const existing: number[] = progress.completedParts?.[t]?.[s]?.[l] ?? [];
  
  const newStreak = await updateStreak();
  const bonus = getStreakBonusXp(newStreak);
  if (bonus > 0) await addXp(bonus);

  if (Number.isFinite(p) && p > 0 && !existing.includes(p)) {
    const next = [...existing, p].sort((a, b) => a - b);

    const updated = {
      ...progress,
      completedParts: {
        ...(progress.completedParts ?? {}),
        [t]: {
          ...((progress.completedParts ?? {})[t] ?? {}),
          [s]: {
            ...((progress.completedParts ?? {})[t]?.[s] ?? {}),
            [l]: next,
          },
        },
      },
    };

    await saveProgress(updated);
    await addXp(XP_PART_BONUS);
  }

  router.back(); // go back to LevelScreen (parts list)
  };

  const onNext = async () => {
  if (!checked) return;
  const nextIndex = index + 1;

  if (nextIndex < total) {
    setIndex(nextIndex);
    setSelected(null);
    setChecked(false);
    return;
  }

  await finishPart();
  };

  const empty = total === 0;

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Quiz" }} />

      {empty ? (
        <View style={styles.card}>
          <Text style={styles.title}>No questions yet</Text>
          <Text style={styles.subtitle}>Missing set: {String(set ?? "")}</Text>

          <Pressable style={styles.primaryBtn} onPress={() => router.back()}>
            <Text style={styles.primaryBtnText}>Go back</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.card}>
          <Text style={styles.progress}>
            {index + 1}/{total}
          </Text>

          <Text style={styles.title}>{q?.question}</Text>

          <View style={styles.options}>
            {q?.options.map((opt, i) => {
              const isSelected = selected === i;
              const isCorrect = checked && i === q.correctIndex;
              const isWrongPicked = checked && isSelected && i !== q.correctIndex;

              return (
                <Pressable
                  key={`${q.id}_${i}`}
                  onPress={() => onPick(i)}
                  style={[
                    styles.option,
                    isSelected && styles.optionSelected,
                    isCorrect && styles.optionCorrect,
                    isWrongPicked && styles.optionWrong,
                  ]}
                >
                  <Text style={styles.optionText}>{opt}</Text>
                </Pressable>
              );
            })}
          </View>

          {!checked ? (
            <Pressable
              style={[styles.primaryBtn, selected == null && styles.btnDisabled]}
              onPress={onCheck}
              disabled={selected == null}
            >
              <Text style={styles.primaryBtnText}>Check</Text>
            </Pressable>
          ) : (
            <Pressable style={styles.primaryBtn} onPress={onNext}>
              <Text style={styles.primaryBtnText}>
                {index + 1 === total ? "Finish" : "Next"}
              </Text>
            </Pressable>
          )}

          {checked ? (
            <Text style={styles.scoreText}>
             Score: {correctCount}/{index + 1}
            </Text>
          ) : null}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#050816", padding: 16 },
  card: {
    backgroundColor: "#0b1026",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },
  progress: { color: "rgba(255,255,255,0.7)", marginBottom: 8 },
  title: { color: "white", fontSize: 18, fontWeight: "800", marginBottom: 12 },
  subtitle: { color: "rgba(255,255,255,0.75)", marginBottom: 16 },
  options: { gap: 10, marginBottom: 16 },
  option: {
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: "rgba(255,255,255,0.06)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },
  optionSelected: {
    borderColor: "rgba(255,255,255,0.28)",
    backgroundColor: "rgba(255,255,255,0.10)",
  },
  optionCorrect: {
    borderColor: "rgba(34,197,94,0.65)",
    backgroundColor: "rgba(34,197,94,0.18)",
  },
  optionWrong: {
    borderColor: "rgba(239,68,68,0.65)",
    backgroundColor: "rgba(239,68,68,0.18)",
  },
  optionText: { color: "white", fontSize: 15, lineHeight: 20 },
  primaryBtn: {
    marginTop: 6,
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: "center",
    backgroundColor: "#2563EB",
  },
  btnDisabled: { opacity: 0.45 },
  primaryBtnText: { color: "white", fontWeight: "800" },
  scoreText: { marginTop: 10, color: "rgba(255,255,255,0.7)", fontWeight: "700" },
});
