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
          top: 50, // relative positioning (default) => from top right now (not from status bar necessarily) 50px!
          position: "absolute", // self-explanatory, BUT THE KEY THING IS THAT OTHER BOXES WILL MOVE AS A RESULT OF THIS (if only the position was relative- the other boxes will stay exactly at the same place)
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
