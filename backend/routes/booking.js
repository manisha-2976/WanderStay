const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const bookingController = require("../controllers/booking.js");
const { isLoggedIn } = require("../middleware.js");


router.get("/users/profile/bookings", isLoggedIn, wrapAsync(bookingController.booking));
router.get("/listing/calendar/:id", wrapAsync(bookingController.getBookedDates));
router.post("/listing/checkAvailability", isLoggedIn, wrapAsync(bookingController.checkAvailability));
router.post("/listing/book", isLoggedIn, wrapAsync(bookingController.book));

module.exports = router