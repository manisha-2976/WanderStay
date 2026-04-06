const Listing = require("../models/listings.js");
const Booking = require("../models/bookings.js");



module.exports.dashboard = async (req, res, next) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    // console.log(today.toLocaleDateString("en-CA"))

    const now = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
    const monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    const listings = await Listing.find({ host: req.user._id });

    const listingIds = listings.map(listing => listing._id);

    const bookings = await Booking.find({ listing: { $in: listingIds } })
        .populate("listing").populate("user");

    const todaysCheckins = bookings.filter(booking =>
        new Date(booking.checkIn) >= today && new Date(booking.checkIn) < tomorrow
    );

    const todaysCheckouts = bookings.filter(booking =>
        new Date(booking.checkOut) >= today && new Date(booking.checkOut) < tomorrow
    );
    // Upcoming reservations
    const upcoming = bookings.filter(booking =>
        new Date(booking.checkIn) >= tomorrow
    );

    const activeGuests = bookings.filter(booking =>
        new Date(booking.checkIn) <= now &&
        new Date(booking.checkOut) > now
    );
    // Monthly earnings
    const monthlyBookings = bookings.filter(booking =>
        new Date(booking.checkIn) >= monthStart &&
        new Date(booking.checkIn) <= monthEnd
    );

    const monthlyEarnings = monthlyBookings.reduce(
        (sum, booking) => sum + booking.totalPrice, 0
    );

    res.json({
        todaysCheckins,
        todaysCheckouts,
        upcomingReservations: upcoming.length,
        activeGuests: activeGuests.length,
        monthlyEarnings,
        stayingGuests: activeGuests
    });
};

module.exports.listingAnalytics = async(req, res, next) => {

    const listings = await Listing.find({ host: req.user._id });

    const result = [];

    for (let listing of listings) {

      const bookings = await Booking.find({ listing: listing._id });

      const totalBookings = bookings.length;

      const revenue = bookings.reduce(
        (sum, b) => sum + b.totalPrice,
        0
      );

      // occupancy calculation
      const totalDays = 30;

      let bookedDays = 0;

      bookings.forEach(b => {
        const diff =
          (new Date(b.checkOut) - new Date(b.checkIn)) /
          (1000 * 60 * 60 * 24);

        bookedDays += diff;
      });

      const occupancy = Math.round((bookedDays / totalDays) * 100);

      result.push({
        title: listing.title,
        bookings: totalBookings,
        occupancy,
        revenue
      });
    }

    console.log(result);

    res.json(result);
};

module.exports.listingChart = async (req, res, next) => {

  const bookings = await Booking.find();

  const months = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec"
  ];

  const revenue = new Array(12).fill(0);

  bookings.forEach(b => {

    const date = new Date(b.checkIn);

    const monthIndex = date.getMonth();

    revenue[monthIndex] += b.totalPrice;

  });

  const chartData = months.map((m,i)=>({
    month: m,
    revenue: revenue[i]
  }));

  res.json(chartData);

};