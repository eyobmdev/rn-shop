import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AppText>
        Open up App.js to start working on your app!!!{" "}
        <MaterialCommunityIcons name="heart" size={20} color="red" />
      </AppText>
    </View>
  );
}
