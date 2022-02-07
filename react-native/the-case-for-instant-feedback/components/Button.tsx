import { useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { useDebugContext } from "../contexts/DebugContext";
import { workForASecond } from "../utils/heavyLoad";
import { styles } from "./styles";

export function Button() {
  const [isLoading, setIsLoading] = useState(false);
  const { stop } = useDebugContext();

  //
  //
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
