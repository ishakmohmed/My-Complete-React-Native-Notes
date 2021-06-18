import React, { useState } from "react";
import AppTextInput from "./app/components/TextInput";
import Screen from "./app/components/Screen";

export default function App() {
  return (
    <Screen>
      <AppTextInput placeholder="Username" icon="email" />
    </Screen>
  );
}
