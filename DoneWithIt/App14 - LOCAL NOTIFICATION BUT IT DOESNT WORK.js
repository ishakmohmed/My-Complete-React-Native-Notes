import React from "react";
import { View } from "react-native";
import Button from "./app/components/Button";
import * as Notifications from "expo-notifications";

export default function App() {
  const showNotification = () => {
    Notifications.presentLocalNotificationsAsync({
      title: "The title ahahah",
      body: "ok this is the body ahaha",
      data: {
        _displayInForeground: true,
      },
    });
  };

  Notifications.scheduleLocalNotificationsAsync(
    {
      title: "Congratulations",
      body: "Your order was successfully placed!",
    },
    {
      time: new Date().getTime() + 2000,
    }
  );

  // NEITHER ^ THOSE TWO (mosh) OR THIS > WORKS!

  async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "You've got mail!",
        body: "Here is the notification body",
        data: { data: "goes here" },
      },
      trigger: { seconds: 2 },
    });
  }

  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Button
        title="Tap me for notification"
        onPress={() => showNotification()}
      />
    </View>
  );
}
