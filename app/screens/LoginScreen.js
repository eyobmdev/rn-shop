import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <View style={styles.form}>
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
          value={email}
          onChangeText={setEmail}
        />

        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry={!showPassword}
          textContentType="password"
          value={password}
          onChangeText={setPassword}
          rightIcon={showPassword ? "eye-off" : "eye"}
          onRightIconPress={() => setShowPassword((prev) => !prev)}
        />

        <AppButton title="Login" onPress={() => console.log(email, password)} />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 60,
    marginBottom: 40,
  },
  form: {
    marginTop: 10,
  },
});

export default LoginScreen;
