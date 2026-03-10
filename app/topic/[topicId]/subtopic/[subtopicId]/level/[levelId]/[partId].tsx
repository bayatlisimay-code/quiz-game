import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { TOPIC_BY_ID } from "../../../../../../../data/catalog";
import { useStreak } from "../../../../../../../src/state/useStreak";
import { useTotalXp } from "../../../../../../../src/state/useTotalXp";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { buildExercise, Exercise } from "../../../../../../../src/quizEngine/exerciseFactory";
import { loadConceptsByKey } from "../../../../../../../src/quizEngine/loadConcepts";
import { saveLastLocation } from "../../../../../../../src/state/lastLocation";
import { markQuizVariantCompleted } from "../../../../../../../src/state/progress";

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "#050816",
  paddingHorizontal: 24,
  paddingTop: 60,
},
  title: { color: "#E5F3FF", fontSize: 22, fontWeight: "800", marginBottom: 10 },
  body: { color: "#B3C7E6", fontSize: 15, marginBottom: 8 },
  question: { color: "#E5F3FF", fontSize: 18, marginVertical: 20 },
  option: {
    backgroundColor: "#1F2937",
    padding: 14,
    borderRadius: 14,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "transparent",
  },
  optionSelected: { borderColor: "#FFFFFF" },
  optionCorrect: { borderColor: "#22C55E" },
  optionWrong: { borderColor: "#EF4444" },

  optionText: { color: "#E5F3FF", fontSize: 16 },
  input: {
    backgroundColor: "#1F2937",
    padding: 14,
    borderRadius: 14,
    color: "#E5F3FF",
    marginBottom: 14,
    borderWidth: 2,
    borderColor: "transparent",
  },
  primaryButton: {
    backgroundColor: "#2563EB",
    padding: 14,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 14,
  },
  primaryText: { color: "#E5F3FF", fontWeight: "800" },
  progressBackground: {
    height: 8,
    backgroundColor: "#1F2937",
    borderRadius: 999,
    overflow: "hidden",
  },
  progressFill: {
    height: 8,
    backgroundColor: "#3B82F6",
  },
  topRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },

  backButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#3B82F6",
  },

  headerRow: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 12,
  },
  headerTitle: {
    color: "#E5F3FF",
    fontSize: 14,
    fontWeight: "700",
    flex: 1,
    textAlign: "center",
    marginHorizontal: 12,
  },
  xpPill: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#F97316",
    marginLeft: 10,
  },
  xpText: { color: "#FDBA74", fontSize: 13, fontWeight: "800" },

  backText: { color: "#BFDBFE", fontSize: 14, fontWeight: "700" },

});

export default function PartQuizScreen() {
  const router = useRouter();

  const { topicId, subtopicId, levelId, partId, set } =
    useLocalSearchParams<{
      topicId?: string;
      subtopicId?: string;
      levelId?: string;
      partId?: string;
      set?: string;
    }>();

  const totalXP = useTotalXp();
  const streak = useStreak();

  const topic = TOPIC_BY_ID[String(topicId)];
  const subtopic = topic?.subtopics.find((s) => s.id === String(subtopicId));
  const level = subtopic?.levels.find((l) => l.id === String(levelId));

  const setValue = String(set ?? "");
  const hasQuizVariant =
    setValue.includes("quizA") || setValue.includes("quizB") || setValue.includes("quizC");

  const [attempt, setAttempt] = useState(0);

  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);

  const [idx, setIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [typedAnswer, setTypedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [correctCount, setCorrectCount] = useState(0);

  function shuffleSeeded<T>(arr: readonly T[], seed: number): T[] {
  const a = [...arr];
  let s = seed || 1;

  function next() {
    s ^= s << 13;
    s ^= s >>> 17;
    s ^= s << 5;
    return (s >>> 0) / 4294967296;
  }

  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(next() * (i + 1));
    const tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }

  return a;
  }

  function buildTypePlan(seed: number, count: number) {
    if (count === 8) {
      const plans = [
        ["mcq","mcq","mcq","true_false","true_false","true_false","fill_blank","fill_blank"],
        ["mcq","mcq","true_false","true_false","true_false","fill_blank","fill_blank","fill_blank"],
        ["mcq","mcq","mcq","true_false","true_false","fill_blank","fill_blank","fill_blank"]
      ] as const;

      return shuffleSeeded(plans[seed % plans.length], seed);
    }

    // fallback: if count is not 8 for some reason
    const fallback = Array(count).fill("mcq") as Array<"mcq" | "true_false" | "fill_blank">;
    return shuffleSeeded(fallback, seed);
  }

  useEffect(() => {
  if (!topicId || !subtopicId || !levelId || !partId) return;

  const lvl = `l${String(levelId)}`;
  const prt = `p${String(partId)}`;
  const key = `${topicId}_${subtopicId}_${lvl}_${prt}`;

  const setValue = String(set ?? "");
  const variant = setValue.includes("quizC") ? "C" : setValue.includes("quizB") ? "B" : "A";

  const attemptKey = `quizAttempt:v1:${key}:quiz${variant}`;

  (async () => {
    const raw = await AsyncStorage.getItem(attemptKey);
    const next = (raw ? Number(raw) : 0) + 1;
    await AsyncStorage.setItem(attemptKey, String(next));
    setAttempt(next);
  })();
}, [topicId, subtopicId, levelId, partId, set]);

  useEffect(() => {
    if (!topicId || !subtopicId || !levelId || !partId) return;

    saveLastLocation({
      topicId: String(topicId),
      subtopicId: String(subtopicId),
      levelId: String(levelId),
      partId: String(partId),
    });
  }, [topicId, subtopicId, levelId, partId, set, attempt]);

 useEffect(() => {
  if (!topicId || !subtopicId || !levelId || !partId) return;

  setLoading(true);

  const lvl = `l${String(levelId)}`;
  const prt = `p${String(partId)}`;
  const key = `${topicId}_${subtopicId}_${lvl}_${prt}`;

  const concepts = loadConceptsByKey(key);

  // Decide quiz variant from query param: "quizA" | "quizB" | "quizC"
  const setValue = String(set ?? "");
  const variant = setValue.includes("quizC")
    ? "C"
    : setValue.includes("quizB")
    ? "B"
    : "A";

  // Difficulty ramp: A easiest, B medium, C hardest/mixed
  const filtered =
    variant === "A"
      ? concepts.filter((c) => c.difficulty <= 2)
      : variant === "B"
      ? concepts.filter((c) => c.difficulty <= 3)
      : concepts;

  // --- deterministic shuffle by seed (so A/B/C are stable) ---
  function hashString(s: string) {
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function seededShuffle<T>(arr: T[], seedStr: string): T[] {
    let seed = hashString(seedStr) || 1;
    const a = [...arr];

    function next() {
      // xorshift32
      seed ^= seed << 13;
      seed ^= seed >>> 17;
      seed ^= seed << 5;
      return (seed >>> 0) / 4294967296;
    }

    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(next() * (i + 1));
      const tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a;
  }

  const seed = `${key}_quiz${variant}_attempt${attempt}`;
  const shuffled = seededShuffle(filtered, seed);

  // Pick how many questions per quiz (change this number anytime)
  const QUIZ_LEN = 8;
  const picked = shuffled.slice(0, Math.min(QUIZ_LEN, shuffled.length));

  const typePlan = buildTypePlan(seed.length, picked.length);

  const built = picked.map((c, i) =>
  buildExercise(c, concepts, 3, typePlan[i])
  );

  setExercises(built);
  setLoading(false);
}, [topicId, subtopicId, levelId, partId, set]);

  const q = exercises[idx];
  const total = exercises.length;
  const progress = total > 0 ? (idx + 1) / total : 0;

  const correct =
  !!q &&
  (q.type === "mcq"
    ? selectedAnswer === q.options[q.correctIndex]
    : q.type === "true_false"
    ? selectedAnswer === (q.correctAnswer ? "true" : "false")
    : typedAnswer.trim().toLowerCase() === q.answerText.trim().toLowerCase());

  const canCheck = useMemo(() => {
    if (!q || checked) return false;
    if (q.type === "mcq") return selectedAnswer !== null;
    if (q.type === "true_false") return selectedAnswer !== null;
    if (q.type === "fill_blank") return typedAnswer.trim().length > 0;
    return false;
  }, [q, checked, selectedAnswer, typedAnswer]);

  const onCheck = () => {
    if (!q) return;

    let ok = false;

    if (q.type === "mcq") {
      ok = q.options[q.correctIndex] === selectedAnswer;
    } else if (q.type === "true_false") {
      ok = (selectedAnswer === "true") === q.correctAnswer;
    } else if (q.type === "fill_blank") {
      ok =
        typedAnswer.trim().toLowerCase() ===
        q.answerText.trim().toLowerCase();
    }

    setChecked(true);
    setIsCorrect(ok);
    if (ok) setCorrectCount((c) => c + 1);
  };

  const quizVariant = String(set ?? "A").replace(/^quiz/i, "").toUpperCase();

  const onNext = async () => {
    const isLast = idx + 1 >= exercises.length;

  if (isLast) {
    const total = exercises.length;
    const score = correctCount;
    const percent = Math.round((score / Math.max(1, total)) * 100);

    // placeholder XP for now
    const xp = Math.round(percent * 0.5);

    let partCompleted = false;

    if (topicId && subtopicId && levelId && partId && quizVariant) {
      partCompleted = await markQuizVariantCompleted(
        String(topicId),
        String(subtopicId),
        String(levelId),
        String(partId),
        String(quizVariant)
      );
    }

    router.replace({
      pathname: "/quizResult",
      params: {
        score: String(score),
        total: String(total),
        percent: String(percent),
        xp: String(xp),
        partCompleted: String(partCompleted),
        levelCompleted: "false",

        retrySet: String(set ?? "A"),
        retryTopicId: String(topicId),
        retrySubtopicId: String(subtopicId),
        retryLevelId: String(levelId),
        retryPartId: String(partId),
      },
    });

    return;
  }

    setIdx((i) => i + 1);
    setSelectedAnswer(null);
    setTypedAnswer("");
    setChecked(false);
    setIsCorrect(null);
  };

if (!hasQuizVariant) {
  const basePath = `/topic/${String(topicId)}/subtopic/${String(subtopicId)}/level/${String(
    levelId
  )}/${String(partId)}`;

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={styles.headerRow}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backText}>← Back</Text>
        </Pressable>

        <Text numberOfLines={1} style={styles.headerTitle}>
          {topic?.emoji ?? ""} {subtopic?.title ?? ""} • {level?.title ?? ""}
        </Text>

        <View style={styles.xpPill}>
          <Text style={styles.xpText}>🔥 {streak} • XP {totalXP}</Text>
        </View>
      </View>

      <View style={{ height: 16 }} />

      <Text style={styles.title}>Choose a quiz</Text>
      <Text style={styles.body}>Pick one:</Text>

      <Pressable
        style={styles.primaryButton}
        onPress={() => router.push({ pathname: basePath as any, params: { set: "quizA" } } as any)}
      >
        <Text style={styles.primaryText}>Quiz A</Text>
      </Pressable>

      <Pressable
        style={styles.primaryButton}
        onPress={() => router.push({ pathname: basePath as any, params: { set: "quizB" } } as any)}
      >
        <Text style={styles.primaryText}>Quiz B</Text>
      </Pressable>

      <Pressable
        style={styles.primaryButton}
        onPress={() => router.push({ pathname: basePath as any, params: { set: "quizC" } } as any)}
      >
        <Text style={styles.primaryText}>Quiz C</Text>
      </Pressable>
    </ScrollView>
  );
}

  if (loading) {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.body}>Loading concepts...</Text>
      </ScrollView>
    );
  }

if (exercises.length === 0) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={styles.headerRow}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backText}>← Back</Text>
        </Pressable>
      </View>

      <Text style={styles.body}>No concepts found for this part.</Text>
    </ScrollView>
  );
}

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerRow}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backText}>← Back</Text>
        </Pressable>
      </View>
      <View style={styles.progressBackground}>
        <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
      </View>

      <Text style={styles.question}>
        {q.type === "true_false" ? q.statement : q.prompt}
      </Text>

      {q.type === "mcq" &&
        q.options.map((opt) => {
          const isSelected = selectedAnswer === opt;

          const correctOpt = q.options[q.correctIndex];
          const isCorrectOpt = checked && opt === correctOpt;
          const isWrongSelected = checked && isSelected && opt !== correctOpt;

          return (
            <Pressable
              key={opt}
              style={[
                styles.option,
                !checked && isSelected && styles.optionSelected,
                isCorrectOpt && styles.optionCorrect,
                isWrongSelected && styles.optionWrong,
              ]}
              onPress={() => !checked && setSelectedAnswer(opt)}
            >
              <Text style={styles.optionText}>{opt}</Text>
            </Pressable>
          );
      })}

      {q.type === "true_false" &&
        ["true", "false"].map((v) => {
          const isSelected = selectedAnswer === v;

          const correctV = q.correctAnswer ? "true" : "false";
          const isCorrectOpt = checked && v === correctV;
          const isWrongSelected = checked && isSelected && v !== correctV;

          return (
            <Pressable
              key={v}
              style={[
                styles.option,
                !checked && isSelected && styles.optionSelected,
                isCorrectOpt && styles.optionCorrect,
                isWrongSelected && styles.optionWrong,
              ]}
              onPress={() => !checked && setSelectedAnswer(v)}
            >
              <Text style={styles.optionText}>{v.toUpperCase()}</Text>
            </Pressable>
          );
      })}

      {q.type === "fill_blank" && (
        <TextInput
            style={[
              styles.input,
              typedAnswer.length > 0 && !checked && styles.optionSelected,
              checked && correct && styles.optionCorrect,
              checked && !correct && styles.optionWrong,
            ]}
          placeholder="Type your answer"
          placeholderTextColor="#6B7280"
          value={typedAnswer}
          onChangeText={setTypedAnswer}
          />
      )}

      {!checked ? (
        <Pressable
          style={[styles.primaryButton, !canCheck && { opacity: 0.5 }]}
          disabled={!canCheck}
          onPress={onCheck}
        >
          <Text style={styles.primaryText}>Check</Text>
        </Pressable>
      ) : (
        <Pressable style={styles.primaryButton} onPress={onNext}>
          <Text style={styles.primaryText}>Next</Text>
        </Pressable>
      )}
    </ScrollView>
  );
}