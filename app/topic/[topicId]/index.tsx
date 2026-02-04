import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useMemo } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { TOPIC_BY_ID } from "../../../data/catalog";
import { getXpLevel } from "../../../src/state/leveling";
import { useStreak } from "../../../src/state/useStreak";
import { useTotalXp } from "../../../src/state/useTotalXp";

export default function TopicScreen() {
  const router = useRouter();
  const { topicId } = useLocalSearchParams<{ topicId: string }>();

  const topic = TOPIC_BY_ID[String(topicId)];

  const totalXP = useTotalXp();
  const xpLevel = useMemo(() => getXpLevel(totalXP), [totalXP]);
  const streak = useStreak();

  if (!topic) {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Unknown topic</Text>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backText}>← Back</Text>
        </Pressable>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.headerRow}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backText}>← Back</Text>
        </Pressable>

        <Text numberOfLines={1} style={styles.headerTitle}>
          {topic.emoji} {topic.title}
        </Text>

        <View style={styles.xpPill}>
          <Text style={styles.xpText}>
              🔥 {streak} • XP {totalXP}
          </Text>
        </View>
      </View>

      <Text style={styles.subtitle}>Choose a subtopic</Text>

      {topic.subtopics.map((s) => (
        <Pressable
          key={s.id}
          style={[styles.card, { borderLeftColor: topic.color }]}
          onPress={() =>
          router.push({
          pathname: "/topic/[topicId]/subtopic/[subtopicId]",
          params: { topicId: String(topic.id), subtopicId: String(s.id) },
          })
      } 

        >
          <Text style={styles.cardTitle}>{s.title}</Text>
          <Text style={styles.cardMeta}>{s.levels.length} levels</Text>
        </Pressable>
      ))}
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
  cardMeta: { color: "#B3C7E6", marginTop: 4, fontSize: 13 },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#E5F3FF",
    textAlign: "center",
    marginBottom: 12,
  },
  value: {
    fontSize: 16,
    color: "#B3C7E6",
    textAlign: "center",
  },
  scrollContent: {
  paddingBottom: 40,
},
});
