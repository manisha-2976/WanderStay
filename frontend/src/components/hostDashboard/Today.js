import React, { useEffect, useState } from "react";
import { MiniCalendar } from "./MiniCalendar";
import axios from "axios";
import { Analytics } from './Analytics';
import { Chart } from './Chart';


export const Today = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3001/host/dashboard", { withCredentials: true });
        setData(res.data)
        // console.log(data)
      } catch (err) {
        console.log(err)
      }
    };
    fetchData();

  }, []);

  if (!data) return null;

  return (
    <div className="container p-0 mt-4 mb-4">


      {/* TODAY */}
      <div className="today">

        <div className="">
          <div className="card shadow-sm p-3">
            <p className="text-muted mb-1">Today's Check-ins</p>
            <div className="d-flex justify-content-between">
              <h3 className="fw-bold">{data.todaysCheckins.length}</h3>
              <small className="text-danger">↓ 2%</small>
            </div>
          </div>
        </div>

        <div className="">
          <div className="card shadow-sm p-3">
            <p className="text-muted mb-1">Upcoming Reservations</p>
            <h3 className="fw-bold text-primary">{data.upcomingReservations}</h3>
          </div>
        </div>

        <div className="">
          <div className="card shadow-sm p-3">
            <p className="text-muted mb-1">Active Guests</p>
            <h3 className="fw-bold text-success">{data.activeGuests}</h3>
          </div>
        </div>

        <div className="">
          <div className="card shadow-sm p-3">
            <p className="text-muted mb-1">Monthly Earnings</p>
            <div className="d-flex justify-content-between">
              <h3 className="fw-bold">₹{data.monthlyEarnings.toLocaleString("en-IN")}</h3>
              <small className="text-success">+12%</small>
            </div>
          </div>
        </div>

        {/* Checkins */}
        <div className="check-ins">

          <div className="card p-3 pb-4 shadow-sm">
            <div className="d-flex justify-content-between mb-3">
              <h6>Check-ins Today</h6>
              <small className="text-primary">View All</small>
            </div>

            {data.todaysCheckins.map((b, i) => (
              <div key={i} className="mb-3">
                <div className="d-flex justify-content-between">
                  <div>
                    <strong>{b.user.username}</strong>
                    <div className="text-muted small">{b.listing.title}</div>
                  </div>
                  <div>
                    <div>{new Date(b.checkIn).toLocaleTimeString()}</div>
                    <small className="text-warning">{b.guests}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>


          {/* Checkouts */}
          <div className="card p-3 pb-4 shadow-sm">

            <div className="d-flex justify-content-between mb-3">
              <h6>Check-outs Today</h6>
              <small className="text-primary">View All</small>
            </div>

            {data.todaysCheckouts.map((b, i) => (
              <div key={i} className="mb-3 d-flex justify-content-between">
                <div>
                  <strong>{b.user.username}</strong>
                  <div className="text-muted small">{b.listing.title}</div>
                </div>
                <div>{new Date(b.checkOut).toLocaleTimeString()}</div>
              </div>
            ))}

          </div>
        </div>

        {/* Calendar */}
        <div className="calendar-message">
          <div className="card calendar p-3 shadow-sm">
            <h6 className="mb-1">Calendar</h6>
            <div className="d-flex justify-content-center">
              <MiniCalendar />
            </div>
          </div>
        </div>

        {/* Guests */}
        <div className="current-guests card p-3 pb-3 shadow-sm">
          <div className="guests">
            <h6 className="mb-3">Guests Currently Staying</h6>
            {data.stayingGuests.map((b, i) => (
              <div key={i} className="d-flex justify-content-between mb-2">
                <div>{b.user.username} - {b.listing.title}</div>
                <div>{new Date(b.checkOut).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long"
                })}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="listing-performance">
          <div className="card p-3 shadow-sm">
            <Analytics />
          </div>

          <div className="card p-3 shadow-sm">
            <Chart />
          </div>
        </div>

      </div>
    </div>
  );
};

