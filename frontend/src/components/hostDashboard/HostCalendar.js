import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from "axios"
import { Route, Routes, useNavigate } from 'react-router-dom'
import { MainCalendar } from './MainCalendar'
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";


export const HostCalendar = () => {
    const [listings, setListings] = useState([]);

    const { id } = useParams();
    console.log("id: ", id);
    const navigate = useNavigate();

    useEffect(() => {
        fetchListings();
    }, [])


    const fetchListings = async () => {
        try {
            const res = await axios.get(
                "http://localhost:3001/host/listings",
                { withCredentials: true }
            );

            setListings(res.data);
        } catch (err) {
            console.log(err);
            const message = err.response?.data?.message || "Server error";
            console.log(message);
        }
    };

    useEffect(() => {
        if (!id && listings.length > 0) {
            navigate(`listing/${listings[0]._id}`, { replace: true });
        }
    }, [listings, id]);


    return (
        <div className='m-5 mb-0 d-flex p-0 host-calendar'>


            <div className='pe-4'>
                {listings.map((listing, index) => {

                    return (
                        <Link key={listing._id} to={`/host/calendar/listing/${listing?._id}`}   className=''>
                            <div className={`rounded-4 mb-3 ${id === listing._id ? "shadow" : ""}`}>

                                <img src={listing.images[0].url} className="rounded-4" alt="listing img" style={{ height: "5rem", width: "6rem" }} />
                            </div>
                        </Link>
                    );
                })}
            </div>

            <div>
                <Outlet />
            </div>
            
        </div>
    )
}
