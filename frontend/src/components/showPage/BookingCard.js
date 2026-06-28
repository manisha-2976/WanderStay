import axios from "axios";
import { lazy, Suspense, useMemo, useState, useRef, useEffect } from "react";
// import { Calendar } from "./Calendar";
import toast from "react-hot-toast";
const Calendar = lazy(() =>
  import("./Calendar").then(module => ({
    default: module.Calendar
  }))
);

export const BookingCard = ({
  listing,
  selectedDates,
  setSelectedDates,
  fullyBookedDates
}) => {

  const [showCalendar, setShowCalendar] = useState(false);
  const [guests, setGuests] = useState(1);
  const [isBooking, setIsBooking] = useState(false);

  const calendarRef = useRef();

  // calculate nights
  const nights = useMemo(() => {
    if (!selectedDates?.startDate || !selectedDates?.endDate) return 0;

    const diff =
      new Date(selectedDates.endDate) - new Date(selectedDates.startDate);

    return diff / (1000 * 60 * 60 * 24);
  }, [selectedDates]);

  // total price
  const totalPrice = nights * (listing?.price || 0);

  const handleReserve = async () => {
    if (!selectedDates?.startDate || !selectedDates?.endDate) {
      toast.error("Please select dates");
      return;
    }

    if (isBooking) return;

    setIsBooking(true);
    const toastId = toast.loading("Checking availability...");

    try {
      const check = await axios.post(
        `${process.env.REACT_APP_API_URL}/listing/checkAvailability`,
        {
          listingId: listing._id,
          checkIn: selectedDates.startDate,
          checkOut: selectedDates.endDate
        }, { withCredentials: true });

      if (!check.data.available) {
        toast.error("Dates are not available", { id: toastId });
        return;
      }

      await axios.post(`${process.env.REACT_APP_API_URL}/listing/book`,
        {
          listingId: listing._id,
          checkIn: selectedDates.startDate,
          checkOut: selectedDates.endDate,
          guests
        }, { withCredentials: true });

      toast.success("Booking confirmed!", { id: toastId });

    } catch (err) {
      if (err.response && err.response.data?.message) {
        toast.error(err.response.data.message, { id: toastId });
      } else {
        toast.error("Booking failed. Please try again", { id: toastId });
      }
    } finally {
      setIsBooking(false);
    }
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  return (
    <div>
      <div className="w-100 col-12 col-md-6 col-lg-4 d-flex justify-content-end">

        <div className="p-4 rounded-4 shadow bg-white "
          style={{ border: "1px solid #ddd", maxWidth: "", }}>
          {nights > 0 && (
            <h6 className="fw-semibold">
              &#8377;{totalPrice.toLocaleString()} for {nights} nights
            </h6>
          )}

          {/* checkin checkout box */}
          <div className="rounded mt-3 overflow-hidden" style={{ border: "1px solid #ccc" }}>

            {/* dates */}
            <div className="d-flex cursor-pointer"
              onClick={() => setShowCalendar(!showCalendar)}
            >

              <div className="flex-fill border-end p-2 pe-4">
                <p className="fw-semibold mb-0">Check-In</p>
                <div>
                  <small>
                    {selectedDates?.startDate
                      ? new Date(selectedDates.startDate).toLocaleDateString("en-GB").replace(/\//g, "-")
                      : "Add date"}
                  </small>
                </div>
              </div>

              <div className="flex-fill p-2 pe-4">
                <p className="fw-semibold mb-0">Check-Out</p>
                <div>
                  <small>
                    {selectedDates?.endDate
                      ? new Date(selectedDates.endDate).toLocaleDateString("en-GB").replace(/\//g, "-")
                      : "Add date"}
                  </small>
                </div>
              </div>

            </div>

            {/* guests */}
            <div className="border-top p-2">
              <label className="">Guest</label>
              <input
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-100 p-1 border-0"
                style={{ outline: "none" }}
                placeholder="Add guests"
              />
            </div>
          </div>

          {/* reserve button */}
          <button disabled={isBooking}
            className="btn reserve-btn bg-primary text-white w-100 mt-3"
            onClick={handleReserve}
          >
            {isBooking ? "Reserving..." : "Reserve"}
          </button>
        </div>
      </div>

      {showCalendar && (
        <div ref={calendarRef} className="position-relative rounded-4 bg-white shadow p-2">
          <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
            <Calendar
              fullyBookedDates={fullyBookedDates || []}
              onDateChange={setSelectedDates}
              selectedDates={selectedDates}
              onClose={() => setShowCalendar(false)}
            />
          </Suspense>
        </div>
      )}
    </div>
  );
};
