// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { TextInput } from "react-native";
import Screen from "./app/components/Screen";

export default function App() {
  const [firstName, setFirstName] = useState("");

  return (
    <Screen>
      <TextInput
        // clearButtonMode="always" // on works on iOS
        secureTextEntry // means you can capture password
        maxLength={3}
        keyboardType="numeric"
        onChange={(text) => setFirstName(text)}
        placeholder="First Name"
        style={{
          marginTop: 50,
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
        }}
      />
    </Screen>
  );
}
