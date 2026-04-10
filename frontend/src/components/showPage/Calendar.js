import { useState, useEffect } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import "./Calendar.css";

export const Calendar = ({ fullyBookedDates, onDateChange, selectedDates }) => {
  const [monthsToShow, setMonthsToShow] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setMonthsToShow(1);
      } else {
        setMonthsToShow(2);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  // Create range from selectedDates prop
  const range = [
    {
      startDate: selectedDates?.startDate || null,
      endDate: selectedDates?.endDate || null,
      key: "selection"
    }
  ];

  const handleSelect = (item) => {
    const { startDate } = item.selection;
    const startKey = startDate?.toLocaleDateString("en-CA");

    if (fullyBookedDates?.includes(startKey)) {
      alert("This date is fully booked");
      return;
    }

    onDateChange(item.selection);
  };

  const handleClear = () => {
    onDateChange({ startDate: null, endDate: null });
  };

  return (
    <div className={`bg-white ${monthsToShow === 1 ? "single-month" : ""}`}>
      <DateRange
        ranges={range}
        onChange={handleSelect}
        minDate={new Date()}
        months={monthsToShow}
        direction="horizontal"
        moveRangeOnFirstSelection={false}
        rangeColors={["#000"]}
        showDateDisplay={false}
        showMonthAndYearPickers={false}
      />

      <div style={{ marginTop: "0", textAlign: "right", paddingRight: "4.5rem" }}>
        <button onClick={handleClear}
          className="cursor-pointer fw-semibold bg-white border-0"
        >
          Clear dates
        </button>
      </div>
    </div>
  );
};