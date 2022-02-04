import { useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { workForASecond } from "../utils/heavyLoad";
import { styles } from "./styles";

export function Button() {
  const [isLoading, setIsLoading] = useState(false);

  //
  //
  //
  const handlePress = () => {
    setIsLoading(true);

    workForASecond().then(() => {
      setIsLoading(false);
    });
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={isLoading}
      style={styles.button}
    >
      {isLoading && <ActivityIndicator style={styles.loading} />}
      <Text>Regular button</Text>
    </TouchableOpacity>
  );
}
