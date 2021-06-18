import React from "react";
import { StyleSheet, SafeAreaView, View, Dimensions } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
// useDimensions will give you the correct dimensions in portrait and landscape mode!

export default function App() {
  // console.log(Dimensions.get("screen")); // Dimensions API (portrait only)
  // console.log(Dimensions.get("window")); // Dimension API (portrait only)
  const x = useDimensions();
  console.log(useDeviceOrientation());
  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "yellow",
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
