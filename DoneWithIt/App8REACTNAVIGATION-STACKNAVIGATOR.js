import React, { useState } from "react";
import Screen from "./app/components/Screen";
import { Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const Link = () => {
  const navigation = useNavigation(); // because you can only get the navigation prop when you're a screen component, in this case you're not!

  return (
    <Button title="Click" onPress={() => navigation.navigate("TweetDetails")} />
  );
};

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="View Tweet"
      // .navigate's 2nd arg is optional (when you wanna access this object, destructure the route prop (IN ANY SCREEN COMPONENT) or use useRoute() (if you're a child component and not a screen component) and then access it like route.params.YOUROBJECTTHATYOUPASSLIKERIGHTHERE >>>
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
      // instead of .navigate, if you .push, you'll have multiple instances of the new screen!
    />

    {/* ^^^ that is the same with >>> */}

    {/* <Link /> */}
  </Screen>
);

const TweetDetails = ({ route }) => (
  // ^ if you're a screen component you automatically will get route (and navigation, (other stuffs?)) prop, otherwise just use the useRoute() hook
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      // applying globally >>>

      // supports the same properties that "options" has under Stack.Screen BASICALLY DEFAULT STYLES => OVERRIDE THESE PROPERTIES IN THE OPTIONS UNDER STACK.SCREEN
      title: "ALL TWEETS",
      headerStyle: { backgroundColor: "tomato" },
      headerTintColor: "white",
      // headerShown: false,
    }}
  >
    {/* inside Stack.Navigator - first tag - optionally pass initialRouteName="TweetDetails" to make it the first route, screenOptions is optional too */}
    <Stack.Screen
      name="Tweets"
      component={Tweets}
      options={{
        title: "ALL TWEETS",
        headerStyle: { backgroundColor: "tomato" },
        headerTintColor: "white",
        // headerShown: false,
      }}
    />

    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      // TWO WAYS TO CUSTOMIZE THE HEADER >>>

      // options={{
      //   title: "TWEET DETAILSSSSSSS",
      // }}
      // or to set title based on the 2nd optional object that you passed to .navigate >>>
      options={({ route }) => ({ title: route.params.id })}
      // ^ you get "route" and "prop" prop automatically here too (obj should be wrapped with parantheses)!
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
