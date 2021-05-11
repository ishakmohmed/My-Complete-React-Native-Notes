import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  View,
} from "react-native";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
      {/* ^ adding view inside saefareaview and then it has a styling of padding 20 because safeareaview doesn't support horizontal padding (means space below and above a component) */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1, // please do this, so that the screen component takes the entire screen, and when you pull to refresh, you can swipe down from the very bottom of the screen, also the background color will take the entire screen!
  },
  view: {
    flex: 1,
  },
});

export default Screen;
