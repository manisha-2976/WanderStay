import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { Review } from "../showPage/Review.js";

export const Trips = () => {
  const [bookings, setBookings] = useState([]);
  const [showReview, setShowReview] = useState(false);
  const [listingId, setListingId] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/users/profile/bookings",
          { withCredentials: true }
        );

        setBookings(res.data);
      } catch (err) {
        console.log(err);
        const message = err.response?.data?.message || "Server error";
        console.log(message);
      }
    };

    fetchBookings();
  }, []);

  console.log(showReview);

  if (bookings.length === 0) {
    return (
      <div className='ps-4 pt-2'>
        <h2 className='mb-4 mt-4 fw-bold'>Trips</h2>
        <p>You have no upcoming trips.</p>
      </div>
    );
  }

  return (
    <div className='ps-4 pt-2'>
      <h2 className='mb-4 mt-4 fw-bold'>Trips</h2>

      <div className='row mb-0 fw-semibold m-0'>
        <div className='col-md-5 ps-0'>Listing</div>
        <div className='col-md-3 p-0'>Date</div>
        <div className='col-md-2'>Payment</div>
        <div className='col-md-2'>Status</div>
      </div>

      {bookings.map((booking, index) => {
        const now = new Date();
        const checkOutDate = new Date(booking.checkOut);
        checkOutDate.setHours(11, 0, 0, 0);
        const isTripCompleted = now > checkOutDate;

        return (
          <div className='trip-container m-0'>
            <div className='border-bottom'>
              <div className='trip row m-0 pb-4 pt-3'>
                <div className="col-md-5 d-flex gap-3 align-items-center ps-0">

                  <img src={booking.listing.images[0].url} className="card-img-top" alt="listing img" style={{ height: "4rem", width: "5rem" }} />

                  <div className='pe-0 me-0 trip-content'>
                    <p className='mb-0 fw-bolder fs-6'>{booking.listing.title}</p>
                    <p className='mb-0'><i class="fa-solid fa-location-dot"></i> {booking.listing.street}</p>
                    <p className='mb-0'> <i class="fa-solid fa-user-group"></i> Guests: {booking.guests}</p>
                    <p className='mb-0'><b>Total</b>: {booking.totalPrice.toLocaleString("en-IN")}</p>
                  </div>
                </div>

                <div className='col-md-3 d-flex gap-3 p-0 align-items-center'>
                  <div>
                    <h6 className='mb-1 fw-semibold'>check-In</h6>
                    <p className='mb-0'>{new Date(booking.checkIn).toLocaleDateString("en-CA")}</p>
                  </div>

                  <div>
                    <h6 className='mb-1 fw-semibold'>check-out</h6>
                    <p className='mb-0'>{new Date(booking.checkOut).toLocaleDateString("en-CA")}</p>
                  </div>
                </div>

                <div className='col-md-2 d-flex align-items-center'>
                  <p className='mb-0'>paid</p>
                </div>

                <div className='col-md-2 d-flex align-items-center'>
                  <p className='mb-0'>hiiii mnbm</p>
                </div>
              </div>

              <div className='d-flex gap-2 text-white'>
                <Link to={`/listing/${booking.listing._id}`} className='text-decoration-none text-white'>
                  <p className='bg-white text-black border p-2 rounded'>Trip details</p>
                </Link>
                {isTripCompleted ?
                  (<p className='bg-white text-black border p-2 rounded' onClick={() => {
                    setListingId(booking.listing._id);
                    setShowReview(true);
                  }}>Add review</p>) :

                  (<p className='bg-white text-black border p-2 rounded'>You can post the review after the trip</p>)}

                  <p className='bg-white text-black border p-2 rounded' onClick={() => {
                    setListingId(booking.listing._id);
                    setShowReview(true);
                  }}>Add review</p>
                  
                <p className='bg-danger cursor-pointer p-2 rounded'>Contact Owner</p>
              </div>
            </div>
          </div>
        );
      })}
      {showReview && (
        <Review
          id={listingId}
          onClose={() => setShowReview(false)}
        />
      )}

    </div>
  )
}
