import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { TOPIC_BY_ID } from "../../../../../data/catalog";
import { isPartCompleted, loadProgress } from "../../../../../src/state/progress";
import { useStreak } from "../../../../../src/state/useStreak";
import { useTotalXp } from "../../../../../src/state/useTotalXp";

export default function LevelScreen() {
  const router = useRouter();
  const { topicId, subtopicId, levelId, } = useLocalSearchParams<{
    topicId: string;
    subtopicId: string;
    levelId: string;
  }>();

  const subtopicPath = `/topic/${String(topicId)}/subtopic/${String(subtopicId)}`;

  const totalXP = useTotalXp();
  const streak = useStreak();

  const topic = TOPIC_BY_ID[String(topicId)];
  const subtopic = topic?.subtopics.find((s) => s.id === String(subtopicId));
  const level = subtopic?.levels.find((l) => l.id === String(levelId));

  const [completedPartsMap, setCompletedPartsMap] = useState<Record<string, boolean>>({});
  const [completedParts, setCompletedParts] = useState<string[]>([]);


  const refreshProgress = useCallback(() => {
    let alive = true;

    (async () => {
      const progress = await loadProgress();
      if (!alive) return;

      const map: Record<string, boolean> = {};
      level?.parts?.forEach((part) => {
        map[part.id] = isPartCompleted(
          progress,
          String(topicId),
          String(subtopicId),
          String(levelId),
          part.id
        );
      });

      setCompletedPartsMap(map);
    })();

    return () => {
      alive = false;
    };
  }, [topicId, subtopicId, levelId, level]);

  useFocusEffect(refreshProgress);

  if (!topic || !subtopic || !level) {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Unknown level</Text>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backText}>← Back</Text>
        </Pressable>
      </ScrollView>
    );
  }

  if (!level.parts || level.parts.length === 0) {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>No parts yet</Text>
        <Text style={styles.value}>This level has no parts in data/catalog.</Text>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backText}>← Back</Text>
        </Pressable>
      </ScrollView>
    );
  }

  const isUnlocked = (partNumber: number) => {
    if (partNumber <= 1) return true;
    return completedPartsMap[String(partNumber - 1)] === true;
  };

  const isCompleted = (partId: string) => completedPartsMap[partId] === true;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.headerRow}>
        <Pressable
          onPress={() => router.replace(subtopicPath as any)}
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

            <Text style={styles.xpText}>Lv 0</Text>

            <Text style={styles.xpDot}>•</Text>

            <Text style={styles.xpText}>XP {totalXP}</Text>
          </View>
        </View>
      </View>

      <Text style={styles.subtitle}>
        {level.title} • Choose a part
      </Text>

      {level.parts.map((part) => {
        const partNumber = Number(part.id);
        const prevPartId = String(partNumber - 1);

        const done = completedPartsMap[part.id] === true;
        const partUnlocked =
          part.id === "1" || completedPartsMap[prevPartId] === true;

        const locked = !partUnlocked;

        return (
          <Pressable
            key={part.id}
            style={[
              styles.card,
              { borderLeftColor: topic.color, opacity: locked ? 0.45 : 1 },
            ]}
            disabled={locked}
            onPress={() =>
              router.push({
                pathname: "/topic/[topicId]/subtopic/[subtopicId]/level/[levelId]/[partId]",
                params: {
                  topicId: String(topicId),
                  subtopicId: String(subtopicId),
                  levelId: String(levelId),
                  partId: String(part.id),
                  set: String(part.questionSetId),
                },
              })
            }
          >
            <View style={styles.cardTitleRow}>
              <Text style={styles.cardTitle}>{part.title}</Text>

              {done ? (
                <MaterialCommunityIcons name="check-circle" size={20} color="#22C55E" />
              ) : locked ? (
                <MaterialCommunityIcons name="lock-outline" size={20} color="#7C8799" />
              ) : null}
            </View>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#050816", paddingHorizontal: 24, paddingTop: 60 },
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
  subtitle: { color: "#B3C7E6", textAlign: "center", marginBottom: 16, fontSize: 14 },
  card: {
    backgroundColor: "#1F2937",
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    borderLeftWidth: 4,
  },
  cardTitle: { color: "#E5F3FF", fontSize: 18, fontWeight: "700" },
  title: { fontSize: 22, fontWeight: "700", color: "#E5F3FF", textAlign: "center" },
  value: { fontSize: 16, color: "#B3C7E6", textAlign: "center", marginTop: 8 },
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
  cardTitleRow: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  },
  scrollContent: {
    paddingBottom: 40,
  },
});
