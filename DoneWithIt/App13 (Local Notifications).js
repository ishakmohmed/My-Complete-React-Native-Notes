import React from "react";
import { View } from "react-native";
import Button from "./app/components/Button";
import * as Notifications from "expo-notifications";

export default function App() {
  const showNotification = () => {
    Notifications.presentLocalNotificationsAsync({
      title: "The title",
      body: "This is the body",
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

  async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "You've got mail!",
        body: "Here is the notification body",
        data: { data: "The data" },
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
