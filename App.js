import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import MessageScreen from "./app/screens/MessageScreen";

export default function App() {
  return <MessageScreen />;
}
