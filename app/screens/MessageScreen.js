import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";

import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";

const message = [
  {
    id: 1,
    image: require("../assets/mosh.jpg"),
    title: "hello",
    description: "world",
  },
  {
    id: 2,
    image: require("../assets/mosh.jpg"),
    title: "hello",
    description: "world",
  },
];

function MessageScreen(props) {
  return (
    <Screen>
      <FlatList
        data={message}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            subtitle={item.description}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({});

export default MessageScreen;
