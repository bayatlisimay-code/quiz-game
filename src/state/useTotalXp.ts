import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { loadProgress } from "./progress";

export function useTotalXp() {
  const [totalXP, setTotalXP] = useState(0);

  useFocusEffect(
    useCallback(() => {
      let alive = true;

      (async () => {
        const p = await loadProgress();
        if (alive) setTotalXP(p.totalXP ?? 0);
      })();

      return () => {
        alive = false;
      };
    }, [])
  );

  return totalXP;
}
