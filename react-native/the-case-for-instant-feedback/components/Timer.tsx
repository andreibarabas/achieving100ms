import React from "react";
import { StyleSheet } from "react-native";
import {
  Easing,
  SharedValue,
  useDerivedValue,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { ReText } from "react-native-redash";

/**
 * Timer that starts when the user presses a button, to be able to track how much time it takes to receive the feedback
 */
export const Timer: React.FC<{ start: SharedValue<number> }> = (props) => {
  const { start } = props;

  // reset now each time start is reset
  const durationMs = useDerivedValue(() => {
    if (start.value > 0) {
      //start a timer for 10 seconds
      return withSequence(
        withTiming(0, { duration: 0 }), //get to 0 instantly
        withTiming(10000, {
          duration: 10000,
          easing: Easing.linear,
        })
      );
    }

    return 0;
  });

  const formattedDuration = useDerivedValue(() => {
    const seconds = durationMs.value / 1000;

    return `${seconds.toFixed(1)} s`;
  });

  return <ReText text={formattedDuration} style={styles.timer}></ReText>;
};

const styles = StyleSheet.create({
  timer: {
    margin: 16,
  },
});
