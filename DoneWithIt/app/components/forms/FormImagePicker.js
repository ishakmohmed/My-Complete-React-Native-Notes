import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import ImageInputList from "../ImageInputList";

// since this component is prefixed with "Form", in this codebase it means it has got some component, in this case ImageInputList TOGETHER WITH ERROR MESSAGE!

function FormImagePicker({ name }) {
  // i'm passing "images" as name prop from ListingEditScreen!
  const { errors, setFieldValue, touched, values } = useFormikContext();
  // const imageUris = values[name]; // basically we get imageUris from FormikContext!
  // ^ I'm not using this variable in 3 places below because it confuses my mind!

  const handleAdd = (uri) => {
    setFieldValue(name, [...values[name], uri]); // out of all the values like price, title, category, etc, values[name] in this case is values[images]
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      values[name].filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={values[name]} // {imageUris} or {values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
