import React, { useState } from "react";
import styles from "../styles/Dashboard.module.css";
import { useRouter } from "next/router";
import MapView from "../comps/MapView";
import Feedback from "../comps/Feedback";
import { devices } from "../aaa_samples/devices";

function EmployeeDashboard() {
  const router = useRouter();
  const [currentScreen, setCurrentScreen] = useState("");

  const alerts = devices.filter((device) => device.level >= 75);

  const showScreen = () => {
    switch (currentScreen) {
      case "mapView":
        return <MapView />;
      case "feedback":
        return <Feedback />;
      default:
        return null;
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">WBM</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <button className="nav-link" aria-current="page" onClick={() => setCurrentScreen("mapView")}>
              <i className="bi bi-geo-alt-fill"></i> {alerts.length > 0 ? `Bins (${alerts.length})` : 'Bins'}
            </button>
            <button className="nav-link" onClick={() => setCurrentScreen("feedback")}>
              <i className="bi bi-envelope-fill"></i> Feedback
            </button>
            <button className="nav-link" onClick={() => router.push("/")}>
              <i className="bi bi-box-arrow-right"></i> Log Out
            </button>
            </div>
          </div>

        </div>
      </nav>

      <div className="container mt-4">
        {showScreen()}
      </div>
    </>
  );
}

export default EmployeeDashboard;
