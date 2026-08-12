import React, { useEffect, useState } from "react";
import * as Yub from "yup";
import * as Location from "expo-location";

import Screen from "../components/Screen";

import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";

const validationSchema = Yub.object().shape({
  title: Yub.string().required().min(3).label("Title"),
  price: Yub.number().required().min(1).max(10000).label("Price"),
  description: Yub.string().label("Description"),
  category: Yub.object().required().nullable().label("Category"),
  images: Yub.array().min(1, "Please select at least one image."),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "#fc5c65",
    icon: "table-furniture",
  },
  {
    label: "Clothing",
    value: 2,
    backgroundColor: "#fd9644",
    icon: "tshirt-crew",
  },
  {
    label: "Electronics",
    value: 3,
    backgroundColor: "#fed330",
    icon: "laptop",
  },
  {
    label: "Books",
    value: 4,
    backgroundColor: "#26de81",
    icon: "book-open-variant",
  },
  {
    label: "Sports",
    value: 5,
    backgroundColor: "#2bcbba",
    icon: "basketball",
  },
  {
    label: "Beauty",
    value: 6,
    backgroundColor: "#45aaf2",
    icon: "face-woman",
  },
  {
    label: "Toys",
    value: 7,
    backgroundColor: "#4b7bec",
    icon: "puzzle",
  },
  {
    label: "Automotive",
    value: 8,
    backgroundColor: "#a55eea",
    icon: "car",
  },
  {
    label: "Others",
    value: 9,
    backgroundColor: "#778ca3",
    icon: "apps",
  },
];

const ListingEditScreen = () => {
const [location, setLocation] = useState(null);

const getLocation = async () => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      console.log("Location permission denied");
      return;
    }

    const position = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Balanced,
    });


    if (!position) {
      console.log("Could not get location");
      return;
    }

    const { latitude, longitude } = position.coords;
    setLocation({ latitude, longitude });

  } catch (error) {
    console.log("Error getting location:", error);
  }
};

useEffect(() => {
  getLocation();
}, []);
  return (
    <Screen>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(value) => console.log(console.log(location))}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />

        <AppFormField name="title" maxLength={255} placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          name="description"
          maxLength={255}
          multiline
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
};

export default ListingEditScreen;
