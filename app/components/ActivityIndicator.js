import LottieView from "lottie-react-native";
import React from "react";
import { View } from "react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
        style={{ width: "100%", height: "100%" }}
        
      />
  );
}

export default ActivityIndicator;
