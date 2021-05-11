import React from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import Text from "../components/Text";

import { Image } from "react-native-expo-image-cache"; // here, I'm also using Image component from react-native-expo-image-cache (remember to expo install expo-blur as well)

import ListItem from "./../components/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <View>
        <Image
          style={styles.image}
          preview={{ uri: listing.images[0].thumbnailUrl }}
          uri={listing.images[0].url}
          tint="light"
        />
        {/* ^ THIS IS NOT IMAGE COMPONENT FROM REACT-NATIVE */}
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{listing.title}</Text>
          <Text style={styles.price}>RM {listing.price}</Text>
          <View style={styles.userContainer}>
            <ListItem
              image={require("../assets/mosh.jpg")}
              title="Mosh Hamedani"
              subTitle="5 listings"
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
