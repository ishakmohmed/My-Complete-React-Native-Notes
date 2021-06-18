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
        flexWrap: "wrap",
        alignContent: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "yellow",
          flexBasis: 100, 
          flexGrow: 1, 
          width: 100,
          height: 100,
          flexShrink: 1, 
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
