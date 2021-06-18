import React from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const demo = async () => {
    try {
      await AsyncStorage.setItem("person", JSON.stringify({ id: 1 })); 
      const value = await AsyncStorage.getItem("person");
      const person = JSON.parse(value); 
      console.log(person);
    } catch (error) {
      console.log(error);
    }
  };

  demo();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>My name is Mohmed Ishak!</Text>
    </View>
  );
}