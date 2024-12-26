import React from "react";

function Info() {
  return (
    <div className="bg-white shadow-md p-6 rounded-md mb-6">
      <h2 className="text-3xl font-semibold mb-4">Profile Analytics</h2>
      <div className="grid grid-cols-3 gap-4 text-center text-gray-600">
        <div>
          <p className="text-2xl font-bold">0</p>
          <p>Leads</p>
        </div>
        <div>
          <p className="text-2xl font-bold">0</p>
          <p>Love Count</p>
        </div>
        <div>
          <p className="text-2xl font-bold">0</p>
          <p>Page Views</p>
        </div>
      </div>
      <div className="mt-6">
        <p className="text-gray-500">10% Complete</p>
        <div className="w-full bg-gray-200 h-2 rounded-md overflow-hidden">
          <div className="bg-pink-500 h-full w-1/10"></div>
        </div>
      </div>
      <div className="mt-6 p-10 border-2 rounded-md">
        <h1>Complete your profile by:</h1>
        <div className="mt-4 pl-10">
          <ul className="leading-9 list-disc">
            <li>Answering your FAQs</li>
            <li>Linking your profile to your Facebook page/website</li>
            <li>Adding images to your portfolio</li>
            <li>
              Get feature in a Real Wedding. Email your work to
              example@gmail.com
            </li>
            <li>
              Upload your first album to get visibility on our inspiration
              gallery and social media handles
            </li>
            <li>Invite clients to review your work</li>
          </ul>
        </div>
      </div>

      <div className="my-10">
        {/* form section start */}
        <div className="mt-2">
          <form action="">
            <h1 className="text-3xl font-semibold mb-4">Personal Information</h1>
            {/* email id section start*/}
            <div className="flex items-center">
              <label className="w-4/12 block text-gray-700 text-sm font-medium">
                Login email ID
              </label>
              <input
                type="text"
                placeholder="Enter your brand name"
                className="mt-1 block w-full p-2 border outline-none border-gray-300 rounded-md"
                name="brand"
                value=""
              />
            </div>
            {/* email id section end */}

            {/* brand name section start */}
            <div className="flex items-center">
              <label className="w-4/12 block text-gray-700 text-sm font-medium">
                Brand Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your brand name"
                className="mt-1 block w-full p-2 border outline-none border-gray-300 rounded-md"
                name="brand"
                value=""
              />
            </div>
            {/* brand name section end */}

            {/* additional email section start*/}
            <div className="flex items-center">
              <label className="w-4/12 block text-gray-700 text-sm font-medium">
                Additional email ID
              </label>
              <input
                type="text"
                placeholder="Enter your brand name"
                className="mt-1 block w-full p-2 border outline-none border-gray-300 rounded-md"
                name="brand"
                value=""
              />
            </div>
            {/* additional email section end */}

            {/* contact section start */}
            <div className="flex items-center">
              <label className="w-4/12 block text-gray-700 text-sm font-medium">
                Contact person name
              </label>
              <div className="flex items-center space-x-4">
                {/* Country Flag & Code */}
                <div className=" flex items-center border rounded-l-md px-2 bg-gray-100">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
                    alt="India"
                    className="w-5 h-5 mr-2"
                  />
                  <span className="text-sm font-medium">+91</span>
                </div>

                {/* Input Field */}
                <input
                  type="text"
                  placeholder="Contact number"
                  className="border-t border-b border-r rounded-r-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 flex-1"
                  defaultValue="+91 97172 01964"
                />

                {/* Dropdown */}
                <select className="border rounded-md px-2 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500">
                  <option>Mobile</option>
                  <option>Home</option>
                  <option>Work</option>
                </select>

                {/* Add More */}
                <button className="text-pink-500 font-semibold hover:underline">
                  + ADD MORE
                </button>
              </div>
            </div>
            {/* contact section end */}

            {/* social media section start */}
            {/* website url section start */}
            <div className="flex items-center">
              <label className="w-4/12 block text-gray-700 text-sm font-medium">
                Website link
              </label>
              <input
                type="text"
                placeholder="Enter your brand name"
                className="mt-1 block w-full p-2 border outline-none border-gray-300 rounded-md"
                name="brand"
                value=""
              />
            </div>
            {/* website url section end */}
            {/* facebook section start */}
            <div className="flex items-center">
              <label className="w-4/12 block text-gray-700 text-sm font-medium">
                Facebook url
              </label>
              <input
                type="text"
                placeholder="Enter your brand name"
                className="mt-1 block w-full p-2 border outline-none border-gray-300 rounded-md"
                name="brand"
                value=""
              />
            </div>
            {/* facebook section end */}
            {/* instagram section start */}
            <div className="flex items-center">
              <label className="w-4/12 block text-gray-700 text-sm font-medium">
                Instagram url
              </label>
              <input
                type="text"
                placeholder="Enter your brand name"
                className="mt-1 block w-full p-2 border outline-none border-gray-300 rounded-md"
                name="brand"
                value=""
              />
            </div>
            {/* instagram section end */}
            {/* youtube section start */}
            <div className="flex items-center">
              <label className="w-4/12 block text-gray-700 text-sm font-medium">
                Youtube/Vimeo url
              </label>
              <input
                type="text"
                placeholder="Enter your brand name"
                className="mt-1 block w-full p-2 border outline-none border-gray-300 rounded-md"
                name="brand"
                value=""
              />
            </div>
            {/* youtube section end */}
            {/* website url section end */}

            {/* add info section start */}
            <div className="flex items-center">
              <label className="w-4/12 block text-gray-700 text-sm font-medium">
                Additional Information <br />
                (To update your description, please send a mail to vendor@gmail.com)
              </label>
              <textarea
                type="text"
                placeholder="Enter your brand name"
                className="mt-1 block w-full p-2 border outline-none border-gray-300 rounded-md resize-none"
                name="brand"
                value=""
                rows={5}
              />
            </div>
            {/* add info section end */}

            {/* city section start */}
            <div className="flex items-center">
              <label className="w-4/12 block text-gray-700 text-sm font-medium">
                City <span>*(Choose your base city here)</span>
              </label>
              <input
                type="text"
                placeholder="Enter your brand name"
                className="mt-1 block w-full p-2 border outline-none border-gray-300 rounded-md"
                name="brand"
                value=""
              />
            </div>
            {/* city section end */}

            {/* address section start */}
            <div className="flex items-center">
              <label className="w-4/12 block text-gray-700 text-sm font-medium">
                Address
              </label>
              <button className="bg-pink-400">Add</button>
            </div>
            {/* address section end */}


            <h1 className="text-3xl font-semibold my-4">Additional Details</h1>

            <div className="flex flex-col items-start ">
              <label className="block text-gray-700 text-lg my-2 font-medium">
                What do your starting prices for 1 day of cinema range from ?
              </label>
              <input
                type="text"
                placeholder="Enter your brand name"
                className="mt-1 block w-full p-2 border outline-none border-gray-300 rounded-md"
                name="brand"
                value=""
              />
            </div>
            <div className="my-4 py-4 border-t-2 border-b-2 flex flex-col items-start">
              <label className="w-4/12 block text-gray-700 text-lg font-medium my-2">
                What is your USP ?
              </label>
              <textarea
                type="text"
                placeholder="Enter your brand name"
                className="mt-1 block w-full p-2 border outline-none resize-none border-gray-300 rounded-md"
                name="brand"
                value=""
                rows={5}
              />
            </div>
            <div className="flex flex-col gap-4 items-start">
              <label className="block text-gray-700 text-lg font-medium">
                Which of the following do you offer?
              </label>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="cinema"
                  name="cinema"
                  className="form-checkbox h-4 w-4 text-pink-500"
                />
                <label className="ml-2 block text-sm font-medium text-gray-700">
                  Lip Dub Videos
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="cinema"
                  name="cinema"
                  className="form-checkbox h-4 w-4 text-pink-500"
                />
                <label className="ml-2 block text-sm font-medium text-gray-700">
                  Save the Date Video
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="cinema"
                  name="cinema"
                  className="form-checkbox h-4 w-4 text-pink-500"
                />
                <label className="ml-2 block text-sm font-medium text-gray-700">
                  Wedding Films
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="cinema"
                  name="cinema"
                  className="form-checkbox h-4 w-4 text-pink-500"
                />
                <label className="ml-2 block text-sm font-medium text-gray-700">
                  Teaser Video
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="cinema"
                  name="cinema"
                  className="form-checkbox h-4 w-4 text-pink-500"
                />
                <label className="ml-2 block text-sm font-medium text-gray-700">
                  Still Photography
                </label>
              </div>
            </div>


            <div className="flex flex-col gap-4 items-start">
              <label className="block text-gray-700 mt-4 text-lg font-medium">
                What are your payment terms ?
              </label>
              <div className="flex gap items-center">
                <input
                  type="radio"
                  id="cinema"
                  name="cinema"
                  className="form-checkbox h-4 w-4 text-pink-500"
                />
                <label className="ml-2 block text-sm font-medium text-gray-700">
                  25% advance
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="cinema"
                  name="cinema"
                  className="form-checkbox h-4 w-4 text-pink-500"
                />
                <label className="ml-2 block text-sm font-medium text-gray-700">
                  50% advance
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="cinema"
                  name="cinema"
                  className="form-checkbox h-4 w-4 text-pink-500"
                />
                <label className="ml-2 block text-sm font-medium text-gray-700">
                  75% advance
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="cinema"
                  name="cinema"
                  className="form-checkbox h-4 w-4 text-pink-500"
                />
                <label className="ml-2 block text-sm font-medium text-gray-700">
                  100% advance
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-start ">
              <label className="block text-gray-700 text-lg font-medium">
                In which year did you start your business ?
              </label>
              <input
                type="text"
                placeholder="Enter your brand name"
                className="mt-1 block w-full p-2 border outline-none border-gray-300 rounded-md"
                name="brand"
                value=""
              />
            </div>
            <div className="flex flex-col gap-2 mt-2 items-start ">
              <label className="block text-gray-700 text-lg font-medium">
                How many weeks in advance should a booking be made ?
              </label>
              <input
                type="text"
                placeholder="Enter your brand name"
                className="mt-1 block w-full p-2 border outline-none border-gray-300 rounded-md"
                name="brand"
                value=""
              />
            </div>
            <div className="flex flex-col items-start gap-2 mt-2 ">
              <label className="block text-gray-700 text-lg font-medium">
                How many weeks you take to deliver the final video
              </label>
              <input
                type="text"
                placeholder="Enter your brand name"
                className="mt-1 block w-full p-2 border outline-none border-gray-300 rounded-md"
                name="brand"
                value=""
              />
            </div>
            <div className="flex justify-end items-end mt-4">
              <button className="text-xl text-white bg-pink-400 px-24 py-3">Save</button>
            </div>
          </form>
        </div>
        {/* form section end */}
      </div>
    </div>
  );
}

export default Info;
