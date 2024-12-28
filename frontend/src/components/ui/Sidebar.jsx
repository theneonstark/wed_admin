import React, { useState } from "react";
import 'boxicons';
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`
          ${isOpen ? "w-64" : "w-16"}
          bg-gray-800 text-white transition-all duration-300
          flex flex-col h-full
        `}
      >
        <button
          onClick={toggleSidebar}
          className="p-2 focus:outline-none hover:bg-gray-700"
        >
          {isOpen ? "Adminstrator" : <box-icon name='user' color='#ffffff' ></box-icon>}
        </button>

        <div className="mt-4 flex flex-col">
          <div>
            <button
              onClick={() => toggleMenu("dashboard")}
              className="w-full inline-flex gap-3 items-center px-4 py-2 text-left hover:bg-gray-700"
            >
              <box-icon name='line-chart' color='#ffffff' ></box-icon>
              {isOpen ? "Dashboard" : null}
            </button>
            {activeMenu === "dashboard" && (
              <div className="ml-4 mt-2 space-y-2">
                <Link to="/Dashboard/Overview" className="inline-flex items-center gap-1 hover:bg-gray-700 px-4 py-2">
                <box-icon name='chart' color='#ffffff' ></box-icon>
                Overview
                </Link>
                <Link to="/Dashboard/TotalVendor" className="inline-flex items-center gap-1 hover:bg-gray-700 px-4 py-2">
                <box-icon name='chart' color='#ffffff' ></box-icon>
                Total Vendors
                </Link>
                <Link to="/Dashboard/VendorData" className="inline-flex items-center gap-1 hover:bg-gray-700 px-4 py-2">
                <box-icon name='user-detail' type='solid' color='#ffffff' ></box-icon>
                Vendors Data
                </Link>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleMenu("userData")}
              className="w-full inline-flex gap-3 items-center px-4 py-2 text-left hover:bg-gray-700"
            >
            <box-icon name='user-circle' color='#ffffff' ></box-icon>
              {isOpen ? "User Data" : null}
            </button>
            {activeMenu === "userData" && (
              <div className="ml-4 mt-2 space-y-2">
                <Link to="/UserData/Users" className="inline-flex items-center gap-1 hover:bg-gray-700 px-4 py-2">
                <box-icon name='user-check' color='#ffffff' ></box-icon>
                Users
                </Link>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleMenu("paymentData")}
              className="w-full inline-flex gap-3 items-center px-4 py-2 text-left hover:bg-gray-700"
            >
            <box-icon name='wallet-alt' color='#ffffff' ></box-icon>
              {isOpen? "Payment Data" : null}
            </button>
            {activeMenu === "paymentData" && (
              <div className="ml-4 mt-2 space-y-2">
                <Link to="#" className="block hover:bg-gray-700 px-4 py-2">Payments</Link>
                <Link to="#" className="block hover:bg-gray-700 px-4 py-2">Payouts</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
