import { useEffect, useState } from "react";
import { loadProgress } from "./progress";

export function useStreak() {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    loadProgress().then((p) => setStreak(p.streakCount));
  }, []);

  return streak;
}
