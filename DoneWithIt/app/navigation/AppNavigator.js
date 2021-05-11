import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingEditScreen from "../screens/ListingEditScreen";
import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import NewListingButton from "./NewListingButton";
import routes from "./routes";
import useNotifications from "../hooks/useNotifications";
import navigation from "./rootNavigation";

// TAB NAVIGATOR IN THIS FILE HAS FEEDNAVIGATOR!

// WE WANNA IMPLEMENT NOTIFICATIONS IN APP NAVIAGATOR WHICH IS THE APP, NOT THE AUTH NAVIGATOR WHICH IS THE SIGN IN AND STUFFS!

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  // useNotifications(navigation.navigate("Account")); // I messed this up!

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ListingEdit"
        component={ListingEditScreen}
        // set options to object or function that returns an object (please wrap with parantheses) >>>
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.LISTING_EDIT)}
            />
          ),
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons
          //     name="plus-circle"
          //     color={color}
          //     size={size}
          //   />
          // ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
