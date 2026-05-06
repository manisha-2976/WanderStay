import { useState, useEffect } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import "./Calendar.css";

export const Calendar = ({ fullyBookedDates, onDateChange, selectedDates, onClose }) => {
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
      startDate: selectedDates?.startDate || new Date(),
      endDate: selectedDates?.endDate || selectedDates?.startDate || new Date(),
      key: "selection"
    }
  ];

  const handleSelect = (item) => {
    const { startDate, endDate } = item.selection;
    const startKey = startDate?.toLocaleDateString("en-CA");

    if (fullyBookedDates?.includes(startKey)) {
      alert("This date is fully booked");
      return;
    }

    if (!selectedDates?.startDate || (selectedDates?.startDate && selectedDates?.endDate)) {
      onDateChange({
        startDate,
        endDate: null
      });
      return;
    }

    onDateChange(item.selection);

    if (startDate && endDate) {
      setTimeout(() => {
        onClose();   // call parent to close calendar
      }, 400);
    }
  };

  const handleClear = () => {
    onDateChange({ startDate: null, endDate: null });
  };

  return (
    <div className={`bg-white rounded-4 ${monthsToShow === 1 ? "single-month" : ""}`}>
      <DateRange
        ranges={range}
        onChange={handleSelect}
        minDate={new Date()}
        months={monthsToShow}
        direction="horizontal"
        moveRangeOnFirstSelection={false}
        retainEndDateOnFirstSelection={false}
        rangeColors={["#000"]}
        showDateDisplay={false}
        showMonthAndYearPickers={false}
      />

      <div className="m-0 text-center">
        <button onClick={handleClear}
          className="cursor-pointer fw-semibold bg-white border-0 mt-0 mb-3"
        >
          Clear dates
        </button>
      </div>
    </div>
  );
};