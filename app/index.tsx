import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFocusEffect, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { loadLastLocation } from "../src/state/lastLocation";
import { useStreak } from "../src/state/useStreak";
import { useTotalXp } from "../src/state/useTotalXp";

export default function HomeScreen() {
  const router = useRouter();
  const streak = useStreak();
  const totalXP = useTotalXp();

  const [lastLesson, setLastLesson] = useState<string | null>(null);

  useFocusEffect(() => {
    let cancelled = false;

    (async () => {
      const loc = await loadLastLocation();
      if (cancelled) return;

      if (!loc) {
        setLastLesson(null);
        return;
      }

      setLastLesson(
        `/topic/${loc.topicId}/subtopic/${loc.subtopicId}/level/${loc.levelId}/${loc.partId}`
      );
    })();

    return () => {
      cancelled = true;
    };
  });

  const onContinue = () => {
    if (lastLesson) {
      router.push(lastLesson as any);
      return;
    }

    router.push("/topics" as any);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.brandBlock}>
        <Text style={styles.appName}>Earth Guardian Quiz</Text>
        <Text style={styles.subtitle}>Learn. Level up. Save Earth.</Text>
      </View>

      <View style={styles.progressCard}>
        <View style={styles.progressRow}>
          <View style={styles.labelWithIcon}>
            <MaterialCommunityIcons name="fire" size={16} color="#B3C7E6" />
            <Text style={styles.progressLabel}>Streak</Text>
          </View>
          <Text style={styles.progressValue}>{streak}</Text>
        </View>

        <View style={styles.progressRow}>
          <View style={styles.labelWithIcon}>
            <MaterialCommunityIcons name="diamond-stone" size={16} color="#B3C7E6" />
            <Text style={styles.progressLabel}>Total XP</Text>
          </View>
          <Text style={styles.progressValue}>{totalXP}</Text>
        </View>

        <View style={styles.goalHint}>
          <View style={styles.labelWithIcon}>
            <MaterialCommunityIcons name="target" size={14} color="#93C5FD" />
            <Text style={styles.goalHintText}>Daily goal coming next</Text>
          </View>
        </View>
      </View>

      <Pressable style={styles.primaryButton} onPress={onContinue}>
        <View style={styles.buttonContent}>
          <MaterialCommunityIcons name="rocket-launch" size={18} color="#E5F3FF" />
          <Text style={styles.primaryText}>
            {lastLesson ? "Continue where you left off" : "Start learning"}
          </Text>
        </View>
      </Pressable>

      <Pressable style={styles.secondaryButton} onPress={() => router.push("/topics" as any)}>
        <View style={styles.buttonContent}>
          <MaterialCommunityIcons name="book-open-page-variant" size={18} color="#BFDBFE" />
          <Text style={styles.secondaryText}>Choose a topic</Text>
        </View>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050816",
    paddingHorizontal: 24,
    paddingTop: 70,
  },
  scrollContent: {
    paddingBottom: 40,
  },

  brandBlock: {
    marginBottom: 18,
  },
  appName: {
    color: "#E5F3FF",
    fontSize: 28,
    fontWeight: "900",
    marginBottom: 6,
  },
  subtitle: {
    color: "#B3C7E6",
    fontSize: 14,
    fontWeight: "700",
  },

  progressCard: {
    backgroundColor: "#111827",
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: "#1F2A44",
    marginBottom: 18,
  },
  progressRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  labelWithIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  progressLabel: {
    color: "#B3C7E6",
    fontSize: 14,
    fontWeight: "800",
    marginLeft: 6,
  },
  progressValue: {
    color: "#E5F3FF",
    fontSize: 16,
    fontWeight: "900",
  },
  goalHint: {
    marginTop: 10,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#1F2A44",
  },
  goalHintText: {
    color: "#93C5FD",
    fontSize: 13,
    fontWeight: "800",
    marginLeft: 6,
  },

  primaryButton: {
    backgroundColor: "#2563EB",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  primaryText: {
    color: "#E5F3FF",
    fontSize: 16,
    fontWeight: "900",
    marginLeft: 8,
  },

  secondaryButton: {
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#3B82F6",
  },
  secondaryText: {
    color: "#BFDBFE",
    fontSize: 15,
    fontWeight: "900",
    marginLeft: 8,
  },

  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});