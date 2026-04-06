import React, { useEffect, useState } from 'react'
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { user, logout, fetchUser } = useContext(AuthContext);
  const [listings, setListings] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await axios.get("http://localhost:3001/host/listings", { withCredentials: true });
        setListings(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchListings();
  }, []);

  const handleLogout = async (data) => {
    try {
      const res = await axios.get("http://localhost:3001/users/logout", { withCredentials: true });
      console.log("user logged out")
      await fetchUser();



      // window.location.href = "/users/login"
    } catch (err) {
      console.log(err);
      const message = err.response?.data?.message || "Server error";
      console.log("SERVER ERROR:", message);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;

    try {
      const res = await axios.post(
        "http://localhost:3001/api/ai-search",
        { query: searchQuery }
      );

      // 👉 send results to Listings page
      navigate("/", { state: { listings: res.data.listings } });

    } catch (err) {
      console.log("Search error:", err);
    }
  };


  return (
    <>
      <nav className="navbar navbar-expand-md bg-body-light border-bottom sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><i className="fa-regular fa-compass"></i></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" aria-current="page" to="/">WanderStay</Link>
            </div>

            <div className="navbar-nav ms-auto ">
              <form className="d-flex ms-auto" onSubmit={handleSearch}>
                <input
                  className="form-control me-2 p-2" style={{ width: "450px", fontSize: "14px" }}
                  type="search"
                  placeholder="Search.... Beach villa in goa for 4 persons with pool"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="btn btn-outline-dark" type="submit">
                  Search
                </button>
              </form>
            </div>


            <div className="navbar-nav ms-auto">
              {listings.length > 0 && user ? (
                <Link className="nav-link" to="/host">
                  <b>Switch to Hosting</b>
                </Link>
              ) :
                <Link className="nav-link" to="/newListing">
                  <b>Become a Host</b>
                </Link>
              }

              {user ? <div className='ps-2 pe-2'><Link className="nav-link avatar" to="/users/profile">
                M
              </Link> </div> : ""}
              {user ? "" : <Link className="nav-link" to="/users/signup"><b>Sign up</b></Link>}

              {user ? "" : <Link className="nav-link" to="/users/login"><b>Log in</b></Link>}

              {!user ? "" : <Link className="nav-link" onClick={handleLogout}>Log out</Link>}

              {/* <Link className="nav-link" to="/host">
                <i class="fa-solid fa-bars"></i>
              </Link> */}

            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
