import React from "react"
import { format } from "date-fns"

export const DayCell = ({ day, onSelect, selectedDate }) => {

  const isSelected = selectedDate === day.date;

  return (

    <div
      className={`day-cell 
        ${day.blocked ? "blocked" : ""}
        ${isSelected ? "selected" : ""}
      `}
      onClick={() => onSelect(day)}
    >

      <div className="day-number">
        {format(new Date(day.date), "d")}
      </div>

      <div className="day-price">
        ₹{day.price}
      </div>

    </div>

  );

};