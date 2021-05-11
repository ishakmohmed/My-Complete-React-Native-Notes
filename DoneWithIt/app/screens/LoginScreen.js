// THE COMMENTED OUT CODES ARE FOR LOGIN FORM AND YOU'LL PROBABLY UNDERSTAND THEM BETTER, BUT THE CODES AFTER THAT ARE REFACTORED TO REUSABLE COMPONENT >>>

// import React from "react";
// import { StyleSheet, Image } from "react-native";
// import { Formik } from "formik";
// import * as Yup from "yup";

// import AppButton from "./../components/AppButton";
// import AppTextInput from "./../components/AppTextInput";
// import ErrorMessage from "./../components/ErrorMessage";
// import Screen from "./../components/Screen";

// const validationSchema = Yup.object().shape({
//   email: Yup.string().required().email().label("Email"),
//   password: Yup.string().required().min(4).label("Password"),
// });

// function LoginScreen(props) {
//   return (
//     <Screen style={styles.container}>
//       <Image style={styles.logo} source={require("../assets/logo-red.png")} />

//       <Formik // needa set a couple of props!
//         initialValues={{
//           email: "",
//           password: "",
//         }}
//         onSubmit={(values) => console.log(values)}
//         validationSchema={validationSchema}
//       >
//         {/* inside formik tags, pass a set of curly braces */}
//         {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
//           // ^ touched is an object with email and password in this case
//           // ^ we also have setFieldError and setFieldValue
//           <>
//             {/* needa return 1 ONE jsx exression */}
//             <AppTextInput
//               autoCapitalize="none"
//               autoCorrect={false}
//               icon="email"
//               keyboardType="email-address"
//               onBlur={() => setFieldTouched("email")}
//               onChangeText={handleChange("email")}
//               placeholder="Email"
//               textContentType="emailAddress"
//               // ^ this only works in iOS
//             />
//             <ErrorMessage error={errors.email} visible={touched.email} />

//             <AppTextInput
//               autoCapitalize="none"
//               autoCorrect={false}
//               icon="lock"
//               onBlur={() => setFieldTouched("password")}
//               onChangeText={handleChange("password")}
//               placeholder="Password"
//               secureTextEntry
//               textContentType="password"
//               // ^ this only works in iOS
//             />
//             <ErrorMessage error={errors.password} visible={touched.password} />

//             <AppButton title="Login" onPress={handleSubmit} />
//           </>
//         )}
//       </Formik>
//     </Screen>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//   },
//   logo: {
//     width: 80,
//     height: 80,
//     alignSelf: "center",
//     marginTop: 50,
//     marginBottom: 20,
//   },
// });

// export default LoginScreen;

// *******************************************************8

import React, { useState, useContext } from "react";
import { StyleSheet, Image } from "react-native";
// import { Formik } from "formik";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";

import Screen from "./../components/Screen";
import {
  ErrorMessage, // added this right above first form field!
  FormField,
  Form,
  SubmitButton,
} from "../components/forms";
import authApi from "../api/auth";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  // const authContext = useContext(AuthContext); // this same AuthContext was used in App.js as provider, here we're consuming it. Below there, when you decode the payload set the user in app.js using the provided function!

  // ^ refactored useContext(AuthContext) to my custom hook so here's the new implementation >>>
  const { logIn } = useAuth();

  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password); // you'll get a jwt

    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);

    logIn(result.data); // btw, result.data is the long jwt
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Form // initially, these 3 props are passed to Formik component, but now Formik is inside AppForm component!
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        // ^ initially these 3 props are passed to Formik component!
      >
        {/* actually here, we needa pass a function and then have a react fragment like in previous commented out codes, but now all of that is refactored to appform.js. BASICALLY THE PROBLEM THAT IT SOLVES IS THAT NOW WE DON'T NEEDA PASS A WEIRD ARROW FUNCTION AND PLACE THE INPUTS AND BUTTON INSIDE A REACTFRAGMENT EVERYTIME I CREATE A FORM */}

        <ErrorMessage
          error="Invalid email and/or password" // or error in response
          visible={loginFailed}
        />
        {/* ^^^ ADDED ERROR MESSAGE JUST ABOVE THE FORM FIELD! */}

        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
          // ^ works only on iOS
        />
        {/* before refactoring the error component was right after each input fields */}

        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
          // works only on iOS
        />
        {/* before refactoring the error component was right after each input fields */}

        {/* <AppButton title="Login" onPress={handleSubmit} /> */}
        {/* ^ this became this (now i don't needa set onPress) > */}
        <SubmitButton title="Login" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
