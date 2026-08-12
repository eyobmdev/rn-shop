import { StyleSheet, View } from "react-native";
import React, { useRef } from "react";
import ImageInput from "./ImageInput";
import { ScrollView } from "react-native";

const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
  const scrollView = useRef();
  return (
    <ScrollView
      ref={scrollView}
      horizontal
      onContentSizeChange={() => scrollView.current.scrollToEnd()}
    >
      <View style={styles.container}>
        {imageUris.map((uri) => (
          <ImageInput
            imageUri={uri}
            key={uri}
            onChange={() => onRemoveImage(uri)}
          />
        ))}
        <ImageInput onChange={(uri) => onAddImage(uri)} />
      </View>
    </ScrollView>
  );
};

export default ImageInputList;

const styles = StyleSheet.create({
  container: { flexDirection: "row", gap: 10 },
});
