import { Image } from "expo-image";
import { useState, useRef, useEffect } from "react";
import { ActivityIndicator, StyleSheet, View, Text } from "react-native";
import type { QuizImage as QuizImageData } from "../../src/images/types";
import { QuizImageAttribution } from "./QuizImageAttribution";

// A keyed child resets state and rejects late callbacks from the previous image.
export function QuizImage(props: { image: QuizImageData; fallbackText?: string; onFailure?: () => void }) {
  return <ImageFrame key={`${props.image.imageId}:${props.image.uri}`} {...props} />;
}

function ImageFrame({ image, fallbackText, onFailure }: { image: QuizImageData; fallbackText?: string; onFailure?: () => void }) {
  const mounted = useRef(true);
  useEffect(() => { mounted.current = true; return () => { mounted.current = false; }; }, []);
  const [width, setWidth] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  if (failed) return fallbackText ? <Text style={{ color: "#E5F3FF", marginVertical: 12 }}>{fallbackText}</Text> : null;
  const height = width > 0 ? Math.min(300, Math.max(100, width * image.height / image.width)) : 180;
  return (
    <View style={styles.container} onLayout={event => setWidth(event.nativeEvent.layout.width)}>
      <View style={[styles.frame, { height }]}>
        <Image
          source={{ uri: image.uri }}
          style={StyleSheet.absoluteFill}
          contentFit="contain"
          cachePolicy="memory-disk"
          recyclingKey={`${image.imageId}:${image.uri}`}
          accessible
          accessibilityLabel={image.altText}
          onLoad={() => { if (mounted.current) setLoaded(true); }}
          onError={() => { if (!mounted.current) return; setFailed(true); if (!fallbackText) onFailure?.(); }}
        />
        {!loaded && <View pointerEvents="none" style={styles.loading}><ActivityIndicator color="#B3C7E6" /></View>}
      </View>
      {loaded && image.attribution && <QuizImageAttribution attribution={image.attribution} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: "100%", maxWidth: 640, alignSelf: "center", marginBottom: 16 },
  frame: { width: "100%", backgroundColor: "#0B1220", borderRadius: 12, overflow: "hidden" },
  loading: { ...StyleSheet.absoluteFillObject, alignItems: "center", justifyContent: "center" },
});
