import Animated, {
  runOnUI,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import React from "react";
import { View } from "react-native";

export default function FpsCounter() {
  const [state, setState] = React.useState(false);

  const x = useSharedValue(0);

  React.useEffect(() => {
    runOnUI(() => {
      "worklet";
      global.frameTimestamps = [];
    })();
    x.value = withSpring(state ? 360 : 0);
  }, [state]);

  const handlePress = () => {
    setState((state) => !state);
  };

  const styles = useAnimatedStyle(() => {
    //@ts-expect-error
    if (_WORKLET) {
      //@ts-expect-error
      const now = _frameTimestamp;
      global.frameTimestamps.push(now);
      if (global.frameTimestamps.length >= 20) {
        const first = global.frameTimestamps.shift();
        const fps = (1000 / (now - first)) * global.frameTimestamps.length;
        //       console.log(`${fps.toFixed(3)} fps`);
      }
    }

    return {
      transform: [{ rotate: `${x.value}deg` }],
    };
  });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Animated.View
        style={[{ width: 200, height: 200, backgroundColor: "red" }, styles]}
        onTouchStart={handlePress}
      />
    </View>
  );
}
