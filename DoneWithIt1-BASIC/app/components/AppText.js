import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

// THIS IS MY CUSTOM COMPONENT!

function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  // text: {
  //   fontSize: 18,
  //   fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  //   fontWeight: "bold",
  //   color: "red",
  // },

  // INSTEAD OF THIS ^^^, >>>>>>>>>>>>>>>>>>>>>>>>>>

  text: {
    color: "tomato",
    ...Platform.select({
      // if you don't want code duplication in StyleSheet!
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
    }),
  },
});

export default AppText;
