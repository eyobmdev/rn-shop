import React from "react";
import { Text, StyleSheet } from "react-native";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    fontFamily: "Avenir",
    fontSize: 18,
  },
});

export default AppText;
