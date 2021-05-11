import client from "./client";

const register = (pushToken) =>
  client.post("/expoPushTokens", { token: pushToken });

// needa pass authentication token in request header, but the main client module takes care of that and will set that for every request.

export default {
  register,
};
