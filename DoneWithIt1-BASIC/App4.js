// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView, View, Dimensions } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
// ^^ useDimensions will give you the correct dimensions in portrait and landscape mode!

export default function App() {
  // console.log(Dimensions.get("screen")); // Dimensions API - BUT ONLY FOR PORTRAIT
  // console.log(Dimensions.get("window")); // Dimension API - BUT ONLY FOR PORTRAIT
  const x = useDimensions(); // displays dimensions for both portrait and landscape, for some reason, it doesn't work when i useDimensions() inside console.log();
  console.log(x);
  console.log(useDeviceOrientation()); // another hook!

  // ********************************************************
  const { landscape } = useDeviceOrientation(); // landscape/portrait

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "yellow",
          // width: 150,
          // height: 70,
          // ^ these two are density independent pixels (DIP)
          width: "100%",
          height: landscape ? "100%" : "30%",
        }}
      ></View>
    </SafeAreaView>
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
