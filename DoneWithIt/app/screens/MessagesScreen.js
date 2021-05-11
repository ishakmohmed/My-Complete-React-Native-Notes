import React, { useState } from "react";
import { FlatList, View } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        // ^ pass a function that is used to extract a unique key from our array above!
        renderItem={({ item }) => (
          // ^ arg is object of 3 properties { item, index, separators }
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        // ^ weird, cause here you don't need angular bracket for your imported component, unless you wanna write all implementation here so you need to render a view with angular brackets over here!

        // THIS IS HOW TO IMPLEMENT PULL TO REFRESH FEATURE >
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ])
        }
      />
    </Screen>
  );
}

// THIS IS ONE WAY TO FIX THE CONTENT STARTING ON STATUS BAR ON ANDROID (ON IOS, USE SAFEAREAVIEW) (I'VE IMPLEMENTED THE FIRST SOLUTION BELOW IN SCREEN.JS) >>>

// const styles = StyleSheet.create({
//   screen: {
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//   },
// });

// THIS IS ANOTHER WAY TO DO IT, BUT I'M NOT IMPLEMENTING THIS IN THIS PROJECT BECAUSE I PREFER THE ABOVE WAY!

// // import Constants from "expo-constants";
// // import Screen from './../components/Screen';
// // import ListItemSeparator from './../components/ListItemSeparator';
// // import ListItemDeleteAction from './../components/ListItemDeleteAction';
// // // console.log(Constants); // has a bunch of properties including deviceId, deviceName, deviceYearClass, isDevice, statusBarHeight, et cetera...

// now, in paddingTop in styling, all you need to do is >>> Constants.statusBarHeight!

export default MessagesScreen;
