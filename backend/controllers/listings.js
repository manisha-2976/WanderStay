const Listing = require("../models/listings.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN
const geocodingClient = mbxGeocoding({ accessToken: mapToken });
const { formatArray } = require("../utils/formatArray");
const openai = require("../utils/openaiClient");


module.exports.index = async (req, res, next) => {
  let allListings = await Listing.find({})
  res.json(allListings);
}

module.exports.createListing = async (req, res, next) => {
  console.log("map token in controller:", mapToken);
  const listing = JSON.parse(req.body.listing);
  //Geocoding
  const geoResponse = await geocodingClient.forwardGeocode({
    query: listing.city,
    limit: 1
  }).send();

  //Images
  const images = req.files.map((file, index) => ({
    url: file.path,
    filename: file.filename,
    category: req.body.category
      ? (Array.isArray(req.body.category)
        ? req.body.category[index]
        : req.body.category)
      : "additional"
  }));

  //Create Listing
  const newListing = new Listing({
    ...listing,
    amenities: formatArray(listing.amenities),
    safetyItems: formatArray(listing.safetyItems),
    images,
    host: req.user._id,
    geometry: geoResponse.body.features[0].geometry
  });

  //Prepare text for embedding
  const textForEmbedding = `
      ${newListing.title}
      ${newListing.description}
      ${(newListing.amenities || []).join(" ")}
      ${newListing.city}
      ${newListing.state}
      ${newListing.propertyType}
      ${newListing.roomType}
    `;
  //Generate embedding
  try {
    const embeddingResponse = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: textForEmbedding,
      dimensions: 512,
    });
    newListing.embedding = embeddingResponse.data[0].embedding;

  } catch (err) {
    console.log("Embedding error:", err.message);
    newListing.embedding = []; // fallback
  }
  const savedListing = await newListing.save();
  res.status(200).json({
    success: true,
    data: savedListing
  });
}


module.exports.showListing = async (req, res, next) => {
  let { id } = req.params;
  const listing = await Listing.findById(id).populate("reviews").populate("host");
  res.json(listing);
}

module.exports.hostListing = async (req, res) => {
  const listings = await Listing.find({ host: req.user._id });
  res.json(listings);
}

module.exports.editListing = async (req, res, next) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.json(listing);
}

module.exports.updateListing = async (req, res, next) => {
  const { id } = req.params;
  const { field, value } = req.body;
  const updatedListing = await Listing.findByIdAndUpdate(id,
    { [field]: value },
    { new: true, runValidators: true }
  );
  console.log(updatedListing);
  res.json(updatedListing);
};

module.exports.destroyListing = async (req, res, next) => {
  const { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  res.send();
}

