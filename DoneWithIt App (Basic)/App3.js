import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Alert,
  Button,
  Platform,
  StatusBar,
} from "react-native";

// SafeArea works for iOS only

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        color="green"
        title="Click me"
        onPress={() =>
          Alert.alert("My TITLE", "MY MESSAGE", [
            {
              text: "Cancel",
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
  },
});
