import {React, useState} from 'react'
import { Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom'
import { AboutMe } from './AboutMe';
import { Trips } from './Trips';

export const Profile = () => {

    const [selectedMenu, setSelectedMenu] = useState(0);
    
         const handleMenuClick = (index) => {
            setSelectedMenu(index);
         }

        const activeMenuClass = "link";


    return (
        <div className='container d-flex ps-0 pe-0'>
            <div className='border-end profile-menu mb-3 pt-5 d-none d-md-block'>
                <h1><b>Profile</b></h1>
                <div className='mt-5' id='profile-menu'>
                    <Link className='nav-link' to="/users/profile"  onClick={() => handleMenuClick(0)}>
                    <p className={selectedMenu === 0 ? activeMenuClass : ""}> <b>About me</b> </p>
                    </Link>
                    <Link className='nav-link' to="/users/profile/trips"  onClick={() => handleMenuClick(1)}>
                    <p className={selectedMenu === 1 ? activeMenuClass : ""}> <b>Past trips</b> </p>
                    </Link>
                </div>
            </div>
            <div className="profile-content">
                <Routes>
                    <Route path="/" element={<AboutMe />} />
                    <Route path="/trips" element={<Trips />} />
                </Routes>
            </div>

        </div>
    )
}
