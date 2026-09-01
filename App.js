import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import { navigationRef } from "./app/navigation/rootNavigation";
import * as Notifications from "expo-notifications";
import logger from "./app/utility/logger";

logger.start();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        const storedUser = await authStorage.getUser();
        if (storedUser) {
          setUser(storedUser);
        }
      } catch (error) {
        logger.log(error);
        await authStorage.removeToken();
      } finally {
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <SafeAreaProvider>
        <NavigationContainer ref={navigationRef} theme={navigationTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthContext.Provider>
  );
}
