const Listing = require("../models/listings.js");
const Booking = require("../models/bookings.js");
// const { startOfMonth, endOfMonth, eachDayOfInterval } = require("date-fns");
const { startOfYear, endOfYear, eachDayOfInterval } = require("date-fns");

module.exports.miniCalendar = async (req, res, next) => {

  const listings = await Listing.find({ host: req.user._id });
  const listingIds = listings.map(listing => listing._id);
  const bookings = await Booking.find({ listing: { $in: listingIds } });
  const dateCounts = {};

  bookings.forEach((booking) => {

    const start = new Date(booking.checkIn);
    const end = new Date(booking.checkOut);
    for (
      let date = new Date(start);
      date < end;
      date.setDate(date.getDate() + 1)
    ) {
      const key = date.toLocaleDateString("en-CA");

      if (!dateCounts[key]) {
        dateCounts[key] = 0;
      }
      dateCounts[key]++;
    }
  });
  res.json(dateCounts);
};

// module.exports.listingCalendar = async (req, res) => {
//   const { month, year } = req.query;
//   const { id } = req.params;

//   const listing = await Listing.findById(id)
//     .select("price weekendPrice customPrices blockedDates")
//     .lean();

//   const start = startOfMonth(new Date(year, month - 1));
//   const end = endOfMonth(start);
//   const days = eachDayOfInterval({ start, end });

//   // FAST LOOKUPS
//   const customMap = new Map(
//     listing.customPrices.map(d => [
//       new Date(d.date).toDateString(),
//       d.price
//     ])
//   );

//   const blockedSet = new Set(
//     listing.blockedDates.map(d =>
//       new Date(d).toDateString()
//     )
//   );

//   const calendar = days.map(day => {
//     const isWeekend = day.getDay() === 0 || day.getDay() === 6;

//     let price = isWeekend
//       ? listing.weekendPrice
//       : listing.price;

//     const custom = customMap.get(day.toDateString());
//     if (custom) price = custom;

//     const blocked = blockedSet.has(day.toDateString());

//     return {
//       date: day,
//       price,
//       blocked
//     };
//   });

//   res.json(calendar);
// };

module.exports.yearCalendar = async (req, res) => {
  const { id } = req.params;
  const year = new Date().getFullYear();

  const listing = await Listing.findById(id)
    .select("price weekendPrice customPrices blockedDates")
    .lean();

  const start = startOfYear(new Date(year, 0));
  const end = endOfYear(start);
  const days = eachDayOfInterval({ start, end });

  // FAST LOOKUPS
  const customMap = new Map(
    listing.customPrices.map(d => [
      new Date(d.date).toDateString(),
      d.price
    ])
  );

  const blockedSet = new Set(
    listing.blockedDates.map(d =>
      new Date(d).toDateString()
    )
  );

  // GROUP BY MONTH
  const result = {};

  days.forEach(day => {
    const month = day.getMonth() + 1;

    if (!result[month]) result[month] = [];
    const isWeekend = day.getDay() === 0 || day.getDay() === 6;

    let price = isWeekend
      ? listing.weekendPrice
      : listing.price;

    const custom = customMap.get(day.toDateString());
    if (custom) price = custom;
    const blocked = blockedSet.has(day.toDateString());

    result[month].push({
      date: day,
      price,
      blocked
    });
  });


  res.json(result);
};


module.exports.blockDate = async (req, res) => {
  const { dates } = req.body
  await Listing.findByIdAndUpdate(req.params.id,
    {
      $addToSet: {
        blockedDates: { $each: dates }
      }
    }
  )
  res.json({ message: "Dates blocked" })
}


module.exports.unblockDate = async (req, res) => {
  const { dates } = req.body
  await Listing.findByIdAndUpdate(req.params.id,
    {
      $pull: {
        blockedDates: { $in: dates }
      }
    }
  )
  res.json({ message: "Dates unblocked" })
}

module.exports.showPrice = async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  res.json({
    price: listing.price,
    weekendPrice: listing.weekendPrice,
    weeklyDiscount: listing.weeklyDiscount,
    monthlyDiscount: listing.monthlyDiscount
  });
};

module.exports.setListingPrice = async (req, res, next) => {

  const { dates, price } = req.body;

  for (let date of dates) {

    // Step 1: Try update existing date
    const result = await Listing.updateOne(
      {
        _id: req.params.id,
        "customPrices.date": new Date(date)
      },
      {
        $set: { "customPrices.$.price": price }
      }
    );

    // Step 2: If not found → insert new
    if (result.matchedCount === 0) {

      await Listing.updateOne(
        { _id: req.params.id },
        {
          $push: {
            customPrices: {
              date: new Date(date),
              price
            }
          }
        }
      );

    }

  }

  res.json({ message: "Price updated without duplicate" });

};

module.exports.setWeekendPrice = async (req, res) => {
  const updates = req.body; // dynamic fields
  await Listing.findByIdAndUpdate(req.params.id, { $set: updates });
  res.json({ message: "Updated successfully" });
};

module.exports.setCustomPrice = async (req, res) => {

  const { date } = req.query;
  const listing = await Listing.findById(req.params.id);

  const day = new Date(date);

  const isWeekend = day.getDay() === 0 || day.getDay() === 6;

  let price = isWeekend
    ? listing.weekendPrice
    : listing.price;

  const custom = listing.customPrices.find(
    d => new Date(d.date).toDateString() === day.toDateString()
  );

  if (custom) price = custom.price;

  const blocked = listing.blockedDates.some(
    d => new Date(d).toDateString() === day.toDateString()
  );

  res.json({
    date,
    price,
    blocked
  });
};