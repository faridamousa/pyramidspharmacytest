import React, { useEffect, useState } from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import api from "../api";
import "../styles/refill.css";

function RefillRequests() {
  const [chartData, setChartData] = useState(null);
  useEffect(() => {
    api.get("/api/listRefill/").then((res) => {
      const data = res.data;

      const labels = data.map((item) => item.medicine_name);
      const count = data.map((item) => item.refill_count);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: "Total Refill Requests",
            data: count,
            backgroundColor: [
              "rgba(43, 63, 229, 0.8)",
              "rgba(250, 192, 19, 0.8)",
              "rgba(253, 135, 135, 0.8)",
            ],
            borderRadius: 5,
          },
        ],
      });
    });
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="refillRequests-container">
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Refill Requests per Medicine",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}

export default RefillRequests;
