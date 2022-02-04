import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import {
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
} from "react-native-reanimated";
import { Timer } from "./Timer";

export const DebugView: React.FC<{ title: string }> = (props) => {
  const { title } = props;

  const start = useSharedValue(0);

  const gestureHandler =
    useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
      onStart: () => {
        start.value = Date.now();
      },
    });

  return (
    <TapGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {props.children}
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
