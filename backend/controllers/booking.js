const Booking = require("../models/bookings.js");
const getDatesInRange = require("../utils/dateUtils.js")
const Listing = require("../models/listings.js");


module.exports.booking = async (req, res, next) => {
    let bookings = await Booking.find({ user: req.user._id }).populate("listing");
    bookings = bookings.filter(booking => booking.listing !== null);
    res.json(bookings);
}

module.exports.getBookedDates = async (req, res) => {
    const { id } = req.params;
    const bookings = await Booking.find({ listing: id });
    const bookedDates = new Set();

    bookings.forEach(booking => {
        const start = new Date(booking.checkIn);
        const end = new Date(booking.checkOut);
        start.setHours(0, 0, 0, 0);
        end.setHours(0, 0, 0, 0);

        //exclude checkout date
        for (let d = new Date(start); d < end; d.setDate(d.getDate() + 1)) {
            const key = d.toLocaleDateString("en-CA");
            bookedDates.add(key);
        }
    });
    res.json({ bookedDates: [...bookedDates] });
};


module.exports.checkAvailability = async (req, res) => {
    const { listingId, checkIn, checkOut } = req.body;

    const start = new Date(checkIn);
    const end = new Date(checkOut);

    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);

    if (end <= start) {
        return res.json({
            available: false,
            message: "Minimum 1 night required"
        });
    }
    const bookings = await Booking.find({ listing: listingId });

    for (let booking of bookings) {
        const bookingStart = new Date(booking.checkIn);
        const bookingEnd = new Date(booking.checkOut);

        bookingStart.setHours(0, 0, 0, 0);
        bookingEnd.setHours(0, 0, 0, 0);

        //overlap logic
        if (start < bookingEnd && end > bookingStart) {
            return res.json({ available: false });
        }
    }
    res.json({ available: true });
};


module.exports.book = async (req, res) => {

    const { listingId, checkIn, checkOut, guests } = req.body;
    const listing = await Listing.findById(listingId);

    const start = new Date(checkIn);
    const end = new Date(checkOut);
    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);

    if (end <= start) {
        return res.status(400).json({
            message: "Check-out must be after check-in"
        });
    }

    //overlap logic
    const bookings = await Booking.find({ listing: listingId });
    let isConflict = false;

    for (let booking of bookings) {
        const bookingStart = new Date(booking.checkIn);
        const bookingEnd = new Date(booking.checkOut);

        bookingStart.setHours(0, 0, 0, 0);
        bookingEnd.setHours(0, 0, 0, 0);

        if (start < bookingEnd && end > bookingStart) {
            isConflict = true;
            break;
        }
    }

    if (isConflict) {
        return res.status(400).json({
            message: "Property not available"
        });
    }
    //apply time AFTER validation
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    checkInDate.setHours(12, 0, 0, 0);
    checkOutDate.setHours(11, 0, 0, 0);

    const nights = (end - start) / (1000 * 60 * 60 * 24);
    const totalPrice = listing.price * nights;

    const booking = await Booking.create({
        listing: listingId,
        checkIn: checkInDate,
        checkOut: checkOutDate,
        user: req.user._id,
        nights,
        guests,
        totalPrice
    });

    res.json({ message: "Booking successful", booking });
};