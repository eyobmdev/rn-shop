import { View, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(value) => console.log(value)}
        validationSchema={validationSchema}
      >
        <View style={styles.form}>
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            name="email"
            keyboardType="email-address"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            placeholder="Password"
            name="password"
            secureTextEntry={!showPassword}
            textContentType="password"
            rightIcon={showPassword ? "eye-off" : "eye"}
            onRightIconPress={() => setShowPassword((prev) => !prev)}
          />
          <SubmitButton title="Login" />
        </View>
      </AppForm>
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
