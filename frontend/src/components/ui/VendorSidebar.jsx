import React from 'react'
import { Link } from 'react-router-dom'

function VendorSidebar() {
  return (
    <div className="w-64 sticky top-10 bg-white rounded-md shadow-md p-4 space-y-4">
      <div className="font-semibold text-lg">Vendor Name</div>
      <ul className="space-y-2 flex flex-col">
        <Link to="/VendorDashboard/info" className="hover:text-pink-500 cursor-pointer">Information</Link>
        <Link to="/VendorDashboard/project" className="hover:text-pink-500 cursor-pointer">Projects</Link>
        <Link to="/VendorDashboard/membership" className="hover:text-pink-500 cursor-pointer">Membership Plans</Link>
        <Link to="/VendorDashboard/review" className="hover:text-pink-500 cursor-pointer">Reviews</Link>
        <Link to="/VendorDashboard/GoogleBusiness" className="hover:text-pink-500 cursor-pointer">Google My Business</Link>
      </ul>
      <div className="bg-pink-200 text-center p-4 rounded-md">
        <p>We're now on India's favorite wedding planning portal</p>
      </div>
      <button className="w-full bg-blue-600 text-white py-2 rounded-md">Share on Facebook</button>
      <div className="text-gray-500 mt-4">
        WMG Support <br />
        0124-XXXXXXX
      </div>
    </div>

  )
}

export default VendorSidebar
