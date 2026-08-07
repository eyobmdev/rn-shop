import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import AppTextInput from "./AppTextInput";

const AppFormField = ({ name, ...otherProps }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        // autoCapitalize="none"
        // autoCorrect={false}
        icon={name}
        onBlur={() => setFieldTouched(name)}
        // keyboardType="email-address"
        // placeholder="Email"
        // textContentType="emailAddress"
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
