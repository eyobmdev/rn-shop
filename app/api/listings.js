import client from "./client";

const endpoint = "/listings";
const getListings = () => client.get(endpoint);

const addListing = (listing, onUploadProgress) => {
  const data = new FormData();

  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description || "");

  listing.images.forEach((image, index) => {
    data.append("images", {
      uri: image,
      type: "image/jpeg",
      name: `image${index}.jpg`,
    });
  });

  if (listing.location) {
    data.append("location", JSON.stringify(listing.location));
  }

  return client.post(endpoint, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    transformRequest: (data) => data,
    onUploadProgress: (progressEvent) => {
      console.log("Raw progressEvent:", progressEvent);

      if (progressEvent.total) {
        const progress = progressEvent.loaded / progressEvent.total;
        console.log("Progress:", progress); 
        onUploadProgress(progress);
      } else {
        console.log("No total size available");
      }
    },
  });
};

export default {
  getListings,
  addListing,
};
