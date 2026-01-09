import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { CATALOG } from "../data/catalog";


export default function TopicsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a Topic</Text>

      {CATALOG.map((topic) => (
  <Pressable
    key={topic.id}
    style={[styles.topicButton, { borderLeftColor: topic.color }]}
    onPress={() => router.push(`/topic/${topic.id}`)}
  >
    <View style={styles.topicRow}>
      <Text style={styles.emoji}>{topic.emoji}</Text>
      <View style={styles.textBlock}>
        <Text style={styles.topicText}>{topic.title}</Text>
        <Text style={styles.topicDescription}>{topic.description}</Text>
      </View>
    </View>
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
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#E5F3FF",
    marginBottom: 24,
    textAlign: "center",
  },
  topicButton: {
    backgroundColor: "#1F2937",
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    borderLeftWidth: 4,
  },
  topicText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#E5F3FF",
  },
  topicDescription: {
    marginTop: 4,
    fontSize: 14,
    color: "#B3C7E6",
  },
  topicRow: {
  flexDirection: "row",
  alignItems: "center",
},
emoji: {
  fontSize: 28,
  marginRight: 12,
},
textBlock: {
  flex: 1,
},
});
