import AsyncStorage from "@react-native-async-storage/async-storage";

const LAST_LESSON_KEY = "last_lesson_path";

/**
 * Example path:
 * /topic/history/subtopic/prehistory/level/1/1?set=...
 */
export async function saveLastLessonPath(path: string) {
  try {
    await AsyncStorage.setItem(LAST_LESSON_KEY, path);
  } catch (e) {
    console.log("saveLastLessonPath error", e);
  }
}

export async function getLastLessonPath(): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(LAST_LESSON_KEY);
  } catch (e) {
    console.log("getLastLessonPath error", e);
    return null;
  }
}

export async function clearLastLessonPath() {
  try {
    await AsyncStorage.removeItem(LAST_LESSON_KEY);
  } catch (e) {
    console.log("clearLastLessonPath error", e);
  }
}
