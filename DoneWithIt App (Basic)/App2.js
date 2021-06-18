import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
  Image,
  SafeAreaView,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("Pressed!");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Super long text...
      </Text>
      <Image source={require("./assets/favicon.png")} />
      {/* <TouchableWithoutFeedback
        onPress={() => console.log("Image has been pressed!")}
        onLongPress={() => console.log("Long pressed image!")}
      >
        <Image
          fadeDuration={1000}
          blurRadius={2}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableWithoutFeedback> */}

      {/* <TouchableOpacity
        onPress={() => console.log("Image has been pressed!")}
        onLongPress={() => console.log("Long pressed image!")}
      >
        <Image
          fadeDuration={1000}
          blurRadius={2}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableOpacity> */}

      {/* <TouchableHighlight
        onPress={() => console.log("Image has been pressed!")}
        onLongPress={() => console.log("Long pressed image!")}
      >
        <Image
          fadeDuration={1000}
          blurRadius={2}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight> */}

      {/* Android only */}

      {/* <TouchableNativeFeedback
        onPress={() =>
          console.log("LOL!")
        }
        background={TouchableNativeFeedback.Ripple("yellow")}
      >
        <View
          style={{ width: 300, height: 300, backgroundColor: "black" }}
        ></View>
      </TouchableNativeFeedback> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
