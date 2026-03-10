// src/state/lastLocation.ts
import AsyncStorage from "@react-native-async-storage/async-storage";

export type LastLocation = {
  topicId: string;
  subtopicId: string;
  levelId: string;
  partId: string;
};

const KEY = "lastLocation:v1";

export async function saveLastLocation(loc: LastLocation) {
  await AsyncStorage.setItem(KEY, JSON.stringify(loc));
}

export async function loadLastLocation(): Promise<LastLocation | null> {
  const raw = await AsyncStorage.getItem(KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as LastLocation;
  } catch {
    return null;
  }
}