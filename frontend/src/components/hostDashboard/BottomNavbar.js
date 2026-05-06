import React from 'react'
import { Link, useLocation, NavLink } from "react-router-dom";

export const BottomNavbar = () => {
    const location = useLocation();

    const menuClass = "menu";
    const activeMenuClass = "menu selected";

    const isActive = (path) => location.pathname.startsWith(path);

    return (
        <div
            className="d-block pt-3 d-md-none d-flex justify-content-around align-items-center bg-white border-top shadow"
            style={{
                position: "fixed",
                bottom: -1,
                left: 0,
                width: "100vw",
                height: "60px",
                zIndex: 1000,
            }}
        >
            <NavLink to="/host" end
                className={({ isActive }) => `text-center ${isActive ? "mobileMenu selected" : "mobileMenu"}`}
            >
                <i className="nav-icon fa-solid fa-bookmark"></i>
                <p>Today</p>
            </NavLink>

        
            <NavLink to="/host/calendar"
                className={({ isActive }) => `text-center ${isActive ? "mobileMenu selected" : "mobileMenu"}`}
            >
                <i className="nav-icon fa-regular fa-calendar"></i>
                <p>Calendar</p>
            </NavLink>

          
            <NavLink to="/host/listings"
                className={({ isActive }) => `text-center ${isActive ? "mobileMenu selected" : "mobileMenu"}`}
            >
                <i className="nav-icon fa-regular fa-square-caret-up"></i>
                <p>Listings</p>
            </NavLink>

            
            <NavLink to="/host/menu"
                className={({ isActive }) => `text-center ${isActive ? "mobileMenu selected" : "mobileMenu"}`}
            >
                <i className="nav-icon fa-solid fa-bars"></i>
                <p>Menu</p>
            </NavLink>
        </div>
    );
}
