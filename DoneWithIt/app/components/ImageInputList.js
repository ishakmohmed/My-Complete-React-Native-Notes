import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  const scrollView = useRef();

  return (
    <View>
      {/* PLEAASEEEE ADD A VIEW ON TOP OF ScrollView, otherwise the scroll view would take up the entire screen */}
      {/* Wrapping with scroll view to enable horizontal/vertical(default) scrolling >>> */}
      <ScrollView
        ref={scrollView}
        // ScrollView has a method called scrollToEnd(), but I can't call right away but I need to useRef() up there and then call it here >>>
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        {/* ^^^ by default vertical scroll */}
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri} style={styles.image}>
              {/* means imageinput has got a pic already > */}
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          {/* means image input doesn't have any pic at the moment > */}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputList;
