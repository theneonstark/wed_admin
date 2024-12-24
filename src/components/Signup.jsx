import React from "react";

const Signup = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Section with Image */}
      <div className="lg:w-1/2 h-full relative">
        <img
          src="/images/flower.webp" // Replace with your actual image URL
          alt="Signup Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section with Form */}
      <div className="lg:w-1/2 flex flex-col justify-center p-6 bg-gray-50">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Grow your Business
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Sign Up to access your Dashboard
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* Brand Name */}
          <div>
            <label className="block text-gray-700 text-sm font-medium">
              Brand name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your brand name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-gray-700 text-sm font-medium">
              City (Choose your base city here)<span className="text-red-500">*</span>
            </label>
            <select
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
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
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select a vendor type</option>
              <option value="photographer">Photographer</option>
              <option value="decorator">Decorator</option>
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
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
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
                className="w-full p-2 border border-gray-300 rounded-r-md focus:ring-blue-500 focus:border-blue-500"
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
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
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
  );
};

export default Signup;
