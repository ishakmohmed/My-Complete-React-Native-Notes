import React from "react";
import { useFormikContext } from "formik";

import TextInput from "../TextInput";
import ErrorMessage from "./ErrorMessage";

function FormField({ name, width, ...otherProps }) {
  // btw, see the "errors" object destructured below? when you have errors in field, formik will set the errors in this object like errors = {email: whatever, password: whatever}
  const {
    setFieldTouched,
    setFieldValue,
    handleChange,
    errors,
    touched,
    values,
  } = useFormikContext(); // cause this component is used in LoginScreen.js inside formik function!

  return (
    <>
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...otherProps}
        // ^ otherProps like autoCorrect, autoCapitalize, etc. which aren't always applied to ALL appformfield
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormField;
