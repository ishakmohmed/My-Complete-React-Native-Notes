import React from "react";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        // flexDirection: "row-reverse",
        // flexDirection: "column-reverse",
        justifyContent: "center",
        justifyContent: "flex-end",
        justifyContent: "space-evenly", // other: space-between, space-around
        alignItems: "center",
        alignItems: "baseline",
        alignItems: "stretch",
      }}
    >
      <View
        style={{
          backgroundColor: "yellow",
          width: 100,
          height: 100,
          alignSelf: "flex-end", // alignSelf: only for this view
        }}
      />
      <View
        style={{
          backgroundColor: "blue",
          width: 100,
          height: 300,
        }}
      />
      <View
        style={{
          backgroundColor: "green",
          width: 100,
          height: 200,
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
