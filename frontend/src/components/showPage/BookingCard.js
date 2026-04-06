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

  // reserve button
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
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "12px",
        width: "350px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}
    >

      {/* price */}
      {/* <h3>
        ₹ {listing?.price} <span style={{ fontSize: "14px" }}>/ night</span>
      </h3> */}

      {/* total */}
      {nights > 0 && (
        <h4>
          ₹{totalPrice.toLocaleString()} for {nights} nights
        </h4>
      )}

      {/* checkin checkout box */}
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          marginTop: "15px",
          overflow: "hidden"
        }}
      >

        {/* dates */}
        <div
          style={{ display: "flex", cursor: "pointer" }}
          onClick={() => setShowCalendar(!showCalendar)}
        >

          <div style={{ flex: 1, padding: "10px", borderRight: "1px solid #ccc" }}>
            <p style={{ fontSize: "12px" }}>CHECK-IN</p>

            <strong>
              {selectedDates?.startDate
                ? new Date(selectedDates.startDate).toLocaleDateString()
                : "Add date"}
            </strong>
          </div>

          <div style={{ flex: 1, padding: "10px" }}>
            <p style={{ fontSize: "12px" }}>CHECKOUT</p>

            <strong>
              {selectedDates?.endDate
                ? new Date(selectedDates.endDate).toLocaleDateString()
                : "Add date"}
            </strong>
          </div>

        </div>

        {/* guests */}
        <div style={{ borderTop: "1px solid #ccc", padding: "10px" }}>

          <p style={{ fontSize: "12px" }}>GUESTS</p>

          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            style={{ width: "100%", padding: "5px" }}
          >
            <option value={1}>1 guest</option>
            <option value={2}>2 guests</option>
            <option value={3}>3 guests</option>
            <option value={4}>4 guests</option>
          </select>

        </div>

      </div>

      {/* calendar */}
      {showCalendar && (
        <div style={{ marginTop: "20px" }}>
          <Calendar
            fullyBookedDates={fullyBookedDates || []}
            onDateChange={setSelectedDates}
          />
        </div>
      )}

      {/* reserve button */}
      <button
        onClick={handleReserve}
        style={{
          width: "100%",
          marginTop: "20px",
          padding: "12px",
          background: "#ff385c",
          border: "none",
          color: "white",
          fontWeight: "bold",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Reserve
      </button>

      <p style={{ textAlign: "center", marginTop: "10px", fontSize: "14px" }}>
        You won't be charged yet
      </p>

    </div>
  );
};