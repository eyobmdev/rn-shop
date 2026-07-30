import React from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import AppText from "./AppText";
import colors from "../configs/colors";

function ListItem({ image, title, subtitle, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: pressed ? "#ddd" : "#fff",
        },
      ]}
    >
      <Image style={styles.image} source={image} />

      <View style={styles.detailContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "bold",
  },
  subtitle: {
    color: colors.medium,
  },
  detailContainer: {
    marginLeft: 10,
  },
  press: {},
});

export default ListItem;
