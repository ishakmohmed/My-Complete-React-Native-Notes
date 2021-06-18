import React from "react";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import { View, Text } from "react-native";

export default function App() {
  // NetInfo.fetch().then((netInfo) => console.log(netInfo));

  //   Object {
  //   "details": Object {
  //     "bssid": "02:00:00:00:00:00",
  //     "frequency": 2412,
  //     "ipAddress": "192.168.1.31",
  //     "isConnectionExpensive": false,
  //     "strength": 99,
  //     "subnet": "255.255.255.255",
  //   },
  //   "isConnected": true,
  //   "isInternetReachable": true, // rely on this instead of isConnected
  //   "isWifiEnabled": true,
  //   "type": "wifi",
  // }

  const unsubscribe = NetInfo.addEventListener(
    (netInfo) => console.log(netInfo) 
  );

  const netInfo = useNetInfo(); 

  netInfo.isInternetReachable;
  netInfo.isConnected;
  netInfo.isWifiEnabled;
  netInfo.details;

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}
