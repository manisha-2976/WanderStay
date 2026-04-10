if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");
const ExpressError = require("./utils/ExpressError.js")
const {listingSchema, reviewSchema} = require("./schema.js");

const cookieParser = require("cookie-parser");

const listingRouter = require("./routes/listings.js");
const imageRouter = require("./routes/image.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const bookingRouter = require("./routes/booking.js");
const hostDashboardRouter = require("./routes/hostDashboard.js");
const calendarRouter = require("./routes/calendar.js");
const hybridSearchRouter = require("./routes/hybridSearch.js");


const { date } = require("joi");


app.use(cors({
    origin: "https://wanderstay-frontend-fqg1.onrender.com/",
    credentials:true
}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dbUrl = process.env.ATLASDB_URL;

main()
.then(() => {
    console.log("connected to DB");
})
.catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(dbUrl);
}


const validateListing = (req, res, next) => {
    let {error} = listingSchema.validate(req.body);
    if(error) {
        let errMsg = error.details.map((el) => el.message).join(",")
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}
const validateReview = (req, res, next) => {
    console.log(req.body.listing);
    let {error} = reviewSchema.validate(req.body.listing);
    // console.log(error);
    if(error) {
        let errMsg = error.details.map((el) => el.message).join(",")
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}


app.use("/", listingRouter)
app.use("/listing", imageRouter)
app.use("/listing/:id/reviews", reviewRouter);
app.use("/users", userRouter);
app.use("/", bookingRouter);
app.use("/host", hostDashboardRouter);
app.use("/", calendarRouter);
app.use("/api", hybridSearchRouter);



app.use((err, req, res, next) => {
     console.error("Server Error:", err.message);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

app.listen(3001, () =>{
    console.log("server is listening to port 3001");
})