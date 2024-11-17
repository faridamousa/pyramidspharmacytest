import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import api from "../api";
import "../styles/refill.css";
import { useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function RefillRequestsPage() {
  const [chartData, setChartData] = useState(null);
  const navigate = useNavigate();
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
      <div className="button-container">
        <button onClick={() => navigate("/")}>Logout</button>
        <button onClick={() => navigate("/staff")}>Go to dashboard</button>
      </div>
    </div>
  );
}

export default RefillRequestsPage;
