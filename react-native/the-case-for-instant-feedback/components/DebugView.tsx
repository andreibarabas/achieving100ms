import React, { ReactComponentElement, useState } from "react";
import { Text, StyleSheet } from "react-native";
import {
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
} from "react-native-reanimated";
import { DebugContext } from "../contexts/DebugContext";
import { Timer } from "./Timer";

export const DebugView: React.FC<{ title: string }> = (props) => {
  const { title } = props;

  const start = useSharedValue(false);
  const stop = useSharedValue(false);

  const gestureHandler =
    useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
      onStart: () => {
        start.value = true;
      },
    });

  return (
    <TapGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <DebugContext.Provider value={{ start, stop }}>
          {props.children}
          <Timer />
        </DebugContext.Provider>
      </Animated.View>
    </TapGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    marginBottom: 20,
  },
});
