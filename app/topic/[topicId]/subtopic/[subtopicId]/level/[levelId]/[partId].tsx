import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { TOPIC_BY_ID } from "../../../../../../../data/catalog";
import { CONCEPT_SETS } from "../../../../../../../data/conceptSets";

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getHomePath,
  getLevelPath,
  getPartPath,
} from "../../../../../../../lib/routes";
import { buildQuiz } from "../../../../../../../src/quizEngine/buildQuiz";
import type { Exercise } from "../../../../../../../src/quizEngine/conceptTypes";
import { enrichConcepts } from "../../../../../../../src/quizEngine/enrichConcepts";
import { saveLastLocation } from "../../../../../../../src/state/lastLocation";
import { getCompletedQuizVariants, markQuizVariantCompleted } from "../../../../../../../src/state/progress";
import { useStreak } from "../../../../../../../src/state/useStreak";
import { useTotalXp } from "../../../../../../../src/state/useTotalXp";

type MatchingPair = {
  id?: string | number;
  left: string;
  right: string;
};

type MatchingQuestion = {
  type: "matching";
  pairs: MatchingPair[];
};

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

  correctAnswerText: {
    color: "#FFFFFF",
    fontSize: 16,
    marginTop: 10,
    lineHeight: 22,
  },

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

function getDeterministicType(
  concept: any,
  variant: "A" | "B" | "C"
): "mcq" | "true_false" | "fill_blank" {
  const types: ("mcq" | "true_false" | "fill_blank")[] = [
    "mcq",
    "true_false",
    "fill_blank",
  ];

  const base =
    (concept.id.length +
      concept.subject.length +
      concept.object.length) %
    3;

  if (variant === "A") {
    return types[base];
  }

  if (variant === "B") {
    return types[(base + 1) % 3];
  }

  return types[(base + 2) % 3];
}

function normalizeText(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD") // splits accents
    .replace(/[\u0300-\u036f]/g, "") // removes accents
    .trim();
}

function levenshtein(a: string, b: string) {
  const matrix = [];

  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b[i - 1] === a[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

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
  
  const basePath = getPartPath(
    String(topicId),
    String(subtopicId),
    String(levelId),
    String(partId)
  );
  const homePath = getHomePath();
  const levelPath = getLevelPath(
    String(topicId),
    String(subtopicId),
    String(levelId)
  );

  const [attempt, setAttempt] = useState(0);

  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);

  const [quizAUnlocked, setQuizAUnlocked] = useState(true);
  const [quizBUnlocked, setQuizBUnlocked] = useState(false);
  const [quizCUnlocked, setQuizCUnlocked] = useState(false);

  const [idx, setIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [typedAnswer, setTypedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [correctCount, setCorrectCount] = useState(0);

  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [selectedRight, setSelectedRight] = useState<number | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Record<string, number>>({});
  const [shuffledMatchingLefts, setShuffledMatchingLefts] = useState<any[]>([]);
  const [shuffledMatchingRights, setShuffledMatchingRights] = useState<any[]>([]);

  useEffect(() => {
    if (!topicId || !subtopicId || !levelId || !partId) return;

    (async () => {
      const completed = await getCompletedQuizVariants(
        String(topicId),
        String(subtopicId),
        String(levelId),
        String(partId)
      );

      console.log("completed variants for this part:", completed);

      const hasA = completed.includes("A");
      const hasB = completed.includes("B");

      setQuizAUnlocked(true);
      setQuizBUnlocked(hasA);
      setQuizCUnlocked(hasB);
    })();
  }, [topicId, subtopicId, levelId, partId]);

  useEffect(() => {
    const q = exercises[idx];
    if (!q || q.type !== "matching") {
      setShuffledMatchingLefts([]);
      setShuffledMatchingRights([]);
      return;
    }

    const lefts = matchingQ
      ? matchingQ.pairs.map((pair: MatchingPair, pairIndex: number) => ({
          pairIndex,
          id: String(pair.id ?? `left-${pairIndex}`),
          text: pair.left,
        }))
      : [];

    const rights = matchingQ
      ? matchingQ.pairs.map((pair: MatchingPair, pairIndex: number) => ({
          pairIndex,
          id: String(pair.id ?? `right-${pairIndex}`),
          text: pair.right,
        }))
      : [];

    setShuffledMatchingLefts(shuffleSeeded(lefts, idx + attempt + 1));
    setShuffledMatchingRights(shuffleSeeded(rights, idx + attempt + 101));
  }, [exercises, idx, attempt]);

  useEffect(() => {
    if (selectedLeft === null || selectedRight === null || checked) return;

    const q = exercises[idx];
    if (!q || q.type !== "matching") return;

    const leftItem = shuffledMatchingLefts[selectedLeft];
    const rightItem = shuffledMatchingRights[selectedRight];

    if (!leftItem || !rightItem) return;

    const isCorrect = leftItem.pairIndex === rightItem.pairIndex;

    setMatchedPairs((prev) => ({
      ...prev,
      [selectedLeft]: selectedRight,
    }));

    setSelectedLeft(null);
    setSelectedRight(null);

    if (!isCorrect) {
      const leftIndex = selectedLeft;

      setTimeout(() => {
        setMatchedPairs((prev) => {
          const next = { ...prev };
          delete next[leftIndex];
          return next;
        });
      }, 800);
    }
  }, [
    selectedLeft,
    selectedRight,
    checked,
    exercises,
    idx,
    shuffledMatchingLefts,
    shuffledMatchingRights,
  ]);

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
    if (partId === "p1") return [1, 2]; // very easy
    if (partId === "p2") return [2, 3]; // introduce slightly harder
    if (partId === "p3") return [2, 4]; // review + stretch
    if (partId === "p4") return [3, 5]; // new + harder
    if (partId === "p5") return [3, 5]; // final mix (hardest)
    return [1, 5];
  }

  const sourcePartIds = getSourcePartIds(prt);

  const concepts = conceptSet.concepts.filter(
    (c: any) =>
      c.levelId === lvl &&
      sourcePartIds.includes(c.partId)
  );

  const [minDifficulty, maxDifficulty] = getPartDifficultyRange(prt);

  const filteredRaw = concepts.filter(
    (c: any) => c.difficulty >= minDifficulty && c.difficulty <= maxDifficulty
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

  const QUIZ_TYPE_ORDER = ["mcq", "true_false", "fill_blank"] as const;

  const seed = `${key}_quiz${variant}_attempt${attempt}`;

  // Split by introduction stage
  const aConcepts = filteredConcepts.filter((c) => (c.introducedIn ?? "A") === "A");
  const bConcepts = filteredConcepts.filter((c) => (c.introducedIn ?? "A") === "B");
  const cConcepts = filteredConcepts.filter((c) => (c.introducedIn ?? "A") === "C");

  const built = buildQuiz({
    concepts: filteredConcepts,
    variant,
    seed,
  });

  setExercises(built);
  setLoading(false);
}, [topicId, subtopicId, levelId, partId, set, attempt]);

  const q = exercises[idx];
  const matchingQ =
    q?.type === "matching" ? (q as MatchingQuestion) : null;
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
        ? !!matchingQ &&
          matchingQ.pairs.every((pair: MatchingPair) => {
            const rightIdx = matchedPairs[pair.left];
            return rightIdx !== undefined && shuffledMatchingRights[rightIdx] === pair.right;
          })
      : false);
    const canCheck = useMemo(() => {
      if (!q || checked) return false;
      if (q.type === "mcq") return selectedAnswer !== null;
      if (q.type === "true_false") return selectedAnswer !== null;
      if (q.type === "fill_blank") return typedAnswer.trim().length > 0;
      if (q.type === "matching") return !!matchingQ && Object.keys(matchedPairs).length === matchingQ.pairs.length;
      return false;
    }, [q, checked, selectedAnswer, typedAnswer, matchedPairs]);

  const onCheck = () => {
    if (!q) return;

    let ok = false;

    if (q.type === "mcq") {
      ok = q.options[q.correctIndex] === selectedAnswer;
    } else if (q.type === "true_false") {
      ok = (selectedAnswer === "true") === q.correctAnswer;
    } if (q.type === "fill_blank") {
        const user = normalizeText(typedAnswer);

        const acceptedAnswers = q.answerText
          .split("|")
          .map((answer) => normalizeText(answer));

        ok = acceptedAnswers.some((answer) => {
          const distance = levenshtein(user, answer);
          return distance <= 2;
        });
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
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
        <View style={styles.headerRow}>
      <Pressable
        onPress={() => router.replace(levelPath)}
        style={styles.backButton}
      >
        <Text style={styles.backText}>← Back</Text>
      </Pressable>

      <Text numberOfLines={1} style={styles.headerTitle}>
        {subtopic?.title ?? ""}
      </Text>

      <Pressable onPress={() => router.replace(homePath)} style={styles.backButton}>
        <Text style={styles.backText}>Home</Text>
      </Pressable>
    </View>

    <View style={{ alignItems: "flex-end", marginBottom: 12 }}>
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
      onPress={() =>
        router.push({
          pathname: basePath,
          params: {
            set: "quizA",
          },
        } as any)
      }
    >
      <Text style={styles.primaryText}>Quiz A</Text>
    </Pressable>

    <Pressable
      style={[
        styles.primaryButton,
        !quizBUnlocked && { opacity: 0.5 },
      ]}
      disabled={!quizBUnlocked}
      onPress={() =>
        router.push({
          pathname: basePath,
          params: {
            set: "quizB",
          },
        } as any)
      }
    >
      <Text style={styles.primaryText}>
        {quizBUnlocked ? "Quiz B" : "Quiz B 🔒 Complete Quiz A first"}
      </Text>
    </Pressable>

    <Pressable
      style={[
        styles.primaryButton,
        !quizCUnlocked && { opacity: 0.5 },
      ]}
      disabled={!quizCUnlocked}
      onPress={() =>
        router.push({
          pathname: basePath,
          params: {
            set: "quizC",
          },
        } as any)
      }
    >
      <Text style={styles.primaryText}>
        {quizCUnlocked ? "Quiz C" : "Quiz C 🔒 Complete Quiz B first"}
      </Text>
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
    <ScrollView style={styles.container}>
      <View style={styles.headerRow}>
        <Pressable
          onPress={() => router.replace(basePath)}
          style={styles.backButton}
        >
          <Text style={styles.backText}>← Back</Text>
        </Pressable>

        <Text numberOfLines={1} style={styles.headerTitle}>
          {subtopic?.title ?? ""}
        </Text>

        <Pressable onPress={() => router.replace(homePath)} style={styles.backButton}>
          <Text style={styles.backText}>Home</Text>
        </Pressable>
      </View>

      <Text style={styles.body}>No concepts found for this part.</Text>
    </ScrollView>
  );
}

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerRow}>
       <Pressable
          onPress={() => router.replace(basePath)}
          style={styles.backButton}
        >
          <Text style={styles.backText}>← Back</Text>
        </Pressable>

        <Text numberOfLines={1} style={styles.headerTitle}>
          {subtopic?.title ?? ""}
        </Text>

        <Pressable onPress={() => router.replace(homePath)} style={styles.backButton}>
          <Text style={styles.backText}>Home</Text>
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
        <>
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

          {checked && isCorrect === false && (
            <Text style={styles.correctAnswerText}>
              {q.prompt.replace("_____", q.answerText.split("|")[0])}
            </Text>
          )}
        </>
)}

      {q.type === "matching" && (
        <View style={styles.matchingWrap}>
          <View style={styles.matchingColumn}>
            {shuffledMatchingLefts.map((leftItem, leftIndex) => {
              const isSelected = selectedLeft === leftIndex;
              const isMatched = matchedPairs[leftIndex] !== undefined;

              const matchedRightIndex = isMatched ? matchedPairs[leftIndex] : null;
              const matchedRightItem =
                matchedRightIndex !== null ? shuffledMatchingRights[matchedRightIndex] : null;

              const isMatchCorrect =
                isMatched &&
                matchedRightItem &&
                matchedRightItem.pairIndex === leftItem.pairIndex;

              return (
                <Pressable
                  key={`left-${leftItem.id}-${leftIndex}`}
                  onPress={() => {
                    if (checked || isMatched) return;
                    setSelectedLeft(leftIndex);
                  }}
                  style={[
                    styles.matchingItem,
                    isSelected && styles.matchingItemSelected,
                    isMatched &&
                      (isMatchCorrect
                        ? styles.matchingItemCorrect
                        : styles.matchingItemWrong),
                    isMatchCorrect && styles.matchingItemFaded,
                  ]}
                >
                  <Text
                    style={[
                      styles.matchingItemText,
                      isMatchCorrect && styles.matchingItemTextFaded,
                    ]}
                  >
                    {leftItem.text}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          <View style={styles.matchingColumn}>
            {shuffledMatchingRights.map((rightItem, rightIndex) => {
              const isSelected = selectedRight === rightIndex;

              const matchEntry = Object.entries(matchedPairs).find(
                ([_, matchedRightIndex]) => matchedRightIndex === rightIndex
              );
              const alreadyUsed = !!matchEntry;

              const matchedLeftIndex = matchEntry ? Number(matchEntry[0]) : null;
              const matchedLeftItem =
                matchedLeftIndex !== null ? shuffledMatchingLefts[matchedLeftIndex] : null;

              const isMatchCorrect =
                alreadyUsed &&
                matchedLeftItem &&
                matchedLeftItem.pairIndex === rightItem.pairIndex;

              return (
                <Pressable
                  key={`right-${rightItem.id}-${rightIndex}`}
                  onPress={() => {
                    if (checked || alreadyUsed) return;
                    setSelectedRight(rightIndex);
                  }}
                  style={[
                    styles.matchingItem,
                    isSelected && styles.matchingItemSelected,
                    alreadyUsed &&
                      (isMatchCorrect
                        ? styles.matchingItemCorrect
                        : styles.matchingItemWrong),
                    isMatchCorrect && styles.matchingItemFaded,
                  ]}
                >
                  <Text
                    style={[
                      styles.matchingItemText,
                      isMatchCorrect && styles.matchingItemTextFaded,
                    ]}
                  >
                    {rightItem.text}
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