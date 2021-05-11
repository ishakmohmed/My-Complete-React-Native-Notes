import React from "react";
import {
  View,
  StyleSheet,
  // Image,
  TouchableWithoutFeedback,
} from "react-native";

// INITIALLY I WAS USING IMAGE COMPONENT FROM REACT NATIVE, BUT NOW I AM USING IMAGE COMPONENT FROM react-native-expo-image-cache (BUT YOU NEED TO ALSO INSTALL > expo install expo-blur alongside with react-native-expo-image-cache and guess what this is not documented in the docs of this package!!!!!) >>>
import { Image } from "react-native-expo-image-cache";
// THIS COMPONENT HAS GOT A SLIGTLY DIFFERENT API THAN RN IMAGE, instead of source={{ uri: imageUrl }}, now > uri={imageUrl} ANDDDDD IT HAS MORE PROPS CHECK OUT THE IMAGE COMPONENT BELOW I WROTE SOME MORE PROPS

import Text from "./Text";
import colors from "../config/colors";

function Card({ title, subTitle, imageUrl, onPress, thumbnailUrl }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          tint="light"
          // ^ yeah this prop exists in Image component, BUTTTTTT I GUESS IMAGE COMPONENT IN REACT-NATIVE-EXPO-IMAGE-CACHE ONLY
          preview={{ uri: thumbnailUrl }}
          // ^ NOT SURE IF preview prop is only available in Image component in react-native-expo-image-cache OR normal react-native too but research when needed!
          uri={imageUrl}
          // ^ see, slightly different API compared to Image component from react-native!
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.subTitle} numberOfLines={2}>
            {subTitle}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
