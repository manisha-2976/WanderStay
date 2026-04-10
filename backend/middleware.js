const jwt = require("jsonwebtoken");
const User = require("../backend/models/user.js");
const {listingSchema, reviewSchema} = require("./schema.js");



module.exports.isLoggedIn = async(req, res, next) => {
 const token = req.cookies.token;
//  console.log(req.cookies);
//  console.log("Raw Header:", req.headers.cookie);

 if (!token) {
    console.log("no token")
    return res.status(401).json({ message: "Not authenticated" });
  }

 try{

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const user = await User.findById(decoded.id).select("-password");

  if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
  
  req.user = user;
  next();
  

 } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "Invalid token" });
  }
};


module.exports.validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    // console.log(result);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};