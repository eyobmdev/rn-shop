import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import MessageScreen from "./app/screens/MessageScreen";
import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";

export default function App() {
  return (
    <SafeAreaView>
      <Screen>
        <Icon name="email" size={35} backgroundColor="red" iconColor="white" />
      </Screen>
    </SafeAreaView>
  );
}
