import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../components/Dashboard';
import VendorDashboard from '../components/VendorDashboard';
import Signup from '../components/auth/Signup';
import Info from '../components/ui/Info';
import Projects from '../components/ui/Projects';
import Membership from '../components/ui/Membership';
import GoogleBusiness from '../components/ui/GoogleBusiness';
import Reviews from '../components/ui/Reviews';

function AppRoute() {
  return (
    <Routes>
        {/* <Route path="/" element={< />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        { /*<Route path="/vendor-dashboard" element={<VendorDashboard />} /> */ }
        <Route path="/VendorDashboard" element={<VendorDashboard />}>
            <Route path='info' element={<Info />} />
            <Route path='project' element={<Projects />} />
            <Route path='membership' element={<Membership />} />
            <Route path='review' element={<Reviews />} />
            <Route path='GoogleBusiness' element={<GoogleBusiness />} />
        </Route>
    </Routes>
  )
}

export default AppRoute
