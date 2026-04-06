import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export const Calendar = ({ fullyBookedDates, onDateChange }) => {

  const [range, setRange] = useState([
    {
      startDate: null,
      endDate: null,
      key: "selection"
    }
  ]);

  const handleSelect = (item) => {

    const { startDate } = item.selection;
    const startKey = startDate?.toLocaleDateString("en-CA");

    if (fullyBookedDates?.includes(startKey)) {
      alert("This date is fully booked");
      return;
    }
    setRange([item.selection]);
    onDateChange(item.selection);
  };

  const handleClear = () => {

    const cleared = {
      startDate: null,
      endDate: null,
      key: "selection"
    };

    setRange([cleared]);

    onDateChange({
      startDate: null,
      endDate: null
    });
  };

  return (
    <>
    <DateRange
      ranges={range}
      onChange={handleSelect}
      minDate={new Date()}
      months={2}
      direction="horizontal"
      moveRangeOnFirstSelection={false}
    />


      <div style={{ marginTop: "10px", textAlign: "left" }}>
        <button
          onClick={handleClear}
          style={{
            background: "none",
            border: "none",
            color: "#1b1a1aff",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Clear dates
        </button>
      </div>
      </>

  );
};