import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    {/* ^ can add prop called mode = card or modal */}
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Screen
      name="ListingDetails"
      component={ListingDetailsScreen}
      // options={{ headerShown: false }} // if i uncomment, supposedly you should have pull to refresh (IF YOU USE mode=modal PROP) but I don't see it!
    />
  </Stack.Navigator>
);

export default FeedNavigator;
