import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
// so basically depending on the authentication status of user, we'll render AuthNavigator or AppNavigator
import AppLoading from "expo-app-loading"; // this package is for the splash screen!

import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import { navigationRef } from "./app/navigation/rootNavigation"; // and the connect it to NavigationContainer below

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  // useEffect(() => {
  //   restoreToken();
  // }, []);

  // ^ actually i should restoreToken() (now renamed to restoreUser and reimplemented) in useEffect, but since im using AppLoading component below, I'm calling restoreToken() in the startAsync prop

  const restoreUser = async () => {
    const user = await authStorage.getUser(); // internally it will get the token and then decode the payload to user object!

    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading
        // btw the image is in app.json under splash property
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={() => console.log("Ouch, something is definitely wrong!")}
        // ^ if you set startAsync, needa set onError!
      />
    );

  return (
    // we'll get the stuffs provided in AuthContext in login screen >>>
    <AuthContext.Provider value={{ user, setUser }}>
      {/* ^ every component below this will be able to read the user, but not change the user */}
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {/* ^ ref=navigationRef to navigate user to some screen upon receiving a notification. Related files are rootNavigation.js and AppNavigator.js */}
        {user ? <AppNavigator /> : <AuthNavigator />}
        {/* ^ we wanna get a notification token only when the user is logged in, so go ahead to AppNavigator and check out the notification implementation */}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
