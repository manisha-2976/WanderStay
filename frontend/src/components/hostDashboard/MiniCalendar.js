import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useEffect, useState } from "react";
import axios from "axios";

export const MiniCalendar = () => {

    const [bookingCounts, setBookingCounts] = useState({});

    useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_URL}/mini-calendar`, { withCredentials: true })
            .then((res) => {
                setBookingCounts(res.data);
            });

    }, []);

    return (

        <div>

            <Calendar

                formatMonthYear={(locale, date) =>
                    date.toLocaleString("en-US", { month: "short", year: "numeric" })
                }

                tileClassName={({ date, view }) => {
                    if (view === "month") {

                        const key = date.toLocaleDateString("en-CA");
                        const count = bookingCounts[key];

                        if (count === 1) return "single-booking";
                        if (count > 1) return "multi-booking";

                    }
                }}

                tileContent={({ date, view }) => {

                    if (view === "month") {

                        const key = date.toLocaleDateString("en-CA");

                        const count = bookingCounts[key];

                        if (count) {

                            return (
                                <div className="booking-dot-container">
                                    <span className={count === 1 ? "dot-green" : "dot-orange"}></span>
                                    {count > 1 && <span className="dot-orange"></span>}
                                </div>
                            );

                        }

                    }

                }}

            />

        </div>
    );
}