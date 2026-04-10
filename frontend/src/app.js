import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { NewListing } from './components/listings/NewListing';
import './index.css';
import { Listings } from './components/listings/Listings';
import { Show } from './components/showPage/Show';
import { Route, Routes } from "react-router-dom";
import { NotFound } from './components/NotFound';
import { EditListings } from './components/editListing/EditListings';
import { SignUp } from './components/SignUp';
import { Login } from './components/Login';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Profile } from './components/profilePage/Profile';
import { HostNavbar } from './components/hostDashboard/HostNavbar';
import { Today } from './components/hostDashboard/Today';
import { HostCalendar } from './components/hostDashboard/HostCalendar';
import { MainCalendar } from './components/hostDashboard/MainCalendar';
import { HostListings } from './components/hostDashboard/HostListings';
import { ImageUpload } from './components/editListing/ImageUpload';
import { BottomNavbar } from './components/hostDashboard/BottomNavbar';


export const App = () => {
  const location = useLocation();
  const hideFooter = location.pathname.startsWith("/host/calendar");
  const showBottomNavbar = location.pathname.startsWith("/host");
  return (
    <>
      <div className='d-flex flex-column min-vh-100'>

        {/* {!location.pathname.startsWith("/host") && <Navbar/>} */}
        {!location.pathname.startsWith("/host") ? <Navbar /> : <HostNavbar />}
        {/* {location.pathname.startsWith("/host") ? <BottomNavbar/> : ""} */}

        <main className='flex-grow-1'>
          <Routes>
            <Route path="/" element={<Listings />} />
            <Route path="/users/signup" element={<SignUp />} />
            <Route path="/users/login" element={<Login />} />
            <Route path="/users/profile/*" element={<ProtectedRoute> <Profile /> </ProtectedRoute>} />
            <Route path="/newListing" element={<ProtectedRoute> <NewListing /> </ProtectedRoute>} />
            <Route path="/listing/:id" element={<Show />} />
            <Route path="/host/listing/:id/edit" element={<ProtectedRoute><EditListings /></ProtectedRoute>} />
            <Route path="/host" element={<ProtectedRoute> <Today /> </ProtectedRoute>} />
            <Route path="/host/calendar/*" element={<HostCalendar />}>
              <Route path="listing/:id" element={<MainCalendar />} />
            </Route>
            <Route path="/host/listings" element={<HostListings />} />
            <Route path="/listing/:id/image/upload/:roomName" element={<ImageUpload />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {/* <Footer /> */}
        {!hideFooter && <Footer />}
      </div>
      {showBottomNavbar && <BottomNavbar/>}
    </>
  )
}

