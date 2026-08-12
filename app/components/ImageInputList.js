import { StyleSheet, View } from "react-native";
import React from "react";
import ImageInput from "./ImageInput";

const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
  return (
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
  );
};

export default ImageInputList;

const styles = StyleSheet.create({
  container: { flexDirection: "row", gap: 10 },
});
