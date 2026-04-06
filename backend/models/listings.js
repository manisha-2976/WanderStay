const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");
const User = require("./user.js");

const listingSchema = new Schema({

  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true
  },

  propertyType: {
    type: String,
    enum: [
      "Apartment",
      "House",
      "Villa",
      "Hotel"
    ],
    required: true
  },

  roomType: {
    type: String,
    required: true,
    enum: [
      "Entire place",
      "Private room",
      "Shared room"
    ]
  },

  guest: {
    type: Number,
    min: 1,
    required: true
  },

  bedroom: {
    type: Number,
    required: true
  },

  bed: {
    type: Number,
    required: true
  },

  bathroom: {
    type: Number,
    required: true
  },

  price: {
    type: Number,
    required: true
  },
  bathroom: {
    type: Number,
    required: true
  },

  amenities: [{
    type: String,
  }],

  safetyItems: [{
    type: String
  }],

  images: [{
    url: String,
    filename: String,
    category: {
      type: String,
      enum: ["bedroom", "bathroom", "balcony", "exterior", "living", "kitchen", "dining", "cinema", "garden", "additional"],
      default: "additional"
    }
  }],

  country: {
  type: String,
  required: true
  },

  street: String,
  city: {
  type: String,
  required: true
  },
  pincode: {
    type: Number,
    required: true
  },

  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review"
    },
  ],

  host:
  {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  geometry: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number],
      required: true,
    }

  },

  blockedDates: [
    {
      type: Date
    }
  ],

  customPrices: [
    {
      date: Date,
      price: Number
    }
  ],

  weekendPrice: Number,
  weeklyDiscount: Number,
  monthlyDiscount: Number,

  embedding: {
    type: [Number],
    default: []
  }

});

listingSchema.index({ geometry: "2dsphere" });

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } })
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;