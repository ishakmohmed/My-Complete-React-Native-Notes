// import React, { useState, useEffect } from "react";
// import { FlatList, StyleSheet, View } from "react-native";

// import Screen from "./../components/Screen";
// import Card from "./../components/Card";
// import routes from "../navigation/routes";
// import colors from "../config/colors";
// import listingsApi from "../api/listings";
// import Button from "../components/Button";
// import Text from "../components/Text";
// import ActivityIndicator from "../components/ActivityIndicator";

// function ListingsScreen({ navigation }) {
//   const [listings, setListings] = useState([]);
//   const [error, setError] = useState(true); // actually it should be false, but it didn't work so I changed to true so you'll get errors all the time unless you're connected to backend!
//   const [loading, setLoading] = useState(false);

//   const loadListings = async () => {
//     setLoading(true);
//     const response = await listingsApi.getListings(); // this promise is always resolved cause we're using apisauce, so we don't need try catch block
//     setLoading(false);

//     if (!response.ok) return setError(true);
//     // in future you might need this: response.problem where problem is NONE, CLIENT_ERROR, SERVER_ERROR, TIMEOUT_ERROR, CONNECTION_ERROR, NETWORK_ERROR, CANCEL_ERROR

//     setError(false);
//     setListings(response.data);
//   };

//   useEffect(() => {
//     loadListings();
//   }, []);

//   return (
//     <Screen style={styles.screen}>
//       {error && (
//         <>
//           <Text>Couldn't retrieve the listings.</Text>
//           <Button title="Retry" onPress={loadListings} />
//         </>
//       )}
//       {/* <ActivityIndicator animating={loading} size="large" color={colors.primary} /> */}
//       {/* ^ instead of this from RN core, I'm using my own ActivityIndicator powered by Lottie >>> */}
//       <ActivityIndicator visible={loading} />
//       <FlatList
//         data={listings}
//         keyExtractor={(listing) => listing.id.toString()}
//         renderItem={({ item }) => (
//           <Card
//             title={item.title}
//             subTitle={"RM " + item.price}
//             imageUrl={item.images[0].url}
//             onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
//           />
//         )}
//       />
//     </Screen>
//   );
// }

// const styles = StyleSheet.create({
//   screen: {
//     padding: 20,
//     backgroundColor: colors.light,
//   },
// });

// export default ListingsScreen;

// *************************************************************
// *************************************************************
// *************************************************************

// PLEASE READ THE ABOVE COMMENTED OUT VERSION >>>>>>>>>>>>>>>>>>>

import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "./../components/Screen";
import Card from "./../components/Card";
import routes from "../navigation/routes";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import Button from "../components/Button";
import Text from "../components/Text";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const { data: listings, error, loading, request: loadListings } = useApi(
    listingsApi.getListings
  ); // to make multiple API called, instead of destructuring the object you get from useApi, just use it as it is.

  useEffect(() => {
    loadListings(1, 2, 3);
  }, []);

  return (
    <>
      <ActivityIndicator visible={loading} />
      {/* ^ this is a custom ActivityIndicator, default one has different props, remember that */}

      <Screen style={styles.screen}>
        {error && (
          <>
            <Text>Couldn't retrieve the listings.</Text>
            <Button title="Retry" onPress={loadListings} />
          </>
        )}

        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"RM " + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
