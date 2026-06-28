import { lazy, Suspense, useState, useRef, useEffect } from "react";
import { ReactComponent as SearchIcon } from "../assets/icons/magnifying-glass.svg";
import { ReactComponent as WandIcon } from "../assets/icons/wand-magic-sparkles.svg";
import "./SearchBar.css"

const SearchCalendar = lazy(() =>
    import("./showPage/Calendar").then((module) => ({
        default: module.Calendar
    }))
);

const CalendarLoader = () => (
    <div className="d-flex justify-content-center align-items-center p-4">
        <div className="spinner-border spinner-border-sm text-dark" role="status">
            <span className="visually-hidden">Loading calendar</span>
        </div>
    </div>
);

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
                        <WandIcon className="search-leading-icon" aria-hidden="true" focusable="false" />
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

                            <button type="submit" className="search-icon" aria-label="Search">
                                <SearchIcon className="search-submit-icon" aria-hidden="true" focusable="false" />
                            </button>
                        </div>
                    </div>
                </div>
            </form>

            {showCalendar && (
                <div className="search-calendar rounded-4 bg-white" ref={calendarRef}>
                    <Suspense fallback={<CalendarLoader />}>
                        <SearchCalendar fullyBookedDates={fullyBookedDates || []}
                            onDateChange={setSelectedDates}
                            selectedDates={selectedDates}
                            onClose={() => setShowCalendar(false)}
                        />
                    </Suspense>
                </div>
            )}
        </div>
    )
}

