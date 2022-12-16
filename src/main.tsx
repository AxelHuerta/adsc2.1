import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// nos permite dar funcionalidad a los enlaces de forma SPA
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importación páginas
import Layout from "./base/Layout";
import HomePage from "./pages/HomePage";
import PatientsPage from "./pages/PatientsPage";
import AppontmentsPage from "./pages/AppiontmentsPage";
import RequestsPage from "./pages/RequestsPage";
import AddPatientPage from "./pages/AddPatientPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div style={{ display: "flex", height: "100vh" }}>
      <BrowserRouter>
        <Routes>
          {/* menu lateral */}
          <Route path="/" element={<Layout />}>
            {/* páginas */}
            <Route path="/Home" element={<HomePage />} />
            <Route path="/Patients" element={<PatientsPage />} />
            <Route path="/Appointments" element={<AppontmentsPage />} />
            <Route path="/Requests" element={<RequestsPage />} />
            <Route path="/AddPatient" element={<AddPatientPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
