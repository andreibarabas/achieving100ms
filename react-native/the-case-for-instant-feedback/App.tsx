import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "./components/Button";
import { DebugView } from "./components/DebugView";
import { InstantFeedbackButton } from "./components/InstantFeedbackButton";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <DebugView title="Status quo">
        <Button />
      </DebugView>

      <DebugView title="Instant feedback">
        <InstantFeedbackButton />
      </DebugView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
