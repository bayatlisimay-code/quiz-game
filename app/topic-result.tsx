import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Animated, Pressable, StyleSheet, Text, View } from "react-native";
import { TOPIC_BY_ID } from "../data/catalog";
import { getXpLevel } from "../src/state/leveling";
import { loadProgress } from "../src/state/progress";

export default function TopicResultScreen() {
  const router = useRouter();
  const { topicId, score, total } = useLocalSearchParams<{
    topicId: string;
    score: string;
    total: string;
  }>();

  const topic = TOPIC_BY_ID[String(topicId)];

  const scoreNum = useMemo(() => {
    const n = Number(score);
    return Number.isFinite(n) ? n : 0;
  }, [score]);

  const totalNum = useMemo(() => {
    const n = Number(total);
    return Number.isFinite(n) && n > 0 ? n : 1;
  }, [total]);

  // Must match the XP rule used in your quiz screen
  const xpGained = useMemo(() => {
    return scoreNum === totalNum ? 10 : 2;
  }, [scoreNum, totalNum]);

  // Read totalXP AFTER the quiz saved progress
  const [totalXP, setTotalXP] = useState<number | null>(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      const p = await loadProgress();
      if (alive) setTotalXP(p.totalXP ?? 0);
    })();
    return () => {
      alive = false;
    };
  }, []);

  const xpLevelNow = useMemo(() => {
    if (totalXP === null) return null;
    return getXpLevel(totalXP);
  }, [totalXP]);

  const didLevelUp = useMemo(() => {
    if (totalXP === null) return false;
    const prevXP = Math.max(0, totalXP - xpGained);
    const prevLevel = getXpLevel(prevXP).level;
    const nowLevel = getXpLevel(totalXP).level;
    return nowLevel > prevLevel;
  }, [totalXP, xpGained]);

  // +XP pop animation
  const xpOpacity = useRef(new Animated.Value(0)).current;
  const xpTranslateY = useRef(new Animated.Value(10)).current;
  const xpScale = useRef(new Animated.Value(0.95)).current;

  // LEVEL UP overlay animation
  const luOpacity = useRef(new Animated.Value(0)).current;
  const luScale = useRef(new Animated.Value(0.8)).current;
  const luTranslateY = useRef(new Animated.Value(16)).current;

  useEffect(() => {
    // Always animate the +XP pill
    Animated.parallel([
      Animated.timing(xpOpacity, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(xpTranslateY, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.spring(xpScale, {
        toValue: 1,
        friction: 6,
        tension: 120,
        useNativeDriver: true,
      }),
    ]).start();
  }, [xpOpacity, xpTranslateY, xpScale]);

  useEffect(() => {
    if (!didLevelUp) return;

    // Show LEVEL UP overlay
    luOpacity.setValue(0);
    luScale.setValue(0.8);
    luTranslateY.setValue(16);

    Animated.sequence([
      Animated.parallel([
        Animated.timing(luOpacity, {
          toValue: 1,
          duration: 220,
          useNativeDriver: true,
        }),
        Animated.spring(luScale, {
          toValue: 1,
          friction: 6,
          tension: 140,
          useNativeDriver: true,
        }),
        Animated.timing(luTranslateY, {
          toValue: 0,
          duration: 220,
          useNativeDriver: true,
        }),
      ]),
      Animated.delay(900),
      Animated.parallel([
        Animated.timing(luOpacity, {
          toValue: 0,
          duration: 220,
          useNativeDriver: true,
        }),
        Animated.timing(luTranslateY, {
          toValue: -10,
          duration: 220,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, [didLevelUp, luOpacity, luScale, luTranslateY]);

  return (
    <View style={styles.container}>
      {/* LEVEL UP overlay */}
      {didLevelUp && xpLevelNow && (
        <Animated.View
          pointerEvents="none"
          style={[
            styles.levelUpOverlay,
            {
              opacity: luOpacity,
              transform: [{ translateY: luTranslateY }, { scale: luScale }],
            },
          ]}
        >
          <Text style={styles.levelUpTitle}>LEVEL UP!</Text>
          <Text style={styles.levelUpSub}>You reached Lv {xpLevelNow.level}</Text>
        </Animated.View>
      )}

      <Text style={styles.title}>
        {topic ? `${topic.emoji} ${topic.title}` : "Quiz Result"}
      </Text>

      <Text style={styles.scoreText}>
        Score: <Text style={styles.scoreStrong}>{scoreNum}</Text> / {totalNum}
      </Text>

      <Animated.View
        style={[
          styles.xpPop,
          {
            opacity: xpOpacity,
            transform: [{ translateY: xpTranslateY }, { scale: xpScale }],
          },
        ]}
      >
        <Text style={styles.xpPopText}>+{xpGained} XP</Text>
      </Animated.View>

      {!!xpLevelNow && (
        <>
          <View style={{ height: 12 }} />
          <Text style={styles.levelText}>Lv {xpLevelNow.level}</Text>
          <Text style={styles.nextText}>Next level in {xpLevelNow.xpForNext} XP</Text>

          <View style={styles.barOuter}>
            <View
              style={[
                styles.barInner,
                { width: `${Math.round(xpLevelNow.progress01 * 100)}%` },
              ]}
            />
          </View>
        </>
      )}

      <View style={{ height: 18 }} />

      <Pressable style={styles.primaryButton} onPress={() => router.back()}>
        <Text style={styles.primaryButtonText}>Back to levels</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050816",
    paddingHorizontal: 24,
    paddingTop: 80,
    alignItems: "center",
  },

  levelUpOverlay: {
    position: "absolute",
    top: 80,
    alignSelf: "center",
    backgroundColor: "rgba(17,24,39,0.92)",
    borderWidth: 1,
    borderColor: "#F97316",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 16,
    zIndex: 10,
    alignItems: "center",
  },
  levelUpTitle: {
    color: "#FDBA74",
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: 1,
  },
  levelUpSub: {
    color: "#E5F3FF",
    marginTop: 4,
    fontSize: 13,
    fontWeight: "800",
  },

  title: {
    color: "#E5F3FF",
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 14,
    textAlign: "center",
  },
  scoreText: {
    color: "#B3C7E6",
    fontSize: 16,
    marginBottom: 16,
    textAlign: "center",
  },
  scoreStrong: {
    color: "#E5F3FF",
    fontWeight: "900",
  },
  xpPop: {
    borderWidth: 1,
    borderColor: "#F97316",
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  xpPopText: {
    color: "#FDBA74",
    fontSize: 16,
    fontWeight: "900",
  },

  levelText: {
    color: "#E5F3FF",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "center",
  },
  nextText: {
    color: "#B3C7E6",
    fontSize: 13,
    marginTop: 4,
    textAlign: "center",
  },
  barOuter: {
    width: "100%",
    maxWidth: 320,
    height: 10,
    borderRadius: 999,
    backgroundColor: "#111827",
    marginTop: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#1F2937",
  },
  barInner: {
    height: "100%",
    backgroundColor: "#F97316",
    borderRadius: 999,
  },

  primaryButton: {
    backgroundColor: "#F97316",
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 999,
  },
  primaryButtonText: {
    color: "#111827",
    fontSize: 16,
    fontWeight: "800",
  },
});
