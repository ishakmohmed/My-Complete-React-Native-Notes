// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Switch } from "react-native";

import Screen from "./app/components/Screen";
import AppPicker from "./app/components/Picker";
import AppTextInput from "./app/components/TextInput";

const categories = [
  // data for picker
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState();

  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Category"
      />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}
