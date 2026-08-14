import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ListItem from "../components/lists/ListItem";
import Icon from "../components/Icon";
import Screen from "../components/Screen";
import colors from "../configs/colors";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import routes from "../navigation/routes";

const menuItem = [
  {
    title: "My listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

export default function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Eyob Mulugeta"
          subtitle="eyob.m.dev@gmail.com"
          image={require("../assets/eyob.jpeg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItem}
          ItemSeparatorComponent={ListItemSeparator}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(routes.MESSAGES)}
            />
          )}
        />
      </View>
      <ListItem
        title="Logout"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: { backgroundColor: colors.light },
});
