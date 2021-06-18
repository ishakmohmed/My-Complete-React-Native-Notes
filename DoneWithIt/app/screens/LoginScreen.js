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

//       <Formik 
//         initialValues={{
//           email: "",
//           password: "",
//         }}
//         onSubmit={(values) => console.log(values)}
//         validationSchema={validationSchema}
//       >
//         {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (

//           <>
//             <AppTextInput
//               autoCapitalize="none"
//               autoCorrect={false}
//               icon="email"
//               keyboardType="email-address"
//               onBlur={() => setFieldTouched("email")}
//               onChangeText={handleChange("email")}
//               placeholder="Email"
//               textContentType="emailAddress"
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


// import React, { useState, useContext } from "react";
// import { StyleSheet, Image } from "react-native";
// import * as Yup from "yup";
// import jwtDecode from "jwt-decode";

// import Screen from "./../components/Screen";
// import {
//   ErrorMessage, 
//   FormField,
//   Form,
//   SubmitButton,
// } from "../components/forms";
// import authApi from "../api/auth";
// import AuthContext from "../auth/context";
// import authStorage from "../auth/storage";
// import useAuth from "../auth/useAuth";

// const validationSchema = Yup.object().shape({
//   email: Yup.string().required().email().label("Email"),
//   password: Yup.string().required().min(4).label("Password"),
// });

// function LoginScreen(props) {
//   const { logIn } = useAuth();

//   const [loginFailed, setLoginFailed] = useState(false);

//   const handleSubmit = async ({ email, password }) => {
//     const result = await authApi.login(email, password); 

//     if (!result.ok) return setLoginFailed(true);
//     setLoginFailed(false);

//     logIn(result.data); 
//   };

//   return (
//     <Screen style={styles.container}>
//       <Image style={styles.logo} source={require("../assets/logo-red.png")} />

//       <Form 
//         initialValues={{
//           email: "",
//           password: "",
//         }}
//         onSubmit={handleSubmit}
//         validationSchema={validationSchema}
//       >
//         <ErrorMessage
//           error="Invalid email and/or password"
//           visible={loginFailed}
//         />
//         <FormField
//           autoCapitalize="none"
//           autoCorrect={false}
//           icon="email"
//           keyboardType="email-address"
//           name="email"
//           placeholder="Email"
//           textContentType="emailAddress"
//         />
//         <FormField
//           autoCapitalize="none"
//           autoCorrect={false}
//           icon="lock"
//           name="password"
//           placeholder="Password"
//           secureTextEntry
//           textContentType="password"
//         />
//         <SubmitButton title="Login" />
//       </Form>
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
