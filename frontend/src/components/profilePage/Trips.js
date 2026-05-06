import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

export const Trips = () => {
  const [bookings, setBookings] = useState([]);
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

  if (bookings.length === 0) {
    return (
      <div className='ps-4 pt-2'>
        <h2 className='mb-4 mt-4 fw-bold'>Trips</h2>
        <p>You have no upcoming trips.</p>
      </div>
    );
  }

  return (
    <div className='curr-trip mb-5'>
      <h2 className='fw-bold mb-4'>Trips</h2>

      <div className='row trip-header mb-0 fw-semibold m-0'>
        <div className='col-md-5 ps-0'>Listing</div>
        <div className='col-md-4 p-0'>Date</div>
        <div className='col-md-1 '>Payment</div>
        <div className='col-md-2 text-end'>Status</div>
      </div>

      {bookings.map((booking, index) => {
        const now = new Date();
        const checkOutDate = new Date(booking.checkOut);
        checkOutDate.setHours(11, 0, 0, 0);
        const isTripCompleted = now > checkOutDate;

        return (
        !isTripCompleted &&
          (<div className='trip-content m-0'>
            <div className='border-bottom'>
              <div className='trip row m-0 pb-4 pt-3'>
                <div className="col-5 col-md-5 d-flex gap-3 align-items-center ps-0">

                  <img src={booking.listing.images[0].url} className="card-img-top" alt="listing img" style={{ height: "4rem", width: "5rem" }} />

                  <div className='pe-0 me-0 trip-title'>
                    <p className='mb-0 fw-bolder fs-6'>{booking.listing.title}</p>
                    <p className='mb-0'><i class="fa-solid fa-location-dot"></i> {booking.listing.street}</p>
                    <p className='mb-0'> <i class="fa-solid fa-user-group"></i> Guests: {booking.guests}</p>
                    <p className='mb-0'><b>Total</b>: {booking.totalPrice.toLocaleString("en-IN")}</p>
                  </div>
                </div>

                <div className='col-4 col-md-4 d-flex gap-3 p-0 align-items-center'>
                  <div>
                    <h6 className='mb-1 fw-semibold'>check-In</h6>
                    <p className='mb-0'>{new Date(booking.checkIn).toLocaleDateString("en-CA")}</p>
                  </div>

                  <div>
                    <h6 className='mb-1 fw-semibold'>check-out</h6>
                    <p className='mb-0'>{new Date(booking.checkOut).toLocaleDateString("en-CA")}</p>
                  </div>
                </div>

                <div className='col-1 col-md-1 d-flex align-items-center paid'>
                  <p className='mb-0 text-primary'>paid</p>
                </div>

                <div className='col-2 col-md-2 d-flex align-items-center pe-0 justify-content-end'>
                  <p className='mb-0 text-success'>Confirmed</p>
                </div>
              </div>

              <div className='d-flex gap-2 text-white'>
                <Link to={`/listing/${booking.listing._id}`} className='text-decoration-none text-white'>
                  <p className='bg-white text-black border p-2 rounded'>Trip details</p>
                </Link>
                <p className='bg-primary cursor-pointer p-2 rounded'>Contact Owner</p>
              </div>
            </div>
          </div>)
        );
      })}
    </div>
  )
}
