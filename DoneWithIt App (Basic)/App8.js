import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "yellow",
          width: 100,
          height: 100,
          top: 50,
          position: "absolute",
          // other boxes will move as a result of this
          // if position were relative, they wouldn't
        }}
      />
      <View
        style={{
          backgroundColor: "blue",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "red",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
