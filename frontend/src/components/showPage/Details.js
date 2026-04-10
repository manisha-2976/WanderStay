import React, { useEffect, useState, } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Calendar } from "./Calendar";
import { BookingCard } from "./BookingCard";
import { Mapbox } from "./Mapbox";
import { amenitiesMap } from "./AmenitiesIcons";
import { safetyMap } from "./AmenitiesIcons";
import "./Details.css";

export const Details = () => {
  const { id } = useParams();

  const [listing, setListing] = useState(null);
  const [fullyBookedDates, setFullyBookedDates] = useState([]);
  const [selectedDates, setSelectedDates] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/listing/calendar/${id}`)
      .then(res => setFullyBookedDates(res.data.fullyBookedDates));
  }, [id]);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/listing/${id}`);
        setListing(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching listing:", error);
      }
    };
    fetchListing();
  }, [id]);

  if (!listing) {
    return null;
  }

  const amenitiesList = Array.isArray(listing?.amenities)
    ? listing.amenities
    : [];

  const safetyList = Array.isArray(listing?.safetyItems)
    ? listing.safetyItems
    : [];

  const normalizeKey = (item) => {
    return item?.toLowerCase().replace(/\s+/g, "_");
  };

  return (
    <div className="mt-3">
      <div className="container">
        <h3>
          {listing?.title}
        </h3>

        <div className="show-card listing-card border-bottom mb-5 pb-5">

          <div className="row g-2 mb-2">
            <div className="col-12 col-md-6">
              <img src={listing?.images?.[0]?.url} className="w-100 show-img" />
            </div>

            <div className="col-md-6 d-none d-md-block">
              <img src={listing?.images?.[1]?.url} className="w-100 show-img" />
            </div>
          </div>

          {/* LEFT PANEL*/}
          <div className="row m-0">
            <div className="col-12 col-md-7 col-lg-7 card-body">
              <p className="card-text mb-1">{listing?.street}, {listing?.city}, {listing?.country}</p>
              <div style={{ color: "rgb(14, 13, 13)" }} className="d-flex gap-3" >
                <span>{listing?.guest} guests</span>
                <span>{listing?.bedroom} bedroom</span>
                <span>{listing?.bed} bed</span>
                <span>{listing?.bathroom} bathroom</span>
              </div>
              <p className="card-text mt-2 fw-semibold">&#8377; {listing?.price?.toLocaleString("en-IN")}/night</p>

              <div className="d-flex pt-3 mb-4 mt-4 gap-4 border-bottom border-top pb-3">
                <img src={listing?.images?.[0]?.url} alt="Listing_image" style={{ height: "60px", width: "60px" }} className="rounded-5" />
                <div className="pt-2">
                  <h6 className="mb-0">hosted by {listing?.host?.firstName} {listing?.host?.lastName}</h6>
                  <small>super host . trusted 1 year</small>
                </div>
              </div>

              <p style={{ whiteSpace: "pre-line" }} className="card-text">
                {listing?.description?.replace(/\.\s*/g, ".\n\n")}
              </p>

              <div className="amenities-container mt-3">
                {amenitiesList.length > 0 ? <h5 className="fw-semibold">What this place offers</h5> : ""} <br></br>
                {amenitiesList.map((item, index) => {
                  const key = normalizeKey(item);
                  const amenity = amenitiesMap[key];

                  if (!amenity) return null;

                  return (
                    <div key={index} className="amenity-box">
                      <span className="icon">{amenity.icon}</span>
                      <span className="label">{amenity.label}</span>
                    </div>
                  );
                })}
              </div>

              <div className="amenities-container mt-4">
                {safetyList.length > 0 ? <h5 className="fw-semibold">Safety items</h5> : ""} <br></br>
                {safetyList.map((item, index) => {
                  const key = normalizeKey(item);
                  const safety = safetyMap[key];

                  if (!safety) {
                    return (
                      <div key={index} className="amenity-box">
                        <span><i class="fa-solid fa-shuffle"></i></span>
                        <span>{item}</span>
                      </div>
                    );
                  }
                  return (
                    <div key={index} className="amenity-box">
                      <span className="icon">{safety.icon}</span>
                      <span className="label">{safety.label}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5">
                <Calendar
                  fullyBookedDates={fullyBookedDates || []}
                  onDateChange={setSelectedDates}
                  selectedDates={selectedDates}
                />
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="col-12 col-md-5 col-lg-5 d-flex justify-content-end pe-0 pt-3 booking-card">
              <BookingCard
                listing={listing}
                selectedDates={selectedDates}
                setSelectedDates={setSelectedDates}
                fullyBookedDates={fullyBookedDates}
              />
            </div>
          </div>
        </div>

        <div className="mb-5">
          <Mapbox listing={listing} />
        </div>

        <div className="mb-5">
          <p> <b>All Reviews</b> </p>
          <div className="row">

            {listing?.reviews?.map((review, index) => (

              <div key={review._id || index} className="card p-3 col-5 mb-3 ms-3">
                <div className="card-body">
                  <h5 className="card-title">Jone Doe</h5>
                  <p className="card-text">{review.comment}</p>
                  <p className="card-text">{review.rating} stars</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
