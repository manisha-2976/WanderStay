import axios from "axios";
import { useMemo, useState } from "react";
import { Calendar } from "./Calendar";

export const BookingCard = ({
  listing,
  selectedDates,
  setSelectedDates,
  fullyBookedDates
}) => {

  const [showCalendar, setShowCalendar] = useState(false);
  const [guests, setGuests] = useState(1);

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
      return alert("Select dates");
    }
    try {
      const check = await axios.post(
        "http://localhost:3001/listing/checkAvailability",
        {
          listingId: listing._id,
          checkIn: selectedDates.startDate,
          checkOut: selectedDates.endDate
        }, { withCredentials: true });

      if (!check.data.available) {
        return alert("Dates not available");
      }

      await axios.post("http://localhost:3001/listing/book",
        {
          listingId: listing._id,
          checkIn: selectedDates.startDate,
          checkOut: selectedDates.endDate,
          guests
        }, { withCredentials: true });

      alert("Booking successful!");

    } catch (err) {
      console.log(err);
      if (err.response && err.response.data?.message) {
        console.log(err.response.data.message);
      } else {
        alert("Booking failed");
      }
    }
  };

  return (
    <div>
      <div className="w-100 col-12 col-md-6 col-lg-4 d-flex justify-content-end">

        <div className="p-4 rounded-4 shadow bg-white "
         style={{ border: "1px solid #ddd", maxWidth: "", }}>
          {nights > 0 && (
            <h6 className="fw-semibold">
              ₹{totalPrice.toLocaleString()} for {nights} nights
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
                  {selectedDates?.startDate
                    ? new Date(selectedDates.startDate).toLocaleDateString()
                    : "Add date"}
                </div>
              </div>

              <div className="flex-fill p-2 pe-4">
                <p className="fw-semibold mb-0">Check-Out</p>
                <div>
                  {selectedDates?.endDate
                    ? new Date(selectedDates.endDate).toLocaleDateString()
                    : "Add date"}
                </div>
              </div>

            </div>

            {/* guests */}
            <div className="border-top p-2">

              <p className="ps-2">Guest</p>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-100 p-1 border-0"
              >
                <option value={1}>1 guest</option>
                <option value={2}>2 guests</option>
                <option value={3}>3 guests</option>
                <option value={4}>4 guests</option>
              </select>

            </div>
          </div>

          {/* reserve button */}
          <button
            className="btn btn-danger w-100 mt-3"
            onClick={handleReserve}
          >
            Reserve
          </button>
        </div>
      </div>

      {showCalendar && (
        <div className="position-relative rounded-4 bg-white shadow p-2" style={{ top: "-170px" }}>
          <div className="">
            <Calendar
              fullyBookedDates={fullyBookedDates || []}
              onDateChange={setSelectedDates}
              selectedDates={selectedDates}
            />
          </div>
        </div>
      )}
    </div>
  );
};