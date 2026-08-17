import { StyleSheet, FlatList, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import AppText from "../components/AppText/AppText";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

const ListingScreen = ({ navigation }) => {
  const {
    request: loadListings,
    data: listings,
    error,
    loading,
  } = useApi(listingsApi.getListings);
  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
};

export default ListingScreen;
