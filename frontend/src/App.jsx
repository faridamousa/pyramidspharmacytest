import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import StaffDashboard from "./pages/staff";
import ProtectedRoute from "./components/protectedRoute";
import RefillRequestsPage from "./pages/refill";
import PatientDashboard from "./pages/patient";
import StaffMedicinePage from "./pages/staffMedicinePagee";
import PatientMedicinePage from "./pages/patientMedicinePage";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login"></Navigate>;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/staff/dashboard"
          element={
            <ProtectedRoute role="is_staff">
              <StaffDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/patient/dashboard"
          element={
            <ProtectedRoute role="is_patient">
              <PatientDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="/staff" element={<StaffDashboard />} />
        <Route path="/staff/medicine" element={<StaffMedicinePage />} />
        <Route path="/staff/refill" element={<RefillRequestsPage />} />

        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/patient/medicine" element={<PatientMedicinePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
