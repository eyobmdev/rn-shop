import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessage = [
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

function MessageScreen() {
  const [messages, setMessage] = useState(initialMessage);

  const handleDelete = (message) => {
    setMessage(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            subtitle={item.description}
            onPress={() => console.log("hello")}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessageScreen;
