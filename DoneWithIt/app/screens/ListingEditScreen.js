import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  Form,
  FormField,
  FormPicker,
  SubmitButton,
  FormImagePicker,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";
import UploadScreen from "./UploadScreen";
import listingsApi from "../api/listings";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Camera", value: 3, backgroundColor: "blue", icon: "lock" },
];

function ListingEditScreen() {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    // ^^^ but2nd optional arg in formik submission handler (in this case handleSubmit) is FormikBag which I destructured and picked the resetForm!
    setProgress(0); // before we show the upload screen, needa reset the progress to 0
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );
    // setUploadVisible(false); << removed this one, cause when we're done we're not supposed to immediately hide the screen cause we needa wait for the done animation to finish and then we'll set the setUploadVisible() to false, and this is possible thanks to onAnimationFinish prop that comes with Lottie!

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Could not save the listing.");
    }

    resetForm(); // if everything goes well, call resetForm which is destructured from FormikBag!
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen // this is a modal
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <Form
        initialValues={{
          title: "",
          price: "", // eventhough it's a number, inside the form it's represented as string, of course you can set the initial value to 0 too!
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormField maxLength={255} name="title" placeholder="Title" />

        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />

        <FormPicker
          PickerItemComponent={CategoryPickerItem}
          items={categories}
          name="category"
          numberOfColumns={3}
          placeholder="Category"
          width="50%"
        />

        <FormField
          maxLength={255}
          multiline
          numberOfLines={3} // only works on android
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
