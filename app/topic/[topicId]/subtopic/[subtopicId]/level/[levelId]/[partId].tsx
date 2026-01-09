import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { QUESTION_SETS } from "../../../../../../../data/questionSets";

type Question = {
  id: number | string;
  question: string;
  options: string[];
  correctIndex: number;
};

export default function PartQuizScreen() {
  const router = useRouter();
  const { set } = useLocalSearchParams<{ set?: string }>();

  const setId = String(set ?? "");

  const questions = useMemo(() => {
    const q = QUESTION_SETS[setId] as unknown as Question[] | undefined;
    return Array.isArray(q) ? q : [];
  }, [setId]);

  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const current = questions[idx];

  const onPick = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === current.correctIndex) setCorrectCount((c) => c + 1);
  };

  const onNext = () => {
    if (selected === null) return;

    const next = idx + 1;
    if (next >= questions.length) {
      setFinished(true);
      return;
    }
    setIdx(next);
    setSelected(null);
  };

  if (!setId) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No question set</Text>
        <Text style={styles.body}>This part was opened without a "set" param.</Text>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backText}>← Back</Text>
        </Pressable>
      </View>
    );
  }

  if (questions.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No questions yet</Text>
        <Text style={styles.body}>Set: {setId}</Text>
        <Text style={styles.body}>
          Add this setId to data/questionSets.ts (QUESTION_SETS).
        </Text>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backText}>← Back</Text>
        </Pressable>
      </View>
    );
  }

  if (finished) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Done ✅</Text>
        <Text style={styles.body}>
          Score: {correctCount} / {questions.length}
        </Text>

        <Pressable style={styles.primaryButton} onPress={() => router.back()}>
          <Text style={styles.primaryText}>Back to parts</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backText}>← Back</Text>
        </Pressable>

        <Text style={styles.progress}>
          {idx + 1}/{questions.length}
        </Text>
      </View>

      <Text style={styles.question}>{current.question}</Text>

      {current.options.map((opt, i) => {
        const picked = selected === i;
        const isCorrect = i === current.correctIndex;
        const showResult = selected !== null;

        return (
          <Pressable
            key={`${current.id}-${i}`}
            style={[
              styles.option,
              picked && styles.optionPicked,
              showResult && isCorrect && styles.optionCorrect,
              showResult && picked && !isCorrect && styles.optionWrong,
            ]}
            onPress={() => onPick(i)}
            disabled={selected !== null}
          >
            <Text style={styles.optionText}>{opt}</Text>
          </Pressable>
        );
      })}

      <Pressable
        style={[styles.primaryButton, { opacity: selected === null ? 0.5 : 1 }]}
        onPress={onNext}
        disabled={selected === null}
      >
        <Text style={styles.primaryText}>
          {idx + 1 === questions.length ? "Finish" : "Next"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#050816", paddingTop: 60, paddingHorizontal: 24 },
  title: { color: "#E5F3FF", fontSize: 22, fontWeight: "800", marginBottom: 10 },
  body: { color: "#B3C7E6", fontSize: 15, marginBottom: 8 },
  topRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  progress: { color: "#B3C7E6", fontWeight: "800" },
  backButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#3B82F6",
  },
  backText: { color: "#BFDBFE", fontSize: 14, fontWeight: "700" },
  question: { color: "#E5F3FF", fontSize: 18, fontWeight: "800", marginTop: 18, marginBottom: 14 },
  option: {
    backgroundColor: "#1F2937",
    padding: 14,
    borderRadius: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#111827",
  },
  optionPicked: { borderColor: "#60A5FA" },
  optionCorrect: { borderColor: "#34D399" },
  optionWrong: { borderColor: "#FB7185" },
  optionText: { color: "#E5F3FF", fontSize: 16, fontWeight: "700" },
  primaryButton: {
    marginTop: 14,
    backgroundColor: "#2563EB",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },
  primaryText: { color: "#E5F3FF", fontSize: 16, fontWeight: "900" },
});
