import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";

function WelcomeScreen() {
  return (
    <View
      style={{
        flex: 1, // to display background, parent must have flex: 1
      }}
    >
      <ImageBackground
        style={styles.background}
        source={require("../assets/background.jpg")}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/logo-red.png")}
          />
          <Text>Sell What You Don't Need</Text>
        </View>
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center", // align-items: align-items according to secondary axis!
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
});

export default WelcomeScreen;