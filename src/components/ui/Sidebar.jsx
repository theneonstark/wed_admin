import React, { useState } from "react";
import 'boxicons';

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
                <a href="#" className="block hover:bg-gray-700 px-4 py-2">
                Total Vendors
                </a>
                <a href="#" className="block hover:bg-gray-700 px-4 py-2">
                Vendors Data
                </a>
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
                <a href="#" className="block hover:bg-gray-700 px-4 py-2">Users</a>
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
                <a href="#" className="block hover:bg-gray-700 px-4 py-2">Payments</a>
                <a href="#" className="block hover:bg-gray-700 px-4 py-2">Payouts</a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-4">
        <h1 className="text-2xl font-bold">Main Content</h1>
        <p className="mt-2 text-gray-600">
          This is the main content area. Resize the sidebar to see it in action.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
