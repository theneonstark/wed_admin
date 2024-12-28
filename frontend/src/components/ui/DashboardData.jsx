import React from "react";

const DashboardData = () => {
  const cards = [
    {
      title: "Total clients",
      value: "19",
      icon: (
        <i className="fas fa-users text-pink-500 bg-pink-100 p-2 rounded-full"></i>
      ),
    },
    {
      title: "Account balance",
      value: "₹ 52595",
      icon: (
        <i className="fas fa-wallet text-pink-500 bg-pink-100 p-2 rounded-full"></i>
      ),
    },
    {
      title: "Total sales",
      value: "10",
      icon: (
        <i className="fas fa-shopping-cart text-pink-500 bg-pink-100 p-2 rounded-full"></i>
      ),
    },
    {
      title: "Queries",
      value: "1",
      icon: (
        <i className="fas fa-comments text-pink-500 bg-pink-100 p-2 rounded-full"></i>
      ),
    },
  ];

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-800 p-4 rounded-lg shadow-md"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              {card.icon}
            </div>
            <div className="ml-4">
              <h2 className="text-sm text-gray-300">{card.title}</h2>
              <p className="text-lg font-semibold text-pink-500">{card.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardData;
