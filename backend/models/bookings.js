const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    listing:{
        type: Schema.Types.ObjectId,
        ref: "Listing",
        required: true
    },

    checkIn:{
        type: Date,
        required: true,
    },

    checkOut:{
        type: Date,
        required: true,
    },

    bookingDate: {
        type: Date,
        default: Date.now,
        required: true
    },

    nights: {
        type: Number,
        required: true
    },

    guests: {
        type: Number,
        required: true
    },

    totalPrice: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model("Booking", bookingSchema);