require('dotenv').config({ path: __dirname + '/../.env' });
const mongoose = require("mongoose")
const initData = require("./data.js");
const Listing = require("../models/listings.js");
console.log("MAP_TOKEN =", process.env.MAP_TOKEN);

const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

const dbUrl = process.env.ATLASDB_URL;

main()
.then(() => {
    console.log("connected to DB");
})
.catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(dbUrl);
}

console.log("map token:", mapToken);

const initDB = async () => {
  await Listing.deleteMany({});

  //async map with Promise.all
  initData.data = await Promise.all(
    initData.data.map(async (obj) => {
      try {
        const geoResponse = await geocodingClient
          .forwardGeocode({
            query: obj.city,
            limit: 1,
          })
          .send();

        const geometry = geoResponse.body.features[0].geometry;

        return {
          ...obj,
          host: "69d257d0185b61c4e8f45b15",
          geometry,
        };
      } catch (err) {
        console.log("Geocoding error:", err.message);

        // fallback if geocoding fails
        return {
          ...obj,
          host: "699dc8c1272eacff785b80c4",
          geometry: {
            type: "Point",
            coordinates: [78.9629, 20.5937], // India fallback
          },
        };
      }
    })
  );

  await Listing.insertMany(initData.data);

  console.log("✅ data was initialized with host + geometry");
};

initDB();

