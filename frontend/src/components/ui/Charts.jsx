import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto"; // Correct wrapper for React integration

function Charts() {
  const chartRef1 = useRef(null); // Reference for the first chart canvas
  const chartRef2 = useRef(null); // Reference for the second chart canvas

  useEffect(() => {
    const createChart = (ctx, data, title) => {
      return new Chart(ctx, {
        type: "line", // Chart type (line for curved lines)
        data: {
          labels: data.labels, // X-axis labels
          datasets: data.datasets, // Data for each line
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: "bottom",
            },
            title: {
              display: true,
              text: title,
            },
          },
          interaction: {
            mode: "index",
            intersect: false,
          },
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: "Date/Month",
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: "Value",
              },
              beginAtZero: true,
            },
          },
        },
      });
    };

    // Data for first chart
    const chart1Data = {
      labels: ["Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Total",
          data: [7, 3, 1, 6, 4],
          borderColor: "#0694a2",
          backgroundColor: ["#0694a2"],
          fill: false,
          tension: .4,
        },
        {
          label: "Active",
          data: [1, 1, 1, 2, 1],
          borderColor: "#7e3af2",
          backgroundColor: "#7e3af2",
          fill: false,
          tension: .4,
        },
      ],
    };

    // Data for second chart
    const chart2Data = {
      labels: [
        "2024-08-10",
        "2024-08-21",
        "2024-09-10",
        "2024-10-21",
        "2024-11-04",
        "2024-11-27",
        "2024-12-05",
        "2024-12-09",
      ],
      datasets: [
        {
          label: "Total",
          data: [5, 4, 2, 1, 5, 4, 3, 2],
          borderColor: "#0694a2",
          backgroundColor: "#0694a2",
          fill: false,
          tension: 0.4,
        },
        {
          label: "Active",
          data: [1, 1, 0, 0, 3, 2, 1, 0],
          borderColor: "#7e3af2",
          backgroundColor: "#7e3af2",
          fill: false,
          tension: 0.4,
        },
      ],
    };

    const chart1Ctx = chartRef1.current.getContext("2d");
    const chart2Ctx = chartRef2.current.getContext("2d");

    const chart1 = createChart(chart1Ctx, chart1Data, "Traffic");
    const chart2 = createChart(chart2Ctx, chart2Data, "Per Day User");

    return () => {
      chart1.destroy();
      chart2.destroy();
    };
  }, []);

  return (
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-3">
  {/* Chart 1 */}
  <div className="bg-gray-800 p-4 rounded-lg">
    <div className="flex justify-between items-center mb-2">
      <label htmlFor="month-select" className="text-gray-300 text-sm">Select:</label>
      <select
        name="month"
        id="month-select"
        className="text-gray-900 bg-gray-100 rounded-lg p-2 text-sm"
      >
        <option value="">Month</option>
        <option value="jan">January</option>
        <option value="feb">February</option>
        <option value="mar">March</option>
        {/* Add more options as needed */}
      </select>
    </div>
    <canvas ref={chartRef1} className="w-full h-20 sm:h-48"></canvas>
  </div>
  
  {/* Chart 2 */}
  <div className="bg-gray-800 p-4 rounded-lg">
    <div className="flex justify-between items-center mb-2">
      <label htmlFor="date-range-select" className="text-gray-300 text-sm">Select:</label>
      <select
        name="date-range"
        id="date-range-select"
        className="text-gray-900 bg-gray-100 rounded-lg p-2 text-sm"
      >
        <option value="">Date range</option>
        <option value="week">Last Week</option>
        <option value="month">Last Month</option>
        <option value="year">Last Year</option>
        {/* Add more options as needed */}
      </select>
    </div>
    <canvas ref={chartRef2} className="w-full h-20 sm:h-48"></canvas>
  </div>
</div>

  );
}

export default Charts;
