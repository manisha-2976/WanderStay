import React from "react"
import { format } from "date-fns"

export const DayCell = ({ day, onSelect, selectedDate }) => {

  const isSelected = selectedDate === day.date;
  const formatPrice = (price) => {
  if (price >= 1000) {
    return (price / 1000).toFixed(price >= 10000 ? 0 : 1) + "k";
  }
  return price;
};

  return (

    <div className={`day-cell 
        ${day.blocked ? "blocked" : ""}
        ${isSelected ? "selected" : ""}
      `}
      onClick={() => onSelect(day)}
    >

      <div className="mb-2">
        {format(new Date(day.date), "d")}
      </div>

      <div className="day-price">
       {formatPrice(day.price)}
      </div>

    </div>

  );

};