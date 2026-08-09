import React from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";

import AppText from "../AppText";
import colors from "../../configs/colors";

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
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
        </View>
        <MaterialCommunityIcons
          color={colors.medium}
          name="chevron-right"
          size={25}
        />
      </Pressable>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
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
    flex: 1,
  },
  press: {},
});

export default ListItem;
