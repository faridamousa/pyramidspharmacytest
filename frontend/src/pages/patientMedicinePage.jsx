import { useState, useEffect } from "react";
import api from "../api";
import PatientMedicine from "../components/patientMedicine";
import "../styles/medicinePage.css";
import { useNavigate } from "react-router-dom";

function PatientMedicinePage() {
  const [medicines, setMedicines] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getMedicine();
  }, []);

  const getMedicine = () => {
    api
      .get("/api/listMedicine/")
      .then((res) => res.data)
      .then((data) => {
        setMedicines(data);
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="medicine-container">
      <h2>Medicines</h2>
      <div className="medicine-list">
        {medicines.map((medicine) => (
          <PatientMedicine
            key={medicine.id}
            medicine={medicine}
            getMedicine={getMedicine}
          />
        ))}
      </div>
      <div className="button">
        <button onClick={() => navigate("/")}>Logout</button>
        <button onClick={() => navigate("/patient")}>
          Go back to dashboard
        </button>
      </div>
    </div>
  );
}

export default PatientMedicinePage;
