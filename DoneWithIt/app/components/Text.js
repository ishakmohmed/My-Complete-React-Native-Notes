import React from "react";
import { Text } from "react-native";

import defaultStyles from "../config/styles";

// THIS IS MY CUSTOM COMPONENT!

function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

// const styles = StyleSheet.create({
//   // text: {
//   //   fontSize: 18,
//   //   fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
//   //   fontWeight: "bold",
//   //   color: "red",
//   // },
//   // INSTEAD OF THIS ^^^, >>>>>>>>>>>>>>>>>>>>>>>>>>
//   // text: {
//   //   color: "black",
//   //   ...Platform.select({
//   //     // if you don't want code duplication in StyleSheet!
//   //     ios: {
//   //       fontSize: 20,
//   //       fontFamily: "Avenir",
//   //     },
//   //     android: {
//   //       fontSize: 18,
//   //       fontFamily: "Roboto",
//   //     },
//   //   }),
//   // },
// });

export default AppText;
