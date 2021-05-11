// ABOUT IMAGEPICKER >>>

import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
// import * as Permissions from "expo-permissions"; // < or use the Permissions API
import { Button, Text, View, Image } from "react-native";

export default function App() {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    // alternative to ImagePicker below that >>>

    // const { granted } = await Permissions.askAsync(
    //   Permissions.MEDIA_LIBRARY,
    //   Permission.[SOMETHING ELSE]
    //   you can pass a bunch of stuffs at the same time, btw there are options for calendar, camera, contacts, location, notifications, etc.
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) setImageUri(result.uri);
    } catch (error) {
      console.log("Error reading image.");
    }
  };

  return (
    <View
      style={{
        paddingTop: 100,
      }}
    >
      <Button title="Select Image" onPress={selectImage} />
      <Image
        source={{
          uri: imageUri,
        }}
        style={{
          width: 200,
          height: 200,
        }}
      />
    </View>
  );
}
