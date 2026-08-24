import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

async function demo() {
  try {
    await AsyncStorage.setItem("userToken", "abc123");
    await AsyncStorage.setItem("jj", JSON.stringify({id:4}));
 
    const token = await AsyncStorage.getItem("userToken");
    console.log("Stored token:", token);

    const jj = await AsyncStorage.getItem("jj");
    console.log("Stored jj:", jj);

    await AsyncStorage.removeItem("userToken");
  } catch (error) {
    console.error("AsyncStorage error:", error);
  }
}

export default function App() {
  useEffect(() => {
    demo();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}