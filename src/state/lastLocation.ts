import { ART_CURRICULUM_VERSION } from "../../data/artCurriculum";
// src/state/lastLocation.ts
import AsyncStorage from "@react-native-async-storage/async-storage";

export type LastLocation = {
  curriculumVersion?: string;
  topicId: string;
  subtopicId: string;
  levelId: string;
  partId: string;
};

const KEY = "lastLocation:v1";

export async function saveLastLocation(loc: LastLocation) {
  await AsyncStorage.setItem(KEY, JSON.stringify(loc.topicId === "art" ? { ...loc, curriculumVersion: ART_CURRICULUM_VERSION } : loc));
}

export async function loadLastLocation(): Promise<LastLocation | null> {
  const raw = await AsyncStorage.getItem(KEY);
  if (!raw) return null;
  try {
    const location: LastLocation = JSON.parse(raw);
    return location.topicId === "art" && location.curriculumVersion !== ART_CURRICULUM_VERSION ? null : location;
  } catch {
    return null;
  }
}