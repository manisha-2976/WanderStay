const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const imageController = require("../controllers/image.js");
const { isLoggedIn } = require("../middleware.js");
const multer = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });



router.post("/:id/image/upload/:roomName", isLoggedIn, upload.array("images"), wrapAsync(imageController.uploadRoomImages));

router.delete("/:id/image/:imageId", isLoggedIn, wrapAsync(imageController.deleteRoomImage));

module.exports = router;