// NOTE: THIS IS NOT IMPLEMENTED IN THIS FILE, BUT YOU CAN ALSO CACHE THE POST REQUEST AND THEN EXECUTE IT LATER ON!


// this is the right place to cache cause it caches all apis like listings api in this same folder, etc.

import { create } from "apisauce"; // it all starts here!
import cache from "../utility/cache";
import authStorage from "../auth/storage";
import settings from "../config/settings";

const apiClient = create({
  baseURL: settings.apiUrl, // url of backend!
});

// sometimes, some endpoints expect us to have some sort of stuffs in the header, like authToken, in this case /my/listings expect me to have a jwt with the name of x-auth-token, so I'm gonna do some magic where ill just add the token to the header of all requests to make the job easy, here we go, BASICALLY I'M GONNNA TRANSFORM THE REQUEST >>>
apiClient.addAsyncRequestTransform(async (request) => {
  try {
    const authToken = await authStorage.getToken();
    if (!authToken) return;
    request.headers["x-auth-token"] = authToken;
  } catch (error) {
    console.log(error);
  }
});

// the promise is always resolved in apisauce so you don't need try-catch block >>>
// here's a sample code >>>
// apiClient.get("/listings").then((response) => {
//   if (!response.ok) { // check response.ok
//     response.problem; // if not ok, check response.problem which is a string (standardized error)
//   }
// });

// I wanna change the implementation of get method such that I wanna add more stuffs on top of it (I wanna cache). So, I needa keep reference to that function and then override it but inside the new function pass the implementation from the reference you kept earlier (ALL OF THIS CAUSE I WANNA STORE STUFFS IN CACHE)!
const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig); // this is the original get function. And needa add these 3 params because that's how it is implemented so pass those 3 in this function and the function that encapsulates this! In case you wanna override some other methods, just hover your mouse over to the default function and it'll tell you the parameters.

  if (response.ok) {
    cache.store(url, response.data); // key, value
    return response; // we should return the same thing as the original get function!
  }

  // at this point, call to the server failed, so look for cache!
  const data = await cache.get(url);
  return data ? { ok: true, data } : response; // return an object that looks like successful response, or return response which will contain information about why the call to the server failed!
};

export default apiClient;
