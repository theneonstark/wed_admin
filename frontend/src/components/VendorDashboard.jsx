import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import VendorSidebar from "./ui/VendorSidebar";

function VendorDashboard() {
  const [vendor, setVendor] = useState(null); // To store user data
  const navigate = useNavigate(); // To redirect unauthorized users

  useEffect(() => {
      const fetchDashboard = async () => {
          try {
              const response = await axios.get('http://localhost:3500/VendorDashboard/info',{
                withCredentials: true,
              });
                console.log(response);
                setVendor(response.data.user);
                
              if (response.status === 200) {
              }
          } catch (error) {
              console.error('Error fetching dashboard:', error.response?.data?.message || error.message);
              navigate('/signup');
          }
      };
      fetchDashboard();
  }, [navigate]);

  if (!vendor) {
      return <p>Loading...</p>; // Show a loading message while fetching user data
  }

  return (
    <div className="flex justify-center mt-10 gap-2">
      <div className="flex-none">
        <VendorSidebar />
      </div>
      <div className="flex-1 ">
        <Outlet/>
      </div>
    </div>
  );
}

export default VendorDashboard;
