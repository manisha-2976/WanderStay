const express = require("express");
const router = express.Router();
const { overview } = require("../controllers/hostDashboard");
const { isLoggedIn } = require("../middleware.js");
const wrapAsync = require("../utils/wrapAsync.js");


// router.get("/dashboard", isLoggedIn, wrapAsync(hostDashboardController.dashboard));
// router.get("/analytics", isLoggedIn, wrapAsync(hostDashboardController.listingAnalytics));
// router.get("/monthly-earnings", isLoggedIn, wrapAsync(hostDashboardController.listingChart));

router.get("/overview", isLoggedIn, wrapAsync(overview));

module.exports = router;