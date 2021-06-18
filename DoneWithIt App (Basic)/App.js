import React from "react";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import AppText from "./app/components/AppText"; 
// I have AppText.android.js and AppText.ios.js, but I just need to import AppText and depending on the platform, React Native will automatically import the right implementation!

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AppText>My name is Mohmed Ishak</AppText>
      <MaterialIcons name="email" size={24} color="black" />
    </View>
  );
}
