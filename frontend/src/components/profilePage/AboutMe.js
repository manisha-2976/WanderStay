import { React, useContext } from 'react'
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { MobileMenu } from './MobileMenu';

export const AboutMe = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className='about-container mt-4'>
      <div className='p-2 pb-5 d-flex flex-column justify-content-center  fw-semibold align-items-center  border-bottom'>

        <div className='userinfo-card p-5 rounded-4 shadow border d-flex justify-content-center flex-column align-items-center'>
          <p><span className='username p-4'>{user.username[0].toUpperCase()}</span></p>
          <p className='mt-3'>{user.firstName} {user.lastName}</p>
          <p>{user.email}</p>
        </div>
      </div>

      <div className='d-flex gap-2 mt-4 review-container'>
        <span><i class="fa-regular fa-comments"></i></span>
        <h6>Reviews I've written</h6>
      </div>
      <div className='menu mb-5'><MobileMenu /></div>
    </div>
  )
}
