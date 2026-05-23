const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    listing: { type: Schema.Types.ObjectId, ref: "Listing", required: true },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
    bookedDates: [{ type: String }],
    bookingDate: { type: Date, default: Date.now, required: true },
    nights: { type: Number, required: true },
    guests: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
});

bookingSchema.index({ listing: 1 });
bookingSchema.index({ checkIn: 1 });
bookingSchema.index(
    { listing: 1, bookedDates: 1 },
    {
        unique: true,
        partialFilterExpression: { bookedDates: { $exists: true } }
    }
);

module.exports = mongoose.model("Booking", bookingSchema);
