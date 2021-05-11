import React from "react";
import { TouchableHighlight, View, StyleSheet, Image } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import AppText from "./Text";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      {/* ^ basically the actual renderRightActions can be a view - () => <View><View> */}
      <TouchableHighlight underlayColor="#00000010" onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {/* when you pass props, pass the image component (icon is implemented internally) ^ or pass an image like in line below */}
          {image && <Image source={image} style={styles.image}></Image>}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={25}
            color={colors.medium}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "bold",
  },
  subTitle: {
    color: colors.medium,
  },
});

export default ListItem;
