import React, { useEffect, useState } from "react";
import { MiniCalendar } from "./MiniCalendar";
import axios from "axios";
import { Analytics } from './Analytics';
import { Chart } from './Chart';
import "./Today.css";


export const Today = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/host/overview`, 
          { withCredentials: true });
        setData(res.data)
      } catch (err) {
        setError(err.response?.data?.message || "Unable to load dashboard");
      }
    };
    fetchData();
  }, []);

  if (error) return <p className="text-danger text-center mt-4">{error}</p>;
  if (!data) return null;

  return (
      <div className="today mb-5">
        <div className="stats-slider">
          <div className="card stat-card shadow-sm p-3">
            <p className="text-muted mb-1">Today's Check-ins</p>
            <div className="d-flex justify-content-between">
              <h3 className="fw-bold">{data.dashboard.todaysCheckins.length}</h3>
            </div>
          </div>

          <div className="card stat-card shadow-sm p-3">
            <p className="text-muted mb-1">Upcoming Reservations</p>
            <h3 className="fw-bold text-primary">{data.dashboard.upcomingReservations}</h3>
          </div>

          <div className="card stat-card shadow-sm p-3">
            <p className="text-muted mb-1">Active Guests</p>
            <h3 className="fw-bold text-success">{data.dashboard.activeGuests}</h3>
          </div>

          <div className="card stat-card shadow-sm p-3">
            <p className="text-muted mb-1">Monthly Earnings</p>
            <div className="d-flex justify-content-between">
              <h3 className="fw-bold">&#8377;{data.dashboard.monthlyEarnings.toLocaleString("en-IN")}</h3>
              <small className="text-success"></small>
            </div>
          </div>
        </div>

        {/* Checkins */}
        <div className="check-ins">
          <div className="card p-3 shadow-sm">
            <div className="d-flex justify-content-between mb-3">
              <h6>Check-ins Today</h6>
              <small className="text-primary">View All</small>
            </div>

            {data.dashboard.todaysCheckins.length === 0 ? (
              <p className="text-muted small">No check-ins today</p>
            ) : (
              data.dashboard.todaysCheckins.slice(0, 2).map((b, i) => (
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
              ))
            )}
          </div>


          {/* Checkouts */}
          <div className="card p-3 shadow-sm">
            <div className="d-flex justify-content-between mb-3">
              <h6>Check-outs Today</h6>
              <small className="text-primary">View All</small>
            </div>

            {data.dashboard.todaysCheckouts.length === 0 ? (
              <p className="text-muted small">No check-outs today</p>
            ) : (
              data.dashboard.todaysCheckouts.slice(0, 2).map((b, i) => (
                <div key={i} className="mb-3 d-flex justify-content-between">
                  <div>
                    <strong>{b.user.username}</strong>
                    <div className="text-muted small">{b.listing.title}</div>
                  </div>
                  <div>{new Date(b.checkOut).toLocaleTimeString()}</div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Calendar */}
        <div className="calendar-message">
          <div className="card p-3 pb-5 shadow-sm">
            <h6 className="mb-1">Calendar</h6>
            <div className="d-flex justify-content-center">
              <MiniCalendar bookingCounts={data.bookingCounts} />
            </div>
          </div>
        </div>

        {/* Guests */}
        <div className="current-guests card p-3 pb-3 shadow-sm">
          <div className="guests">
            <h6 className="mb-3">Guests Currently Staying</h6>
            {data.dashboard.stayingGuests.length === 0 ? (
              <p className="text-muted small text-center mt-2">
                No active guests
              </p>
            ) : (
              data.dashboard.stayingGuests.slice(0, 3).map((b, i) => (
                <div key={i} className="d-flex justify-content-between mb-2">
                  <div className="">
                    {b.user.firstName} {b.user.lastName} - {b.listing.title}
                  </div>
                  <div>
                    {new Date(b.checkOut).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long"
                    })}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="listing-performance">
          <div className="card p-3 shadow-sm">
            <Analytics analytics={data.analytics} />
          </div>

          <div className="card p-3 shadow-sm">
            <Chart chartData={data.chartData} />
          </div>
        </div>

      </div>
  );
};

