import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../configs/colors";

const ListingScreen = () => {
  const listings = [
    {
      id: 1,
      title: "New Jacket",
      price: 2000,
      image: require("../assets/jacket.jpg"),
    },
    {
      id: 2,
      title: "Couch",
      subtitle: 2000,
      image: require("../assets/couch.jpg"),
    },
  ];
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
