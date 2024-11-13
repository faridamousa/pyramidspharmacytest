import { useNavigate } from "react-router-dom";
import "../styles/home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to the Pharmacy Dashboard</h1>
      <div className="button-container">
        <button onClick={() => navigate("/medicine")}>View Medicines</button>
        <button onClick={() => navigate("/refill")}>
          Refill Requests Chart
        </button>
      </div>
    </div>
  );
}

export default Home;
