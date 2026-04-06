import {React, useContext} from 'react'
import { AuthContext } from "../../context/AuthContext";

export const AboutMe = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className='p-5'>
      <h1 className='about-me mb-4'><b>About me</b></h1>
      <div>
        <p>{user.username}</p>
        <p>{user.email}</p>
      </div>
    </div>
  )
}
