import { createContext, useContext } from "react";
import Animated from "react-native-reanimated";

export type DebugContextValue = {
  start?: Animated.SharedValue<boolean>;
  stop?: Animated.SharedValue<boolean>;
};

export const DebugContext = createContext<DebugContextValue>({});

export const useDebugContext = () => useContext(DebugContext);
