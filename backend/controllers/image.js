const Listing = require("../models/listings.js");
const multer = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });
const cloudinary = require("cloudinary").v2;


module.exports.uploadRoomImages = async (req, res) => {
    const { id, roomName } = req.params;
    const listing = await Listing.findById(id);
    const category = roomName.toLowerCase();

    const newImages = req.files.map(file => ({
        url: file.path,
        filename: file.filename,
        category: category
    }));

    listing.images.push(...newImages);
    await listing.save();
    res.json({ success: true, images: listing.images });
}

module.exports.deleteRoomImage = async (req, res) => {
    const { id, imageId } = req.params;
    const listing = await Listing.findById(id);
    const image = listing.images.id(imageId);
    if (!image) {
        return res.status(404).json({ error: "Image not found" });
    }

    // delete from cloudinary
    await cloudinary.uploader.destroy(image.filename);

    // remove from DB
    listing.images.pull(imageId);
    await listing.save();
    res.json({ success: true });
}