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
        flexWrap: "wrap", // when we use flexWrap, the alignItems property behaves differently - when you have multiple lines, alignItems align the items within each line - to "fix", use align-content!
        alignContent: "center", // alignment of the entire content, BUT ALIGNCONTENT WILL ONLY WORK IF WE'VE GOT WWWRRAAAPPPIINNNGGG, otherwise it has got no effect!
      }}
    >
      <View
        style={{
          backgroundColor: "yellow",
          width: 100,
          height: 100,
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
      <View
        style={{
          backgroundColor: "gray",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "greenyellow",
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
