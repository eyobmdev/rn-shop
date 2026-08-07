import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(value) => console.log(value)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, setFieldTouched, touched, errors }) => (
          <>
            <View style={styles.form}>
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                onBlur={() => setFieldTouched("email")}
                keyboardType="email-address"
                placeholder="Email"
                textContentType="emailAddress"
                onChangeText={handleChange("email")}
              />
              <ErrorMessage error={errors.email} visible={touched.email} />
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                placeholder="Password"
                secureTextEntry={!showPassword}
                onBlur={() => setFieldTouched("password")}
                textContentType="password"
                onChangeText={handleChange("password")}
                rightIcon={showPassword ? "eye-off" : "eye"}
                onRightIconPress={() => setShowPassword((prev) => !prev)}
              />
              <ErrorMessage
                error={errors.password}
                visible={touched.password}
              />
              <AppButton title="Login" onPress={handleSubmit} />
            </View>
          </>
        )}
      </Formik>
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
