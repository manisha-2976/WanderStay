const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const listingController = require("../controllers/listings.js");
const { isLoggedIn } = require("../middleware.js");
const multer = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });




// INDEX ROUTE
router.get("/", wrapAsync(listingController.index));

// CREATE ROUTE
router.post("/", isLoggedIn, upload.array('images', 20), listingController.createListing);

// SHOW ROUTE
router.get("/listing/:id", wrapAsync(listingController.showListing));
router.get("/host/listings", isLoggedIn, wrapAsync(listingController.hostListing));

// EDIT ROUTE
router.get("/host/listing/:id/edit", isLoggedIn, wrapAsync(listingController.editListing));

// UPDATE ROUTE
router.put("/listing/:id", isLoggedIn, wrapAsync(listingController.updateListing));

// DELETE ROUTE
router.delete("/listing/:id", isLoggedIn, wrapAsync(listingController.destroyListing));


module.exports = router;