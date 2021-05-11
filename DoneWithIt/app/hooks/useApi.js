import { useState } from "react";

// this module is for you to call an API but when you also want the loading state

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args); // basically when you wanna call api, it'll look like this entire function in this file, just that apiFun(...args) might be different, hence the refactoring!
    setLoading(false);

    // if (!response.ok) {
    //   setError(true);
    //   return response; // <<< needa return response too, we didn't before this and that's a bug in the code!
    // }

    // setError(false);
    // setData(response.data);
    // return response; // <<< needa return response too, we didn't before this and that's a bug in the code!

    // ^^^ there is a better way to write these 7 lines >>>

    setError(!response.ok); // means if response is not ok, set error to true, AND VICE VERSA!
    setData(response.data); // set data whether we have an error or not, it wouldn't hurt!
    return response; // needa return complete response every time!
  };

  return {
    data,
    error,
    loading,
    request,
  };
};
