// LET'S LEARN ASYNC STORAGE >>>

import React from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const demo = async () => {
    try {
      // try catch is super important in AsyncStorage because... you get it!
      await AsyncStorage.setItem("person", JSON.stringify({ id: 1 })); // needa serialize or I guess just pass a string
      const value = await AsyncStorage.getItem("person");
      const person = JSON.parse(value); // needa parse
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

// note: this didn't work for me but here's the notes. In react native debugger, you can >>>
// showAsyncStorageContentInDev() to see the content of async storage, and you can >>>
// $reactNative.WHATEVERREACTNATIVEAPI for example - $reactNative.AsyncStorage.clear()
