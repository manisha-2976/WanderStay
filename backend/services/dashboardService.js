const Listing = require("../models/listings");
const Booking = require("../models/bookings");


// MAIN SERVICE FUNCTION

exports.getOverviewData = async (userId) => {

  const listings = await Listing.find({ host: userId }).select("_id title");
  const listingIds = listings.map(l => l._id);

  const bookings = await Booking.find({ listing: { $in: listingIds } })
    .select("checkIn checkOut totalPrice listing user guests")
    .populate({ path: "listing", select: "title" })
    .populate({ path: "user", select: "username firstName lastName" });

  return {
    dashboard: getDashboardData(bookings),
    analytics: getAnalyticsData(listings, bookings),
    chartData: getChartData(bookings),
    bookingCounts: getCalendarData(bookings)
  };
};



const getDashboardData = (bookings) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const now = new Date();

  const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
  const monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  const todaysCheckins = bookings.filter(b =>
    new Date(b.checkIn) >= today && new Date(b.checkIn) < tomorrow
  );

  const todaysCheckouts = bookings.filter(b =>
    new Date(b.checkOut) >= today && new Date(b.checkOut) < tomorrow
  );

  const upcoming = bookings.filter(b =>
    new Date(b.checkIn) >= tomorrow
  );

  const activeGuests = bookings.filter(b =>
    new Date(b.checkIn) <= now &&
    new Date(b.checkOut) > now
  );

  const monthlyBookings = bookings.filter(b =>
    new Date(b.checkIn) >= monthStart &&
    new Date(b.checkIn) <= monthEnd
  );

  const monthlyEarnings = monthlyBookings.reduce(
    (sum, b) => sum + b.totalPrice,
    0
  );

  return {
    todaysCheckins,
    todaysCheckouts,
    upcomingReservations: upcoming.length,
    activeGuests: activeGuests.length,
    monthlyEarnings,
    stayingGuests: activeGuests
  };
};



const getAnalyticsData = (listings, bookings) => {
  const analyticsMap = {};

  listings.forEach(l => {
    analyticsMap[l._id] = {
      title: l.title,
      bookings: 0,
      revenue: 0,
      bookedDays: 0
    };
  });

  bookings.forEach(b => {
    const id = b.listing._id.toString();

    if (!analyticsMap[id]) return;

    analyticsMap[id].bookings += 1;
    analyticsMap[id].revenue += b.totalPrice;

    const diff =
      (new Date(b.checkOut) - new Date(b.checkIn)) /
      (1000 * 60 * 60 * 24);

    analyticsMap[id].bookedDays += diff;
  });

  return Object.values(analyticsMap).map(a => ({
    title: a.title,
    bookings: a.bookings,
    revenue: a.revenue,
    occupancy: Math.round((a.bookedDays / 30) * 100)
  }));
};



const getChartData = (bookings) => {
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const revenue = new Array(12).fill(0);

  bookings.forEach(b => {
    const date = new Date(b.checkIn);
    const monthIndex = date.getMonth();
    revenue[monthIndex] += b.totalPrice;
  });

  return months.map((m, i) => ({
    month: m,
    revenue: revenue[i]
  }));
};


const getCalendarData = (bookings) => {
  const bookingCounts = {};

  bookings.forEach(b => {
    const key = new Date(b.checkIn).toLocaleDateString("en-CA");
    bookingCounts[key] = (bookingCounts[key] || 0) + 1;
  });

  return bookingCounts;
};