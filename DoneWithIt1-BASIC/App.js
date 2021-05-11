// import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import AppText from "./app/components/AppText"; // my custom component
// ^^^ but now I have AppText.android.js and AppText.ios.js, but I just needa import AppText and depending on the platform, RN will automatically import the right implementation!

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AppText>My name is Mohmed Ishak</AppText>
      <MaterialIcons name="email" size={24} color="black" />
    </View>
  );
}
