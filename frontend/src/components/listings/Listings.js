import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

export const Listings = () => {
const location = useLocation();
const [allListings, setAllListings] = useState([]);

  useEffect(() => {
  if (location.state?.listings) {
    setAllListings(location.state.listings);
  } else {
    axios.get(`${process.env.REACT_APP_API_URL}`).then((res) => {
      setAllListings(res.data);
    });
  }
}, [location.state]);


  return (
    <div className='container'>
      <h3>Listings</h3>
      <div className='row row-cols-lg-4 row-cols-md-3 row-cols-sm-2'>
        {allListings.map((listing, index) => {

          return ( 
            // key={listing._id}
            <Link 
              to={`/listing/${listing._id}`} style={{ textDecoration: "none" }} >
              <div className="card listing-card">
                <img src={listing?.images?.[0]?.url} className="card-img-top" alt="listing img" style={{ height: "15rem" }}/>
                <div className="card-body">
                  <p className="card-text"><b>{listing?.title}</b> <br /> &#8377;{listing?.price?.toLocaleString("en-IN")}/night</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  )
}

