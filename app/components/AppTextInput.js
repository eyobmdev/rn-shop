import { View, TextInput, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../configs/colors";
import React from "react";

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flexDirection: "row",
    borderRadius: 25,
    width: "100%",
    padding: 15,
    alignItems: "center",
  },
  icon: {
    // marginRight: 10,
  },
  textInput: {
    color: colors.dark,
    fontSize: 18,
    flex: 1,
    marginLeft: 10,
    fontFamily: Platform.OS === "android" ? "monospace" : "Avenir",
  },
});

export default AppTextInput;