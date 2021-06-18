import React, { useEffect } from "react";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import expoPushTokensApi from "../api/expoPushTokens";

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotification();

    if (notificationListener)
      Notifications.addPushTokenListener(notification => notificationListener);
  }, []);

  const registerForPushNotification = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const token = (await Notifications.getExpoPushTokenAsync()).data; 
      expoPushTokensApi.register(token); 
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };
};
