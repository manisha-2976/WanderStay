import React, { useState, useEffect } from 'react'
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";

export const HostNavbar = () => {
    const location = useLocation();

    const menuClass = "menu";
    const activeMenuClass = "menu selected";

    const isActive = (path) => location.pathname.startsWith(path);

    return (
        <>
            <nav className="navbar navbar-expand-md bg-body-light border-bottom sticky-top">
                <div className="container-fluid bg-white">
                    <Link className="navbar-brand d-none d-md-block" to="/">
                        <i className="fa-regular fa-compass"></i>
                    </Link>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="gap-5 d-none d-lg-flex pe-5 navbar-nav mt-3">
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

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                        <div className="navbar-nav ms-auto">
                            <Link className="nav-link" to="/"><b>Switch to travelling</b></Link>
                            <Link className="nav-link" to="/hosting/profile"><b>Profile</b></Link>
                            <Link className="nav-link" to="/hosting/logout">Log out</Link>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}