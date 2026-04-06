const express = require("express");
const router = express.Router();
const hostDashboardController = require("../controllers/hostDashboard.js");
const { isLoggedIn } = require("../middleware.js");
const wrapAsync = require("../utils/wrapAsync.js");


router.get("/dashboard", isLoggedIn, wrapAsync(hostDashboardController.dashboard));
router.get("/analytics", isLoggedIn, wrapAsync(hostDashboardController.listingAnalytics));
router.get("/monthly-earnings", isLoggedIn, wrapAsync(hostDashboardController.listingChart));

module.exports = router;