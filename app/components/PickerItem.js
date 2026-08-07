import { StyleSheet, Pressable, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import defaultStyle from "../configs/styles";

const PickerItem = ({ label, onPress, selected }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
        selected && styles.selected,
      ]}
    >
      <AppText style={[styles.text, selected && styles.selectedText]}>
        {label}
      </AppText>

      {selected && (
        <MaterialCommunityIcons
          name="check"
          size={22}
          color={defaultStyle.colors.primary}
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginHorizontal: 12,
    marginVertical: 4,
    borderRadius: 12,
    backgroundColor: defaultStyle.colors.light,
  },
  pressed: {
    backgroundColor: defaultStyle.colors.medium + "22",
  },
  selected: {
    backgroundColor: defaultStyle.colors.primary + "15",
  },
  text: {
    fontSize: 17,
    color: defaultStyle.colors.dark,
  },
  selectedText: {
    fontWeight: "600",
    color: defaultStyle.colors.primary,
  },
});

export default PickerItem;
