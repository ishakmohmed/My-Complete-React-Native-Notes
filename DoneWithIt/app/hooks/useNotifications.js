// import React, { useEffect } from "react";
// import * as Notifications from "expo-notifications";
// import * as Permissions from "expo-permissions";
// import expoPushTokensApi from "../api/expoPushTokens";

// export default useNotifications = (notificationListener) => {
//   useEffect(() => {
//     registerForPushNotification();

//     // we're gonna register a listener that will be called everytime the user taps on the notification!

//     // I'm gonna comment this code out cause I moved the function inside addPushTokenListener to the parameter!

//     // Notifications.addPushTokenListener((notification) => {
//     //   console.log("The notification is" + JSON.stringify(notification));
//     //   // in this component we don't have access to navigation prop, and we can't use useNavigation() hook either cause we'll get runtime error, so needa do something crazy to navigate the user to different screen >>>
//     //   navigation.navigate("Account");
//     // });
//     // mosh wrote addListener, but I figured out from the docs that it is addPushTokenListener! HERE IS THE NOTIFICATION >>>
//     // {"data":"fbURkS-kTKuPqE_QfzlHXe:APA91bFgzRcVpMXQ7hCDgYaNvymJu4oLn68uqw1Dpe8TF9TijskO0ZV8Cr1nxZr_Ac5eT7FXOT5VdOZWYWCYuBg9xV-bck85hkZ1U-dtI75DXV6UexvGZxdmM3g7MMle6ge-FvQhHf0d","type":"android"}

//     if (notificationListener)
//       Notifications.addPushTokenListener(notification => notificationListener);
//   }, []);

//   const registerForPushNotification = async () => {
//     try {
//       const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
//       if (!permission.granted) return;

//       const token = (await Notifications.getExpoPushTokenAsync()).data; // this token is a long string that uniquely identifies each app installed!
//       expoPushTokensApi.register(token); // token is >>>>>>>>>>>>>>>>>>>>>>>> ExponentPushToken[cFpe6fKcC9qR11zUgekqwJ];

//       // BY THE WAY, THIS IS THE TOKEN.DATA >>>
//       // Object {
//       //   "data": "ExponentPushToken[cFpe6fKcC9qR11zUgekqwJ]",
//       //   "type": "expo",
//       // }
//     } catch (error) {
//       console.log("Error getting a push token", error);
//     }
//   };
// };
