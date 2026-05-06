import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { Review } from "../showPage/Review.js";

export const PastTrips = () => {
  const [bookings, setBookings] = useState([]);
  const [showReview, setShowReview] = useState(false);
  const [listingId, setListingId] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/users/profile/bookings`,
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

  if (bookings?.length === 0) {
    return (
      <div className='ps-4 pt-2'>
        <h2 className='mb-4 mt-4 fw-bold'>Trips</h2>
        <p>You have no past trips.</p>
      </div>
    );
  }

  return (
    <div className='trip-container'>
      <h2 className='mb-4 mt-4 fw-bold'>Past Trips</h2>

      <div className='d-flex justify-content-between trip-header mb-0 fw-semibold m-0'>
        <div className=''>Listing</div>
        <div className='trip-date'>Date</div>
      </div>

      {bookings.map((booking, index) => {
        const now = new Date();
        const checkOutDate = new Date(booking.checkOut);
        checkOutDate.setHours(11, 0, 0, 0);
        const isTripCompleted = now > checkOutDate;

        return (
          isTripCompleted &&

          <div className='border-bottom trip-content'>
            <div className='trip d-flex gap-3 m-0 pb-4 pt-3'>
              <div className="d-flex gap-3 align-items-center ps-0">
                <img src={booking.listing.images[0].url} className="card-img-top" alt="listing img" style={{ height: "4rem", width: "5rem" }} />

                <div className='pe-0 me-0 trip-title'>
                  <p className='mb-0 fw-bolder fs-6'>{booking.listing.title}</p>
                  <p className='mb-0'><i class="fa-solid fa-location-dot"></i> {booking.listing.street}</p>
                  <p className='mb-0'> <i class="fa-solid fa-user-group"></i> Guests: {booking.guests}</p>
                  <p className='mb-0'><b>Total</b>: {booking.totalPrice.toLocaleString("en-IN")}</p>
                </div>
              </div>

              <div className='d-flex gap-3 p-0 align-items-center'>
                <div>
                  <h6 className='mb-1 fw-semibold'>check-In</h6>
                  <p className='mb-0'>{new Date(booking.checkIn).toLocaleDateString("en-CA")}</p>
                </div>

                <div>
                  <h6 className='mb-1 fw-semibold'>check-out</h6>
                  <p className='mb-0'>{new Date(booking.checkOut).toLocaleDateString("en-CA")}</p>
                </div>
              </div>
            </div>

            <div className='d-flex gap-3 trip-details text-white'>
              <Link to={`/listing/${booking.listing._id}`} className='text-decoration-none text-white'>
                <p className='bg-white text-black border p-2 rounded'>Trip details</p>
              </Link>
              {isTripCompleted &&
                (<p className='bg-white text-black border p-2 rounded' onClick={() => {
                  setListingId(booking.listing._id);
                  setShowReview(true);
                }}>Add review</p>)}

              <p className='bg-primary cursor-pointer p-2 rounded'>Contact Owner</p>
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
