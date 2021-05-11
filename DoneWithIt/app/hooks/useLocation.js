import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  const [location, setLocation] = useState();

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) return; // but if permission is granted, take the location right away!
      const {
        coords: { latitude, longitude },
        timestamp,
      } = await Location.getLastKnownPositionAsync(); // not as accurate as getCurrentPositionAsync()
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };

  return location;
};
