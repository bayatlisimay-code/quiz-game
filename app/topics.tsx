import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { TOPICS } from "../data/catalog";
import { useStreak } from "../src/state/useStreak";
import { useTotalXp } from "../src/state/useTotalXp";

export default function TopicsScreen() {
  const router = useRouter();
  const streak = useStreak();
  const totalXP = useTotalXp();

  return (
  <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
    <View style={styles.headerRow}>
      <Pressable style={styles.backButton} onPress={() => router.replace("/" as any)}>
        <Text style={styles.backText}>← Back</Text>
      </Pressable>

      <Text style={styles.headerTitle}>Choose a topic</Text>

      <View style={styles.xpPill}>
        <View style={styles.xpContent}>
          <MaterialCommunityIcons name="fire" size={14} color="#FDBA74" />
          <Text style={styles.xpText}>{streak}</Text>

          <Text style={styles.xpDot}>•</Text>

          <MaterialCommunityIcons name="diamond-stone" size={14} color="#FDBA74" />
          <Text style={styles.xpText}>{totalXP}</Text>
        </View>
      </View>
    </View>

    {TOPICS.map((t) => (
      <Pressable
        key={t.id}
        style={[styles.card, { borderLeftColor: t.color }]}
        onPress={() => router.push(`/topic/${t.id}` as any)}
      >
        <View style={styles.cardTitleRow}>
          <MaterialCommunityIcons name="shape" size={18} color="#E5F3FF" />
          <Text style={styles.cardTitle}>{t.title}</Text>
        </View>
        <Text style={styles.cardMeta}>{t.subtopics.length} subtopics</Text>
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
  scrollContent: {
    paddingBottom: 40,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 18,
  },
  headerTitle: {
    color: "#E5F3FF",
    fontSize: 18,
    fontWeight: "900",
  },

  backButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#3B82F6",
  },
  backText: {
    color: "#BFDBFE",
    fontSize: 14,
    fontWeight: "800",
  },

  xpPill: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#F97316",
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

  card: {
    backgroundColor: "#1F2937",
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    borderLeftWidth: 4,
  },
  cardTitle: {
    color: "#E5F3FF",
    fontSize: 18,
    fontWeight: "800",
  },
  cardMeta: {
    color: "#B3C7E6",
    marginTop: 4,
    fontSize: 13,
  },
  cardTitleRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});