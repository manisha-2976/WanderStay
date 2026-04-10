import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from "axios"
import {  useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";


export const HostCalendar = () => {
    const [listings, setListings] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchListings();
    }, [])

    const fetchListings = async () => {
        try {
            const res = await axios.get(
                `${process.env.REACT_APP_API_URL}/host/listings`,
                { withCredentials: true }
            );
            setListings(res.data);
        } catch (err) {
            console.log(err);
            const message = err.response?.data?.message || "Server error";
            console.log(message);
        }
    };

    const navListing = listings.find(
        (listing) => listing._id === id
    );

    useEffect(() => {
        if (!id && listings.length > 0) {
            navigate(`listing/${listings[0]._id}`, { replace: true });
        }
    }, [listings, id]);


    return (
         <div className='host-calendar-container'>

            {navListing?.images?.length > 0 && (
                <Link
                    to={`/host/calendar/listing/${navListing?._id}`}
                    style={{ top: "-6.5rem", left: "2rem", zIndex: 1050 }}
                    className="position-relative d-lg-none"
                >
                    <img
                        src={navListing.images[0].url}
                        alt="listing img"
                        className={`mb-4 rounded ${id === navListing._id ? "shadow" : ""}`}
                        style={{ height: "2rem", width: "2rem" }}
                    />
                </Link>
            )}


            <div className='p-3 scroll-container me-3 d-none d-lg-block' style={{ maxHeight: "85vh" }}>
                {listings.map((listing, index) => {

                    return (
                        <Link key={listing._id} to={`/host/calendar/listing/${listing?._id}`} >
                            <div>
                                <img src={listing.images[0].url} alt="listing img"
                                    className={`mb-4 rounded-4 ${id === listing._id ? "shadow" : ""}`}
                                    style={{ height: "90px", width: "100%", objectFit: "cover" }} />
                            </div>
                        </Link>
                    );
                })}
            </div>

            <div className='host-content'>
                <Outlet />
            </div>

        </div>
    )
}
