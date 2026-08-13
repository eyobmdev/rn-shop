import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";

const initialMessage = [
  {
    id: 1,
    image: require("../assets/eyob.jpeg"),
    title: "Eyob",
    description: "Hey there",
  },
  {
    id: 2,
    image: require("../assets/mosh.jpg"),
    title: "hello",
    description: "world",
  },
];

function MessageScreen() {
  const [messages, setMessages] = useState(initialMessage);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages((prevMessages) =>
      prevMessages.filter((m) => m.id !== message.id),
    );
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
        refreshing={refreshing}
        onRefresh={() => {
          setRefreshing(true);

          setTimeout(() => {
            setMessages([
              {
                id: 3,
                image: require("../assets/mosh.jpg"),
                title: "New item",
                description: "Refreshed data",
              },
            ]);
            setRefreshing(false);
          });
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessageScreen;
