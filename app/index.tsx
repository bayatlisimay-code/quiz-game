import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { TOPICS } from "../data/catalog";
import { useStreak } from "../src/state/useStreak";
import { useTotalXp } from "../src/state/useTotalXp";

export default function HomeScreen() {
  const router = useRouter();
  const streak = useStreak();
  const totalXP = useTotalXp();
  

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
  <Text style={styles.headerTitle}>Choose a topic</Text>

  <View style={styles.xpPill}>
    <Text style={styles.xpText}>
      🔥 {streak} • XP {totalXP}
    </Text>
  </View>
</View>

      {TOPICS.map((t) => (
        <Pressable
          key={t.id}
          style={[styles.card, { borderLeftColor: t.color }]}
          onPress={() => router.push(`/topic/${t.id}` as any)}
        >
          <Text style={styles.cardTitle}>
            {t.emoji} {t.title}
          </Text>
          <Text style={styles.cardMeta}>{t.subtopics.length} subtopics</Text>
        </Pressable>
      ))}
    </View>
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
    marginBottom: 16,
  },
  headerTitle: { color: "#E5F3FF", fontSize: 18, fontWeight: "800" },

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

  card: {
    backgroundColor: "#1F2937",
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    borderLeftWidth: 4,
  },
  cardTitle: { color: "#E5F3FF", fontSize: 18, fontWeight: "700" },
  cardMeta: { color: "#B3C7E6", marginTop: 4, fontSize: 13 },
});
