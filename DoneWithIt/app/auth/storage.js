import React from "react";
import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

// needa store user's AUTHENTICATION TOKEN in PERSISTENT STORAGE, SO HERE IM GONNA USE SecureStore in expo!

// needa define 3 functions >>>

const key = "authToken";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error storing the auth token", error);
  }
};

// I'm not gonna export this function, instead I'm gonna export getUser function (now im gonna export this function to be used in client.js inside api folder)  >>>
const getToken = async () => {
  // not param in get cause i guess there's only 1 auth token for every user
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};

const getUser = async () => {
  const token = await getToken();

  return token ? jwtDecode(token) : null;
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};

export default {
  getToken,
  getUser,
  removeToken,
  storeToken,
};
