import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MapView from "../comps/MapView";
import Feedback from "../comps/Feedback";
import ManageEmployees from "../comps/ManageEmployees";
import Data from "../comps/Data.js";
import { devices } from "../aaa_samples/devices";
import styles from "../styles/Dashboard.module.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';


function EmployeeDashboard() {
  const router = useRouter();
  const [currentScreen, setCurrentScreen] = useState("");
  const [cardContainerStyle, setCardContainerStyle] = useState({display: 'block'})

  const alerts = devices.filter((device) => device.level >= 75 || device.battery < 25);

  const AlertsPanel = ({ alerts }) => {
    return (
      <div className="alerts-panel">
        <h5>Alerts</h5>
        {/* Map through alerts and display them */}
        {alerts.map((alert, index) => (
          <div key={index}>{alert.message}</div>
        ))}
      </div>
    );
  };

  const QuickStats = ({ stats }) => {
    // stats could be an object containing various statistics
    return (
      <div className="quick-stats">
        {/* Render your stats here */}
        <div>Total Bins: {stats.totalBins}</div>
        <div>Full Bins: {stats.fullBins}</div>
        {/* ... other stats */}
      </div>
    );
  };
  

  const RecentActivityFeed = ({ activities }) => {
    return (
      <div className="activity-feed">
        <h5>Recent Activity</h5>
        {/* Map through activities and display them */}
        {activities.map((activity, index) => (
          <div key={index}>{activity.description}</div>
        ))}
      </div>
    );
  };

  // Dashboard cards
  const DashboardCards = () => (
    <div className={styles.dashboard}>
      {/* Card for MapView */}
      <div className={styles.card} onClick={() => setCurrentScreen("mapView")}>
      <i class="bi bi-trash"></i>
        <h3>Bins</h3>
      </div>

      {/* Card for Feedback */}
      <div className={styles.card} onClick={() => setCurrentScreen("feedback")}>
        <i className="bi bi-envelope-fill"></i>
        <h3>Feedback</h3>
      </div>

      {/* Additional cards as needed */}
    </div>
  );


  useEffect(() => {
    if (currentScreen === "") {
      setCardContainerStyle({ display: 'block' });
    } else {
      setCardContainerStyle({ display: 'none' });
    }
  }, [currentScreen]); // Only re-run the effect if currentScreen changes
  
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

  // Call this function to go back to the dashboard view
  const goBackToDashboard = () => {
    setCurrentScreen("");
  };

  const stats = {
    totalBins: 100, // You will replace this with actual data
    fullBins: 25, // You will replace this with actual data
    // ... more stats
  };

  const activities = [
    { description: 'Bin #123 emptied' },
    { description: 'New feedback received' },
    // ... more activities
  ];

  // Example alerts data
  const alertsData = [
    { message: 'Bin #456 is 90% full' },
    { message: 'Bin #789 is 85% full' },
    // ... more alerts
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" onClick={() => setCurrentScreen("")}href="#">WBM</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <button className="nav-link" onClick={() => setCurrentScreen("")}>
              <i className="bi bi-house"></i> Home
            </button>
            <button className="nav-link" aria-current="page" onClick={() => setCurrentScreen("mapView")}>
              <i className="bi bi-trash"></i> {alerts.length > 0 ? `Bins (${alerts.length})` : 'Bins'}
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

      {/* Sidebar with QuickStats, AlertsPanel, and RecentActivityFeed */}
      <div className={styles.sidebar}>
        {/* Quick Stats */}
        <div className={styles['sidebar-panel-item']}>
          <div className={styles.quick_stats}><QuickStats stats={stats} /></div>
        </div>

        {/* Alerts Panel */}
        <div className={styles['sidebar-panel-item']}>
          <div className={styles.alerts_panel}><AlertsPanel alerts={alertsData} /></div>
        </div>

        {/* Recent Activity Feed */}
        <div className={styles['sidebar-panel-item']}>
          <div className={styles.activity_feed}><RecentActivityFeed activities={activities} /></div>
        </div>
      </div>

      
      <div className={`container ${styles.dashboardContainer}`}>
        <div className={styles.cardContainer} style={cardContainerStyle}>
        <DashboardCards />
          {/* ... */}
        </div>



        {/* Render the selected screen */}
        {showScreen()}
      </div>



      
    </>

  );
}

export default EmployeeDashboard;
