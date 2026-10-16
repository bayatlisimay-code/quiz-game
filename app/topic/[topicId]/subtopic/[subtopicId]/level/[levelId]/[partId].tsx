import { ART_CURRICULUM_VERSION } from "../../../../../../../data/artCurriculum";
import { attemptMatchingPair, visibleMatchingPairs } from "../../../../../../../src/quizEngine/matchingInteraction";
import type { MatchingInteraction } from "../../../../../../../src/quizEngine/matchingInteraction";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import { useCallback, useEffect, useMemo, useState, useRef } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { TOPIC_BY_ID } from "../../../../../../../data/catalog";
import { ACTIVE_CONCEPT_SETS as CONCEPT_SETS, activeSemanticContext } from "../../../../../../../src/quizEngine/contentSnapshot";
import { lessonAccess } from "../../../../../../../src/state/lessonAccess";
import { withoutFailedImages } from "../../../../../../../src/images/assessmentImages";
import { AssessmentStimulus } from "../../../../../../../components/quiz/AssessmentStimulus";

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getHomePath,
  getLevelPath,
  getPartPath,
} from "../../../../../../../lib/routes";
import { buildQuizResult } from "../../../../../../../src/quizEngine/buildQuiz";
import { QuizImage } from "../../../../../../../components/quiz/QuizImage";
import { attachQuizImages } from "../../../../../../../src/images/attachQuizImages";
import type { PresentedExercise } from "../../../../../../../src/images/types";
import { getCurriculumPool } from "../../../../../../../src/quizEngine/curriculumPool";

import { gradeMatchingAssignment, isMatchingPairCorrect, isTypedAnswerCorrect } from "../../../../../../../src/quizEngine/answerValidation";
import type { MatchingPair } from "../../../../../../../src/quizEngine/conceptTypes";
import { enrichConcepts } from "../../../../../../../src/quizEngine/enrichConcepts";
import { saveLastLocation } from "../../../../../../../src/state/lastLocation";
import { loadProgress, getCompletedQuizVariants, markQuizVariantCompleted } from "../../../../../../../src/state/progress";
import { completionReceipt } from "../../../../../../../src/state/completionReceipt";
import { useStreak } from "../../../../../../../src/state/useStreak";
import { useTotalXp } from "../../../../../../../src/state/useTotalXp";

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

  switchText: {
  color: "#888",
  textAlign: "center",
  marginTop: 8,
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
  const [attemptScope, setAttemptScope] = useState<string | null>(null);
  const requestedScope = `${topicId}/${subtopicId}/${levelId}/${partId}/${set}`;
  const [accessDenied, setAccessDenied] = useState<string | null>("Checking lesson access...");
  const failedImages = useRef(new Set<string>());
  const [readyScope, setReadyScope] = useState<string | null>(null);
  const [failedImageIds, setFailedImageIds] = useState<readonly string[]>([]);
  const imageUnavailable = useCallback((imageId: string) => {
    // A required-image failure invalidates the unfinished quiz. Replanning starts
    // it again with the same curriculum pool and no failed asset; no XP is awarded.
    if (failedImages.current.has(imageId)) return;
    failedImages.current.add(imageId);
    setLoading(true);
    setReadyScope(null);
    setExercises([]);
    setFailedImageIds([...failedImages.current].sort());
  }, []);

  const [exercises, setExercises] = useState<PresentedExercise[]>([]);
  const [loading, setLoading] = useState(true);
  const [shortage, setShortage] = useState<string | null>(null);

  const generationScope = `${topicId}/${subtopicId}/${levelId}/${partId}/${set}/${attempt}/${failedImageIds.join(",")}`;
  const [quizBUnlocked, setQuizBUnlocked] = useState(false);
  const [quizCUnlocked, setQuizCUnlocked] = useState(false);

  const [idx, setIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [fillMode, setFillMode] = useState<"input" | "options">("input");
  const [typedAnswer, setTypedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const introducedFacts = useRef<readonly string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [correctCount, setCorrectCount] = useState(0);

  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [selectedRight, setSelectedRight] = useState<number | null>(null);
  const [matchingState, setMatchingState] = useState<MatchingInteraction>({ locked: {} });
  const matchedPairs = visibleMatchingPairs(matchingState);
  const [shuffledMatchingLefts, setShuffledMatchingLefts] = useState<{ pairIndex: number; pair: MatchingPair; id: string; text: string }[]>([]);
  const [shuffledMatchingRights, setShuffledMatchingRights] = useState<{ pairIndex: number; pair: MatchingPair; id: string; text: string }[]>([]);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);

  useFocusEffect(
    useCallback(() => {
      if (!topicId || !subtopicId || !levelId || !partId) return;

      let active = true;

      (async () => {
        const progress = await loadProgress();
        if (!active) return;
        const access = lessonAccess(progress, { topicId: String(topicId), subtopicId: String(subtopicId), levelId: String(levelId), partId: String(partId), variant: /^quiz[ABC]$/.test(String(set)) ? String(set).slice(4) : undefined });
        setAccessDenied(access.allowed ? null : access.reason);
        const completed = await getCompletedQuizVariants(
          String(topicId),
          String(subtopicId),
          String(levelId),
          String(partId)
        );
        if (!active) return;

        console.log("completed variants for this part:", completed);

        setQuizBUnlocked(completed.includes("A"));
        setQuizCUnlocked(completed.includes("A") && completed.includes("B"));
      })();

      return () => {
        active = false;
      };
    }, [topicId, subtopicId, levelId, partId, set])
  );

  useEffect(() => {
    const q = exercises[idx];
    if (!q || q.type !== "matching") {
      setShuffledMatchingLefts([]);
      setShuffledMatchingRights([]);
      return;
    }

    const lefts = q.pairs.map((pair: MatchingPair, pairIndex: number) => ({
          pairIndex,
          pair,
          id: String(pair.id ?? `left-${pairIndex}`),
          text: pair.left,
        }));

    const rights = q.pairs.map((pair: MatchingPair, pairIndex: number) => ({
          pairIndex,
          pair,
          id: String(pair.id ?? `right-${pairIndex}`),
          text: pair.right,
        }));

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

    setMatchingState(previous => attemptMatchingPair(previous,
      shuffledMatchingLefts.map(item => item.pair), shuffledMatchingRights.map(item => item.pair), selectedLeft, selectedRight));
    setSelectedLeft(null);
    setSelectedRight(null);
  }, [
    selectedLeft,
    selectedRight,
    checked,
    exercises,
    idx,
    shuffledMatchingLefts,
    shuffledMatchingRights,
  ]);

  useEffect(() => {
    const wrong = matchingState.wrong;
    if (!wrong) return;
    const timeout = setTimeout(() => setMatchingState(previous => previous.wrong === wrong ? { locked: previous.locked } : previous), 800);
    return () => clearTimeout(timeout);
  }, [matchingState.wrong, exercises, idx, attempt]);

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

  const setValue = String(set ?? "");
  const variant = setValue.includes("quizC") ? "C" : setValue.includes("quizB") ? "B" : "A";

  const attemptKey = `quizAttempt:${topicId === "art" ? ART_CURRICULUM_VERSION : "v1"}:${key}:quiz${variant}`;
  let active = true;
  setAttemptScope(null);
  if (!/^quiz[ABC]$/.test(String(set))) return;
  void (async () => {
    const access = lessonAccess(await loadProgress(), { topicId: String(topicId), subtopicId: String(subtopicId), levelId: String(levelId), partId: String(partId), variant });
    if (!active || !access.allowed) return;
    const raw = await AsyncStorage.getItem(attemptKey);
    const previous = Number(raw);
    const next = Number.isSafeInteger(previous) && previous >= 0 && previous < Number.MAX_SAFE_INTEGER ? previous + 1 : 1;
    await AsyncStorage.setItem(attemptKey, String(next));
    if (active) { setAttempt(next); setAttemptScope(requestedScope); }
  })().catch(() => { if (active) { setShortage("Unable to prepare this quiz attempt. Please try again."); setLoading(false); } });
  return () => { active = false; };
}, [topicId, subtopicId, levelId, partId, set, requestedScope]);

  useEffect(() => {
    if (!topicId || !subtopicId || !levelId || !partId) return;

    void loadProgress().then(progress => {
      if (!lessonAccess(progress, { topicId: String(topicId), subtopicId: String(subtopicId), levelId: String(levelId), partId: String(partId) }).allowed) return;
      saveLastLocation({
      topicId: String(topicId),
      subtopicId: String(subtopicId),
      levelId: String(levelId),
      partId: String(partId),
      });
    });
  }, [topicId, subtopicId, levelId, partId, set, attempt]);

 useEffect(() => {
  if (!topicId || !subtopicId || !levelId || !partId) return;
  let active = true;
  setLoading(true);
  setReadyScope(null);
  setExercises([]);
  void (async () => {
    const progress = await loadProgress();
    if (!active) return;
    const selectedVariant = /^quiz[ABC]$/.test(String(set)) ? String(set).slice(4) : undefined;
    const access = lessonAccess(progress, { topicId: String(topicId), subtopicId: String(subtopicId), levelId: String(levelId), partId: String(partId), variant: selectedVariant });
    if (!access.allowed || (/^quiz/i.test(String(set)) && !selectedVariant)) {
      const reason = access.allowed ? "Unknown quiz variant." : access.reason;
      setAccessDenied(reason); setExercises([]); setLoading(false); return;
    }
    setAccessDenied(null);
    if (!selectedVariant) { setExercises([]); setLoading(false); return; }
    if (attemptScope !== requestedScope || attempt < 1) return;

  setShortage(null);

  const lvl = `l${String(levelId)}`;
  const prt = `p${String(partId)}`;
  const key = `${topicId}_${subtopicId}_${lvl}_${prt}`;

  setSelectedLeft(null);
  setSelectedRight(null);
  setMatchingState({ locked: {} });
  setShuffledMatchingLefts([]);
  setShuffledMatchingRights([]);

  setIdx(0);
  setSelectedAnswer(null);
  setSelectedOptionIndex(null);
  setTypedAnswer("");
  setChecked(false);
  setIsCorrect(null);
  setCorrectCount(0);

  const filteredConcepts = enrichConcepts(getCurriculumPool(CONCEPT_SETS, {
    topicId: String(topicId), subtopicId: String(subtopicId), levelId: lvl, partId: prt,
  }));

  // Decide quiz variant from query param: "quizA" | "quizB" | "quizC"
  const setValue = String(set ?? "");
  const variant = setValue.includes("quizC")
    ? "C"
    : setValue.includes("quizB")
    ? "B"
    : "A";

  // Stage eligibility belongs to the engine; reviews must retain every taught stage.
  const filtered = filteredConcepts;

  const seed = `${key}_quiz${variant}_attempt${attempt}:failed-images:${failedImageIds.join(",")}`;
  const context = failedImageIds.length ? activeSemanticContext.withImages(withoutFailedImages(activeSemanticContext.images, failedImageIds)) : activeSemanticContext;

  const result = buildQuizResult({
    concepts: filtered,
    mode: lvl === "l10" || prt === "p3" || prt === "p5" ? "review" : "teaching",
    variant,
    seed,
    context,
    learnedFactIds: progress.learnedFactIds ?? [],
  });

  const introductionShortage = result.diagnostics.shortages.find(s=>s.code === "introduction-stage");
  setShortage(result.status === "insufficient-content" ? result.diagnostics.shortages.some(s=>s.code === "prior-learning")
    ? "Replay the earlier teaching quizzes to learn the required facts. Your XP and previous completions are preserved."
    : introductionShortage ? `Quiz ${introductionShortage.stage} needs ${introductionShortage.needed} new facts; ${introductionShortage.available} are available. More verified content is needed.`
    : "This quiz needs more verified content to assess six distinct facts safely." : null);
  const presented = attachQuizImages(result.status === "ready" ? result.exercises : []);
  introducedFacts.current = result.status === "ready" ? result.diagnostics.introducedFactIds ?? [] : [];
  setExercises(presented);
  setReadyScope(result.status === "ready" ? generationScope : null);
  setLoading(false);
  })().catch(() => { if (active) { setExercises([]); setShortage("Unable to verify lesson access. Please try again."); setLoading(false); } });
  return () => { active = false; };
}, [topicId, subtopicId, levelId, partId, set, attempt, failedImageIds, generationScope, attemptScope, requestedScope]);

  const q = exercises[idx];
  const allowedFillModes = q?.type === "fill_blank" ? q.allowedInputModes ?? ["input", "options"] : [];
  const activeFillMode = allowedFillModes.includes(fillMode) ? fillMode : allowedFillModes[0];

  const fillAnswerOptions =
    q?.type === "fill_blank" && q.options
      ? q.options
      : [];

  const total = exercises.length;
  const progress = total > 0 ? (idx + 1) / total : 0;

  const canCheck = useMemo(() => {
      if (!q || checked) return false;
      if (q.type === "mcq") return selectedAnswer !== null;
      if (q.type === "true_false") return selectedAnswer !== null;
      if (q.type === "fill_blank") {
        return activeFillMode === "input"
          ? typedAnswer.trim().length > 0
          : selectedOptionIndex !== null;
      }
      if (q.type === "matching") return !matchingState.wrong && Object.keys(matchingState.locked).length === q.pairs.length;
      return false;
    }, [q, checked, selectedAnswer, typedAnswer, activeFillMode, selectedOptionIndex, matchingState]);

  const onCheck = () => {
    if (readyScope !== generationScope || loading || accessDenied || !q || shortage || exercises.length !== 8 || !canCheck) return;

    let ok = false;

    if (q.type === "mcq") {
      ok = q.options[q.correctIndex] === selectedAnswer;
    } else if (q.type === "true_false") {
      ok = (selectedAnswer === "true") === q.correctAnswer;
    } else if (q.type === "fill_blank") {
        if (activeFillMode === "input") {
          ok = isTypedAnswerCorrect(q, typedAnswer);
        } else {
          // options mode → use existing MCQ logic
          ok =
          selectedOptionIndex !== null &&
          selectedOptionIndex === q.correctIndex;
        }
      } else if (q.type === "matching") {
        ok = gradeMatchingAssignment(
          shuffledMatchingLefts.map((item) => item.pair),
          shuffledMatchingRights.map((item) => item.pair), matchedPairs
        );
      }

    setChecked(true);
    setIsCorrect(ok);
    if (ok) setCorrectCount((c) => c + 1);
  };

  const quizVariant = String(set ?? "A").replace(/^quiz/i, "").toUpperCase();

  const onNext = async () => {
    if (readyScope !== generationScope || loading || accessDenied || shortage || !q || !checked || exercises.length !== 8) return;
    const isLast = idx + 1 >= exercises.length;

  if (isLast) {
    const total = exercises.length;
    const score = correctCount;
    const percent = Math.round((score / Math.max(1, total)) * 100);

    const before = await loadProgress();

    if (topicId && subtopicId && levelId && partId && quizVariant) {
      await markQuizVariantCompleted(
        String(topicId),
        String(subtopicId),
        String(levelId),
        String(partId),
        String(quizVariant),
        introducedFacts.current
      );
    }
    const receipt = completionReceipt(before, await loadProgress(), {
      topicId: String(topicId), subtopicId: String(subtopicId), levelId: String(levelId), partId: String(partId),
      totalParts: subtopic?.levels.find(level => level.id === String(levelId))?.parts.length ?? 0,
    });

    router.replace({
      pathname: "/quizResult",
      params: {
        score: String(score),
        total: String(total),
        percent: String(percent),
        xp: String(receipt.xp),
        partCompleted: String(receipt.partCompleted),
        levelCompleted: String(receipt.levelCompleted),

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
    setMatchingState({ locked: {} });
    setFillMode("input");
    setTypedAnswer("");
    setSelectedOptionIndex(null);
  };

if (subtopic?.availability === "coming-soon" || accessDenied) {
  return <ScrollView style={styles.container}><Text style={styles.title}>{subtopic?.title}</Text>
    <Text style={styles.body}>{subtopic?.availability === "coming-soon" ? "Coming soon" : accessDenied}</Text>
    <Pressable onPress={() => router.replace(levelPath)}><Text style={styles.backText}>← Back</Text></Pressable></ScrollView>;
}
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

      <Text style={styles.body}>{shortage ?? "No concepts found for this part."}</Text>
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

      {failedImageIds.length > 0 && <Text style={styles.body}>An image was unavailable. This quiz restarted using verified alternatives.</Text>}
      {q.type !== "matching" && q.stimulus && <AssessmentStimulus stimulus={q.stimulus} onUnavailable={imageUnavailable} />}
      {q.type !== "matching" && !q.stimulus && q.image && <QuizImage image={q.image} />}

      {q.type === "mcq" &&
       (q as any).options.map((opt: string) => {
          const isSelected = selectedAnswer === opt;

          const correctOpt = (q as any).options[(q as any).correctIndex];
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

      {checked && q.type === "true_false" && !q.correctAnswer && q.correctStatement && (
        <Text style={styles.body}>Correct fact: {q.correctStatement}</Text>
      )}

      {q.type === "fill_blank" && (
        <View>
          {activeFillMode === "input" ? (
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

              {allowedFillModes.includes("options") && <Pressable onPress={() => !checked && setFillMode("options")}>
                <Text style={styles.switchText}>Use options instead</Text>
              </Pressable>}

              {checked && isCorrect === false && (
                <Text style={styles.correctAnswerText}>
                  {q.prompt.replace("_____", q.answerText.split("|")[0])}
                </Text>
              )}
            </>
          ) : (
            <>
              {fillAnswerOptions.map((opt: string, i: number) => {
                const correctAnswer = q.answerText.split("|")[0];
                const isSelected = selectedOptionIndex === i;
                const isCorrectOption = checked && opt === correctAnswer;
                const isWrongSelected = checked && isSelected && opt !== correctAnswer;

                return (
                  <Pressable
                    key={`${opt}-${i}`}
                    onPress={() => !checked && setSelectedOptionIndex(i)}
                    style={[
                      styles.option,
                      !checked && isSelected && styles.optionSelected,
                      isCorrectOption && styles.optionCorrect,
                      isWrongSelected && styles.optionWrong,
                    ]}
                  >
                    <Text style={styles.optionText}>{opt}</Text>
                  </Pressable>
                );
              })}

              {allowedFillModes.includes("input") && <Pressable onPress={() => !checked && setFillMode("input")}>
                <Text style={styles.switchText}>Type instead</Text>
              </Pressable>}
            </>
          )}
        </View>
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
                isMatchingPairCorrect(leftItem.pair, matchedRightItem.pair);

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
                  {leftItem.pair.stimulus && <AssessmentStimulus stimulus={leftItem.pair.stimulus} onUnavailable={imageUnavailable} />}
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
                isMatchingPairCorrect(matchedLeftItem.pair, rightItem.pair);

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
            disabled={
              !canCheck ||
              (q.type === "fill_blank" &&
                activeFillMode === "input" &&
                typedAnswer.trim().length === 0)
            }
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
