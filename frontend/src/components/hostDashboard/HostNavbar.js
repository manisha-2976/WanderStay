import { NavLink } from "react-router-dom";
import { useContext, useRef, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./HostNavbar.css"

export const HostNavbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const { user, logout } = useContext(AuthContext);
    const menuRef = useRef();

    const closeMenu = () => setOpenMenu(false);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpenMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            <nav className="navbar host-nav bg-light border-bottom sticky-top">
                <div className="container-fluid">
                    <NavLink className="navbar-brand d-flex align-items-center" to="/">
                        <i className="fa-brands fa-wordpress-simple fs-2 text-primary"></i>
                        <p className="m-0 p-0 fs-6">WanderStay</p>
                    </NavLink>

                    <div className="center-menu">
                        <NavLink to="/host" end
                            className={({ isActive }) => `${isActive ? "activeMenu selected" : "activeMenu"}`}
                        >
                            Today
                        </NavLink>

                        <NavLink to="/host/calendar"
                            className={({ isActive }) => `${isActive ? "activeMenu selected" : "activeMenu"}`}
                        >
                            Calendar
                        </NavLink>

                        <NavLink to="/host/listings"
                            className={({ isActive }) => `${isActive ? "activeMenu selected" : "activeMenu"}`}
                        >
                            Listings
                        </NavLink>
                    </div>

                    <div className='d-flex gap-2 align-items-center'>
                        <NavLink className="nav-link d-none d-lg-flex" to="/">
                            <b><small>Switch to travelling</small></b>
                        </NavLink>

                        <NavLink className="nav-link avatar d-none d-lg-flex" to="/users/profile">
                            {user?.firstName?.[0]?.toUpperCase()}
                        </NavLink>

                        <div ref={menuRef}>
                            <button className="navbar-toggler nav-toggler" type="button"
                                onClick={() => setOpenMenu(prev => !prev)}
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className={`custom-dropdown ${openMenu ? "show" : ""}`}>
                                <div className="navbar-nav ms-auto">
                                    <NavLink className="nav-link" to="/" onClick={closeMenu}>
                                        <i className="fa-brands fa-dropbox me-2"></i>Switch to travelling
                                    </NavLink>

                                    <NavLink className="nav-link d-flex align-items-center" to="/host/newListing" onClick={closeMenu}>
                                        <span><i className="fa-solid fa-plus pe-4"></i> </span>
                                        Create a new listing
                                    </NavLink>

                                    <NavLink className="nav-link" to="/users/profile" onClick={closeMenu}>
                                        <i className="fa-regular fa-user me-2"></i>Profile
                                    </NavLink>

                                    <NavLink className="nav-link" to="/" 
                                    onClick={() => {
                                        closeMenu();
                                        logout();
                                    }}>
                                        <i className="fa-solid fa-arrow-right-from-bracket me-2"></i>Log out
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
