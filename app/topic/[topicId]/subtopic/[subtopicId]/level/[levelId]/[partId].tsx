import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { QUESTION_SETS } from "../../../../../../../data/questionSets";
import type { QuestionSet } from "../../../../../../../data/questionTypes";
import { saveLastLessonPath } from "../../../../../../../lib/progress";
import { markPartCompleted } from "../../../../../../../src/state/progress";


export default function PartQuizScreen() {
  const router = useRouter();

  const { topicId, subtopicId, levelId, partId, set } = useLocalSearchParams<{
    topicId?: string;
    subtopicId?: string;
    levelId?: string;
    partId?: string;
    set?: string;
  }>();

  useEffect(() => {
    if (!topicId || !subtopicId || !levelId || !partId) return;

    const setValue = String(set ?? "");
    const path =
      setValue.length > 0
        ? `/topic/${topicId}/subtopic/${subtopicId}/level/${levelId}/${partId}?set=${encodeURIComponent(
            setValue
          )}`
        : `/topic/${topicId}/subtopic/${subtopicId}/level/${levelId}/${partId}`;

    saveLastLessonPath(path);
  }, [topicId, subtopicId, levelId, partId, set]);

  const setId = String(set ?? "");

  const questionSet = useMemo(() => {
    if (!setId) return null;

    const candidates = [setId, `${setId}_quizA`, `${setId}_quizB`, `${setId}_quizC`];

    for (const key of candidates) {
      const raw = QUESTION_SETS[key] as QuestionSet | undefined;
      if (raw && Array.isArray(raw.questions)) return raw;
    }

    return null;
  }, [setId]);

  const questions = useMemo(() => {
  if (!questionSet?.questions?.length) return [];

  // Shuffle once each time you open this quiz screen
  const copy = [...questionSet.questions];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}, [setId, questionSet]);

  const [idx, setIdx] = useState(0);

  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matches, setMatches] = useState<Record<string, string>>({});

  const [wrongLeft, setWrongLeft] = useState<string | null>(null);
  const [wrongRight, setWrongRight] = useState<string | null>(null);
  const [justMatched, setJustMatched] = useState<string | null>(null);

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [typedAnswer, setTypedAnswer] = useState("");

  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[idx];
  const shuffledRights = useMemo(() => {
  if (!q || q.type !== "matching") return [];

  const rights = q.pairs.map((p) => p.right);

  // simple shuffle
  return [...rights].sort(() => Math.random() - 0.5);
}, [idx]);


  useEffect(() => {
  if (!q) return;
  if (q.type !== "matching") return;

  const allDone = Object.keys(matches).length === q.pairs.length;

  if (allDone && !checked) {
    setChecked(true);
    setIsCorrect(true);
    setCorrectCount((c) => c + 1);
  }
}, [q, matches, checked]);


  const canCheckAnswer = useMemo(() => {
    if (!q) return false;
    if (checked) return false;

    if (q.type === "mcq") return selectedAnswer !== null;
    if (q.type === "true_false") return selectedAnswer !== null;
    if (q.type === "fill_blank") return typedAnswer.trim().length > 0;
    if (q.type === "matching") return Object.keys(matches).length === q.pairs.length;

    return false;
  }, [q, checked, selectedAnswer, typedAnswer, matches]);

  const onCheck = () => {
    if (!q || !canCheckAnswer) return;

    let ok = false;

    if (q.type === "mcq") {
      ok = selectedAnswer === q.answer;
    } else if (q.type === "true_false") {
      ok = selectedAnswer === String(q.answer);
    } else if (q.type === "fill_blank") {
      const typed = typedAnswer.trim().toLowerCase();
      const answer = q.answer.trim().toLowerCase();
      const accepted = (q.acceptedAnswers ?? []).map((a) => a.trim().toLowerCase());
      ok = typed === answer || accepted.includes(typed);
    } else if (q.type === "matching") {
      ok = false;
    }

    setChecked(true);
    setIsCorrect(ok);
    if (ok) setCorrectCount((c) => c + 1);
  };
const onNext = () => {
  if (!checked) return;

  const nextIdx = idx + 1;

  // finished
  if (nextIdx >= questions.length) {
    setFinished(true);

    if (topicId && subtopicId && levelId && partId) {
      markPartCompleted(String(topicId), String(subtopicId), String(levelId), String(partId));
    }

    return;
  }

  // next question
  setIdx(nextIdx);
  setSelectedAnswer(null);
  setTypedAnswer("");
  setChecked(false);
  setIsCorrect(null);

  // reset matching state
  setSelectedLeft(null);
  setMatches({});
  setWrongLeft(null);
  setWrongRight(null);
  setJustMatched(null);
};


  if (!setId) {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>No question set</Text>
        <Text style={styles.body}>This part was opened without a "set" param.</Text>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backText}>← Back</Text>
        </Pressable>
      </ScrollView>
    );
  }

  if (!questionSet) {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>No questions yet</Text>
        <Text style={styles.body}>Set: {setId}</Text>
        <Text style={styles.body}>This setId is not found in data/questionSets.ts (QUESTION_SETS).</Text>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backText}>← Back</Text>
        </Pressable>
      </ScrollView>
    );
  }

  if (questions.length === 0) {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>No questions in this file</Text>
        <Text style={styles.body}>Set: {setId}</Text>
        <Text style={styles.body}>Add at least 1 question inside the JSON "questions" array.</Text>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backText}>← Back</Text>
        </Pressable>
      </ScrollView>
    );
  }

  if (finished) {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Done ✅</Text>
        <Text style={styles.body}>
          Score: {correctCount} / {questions.length}
        </Text>

        <Pressable style={styles.primaryButton} onPress={() => router.back()}>
          <Text style={styles.primaryText}>Back to parts</Text>
        </Pressable>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.topRow}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backText}>← Back</Text>
        </Pressable>

        <Text style={styles.progress}>
          {idx + 1}/{questions.length}
        </Text>
      </View>

      <Text style={styles.question}>{q.prompt}</Text>

      {q.type === "mcq" && (
        <View style={{ gap: 10 }}>
          {q.choices.map((choice) => {
            const picked = selectedAnswer === choice;

            const showCorrect = checked && choice === q.answer;
            const showWrong = checked && picked && choice !== q.answer;

            return (
              <Pressable
                key={choice}
                onPress={() => {
                  if (checked) return;
                  setSelectedAnswer(choice);
                }}
                style={[
                  styles.option,
                  picked && styles.optionPicked,
                  showCorrect && styles.optionCorrect,
                  showWrong && styles.optionWrong,
                ]}
              >
                <Text style={styles.optionText}>{choice}</Text>
              </Pressable>
            );
          })}
        </View>
      )}

      {q.type === "true_false" && (
        <View style={{ flexDirection: "row", gap: 12 }}>
          {[
            { label: "True", value: "true" },
            { label: "False", value: "false" },
          ].map((b) => {
            const picked = selectedAnswer === b.value;

            const correctValue = String(q.answer);
            const showCorrect = checked && b.value === correctValue;
            const showWrong = checked && picked && b.value !== correctValue;

            return (
              <Pressable
                key={b.label}
                onPress={() => {
                  if (checked) return;
                  setSelectedAnswer(b.value);
                }}
                style={[
                  styles.option,
                  { flex: 1, alignItems: "center" },
                  picked && styles.optionPicked,
                  showCorrect && styles.optionCorrect,
                  showWrong && styles.optionWrong,
                ]}
              >
                <Text style={styles.optionText}>{b.label}</Text>
              </Pressable>
            );
          })}
        </View>
      )}

      {q.type === "fill_blank" && (
        <View style={{ gap: 10 }}>
          <TextInput
            value={typedAnswer}
            onChangeText={(t) => {
              if (checked) return;
              setTypedAnswer(t);
            }}
            placeholder="Type your answer"
            autoCapitalize="none"
            style={styles.input}
          />
        </View>
      )}

      {q.type === "matching" && (
  <View style={{ gap: 14 }}>
    <Text style={styles.body}>Tap a left item, then tap the matching right item.</Text>

    <View style={{ flexDirection: "row", gap: 12 }}>
      {/* Left column */}
      <View style={{ flex: 1, gap: 10 }}>
        {q.pairs.map((p) => {
          const isSolved = matches[p.left] === p.right; // only correct matches are stored
          const isSelected = selectedLeft === p.left;
          const isWrong = wrongLeft === p.left;

          return (
            <Pressable
              key={p.left}
              onPress={() => {
                if (checked) return;
                if (isSolved) return;
                setSelectedLeft(p.left);
                setWrongLeft(null);
                setWrongRight(null);
              }}
              style={[
                styles.choice,
                isSelected && styles.choiceSelected,
                isWrong && styles.choiceWrong,
                isSolved && { opacity: 0.4 },
              ]}
            >
              <Text style={styles.choiceText}>{p.left}</Text>
            </Pressable>
          );
        })}
      </View>

      {/* Right column */}
      <View style={{ flex: 1, gap: 10 }}>
        {shuffledRights.map((right) => {
          const isSolvedRight = Object.values(matches).includes(right);
          const isWrong = wrongRight === right;

          return (
            <Pressable
              key={right}
              onPress={() => {
                if (checked) return;
                if (!selectedLeft) return;
                if (isSolvedRight) return;

                const correctRight = q.pairs.find((x) => x.left === selectedLeft)?.right;

                if (right === correctRight) {
                  // ✅ correct: green first, then fade
                  setJustMatched(right);

                  setTimeout(() => {
                    setMatches((prev) => ({ ...prev, [selectedLeft]: right }));
                    setSelectedLeft(null);
                    setWrongLeft(null);
                    setWrongRight(null);
                    setJustMatched(null);
                  }, 500);

                } else {
                  // ❌ wrong: show red, keep everything
                  setWrongLeft(selectedLeft);
                  setWrongRight(right);

                  setTimeout(() => {
                    setWrongLeft(null);
                    setWrongRight(null);
                  }, 700);
                }
              }}
              style={[
                styles.choice,
                isWrong && styles.choiceWrong,
                justMatched === right && styles.choiceCorrect,
                isSolvedRight && { opacity: 0.4 },
              ]}
            >
              <Text style={styles.choiceText}>{right}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  </View>
)}



      {checked && (
        <View style={{ marginTop: 14 }}>
          <Text style={styles.body}>{isCorrect ? "Correct ✅" : "Not quite ❌"}</Text>
          {!!q.explanation && <Text style={styles.body}>{q.explanation}</Text>}
          {q.type === "fill_blank" && !isCorrect && (
            <Text style={styles.body}>
              Correct answer: <Text style={{ fontWeight: "900" }}>{q.answer}</Text>
            </Text>
          )}
        </View>
      )}

      {!checked ? (
        <Pressable
          style={[styles.primaryButton, !canCheckAnswer && { opacity: 0.5 }]}
          onPress={onCheck}
          disabled={!canCheckAnswer}
        >
          <Text style={styles.primaryText}>Check</Text>
        </Pressable>
      ) : (
        <Pressable style={styles.primaryButton} onPress={onNext}>
          <Text style={styles.primaryText}>{idx + 1 === questions.length ? "Finish" : "Next"}</Text>
        </Pressable>
      )}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#050816", paddingTop: 60, paddingHorizontal: 24 },
  scrollContent: { paddingBottom: 40 },

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

  input: {
    borderWidth: 1,
    borderRadius: 14,
    padding: 14,
    fontSize: 16,
    color: "#E5F3FF",
    borderColor: "#111827",
    backgroundColor: "#1F2937",
  },

  primaryButton: {
    marginTop: 14,
    backgroundColor: "#2563EB",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },
  primaryText: { color: "#E5F3FF", fontSize: 16, fontWeight: "900" },
  
    choice: {
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#111827",
    backgroundColor: "#1F2937",
  },

  choiceSelected: {
    borderColor: "#60A5FA",
  },

  choiceText: {
    color: "#E5F3FF",
    fontSize: 16,
    fontWeight: "700",
  },

  choiceWrong: { borderColor: "#FB7185" },
  choiceCorrect: { borderColor: "#34D399" },
});
