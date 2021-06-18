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
//   const [error, setError] = useState(true); 
//   const [loading, setLoading] = useState(false);

//   const loadListings = async () => {
//     setLoading(true);
//     const response = await listingsApi.getListings();
//     setLoading(false);

//     if (!response.ok) return setError(true);

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
  ); 

  useEffect(() => {
    loadListings(1, 2, 3);
  }, []);

  return (
    <>
      <ActivityIndicator visible={loading} />
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
