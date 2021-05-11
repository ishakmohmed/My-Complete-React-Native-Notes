// import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          // borderWidth: 10,
          // borderColor: "#ff0000",
          // borderRadius: 10,
          // borderRightWidth: 50,
          // borderTopLeftRadius: 30,
          // borderRadius: 50,

          // SHADOWS FOR IOS (need to pass at least these 3 properties) >>>
          // shadowColor: "grey",
          // shadowOffset: {
          //   width: 10,
          //   height: 10,
          // },
          // shadowOpacity: 1,
          // shadowRadius: 10    // <<<<< THIS IS OPTIONAL: MAKES SHADOW SOFTER!

          // SHADOWS FOR ANDROID (ONLY 1 PROPERTY) >>>
          // elevation: 20,

          // PADDING >
          // you've got padding, paddingTop, etc, PADDINGHORIZONTAL (LEFT AND RIGHT), PADDINGVERTICAL (TOP, BOTTOM)

          // MARGIN (YOU ALREADY KNOW THIS!)
        }}
      ></View>
    </View>
  );
}
