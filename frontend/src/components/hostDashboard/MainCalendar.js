import React, { useEffect, useState } from "react"
import axios from "axios"
import { MonthView } from "./MonthView"
import { useParams } from "react-router-dom";
import { PriceSetting } from "./PriceSetting";
import { CustomSettingsPanel } from "./CustomSettingsPanel";

export const MainCalendar = () => {

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDayData, setSelectedDayData] = useState(null);

  const [calendarData, setCalendarData] = useState({})
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setSelectedDate(null);
      setSelectedDayData(null);
      loadYearCalendar();
    }
  }, [id]);


  const loadYearCalendar = async () => {

    const year = new Date().getFullYear();

    try {

      const requests = [];

      for (let month = 1; month <= 12; month++) {
        requests.push(
          axios.get(`http://localhost:3001/listing/${id}/calendar?month=${month}&year=${year}`,  { withCredentials: true })
        );
      }

      const responses = await Promise.all(requests);

      const data = {};

      responses.forEach((res, index) => {
        data[index + 1] = res.data;
      });

      setCalendarData(data);

    } catch (err) {
      console.log(err);
    }
  };

  const handleSelect = async (day) => {

    if (selectedDate === day.date) {
      setSelectedDate(null);
      setSelectedDayData(null);
      return;
    }

    setSelectedDate(day.date);

    const res = await axios.get(
      `http://localhost:3001/listing/${id}/calendar/day?date=${day.date}`, { withCredentials: true });

    setSelectedDayData(res.data);
  };

  return (

    <div className="main-calendar d-flex p-0 m-0">
      <div className="year-calendar overflow-y-auto">
        {Object.keys(calendarData).map(month => (

          <MonthView
            listingId={id}
            key={month}
            days={calendarData[month]}
            onSelect={handleSelect}
            selectedDate={selectedDate}
          />

        ))}
      </div>

      <div className="price-setting">
        {selectedDate ? (

          <CustomSettingsPanel
            listingId={id}
            selectedDate={selectedDate}
            data={selectedDayData}
            reload={loadYearCalendar}
            onClose={() => {
              setSelectedDate(null);
              setSelectedDayData(null);
            }}
          />

        ) : (

          <PriceSetting
            listingId={id}
            reload={loadYearCalendar}
          />

        )}
      </div>

    </div>

  )

}