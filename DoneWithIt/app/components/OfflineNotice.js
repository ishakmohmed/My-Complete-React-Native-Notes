import React from "react";
import {
  View as SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import Constants from "expo-constants"; // mosh used this but i used Platform.OS === ... just see below!
import { useNetInfo } from "@react-native-community/netinfo";

import Text from "./Text";
import colors from "../config/colors";

// Add this to App.js

function OfflineNotice(props) {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </SafeAreaView>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    height: 100,
    justifyContent: "center",
    // position: "absolute",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width: "100%",
    zIndex: 1,
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
