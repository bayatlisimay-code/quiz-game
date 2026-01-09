import { Link } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Earth Guardian Quiz</Text>

      <Text style={styles.subtitle}>
        General knowledge adventures in Science, Art, History, Philosophy and Sports.
      </Text>

      {/* Quick Quiz later */}
      <Pressable style={[styles.button, styles.buttonDisabled]} disabled>
        <Text style={styles.buttonText}>Start Quick Quiz (Soon)</Text>
      </Pressable>

      <Link href="/topics" asChild>
        <Pressable style={[styles.button, styles.secondaryButtonHome]}>
          <Text style={styles.buttonText}>Choose Topic</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050816",
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 24,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#E5F3FF",
    textAlign: "center",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: "#9CA3AF",
    textAlign: "center",
    marginBottom: 32,
  },
  button: {
    backgroundColor: "#3B82F6",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  buttonDisabled: { opacity: 0.5 },
  secondaryButtonHome: { backgroundColor: "#10B981" },
  buttonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "600" },
});
