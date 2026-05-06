import { React, useState } from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import { Link } from 'react-router-dom'
import { AboutMe } from './AboutMe';
import { PastTrips } from './PastTrips';
import "./Profile.css"

export const Profile = () => {

    const location = useLocation()
    const isAbout = location.pathname === "/users/profile";
    const isPastTrips = location.pathname.startsWith("/users/profile/pastTrips");


    return (
        <div className='profile-container d-flex pt-0'>
            <div className='border-end profile-menu mb-3 pt-5'>
                <h1><b>Profile</b></h1>
                <div className='mt-5' id='profile-menu'>
                    <Link className='nav-link menu-item' to="/users/profile">
                        <p className={isAbout && "link"}> <b>About me</b> </p>
                    </Link>

                    <Link className='nav-link menu-item' to="/users/profile/pastTrips">
                        <p className={isPastTrips && "link"}> <b>Past trips</b> </p>
                    </Link>
                </div>
            </div>

            <div className="profile-content">
                <Routes>
                    <Route path="/" element={<AboutMe />} />
                    <Route path="/pastTrips" element={<PastTrips />} />
                </Routes>
            </div>

        </div>
    )
}
