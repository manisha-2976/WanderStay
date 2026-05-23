import React, { lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import './index.css';
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from './components/ProtectedRoute';
import { HostNavbar } from './components/hostDashboard/HostNavbar';
import { BottomNavbar } from './components/hostDashboard/BottomNavbar';

const lazyNamed = (importer, exportName) =>
  lazy(() => importer().then(module => ({ default: module[exportName] })));

const Listings = lazyNamed(() => import('./components/listings/Listings'), 'Listings');
const Show = lazyNamed(() => import('./components/showPage/Show'), 'Show');
const SignUp = lazyNamed(() => import('./components/SignUp'), 'SignUp');
const Login = lazyNamed(() => import('./components/Login'), 'Login');
const Trips = lazyNamed(() => import('./components/profilePage/Trips'), 'Trips');
const Profile = lazyNamed(() => import('./components/profilePage/Profile'), 'Profile');
const NewListing = lazyNamed(() => import('./components/listings/NewListing'), 'NewListing');
const EditListings = lazyNamed(() => import('./components/editListing/EditListings'), 'EditListings');
const Today = lazyNamed(() => import('./components/hostDashboard/Today'), 'Today');
const HostCalendar = lazyNamed(() => import('./components/hostDashboard/HostCalendar'), 'HostCalendar');
const MainCalendar = lazyNamed(() => import('./components/hostDashboard/MainCalendar'), 'MainCalendar');
const HostListings = lazyNamed(() => import('./components/hostDashboard/HostListings'), 'HostListings');
const ImageUpload = lazyNamed(() => import('./components/editListing/ImageUpload'), 'ImageUpload');
const MobileMenu = lazyNamed(() => import('./components/hostDashboard/MobileMenu'), 'MobileMenu');
const PriceSettingsMob = lazyNamed(() => import('./components/hostDashboard/PriceSettingsMob'), 'PriceSettingsMob');
const NotFound = lazyNamed(() => import('./components/NotFound'), 'NotFound');

const PageLoader = () => (
  <div className="d-flex justify-content-center align-items-center py-5">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

export const App = () => {
  const location = useLocation();
  const hideFooter = location.pathname.startsWith("/host/calendar") ||
                     location.pathname.startsWith("/host/listing");
  const showBottomNavbar = location.pathname.startsWith("/host");

  return (
    <>
      <div className='d-flex flex-column min-vh-100'>
        {!location.pathname.startsWith("/host") ? <Navbar /> : <HostNavbar />}

        <main className='flex-grow-1'>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Listings />} />
              <Route path="/search" element={<Listings />} />
              <Route path="/users/signup" element={<SignUp />} />
              <Route path="/users/login" element={<Login />} />
              <Route path="/users/trips" element={<Trips />} />
              <Route path="/users/profile/*" element={<ProtectedRoute> <Profile /> </ProtectedRoute>} />
              <Route path="/host/newListing" element={<ProtectedRoute> <NewListing /> </ProtectedRoute>} />
              <Route path="/listing/:id" element={<Show />} />
              <Route path="/host/listing/:id/edit" element={<ProtectedRoute><EditListings /></ProtectedRoute>} />
              <Route path="/host" element={<ProtectedRoute> <Today /> </ProtectedRoute>} />

              <Route path="/host/calendar/*" element={<HostCalendar />}>
                <Route path="listing/:id" element={<MainCalendar />} />
                <Route path="listing/:id/price-settings" element={<PriceSettingsMob />} />
              </Route>

              <Route path="/host/listings" element={<HostListings />} />
              <Route path="/host/menu" element={<MobileMenu />} />
              <Route path="/host/listing/:id/image/upload/:roomName" element={<ImageUpload />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        {!hideFooter && <Footer />}
      </div>
      {showBottomNavbar && <BottomNavbar />}
    </>
  )
}
