import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

import expoPushTokensApi from "../api/expoPushToken";
import logger from "../utility/logger";

const useNotifications = (responseListener) => {
  useEffect(() => {
    registerForPushNotifications();

    const responseSubscription =
      Notifications.addNotificationResponseReceivedListener((response) => {
        if (responseListener) {
          responseListener(response);
        }
      });

    const receivedSubscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        logger.log("Notification received in foreground:", notification);
      },
    );

    return () => {
      responseSubscription.remove();
      receivedSubscription.remove();
    };
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        logger.log("Permission not granted");
        return;
      }

      const token = await Notifications.getExpoPushTokenAsync({
        projectId: Constants.expoConfig?.extra?.eas?.projectId,
      });

      logger.log("Push token registered:", token.data);
      await expoPushTokensApi.register(token.data);
    } catch (error) {
      logger.log("Error getting a push token", error);
    }
  };
};

export default useNotifications;
