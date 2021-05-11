import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

export default function App() {
  const handlePress = () => console.log("TEXT HAS BEEN PRESSED!");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Super long text...
      </Text>
      <Image source={require("./assets/favicon.png")} />
      {/* ^ require() returns number- reference to image */}
      {/* NOTE: image has also loadingIndicatorSource prop- you know how it works! */}
      <Image
        fadeDuration={1000}
        blurRadius={2}
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300",
        }}
      />
      {/* ^ {}, width, and height for network img */}
      {/* NOTE: in IMAGE, by default fade duration is 300ms AND WORKS ONLY ON ANDROID */}

      {/* NOTE ^ there is also resizeMode prop in Image */}
      <StatusBar style="auto" />
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
