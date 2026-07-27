import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
        fontSize: 18,
      },
      android: {
        fontFamily: "monospace",
        fontSize: 18,
      },
    }),
  },
});

export default AppText;
