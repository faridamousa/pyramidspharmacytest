import React, { useState } from "react";
import api from "../api";
import "../styles/medicine.css";

function StaffMedicine({ medicine, getMedicine }) {
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
    </div>
  );
}

export default StaffMedicine;
