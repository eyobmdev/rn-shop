import React, { useRef } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
  const scrollView = useRef(null);

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={() => {
          scrollView.current?.scrollToEnd({ animated: true });
        }}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri} style={styles.imageWrapper}>
              <ImageInput imageUri={uri} onChange={() => onRemoveImage(uri)} />
            </View>
          ))}
          <View style={styles.imageWrapper}>
            <ImageInput onChange={(uri) => onAddImage(uri)} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ImageInputList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 5,
    padding: 0,
  },
  imageWrapper: {},
});
