const Booking = require("../models/bookings.js");
// const getDatesInRange = require("../utils/dateUtils.js")
const Listing = require("../models/listings.js");

const getStayDateKeys = (checkIn, checkOut) => {
    const dates = [];
    const start = new Date(checkIn);
    const end = new Date(checkOut);

    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);

    for (let d = new Date(start); d < end; d.setDate(d.getDate() + 1)) {
        dates.push(d.toLocaleDateString("en-CA"));
    }

    return dates;
};

const hasLegacyDateConflict = async (listingId, start, end) => {
    const legacyBookings = await Booking.find({
        listing: listingId,
        $or: [
            { bookedDates: { $exists: false } },
            { bookedDates: { $size: 0 } }
        ]
    });

    return legacyBookings.some(booking => {
        const bookingStart = new Date(booking.checkIn);
        const bookingEnd = new Date(booking.checkOut);

        bookingStart.setHours(0, 0, 0, 0);
        bookingEnd.setHours(0, 0, 0, 0);

        return start < bookingEnd && end > bookingStart;
    });
};


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
        const stayDates = booking.bookedDates?.length
            ? booking.bookedDates
            : getStayDateKeys(booking.checkIn, booking.checkOut);

        stayDates.forEach(date => bookedDates.add(date));
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
    const requestedDates = getStayDateKeys(start, end);
    const dateConflict = await Booking.exists({
        listing: listingId,
        bookedDates: { $in: requestedDates }
    });

    if (dateConflict) {
        return res.json({ available: false });
    }

    if (await hasLegacyDateConflict(listingId, start, end)) {
        return res.json({ available: false });
    }

    res.json({ available: true });
};


module.exports.book = async (req, res) => {
    const { listingId, checkIn, checkOut, guests } = req.body;
    const listing = await Listing.findById(listingId);

    if (!listing) {
        return res.status(404).json({
            message: "Listing not found"
        });
    }

    const start = new Date(checkIn);
    const end = new Date(checkOut);
    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);
    if (end <= start) {
        return res.status(400).json({
            message: "Check-out must be after check-in"
        });
    }

    const requestedDates = getStayDateKeys(start, end);
    const isConflict = await Booking.exists({
        listing: listingId,
        bookedDates: { $in: requestedDates }
    });

    if (isConflict) {
        return res.status(400).json({
            message: "Property not available"
        });
    }

    if (await hasLegacyDateConflict(listingId, start, end)) {
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

    try {
        const booking = await Booking.create({
            listing: listingId,
            checkIn: checkInDate,
            checkOut: checkOutDate,
            bookedDates: requestedDates,
            user: req.user._id,
            nights,
            guests,
            totalPrice
        });

        res.json({ message: "Booking successful", booking });
    } catch (err) {
        if (err.code === 11000) {
            return res.status(409).json({
                message: "Property was just booked for one or more selected dates"
            });
        }

        throw err;
    }
};
