import { TapGestureHandlerGestureEvent } from "react-native-gesture-handler";
import {
  Easing,
  GestureHandlers,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

/**
 * Build the touchable opacity counterpart
 */
export function usePressOpacityAnimation() {
  const isPressed = useSharedValue(false);

  // gesture handlers that make tap gesture handler behave as a button would
  const pressGestureHandler: GestureHandlers<
    TapGestureHandlerGestureEvent["nativeEvent"],
    {}
  > = {
    onStart: () => {
      "worklet";
      isPressed.value = true;
    },
    onFinish: () => {
      "worklet";
      isPressed.value = false;
    },
  };

  // animation styles taken from TouchableOpacity
  // https://github.com/facebook/react-native/blob/203a82e90a1c8cc209ae287e4e3eb4dcb34ab3f1/Libraries/Components/Touchable/TouchableOpacity.js#L187
  // to mimic the same behavior
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: isPressed.value
      ? withTiming(0.2, { duration: 150, easing: Easing.inOut(Easing.quad) })
      : withTiming(1, { duration: 250, easing: Easing.inOut(Easing.quad) }),
  }));

  return { isPressed, animatedStyle, pressGestureHandler };
}
