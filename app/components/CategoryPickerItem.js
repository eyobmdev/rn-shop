import { View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "./Icon";
import AppText from "./AppText";

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label} numberOfLines={2}>
        {item.label}
      </AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "33.33%",
    alignItems: "center",
    marginBottom: 20,
  },

  label: {
    marginTop: 8,
    textAlign: "center",
    fontSize: 13,
    lineHeight: 16,
  },
});

export default CategoryPickerItem;
