import { useEffect, useState, useRef } from 'react'
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { SearchBar } from './SearchBar';
import { NavLink } from "react-router-dom";
import "./Navbar.css"

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [listings, setListings] = useState([]);
  const [openMenu, setOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const navigate = useNavigate();
  const menuRef = useRef();
  const location = useLocation();

  const closeMenu = () => setOpenMenu(false);

  const showSearch = location.pathname === "/" || location.pathname.startsWith("/listing/") ||
    location.pathname.startsWith("/search");

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/host/listings`,
          { withCredentials: true });
        setListings(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    if (user) {
      fetchListings();
    } else {
      setListings([]); // reset on logout
    }

  }, [user]);


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const handleSearch = (searchData) => {
    const { query, startDate, endDate, guests } = searchData;

    const params = new URLSearchParams();
    if (query) params.append("query", query);
    if (guests) params.append("guests", guests);
    if (startDate)
      params.append("startDate", new Date(startDate).toISOString());
    if (endDate)
      params.append("endDate", new Date(endDate).toISOString());

    navigate(`/search?${params.toString()}`);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isHide = isMobile &&
    (
      location.pathname.startsWith("/users/profile") ||
      location.pathname.startsWith("/users/trips") ||
      location.pathname.startsWith("/users/login") ||
      location.pathname.startsWith("/users/signup") 
    );

  // if (shouldHide) return null;


  return (
    <>
    {!isHide &&(
      <nav className="navbar bg-body-light sticky-top border-bottom">
        <div className="container-fluid ps-1 pe-1">
          <Link className="navbar-brand d-flex align-items-center m-0 ms-1" to="/">
            <i class="fa-brands fa-wordpress-simple fs-2 text-primary"></i>
          </Link>

          <div className="navbar-nav">
            <Link className="nav-link brand-name" aria-current="page" to="/">WanderStay</Link>
          </div>

          <div className="search-wrapper mx-auto">
            {showSearch && <SearchBar onSearch={handleSearch} />}
          </div>

          <div className="d-flex align-items-center me-2 d-none d-lg-flex fs-6">
            {listings.length > 0 && user ? (
              <Link className="nav-link me-3" to="/host">
                <b><small>Switch to Hosting</small></b>
              </Link>
            ) : (
              <Link className="nav-link me-3" to="/host/newListing">
                <b><small>Become a Host</small></b>
              </Link>
            )}

            {user && (
              <Link className="nav-link avatar" to="/users/profile">
                {user?.firstName?.[0]?.toUpperCase()}
              </Link>
            )}
          </div>

          <div ref={menuRef}>
            <button
              className="navbar-toggler nav-toggler"
              type="button"
              onClick={() => setOpenMenu(prev => !prev)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`custom-dropdown ${openMenu ? "show" : ""}`}>
              <div className="navbar-nav ms-auto">
                {listings.length > 0 && user ? (
                  <Link onClick={closeMenu} className="nav-link d-block d-lg-none" to="/host">
                    Switch to Hosting
                  </Link>
                ) : (
                  <Link onClick={closeMenu} className="nav-link d-block d-lg-none" to="/newListing">
                    Become a Host
                  </Link>
                )}

                {user && (
                  <div className='d-block d-lg-none'>
                    <Link onClick={closeMenu} className="nav-link" to="/users/profile">Profile</Link>
                  </div>
                )}

                {!user &&
                  <Link onClick={closeMenu} className="nav-link" to="/users/signup">Sign up</Link>}

                {!user && <Link onClick={closeMenu} className="nav-link" to="/users/login">Log in</Link>}

                {user && <Link onClick={closeMenu} className="nav-link" to="/users/trips">Trips</Link>}
                {user &&
                  <Link onClick={() => (closeMenu(), logout())} className="nav-link">Log out</Link>}
              </div>
            </div>
          </div>
        </div>
      </nav>
    )}

      <div
        className="pt-3 d-flex mobile-navbar justify-content-center gap-5 align-items-center bg-white border-top shadow"
        style={{
          position: "fixed",
          bottom: -1.5,
          left: 0,
          width: "100vw",
          height: "60px",
          zIndex: 1000,
        }}
      >
        <NavLink to="/"
          className={({ isActive }) => `navMenu text-center ${isActive ? "mobileMenu selected" : "mobileMenu"}`}
        >
          <i className="nav-icon fa-solid fa-rocket"></i>
          <p>Explore</p>
        </NavLink>

        {user && (
          <NavLink to="/users/trips"
            className={({ isActive }) => `text-center ${isActive ? "mobileMenu selected" : "mobileMenu"}`}
          >
            <span><i className="nav-icon fa-solid fa-suitcase"></i></span>
            <p>Trips</p>
          </NavLink>
        )}

        {user && (
          <NavLink to="/users/profile"
            className={({ isActive }) => `text-center ${isActive ? "mobileMenu selected" : "mobileMenu"}`}
          >
            <i className="nav-icon fa-regular fa-circle-user"></i>
            <p>Profile</p>
          </NavLink>
        )}

        {/* <NavLink to="/"
          className={({ isActive }) => `text-center ${isActive ? "mobileMenu selected" : "mobileMenu"}`}
        >
          <i className="nav-icon fa-solid fa-holly-berry"></i>
          <p>Plan Trip</p>
        </NavLink> */}

        {!user &&
          <NavLink to="/users/login"
            className={({ isActive }) => `text-center ${isActive ? "mobileMenu selected" : "mobileMenu"}`}
          >
            <span><i class="nav-icon nav-link fa-solid fa-suitcase"></i></span>
            <p>Log in</p>

          </NavLink>}
      </div>

    </>
  )
}
