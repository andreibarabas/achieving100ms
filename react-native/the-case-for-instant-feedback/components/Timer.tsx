import React from "react";
import {
  Easing,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { ReText } from "react-native-redash";

/**
 * Timer that starts when the user presses a button, to be able to track how much time it takes to receive the feedback
 */
export const Timer: React.FC = () => {
  const start = useSharedValue(Date.now());
  const now = useSharedValue(Date.now());

  React.useEffect(() => {
    now.value = withTiming(start.value + 10000, {
      duration: 10000,
      easing: Easing.linear,
    });
  }, []);

  const formattedDuration = useDerivedValue(() => {
    const durationMs = now.value - start.value;
    const seconds = durationMs / 1000;

    return `${seconds.toFixed(1)} s`;
  });

  return <ReText text={formattedDuration}></ReText>;
};
