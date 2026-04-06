import React from 'react'
import { Link, useLocation } from "react-router-dom";

export const HostNavbar = () => {
    const location = useLocation();

    const menuClass = "menu";
    const activeMenuClass = "menu selected";

    const isActive = (path) => location.pathname.startsWith(path);

    return (
        <nav className="navbar navbar-expand-md bg-body-light border-bottom sticky-top">
            <div className="container-fluid d-flex">

                <Link className="navbar-brand w-25" to="/">
                    <i className="fa-regular fa-compass"></i>
                </Link>

                <div className="ms-auto gap-5 pe-5 navbar-nav mt-3">

                    <Link className="custom-link" to="/host">
                        <p className={isActive("/host") && !isActive("/host/calendar") && !isActive("/host/listings") ? activeMenuClass : menuClass}>
                            Today
                        </p>
                    </Link>

                    <Link className="custom-link" to="/host/calendar">
                        <p className={isActive("/host/calendar") ? activeMenuClass : menuClass}>
                            Calendar
                        </p>
                    </Link>

                    <Link className="custom-link" to="/host/listings">
                        <p className={isActive("/host/listings") ? activeMenuClass : menuClass}>
                            Listings
                        </p>
                    </Link>

                </div>

                <div className="navbar-nav ms-auto">
                    <Link className="nav-link" to="/"><b>Switch to travelling</b></Link>
                    <Link className="nav-link" to="/hosting/profile"><b>Profile</b></Link>
                    <Link className="nav-link" to="/hosting/logout">Log out</Link>
                </div>

            </div>
        </nav>
    )
}