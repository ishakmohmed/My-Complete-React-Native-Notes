import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";
import Button from "../components/Button";

import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1, // to display background, parent must have flex: 1
      }}
    >
      <ImageBackground
        blurRadius={2}
        style={styles.background}
        source={require("../assets/background.jpg")}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/logo-red.png")}
          />
          <Text style={styles.tagline}>Sell What You Don't Need</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Login"
            onPress={() => navigation.navigate(routes.LOGIN)}
          />
          <Button
            title="Register"
            color="secondary"
            onPress={() => navigation.navigate(routes.REGISTER)}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center", // align-items: align-items according to secondary axis
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
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
  tagline: {
    fontSize: 25,
    fontWeight: "bold",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
