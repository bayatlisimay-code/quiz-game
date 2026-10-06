import { Linking, Pressable, StyleSheet, Text, View } from "react-native";
import type { ImageAttribution } from "../../src/images/types";

export function QuizImageAttribution({ attribution }: { attribution: ImageAttribution }) {
  const openLink = (uri: string) => {
    if (/^https?:\/\//i.test(uri)) void Linking.openURL(uri).catch(() => undefined);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{[attribution.title, attribution.creator].filter(Boolean).join(" — ")}</Text>
      <Pressable accessibilityRole="link" onPress={() => openLink(attribution.sourceUrl)}>
        <Text style={styles.link}>{attribution.source}</Text>
      </Pressable>
      <Pressable accessibilityRole="link" onPress={() => openLink(attribution.licenseUrl)}>
        <Text style={styles.link}>{attribution.licenseLabel}</Text>
      </Pressable>
      <Text style={styles.text}>Changes: {attribution.changes}</Text>
      {attribution.requiredNotices?.map((notice, index) => <Text key={index} style={styles.text}>{notice}</Text>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 6 },
  text: { color: "#B3C7E6", fontSize: 12 },
  link: { color: "#BFDBFE", fontSize: 12, textDecorationLine: "underline", paddingVertical: 4 },
});
