import { useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { useDebugContext } from "../contexts/DebugContext";
import { workForASecond } from "../utils/heavyLoad";
import { styles } from "./styles";

export function Button() {
  //
  // we store the loading state as a react state
  //
  const [isLoading, setIsLoading] = useState(false);
  const { stop } = useDebugContext();

  //
  // whenever the user presses, the first thing is turn on the activity indicator
  // then once it is done, turn it back off
  //
  const handlePress = () => {
    setIsLoading(true);

    workForASecond().then(() => {
      setIsLoading(false);
      stop.value = true;
    });
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={isLoading}
      style={styles.button}
    >
      {isLoading && (
        <ActivityIndicator color={"black"} style={styles.loading} />
      )}
      <Text>Press me</Text>
    </TouchableOpacity>
  );
}
