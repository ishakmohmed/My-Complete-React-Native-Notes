import React, { useContext } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Screen from "./../components/Screen";
import ListItem from "./../components/ListItem";
import ListItemSeparator from "./../components/ListItemSeparator";
import Icon from "./../components/Icon";
import colors from "../config/colors";
// import AuthContext from "../auth/context";
// import authStorage from "../auth/storage";
import useAuth from "../auth/useAuth";

const menuItems = [
  {
    title: "My listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

function AccountScreen({ navigation }) {
  // const { user, setUser } = useContext(AuthContext); // in account screen im gonna set the user to null in app.js when a button is clicked, which means logout!

  // ^ little change to above code, I extracted useContext(AuthContext) to a custom hook, so here's the new code >>>
  const { user, logOut } = useAuth(); // here setUser(null) is implemented inside logOut!

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require("../assets/mosh.jpg")}
          // ^ here, I'm passing image prop instead of Icon Component, just like intended!
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>

      <ListItem
        title="Log Out"
        onPress={() => logOut()}
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
