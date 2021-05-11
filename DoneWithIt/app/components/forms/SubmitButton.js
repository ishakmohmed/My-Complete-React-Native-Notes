import React from "react";
import { useFormikContext } from "formik";
import Button from "../Button";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext(); // cause this component is used in LoginScreen.js inside formik function!
  
  return <Button title={title} onPress={handleSubmit} />;
}

export default SubmitButton;
