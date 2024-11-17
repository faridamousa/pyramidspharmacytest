import { useNavigate } from "react-router-dom";
import "../styles/home.css";

function StaffDashboard() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to the Pharmacists Dashboard</h1>
      <div className="button-container">
        <button onClick={() => navigate("/staff/medicine")}>
          View Medicines
        </button>
        <button onClick={() => navigate("/staff/refill")}>
          Refill Requests Chart
        </button>
        <button onClick={() => navigate("/")}>Logout</button>
      </div>
    </div>
  );
}

export default StaffDashboard;
