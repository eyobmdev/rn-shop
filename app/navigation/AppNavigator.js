import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NewListButton from "./NewListButton";
import routes from "./routes";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons size={size} color={color} name="home" />
        ),
      }}
    />
    <Tab.Screen
      name="ListingEdit"
      component={ListingEditScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewListButton
            onPress={() => navigation.navigate(routes.LISTING_EDIT)}
          />
        ),
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            size={size}
            color={color}
            name="plus-circle"
          />
        ),
      })}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons size={size} color={color} name="account" />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
