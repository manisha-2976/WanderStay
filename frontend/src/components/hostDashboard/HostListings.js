import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

export const HostListings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
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

    fetchListings();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${process.env.REACT_APP_API_URL}/listing/${id}`, { withCredentials: true });
      setListings(prev => prev.filter(listing => listing._id !== id));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='container'>
      <div className='heading'>
        <h2 className='mb-4 mt-4 fw-bold'>Your Listings</h2>
        <Link className="link" to="/newListing"><i class="fa-solid fa-plus"></i></Link>
      </div>
      <div className='row mb-4 fw-semibold' style={{ width: "97%" }}>
        <div className='col-md-5'>Listing</div>
        <div className='col-md-2'>Type</div>
        <div className='col-md-3'>Location</div>
        <div className='col-md-2'>Status</div>
      </div>

      {listings.map((listing) => {

        return (
          <div key={listing._id} className='d-flex justify-content-between align-items-center w-100 mb-4'>
            <Link to={`/host/listing/${listing?._id}/edit`} className='hostCard' style={{ width: "95%" }}>
              <div className='row pt-2 pb-2 rounded-4'>

                <div className="col-md-5 d-flex gap-4 align-items-center">

                  <img src={listing?.images?.[0]?.url} className="card-img-top" alt="listing img" style={{ height: "5rem", width: "5rem" }} />
                  <p className='mb-0 fw-bolder'>{listing?.title}</p>

                </div>

                <div className='col-md-2 d-flex align-items-center'>
                  <p className='mb-0'>{listing?.propertyType}</p>
                </div>

                <div className='col-md-3 d-flex align-items-center'>
                  <p className='mb-0'>{listing?.street}&nbsp; &nbsp;{listing?.city}</p>
                </div>

                <div className='col-md-2 d-flex align-items-center justify-content-start gap-3'>
                  <p className='mb-0'>hiiii mnbm mnbm</p>
                  <i class="fa-solid fa-angle-right"></i>
                </div>

              </div>
            </Link>

            <div  style={{ cursor: "pointer" }} onClick={() => handleDelete(listing._id)}><i className="fa-regular fs-5 fa-trash-can"></i></div>

          </div>
        );
      })}

    </div>
  )
}
