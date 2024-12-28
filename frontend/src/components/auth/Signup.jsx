import React, {useState, useEffect} from "react";
import axios, { Axios } from "axios";
import { vendorDetails, StateConfig } from "../../data";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [states, setStates] = useState([]);
  const [country, setCountry] = useState([]);
  const [formData, setFormData] = useState({
    brand: '',
    city: '',
    state: '',
    type: '',
    email: '',
    mobile: '',
    password: '',
  })

  const navigate = useNavigate();

  const handlechange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post('http://localhost:3500/registration_Vendor', formData,{
          withCredentials: true
        });
        toast.success(res.data.message);
        if (res.data.redirectURL) {
            setTimeout(() => {
                navigate(res.data.redirectURL);
            }, 2000);
        }
    } catch (error) {
        if (error.response && error.response.data) {
            // Backend error response
            toast.error(error.response.data.message || 'An error occurred.');
        } else {
            // Network or other errors
            toast.error('An unexpected error occurred. Please try again.');
        }
    }
};

useEffect(()=>{
  const fetchStates = async () => {
    try {
      const response = await axios.get(StateConfig.url, {headers: StateConfig.headers});
      setStates(response.data)
    }catch (error) {
      // console.error('Error fetching states:', error.message);
    }
  }

  fetchStates()
},[])


useEffect(()=>{
  const fetchCountry = async (state) => {
    try {
      // 
      const response = await axios.get(`${StateConfig.url}/${formData.state}/cities`, {headers: StateConfig.headers});
      setCountry(response.data)
    }catch (error) {
      // console.error('Error fetching country:', error.message);
    }
  }
  fetchCountry()
},[formData.state])


  return (
    <div className="w-full flex justify-center">
    <ToastContainer/>
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
      <div className="lg:w-1/2 flex flex-col justify-start p-6 bg-gradient-to-r from-pink-300 to-pink-400">
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
              name="brand"
              value={formData.brand}
              onChange={handlechange}
            />
          </div>

          {/* State */}
          <div>
            <label className="block text-gray-700 text-sm font-medium">
              State<span className="text-red-500">*</span>
            </label>
            <select
              className="mt-1 block w-full p-2 border outline-none border-gray-300 rounded-md"
              onChange={handlechange}
              name="state"
              value={formData.state}
            >
              <option value="">Select a State</option>
              {states.map((state) =>(
                <option key={state.id} value={state.iso2}>{state.name}</option>
              ))}
              {/* Add more cities here */}
            </select>
          </div>
          
          {/* City */}
          <div>
            <label className="block text-gray-700 text-sm font-medium">
              City (Choose your base city here)<span className="text-red-500">*</span>
            </label>
            <select
              className="mt-1 block w-full p-2 border outline-none border-gray-300 rounded-md"
              onChange={handlechange}
              name="city"
              value={formData.city}
            >
              <option value="">Select a city</option>
              {country.map((city) =>(
                <option key={city.id} value={city.name}>{city.name}</option>
              ))}
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
              name="type"
              value={formData.type}
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
              name="email"
              onChange={handlechange}
              value={formData.email}
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
                name="mobile"
                value={formData.mobile}
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
              name="password"
              value={formData.password}
            />
          </div>

          {/* Continue Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600" 
          >
            Continue.
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
