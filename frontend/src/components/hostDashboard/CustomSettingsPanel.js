import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";

export const CustomSettingsPanel = ({
  listingId,
  selectedDate,
  data,
  reload,
  onClose
}) => {

  const [price, setPrice] = useState("");
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    if (data) {
      setPrice(data.price);
      setBlocked(data.blocked);
    }
  }, [data]);

  if (!selectedDate) return null;

  const blockDate = async () => {
    await axios.post(`http://localhost:3001/listing/${listingId}/block`, {dates: [selectedDate] });
    setBlocked(true);
    reload();
  };

  const unblockDate = async () => {
    await axios.post(`http://localhost:3001/listing/${listingId}/unblock`, {
      dates: [selectedDate]
    });

    setBlocked(false);
    reload();
  };

  const updatePrice = async () => {
    await axios.post(`http://localhost:3001/listing/${listingId}/set-custom-price`, {
      dates: [selectedDate],
      price: Number(price)
    });

    reload();
  };

  return (

    <div className="day-panel">

      <div className="panel-header">
        <div className="date-pill">
          {format(new Date(selectedDate), "d MMM")}
        </div>

        <button className="close-btn" onClick={onClose}>
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      {/* Availability */}
      <div className="panel-card">

        <div className="status">
          <span>
            {blocked ? "Blocked" : "Available"}
          </span>

          <span className={`dot ${blocked ? "red" : "green"}`}></span>
        </div>

        <div className="toggle">

          <button
            className={`btn ${blocked ? "active" : ""}`}
            onClick={blockDate}
          >
            <i class="fa-solid fa-xmark"></i>
          </button>

          <button
            className={`btn ${!blocked ? "active" : ""}`}
            onClick={unblockDate}
          >
            <i class="fa-solid fa-check"></i>
          </button>

        </div>

      </div>

      {/* Price */}
      <div className="panel-card">

        <p className="label">Price per night</p>

        <input
          className="price-input"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button className="save-btn" onClick={updatePrice}>
          Save Price
        </button>

      </div>

    </div>

  );
};