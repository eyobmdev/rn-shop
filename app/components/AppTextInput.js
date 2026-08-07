import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import defaultStyle from "../configs/styles";

const AppTextInput = ({ icon, rightIcon, onRightIconPress, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyle.colors.medium}
          style={styles.icon}
        />
      )}

      <TextInput
        style={[defaultStyle.text, styles.textInput]}
        placeholderTextColor={defaultStyle.colors.medium}
        {...otherProps}
      />

      {rightIcon && (
        <TouchableOpacity onPress={onRightIconPress}>
          <MaterialCommunityIcons
            name={rightIcon}
            size={20}
            color={defaultStyle.colors.medium}
            style={styles.rightIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyle.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
  },
  rightIcon: {
    marginLeft: 10,
  },
});

export default AppTextInput;
