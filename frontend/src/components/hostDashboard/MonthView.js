import React, { useEffect, useState } from "react"
import { format } from "date-fns"
import { DayCell } from "./DayCell"
import axios from "axios"

export const MonthView = ({ days, onSelect, selectedDate }) => {

  if (!days || days.length === 0) return null

  const firstDay = new Date(days[0].date).getDay()

  const emptyCells = Array(firstDay).fill(null)

  const monthName = format(new Date(days[0].date), "MMMM yyyy")

  return (

    <div className="rounded-4">
      <h3 className="text-start fw-semibold mb-2">{monthName}</h3>
      <div className="weekdays">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="month-grid">

        {emptyCells.map((_, i) => (
          <div key={"empty" + i}></div>
        ))}

        {days.map(day => (
          <DayCell key={day.date} day={day}
          onSelect={onSelect}
          selectedDate={selectedDate}
          />
        ))}

      </div>

    </div>

  )

}