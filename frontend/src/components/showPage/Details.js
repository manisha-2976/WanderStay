import { useEffect, useState, } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Calendar } from "./Calendar";
import { BookingCard } from "./BookingCard";
import { Mapbox } from "./Mapbox";
import { amenitiesMap } from "./AmenitiesIcons";
import { safetyMap } from "./AmenitiesIcons";
import { Rating } from "react-simple-star-rating";
import "./Details.css";

export const Details = () => {
  const { id } = useParams();

  const [listing, setListing] = useState(null);
  const [fullyBookedDates, setFullyBookedDates] = useState([]);
  const [selectedDates, setSelectedDates] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [listingRes, calendarRes] = await Promise.all([
          axios.get(`${process.env.REACT_APP_API_URL}/listing/${id}`),
          axios.get(`${process.env.REACT_APP_API_URL}/listing/calendar/${id}`)
        ]);

        setListing(listingRes.data);
        setFullyBookedDates(calendarRes.data.fullyBookedDates);

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
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
      <div className="details-container p-5 pt-3">
        <h4> <b>{listing?.title}</b> </h4>

        <div className="show-card border-bottom mb-5 pb-5">

          <div className="row mt-1 g-2 mb-2 img-container">
            <div className="col-12 col-md-6">
              <img src={listing?.images?.[0]?.url} alt={listing?.title || "Listing"} className="w-100 show-img" />
            </div>

            <div className="col-md-6 d-none d-md-block">
              <img src={listing?.images?.[1]?.url} alt={`${listing?.title || "Listing"} view`} className="w-100 show-img" />
            </div>
          </div>

          {/* LEFT PANEL*/}
          <div className="row m-0">
            <div className="col-12 col-md-7 col-lg-7 p-0">
              <h5 className="card-text mb-1"><b>
                {listing?.street}, {listing?.city}, {listing?.country}</b>
              </h5>
              <div style={{ color: "rgb(14, 13, 13)" }} className="d-flex gap-3" >
                <p>{listing?.guest} guests</p>
                <p>{listing?.bedroom} bedroom</p>
                <p>{listing?.bed} bed</p>
                <p>{listing?.bathroom} bathroom</p>
              </div>
              <h6 className="card-text mt-2 fw-semibold">&#8377; {listing?.price?.toLocaleString("en-IN")}/night</h6>

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

              <div className="mt-3">
                {amenitiesList.length > 0 && <h6 className="fw-semibold amenities-heading">What this place offers</h6>}

                <div className="amenities-container">
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
              </div>

              <div className="amenities-container mt-4">
                {safetyList.length > 0 && <h6 className="fw-semibold">Safety items</h6>} <br></br>
                {safetyList.map((item, index) => {
                  const key = normalizeKey(item);
                  const safety = safetyMap[key];

                  if (!safety) {
                    return (
                      <div key={index} className="amenity-box">
                        <span><i className="fa-solid fa-shuffle"></i></span>
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

              <div className="mt-5 detPage-calendar">
                <Calendar
                  fullyBookedDates={fullyBookedDates || []}
                  onDateChange={setSelectedDates}
                  selectedDates={selectedDates}
                  onClose={() => {}}
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

        <div className="map mb-5">
          <Mapbox
            coordinates={listing?.geometry.coordinates}
            city={listing?.city}
          />
        </div>

        <div className="mb-5">
          <h5><b>All Reviews</b></h5>

          <div className="row g-3">

            {listing?.reviews?.map((review, index) => (

              <div
                key={review._id || index}
                className="col-12 col-sm-6 col-lg-5"  // responsive columns
              >
                <div className="card h-100 border-0 p-3">

                  <p className="mb-1 fw-semibold">
                    {review.user.firstName} {review.user.lastName}
                  </p>

                  <p className="d-flex align-items-center gap-2 text-muted mb-1 small">
                    <Rating
                      initialValue={review.rating}
                      size={18}
                      readonly
                      allowFraction
                    />
                    <span>
                      {new Date(review.createdAt).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric"
                      })}
                    </span>
                  </p>
                  <p className="mb-0 text-dark">{review.comment}</p>
                </div>
              </div>

            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
