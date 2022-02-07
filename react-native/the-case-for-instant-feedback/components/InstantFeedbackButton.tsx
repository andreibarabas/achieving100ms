import { ActivityIndicator, Text } from "react-native";
import {
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { useDebugContext } from "../contexts/DebugContext";
import { workForASecond } from "../utils/heavyLoad";
import { usePressOpacityAnimation } from "../utils/usePressOpacityAnimation";
import { styles } from "./styles";

const AnimatedActivityIndicator =
  Animated.createAnimatedComponent(ActivityIndicator);

export function InstantFeedbackButton() {
  const { pressGestureHandler, animatedStyle } = usePressOpacityAnimation();
  const { stop } = useDebugContext();

  //
  // the key difference to the normal button is how we manage the loading state
  // for instant feedback, we should manage it on the UI thread
  //  as in fact it's a state of the feedback
  //
  const isLoading = useSharedValue(false);

  //
  // we don't need to set isLoading true as it is set on the UI thread
  // imediatelly as the button is released
  //
  const handlePress = () => {
    workForASecond().then(() => {
      isLoading.value = false;
      stop.value = true;
    });
  };

  //
  // executes on the UI thread imediatelly, without waiting for a round trip
  // to the JS land just to show the activity indicator
  //
  const gestureHandler =
    useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
      ...pressGestureHandler,
      onEnd: () => {
        //protect against double taps
        //equivalent to setting disabled={true} in the normal button code
        if (!isLoading.value) {
          // equivalent to setting setIsLoading={true} in the normal button code
          isLoading.value = true;
          runOnJS(handlePress)();
        }
      },
    });

  //
  // we show / hide the activity indicator by changing it's opacity
  //
  const animatedLoadingStyle = useAnimatedStyle(() => ({
    opacity: isLoading.value ? 1 : 0,
    display: isLoading.value ? "flex" : "none", //requires so that it does not take up space when there is no loading indicator
  }));

  return (
    <TapGestureHandler
      onGestureEvent={gestureHandler}
      maxDurationMs={10000}
      shouldCancelWhenOutside={true}
      hitSlop={20}
    >
      <Animated.View style={[styles.button, animatedStyle]}>
        <AnimatedActivityIndicator
          color={"black"}
          style={[styles.loading, animatedLoadingStyle]}
        />
        <Text>Press me</Text>
      </Animated.View>
    </TapGestureHandler>
  );
}
