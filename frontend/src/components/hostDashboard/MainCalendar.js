import { useEffect, useState } from "react"
import axios from "axios"
import { MonthView } from "./MonthView"
import { useParams, Link } from "react-router-dom";
import { PriceSetting } from "./PriceSetting";
import { CustomSettingsPanel } from "./CustomSettingsPanel";
import { useOutletContext } from "react-router-dom";
import "./MainCalendar.css"
import "./ListingSelectorOverlay.css"
import "./CustomPriceSettingOverlay.css"

export const MainCalendar = () => {

  const { listings } = useOutletContext();

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDayData, setSelectedDayData] = useState(null);
  const [showCustomPricePanel, setShowCustomPricePanel] = useState(false);
  const [showListingSelector, setShowListingSelector] = useState(false);

  const [calendarData, setCalendarData] = useState({})
  const { id } = useParams();

  const selectedListing = listings?.find(l => l._id === id);

  useEffect(() => {
    if (id) {
      setSelectedDate(null);
      setSelectedDayData(null);
      loadYearCalendar();
    }
  }, [id]);

  const loadYearCalendar = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/listing/${id}/calendar/year`,
        { withCredentials: true }
      );
      // console.log("API DATA:", res.data);
      setCalendarData(res.data);

    } catch (err) {
      console.log(err);
    }
  };

  const handleSelect = async (day) => {
    if (selectedDate === day.date) {
      setSelectedDate(null);
      setSelectedDayData(null);
      setShowCustomPricePanel(false);
      return;
    }
    setSelectedDate(day.date);

    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/listing/${id}/calendar/day?date=${day.date}`,
      { withCredentials: true }
    );

    setSelectedDayData(res.data);

    // show bottom panel for small to medium screen
    if (window.innerWidth < 992) {
      setShowCustomPricePanel(true);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mt-2 mobile-header">
        <div className="listing-selector"
          onClick={() => setShowListingSelector(true)}
        >
          {selectedListing && (
            <>
              <img
                src={selectedListing.image}
                alt=""
                className="listing-thumb"
              />
              <span className="listing-title">
                {selectedListing.title}
              </span>
              <i className="fa-solid fa-angle-down"></i>
            </>
          )}
        </div>

        <Link to={`/host/calendar/listing/${id}/price-settings`} className="nav-link">
          <i className="fa-solid fa-gear"></i>
        </Link>
      </div>

      <div className="main-calendar d-flex p-0 m-0">
        <div className="year-calendar">
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

        <div className="price-setting d-none d-lg-block">
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

      {/* CUSTOM PRICE SETTINGS MOBILE BOTTOM PANEL */}
      {showCustomPricePanel && selectedDate && (
        <div className="mobile-overlay">
          <div className="mobile-panel">
            <CustomSettingsPanel
              listingId={id}
              selectedDate={selectedDate}
              data={selectedDayData}
              reload={loadYearCalendar}
              onClose={() => {
                setShowCustomPricePanel(false);
                setSelectedDate(null);
                setSelectedDayData(null);
              }}
            />
          </div>
        </div>
      )}

      {/* LISTING SELECTOR MOBILE BOTTOM PANEL */}
      {showListingSelector && (
        <div className="mobile-overlay">
          <div className="listing-sheet">
            <div className="d-flex justify-content-between">
              <h6>Select Listing</h6>
              <span onClick={() => setShowListingSelector(false)}>
                <i class="fa-solid fa-xmark"></i>
              </span>
            </div>

            {listings.map(l => (
              <div
                key={l._id}
                className="listing-item"
                onClick={() => {
                  setShowListingSelector(false);
                  window.location.href = `/host/calendar/listing/${l._id}`;
                }}
              >
                <img src={l.image} alt="" />
                <span>{l.title}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>

  )

}