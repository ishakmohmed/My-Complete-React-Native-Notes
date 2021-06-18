import React from "react";
import { View, Text } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontFamily: "Roboto",
          fontStyle: "italic",
          fontWeight: "600",
          color: "tomato",
          textTransform: "capitalize",
          textDecorationLine: "underline line-through", 
          textAlign: "center", 
          fontSize: 30,
          lineHeight: 50,
        }}
      >
        I love React Native! This is my first RN APP! HERES SOME MORE TEXT,
        HELLO WORLD!
      </Text>
    </View>
  );
}