import { StatusBar } from "expo-status-bar";
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
        justifyContent: "center", // justifyContent > main axis - in this case horizontal
        justifyContent: "flex-end", // there's flex-start (default) too
        justifyContent: "space-evenly", // other: space-between, space-around
        alignItems: "center", // align-items > secondary axis
        alignItems: "baseline",
        alignItems: "stretch",
      }}
    >
      <View
        style={{
          backgroundColor: "yellow",
          width: 100,
          height: 100,
          alignSelf: "flex-end", // ALIGNSELF : ONLY FOR THIS VIEW
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
