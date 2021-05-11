// import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Alert,
  Button,
  Platform,
  StatusBar,
} from "react-native";

// NOTE: SAFEAREAVIEW ONLY WORKS FOR IOS!

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* ^ inside {} of style, you can also pass array of style! */}
      <Button
        color="green"
        title="Click me"
        // onPress={() => alert("BUTTON TAPPED!")}
        // ^ basic alert()

        // a more complicated alert (import Alert) >>>
        onPress={() =>
          Alert.alert("My TITLE", "MY MESSAGE", [
            {
              text: "Cancel",
              // every button can also have a style key!
              onPress: () => console.log("CANCEL PRESSED!"),
            },
            {
              text: "OKKKKKKKKKKKKK",
              onPress: () => console.log("OKKK PRESSED"),
            },
          ])
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // ^^ this StatusBar is imported from react-native above, not from expo-status-bar!
    // alignItems: "center",
    // justifyContent: "center",
  },
});
