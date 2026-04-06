const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const userController = require("../controllers/users.js");
const { isLoggedIn } = require("../middleware.js");


router.post("/signup", wrapAsync(userController.signup));

router.post("/login", wrapAsync(userController.login));

router.get("/logout", wrapAsync(userController.logout));

router.get("/me", isLoggedIn, userController.userDetail);

module.exports = router;