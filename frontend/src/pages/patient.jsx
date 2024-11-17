import { useNavigate } from "react-router-dom";
import "../styles/home.css";

function PatientDashboard() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to the Patient Dashboard</h1>
      <div className="button-container">
        <button onClick={() => navigate("/patient/medicine")}>
          View Medicines
        </button>
        <button onClick={() => navigate("/")}>Logout</button>
      </div>
    </div>
  );
}

export default PatientDashboard;
