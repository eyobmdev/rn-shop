import Constants from "expo-constants";
import * as Updates from "expo-updates"; 

const settings = {
  dev: {
    apiUrl: "http://192.168.43.203:9000/api",
  },
  staging: {
    apiUrl: "http://192.168.43.203:9000/api"
  },
  prod: {
    apiUrl: "http://192.168.43.203:9000/api"
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  
  const channel = Updates.channel; 
  
  if (channel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
