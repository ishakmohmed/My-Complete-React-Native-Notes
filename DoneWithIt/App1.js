import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import AppText from "./app/components/AppText/AppText"; 
// in this project, we've got AppText.android.js and AppText.ios.js
// import AppText only and React Native will import the right implementation

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AppText>My name is Mohmed Ishak!</AppText>
      <MaterialIcons name="email" size={24} color="black" />
    </View>
  );
}
