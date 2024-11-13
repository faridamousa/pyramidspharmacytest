import React, { useState } from "react";
import api from "../api";
import "../styles/medicine.css";

function Medicine({ medicine, getMedicine }) {
  const [showRefillForm, setShowRefillForm] = useState(false);
  const [refillQuantity, setRefillQuantity] = useState("");

  const requestRefill = (e) => {
    e.preventDefault();
    console.log({ medicine: medicine.id, quantity: refillQuantity });
    api
      .post("/api/addRefill/", {
        medicine: medicine.id,
        quantity: refillQuantity,
      })
      .then((res) => {
        if (res.status === 201) alert("Refill request sent!");
        else alert("Failed to request refill.");
        setShowRefillForm(false);
        setRefillQuantity("");
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="medicine-container">
      <p className="medicine-name">Name: {medicine.name}</p>
      <p className="medicine-description">
        Description: {medicine.description}
      </p>
      <p className="medicine-dosage">Dosage: {medicine.dosage}</p>
      <p className="medicine-available_quantity">
        Available quantity: {medicine.available_quantity}
      </p>
      <p className="medicine-date">
        {new Date(medicine.created_at).toLocaleDateString("en-US")}
      </p>

      <button onClick={() => setShowRefillForm(!showRefillForm)}>
        {showRefillForm ? "Cancel Refill" : "Request Refill"}
      </button>

      {showRefillForm && (
        <form onSubmit={requestRefill} className="refill-form">
          <label htmlFor="refillQuantity">Refill Quantity:</label>
          <input
            type="text"
            id="refillQuantity"
            required
            value={refillQuantity}
            onChange={(e) => setRefillQuantity(e.target.value)}
          />
          <input type="submit" value="Submit Refill Request" />
        </form>
      )}
    </div>
  );
}

export default Medicine;
