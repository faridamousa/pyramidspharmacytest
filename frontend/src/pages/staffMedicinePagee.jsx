import { useState, useEffect } from "react";
import api from "../api";
import StaffMedicine from "../components/staffMedicine";
import "../styles/medicinePage.css";
import { useNavigate } from "react-router-dom";

function StaffMedicinePage() {
  const [medicines, setMedicines] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dosage, setDosage] = useState("");
  const [available_quantity, setAvailable_quantity] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
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

  const createMedicine = (e) => {
    e.preventDefault();
    api
      .post("/api/addMedicine/", {
        name,
        description,
        dosage,
        available_quantity,
      })
      .then((res) => {
        if (res.status === 201) alert("Medicine created!");
        else alert("Failed to create medicine.");
        getMedicine();
        setShowAddForm(false);
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="medicine-container">
      <h2>Medicines</h2>
      <button onClick={() => setShowAddForm(!showAddForm)}>
        {showAddForm ? "Cancel" : "Add Medicine"}
      </button>

      {showAddForm && (
        <form onSubmit={createMedicine} className="medicine-form">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <label htmlFor="dosage">Dosage:</label>
          <input
            type="text"
            id="dosage"
            required
            onChange={(e) => setDosage(e.target.value)}
            value={dosage}
          />

          <label htmlFor="available_quantity">Available Quantity:</label>
          <input
            type="text"
            id="available_quantity"
            required
            onChange={(e) => setAvailable_quantity(e.target.value)}
            value={available_quantity}
          />

          <input type="submit" value="Submit" />
        </form>
      )}

      <div className="medicine-list">
        {medicines.map((medicine) => (
          <StaffMedicine
            key={medicine.id}
            medicine={medicine}
            getMedicine={getMedicine}
          />
        ))}
      </div>
      <div className="button">
        <button onClick={() => navigate("/")}>Logout</button>
      </div>
      <div className="button">
        <button onClick={() => navigate("/staff")}>Go to dashboard</button>
      </div>
    </div>
  );
}

export default StaffMedicinePage;
