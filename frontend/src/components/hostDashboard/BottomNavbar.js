import React from 'react'
import { Link, useLocation, useParams } from "react-router-dom";

export const BottomNavbar = () => {
    const location = useLocation();

    const menuClass = "menu";
    const activeMenuClass = "menu selected";

    const isActive = (path) => location.pathname.startsWith(path);

    return (
        <div
            className="d-flex d-lg-none justify-content-around align-items-center bg-white border-top shadow"
            style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                width: "100vw",
                height: "60px",
                zIndex: 999999
            }}
        >
            <Link className="text-decoration-none text-center" to="/host">
                <p className={isActive("/host") && !isActive("/host/calendar") && !isActive("/host/listings") ? activeMenuClass : menuClass}>
                    Today
                </p>
            </Link>

            <Link className="text-decoration-none text-center" to="/host/calendar">
                <p className={isActive("/host/calendar") ? activeMenuClass : menuClass}>
                    Calendar
                </p>
            </Link>

            <Link className="text-decoration-none text-center" to="/host/listings">
                <p className={isActive("/host/listings") ? activeMenuClass : menuClass}>
                    Listings
                </p>
            </Link>
        </div>
  );
}
