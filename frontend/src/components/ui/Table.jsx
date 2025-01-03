import React, { useState, useEffect } from "react";

function Table({ usersDetails, usersDateFilters, usersMonthFilters }) {
  const [usersData, setUsersData] = useState([]);
  const [dateFilters, setDateFilters] = useState([]);
  const [monthFilters, setMonthFilters] = useState([]);

  useEffect(() => {
    // Populate data from props or an API fetch
    if (usersDetails) {
      setUsersData(usersDetails);
    }
    if (usersDateFilters) {
      setDateFilters(usersDateFilters);
    }
    if (usersMonthFilters) {
      setMonthFilters(usersMonthFilters);
    }
  }, [usersDetails, usersDateFilters, usersMonthFilters]);

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-xs">
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-no-wrap">
          <thead>
            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
              <th className="px-4 py-3">Client</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Created Date</th>
              <th className="px-4 py-3">Update Date</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
            {usersData.map((person, index) => (
              <tr key={index} className="text-gray-700 dark:text-gray-400">
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src={
                          person.profile_img === "user_profile.jpg"
                            ? `../image/users/${person.profile_img}`
                            : person.profile_img
                        }
                        alt=""
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p className="font-semibold">{person.name}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {person.dept_name}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">$ 863.45</td>
                <td className="px-4 py-3 text-xs">
                  <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                    {person.created_at?.slice(0, 10)}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">
                  <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600">
                    {person.updated_at?.slice(0, 10)}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center space-x-4 text-sm">
                    <a href={`user_profile_details.php?id=${person.id}`}>
                      <button
                        className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                        aria-label="Edit"
                      >
                        <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                        </svg>
                      </button>
                    </a>
                    <form method="POST">
                      <input type="hidden" value={person.cart} name="cart" />
                      <input type="hidden" value={person.wishlist} name="wishlist" />
                      <button
                        className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                        aria-label="Delete"
                        name="delete"
                        value={person.id}
                      >
                        <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        {dateFilters.map((filter, index) => (
          <div key={index}>
            <input type="hidden" value={filter.day} className="fetch_per_day" />
            <input
              type="hidden"
              value={filter.new_users}
              className="fetch_new_user"
            />
          </div>
        ))}
        {monthFilters.map((filter, index) => (
          <div key={index}>
            <input
              type="hidden"
              value={new Date(filter.month).toLocaleString("default", {
                month: "short",
              })}
              className="fetch_per_month"
            />
            <input
              type="hidden"
              value={filter.total_users}
              className="fetch_monthly_users"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Table;
