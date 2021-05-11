import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user); // this will update the user in app.js
    authStorage.storeToken(authToken); // when user logs in, just store the token! Btw, just because you're storing it doesn't end here, you need to retrieve the token every time the app loads like authStorage.getToken();
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken(); // remove authToken which will be persisted in the device because you're gonna store it when user logs in. With this you can logout from device.
  };

  return { user, logIn, logOut };
};
