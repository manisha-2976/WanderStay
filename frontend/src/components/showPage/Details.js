import { lazy, Suspense, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Calendar } from "./Calendar";
import { BookingCard } from "./BookingCard";
import { amenitiesMap, safetyMap } from "./AmenitiesIcons";
import { FaRandom } from "react-icons/fa";
import { Rating } from "react-simple-star-rating";
import "./Details.css";

const Mapbox = lazy(() => import("./Mapbox").then(module => ({ default: module.Mapbox })));

const normalizeKey = (item) => item?.toLowerCase().replace(/\s+/g, "_");

const FeatureList = ({ className, title, items, definitions, showUnknown = false }) => {
  if (items.length === 0) return null;

  return (
    <section className={className}>
      <h6 className="fw-semibold">{title}</h6>
      <div className="amenities-container">
        {items.map((item, index) => {
          const feature = definitions[normalizeKey(item)];

          if (!feature && !showUnknown) return null;

          return (
            <div key={`${item}-${index}`} className="amenity-box">
              <span className="icon">{feature?.icon || <FaRandom />}</span>
              <span className="label">{feature?.label || item}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export const Details = () => {
  const { id } = useParams();

  const [listing, setListing] = useState(null);
  const [fullyBookedDates, setFullyBookedDates] = useState([]);
  const [selectedDates, setSelectedDates] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [listingRes, calendarRes] = await Promise.all([
          axios.get(`${process.env.REACT_APP_API_URL}/listing/${id}`),
          axios.get(`${process.env.REACT_APP_API_URL}/listing/calendar/${id}`)
        ]);

        setListing(listingRes.data);
        setFullyBookedDates(calendarRes.data.bookedDates || []);

      } catch {
        setError("Unable to load listing details");
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    return <p className="text-danger text-center mt-4">{error}</p>;
  }

  if (!listing) {
    return null;
  }

  const amenitiesList = Array.isArray(listing.amenities)
    ? listing.amenities
    : [];

  const safetyList = Array.isArray(listing.safetyItems)
    ? listing.safetyItems
    : [];

  const [primaryImage, secondaryImage] = listing.images || [];

  return (
    <div className="mt-3">
      <div className="details-container p-5 pt-3">
        <h4><b>{listing.title}</b></h4>

        <div className="border-bottom mb-5 pb-5">

          <div className="row mt-1 g-2 mb-2">
            <div className={secondaryImage ? "col-12 col-md-6" : "col-12"}>
              <img loading="eager"
                fetchPriority="high"
                decoding="async"
                width="800"
                height="600"
                src={primaryImage?.url} alt={listing.title} className="w-100 show-img" />
            </div>

            {secondaryImage && (
              <div className="col-md-6 d-none d-md-block">
                <img
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                  src={secondaryImage.url} alt={`${listing.title} view`} className="w-100 show-img" />
              </div>
            )}
          </div>

          <div className="row m-0">
            <div className="col-12 col-md-7 col-lg-7 p-0">
              <h5 className="card-text mb-1"><b>
                {listing.street}, {listing.city}, {listing.country}</b>
              </h5>
              <div className="listing-facts d-flex gap-3">
                <p>{listing.guest} guests</p>
                <p>{listing.bedroom} bedroom</p>
                <p>{listing.bed} bed</p>
                <p>{listing.bathroom} bathroom</p>
              </div>
              <h6 className="card-text mt-2 fw-semibold">&#8377; {listing.price?.toLocaleString("en-IN")}/night</h6>

              <div className="d-flex pt-3 mb-4 mt-4 gap-4 border-bottom border-top pb-3">
                <img src={primaryImage?.url} alt="" className="host-avatar rounded-5" />
                <div className="pt-2">
                  <h6 className="mb-0">hosted by {listing.host?.firstName} {listing.host?.lastName}</h6>
                  <small>super host . trusted 1 year</small>
                </div>
              </div>

              <p className="card-text listing-description">
                {listing.description?.replace(/\.\s*/g, ".\n\n")}
              </p>

              <FeatureList
                className="mt-3"
                title="What this place offers"
                items={amenitiesList}
                definitions={amenitiesMap}
              />

              <FeatureList
                className="mt-4"
                title="Safety items"
                items={safetyList}
                definitions={safetyMap}
                showUnknown
              />

              <div className="mt-5 detPage-calendar">
                <Calendar
                  fullyBookedDates={fullyBookedDates}
                  onDateChange={setSelectedDates}
                  selectedDates={selectedDates}
                  onClose={() => { }}
                />
              </div>
            </div>

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

        <div className="map-section mb-5">
          <Suspense fallback={<div className="map-container map-placeholder bg-light" />}>
            <Mapbox
              coordinates={listing.geometry?.coordinates}
              city={listing.city}
            />
          </Suspense>
        </div>

        <div className="mb-5">
          <h5><b>All Reviews</b></h5>

          <div className="row g-3">

            {listing.reviews?.map((review, index) => (

              <div
                key={review._id || index}
                className="col-12 col-sm-6 col-lg-5"
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
