import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import AppText from "./AppText";
import colors from "../configs/colors";

function Card({ title, subtitle, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: colors.white,
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default Card;
