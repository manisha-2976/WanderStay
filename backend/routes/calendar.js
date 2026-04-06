const express = require("express");
const router = express.Router();
const calendarController = require("../controllers/calendar.js");
const { isLoggedIn } = require("../middleware.js");
const wrapAsync = require("../utils/wrapAsync.js");

router.get("/mini-calendar", isLoggedIn, wrapAsync(calendarController.miniCalendar));
router.get("/listing/:id/calendar", isLoggedIn, wrapAsync(calendarController.listingCalendar));
router.post("/listing/:id/block", wrapAsync(calendarController.blockDate));
router.post("/listing/:id/unblock",  wrapAsync(calendarController.unblockDate));
router.post("/listing/:id/set-custom-price",  wrapAsync(calendarController.setListingPrice));
router.get("/listing/:id/get/price",  wrapAsync(calendarController.showPrice));
router.patch("/listing/:id/price",  wrapAsync(calendarController.setWeekendPrice));
router.get("/listing/:id/calendar/day",  wrapAsync(calendarController.setCustomPrice));

module.exports = router;