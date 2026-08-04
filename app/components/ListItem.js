import React from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import colors from "../configs/colors";

function ListItem({
  image,
  IconComponent,
  title,
  subtitle,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.container,
          {
            backgroundColor: pressed ? "#ddd" : "#fff",
          },
        ]}
      >
        {IconComponent}
        {image && <Image style={styles.image} source={image} />}

        <View style={styles.detailContainer}>
          <AppText style={styles.title}>{title}</AppText>
          {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
        </View>
      </Pressable>
    </Swipeable>
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
    justifyContent: "center",
  },
  press: {},
});

export default ListItem;
