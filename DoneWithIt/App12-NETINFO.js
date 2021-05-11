// Let's practice offline support >>>

import React from "react";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import { View, Text } from "react-native";

export default function App() {
  // NetInfo.fetch().then((netInfo) => console.log(netInfo));

  // Output of ^ that is >>>

  //   Object {
  //   "details": Object {
  //     "bssid": "02:00:00:00:00:00",
  //     "frequency": 2412,
  //     "ipAddress": "192.168.1.31",
  //     "isConnectionExpensive": false,
  //     "strength": 99,
  //     "subnet": "255.255.255.255",
  //   },
  //   "isConnected": true,      <<< don't rely on this
  //   "isInternetReachable": true,      <<< rather rely on this
  //   "isWifiEnabled": true,
  //   "type": "wifi",
  // }

  // WITH FETCH METHOD WE CAN GET INFO ABOUT NETWORK CONNECTION ONLY ONCE, SO >>>
  // with addEventListener, we can subscribe to network status changes >>>

  const unsubscribe = NetInfo.addEventListener(
    (netInfo) => console.log(netInfo) // this method returns a function
  ); // you needa unsubscribe so it doesn't run on and on, in class components we'd unsubscribe in componentWillUnmount(), here we'll use useNetInfo() hook >>>

  const netInfo = useNetInfo(); // all the subscribing and unsubscribing happens under the hood, which means we don't need the unsubsribe function returned from addEventListener() function!

  netInfo.isInternetReachable;
  netInfo.isConnected;
  netInfo.isWifiEnabled;
  netInfo.details;

  // ^^^ these are stuffs in netInfo object, so here is a suggestion on the things you can do with them >>>

  // <Button disabled={!netInfo.isInternetReachable} />;

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}
