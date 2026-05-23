import { useState, useRef, useEffect } from "react";
import { Calendar } from "./showPage/Calendar";
import "./SearchBar.css"

export const SearchBar = ({ onSearch }) => {

    const [searchQuery, setSearchQuery] = useState("");
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDates, setSelectedDates] = useState({ startDate: null, endDate: null });
    const [guests, setGuests] = useState("");

    const calendarRef = useRef();
    const fullyBookedDates = []

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({
            query: searchQuery,
            startDate: selectedDates?.startDate,
            endDate: selectedDates?.endDate,
            guests: guests,
        });   // send to Navbar
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (calendarRef.current && !calendarRef.current.contains(event.target)) {
                setShowCalendar(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="search-container">
            <form className="search-form" onSubmit={handleSubmit}>
                <div className='d-flex filter border shadow-sm'>
                    <div className='hover d-flex align-items-center ps-3'>
                        <span><i className="fa-solid fa-wand-magic-sparkles fs-5 me-2"></i></span>
                        <div className='d-flex flex-column dest-box'>
                            <label className='fw-semibold'>Where</label>
                            <input
                                className=""
                                type='text'
                                placeholder='Beach villa in goa for 4 guests with pool'
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className='d-flex second-row'>
                        <div onClick={() => setShowCalendar(prev => !prev)}
                            className='hover d-flex date-box'>
                            <div className="d-flex flex-column justify-content-center">
                                <label className="fw-semibold">Check-In</label>
                                <input readOnly type=""
                                    value={selectedDates?.startDate ? selectedDates.startDate.toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "short",
                                    }) : ""}
                                    placeholder='Add date' />
                            </div>

                            <div className="d-flex flex-column justify-content-center">
                                <label className='fw-semibold'>Check-out</label>
                                <input readOnly type=''
                                    value={selectedDates?.endDate ? selectedDates.endDate.toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "short",
                                    }) : ""}
                                    placeholder='Add date' />
                            </div>
                        </div>

                        <div className='hover d-flex guest-box gap-3'>
                            <div className='d-flex flex-column justify-content-center'>
                                <label className='fw-semibold'>Who</label>
                                <input type='number'
                                    value={guests} 
                                    placeholder='Add guests'
                                    onChange={(e) => setGuests(e.target.value)} />
                            </div>

                            <button type="submit" className="search-icon">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </form>

            {showCalendar && (
                <div className="search-calendar rounded-4 bg-white" ref={calendarRef}>
                    <Calendar fullyBookedDates={fullyBookedDates || []}
                        onDateChange={setSelectedDates}
                        selectedDates={selectedDates}
                        onClose={() => setShowCalendar(false)}
                    />
                </div>
            )}
        </div>
    )
}

