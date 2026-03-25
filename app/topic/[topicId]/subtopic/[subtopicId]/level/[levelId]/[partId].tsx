import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { TOPIC_BY_ID } from "../../../../../../../data/catalog";
import { CONCEPT_SETS } from "../../../../../../../data/conceptSets";
import { useStreak } from "../../../../../../../src/state/useStreak";
import { useTotalXp } from "../../../../../../../src/state/useTotalXp";

import AsyncStorage from "@react-native-async-storage/async-storage";
import type { Exercise } from "../../../../../../../src/quizEngine/conceptTypes";
import { enrichConcepts } from "../../../../../../../src/quizEngine/enrichConcepts";
import { buildExercise, buildMatchingExercise } from "../../../../../../../src/quizEngine/exerciseFactory";
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
    fontSize: 16,
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
  xpContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  xpText: {
    color: "#FDBA74",
    fontSize: 13,
    fontWeight: "800",
    marginLeft: 6,
  },
  xpDot: {
    color: "#FDBA74",
    fontSize: 13,
    fontWeight: "800",
    marginHorizontal: 8,
  },
  backText: { color: "#BFDBFE", fontSize: 14, fontWeight: "700" },

  matchingWrap: {
    flexDirection: "row",
    gap: 12,
    marginTop: 12,
    alignItems: "flex-start",
  },
  matchingColumn: {
    flex: 1,
    gap: 10,
  },
  matchingItem: {
    minHeight: 56,
    borderWidth: 2,
    borderColor: "#334155",
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 14,
    justifyContent: "center",
    backgroundColor: "#0B1220",
  },
  matchingItemSelected: {
    borderColor: "#FFFFFF",
  },
  matchingItemCorrect: {
    borderColor: "#22C55E",
  },
  matchingItemWrong: {
    borderColor: "#EF4444",
  },
   matchingItemFaded: {
    opacity: 0.45,
  },
  matchingItemTextFaded: {
    opacity: 0.65,
  },
  matchingItemText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

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

  const subtopicLevel = useMemo(() => {
    return 0;
  }, []);

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

  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<number | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Record<string, number>>({});
  const [shuffledMatchingLefts, setShuffledMatchingLefts] = useState<string[]>([]);
  const [shuffledMatchingRights, setShuffledMatchingRights] = useState<string[]>([]);

  useEffect(() => {
  const q = exercises[idx];
  if (!q || q.type !== "matching") {
    setShuffledMatchingLefts([]);
    setShuffledMatchingRights([]);
    return;
  }

  const lefts = (q as any).pairs.map((pair: any) => pair.left);
  const rights = (q as any).pairs.map((pair: any) => pair.right);

  setShuffledMatchingLefts(shuffleSeeded(lefts, idx + attempt + 1));
  setShuffledMatchingRights(shuffleSeeded(rights, idx + attempt + 101));
}, [exercises, idx, attempt]);

  useEffect(() => {
  if (!selectedLeft || selectedRight === null || checked) return;

  const q = exercises[idx];
  if (!q || q.type !== "matching") return;

  const correctRight = (q as any).pairs.find(
    (p: any) => p.left === selectedLeft
  )?.right;
  const isCorrect = shuffledMatchingRights[selectedRight] === correctRight;

  setMatchedPairs((prev) => ({
    ...prev,
    [selectedLeft]: selectedRight,
  }));

  setSelectedLeft(null);
  setSelectedRight(null);

  if (!isCorrect) {
    const left = selectedLeft;
    setTimeout(() => {
      setMatchedPairs((prev) => {
        const next = { ...prev };
        delete next[left];
        return next;
      });
    }, 800);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [selectedLeft, selectedRight, checked]);

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

  useEffect(() => {
  if (!topicId || !subtopicId || !levelId || !partId) return;

  const lvl = `l${String(levelId)}`;
  const prt = `p${String(partId)}`;
  const key = `${topicId}_${subtopicId}_${lvl}_${prt}`;

  const conceptSet = CONCEPT_SETS[key];

  if (!conceptSet) {
    setExercises([]);
    setLoading(false);
    return;
  }

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

  const conceptSet = CONCEPT_SETS[key];

  if (!conceptSet) {
    setExercises([]);
    setLoading(false);
    return;
  }

  setSelectedLeft(null);
  setSelectedRight(null);
  setMatchedPairs({});
  setShuffledMatchingLefts([]);
  setShuffledMatchingRights([]);

  setIdx(0);
  setSelectedAnswer(null);
  setTypedAnswer("");
  setChecked(false);
  setIsCorrect(null);
  setCorrectCount(0);

  function getSourcePartIds(partId: string): string[] {
    if (partId === "p1") return ["p1"];
    if (partId === "p2") return ["p2"];
    if (partId === "p3") return ["p1", "p2"];
    if (partId === "p4") return ["p4"];
    if (partId === "p5") return ["p1", "p2", "p4"];
    return [];
  }

  function getPartDifficultyRange(partId: string): [number, number] {
    if (partId === "p1") return [1, 2];
    if (partId === "p2") return [1, 3];
    if (partId === "p3") return [1, 3];
    if (partId === "p4") return [2, 4];
    if (partId === "p5") return [2, 5];
    return [1, 5];
  }

  const sourcePartIds = getSourcePartIds(prt);

  const concepts = conceptSet.concepts.filter(
    (c) =>
      c.levelId === lvl &&
      sourcePartIds.includes(c.partId)
  );

  const [minDifficulty, maxDifficulty] = getPartDifficultyRange(prt);

  const filteredRaw = concepts.filter(
    (c) => c.difficulty >= minDifficulty && c.difficulty <= maxDifficulty
  );

  const filteredConcepts = enrichConcepts(filteredRaw);

  // Decide quiz variant from query param: "quizA" | "quizB" | "quizC"
  const setValue = String(set ?? "");
  const variant = setValue.includes("quizC")
    ? "C"
    : setValue.includes("quizB")
    ? "B"
    : "A";

  // Spaced repetition by introduction stage
  const filtered =
    variant === "A"
      ? filteredConcepts.filter((c) => (c.introducedIn ?? "A") === "A")
      : variant === "B"
      ? filteredConcepts.filter((c) => {
          const intro = c.introducedIn ?? "A";
          return intro === "A" || intro === "B";
        })
      : filteredConcepts.filter((c) => {
          const intro = c.introducedIn ?? "A";
          return intro === "A" || intro === "B" || intro === "C";
        });

  // --- deterministic shuffle by seed (so A/B/C are stable) ---
  function hashString(s: string) {
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  const QUIZ_TYPE_ORDER = ["mcq", "true_false", "fill_blank"] as const;

  function stageToNumber(stage: "A" | "B" | "C") {
    return stage === "A" ? 0 : stage === "B" ? 1 : 2;
  }

  function getExerciseTypeForConcept(
    concept: { id: string; introducedIn?: "A" | "B" | "C" },
    variant: "A" | "B" | "C",
    seed: string
  ): (typeof QUIZ_TYPE_ORDER)[number] {
    const intro = concept.introducedIn ?? "A";

    const orderedTypes = seededShuffle(
      [...QUIZ_TYPE_ORDER],
      `${seed}_${concept.introducedIn ?? "A"}_type_order`
    );

    const shift = Math.max(0, stageToNumber(variant) - stageToNumber(intro));

    return orderedTypes[Math.min(shift, orderedTypes.length - 1)];
  }

  function buildBalancedTypePlan(seed: string, count: number): Array<"mcq" | "true_false" | "fill_blank"> {
    if (count === 7) {
      const plans: Array<Array<"mcq" | "true_false" | "fill_blank">> = [
        ["mcq","mcq","mcq","true_false","true_false","fill_blank","fill_blank"], // 3 mcq
        ["mcq","mcq","true_false","true_false","true_false","fill_blank","fill_blank"], // 3 tf
        ["mcq","mcq","true_false","true_false","fill_blank","fill_blank","fill_blank"], // 3 fill
      ];

      return seededShuffle(plans[hashString(seed) % plans.length], `${seed}_type_plan`);
    }

    // fallback
    const fallback: Array<"mcq" | "true_false" | "fill_blank"> = [];
    const base = ["mcq", "true_false", "fill_blank"] as const;

    for (let i = 0; i < count; i++) {
      fallback.push(base[i % base.length]);
    }

    return seededShuffle(fallback, `${seed}_type_plan_fallback`);
  }

function assignBalancedTypes(
  picked: Array<{ id: string; introducedIn?: "A" | "B" | "C" }>,
  variant: "A" | "B" | "C",
  seed: string
): Array<"mcq" | "true_false" | "fill_blank"> {
  const plan = buildBalancedTypePlan(seed, picked.length);
  const remaining = [...plan];
  const assigned: Array<"mcq" | "true_false" | "fill_blank"> = [];

  for (const concept of picked) {
    const preferred = getExerciseTypeForConcept(concept, variant, seed);
    const preferredIndex = remaining.indexOf(preferred);

    if (preferredIndex !== -1) {
      assigned.push(preferred);
      remaining.splice(preferredIndex, 1);
    } else {
      assigned.push(remaining.shift() ?? "mcq");
    }
  }

  return assigned;
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

  // Split by introduction stage
  const aConcepts = filteredConcepts.filter((c) => (c.introducedIn ?? "A") === "A");
  const bConcepts = filteredConcepts.filter((c) => (c.introducedIn ?? "A") === "B");
  const cConcepts = filteredConcepts.filter((c) => (c.introducedIn ?? "A") === "C");

  // Pick how many questions per quiz
  const QUIZ_LEN = 7; // normal questions only (matching will be added separately)

  const pickFrom = <T,>(items: T[], count: number, seedPart: string) =>
    seededShuffle(items, `${seed}_${seedPart}`).slice(0, Math.min(count, items.length));

  let picked =
    variant === "A"
      ? pickFrom(aConcepts, QUIZ_LEN, "A_only")
      : variant === "B"
      ? [
          ...pickFrom(bConcepts, 5, "B_main"),
          ...pickFrom(aConcepts, 2, "B_repeat_A"),
        ]
      : [
          ...pickFrom(cConcepts, 5, "C_main"),
          ...pickFrom([...aConcepts, ...bConcepts], 2, "C_repeat_AB"),
        ];

  // If there are not enough concepts, fill from the allowed pool
  if (picked.length < QUIZ_LEN) {
    const pickedIds = new Set(picked.map((c) => c.id));

    const allowedPool =
      variant === "A"
        ? aConcepts
        : variant === "B"
        ? [...bConcepts, ...aConcepts]
        : [...cConcepts, ...aConcepts, ...bConcepts];

    const filler = seededShuffle(
      allowedPool.filter((c) => !pickedIds.has(c.id)),
      `${seed}_filler`
    ).slice(0, QUIZ_LEN - picked.length);

    picked = [...picked, ...filler];
  }

  // Final shuffle so repeated/new questions are mixed visually
  picked = seededShuffle(picked, `${seed}_final`);

  const assignedTypes = assignBalancedTypes(picked, variant, seed);

  // Build normal exercises first
  let built = picked.map((c, i) =>
    buildExercise(c, filteredConcepts, 3, assignedTypes[i])
  );

  // Add 1 matching question on top of the 7 normal questions
  const matching = buildMatchingExercise(filtered, `${seed}_matching`);

  if (matching) {
    built = [...built, matching];
  }

  built = seededShuffle(built, `${seed}_exercise_order`);

  // temporary: inspect grouped facts
  console.log("picked concepts", picked);

  setExercises(built);
  setLoading(false);
}, [topicId, subtopicId, levelId, partId, set, attempt]);

  const q = exercises[idx];
  const total = exercises.length;
  const progress = total > 0 ? (idx + 1) / total : 0;

  const correct =
    !!q &&
    (q.type === "mcq"
      ? selectedAnswer === q.options[q.correctIndex]
      : q.type === "true_false"
      ? selectedAnswer === (q.correctAnswer ? "true" : "false")
      : q.type === "fill_blank"
      ? typedAnswer.trim().toLowerCase() === q.answerText.trim().toLowerCase()
      : q.type === "matching"
      ? (q as any).pairs.every((pair: any) => {
          const rightIdx = matchedPairs[pair.left];
          return rightIdx !== undefined && shuffledMatchingRights[rightIdx] === pair.right;
        })
      : false);
    const canCheck = useMemo(() => {
      if (!q || checked) return false;
      if (q.type === "mcq") return selectedAnswer !== null;
      if (q.type === "true_false") return selectedAnswer !== null;
      if (q.type === "fill_blank") return typedAnswer.trim().length > 0;
      if (q.type === "matching") return Object.keys(matchedPairs).length === (q as any).pairs.length;
      return false;
    }, [q, checked, selectedAnswer, typedAnswer, matchedPairs]);

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
    } else if (q.type === "matching") {
      ok = (q as any).pairs.every((pair: any) => {
        const rightIdx = matchedPairs[pair.left];
        return rightIdx !== undefined && shuffledMatchingRights[rightIdx] === pair.right;
      });
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
    setSelectedLeft(null);
    setSelectedRight(null);
    setMatchedPairs({});
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
          {subtopic?.title ?? ""}
        </Text>

        <View style={styles.xpPill}>
          <View style={styles.xpContent}>
            <MaterialCommunityIcons name="fire" size={14} color="#FDBA74" />
            <Text style={styles.xpText}>{streak}</Text>

            <Text style={styles.xpDot}>•</Text>

            <Text style={styles.xpText}>Lv {subtopicLevel}</Text>

            <Text style={styles.xpDot}>•</Text>

            <Text style={styles.xpText}>XP {totalXP}</Text>
          </View>
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
        ["true", "false"].map((opt) => {
          const isSelected = selectedAnswer === opt;
          const correctOpt = q.correctAnswer ? "true" : "false";
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
              <Text style={styles.optionText}>{opt === "true" ? "True" : "False"}</Text>
            </Pressable>
          );
        })}

      {q.type === "fill_blank" && (
        <TextInput
          value={typedAnswer}
          onChangeText={setTypedAnswer}
          editable={!checked}
          placeholder="Type your answer"
          placeholderTextColor="#94A3B8"
          style={[
            styles.input,
            typedAnswer.trim().length > 0 && !checked && styles.optionSelected,
            checked && isCorrect === true && styles.optionCorrect,
            checked && isCorrect === false && styles.optionWrong,
          ]}
        />
      )}

      {q.type === "matching" && (
        <View style={styles.matchingWrap}>
          <View style={styles.matchingColumn}>
            {shuffledMatchingLefts.map((left) => {
              const isSelected = selectedLeft === left;
              const isMatched = matchedPairs[left] !== undefined;
              const matchedRightText = isMatched ? shuffledMatchingRights[matchedPairs[left]] : null;
              const correctRightText = isMatched ? (q as any).pairs.find((p: any) => p.left === left)?.right : null;
              const isMatchCorrect = isMatched && matchedRightText === correctRightText;          
              

              return (
                <Pressable
                  key={left}
                  onPress={() => {
                    if (checked || isMatched) return;
                    setSelectedLeft(left);
                  }}
                  style={[
                    styles.matchingItem,
                    isSelected && styles.matchingItemSelected,
                    isMatched && (isMatchCorrect ? styles.matchingItemCorrect : styles.matchingItemWrong),
                    isMatchCorrect && styles.matchingItemFaded,
                  ]}
                >
                  <Text
                    style={[
                      styles.matchingItemText,
                      isMatchCorrect && styles.matchingItemTextFaded,
                    ]}
                  >
                    {left}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          <View style={styles.matchingColumn}>
            {shuffledMatchingRights.map((right, index) => {
              const isSelected = selectedRight === index;
              const matchEntry = Object.entries(matchedPairs).find(([_, rIdx]) => rIdx === index);
              const alreadyUsed = !!matchEntry;
              const isMatchCorrect = alreadyUsed && matchEntry
                ? (q as any).pairs.find((p: any) => p.left === matchEntry[0])?.right === right
                : false;

              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    if (checked || alreadyUsed) return;
                    setSelectedRight(index);
                  }}
                  style={[
                    styles.matchingItem,
                    isSelected && styles.matchingItemSelected,
                    alreadyUsed && (isMatchCorrect ? styles.matchingItemCorrect : styles.matchingItemWrong),
                    isMatchCorrect && styles.matchingItemFaded,
                  ]}
                >
                  <Text
                    style={[
                      styles.matchingItemText,
                      isMatchCorrect && styles.matchingItemTextFaded,
                    ]}
                  >
                    {right}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>
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