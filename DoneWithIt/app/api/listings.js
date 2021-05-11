import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

const addListing = (listing, onUploadProgress) => {
  // in http protocol, each request has a header called content-type
  // json > application/json (automatic)
  // to upload files/images > multipart/form-data, this tells the server that we're sending large request and the body of request is divided to multiple parts, in this case we're not gonna manually set it, to do this > new FormData() (where FormData() exists in JAVASCRIPT). This way, apisauce will internally set the header to multipart/form-data.

  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);

  listing.images.forEach((image, index) =>
    data.append("images", {
      name: "image" + index, // to generate unique name
      type: "image/jpeg",
      uri: image,
    })
  );

  if (listing.location)
    // each listing can optionally have location
    data.append("location", JSON.stringify(listing.location)); // needa serialize!

  return client.post(endpoint, data, {
    // this third argument is an axios configuration object
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total), // raising an event with this value so it can be used in listingeditscreen to set the progress state variable!
    // console.log(progress.loaded / progress.total), // this function gets called repeatedly while the request is being sent!

    // Event { <<< this is the progress object!
    //   "isTrusted": false,
    //   "lengthComputable": true,
    //   "loaded": 109972,
    //   "total": 109972,
    // }
  }); // added return keyword because the post method returns a promise
};

export default {
  addListing,
  getListings,
};
