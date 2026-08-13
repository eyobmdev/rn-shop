import { Button, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import Screen from "./app/components/Screen";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button title="Click" onPress={() => navigation.navigate("TweetDetails")} />
  );
};

const Tweet = ({ navigation }) => {
  return (
    <Screen>
      <Text>Tweet</Text>
      <Button
        title="View Tweet"
        onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
      />
      <Link />
    </Screen>
  );
};

const TweetDetails = ({ route }) => {
  return (
    <Screen>
      <Text>Tweet Details {route.params.id}</Text>
    </Screen>
  );
};

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tweet" component={Tweet} />
      <Stack.Screen
        options={({ route }) => ({ title: route.params.id })}
        name="TweetDetails"
        component={TweetDetails}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
