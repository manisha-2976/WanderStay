import { React, useContext } from 'react'
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export const MobileMenu = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <>
      <div className='p-2 d-flex flex-column justify-content-center fw-semibold align-items-center'>

        <div className='userinfo-card gap-2 mt-4 p-1 d-flex justify-content-between'>

          <Link className="nav-link w-50 pt-3 pb-3 border shadow rounded text-center" to="/host/newListing">
            <span><i class="fa-solid fa-person-chalkboard mb-2 fs-1 text-warning"></i></span>
            <p className='p-0 m-0'><b>Become a Host</b></p>
          </Link>

          <Link className="nav-link pt-3 pb-3 w-50 border shadow rounded text-center" to="/users/profile/pastTrips">
            <span><i class="fa-solid fa-briefcase mb-2 fs-1 text-primary"></i></span>
            <p className='p-0 m-0'><b>Past trips</b></p>
          </Link>
        </div>



        <div className='userinfo-card text-start mt-4'>
          {user &&
            <Link className="nav-link mt-3" to="/host">
              <span><i class="fa-brands fa-dropbox me-2"></i></span>Switch to Hosting
            </Link>
          }
          {/* {user &&
            <Link className="nav-link mt-3" to="/">
              <span><i class="fa-regular fa-user me-2"></i></span>Reviews
            </Link>} */}

          {!user &&
            <Link className="nav-link mt-3" to="/users/signup">Sign up</Link>}

          {!user &&
            <Link className="nav-link mt-3" to="/users/login">Log in</Link>}

          {user &&
            <Link className="nav-link mt-3 border-top pt-3" onClick={logout}>
              <span><i className="fa-solid fa-arrow-right-from-bracket me-2"></i></span>Log out
            </Link>}
            
        </div>
      </div>
    </>
  )
}
