import React, {useState, useEffect} from "react";
import axios, { Axios } from "axios";
import { vendorDetails } from "../data";


const Signup = () => {
  const [formData, setFormData] = useState({
    brand: '',
    state: '',
    type: '',
    email: '',
    phone: '',
    password: '',
  })
  const handlechange = (e) => {
    const {name, value} = e.target.value;
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3500/registration_Vendor', formData);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="flex">
      {/* Left Section with Image */}
      <div className="hidden lg:block">
        <img
          src="/images/bridal.webp" // Replace with your actual image URL
          alt="Signup Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section with Form */}
      <div className="lg:w-1/2 flex flex-col text-white justify-start p-6 bg-gradient-to-r from-pink-300 to-pink-400">
        <h1 className="text-2xl font-semibold  mb-4">
          Grow your Business
        </h1>
        <p className="text-sm mb-6">
          Sign Up to access your Dashboard
        </p>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Brand Name */}
          <div>
            <label className="block text-gray-700 text-sm font-medium">
              Brand name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your brand name"
              className="mt-1 block w-full p-2 border outline-none border-gray-300 rounded-md"
              onChange={handlechange}
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-gray-700 text-sm font-medium">
              City (Choose your base city here)<span className="text-red-500">*</span>
            </label>
            <select
              className="mt-1 block w-full p-2 border outline-none border-gray-300 rounded-md"
              onChange={handlechange}
            >
              <option value="">Select a city</option>
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
              {/* Add more cities here */}
            </select>
          </div>

          {/* Vendor Type */}
          <div>
            <label className="block text-gray-700 text-sm font-medium">
              Select Vendor Type<span className="text-red-500">*</span>
            </label>
            <select
              className="mt-1 block w-full p-2 border outline-none border-gray-300 rounded-md"
              onChange={handlechange}
            >
              <option value="">Select a vendor type</option>
              {vendorDetails.map((vendors, key)=>(
                <option key={key} value={vendors.type}>{vendors.type}</option>
              ))}
              {/* Add more vendor types here */}
            </select>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 text-sm font-medium">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 block w-full p-2 border outline-none border-gray-300 rounded-md"
              onChange={handlechange}
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 text-sm font-medium">
              Phone<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center mt-1">
              <span className="p-2 bg-gray-200 border border-gray-300 rounded-l-md">
                +91
              </span>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full p-2 border outline-none border-gray-300 rounded-r-md"
                onChange={handlechange}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 text-sm font-medium">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 block w-full outline-none p-2 border border-gray-300 rounded-md"
              onChange={handlechange}
            />
          </div>

          {/* Continue Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600" 
          >
            Continue
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-6 flex justify-between text-sm text-gray-500">
          <a href="#" className="hover:underline">
            Already have an account? Sign in
          </a>
          <a
            href="#"
            className="text-pink-500 hover:underline font-medium"
          >
            Customer Sign In
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Signup;
