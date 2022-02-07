import React from "react";
import { StyleSheet } from "react-native";
import {
  cancelAnimation,
  Easing,
  useAnimatedReaction,
  useDerivedValue,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { ReText } from "react-native-redash";
import { useDebugContext } from "../contexts/DebugContext";

/**
 * Timer that starts when the user presses a button, to be able to track how much time it takes to receive the feedback
 */
export const Timer: React.FC = () => {
  const { start, stop } = useDebugContext();
  const durationMs = useSharedValue(0);

  useAnimatedReaction(
    () => start.value && stop.value,
    () => {
      if (start.value && !stop.value) {
        //start a timer for 10 seconds
        durationMs.value = withSequence(
          withTiming(0, { duration: 0 }), //get to 0 instantly
          withTiming(10000, {
            duration: 10000,
            easing: Easing.linear,
          })
        );
      } else if (stop.value) {
        cancelAnimation(durationMs);
        start.value = false;
        stop.value = false;
      }
    },
    [start, stop]
  );

  const formattedDuration = useDerivedValue(() => {
    return `${durationMs.value.toFixed(0)} ms`;
  });

  return <ReText text={formattedDuration} style={styles.timer}></ReText>;
};

const styles = StyleSheet.create({
  timer: {
    margin: 16,
  },
});
