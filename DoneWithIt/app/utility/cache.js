// this entire file is a cache layer >>>

// in this case and I guess in every other case too, cache layer is used to >>>
// serialize/deserialize (stringify, parse)
// apply timestamp
// remove expired items

import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment"; // ACTUALLY TOWARDS THE END, MOSH SAID USE dayjs instead to optimize javascript bundle!

const prefix = "cache"; // this is totally optional!
const expiryInMinutes = 5;

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };

    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const isExpired = (item) => {
  const now = moment(Date.now());
  const storedTime = moment(item.timestamp);
  const isExpired = now.diff(storedTime, "minutes") > expiryInMinutes;

  return isExpired;
};

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpired(item)) {
      // if expired, clear the cache!
      await AsyncStorage.removeItem(prefix + key); // this line is violating Command Query Separation (CQS) principle, in this case that's ok cause it's not the end of the world!
      return null;
    }

    return item.value;
  } catch (error) {
    console.log(error);
  }
};

export default {
  store,
  get,
};
