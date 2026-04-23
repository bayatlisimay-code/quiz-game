import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import React, { useCallback, useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { masteryLevels, TOPIC_BY_ID } from "../../../../../data/catalog";
import { isLevelCompleted, loadProgress } from "../../../../../src/state/progress";
import { useStreak } from "../../../../../src/state/useStreak";
import { useTotalXp } from "../../../../../src/state/useTotalXp";
import { getHomePath, getTopicPath } from "../../../../../lib/routes";


export default function SubtopicScreen() {
  const router = useRouter();
  const { topicId, subtopicId } = useLocalSearchParams<{
    topicId: string;
    subtopicId: string;
  }>();

  const totalXP = useTotalXp();
  const streak = useStreak();

  const topic = TOPIC_BY_ID[String(topicId)];
  const subtopic = topic?.subtopics.find((s) => s.id === String(subtopicId));

  const [completedLevelsMap, setCompletedLevelsMap] = useState<Record<string, boolean>>({});

  const subtopicLevel = useMemo(() => {
    const totalLevels = subtopic?.levels?.length ?? 0;
    if (totalLevels <= 0) return 1;

    // Count how many levels are completed (assuming lvl.id is "1", "2", "3"...)
    let maxCompletedLevel = 0;
    for (let i = 1; i <= totalLevels; i++) {
      if (completedLevelsMap[String(i)]) {
        maxCompletedLevel = i;
      }
    }

    return Math.min(maxCompletedLevel, totalLevels);
  }, [completedLevelsMap, subtopic?.levels?.length]);

  const refreshProgress = useCallback(() => {
    let alive = true;

    (async () => {
      const progress = await loadProgress();
      if (!alive) return;

      const map: Record<string, boolean> = {};
      subtopic?.levels.forEach((lvl) => {
        const totalParts = lvl.parts?.length ?? 0;
        map[lvl.id] = isLevelCompleted(
          progress,
          String(topicId),
          String(subtopicId),
          lvl.id,
          totalParts
        );
      });

      setCompletedLevelsMap(map);
    })();

    return () => {
      alive = false;
    };
  }, [topicId, subtopicId, subtopic]);

  useFocusEffect(refreshProgress);

  if (!topic || !subtopic) {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Unknown subtopic</Text>
        <Pressable style={styles.backButton} onPress={() =>
          router.replace(getTopicPath(String(topicId)))
          }>
          <Text style={styles.backText}>← Back</Text>
        </Pressable>
      </ScrollView>
    );
  }

  const isUnlocked = (levelNumber: number) => {
    if (levelNumber <= 1) return true;
    return completedLevelsMap[String(levelNumber - 1)] === true;
  };

  const isCompleted = (levelId: string) => completedLevelsMap[levelId] === true;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
     <View style={styles.headerRow}>
        <Pressable
          onPress={() => router.replace(getTopicPath(String(topicId)))}
          style={styles.backButton}
        >
          <Text style={styles.backText}>← Back</Text>
        </Pressable>

        <Text numberOfLines={1} style={styles.headerTitle}>
          {subtopic.title}
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

      <View style={styles.homeRow}>
        <Pressable
          onPress={() => router.replace(getHomePath())}
          style={styles.backButton}
        >
          <Text style={styles.backText}>Home</Text>
        </Pressable>
      </View>

      <Text style={styles.subtitle}>Choose a level</Text>

      {masteryLevels.map((group) => {
    const levelsInGroup = subtopic.levels.filter((lvl) => {
    const n = Number(lvl.id);
    const levelNumber = Number.isFinite(n) && n > 0 ? n : 1;
    return levelNumber >= group.from && levelNumber <= group.to;
  });

  const groupLocked =
    levelsInGroup.length === 0
      ? true
      : !isUnlocked(Number(levelsInGroup[0].id));

  return (
    <React.Fragment key={group.label}>
      <View style={styles.masteryHeadingRow}>
        {groupLocked ? (
          <MaterialCommunityIcons
            name="lock-outline"
            size={18}
            color="#7C8799"
            style={styles.masteryIcon}
          />
        ) : null}
        <Text style={styles.masteryHeading}>{group.label}</Text>
      </View>
      <View style={styles.masteryDivider} />

      {levelsInGroup.map((lvl) => {
        const n = Number(lvl.id);
        const levelNumber = Number.isFinite(n) && n > 0 ? n : 1;

        const locked = !isUnlocked(levelNumber);
        const done = isCompleted(lvl.id);

        return (
          <Pressable
            key={lvl.id}
            style={[
              styles.card,
              { borderLeftColor: topic.color, opacity: locked ? 0.45 : 1 },
            ]}
            disabled={locked}
            onPress={() =>
              router.push({
                pathname: "/topic/[topicId]/subtopic/[subtopicId]/[levelId]",
                params: {
                  topicId: String(topicId),
                  subtopicId: String(subtopicId),
                  levelId: String(lvl.id),
                },
              })
            }
          >
            <View style={styles.cardTitleRow}>
              <Text style={styles.cardTitle}>{lvl.title}</Text>

              {done ? (
                <MaterialCommunityIcons name="check-circle" size={20} color="#22C55E" />
              ) : locked ? (
                <MaterialCommunityIcons name="lock-outline" size={20} color="#7C8799" />
              ) : null}
            </View>
          </Pressable>
        );
      })}
    </React.Fragment>
  );
})}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050816",
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  backButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#3B82F6",
  },
  backText: { color: "#BFDBFE", fontSize: 14, fontWeight: "600" },
  headerTitle: {
    color: "#E5F3FF",
    fontSize: 16,
    fontWeight: "700",
    flex: 1,
    textAlign: "center",
    marginHorizontal: 12,
  },
  subtitle: {
    color: "#B3C7E6",
    textAlign: "center",
    marginBottom: 16,
    fontSize: 14,
  },
  card: {
    backgroundColor: "#1F2937",
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    borderLeftWidth: 4,
  },
  cardTitle: { color: "#E5F3FF", fontSize: 18, fontWeight: "700" },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#E5F3FF",
    textAlign: "center",
    marginBottom: 12,
  },
  xpPill: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#F97316",
    marginLeft: 10,
  },
  xpText: {
  color: "#FDBA74",
  fontSize: 13,
  fontWeight: "800",
  marginLeft: 6,
},
  masteryHeading: {
    fontSize: 20,
    fontWeight: "800",
    color: "#EAF2FF",
  },
  masteryDivider: {
  height: 1,
  backgroundColor: "#00000022",
  marginBottom: 12,
  },
  scrollContent: {
  paddingBottom: 40,
  },
  xpContent: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
},

xpDot: {
  color: "#FDBA74",
  fontSize: 13,
  fontWeight: "800",
  marginHorizontal: 8,
},

masteryHeadingRow: {
  flexDirection: "row",
  alignItems: "center",
  marginTop: 18,
  marginBottom: 10,
},

masteryIcon: {
  marginRight: 8,
},

cardTitleRow: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
},
homeRow: {
  marginTop: 8,
  marginBottom: 4,
  alignItems: "flex-end",
},
});
