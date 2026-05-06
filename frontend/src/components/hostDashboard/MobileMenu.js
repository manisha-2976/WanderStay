import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const MobileMenu = () => {
    const { logout } = useContext(AuthContext);
    return (
        <div className="d-flex justify-content-center w-100">
            <div className="flex-fill p-4" style={{ maxWidth: "500px" }}>
                <h1 className='pt-4 pb-4'><b>Menu</b></h1>
                <div className="navbar-nav mobile-menu">
                    <Link className="nav-link justify-content-between d-flex gap-5 align-items-center" to="/">
                        <div><span><i className="fa-solid fa-grip-vertical me-3"></i></span>Switch to travelling</div>
                        <span><i className="fa-solid fa-chevron-right"></i></span>
                    </Link>

                    <Link className="nav-link d-flex gap-5 align-items-center justify-content-between" to="/host/newListing">
                        <div><span><i className="fa-solid fa-plus me-3"></i> </span>
                            Create a new listing</div>
                        <span><i className="fa-solid fa-chevron-right"></i></span>
                    </Link>

                    <Link className="nav-link d-flex gap-5 align-items-center justify-content-between" to="/users/profile">
                        <div><i className="fa-regular fa-user me-3"></i>Profile</div>
                        <span><i className="fa-solid fa-chevron-right"></i></span>
                    </Link>

                    <Link className="nav-link d-flex gap-5 align-items-center justify-content-between"
                        onClick={() => logout()} to="/">
                        <div><span><i className="fa-solid fa-arrow-right-from-bracket me-3"></i></span>Log out</div>
                        <span><i className="fa-solid fa-chevron-right"></i></span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
