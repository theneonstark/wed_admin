import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from '../components/Dashboard';
import VendorDashboard from '../components/VendorDashboard';
import Signup from '../components/auth/Signup';
import Info from '../components/ui/Info';
import Projects from '../components/ui/Projects';
import Membership from '../components/ui/Membership';
import GoogleBusiness from '../components/ui/GoogleBusiness';
import Reviews from '../components/ui/Reviews';
import TotalVendor from '../components/ui/TotalVendor';
import VendorsData from '../components/ui/VendorsData';
import Users from '../components/ui/Users';
import UserData from '../components/UserData';
import DashboardData from '../components/ui/DashboardData';

function AppRoute() {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/Dashboard" replace />} />
        <Route path="/Dashboard" element={<Dashboard />}>
          <Route path='Overview' element={<DashboardData/>}/>
          <Route path='TotalVendor' element={<TotalVendor/>}/>
          <Route path='VendorData' element={<VendorsData/>} />
        </Route>
        <Route path='/UserData' element={<UserData/>} >
          <Route path='Users' element={<UserData/>} />
        </Route>

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
